(function( $, window, document ) {

	'use strict';

	App.modules.sorting_hat = function (selector) {
		
		var SortingHat = function (el) {

			this.$sortingHat = $(el),
			this.$leftSelection = $(el).find('.left-selection'),
			this.$rightSelection = $(el).find('.right-selection'),
			this.$topsSelection = $(el).find('#tops'),
			this.$bottomsSelection = $(el).find('#bottoms');

			// Selection made in the left panel
			this.leftSelectEvents = function () {
				
				var obj = this,
					$parent = obj.$leftSelection,
					$products = obj.$leftSelection.find('.product'),
					$topsContainer = obj.$topsSelection;

				$products.each(function (i, el) {														
										
					// Attach the index to each element as a data attrib
					$(el).attr('data-index', i);

					$(el).on('click', function(e) {
						
						e.preventDefault();
						
						var $selectedProduct = $(this);

						// Clone helper function
						obj.copy($selectedProduct, $topsContainer);

						$parent.find('.selected').removeClass('selected');
						
						$selectedProduct.addClass('selected');

					});

				});

			};

			// Selection made in the right panel
			this.rightSelectEvents = function () {
				
				var obj = this,
					$parent = obj.$rightSelection,
					$products = obj.$rightSelection.find('.product'),
					$bottomsContainer = obj.$bottomsSelection;

				$products.each(function (i, el) {
					
					// Attach the index to each element as a data attrib
					$(el).attr('data-index', i);

					$(el).on('click', function(e) {
						
						e.preventDefault();
						
						var $selectedProduct = $(this);

						// Clone helper function
						obj.copy($selectedProduct, $bottomsContainer);

						$parent.find('.selected').removeClass('selected');
						
						$selectedProduct.addClass('selected');

						// app.quickView.show({ url: this.href, source: "quickview" })

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

			// Empty target container and clone selected product in to it
			// @params: product = the element that is being cloned
			// 			target = the div the clone is inserted in to
			this.copy = function (product, target) {
				
				var obj = this,
					$clone = $(product).clone(true);

				$(target).empty();

				$clone.appendTo(target);

			};

			this.init = function (index) {

		        var obj = this;

		        // Init other methods	        
		        obj.leftSelectEvents();
		        obj.rightSelectEvents();
		        obj.selectedOnInit();

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