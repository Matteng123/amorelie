import PageView from './base';
import ScrollMagic from '../features/scrollmagic/scrollmagic.js';

let SMContent = PageView.extend(ScrollMagic);
let Content = SMContent.extend({

	props:{
		isInitial: ['boolean', true, false],
		isScrollTop: ['boolean', true, false],
		counter5Val: ['number', true, 0],
		counter18Val: ['number', true, 0]
	},

	events: {
		'mouseover #fact25': 'handleOver25',
		'mouseover #fact1': 'handleOver1'
	},

	hookBeforeHide: function(){

	},

	hookInRender: function () {
		var self = this;

		this.cacheElements({
				counter5: '.counter--5',
				counter18: '.counter--18'
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
	handleOver25: function(){
		TweenMax.to('#penisarrow', 0.7, {rotation:-360, transformOrigin:'center center', onComplete:function(){
			TweenMax.set('#penisarrow', {rotation:0})
			}
		});
	},

	handleOver1: function() {
		TweenMax.fromTo('#klammer', 0.05, {rotation:-1}, {rotation:1, yoyo:true, repeat:100, transformOrigin:'center bottom'});
		TweenMax.fromTo('#vibrator', 0.05, {rotation:-0.5}, {rotation:0.5, yoyo:true, repeat:100, transformOrigin:'center top'});
	}


});

export default Content;
