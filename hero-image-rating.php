<?php
/**
 * Plugin Name:       Hero Image Rating
 * Description:       Plugin mit dem man einen Hero Image Block mit Bewertung einfügen kann.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       hero-image-rating
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function create_block_hero_image_rating_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'create_block_hero_image_rating_block_init' );


function wpdocs_theme_name_scripts() {
	wp_enqueue_script( 'frontend-script', plugins_url( "build/rating.js", __FILE__ ) , array('wp-blocks', 'wp-block-editor'), '1.0.0', true );
}

add_action( 'wp_enqueue_scripts', 'wpdocs_theme_name_scripts' );