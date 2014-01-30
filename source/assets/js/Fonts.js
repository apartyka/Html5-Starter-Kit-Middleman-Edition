 /*
 * Font data and off site api calls
 *
 * 
 */

 // semi-colon to assure functionality upon script concatenation and minification 
// Google web font stuff
;(function ($, window, document, undefined) {

    WebFontConfig = {
        google: { families: [ 'Oswald:400,700,300:latin' ] }
    };

    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);

}(jQuery, window, document, undefined));