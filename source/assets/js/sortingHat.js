(function( $, window, document ) {

	'use strict';

	App.modules.sorting_hat = function (selector) {
		
		var SortingHat = function (el) {

			this.$sortingHat = $(el),
			this.$leftSelection = $(el).find('.left-selection'),
			this.$rightSelection = $(el).find('.right-selection'),
			this.$topsSelection = $(el).find('#tops'),
			this.$bottomsSelection = $(el).find('#bottoms');

			// console.log(this.$leftSelection);
			// console.log(this.$rightSelection);
			// console.log(this.$topsSelection);
			// console.log(this.$bottomsSelection);

			this.leftProducts = function () {
				
				var obj = this,
					$products = obj.$leftSelection.find('.product');

				$products.each(function (i, el) {														
					
					// Attach the index to each element as a data attrib
					$(el).attr('data-index', i);

					$(el).on('click', function(){
						
						var $selection = $(this);
						console.log('product selection index: ' + i);
						console.log('product selection data: ', $selection.data());

					});

				});

			};

			this.rightProducts = function () {
				
				var obj = this,
					$products = obj.$rightSelection.find('.product');

				$products.each(function (i, el) {
					
					// Attach the index to each element as a data attrib
					$(el).attr('data-index', i);

					$(el).on('click', function(){
						
						var $selection = $(this);
						console.log('product selection index: ' + i);
						console.log('product selection data: ', $selection.data());

					});
				});

			};

			// Return "active" state for the first item in each side
			this.selectedOnInit = function () {
				
				var obj = this,
					firstItemLeft = obj.$leftSelection.find('.product')[0],
					firstItemRight = obj.$rightSelection.find('.product')[0],
					$leftClone = $(firstItemLeft).clone(true),
					$rightClone = $(firstItemRight).clone(true),
					$topsContainer = obj.$topsSelection,
					$bottomsContainer = obj.$bottomsSelection;
				
				// Short way of adding a class to two objects
				$(firstItemLeft).add(firstItemRight).addClass('selected');

				// Copy each firstItem in to target container
				$leftClone.appendTo($topsContainer);
				$rightClone.appendTo($bottomsContainer);

			};

			// @param the element that is being cloned
			this.cloneProduct = function (product) {
				var obj = this;
			};

			this.init = function (index) {

		        var obj = this;

		        // Init other methods	        
		        obj.selectedOnInit();
		        obj.leftProducts();
		        obj.rightProducts();

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
                
                // Instantiate
                $('.sorting-hat', document).each(function (i, el) {

                    // Init objects
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