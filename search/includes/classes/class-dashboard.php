<?php

namespace Automattic\VIP\Search;

class Dashboard {
	public function __construct() {
		add_action( 'admin_menu', '\ElasticPress\Dashboard\action_admin_menu' );
		add_action( 'admin_menu', array( __CLASS__, 'admin_menu' ) );
		add_action( 'admin_bar_menu', array( __CLASS__, 'admin_bar_menu' ), 60 );
	}

	public function admin_menu() {
		remove_submenu_page( 'elasticpress', 'elasticpress-settings' );
		remove_submenu_page( 'elasticpress', 'elasticpress-health' );
	}

	/**
	 * Disable the Elasticpress Network Dashboard link
	 */
	public static function admin_bar_menu( $admin_bar ) {
		$admin_bar->remove_menu( 'network-admin-elasticpress' );
	}
}

new Dashboard();
