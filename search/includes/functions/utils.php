<?php

/**
 * Wrapper for getting related posts. The feature Related_posts must be active.
 * 
 * @param $post_id Post ID
 * @param $return Posts per page to return.
 * 
 * @return array|bool
 */
function vip_es_get_related_posts( $post_id, $return ) {
	return ElasticPress\Features::factory()->get_registered_feature( 'related_posts' )->find_related( $post_id, $return );
}
