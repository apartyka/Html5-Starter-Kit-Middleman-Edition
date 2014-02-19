(function( $, window, document ) {

	window.sorting_hat = function (selector) {
		var SortingHat = function (element) {

			this.sortingHat = $(element);

			this.init = function (index) {

		        var obj = this;

		        //obj.closeEvents();
		        //obj.drawerEvents();

		        // store data
		        obj.sortingHat.data({
		            instantiated: true,
		            instance: index
		        });
				console.log("sortingHat init");
		    };

		    return {
		    	init: function () {

	                console.log("sortingHat public init");
	                // instantiate
	                $('.sorting-hat', document).each(function (i, element) {

	                    // init objects
	                    //if (i === 0) { experience.objects.expandable_drawer = []; }

	                    // create objects
	                    // experience.objects.expandable_drawer[i] = new ExpandableDrawer(el);
	                    // experience.objects.expandable_drawer[i].init(i);

	                    sorting_hat[i] = new SortingHat(element);
	                    sorting_hat[i].init(i);

	                });

	            }
		    };

		};
	};

	$(document).ready(function(){
		sorting_hat.init();
	});

}( jQuery, window, document ));