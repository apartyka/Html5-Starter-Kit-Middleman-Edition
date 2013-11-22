;(function ($, window, document, undefined) {
    console.log('hi');

    WebFontConfig = {
        google: { families: [ 'Ruda:400,900:latin' ] }
    };

    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);


    /**
     * # Scroll To Top
     * Used for iOS and other mobile devices to scroll the window to the top and hide the address bar
     */
    window.scroll(0,1);
})(jQuery, this, this.document);