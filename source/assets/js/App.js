(function( $, window, document ) {
    
    'use strict';

    /* --------------------------------------------------------------------------
    |   -- Global App namespace --
    -------------------------------------------------------------------------- */
    var App = window.App = {};

    // object that stores all instances of created (App) objects.
    // allows you to access/modify each unique object. (window.App.objects)
    App.objects = {};

    // modules object for individual pieces of functionality
    App.modules = {};

    /* --------------------------------------------------------------------------
    |   -- Initializer --
    -------------------------------------------------------------------------- */
    $(window).on('load.App', function() {

        $(window).trigger('App.modules');
        $(window).trigger('App.ready');

    });

}( jQuery, window, document ));