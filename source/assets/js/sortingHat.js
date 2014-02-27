(function( $, window, document ) {

	'use strict';

	App.modules.sorting_hat = function (selector) {
		
		var SortingHat = function (el) {

			this.$sortingHat = $(el),
			this.$leftSelection = $(el).find('.left-selection'),
			this.$rightSelection = $(el).find('.right-selection'),
			this.$topsSelection = $(el).find('#tops'),
			this.$bottomsSelection = $(el).find('#bottoms');

			/* Individual "select" events. Called within leftSelectEvents() and RightSelectEvents()
			   @params: index = position of each item in the array
						product = individual element that is clicked
						$parent = the parent div
						$target = the target div each product is cloned to
			*/			
			this.selectProduct = function (index, product, $parent, $target) {

				var obj = this;

				// Add the index as a data attrib
				$(product).attr('data-index', index);

				$(product).on('click', function(e) {
					
					e.preventDefault();
					
					var $selectedProduct = $(this);

					// Clone helper function
					obj.copy($selectedProduct, $target);

					$parent.find('.selected').removeClass('selected');

					$selectedProduct.addClass('selected');

				});

			};

			// Selection made in left and right panels
			this.initSelections = function () {
				
				var obj = this,
					$leftParent = obj.$leftSelection,
					$rightParent = obj.$rightSelection,
					$leftProducts = obj.$leftSelection.find('.product'),
					$rightProducts = obj.$rightSelection.find('.product'),
					$topsContainer = obj.$topsSelection,
					$bottomsContainer = obj.$bottomsSelection;				

				$leftProducts.each(function (i, el) {

					obj.selectProduct(i, el, $leftParent, $topsContainer);

				});

				$rightProducts.each(function (i, el) {

					obj.selectProduct(i, el, $rightParent, $bottomsContainer);

				});

			};

			/* Clone selected product in to empty container
			   @params: product = the element that is being cloned
			 			target = the div the clone is inserted in to
			*/
			this.copy = function (product, target) {
				
				var obj = this,
					$clone = $(product).clone(true);

				$(target).empty();

				$clone.appendTo(target);

			};

			// Return "selected" state for the first item in each side
			this.selectedOnInit = function () {
				
				var obj = this,
					firstItemLeft = obj.$leftSelection.find('.product')[0],
					firstItemRight = obj.$rightSelection.find('.product')[0],
					$leftClone = $(firstItemLeft).clone(true),
					$rightClone = $(firstItemRight).clone(true),
					$topsContainer = obj.$topsSelection,
					$bottomsContainer = obj.$bottomsSelection;
				

				function randSelect(c) {
				    var o = [];
				    for (var i = 0; i < c; i++) {
				        var n = Math.floor(Math.random()*c);
				        if( jQuery.inArray(n, o) > 0 ) --i;
				        else o.push(n);
				    }
				    return o;
				}	

				console.log(randSelect(obj.$leftSelection.find('.product').size()));	

				// Short way of adding a class to two objects
				$(firstItemLeft).add(firstItemRight).addClass('selected');

				// Copy each firstItem in to target container
				$leftClone.appendTo($topsContainer);
				$rightClone.appendTo($bottomsContainer);

			};

			// Private init kicks everything off
			this.init = function (index) {

		        var obj = this;

		        // Init other methods	        
		        obj.initSelections();
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