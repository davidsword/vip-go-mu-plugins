<?php

namespace Automattic\VIP\Search;

class Dashboard {
	public function __construct() {
		add_action( 'admin_menu', '\ElasticPress\Dashboard\action_admin_menu' );
		add_action( 'network_admin_menu', array( __CLASS__, 'network_admin_menu' ) );
		add_action( 'admin_bar_menu', array( __CLASS__, 'admin_bar_menu' ), 60 );
	}

	public function admin_menu() {
		remove_submenu_page( 'elasticpress', 'elasticpress-settings' );
		remove_submenu_page( 'elasticpress', 'elasticpress-health' );
	}

	public function network_admin_menu() {
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
