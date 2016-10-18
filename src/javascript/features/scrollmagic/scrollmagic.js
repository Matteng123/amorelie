/*
	ScrollMagic Tweens Layer
*/
import ScrollMagic from 'ScrollMagic';
import AnimationGsap from 'animation.gsap';
import Indicators from 'indicators';

let smLayer = {
	_smTweenElements: function(){
			console.log("_smTweenElements");
				let animateController = new ScrollMagic.Controller({
								globalSceneOptions:{
										offset: 200,
										triggerHook:"onEnter"
								}
						});

				var dir = 1;
				for(var i=1; i<37; i++){
						if(document.querySelectorAll("#fact"+i).length) {
								let elements = Array.from(document.querySelectorAll(".animate"+i));
								let tween = TweenMax.staggerFromTo(elements, 1.1,
																				{y: 0, z:0, rotationX:-90, transformOrigin:"center top", opacity: 0},
																				{y: 0, z:0, rotationX:0, opacity: 1, ease: Ease.easeInOut},
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
