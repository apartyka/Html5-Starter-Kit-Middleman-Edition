(function( $, window, document ) {

	'use strict';

	App.modules.sorting_hat = function (selector) {
		
		var SortingHat = function (el) {

			// Master objects
			this.$sortingHat = $(el),
			
			this.$leftSelection = $(el).find('.left-selection'),
			this.$leftItems = this.$leftSelection.find('.product'),
			
			this.$rightSelection = $(el).find('.right-selection'),
			this.$rightItems = this.$rightSelection.find('.product'),

			this.$selectionContainer = $(el).find('.selection-container'),
			this.$topsSelection = $(el).find('#tops'),
			this.$bottomsSelection = $(el).find('#bottoms');
			
			this.selectionEvent = function (clone) {
				var obj = this,
					selectionContainer = obj.$selectionContainer,
					selections = selectionContainer.find('.product');

					selections.each(function(i, clone){						

						// Unbind first otherwise the following click will duplicate
						$(clone).unbind('click');

						$(clone).on('click', function(e) {
							e.preventDefault();

							var href = $(this).attr('href');

							console.log('selectionEvent click');
							console.log(href);
							//app.quickView.show({url: href, source: "quickview"});

							return false;
						});

					});
			};

			// work in progress
			this.populateImages = function () {
				var obj = this,
					$leftProducts = obj.$leftItems;
					
				$leftProducts.each(function (i, el) {
					
					var href = $(el).attr('href'),
						images = $(this).find('img'),
						alt = $(images).attr('alt'),
						
						imgSrc = images.attr('src');

						// console.log('image: ', images);
						// console.log('image src: ', imgSrc);
						// console.log('alt: ', alt);
						// console.log('href: ', href);

				});

			};

			/* Individual "select" events. Called within initSelections()
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
					
					console.log('selectProduct() click');

				});

			};

			/* Clone selected product in to empty container
			   @params: product = the element that is being cloned
			 			target = the div the clone is inserted in to
			*/
			this.copy = function (product, target) {
				
				var obj = this,
					$clone = $(product).clone(true);

				// Use of empty here is removing all events bound
				$(target).empty();
				
				$clone.appendTo(target);

				// Bind quickview events to clone
				//console.log($clone.attr('href'));
				obj.selectionEvent($clone);
			};

			// Selection made in left and right panels
			this.initSelections = function () {
				
				var obj = this,
					$leftParent = obj.$leftSelection,
					$leftProducts = obj.$leftItems,
					
					$rightParent = obj.$rightSelection,
					$rightProducts = obj.$rightItems,
					
					$topsContainer = obj.$topsSelection,
					$bottomsContainer = obj.$bottomsSelection;

				$leftProducts.each(function (i, el) {

					obj.selectProduct(i, el, $leftParent, $topsContainer);

				});

				$rightProducts.each(function (i, el) {

					obj.selectProduct(i, el, $rightParent, $bottomsContainer);

				});

			};


			// Return "selected" state for the first item in each side
			this.selectedOnInit = function () {
				
				var obj = this,
					
					leftItems = obj.$leftItems,
					leftSize = obj.itemSize(leftItems),					
					randomLeftnum = obj.selectRandom(leftSize),
					randomLeftitem = leftItems[randomLeftnum],
					$leftClone = $(randomLeftitem).clone(true),
					
					rightItems = obj.$rightItems,
					rightSize = obj.itemSize(rightItems),
					randomRightnum = obj.selectRandom(rightSize),
					randomRightitem = rightItems[randomRightnum],
					$rightClone = $(randomRightitem).clone(true),
					
					$topsContainer = obj.$topsSelection,
					$bottomsContainer = obj.$bottomsSelection;
				
				// Short way of adding a class to two objects
				$(randomLeftitem).add(randomRightitem).addClass('selected');

				// Copy each cloned item in to a target container
				$leftClone.appendTo($topsContainer);
				$rightClone.appendTo($bottomsContainer);
				
			};

			/*	Select random item helper
				@param: arr = length of an array or $.size()
			*/
			this.selectRandom = function (arr) {

				return Math.floor(Math.random() * arr);

			};

			/*	Length of array or jQuery obj
				@param: arr = array or jQuery obj
			*/
			this.itemSize = function (arr) {

				return arr.length;

			};

			// Private init kicks everything off
			this.init = function (index) {

		        var obj = this;

		        // Init private methods
		        obj.populateImages(); // work in progress - would like to populate each images src, alt, and parent href values from json obj
		        obj.initSelections();
		        obj.selectedOnInit();
		        obj.selectionEvent();

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

        // Bind quickview events
		// $(document).on('click', '.product', function() {
		// 			console.log($(this).attr('href'));
		// 			//console.log($(this));
		// 			console.log('click');
		// 		});
    });

}( jQuery, window, document, undefined ));