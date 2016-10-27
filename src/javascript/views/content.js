import PageView from './base';
import ScrollMagic from '../features/scrollmagic/scrollmagic.js';

let SMContent = PageView.extend(ScrollMagic);
let Content = SMContent.extend({

	props:{
		isInitial: ['boolean', true, false],
		isScrollTop: ['boolean', true, false],
		counter5Val: ['number', true, 0],
		counter18Val: ['number', true, 0],
		over30: ['boolean', true, false]
	},

	events: {
		'mouseover #fact1': 'handleOver1',
		'mouseover #fact21': 'handleOver21',
		'mouseover #fact22': 'handleOver22',
		'mouseover #fact25': 'handleOver25',
		'mouseover #fact29': 'handleOver29',
		'mouseover #fact30': 'handleOver30',
		'mouseover #fact31': 'handleOver31',
		'input #fact9 input[name="age"]': 'handleChange9',
		'focus #fact9 input[name="age"]': 'handleFocus9'

	},

	hookBeforeHide: function(){

	},

	hookInRender: function () {
		var self = this;

		this.cacheElements({
				counter5: '.counter--5',
				counter18: '.counter--18',
				input9: 'input[name="age"]',
				output9: 'input[name="time"]'
		});

		if(this.isInitial) {
			self._smTweenElements();
		} else {
			setTimeout(function (){
				self._smTweenElements();
			}, 250)
		}

		this.start5();
		this.start18();
	},

	start5: function(){
		this.generate5(this);
	},
	generate5: function(scope){
		let newElement = document.createElement('span');
				newElement.innerHTML = scope.counter5Val;
				scope.counter5Val++;
		TweenMax.set(newElement, {opacity:0});
		scope.counter5.appendChild(newElement);
		TweenMax.to(newElement, 0.05, {opacity:1, onStart:function(){
			if(this.target.previousElementSibling != null) {
				TweenMax.to(this.target.previousElementSibling, 0.2, {opacity:0, overwrite:true, onComplete:function(){
					scope.counter5.removeChild(this.target);
				}})
			}
		}});
		TweenMax.delayedCall(0.1, function(){
			scope.generate5(scope);
		})
	},
	start18: function(){
		this.generate18(this);
	},
	generate18: function(scope){
		let newElement = document.createElement('span');
				newElement.innerHTML = scope.counter18Val;
				scope.counter18Val = scope.counter18Val+7;
		TweenMax.set(newElement, {opacity:0});
		scope.counter18.appendChild(newElement);
		TweenMax.to(newElement, 0.05, {opacity:1, onStart:function(){
			if(this.target.previousElementSibling != null) {
				TweenMax.to(this.target.previousElementSibling, 0.2, {opacity:0, overwrite:true, onComplete:function(){
					scope.counter18.removeChild(this.target);
				}})
			}
		}});
		TweenMax.delayedCall(1, function(){
			scope.generate18(scope);
		})
	},

	handleOver1: function() {
		TweenMax.fromTo('#klammer', 0.05, {rotation:-1}, {rotation:1, yoyo:true, repeat:10, transformOrigin:'center bottom'});
		TweenMax.fromTo('#vibrator', 0.05, {rotation:-0.5}, {rotation:0.5, yoyo:true, repeat:10, transformOrigin:'center top'});
	},
	handleOver21: function(){
		TweenMax.fromTo('#glocke-1', 0.1, {rotation:-4}, {rotation:4, transformOrigin:"right bottom", yoyo:true, repeat:10, onComplete:function(){
			TweenMax.to('#glocke-1', 0.1, {rotation:0, transformOrigin:"right bottom"});
		}});
		TweenMax.fromTo('#glocke-2', 0.1, {rotation:-4}, {rotation:4, transformOrigin:"left bottom", yoyo:true, repeat:10, onComplete:function(){
			TweenMax.to('#glocke-2', 0.1, {rotation:0, transformOrigin:"left bottom"});
		}});
	},
	handleOver22: function(){
		TweenMax.set('#kussmund', {scale:0.75});
		TweenMax.to('#kussmund', 0.7, {scale:1, transformOrigin:'center center', ease:Bounce.easeOut});
	},

	handleOver25: function(){
		TweenMax.to('#penisarrow', 0.7, {rotation:-360, transformOrigin:'center center', onComplete:function(){
			TweenMax.set('#penisarrow', {rotation:0})
			}
		});
	},

	handleOver29: function(){
		TweenMax.to('#Form_7', 0.7, {rotation:-360, transformOrigin:'center center', onComplete:function(){
			TweenMax.set('#Form_7', {rotation:0})
			}
		});
		TweenMax.fromTo('#Form_8', 0.25, {scale:1}, {scale:1.5, transformOrigin:'center center', yoyo:true, repeat:2 });
	},

	handleOver30: function(){
		let self = this;
		if(!this.over30){
			this.over30 = true;
			TweenMax.to('#glocke_1', 0.25, {rotation:15, transformOrigin:'center top', ease:Sine.easeOut, onComplete:function(){
				TweenMax.to('#glocke_1', 0.25, {rotation:0, transformOrigin:'center top', ease:Sine.easeIn, onComplete:function(){
					TweenMax.to('#glocke_2', 0.25, {rotation:-10, transformOrigin:'center top', ease:Sine.easeOut, onComplete:function(){
						TweenMax.to('#glocke_2', 0.25, {rotation:0, transformOrigin:'center top', ease:Sine.easeIn, onComplete:function(){
								TweenMax.to('#glocke_1', 0.25, {rotation:5, transformOrigin:'center top', ease:Sine.easeOut, onComplete:function(){
									self.over30 = false;
									TweenMax.to('#glocke_1', 0.25, {rotation:0, transformOrigin:'center top', ease:Sine.easeIn});
								}});
						}});
					}});
				}});
			}
			});
		}
		// TweenMax.to('#glocke_2', 0.25, {rotation:-2, transformOrigin:'center top', onComplete:function(){
		// 	TweenMax.to('#glocke_2', 0.25, {rotation:2, transformOrigin:'center top'})
		// 	}
		// });
	},
	handleOver31: function() {
		TweenMax.fromTo('#dildo_1', 0.05, {rotation:-0.25}, {rotation:0.25, yoyo:true, repeat:100, delay:0.025, transformOrigin:'center bottom'});
		TweenMax.fromTo('#dildo_2', 0.05, {rotation:-0.25}, {rotation:0.25, yoyo:true, repeat:100, transformOrigin:'center bottom'});
	},

	handleChange9: function(e){
		TweenMax.set(this.output9, {opacity:0});
		var startAge = 16;
		var maxAge = Number(e.target.value) > 71 ? 71 : e.target.value;
		if(maxAge <= 16){
			maxAge = 16;
		}

		var days = (maxAge-startAge)*0.45;
		if(days < 10){
			days = this.decimalAdjust('round', days, -1)
		} else {
			days = Math.round(days);
		}

		this.output9.setAttribute("value", days);
		TweenMax.to('#largepointer', 0.5, {rotation:360, transformOrigin:'right bottom', onComplete:function(){
			TweenMax.set('#largepointer', {rotation:0, transformOrigin:'right bottom'});
		}});
		TweenMax.fromTo('#heart1', 0.05, {rotation:-4}, {rotation:0, yoyo:true, repeat:50, transformOrigin:'center bottom'});
		TweenMax.fromTo('#heart2', 0.05, {rotation:-4}, {rotation:0, yoyo:true, repeat:50, delay:0.025, transformOrigin:'center bottom'});
		TweenMax.to(this.output9, 0.4, {opacity:1, overwrite:1});

	},
	handleFocus9: function(e){
		if(e.target.getAttribute("value") == '??'){
			e.target.setAttribute("value", "");
		}
	},
	decimalAdjust: function (type, value, exp) {
	 // If the exp is undefined or zero...
	 if (typeof exp === 'undefined' || +exp === 0) {
		 return Math[type](value);
	 }
	 value = +value;
	 exp = +exp;
	 // If the value is not a number or the exp is not an integer...
	 if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
		 return NaN;
	 }
	 // Shift
	 value = value.toString().split('e');
	 value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
	 // Shift back
	 value = value.toString().split('e');
	 return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
 }


});

export default Content;
