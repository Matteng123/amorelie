import PageView from './base';
import ScrollMagic from '../features/scrollmagic/scrollmagic.js';

let SMContent = PageView.extend(ScrollMagic);
let Content = SMContent.extend({

	props:{
		isInitial: ['boolean', true, false],
		isScrollTop: ['boolean', true, false]
	},

	events: {

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
	}

});

export default Content;
