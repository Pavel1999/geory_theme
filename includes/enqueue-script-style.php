<?php
if (! defined('ABSPATH')){
    exit;
}
/**
 * Определение стилей
 */
function geory_style() {
    wp_enqueue_style( 'geory-style', get_template_directory_uri() . 'assets/css/styles.min.js' );

    wp_enqueue_style( 'geory-style', get_stylesheet_uri() );


}
add_action( 'wp_enqueue_scripts', 'geory_style' );

/**
 * Определение скриптов
 */
function geory_scripts() {
    wp_enqueue_script( 'geory-navigation', get_template_directory_uri() . 'assets/js/main.js', array(), '20151215', true );

    wp_enqueue_script( 'geory-navigation', get_template_directory_uri() . 'assets/js/navigation.js', array(), '20151215', true );


    wp_enqueue_script( 'geory-skip-link-focus-fix', get_template_directory_uri() . 'assets/js/skip-link-focus-fix.js', array(), '20151215', true );

    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'geory_scripts' );