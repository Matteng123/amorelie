import PageView from './base';
import ScrollMagic from '../features/scrollmagic/scrollmagic.js';

let SMContent = PageView.extend(ScrollMagic);
let Content = SMContent.extend({

	props:{
		isInitial: ['boolean', true, false],
		isScrollTop: ['boolean', true, false]
	},

	events: {
		'mouseover #fact25': 'handleOver25',
		'mouseover #fact1': 'handleOver1'
	},

	hookBeforeHide: function(){

	},

	hookInRender: function () {
		var self = this;
		if(this.isInitial) {
			self._smTweenElements();
		} else {
			setTimeout(function (){
				self._smTweenElements();
			}, 250)
		}
	},


	handleOver25: function(){
		TweenMax.to('#penisarrow', 0.7, {rotation:-360, transformOrigin:'center center', onComplete:function(){
			TweenMax.set('#penisarrow', {rotation:0})
			}
		});
	},

	handleOver1: function() {
		TweenMax.fromTo('#vibrator', 0.1, {rotation:-0.5}, {rotation:0.5, yoyo:true, repeat:100});
	}


});

export default Content;
