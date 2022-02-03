<?php

namespace Automattic\VIP\Search;

class Dashboard {
	public function __construct() {
		add_action( 'admin_menu', '\ElasticPress\Dashboard\action_admin_menu' );
		add_action( 'admin_menu', array( __CLASS__, 'admin_menu' ) );
		add_action( 'network_admin_menu', array( __CLASS__, 'network_admin_menu' ) );
		add_action( 'admin_bar_menu', array( __CLASS__, 'admin_bar_menu' ), 60 );
		add_action( 'admin_print_styles', array( __CLASS__, 'hide_unsupported_features' ) );
	}

	public static function hide_unsupported_features() {
		$screen = get_current_screen();
		if ( 'toplevel_page_elasticpress' === $screen->base ) {
			// Hide features that aren't supported from UI.
			echo '<style>
			div.ep-feature.ep-feature-autosuggest, div.ep-feature.ep-feature-documents, div.ep-feature.ep-feature-woocommerce {
				display: none !important;
			}
			</style>';
		}
	}

	public static function admin_menu() {
		remove_submenu_page( 'elasticpress', 'elasticpress-settings' );
		remove_submenu_page( 'elasticpress', 'elasticpress-health' );
	}

	public static function network_admin_menu() {
		remove_menu_page( 'elasticpress' );
	}

	/**
	 * Disable the Elasticpress Network Dashboard link
	 */
	public static function admin_bar_menu( $admin_bar ) {
		$admin_bar->remove_menu( 'network-admin-elasticpress' );
	}
}

new Dashboard();
