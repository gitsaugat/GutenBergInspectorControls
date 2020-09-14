<?php

namespace Blockart\Blocks;

/**
 * Registers scripts and styles for the blocks.
 *
 * @since 1.0.0
 */
final class ScriptsAndStyles {

	/**
	 * Cloning is forbidden.
	 *
	 * @since 1.0.0
	 */
	public function __clone() {
		blkrt_doing_it_wrong( __FUNCTION__, __( 'You cannot clone this class.', 'blockart' ), '1.0.0' );
	}

	/**
	 * Add hooks to register the block scripts and styles.
	 *
	 * @since 1.0.0
	 */
	public static function register() {
		add_action( 'init', array( __CLASS__, 'register_all_block_scripts' ) );
		add_action( 'init', array( __CLASS__, 'register_all_block_styles' ) );
	}

	/**
	 * Register all the block scripts.
	 *
	 * @since 1.0.0
	 */
	public static function register_all_block_scripts() {
		wp_register_script(
			'blockart-sample-block-js',
			plugins_url( '/dist/blocks.build.js', BLKRT_PLUGIN_FILE ),
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
			BLKRT_VERSION,
			true
		);
	}

	/**
	 * Register all the block styles.
	 *
	 * @since 1.0.0
	 */
	public static function register_all_block_styles() {
		wp_register_style(
			'blockart-sample-block-style-css',
			plugins_url( 'dist/blocks.style.build.css', BLKRT_PLUGIN_FILE ),
			is_admin() ? array( 'wp-editor' ) : null,
			BLKRT_VERSION
		);

		wp_register_style(
			'blockart-sample-block-editor-css',
			plugins_url( 'dist/blocks.editor.build.css', BLKRT_PLUGIN_FILE ),
			array( 'wp-edit-blocks' ),
			BLKRT_VERSION
		);
	}
}
