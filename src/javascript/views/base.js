/*global $*/
// base view for page
import View from 'ampersand-view';
import _ from 'underscore';

import 'modernizr';

let Base = View.extend({

    props: {
        isInitial: ['boolean', true, false],
        isKilled: ['boolean', true, false]
    },

    template: function(){
        var content = this.model.pageContent;
        return content;
    },

    render: function(){
        // console.log("RENDER");
        if(!this.isInitial){
            this.renderWithTemplate(this);
        }

        this.hookInRender();

        this.once('remove', this.cleanup, this);
    },

    hookBeforeHide: function(){
      // destroy or animate before hide
    },

    hookInRender: function(){
        // additional Stuff in Render
    },

    cleanup: function(){
        //console.log("cleanup");
    },

    initSlider: function(element, config){
      // var self = this,
      //     slider = $(element),
      //     base = {
      //         loop: false,
      //         nav: true,
      //         margin: 0,
      //         items: 1,
      //         // center:true,
      //         autoHeight: false,
      //         itemsScaleUp: true
      //     };
      // _.extend(base, config);
      //
      // if( slider.length >= 1 ){
      //     slider.owlCarousel(base);
      // };

    },

    initResponsimg: function (){

  	}

});

export default Base;
