/*
	ScrollMagic Tweens Layer
*/
import ScrollMagic from 'ScrollMagic';
import AnimationGsap from 'animation.gsap';
// import Indicators from 'indicators';
import dom from 'ampersand-dom';

let smLayer = {
	_smTweenElements: function(){
		let self = this;
		let animateController = new ScrollMagic.Controller({
						globalSceneOptions:{
								offset: 200,
								triggerHook:"onEnter"
						}
				});
		let calid = [];
		for(let ci=1; ci<13; ci++){
			calid.push(document.querySelector("#calender-"+ci));
		}
		let dir = 1;
		TweenMax.set('.counter--6 ul.first li', {opacity:0, overwrite:true});
		TweenMax.set('.counter--6 ul.second li', {opacity:0, overwrite:true});
		for(let i=1; i<37; i++){
				if(document.querySelectorAll("#fact"+i).length) {
						let elements = document.querySelectorAll(".animate"+i);
						let start = null;

						if(i == 1){
							start = function(){
								TweenMax.fromTo('#klammer', 0.05, {rotation:-1}, {rotation:1, yoyo:true, repeat:100, transformOrigin:'center bottom'});
								TweenMax.fromTo('#vibrator', 0.05, {rotation:-0.5}, {rotation:0.5, yoyo:true, repeat:100, transformOrigin:'center top'});
								TweenMax.delayedCall(2, function(){ dom.addClass(document.body, 'Fb--hide') } );
							}
						} else if(i == 6){
							start = function(){
								TweenMax.set('.counter--6 ul.first li', {opacity:0, overwrite:true});
								TweenMax.set('.counter--6 ul.second li', {opacity:0, overwrite:true});
								TweenMax.staggerTo('.counter--6 ul.first li', 0.5, {opacity:1, onStart:function(){
									if(this.target.previousElementSibling != null) {
										TweenMax.to(this.target.previousElementSibling, 0.5, {opacity:0, overwrite:true})
									}
								}}, 1);
								TweenMax.staggerTo('.counter--6 ul.second li', 0.5, {opacity:1, onStart:function(){
									if(this.target.previousElementSibling != null) {
										TweenMax.to(this.target.previousElementSibling, 0.5, {opacity:0, overwrite:true})
									}
								}}, 0.1);
							}
						} else if(i == 22){
							start = function(){
								TweenMax.set('.counter--22 ul.first li', {opacity:0, overwrite:true});
								TweenMax.set('.counter--22 ul.second li', {opacity:0, overwrite:true});
								TweenMax.staggerTo('.counter--22 ul.first li', 0.5, {opacity:1, onStart:function(){
									if(this.target.previousElementSibling != null) {
										TweenMax.to(this.target.previousElementSibling, 0.5, {opacity:0, overwrite:true})
									}
								}}, 1);
								TweenMax.staggerTo('.counter--22 ul.second li', 0.5, {opacity:1, onStart:function(){
									if(this.target.previousElementSibling != null) {
										TweenMax.to(this.target.previousElementSibling, 0.5, {opacity:0, overwrite:true})
									}
								}}, 0.1);
							}
						} else if(i == 31){
							start = function(){
								TweenMax.set('.counter--31 ul.first li', {opacity:0, overwrite:true});
								TweenMax.set('.counter--31 ul.second li', {opacity:0, overwrite:true});
								TweenMax.fromTo('#dildo_1', 0.05, {rotation:-0.25}, {rotation:0.25, yoyo:true, repeat:100, delay:0.025, transformOrigin:'center bottom'});
								TweenMax.fromTo('#dildo_2', 0.05, {rotation:-0.25}, {rotation:0.25, yoyo:true, repeat:100, transformOrigin:'center bottom'});
								TweenMax.staggerTo('.counter--31 ul.first li', 0.5, {opacity:1, onStart:function(){
									if(this.target.previousElementSibling != null) {
										TweenMax.to(this.target.previousElementSibling, 0.5, {opacity:0, overwrite:true})
									}
								}}, 1);
								TweenMax.staggerTo('.counter--31 ul.second li', 0.5, {opacity:1, onStart:function(){
									if(this.target.previousElementSibling != null) {
										TweenMax.to(this.target.previousElementSibling, 0.5, {opacity:0, overwrite:true})
									}
								}}, 0.1);
							}
						} else if(i == 17){
							start = function(){
								TweenMax.staggerFromTo(calid, 0.75, {opacity:0, scale:1.1, y:-1*15}, {opacity:1, y:0, scale:1, delay:1.5, overwrite:true}, 0.5);
							}
						} else if(i == 21){
							start = function(){
								TweenMax.fromTo('#glocke-1', 0.1, {rotation:-4}, {rotation:4, transformOrigin:"right bottom", yoyo:true, repeat:100, onComplete:function(){
									TweenMax.to('#glocke-1', 0.1, {rotation:0, transformOrigin:"right bottom"});
								}});
								TweenMax.fromTo('#glocke-2', 0.1, {rotation:-4}, {rotation:4, transformOrigin:"left bottom", yoyo:true, repeat:100, onComplete:function(){
									TweenMax.to('#glocke-2', 0.1, {rotation:0, transformOrigin:"left bottom"});
								}});
							}
						}
						let rand = Math.random();
						let tween = null;
						if(rand < 0.5){
							tween = TweenMax.staggerFromTo(elements, 1.75,
																		{y: 0, z:0, rotationX:-90, transformOrigin:"center top", opacity: 0},
																		{y: 0, z:0, rotationX:0, opacity: 1, ease: Ease.easeInOut, onStart:start},
																		0.25
																);
						} else if(rand >= 0.5 && rand < 0.75){
							tween = TweenMax.staggerFromTo(elements, 1.75,
																		{y: 0, z:0, rotationY:90, transformOrigin:"left center", opacity: 0},
																		{y: 0, z:0, rotationY:0, opacity: 1, ease: Ease.easeInOut, onStart:start},
																		0.25
																);
						} else {
							tween = TweenMax.staggerFromTo(elements, 1.75,
																		{y: 0, z:0, rotationY:-90, transformOrigin:"right center", opacity: 0},
																		{y: 0, z:0, rotationY:0, opacity: 1, ease: Ease.easeInOut, onStart:start},
																		0.25
																);
						}
						let scene = new ScrollMagic.Scene({triggerElement:"#fact"+i})
														.setTween(tween)
														// .addIndicators({name: "scene"+i})
														.addTo(animateController);
				};
		}
	}
}

module.exports = smLayer;
