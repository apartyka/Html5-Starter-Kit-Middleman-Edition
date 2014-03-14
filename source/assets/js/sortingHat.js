(function( $, window, document ) {

	'use strict';

	var data =	{
	   "tops":[
	      {
	         "Green_Tan_Jacket":{
	            "url":"http:​/​/​www.thelimited.com/​product/​vibrant-one-button-blazer/​2446205.html?dwvar_2446205_colorCode=899",
	            "img":"modules/sortingHat/tops/Green_Tan_Jacket.jpg"
	         }
	      },
	      {
	         "Tan_Jacket":{
	            "url":"http:​/​/​www.thelimited.com/​product/​soft-one-button-jacket/​2216252.html?dwvar_2216252_colorCode=315",
	            "img":"modules/sortingHat/tops/Tan_Jacket.jpg"
	         }
	      },
	      {
	         "Blk_Jacket":{
	            "url":"http:​/​/​www.thelimited.com/​product/​collection-two-button-jacket/​2516028.html?dwvar_2516028_colorCode=144",
	            "img":"modules/sortingHat/tops/Blk_Jacket.jpg"
	         }
	      },
	      {
	         "Coral_Jacket":{
	            "url":"http:​/​/www.thelimited.com/​product/​soft-one-button-jacket/​2826252.html?dwvar_2826252_colorCode=540",
	            "img":"modules/sortingHat/tops/Coral_Jacket.jpg"
	         }
	      },
	      {
	         "Jean_Jacket":{
	            "url":"http:​/​/www.thelimited.com/​product/​denim-jacket/​2715973.html?dwvar_2715973_colorCode=296",
	            "img":"modules/sortingHat/tops/Jean_Jacket.jpg"
	         }
	      },
	      {
	         "Navy_Jacket_NORED":{
	            "url":"http:​/​/​www.thelimited.com/​product/​trimmed-ponte-one-button-blazer/​2826305.html?dwvar_2826305_colorCode=250",
	            "img":"modules/sortingHat/tops/Navy_Jacket_NORED.jpg"
	         }
	      },
	      {
	         "CoralTipping_Jacket":{
	            "url":"http:​/​/www.thelimited.com/​product/​vibrant-one-button-blazer/​2446205.html?dwvar_2446205_colorCode=540",
	            "img":"modules/sortingHat/tops/CoralTipping_Jacket.jpg"
	         }
	      },
	      {
	         "Railroad_Jacket":{
	            "url":"http:​/​/​www.thelimited.com/​product/​striped-one-button-jacket/​2546194.html?dwvar_2546194_colorCode=102",
	            "img":"modules/sortingHat/tops/Railroad_Jacket.jpg"
	         }
	      },
	      {
	         "FrostTaupe_Jacket":{
	            "url":"http:​/​/​www.thelimited.com/​product/​linen-one-button-jacket/​2216170.html?dwvar_2216170_colorCode=395",
	            "img":"modules/sortingHat/tops/FrostTaupe_Jacket.jpg"
	         }
	      },
	      {
	         "DenimSailor_Jacket":{
	            "url":"http:​/​/www.thelimited.com/​product/​denim-blazer/​8436293.html?dwvar_8436293_colorCode=296",
	            "img":"modules/sortingHat/tops/DenimSailor_Jacket.jpg"
	         }
	      }
	   ],
	   "bottoms":[
	      {
	         "Graphite_Pant":{
	            "url":"http:​/​/​staging.thelimited.com/​product/​drew-striped-flare-pants/​6894700.html?dwvar_6894700_colorCode=102",
	            "img":"modules/sortingHat/bottoms/Graphite_Pant.jpg"
	         }
	      },
	      {
	         "Graphite_Skirt":{
	            "url":"http:​/​/​staging.thelimited.com/​product/​collection-wide-waistband-pencil-skirt/​7263870.html?dwvar_7263870_colorCode=102",
	            "img":"modules/sortingHat/bottoms/Graphite_Skirt.jpg"
	         }
	      },
	      {
	         "Denim_Suit_Pant":{
	            "url":"http:​/​/​staging.thelimited.com/​product/​drew-sateen-bootcut-pants/​6774605.html?dwvar_6774605_colorCode=150",
	            "img":"modules/sortingHat/bottoms/Denim_Suit_Pant.jpg"
	         }
	      },
	      {
	         "Navy_Pant":{
	            "url":"http:​/​/​staging.thelimited.com/​product/​sateen-pencil-pants/​6779378.html?dwvar_6779378_colorCode=150",
	            "img":"modules/sortingHat/bottoms/Navy_Pant.jpg"
	         }
	      },
	      {
	         "Coral_Skirt":{
	            "url":"http:​/​/​staging.thelimited.com/​product/​subtle-floral-pencil-skirt/​7314318.html?dwvar_7314318_colorCode=540",
	            "img":"modules/sortingHat/bottoms/Coral_Skirt.jpg"
	         }
	      },
	      {
	         "Green_Capri_009":{
	            "url":"http:​/​/​staging.thelimited.com/​product/​sateen-pencil-pants/​6779424.html?dwvar_6779424_colorCode=832",
	            "img":"modules/sortingHat/bottoms/Green_Capri_009.jpg"
	         }
	      },
	      {
	         "Railroad_Pant":{
	            "url":"http:​/​/​staging.thelimited.com/​product/​collection-drew-bootcut-pants/​6629241.html?dwvar_6629241_colorCode=102",
	            "img":"modules/sortingHat/bottoms/Railroad_Pant.jpg"
	         }
	      },
	      {
	         "Blue_Polka_Skirt":{
	            "url":"http:​/​/​staging.thelimited.com/​product/​dot-pencil-skirt/​7314065.html?dwvar_7314065_colorCode=296",
	            "img":"modules/sortingHat/bottoms/Blue_Polka_Skirt.jpg"
	         }
	      },
	      {
	         "Denim_Jean":{
	            "url":"http:​/​/​staging.thelimited.com/​product/​917-dark-skinny-jeans/​8849251.html?dwvar_8849251_colorCode=246",
	            "img":"modules/sortingHat/bottoms/Denim_Jean.jpg"
	         }
	      },
	      {
	         "Navy_Capri":{
	            "url":"http:​/​/​staging.thelimited.com/​product/​exact-stretch-wide-waistband-skinny-pants/​6439317.html?dwvar_6439317_colorCode=150",
	            "img":"modules/sortingHat/bottoms/Navy_Capri.jpg"
	         }
	      },
	      {
	         "LT_Tan_Pant":{
	            "url":"http:​/​/​staging.thelimited.com/​showproduct?dwvar_6439344_colorCode=398&pid=6439344",
	            "img":"modules/sortingHat/bottoms/LT_Tan_Pant.jpg"
	         }
	      },
	      {
	         "Coral_Pant":{
	            "url":"http:​/​/​staging.thelimited.com/​product/​drew-soft-flare-pants/​6894702.html?dwvar_6894702_colorCode=540",
	            "img":"modules/sortingHat/bottoms/Coral_Pant.jpg"
	         }
	      }
	   ]
	}

	console.log(data);

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
			
			/* Event(s) for selections made in center column. Called in copy().
			   @params: clone = the cloned product						
			*/
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

							//console.log('selectionEvent click');
							
							// Updates to analytics
							obj.updateTracking('Selected Product: ', href);
							
							// Launch quickView for selected product
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
					
					var $selectedProduct = $(this),
						href = $(this).attr('href');

					// Clone helper function
					obj.copy($selectedProduct, $target);

					$parent.find('.selected').removeClass('selected');

					$selectedProduct.addClass('selected');
					
					// Updates to analytics
					obj.updateTracking('Click of Product: ', href);

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

			/*	Update custom tracking values
				@param: url = href value of a selected product
						str = string to identify the tracking
			*/
			this.updateTracking = function(str, url) {

				// Split the href at '?dwvar_', return the last piece of the array created
				var piece = url.split('?dwvar_').pop(),
					slice = piece.slice(8, 18), // remove colorCode=
					replaced = piece.replace(slice, ""), // replace sliced out string with empty string
					value = replaced.split('&').shift(), // remove any random garbage & at the end of the string
					str;
					//console.log(replaced.split('&').shift());
				
				window.eVar55 = str + value;			
				//console.log(eVar55);
				// var s_code = s.t();

				// if( s_code ) {
				// 	document.write(s_code);
				// }

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
				//console.log("SortingHat private init");
				//console.log('obj.$sortingHat.data', obj.$sortingHat.data());
		    };

		};

	    return {
	    	init: function () {

                //console.log("sortingHat public init");
                
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