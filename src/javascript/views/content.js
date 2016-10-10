import PageView from './base';

let Content = PageView.extend({

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
		this.initResponsimg();
	}

});

export default Content;
