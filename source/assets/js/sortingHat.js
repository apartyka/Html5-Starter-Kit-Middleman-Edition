(function( $, window, document ) {

	'use strict';

	App.modules.sorting_hat = function (selector) {
		
		var SortingHat = function (element) {

			this.sortingHat = $(element);

			this.init = function (index) {

		        var obj = this;

		        //obj.otherEvents(); //init other methods	        

		        // store some data
		        obj.sortingHat.data({
		            instantiated: true,
		            instance: index
		        });
				console.log("sortingHat private init");
		    };


		};

	    return {
	    	init: function () {

                console.log("sortingHat public init");
                
                // instantiate
                $('.sorting-hat', document).each(function (i, el) {

                    // init objects
                     if (i === 0) { App.objects.sorting_hat = []; }

                    App.objects.sorting_hat[i] = new SortingHat(el);
                    App.objects.sorting_hat[i].init(i);

                });

            }
	    };

	};	

	/* Initialize module when App is ready
    -------------------------------------------------------------------------- */
	$(window).on('App.modules', function () {
        App.modules.sorting_hat().init();
    });

}( jQuery, window, document, undefined ));