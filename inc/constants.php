<?php

defined( 'ABSPATH' ) || exit;

/**
 * Define utility function to check and define constants.
 *
 * @since 1.0.0
 */
if ( ! function_exists( 'blkrt_define' ) ) {
	function blkrt_define( $name, $value ) {
		if ( ! defined( $name ) ) {
			define( $name, $value );
		}
	}
}

/**
 * Define plugin constants.
 *
 * @since 1.0.0
 */
blkrt_define( 'BLKRT_VERSION', '1.0.0' );
blkrt_define( 'BLKRT_ABSPATH', dirname( BLKRT_PLUGIN_FILE ) . '/' );
blkrt_define( 'BLKRT_PLUGIN_BASENAME', plugin_basename( BLKRT_PLUGIN_FILE ) );
