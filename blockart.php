<?php
/**
 * Plugin Name: Blockart
 * Description: Maketh thy website most wondrous.
 * Author: ThemeGrill
 * Author URI: https://themegrill.com/
 * Version: 1.0.0
 * Text Domain: blockart
 * Domain Path: /languages/
 *
 * @package Blockart
 */

/**
 * Return if directly accessed.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Include the autoloader.
 */
require_once __DIR__ . '/vendor/autoload.php';

/**
 * Define the plugin file constant.
 */
if ( ! defined( 'BLKRT_PLUGIN_FILE' ) ) {
	define( 'BLKRT_PLUGIN_FILE', __FILE__ );
}

/**
 * Include core files.
 */
require_once __DIR__ . '/inc/constants.php';
require_once __DIR__ . '/inc/functions.php';

/**
 * Register block scripts and styles.
 */
\Blockart\Blocks\ScriptsAndStyles::register();

/**
 * Register all blocks.
 */
\Blockart\Blocks\Blocks::register();
