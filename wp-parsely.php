<?php
/*
 * Plugin Name: VIP Parse.ly Integration
 * Plugin URI: https://parse.ly
 * Description: Content analytics made easy. Parse.ly gives creators, marketers and developers the tools to understand content performance, prove content value, and deliver tailored content experiences that drive meaningful results.
 * Author: Automattic
 * Version: 1.0
 * Author URI: https://wpvip.com/
 * License: GPL2+
 * Text Domain: wp-parsely
 * Domain Path: /languages/
 */

namespace Automattic\VIP\WP_Parsely_Integration;

// The default version is the first entry in the SUPPORTED_VERSIONS list.
const SUPPORTED_VERSIONS = [
	'2.5',
];

function maybe_load_plugin() {
	global $parsely;

	/**
	 * Sourcing the wp-parsely plugin via mu-plugins is generally opt-in.
	 * To enable it on your site, add this line:
	 *
	 * add_filter( 'wpvip_parsely_load_mu', '__return_true' );
	 *
	 * We enable it for some sites via the `_wpvip_parsely_mu` blog option.
	 * To prevent it from loading even when this condition is met, add this line:
	 *
	 * add_filter( 'wpvip_parsely_load_mu', '__return_false' );
	 */
	if ( ! apply_filters( 'wpvip_parsely_load_mu', get_option( '_wpvip_parsely_mu' ) === '1' ) ) {
		return;
	}

	// Bail if the plugin has already initialized elsewhere
	if ( class_exists( 'Parsely' ) ) {
		return;
	}

	$versions_to_try = SUPPORTED_VERSIONS;

	/**
	 * Allows specifying a major version of the plugin per-site.
	 * If the version is invalid, the default version will be used.
	 */
	$specified_version = apply_filters( 'wpvip_parsely_version', false );

	if ( $specified_version ) {
		if ( in_array( $specified_version, SUPPORTED_VERSIONS ) ) {
			array_unshift( $versions_to_try, $specified_version );
			$versions_to_try = array_unique( $versions_to_try );
		} else {
			trigger_error(
				sprintf( 'Invalid value configured via wpvip_parsely_version filter: %s', esc_html( $specified_version ) ),
				E_USER_WARNING
			);
		}
	}

	foreach ( $versions_to_try as $version ) {
		$entry_file = __DIR__ . '/wp-parsely-' . $version . '/wp-parsely.php';
		if ( ! is_readable( $entry_file ) ) {
			continue;
		}

		require $entry_file;

		// If the plugin was loaded solely by the option, hide the UI (for now)
		if ( apply_filters( 'wpvip_parsely_hide_ui_for_mu', ! has_filter( 'wpvip_parsely_load_mu' ) ) ) {
			remove_action( 'admin_menu', array( $parsely, 'add_settings_sub_menu' ) );
			remove_action( 'admin_footer', array( $parsely, 'display_admin_warning' ) );
			remove_action( 'widgets_init', 'parsely_recommended_widget_register' );
			remove_filter( 'page_row_actions', array( $parsely, 'row_actions_add_parsely_link' ) );
			remove_filter( 'post_row_actions', array( $parsely, 'row_actions_add_parsely_link' ) );
		}
		return;
	}
}
add_action( 'after_setup_theme', __NAMESPACE__ . '\maybe_load_plugin' );