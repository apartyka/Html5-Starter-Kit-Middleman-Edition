(function( $, window, document ) {

	'use strict';

	App.modules.sorting_hat = function (selector) {
		
		var SortingHat = function (el) {

			this.$sortingHat = $(el),
			this.$leftSelection = $(el).find('.left-selection'),
			this.$rightSelection = $(el).find('.right-selection'),
			this.$topsSelection = $(el).find('#tops-selection'),
			this.$bottomsSelection = $(el).find('#bottoms-selection');

			console.log(this.$leftSelection);
			console.log(this.$rightSelection);
			console.log(this.$topsSelection);
			console.log(this.$bottomsSelection);

			this.leftProducts = function () {
				
				var obj = this,
					$products = obj.$leftSelection.find('.product');
				
				// Returns the selected product's data()
				$products.each(function (i, el) {
					$(el).on('click', function(){
						
						var $selection = $(this);
						console.log('product selection index: ' + i);
						console.log('product selection data: ', $selection.data());

					});
				});

			}

			this.init = function (index) {

		        var obj = this;

		        //obj.otherEvents(); //init other methods	        
		        obj.leftProducts();


		        // store some data
		        obj.$sortingHat.data({
		            instantiated: true,
		            instance: index
		        });
				console.log("SortingHat private init");
				console.log('obj.$sortingHat.data', obj.$sortingHat.data());
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