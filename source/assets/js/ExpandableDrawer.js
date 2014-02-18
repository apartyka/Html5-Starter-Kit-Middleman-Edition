(function ($, window, document) {

    // experience.modules.rewards_form = function () {

    //     var RewardsForm = function (el) {

    //         this.form = $(el),
    //         this.inputs = this.form.find("input[type='text']"),
    //         this.formConfirmation = $('#premium-rewards-form-confirmation'),
    //         this.doneConfirmation = $('.expandable-drawer-close'),
    //         this.confirmationEmail = $('#premium-rewards-form-confirmation-email'),
    //         this.buttons = this.form.find("button"),
    //         this.errors = this.form.find('#errors');

    //         this.submitEvents = function () {

    //             var obj = this;

    //             obj.form.submit(function (e) {

    //                 obj.buttons.prop("disabled", true).addClass('button-disabled');

    //                 var serializedData = obj.form.serialize(),
    //                     url = '/Rewards/PremiumRewardRegistrationForm';

    //                 // Fire off the request to our url
    //                 request = $.ajax({
    //                     url: url,
    //                     type: "POST",
    //                     data: serializedData
    //                 });

    //                 // Callback handler called on success
    //                 request.done(function (response, textStatus, jqXHR) {

    //                     obj.buttons.prop("disabled", false).removeClass('button-disabled');

    //                     // clear out errors
    //                     obj.errors.html('').addClass('hidden');
    //                     obj.inputs.removeClass('error');

    //                     // check custom IsSuccessful boolean in response
    //                     if (response.IsSuccessful) {

    //                         //console.log('successful POST');
    //                         //console.log('response... ', response);

    //                         // Hide the form parent
    //                         obj.form.parent().addClass('hidden');

    //                         // Disable the $trigger that was clicked
    //                         experience.modules.expandable_drawer().disableTrigger();

    //                         // Show the confirmation div
    //                         obj.formConfirmation.removeClass('hidden');

    //                         // Update the confirmation div email html
    //                         obj.confirmationEmail.html(response.Email);

    //                         // Track metrics
    //                         try { trackMetrics('newLink', { name: response.MetricsString }); } catch (e) { };

    //                         obj.finished();

    //                     }
    //                     // there were errors...update the front-end error messaging
    //                     else {

    //                         //console.log('Something went wrong, please try again.');
    //                         //console.log('response... ', response);
    //                         //console.log('response.ErrorMessages... ', response.ErrorMessages);

    //                         // Loop over errors and insert into #errors div
    //                         $.each(response.ErrorMessages, function (error) {

    //                             var errorVal = response.ErrorMessages[error].Value,
    //                                 errorKey = response.ErrorMessages[error].Key,
    //                                 html = "<span class='error'>" + errorVal + "</span>";

    //                             // if errorKey matches an input's ID, add .error class to the input
    //                             $('#' + errorKey).addClass('error');

    //                             // display #errors div
    //                             obj.errors.append(html).removeClass('hidden');

    //                         });
    //                     }

    //                 });

    //                 // Callback handler called on failure                    
    //                 request.fail(function (response, jqXHR, textStatus, errorThrown) {
    //                     //console.log('request.fail response... ', response);
    //                     alert('Something went wrong, please try again.');
    //                 });

    //                 // Prevent default posting of form
    //                 e.preventDefault();

    //             });

    //         };

    //         this.finished = function () {

    //             var obj = this;

    //             // hide confirmation, display obj.form.parent()
    //             obj.doneConfirmation.on('click', function () {

    //                 //console.log('done click');

    //                 setTimeout(function () {
    //                     obj.formConfirmation.addClass('hidden');
    //                     obj.form.parent().removeClass('hidden');
    //                 }, 800);

    //             });

    //         };

    //         this.resetEvents = function () {

    //             var obj = this,
    //                 textInputs = obj.inputs,
    //                 resetBtn = obj.form.find('.reset');

    //             resetBtn.on('click', function () {

    //                 textInputs.val('');
    //                 hpe.checkbox('.optin-checkbox').check();

    //             });
    //         };

    //         this.init = function () {

    //             var obj = this;

    //             obj.submitEvents();
    //             obj.resetEvents();

    //         };

    //     };

    //     return {

    //         init: function () {

    //             //console.log("rewards_form init");

    //             // instantiate
    //             $('#premium-rewards-form form', document).each(function (i, el) {

    //                 // init objects
    //                 if (i === 0) { experience.objects.rewards_form = []; }

    //                 // create objects
    //                 experience.objects.rewards_form[i] = new RewardsForm(el);
    //                 experience.objects.rewards_form[i].init(i);

    //             });

    //         }

    //     }
    // };

    experience.modules.expandable_drawer = function (selector) {

        var ExpandableDrawer = function (el) {
console.log('turds');
            this.drawer = $(el),
			this.icon = this.drawer.find('.expandable-drawer-icon'),
			this.closeBtn = this.drawer.find('.expandable-drawer-close'),
			this.trigger = $('.expandable-drawer-trigger');

            this.open = function (theDrawer) {

                var obj = this;

                obj.drawer.slideDown();

            };

            this.close = function () {

                var obj = this;

                obj.drawer.slideUp();

            };

            this.move = function (position) {

                var obj = this;

                // move icon to position of trigger
                obj.icon.animate({
                    'left': position
                });

            };

            this.getTriggerPosition = function (trigger) {

                // find left offset of current trigger & its width
                var obj = this,
                    triggersLeftPos = trigger.offset().left,
					triggersCenter = trigger.innerWidth() / 2,
					iconsCenter = obj.icon.innerWidth() / 2,
					context = trigger.parents('.row').offset().left,

					position = ((triggersLeftPos - context) + triggersCenter) - Math.ceil(iconsCenter);

                return position;

            };

            this.closeEvents = function () {

                var obj = this,
				 	closeBtn = obj.closeBtn

                closeBtn.on('click', function () {
                    obj.close();
                });

            };

            this.disable = function () {

                var obj = this;

                return $(obj.currentTrigger).prop("disabled", true).addClass('button-disabled');

            };

            this.drawerEvents = function () {

                var obj = this,
					$drawer = obj.drawer,
					$trigger = obj.trigger,
                    $scrollTarget = $('.scroll-target');

                obj.currentTrigger = null;

                $trigger.on('click', function (e) {

                    e.preventDefault();

                    var drawerCallback = $(this).data('callback'),
						rewardId = $(this).data('reward-id'),
			            termsUrl = $(this).data('terms-url'),
                        couponCode = $(this).data('coupon-code'),

                        thisTrigger = this,
						triggersPosition = obj.getTriggerPosition($(thisTrigger));

                    // Scroll to a specific part of the page
                    $('body, html').animate({
                        scrollTop: $scrollTarget.offset().top
                    }, 600);

                    // $drawer is not open and $trigger has not been clicked
                    if ($drawer.not(':visible') && obj.currentTrigger == null) {

                        // open $drawer
                        obj.open($drawer);

                        // set current $trigger
                        obj.currentTrigger = thisTrigger;

                        // move icon
                        obj.move(triggersPosition);

                        // fire callback
                        if (experience.functions[drawerCallback]) {
                            experience.functions[drawerCallback].call(this, rewardId, termsUrl, couponCode);
                        }

                    }

                    // Might not need this block, but it's here for now...
                    // $drawer is open and $trigger is same
                    else if ($drawer.is(':visible') && obj.currentTrigger == thisTrigger) {

                        //console.log('$drawer is open and $trigger is same');

                    }

                    // $drawer is open and $trigger clicked is not the same as current $trigger
                    else if ($drawer.is(':visible') && obj.currentTrigger != thisTrigger) {

                        // set current $trigger
                        obj.currentTrigger = thisTrigger;

                        // scenario when confirmation is displayed and user clicks on a Premium Reward cta
                        // TODO: this is really messy...but it works.
                        if ($('#premium-rewards-form-confirmation').is(':visible')) {

                            obj.close($drawer);
                            $('#premium-rewards-form').removeClass('hidden');
                            $('#premium-rewards-form-confirmation').addClass('hidden');
                            obj.open($drawer);

                        }

                        // move icon
                        obj.move(triggersPosition);

                        // fire callback
                        if (experience.functions[drawerCallback]) {
                            experience.functions[drawerCallback].call(this, rewardId, termsUrl, couponCode);
                        }

                    }

                    // $drawer was closed using closeBtn...
                    else if ($drawer.not(':visible')) {

                        // open $drawer
                        obj.open($drawer);

                        // set current $trigger
                        obj.currentTrigger = thisTrigger

                        // move icon
                        obj.move(triggersPosition);

                        // fire callback
                        if (experience.functions[drawerCallback]) {
                            experience.functions[drawerCallback].call(this, rewardId, termsUrl, couponCode);
                        }

                    }

                });

            };

            this.init = function (index) {

                var obj = this;

                obj.closeEvents();
                obj.drawerEvents();

                // store data
                obj.drawer.data({
                    instantiated: true,
                    instance: index
                });

            };
        };

        return {

            closeDrawer: function (index) {

                var _selector = selector || '.expandable-drawer-content';

                $(_selector).each(function () {

                    var instance = $(this).data('instance');

                    if (typeof instance !== 'undefined') {
                        experience.objects.expandable_drawer[instance].close(index);
                    } else {
                        experience.properties.errors.not_instatiated();
                    }

                });

            },

            disableTrigger: function (index) {

                var _selector = selector || '.expandable-drawer-content';

                $(_selector).each(function () {

                    var instance = $(this).data('instance');

                    if (typeof instance !== 'undefined') {
                        experience.objects.expandable_drawer[instance].disable(index);
                    } else {
                        experience.properties.errors.not_instatiated();
                    }

                });

            },

            init: function () {

                console.log("expandable_drawer init");

                // instantiate
                $('.expandable-drawer-content', document).each(function (i, el) {

                    // init objects
                    if (i === 0) { experience.objects.expandable_drawer = []; }

                    // create objects
                    experience.objects.expandable_drawer[i] = new ExpandableDrawer(el);
                    experience.objects.expandable_drawer[i].init(i);

                });

            }
        };

    };

    /* Initialize module when experience is ready
    -------------------------------------------------------------------------- */
    $(window).on('experience.modules', function () {
        experience.modules.expandable_drawer().init();
        //experience.modules.rewards_form().init();
    });

    /* Expandable drawer callback
    -------------------------------------------------------------------------- */
    $(window).on('experience.primed', function () {
        window.experience.functions.drawerCallback = function (rewardId, termsUrl, couponCode) {

            // your callback to change coupon id in form
            //console.log('drawerCallback called RewardID is... ', rewardId);

            // update hidden RewardID input
            $('#premium-rewards-form #RewardID').val(rewardId);
            //console.log('hidden RewardID input updated... ', $('#RewardID').val());

            // update hidden CouponCode input
            $('#premium-rewards-form #CouponCode').val(couponCode);
            //console.log('hidden CouponCode input updated... ', $('#CouponCode').val());

            // update terms url
            $('#premium-rewards-form #form-terms').attr('href', termsUrl);
            //console.log('form terms url updated... ', $('#form-terms').attr('href'));

        };
    });


} (jQuery, window, document, undefined));