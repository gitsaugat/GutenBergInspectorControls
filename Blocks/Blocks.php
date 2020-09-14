<?php

namespace Blockart\Blocks;

/**
 * Registers all the blocks.
 *
 * @since 1.0.0
 */
final class Blocks {

	/**
	 * Cloning is forbidden.
	 *
	 * @since 1.0.0
	 */
	public function __clone() {
		blkrt_doing_it_wrong( __FUNCTION__, __( 'You cannot clone this class.', 'blockart' ), '1.0.0' );
	}

	/**
	 * Add hooks to register the blocks.
	 *
	 * @since 1.0.0
	 */
	public static function register() {
		add_action( 'init', array( __CLASS__, 'register_all_blocks' ) );
	}

	/**
	 * Register all the blocks.
	 *
	 * @since 1.0.0
	 */
	public static function register_all_blocks() {
		self::register_sample_block();
	}

	/**
	 * Register the Sample block.
	 *
	 * @since 1.0.0
	 */
	private static function register_sample_block() {
		register_block_type(
			'blockart/sample-block',
			array(
				'style'         => 'blockart-sample-block-style-css',
				'editor_script' => 'blockart-sample-block-js',
				'editor_style'  => 'blockart-sample-block-editor-css',
			)
		);
	}
}
