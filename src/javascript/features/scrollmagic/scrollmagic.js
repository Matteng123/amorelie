/*
	ScrollMagic Tweens Layer
*/
import ScrollMagic from 'ScrollMagic';
import AnimationGsap from 'animation.gsap';
import Indicators from 'indicators';

let smLayer = {
	_smTweenElements: function(){
				let animateController = new ScrollMagic.Controller({
								globalSceneOptions:{
										offset: 200,
										triggerHook:"onEnter"
								}
						});
				var calid = [];
				for(var ci=1; ci<13; ci++){
					calid.push(document.querySelector("#calender-"+ci));
				}
				var dir = 1;
				for(var i=1; i<37; i++){
						if(document.querySelectorAll("#fact"+i).length) {
								let elements = document.querySelectorAll(".animate"+i);
								let start = null;
								if(i == 1){
									start = function(){
										TweenMax.fromTo('#vibrator', 0.1, {rotation:-0.5}, {rotation:0.5, yoyo:true, repeat:100});
									}
								} else if(i == 17){
									start = function(){
										TweenMax.staggerFromTo(calid, 0.75, {opacity:0, scale:1.1, y:-1*15}, {opacity:1, y:0, scale:1, delay:1.5, overwrite:true}, 0.5);
									}
								}else if(i == 21){
									start = function(){
										TweenMax.fromTo('#glocke-1', 0.1, {rotation:-4}, {rotation:4, transformOrigin:"right bottom", yoyo:true, repeat:100, onComplete:function(){
											TweenMax.to('#glocke-1', 0.1, {rotation:0, transformOrigin:"right bottom"});
										}});
										TweenMax.fromTo('#glocke-2', 0.1, {rotation:-4}, {rotation:4, transformOrigin:"left bottom", yoyo:true, repeat:100, onComplete:function(){
											TweenMax.to('#glocke-2', 0.1, {rotation:0, transformOrigin:"left bottom"});
										}});
									}
								}
								let tween = TweenMax.staggerFromTo(elements, 1.1,
																				{y: 0, z:0, rotationX:-90, transformOrigin:"center top", opacity: 0},
																				{y: 0, z:0, rotationX:0, opacity: 1, ease: Ease.easeInOut, onStart:start},
																				0.25
																		);
								let scene = new ScrollMagic.Scene({triggerElement:"#fact"+i})
																.setTween(tween)
																// .addIndicators({name: "scene"+i})
																.addTo(animateController);
						};
				}
	}
}

module.exports = smLayer;
