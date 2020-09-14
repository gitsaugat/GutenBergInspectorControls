<?php

defined( 'ABSPATH' ) || exit;

/**
 * Wrapper for _doing_it_wrong.
 *
 * @since 1.0.0
 * @param string $function Function used.
 * @param string $message  Message to log.
 * @param string $version  Version the message was added in.
 */
function blkrt_doing_it_wrong( $function, $message, $version ) {
	$message .= ' Backtrace: ' . wp_debug_backtrace_summary();

	if ( function_exists( 'is_ajax' ) && is_ajax() ) {
		do_action( 'doing_it_wrong_run', $function, $message, $version );
		error_log( "{$function} was called incorrectly. {$message}. This message was added in version {$version}." );
	} else {
		_doing_it_wrong( $function, $message, $version );
	}
}
