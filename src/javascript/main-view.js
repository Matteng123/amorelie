/*global me, app*/
import _ from 'underscore';
import View from 'ampersand-view';
import dom from 'ampersand-dom';
import ViewSwitcher from 'ampersand-view-switcher';

import "ScrollToPlugin";
import "TweenMax";
import 'modernizr';

var MainView = View.extend({

		/* Set Properties */
		props: {

		},

		/* Bind basic Events, all link clicks, toggle Navigation, etc. */
		events: {
				'click a[href]': 'handleLinkClick',
				'click .Button--toggle': 'handleClickToggle',
				'click .Button--close': 'handleClickToggle',
		},

		/* Render Main View */
		render: function () {

				/* Set scope for callbacks */
				var self = this;

				/* Cache Elements */
				this.cacheElements({
						page: '#page',
						main: '#main',
						footer: '#footer',
						header: '#header',
						nav: '.nav',
						navmain: '.nav-main',
						switcher: '[data-hook=switcher]'
				});

				 // Init and configure our page switcher
				this.pageSwitcher = new ViewSwitcher(this.queryByHook('switcher'), {
						waitForRemove: false,
						hide: function (oldView, cb) {
								// Set scope for callback of TweenMax
								var inSwitcher = this;

								// Hide oldView if oldView exits
								if(oldView && oldView.el){
										oldView.hookBeforeHide();
										TweenMax.to(oldView.el, 0.4, {opacity:0, onComplete:function(){
												// scroll to top
												TweenMax.to(window, 0.3, {scrollTo:{y:0}});
												// cb triggers the show function in ViewSwitcher
												cb.apply(inSwitcher);
										}, delay:0.2 });
								}
						},
						show: function (newView) {
								// Set Page Title
								document.title = _.result(newView.model, 'pageTitle');

								// Set newView opacity to 0
								TweenMax.set(newView.el, {opacity:0});

								// Animate newView opacity to 1
								TweenMax.to(newView.el, 0.8, {opacity:1, onComplete:function(){
									// Scroll to paramter 'section'
									self.scrollTo();
								}, delay:1.2});
						}
				});
				return this;
		},

		/*

			Function for the inital Handling of the Page

		*/

		handleInitialView: function (view) {

				var self = this;

				// Set child view as initial
				view.isInitial = true;

				// Set the el of the child view
				view.el = this.query('.view');

				// Render child view
				view.render();

				// Set current view of page switcher (silent)
				this.pageSwitcher.current = view;

				// Handle active stuff in navigation
				this.updateActiveNav();

				// Scroll to paramter 'section'
				TweenMax.delayedCall(0.25, function(){ self.handleUpdateView() });

				setTimeout(function (){
					dom.addClass(document.body, 'Fb--hide');
				}, 2500);
		},

		/*

			Function for the Handling of a new Page loaded via Ajax

		*/

		handleNewView: function (view) {

				// TRACKING
				if(typeof ga != 'undefined'){
						ga('send', 'pageview', {
								'page': CM.App.router.history.location.pathname,
								'title': view.model.pageTitle
						});
				}

				// SWICTH THE VIEW
				this.pageSwitcher.set(view);

				// UPDATE PAG NAV
				this.updateActiveNav();

				setTimeout(function (){
					dom.addClass(document.body, 'FB--hide');
				}, 2500);

		},

		/*
			Updates current View if something changes but no url
		*/
		handleUpdateView: function(){
			this.scrollTo();
		},

		/*
			Toggle functions for mobile or Desktop Navigation
		*/

		handleClickToggle: function (e){
			e.preventDefault();
			var body = document.body;
			if( dom.hasClass(body, 'Navigation--show') || e == undefined){
					dom.removeClass(body, 'Navigation--show');
			} else{
					dom.addClass(body, 'Navigation--show');
			}
		},

		handleClickClose: function (e){
			var body = document.body;
			dom.removeClass(body, 'Navigation--show');
		},

		handleClickOpen: function (e){
			var body = document.body;
			dom.addClass(body, 'Navigation--show');
		},


		/*

		Click Handler for each a[href]

		*/

		handleLinkClick: function (e) {

			var aTag = e.delegateTarget,
					self = this,
					path = aTag.getAttribute("href");
			var params = path.split("?")[1],
					paramsA = [],
					paramslist = params.split('&');

					for (let i = 0; i < paramslist.length; i++ ) {
							let parampair = paramslist[i].split('=')
							paramsA[parampair[0]] = parampair[1];
					}

					var local = aTag.host === window.location.host;
					if (local && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && aTag.getAttribute("target") !== "_blank") {
							// no link handling via Browser
							e.preventDefault();
							// Route
							if (CM.App._params != {} && paramsA != {} && CM.App._params.section == paramsA.section){
								this.scrollTo();
							} else {
								CM.App.navigate(path);
							}
							// Close Navigation
							this.handleClickClose();
					}
				
		},

		scrollTo: function(){
				console.log("scrollTo");
				if (CM.App._params != {} && CM.App._params.section != null){
						var id = this.query('#'+CM.App._params.section);
						console.log(id);
						TweenMax.to(window, 1.2, {scrollTo:{x:0, y:id.offsetTop-150}, overwrite:true, ease:Power2.easeOut});
				}
		},

		updateActiveNav: function () {
				var path = window.location.pathname.slice(1),
						search = /(\w+\/)/g,
						match = search.exec(path),
						folder = path;

				if (match != null ) folder = match[0];
				this.queryAll('.Navigation a[href]').forEach(function (aTag) {

						var aPath = aTag.pathname.slice(1),
								parent = aTag.parentNode.className.indexOf('sub') != -1
												? aTag.parentNode.parentNode.parentNode
												: aTag.parentNode;

						if ( folder.length >= 1 && aPath.indexOf(folder) === 0){
										dom.addClass(parent, 'active');
						} else {
								if ( aPath == path){
										dom.addClass(parent, 'active');
								} else {
										dom.removeClass(parent, 'active');
								}
						}

				});
		}

});


export default MainView;
