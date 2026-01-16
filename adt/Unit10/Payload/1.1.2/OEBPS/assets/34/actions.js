pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serofero - Unit 10";
pubcoder.page.id = pubcoder.page.id || 3831;
pubcoder.page.title = pubcoder.page.title || "34";
pubcoder.page.number = pubcoder.page.number || 34;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj4681_onTap_activeActionGroupIndex = -1;
var obj4681_onTap_runningActionsCount = 0;
var obj4681_onTap_loopCount = 0;
var obj4685_onTap_activeActionGroupIndex = -1;
var obj4685_onTap_runningActionsCount = 0;
var obj4685_onTap_loopCount = 0;
var obj4683_onTap_activeActionGroupIndex = -1;
var obj4683_onTap_runningActionsCount = 0;
var obj4683_onTap_loopCount = 0;
var obj4689_onTap_activeActionGroupIndex = -1;
var obj4689_onTap_runningActionsCount = 0;
var obj4689_onTap_loopCount = 0;
var obj4691_onTap_activeActionGroupIndex = -1;
var obj4691_onTap_runningActionsCount = 0;
var obj4691_onTap_loopCount = 0;
var obj13868_onTap_activeActionGroupIndex = -1;
var obj13868_onTap_runningActionsCount = 0;
var obj13868_onTap_loopCount = 0;
var obj13887_SCEventReadAloudStarted_activeActionGroupIndex = -1;
var obj13887_SCEventReadAloudStarted_runningActionsCount = 0;
var obj13887_SCEventReadAloudStarted_loopCount = 0;
var obj13887_SCEventReadAloudStopped_activeActionGroupIndex = -1;
var obj13887_SCEventReadAloudStopped_runningActionsCount = 0;
var obj13887_SCEventReadAloudStopped_loopCount = 0;
var obj13858_onTap_activeActionGroupIndex = -1;
var obj13858_onTap_runningActionsCount = 0;
var obj13858_onTap_loopCount = 0;
var obj13883_onTap_activeActionGroupIndex = -1;
var obj13883_onTap_runningActionsCount = 0;
var obj13883_onTap_loopCount = 0;
var obj13880_onTap_activeActionGroupIndex = -1;
var obj13880_onTap_runningActionsCount = 0;
var obj13880_onTap_loopCount = 0;
var obj13865_onTap_activeActionGroupIndex = -1;
var obj13865_onTap_runningActionsCount = 0;
var obj13865_onTap_loopCount = 0;
var obj13849_onTap_activeActionGroupIndex = -1;
var obj13849_onTap_runningActionsCount = 0;
var obj13849_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
 $(window).on(PubCoder.Events.PageLoad, function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	
	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 
 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCCrosswords
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCFillInTheGaps
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCTrueFalse
	 * 
	 * 
	 */
	
	
	/*
	 * 
	 * Init SCMatchWordWithPicture
	 * 
	 * 
	 */
	
    
    
	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj4681_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4681_onTap_activeActionGroupIndex = -1;
		$("#obj4681").trigger("obj4681_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4681) {
				console.warn("de-queueing event obj4681." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4681").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4681_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10503
(function(){
	window.obj4681_onTap_runningActionsCount = obj4681_onTap_runningActionsCount + 1;

	var selector = "#obj10503";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 0;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj4681_onTap_runningActionsCount = window.obj4681_onTap_runningActionsCount - 1;
if (window.obj4681_onTap_runningActionsCount < 0) {
	window.obj4681_onTap_runningActionsCount = 0;
} else if (window.obj4681_onTap_runningActionsCount == 0) {
	obj4681_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj4681_onTap_runningActionsCount = window.obj4681_onTap_runningActionsCount - 1;
if (window.obj4681_onTap_runningActionsCount < 0) {
	window.obj4681_onTap_runningActionsCount = 0;
} else if (window.obj4681_onTap_runningActionsCount == 0) {
	obj4681_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4681_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4681_onTap_activeActionGroupIndex = -1;
		$("#obj4681").trigger("obj4681_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4681) {
				console.warn("de-queueing event obj4681." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4681").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4681_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_10506();
function playAudioFile_10506() {
	window.obj4681_onTap_runningActionsCount = obj4681_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10506")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10506");
			$("#obj_audio_playSoundFile10506").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4681_onTap_runningActionsCount = window.obj4681_onTap_runningActionsCount - 1;
if (window.obj4681_onTap_runningActionsCount < 0) {
	window.obj4681_onTap_runningActionsCount = 0;
} else if (window.obj4681_onTap_runningActionsCount == 0) {
	obj4681_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4681_onTap_runningActionsCount = window.obj4681_onTap_runningActionsCount - 1;
if (window.obj4681_onTap_runningActionsCount < 0) {
	window.obj4681_onTap_runningActionsCount = 0;
} else if (window.obj4681_onTap_runningActionsCount == 0) {
	obj4681_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj4681_onTap_runningActionsCount = window.obj4681_onTap_runningActionsCount - 1;
if (window.obj4681_onTap_runningActionsCount < 0) {
	window.obj4681_onTap_runningActionsCount = 0;
} else if (window.obj4681_onTap_runningActionsCount == 0) {
	obj4681_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4681_onTap_runningActionsCount = window.obj4681_onTap_runningActionsCount - 1;
if (window.obj4681_onTap_runningActionsCount < 0) {
	window.obj4681_onTap_runningActionsCount = 0;
} else if (window.obj4681_onTap_runningActionsCount == 0) {
	obj4681_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj4681_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4681_onTap_activeActionGroupIndex = -1;
		$("#obj4681").trigger("obj4681_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4681) {
				console.warn("de-queueing event obj4681." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4681").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4681_onTap_activeActionGroupIndex = 2;
	






















};
obj4685_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4685_onTap_activeActionGroupIndex = -1;
		$("#obj4685").trigger("obj4685_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4685) {
				console.warn("de-queueing event obj4685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4685_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10515
(function(){
	window.obj4685_onTap_runningActionsCount = obj4685_onTap_runningActionsCount + 1;

	var selector = "#obj10515";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 0;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj4685_onTap_runningActionsCount = window.obj4685_onTap_runningActionsCount - 1;
if (window.obj4685_onTap_runningActionsCount < 0) {
	window.obj4685_onTap_runningActionsCount = 0;
} else if (window.obj4685_onTap_runningActionsCount == 0) {
	obj4685_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj4685_onTap_runningActionsCount = window.obj4685_onTap_runningActionsCount - 1;
if (window.obj4685_onTap_runningActionsCount < 0) {
	window.obj4685_onTap_runningActionsCount = 0;
} else if (window.obj4685_onTap_runningActionsCount == 0) {
	obj4685_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4685_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4685_onTap_activeActionGroupIndex = -1;
		$("#obj4685").trigger("obj4685_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4685) {
				console.warn("de-queueing event obj4685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4685_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_10508();
function playAudioFile_10508() {
	window.obj4685_onTap_runningActionsCount = obj4685_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10508")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10508");
			$("#obj_audio_playSoundFile10508").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4685_onTap_runningActionsCount = window.obj4685_onTap_runningActionsCount - 1;
if (window.obj4685_onTap_runningActionsCount < 0) {
	window.obj4685_onTap_runningActionsCount = 0;
} else if (window.obj4685_onTap_runningActionsCount == 0) {
	obj4685_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4685_onTap_runningActionsCount = window.obj4685_onTap_runningActionsCount - 1;
if (window.obj4685_onTap_runningActionsCount < 0) {
	window.obj4685_onTap_runningActionsCount = 0;
} else if (window.obj4685_onTap_runningActionsCount == 0) {
	obj4685_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj4685_onTap_runningActionsCount = window.obj4685_onTap_runningActionsCount - 1;
if (window.obj4685_onTap_runningActionsCount < 0) {
	window.obj4685_onTap_runningActionsCount = 0;
} else if (window.obj4685_onTap_runningActionsCount == 0) {
	obj4685_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4685_onTap_runningActionsCount = window.obj4685_onTap_runningActionsCount - 1;
if (window.obj4685_onTap_runningActionsCount < 0) {
	window.obj4685_onTap_runningActionsCount = 0;
} else if (window.obj4685_onTap_runningActionsCount == 0) {
	obj4685_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj4685_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4685_onTap_activeActionGroupIndex = -1;
		$("#obj4685").trigger("obj4685_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4685) {
				console.warn("de-queueing event obj4685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4685_onTap_activeActionGroupIndex = 2;
	






















};
obj4683_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4683_onTap_activeActionGroupIndex = -1;
		$("#obj4683").trigger("obj4683_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4683) {
				console.warn("de-queueing event obj4683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4683_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10517
(function(){
	window.obj4683_onTap_runningActionsCount = obj4683_onTap_runningActionsCount + 1;

	var selector = "#obj10517";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 0;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj4683_onTap_runningActionsCount = window.obj4683_onTap_runningActionsCount - 1;
if (window.obj4683_onTap_runningActionsCount < 0) {
	window.obj4683_onTap_runningActionsCount = 0;
} else if (window.obj4683_onTap_runningActionsCount == 0) {
	obj4683_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj4683_onTap_runningActionsCount = window.obj4683_onTap_runningActionsCount - 1;
if (window.obj4683_onTap_runningActionsCount < 0) {
	window.obj4683_onTap_runningActionsCount = 0;
} else if (window.obj4683_onTap_runningActionsCount == 0) {
	obj4683_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4683_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4683_onTap_activeActionGroupIndex = -1;
		$("#obj4683").trigger("obj4683_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4683) {
				console.warn("de-queueing event obj4683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4683_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_10510();
function playAudioFile_10510() {
	window.obj4683_onTap_runningActionsCount = obj4683_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10510")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10510");
			$("#obj_audio_playSoundFile10510").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4683_onTap_runningActionsCount = window.obj4683_onTap_runningActionsCount - 1;
if (window.obj4683_onTap_runningActionsCount < 0) {
	window.obj4683_onTap_runningActionsCount = 0;
} else if (window.obj4683_onTap_runningActionsCount == 0) {
	obj4683_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4683_onTap_runningActionsCount = window.obj4683_onTap_runningActionsCount - 1;
if (window.obj4683_onTap_runningActionsCount < 0) {
	window.obj4683_onTap_runningActionsCount = 0;
} else if (window.obj4683_onTap_runningActionsCount == 0) {
	obj4683_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj4683_onTap_runningActionsCount = window.obj4683_onTap_runningActionsCount - 1;
if (window.obj4683_onTap_runningActionsCount < 0) {
	window.obj4683_onTap_runningActionsCount = 0;
} else if (window.obj4683_onTap_runningActionsCount == 0) {
	obj4683_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4683_onTap_runningActionsCount = window.obj4683_onTap_runningActionsCount - 1;
if (window.obj4683_onTap_runningActionsCount < 0) {
	window.obj4683_onTap_runningActionsCount = 0;
} else if (window.obj4683_onTap_runningActionsCount == 0) {
	obj4683_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj4683_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4683_onTap_activeActionGroupIndex = -1;
		$("#obj4683").trigger("obj4683_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4683) {
				console.warn("de-queueing event obj4683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4683_onTap_activeActionGroupIndex = 2;
	






















};
obj4689_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4689_onTap_activeActionGroupIndex = -1;
		$("#obj4689").trigger("obj4689_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4689) {
				console.warn("de-queueing event obj4689." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4689").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4689_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10519
(function(){
	window.obj4689_onTap_runningActionsCount = obj4689_onTap_runningActionsCount + 1;

	var selector = "#obj10519";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 0;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj4689_onTap_runningActionsCount = window.obj4689_onTap_runningActionsCount - 1;
if (window.obj4689_onTap_runningActionsCount < 0) {
	window.obj4689_onTap_runningActionsCount = 0;
} else if (window.obj4689_onTap_runningActionsCount == 0) {
	obj4689_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj4689_onTap_runningActionsCount = window.obj4689_onTap_runningActionsCount - 1;
if (window.obj4689_onTap_runningActionsCount < 0) {
	window.obj4689_onTap_runningActionsCount = 0;
} else if (window.obj4689_onTap_runningActionsCount == 0) {
	obj4689_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4689_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4689_onTap_activeActionGroupIndex = -1;
		$("#obj4689").trigger("obj4689_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4689) {
				console.warn("de-queueing event obj4689." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4689").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4689_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_10512();
function playAudioFile_10512() {
	window.obj4689_onTap_runningActionsCount = obj4689_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10512")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10512");
			$("#obj_audio_playSoundFile10512").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4689_onTap_runningActionsCount = window.obj4689_onTap_runningActionsCount - 1;
if (window.obj4689_onTap_runningActionsCount < 0) {
	window.obj4689_onTap_runningActionsCount = 0;
} else if (window.obj4689_onTap_runningActionsCount == 0) {
	obj4689_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4689_onTap_runningActionsCount = window.obj4689_onTap_runningActionsCount - 1;
if (window.obj4689_onTap_runningActionsCount < 0) {
	window.obj4689_onTap_runningActionsCount = 0;
} else if (window.obj4689_onTap_runningActionsCount == 0) {
	obj4689_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj4689_onTap_runningActionsCount = window.obj4689_onTap_runningActionsCount - 1;
if (window.obj4689_onTap_runningActionsCount < 0) {
	window.obj4689_onTap_runningActionsCount = 0;
} else if (window.obj4689_onTap_runningActionsCount == 0) {
	obj4689_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4689_onTap_runningActionsCount = window.obj4689_onTap_runningActionsCount - 1;
if (window.obj4689_onTap_runningActionsCount < 0) {
	window.obj4689_onTap_runningActionsCount = 0;
} else if (window.obj4689_onTap_runningActionsCount == 0) {
	obj4689_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj4689_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4689_onTap_activeActionGroupIndex = -1;
		$("#obj4689").trigger("obj4689_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4689) {
				console.warn("de-queueing event obj4689." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4689").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4689_onTap_activeActionGroupIndex = 2;
	






















};
obj4691_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4691_onTap_activeActionGroupIndex = -1;
		$("#obj4691").trigger("obj4691_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4691) {
				console.warn("de-queueing event obj4691." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4691").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4691_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10521
(function(){
	window.obj4691_onTap_runningActionsCount = obj4691_onTap_runningActionsCount + 1;

	var selector = "#obj10521";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 0;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj4691_onTap_runningActionsCount = window.obj4691_onTap_runningActionsCount - 1;
if (window.obj4691_onTap_runningActionsCount < 0) {
	window.obj4691_onTap_runningActionsCount = 0;
} else if (window.obj4691_onTap_runningActionsCount == 0) {
	obj4691_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj4691_onTap_runningActionsCount = window.obj4691_onTap_runningActionsCount - 1;
if (window.obj4691_onTap_runningActionsCount < 0) {
	window.obj4691_onTap_runningActionsCount = 0;
} else if (window.obj4691_onTap_runningActionsCount == 0) {
	obj4691_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4691_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4691_onTap_activeActionGroupIndex = -1;
		$("#obj4691").trigger("obj4691_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4691) {
				console.warn("de-queueing event obj4691." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4691").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4691_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_10514();
function playAudioFile_10514() {
	window.obj4691_onTap_runningActionsCount = obj4691_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10514")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10514");
			$("#obj_audio_playSoundFile10514").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4691_onTap_runningActionsCount = window.obj4691_onTap_runningActionsCount - 1;
if (window.obj4691_onTap_runningActionsCount < 0) {
	window.obj4691_onTap_runningActionsCount = 0;
} else if (window.obj4691_onTap_runningActionsCount == 0) {
	obj4691_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4691_onTap_runningActionsCount = window.obj4691_onTap_runningActionsCount - 1;
if (window.obj4691_onTap_runningActionsCount < 0) {
	window.obj4691_onTap_runningActionsCount = 0;
} else if (window.obj4691_onTap_runningActionsCount == 0) {
	obj4691_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj4691_onTap_runningActionsCount = window.obj4691_onTap_runningActionsCount - 1;
if (window.obj4691_onTap_runningActionsCount < 0) {
	window.obj4691_onTap_runningActionsCount = 0;
} else if (window.obj4691_onTap_runningActionsCount == 0) {
	obj4691_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4691_onTap_runningActionsCount = window.obj4691_onTap_runningActionsCount - 1;
if (window.obj4691_onTap_runningActionsCount < 0) {
	window.obj4691_onTap_runningActionsCount = 0;
} else if (window.obj4691_onTap_runningActionsCount == 0) {
	obj4691_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj4691_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4691_onTap_activeActionGroupIndex = -1;
		$("#obj4691").trigger("obj4691_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4691) {
				console.warn("de-queueing event obj4691." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4691").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4691_onTap_activeActionGroupIndex = 2;
	






















};
obj13868_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13868_onTap_activeActionGroupIndex = -1;
		$("#obj13868").trigger("obj13868_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13868) {
				console.warn("de-queueing event obj13868." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13868").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13868_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_13872();
function runjs_13872() {
	window.obj13868_onTap_runningActionsCount = obj13868_onTap_runningActionsCount + 1;

	(function(){
    // Ensure window.pubcoder and its globalvariables exist
    if (typeof window.pubcoder === "undefined") {
        window.pubcoder = {};
    }
    if (!window.pubcoder.globalvariables) {
        window.pubcoder.globalvariables = {};
    }
    
    
    // Toggle the menu state
    var menuState = window.pubcoder.globalvariables.menuState;
    var newMenuState = !menuState;
    window.pubcoder.globalvariables.menuState = newMenuState;
    
    localStorage.setItem('menuState', newMenuState.toString());
    var items = document.getElementsByClassName("menu");
    for (var i = 0; i < items.length; i++) {
      item = items[i];
      if (newMenuState) {
            item.style.display = "block"; 
        } else {
            item.style.display = "none";
        }
    }
    
})();
	
	setTimeout(function() {
		window.obj13868_onTap_runningActionsCount = window.obj13868_onTap_runningActionsCount - 1;
if (window.obj13868_onTap_runningActionsCount < 0) {
	window.obj13868_onTap_runningActionsCount = 0;
} else if (window.obj13868_onTap_runningActionsCount == 0) {
	obj13868_onTap_actionGroup1();
}
	}, 1);
}







};
obj13868_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13868_onTap_activeActionGroupIndex = -1;
		$("#obj13868").trigger("obj13868_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13868) {
				console.warn("de-queueing event obj13868." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13868").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13868_onTap_activeActionGroupIndex = 1;
	






















};
obj13887_SCEventReadAloudStarted_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13887_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj13887").trigger("obj13887_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13887) {
				console.warn("de-queueing event obj13887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13887_SCEventReadAloudStarted_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj13887 
switchImage_13891();
function switchImage_13891() {
	window.obj13887_SCEventReadAloudStarted_runningActionsCount = obj13887_SCEventReadAloudStarted_runningActionsCount + 1;

	var targetObjectId = "#obj13887";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj13887_img";
	var fromImagePath = "../images/obj13887_image.png";
	var toImagePath = "../images/switch35_to.png";
	var switchHelperId = "switchHelper331"
	var switchHelperRef = "#switchHelper331"
	var switchId = "331";
	var toSwitchId = "331";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#";
	var toSoundObjectId = "#";
	var audioFrom;
	if (fromSoundObjectId != "#") audioFrom = $(fromSoundObjectId)[0];
	var audioTo;
	if (toSoundObjectId != "#") audioTo = $(toSoundObjectId)[0];
	
	var completionFunction = function () {
		if ($(targetObjectId).attr("data-SCActionSwitchImage-applied") == toSwitchId) $(imgObjId).attr("src", toImagePath);
		if (fadeDuration != "0s") {
			setTimeout(function() {
				$(imgObjId).show();
				$(switchHelperRef).remove();
				actionEndFunction();
			}, 100);
		} else {
			actionEndFunction();
		}
	}
	var actionEndFunction = function() {
			setTimeout(function() {
				window.obj13887_SCEventReadAloudStarted_runningActionsCount = window.obj13887_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj13887_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj13887_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj13887_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj13887_SCEventReadAloudStarted_actionGroup1();
}
			}, 1);
	};
	var originalImage = $(targetObjectId).attr("data-SCActionSwitchImage-originalImage");
	if (!(typeof originalImage !== typeof undefined && originalImage !== false)) {
		$(targetObjectId).attr("data-SCActionSwitchImage-originalImage", $(imgObjId).attr("src"));
	}
	var appliedSwitchImage = $(targetObjectId).attr("data-SCActionSwitchImage-applied");
	if (!(typeof appliedSwitchImage !== typeof undefined && appliedSwitchImage !== false)) {
		appliedSwitchImage = "";
	}
	if (appliedSwitchImage == switchId) {
		if (allowBackAndForth) {
			toImagePath = originalImage;
			toSwitchId = "";
			var audioSwapHelp = audioFrom;
			audioFrom = audioTo;
			audioTo = audioSwapHelp;
		} else {
			setTimeout(function() { actionEndFunction(); }, 1);
			return;
		}
	}
	setTimeout(function() {
		$(targetObjectId).attr("data-SCActionSwitchImage-applied", toSwitchId);
		if (audioFrom != null) { audioFrom.pause(); }
		if (audioTo != null) { audioTo.currentTime = 0; audioTo.play(); }
		if (fadeDuration == "0s") {
			completionFunction()
		} else {
			if ($(targetObjectId + " .SCActionSwitchImageHelper").length == 0) {
				$(targetObjectId).append('<img class="SCActionSwitchImageHelper" src="' + toImagePath + '" id="' + switchHelperId + '" style="height:' + $(targetObjectId).css('height') + '; width: ' + $(targetObjectId).css('width') + '; display: none; position: absolute; overflow:hidden; top: 0px; left: 0px; z-index: 999;"/>');
			} else {
				console.log("qui");
				$(targetObjectId + " .SCActionSwitchImageHelper").each(function (i,o) {
					console.log(o);
					$(o).attr("id", switchHelperId);
					$(o).attr("src", toImagePath);
				});
			}
			$(imgObjId).fadeOut(parseFloat(fadeDuration)*1000);
			$(switchHelperRef).fadeIn(parseFloat(fadeDuration)*1000, completionFunction);
		}
	}, 1);
}


















};
obj13887_SCEventReadAloudStarted_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13887_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj13887").trigger("obj13887_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13887) {
				console.warn("de-queueing event obj13887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13887_SCEventReadAloudStarted_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_13892();
function runjs_13892() {
	window.obj13887_SCEventReadAloudStarted_runningActionsCount = obj13887_SCEventReadAloudStarted_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over Pressed');
}
	
	setTimeout(function() {
		window.obj13887_SCEventReadAloudStarted_runningActionsCount = window.obj13887_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj13887_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj13887_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj13887_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj13887_SCEventReadAloudStarted_actionGroup2();
}
	}, 1);
}







};
obj13887_SCEventReadAloudStarted_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13887_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj13887").trigger("obj13887_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13887) {
				console.warn("de-queueing event obj13887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13887_SCEventReadAloudStarted_activeActionGroupIndex = 2;
	






















};
obj13887_SCEventReadAloudStopped_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13887_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj13887").trigger("obj13887_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13887) {
				console.warn("de-queueing event obj13887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13887_SCEventReadAloudStopped_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj13887 
switchImage_13897();
function switchImage_13897() {
	window.obj13887_SCEventReadAloudStopped_runningActionsCount = obj13887_SCEventReadAloudStopped_runningActionsCount + 1;

	var targetObjectId = "#obj13887";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj13887_img";
	var fromImagePath = "../images/obj13887_image.png";
	var toImagePath = "../images/obj13887_image.png";
	var switchHelperId = "switchHelper332"
	var switchHelperRef = "#switchHelper332"
	var switchId = "332";
	var toSwitchId = "332";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#";
	var toSoundObjectId = "#";
	var audioFrom;
	if (fromSoundObjectId != "#") audioFrom = $(fromSoundObjectId)[0];
	var audioTo;
	if (toSoundObjectId != "#") audioTo = $(toSoundObjectId)[0];
	
	var completionFunction = function () {
		if ($(targetObjectId).attr("data-SCActionSwitchImage-applied") == toSwitchId) $(imgObjId).attr("src", toImagePath);
		if (fadeDuration != "0s") {
			setTimeout(function() {
				$(imgObjId).show();
				$(switchHelperRef).remove();
				actionEndFunction();
			}, 100);
		} else {
			actionEndFunction();
		}
	}
	var actionEndFunction = function() {
			setTimeout(function() {
				window.obj13887_SCEventReadAloudStopped_runningActionsCount = window.obj13887_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj13887_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj13887_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj13887_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj13887_SCEventReadAloudStopped_actionGroup1();
}
			}, 1);
	};
	var originalImage = $(targetObjectId).attr("data-SCActionSwitchImage-originalImage");
	if (!(typeof originalImage !== typeof undefined && originalImage !== false)) {
		$(targetObjectId).attr("data-SCActionSwitchImage-originalImage", $(imgObjId).attr("src"));
	}
	var appliedSwitchImage = $(targetObjectId).attr("data-SCActionSwitchImage-applied");
	if (!(typeof appliedSwitchImage !== typeof undefined && appliedSwitchImage !== false)) {
		appliedSwitchImage = "";
	}
	if (appliedSwitchImage == switchId) {
		if (allowBackAndForth) {
			toImagePath = originalImage;
			toSwitchId = "";
			var audioSwapHelp = audioFrom;
			audioFrom = audioTo;
			audioTo = audioSwapHelp;
		} else {
			setTimeout(function() { actionEndFunction(); }, 1);
			return;
		}
	}
	setTimeout(function() {
		$(targetObjectId).attr("data-SCActionSwitchImage-applied", toSwitchId);
		if (audioFrom != null) { audioFrom.pause(); }
		if (audioTo != null) { audioTo.currentTime = 0; audioTo.play(); }
		if (fadeDuration == "0s") {
			completionFunction()
		} else {
			if ($(targetObjectId + " .SCActionSwitchImageHelper").length == 0) {
				$(targetObjectId).append('<img class="SCActionSwitchImageHelper" src="' + toImagePath + '" id="' + switchHelperId + '" style="height:' + $(targetObjectId).css('height') + '; width: ' + $(targetObjectId).css('width') + '; display: none; position: absolute; overflow:hidden; top: 0px; left: 0px; z-index: 999;"/>');
			} else {
				console.log("qui");
				$(targetObjectId + " .SCActionSwitchImageHelper").each(function (i,o) {
					console.log(o);
					$(o).attr("id", switchHelperId);
					$(o).attr("src", toImagePath);
				});
			}
			$(imgObjId).fadeOut(parseFloat(fadeDuration)*1000);
			$(switchHelperRef).fadeIn(parseFloat(fadeDuration)*1000, completionFunction);
		}
	}, 1);
}


















};
obj13887_SCEventReadAloudStopped_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13887_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj13887").trigger("obj13887_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13887) {
				console.warn("de-queueing event obj13887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13887_SCEventReadAloudStopped_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_13898();
function runjs_13898() {
	window.obj13887_SCEventReadAloudStopped_runningActionsCount = obj13887_SCEventReadAloudStopped_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over');
}
	
	setTimeout(function() {
		window.obj13887_SCEventReadAloudStopped_runningActionsCount = window.obj13887_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj13887_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj13887_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj13887_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj13887_SCEventReadAloudStopped_actionGroup2();
}
	}, 1);
}







};
obj13887_SCEventReadAloudStopped_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13887_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj13887").trigger("obj13887_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13887) {
				console.warn("de-queueing event obj13887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13887_SCEventReadAloudStopped_activeActionGroupIndex = 2;
	






















};
obj13858_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13858_onTap_activeActionGroupIndex = -1;
		$("#obj13858").trigger("obj13858_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13858) {
				console.warn("de-queueing event obj13858." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13858").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13858_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_13860();
function runjs_13860() {
	window.obj13858_onTap_runningActionsCount = obj13858_onTap_runningActionsCount + 1;

	(function(){
    // Ensure window.pubcoder and its globalvariables exist
    if (typeof window.pubcoder === "undefined") {
        window.pubcoder = {};
    }
    if (!window.pubcoder.globalvariables) {
        window.pubcoder.globalvariables = {};
    }
    
    // Toggle the videosDisabled state
    var currentState = window.pubcoder.globalvariables.videosDisabled;
    var newState = !currentState;
    console.log(newState);
    window.pubcoder.globalvariables.videosDisabled = newState;
    
    // Persist the new state in localStorage
    localStorage.setItem('videosDisabled', newState.toString());
    console.log("Toggle Button: Toggled videosDisabled state to:", newState);
    
    //Update the video elements on the current page based on the newState.
    var videos = document.querySelectorAll("video");
    const container1 = document.querySelector('.nsl-btn');
    if(newState){
        container1.setAttribute("aria-label", "Sign Language Pressed");
    } else {
        container1.setAttribute("aria-label", "Sign Language");
    }
    
    videos.forEach((video, index) => {
        if (newState) {
            console.log("Toggle Button: Showing and playing video #" + (index + 1));
            video.style.display = "block"; // Adjust as needed for your layout
            video.play();
            
            if (container1) {
              const img = container1.querySelector('img');
              if (img) {
                img.src = '../images/signLangEnabled.png';
              }  
            }
        } else {
            console.log("Toggle Button: Hiding and pausing video #" + (index + 1));
            video.pause();
            video.style.display = "none";
            if (container1) {
              const img = container1.querySelector('img');
              if (img) {
                img.src = '../images/sign_language.png';
              }
              
            }
        }
    });
   
})();
	
	setTimeout(function() {
		window.obj13858_onTap_runningActionsCount = window.obj13858_onTap_runningActionsCount - 1;
if (window.obj13858_onTap_runningActionsCount < 0) {
	window.obj13858_onTap_runningActionsCount = 0;
} else if (window.obj13858_onTap_runningActionsCount == 0) {
	obj13858_onTap_actionGroup1();
}
	}, 1);
}







};
obj13858_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13858_onTap_activeActionGroupIndex = -1;
		$("#obj13858").trigger("obj13858_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13858) {
				console.warn("de-queueing event obj13858." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13858").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13858_onTap_activeActionGroupIndex = 1;
	






















};
obj13883_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13883_onTap_activeActionGroupIndex = -1;
		$("#obj13883").trigger("obj13883_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13883) {
				console.warn("de-queueing event obj13883." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13883").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13883_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj13883 
switchImage_13885();
function switchImage_13885() {
	window.obj13883_onTap_runningActionsCount = obj13883_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj13883";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj13883_img";
	var fromImagePath = "../images/obj13883_image.png";
	var toImagePath = "../images/switch37_to.png";
	var switchHelperId = "switchHelper333"
	var switchHelperRef = "#switchHelper333"
	var switchId = "333";
	var toSwitchId = "333";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#";
	var toSoundObjectId = "#";
	var audioFrom;
	if (fromSoundObjectId != "#") audioFrom = $(fromSoundObjectId)[0];
	var audioTo;
	if (toSoundObjectId != "#") audioTo = $(toSoundObjectId)[0];
	
	var completionFunction = function () {
		if ($(targetObjectId).attr("data-SCActionSwitchImage-applied") == toSwitchId) $(imgObjId).attr("src", toImagePath);
		if (fadeDuration != "0s") {
			setTimeout(function() {
				$(imgObjId).show();
				$(switchHelperRef).remove();
				actionEndFunction();
			}, 100);
		} else {
			actionEndFunction();
		}
	}
	var actionEndFunction = function() {
			setTimeout(function() {
				window.obj13883_onTap_runningActionsCount = window.obj13883_onTap_runningActionsCount - 1;
if (window.obj13883_onTap_runningActionsCount < 0) {
	window.obj13883_onTap_runningActionsCount = 0;
} else if (window.obj13883_onTap_runningActionsCount == 0) {
	obj13883_onTap_actionGroup1();
}
			}, 1);
	};
	var originalImage = $(targetObjectId).attr("data-SCActionSwitchImage-originalImage");
	if (!(typeof originalImage !== typeof undefined && originalImage !== false)) {
		$(targetObjectId).attr("data-SCActionSwitchImage-originalImage", $(imgObjId).attr("src"));
	}
	var appliedSwitchImage = $(targetObjectId).attr("data-SCActionSwitchImage-applied");
	if (!(typeof appliedSwitchImage !== typeof undefined && appliedSwitchImage !== false)) {
		appliedSwitchImage = "";
	}
	if (appliedSwitchImage == switchId) {
		if (allowBackAndForth) {
			toImagePath = originalImage;
			toSwitchId = "";
			var audioSwapHelp = audioFrom;
			audioFrom = audioTo;
			audioTo = audioSwapHelp;
		} else {
			setTimeout(function() { actionEndFunction(); }, 1);
			return;
		}
	}
	setTimeout(function() {
		$(targetObjectId).attr("data-SCActionSwitchImage-applied", toSwitchId);
		if (audioFrom != null) { audioFrom.pause(); }
		if (audioTo != null) { audioTo.currentTime = 0; audioTo.play(); }
		if (fadeDuration == "0s") {
			completionFunction()
		} else {
			if ($(targetObjectId + " .SCActionSwitchImageHelper").length == 0) {
				$(targetObjectId).append('<img class="SCActionSwitchImageHelper" src="' + toImagePath + '" id="' + switchHelperId + '" style="height:' + $(targetObjectId).css('height') + '; width: ' + $(targetObjectId).css('width') + '; display: none; position: absolute; overflow:hidden; top: 0px; left: 0px; z-index: 999;"/>');
			} else {
				console.log("qui");
				$(targetObjectId + " .SCActionSwitchImageHelper").each(function (i,o) {
					console.log(o);
					$(o).attr("id", switchHelperId);
					$(o).attr("src", toImagePath);
				});
			}
			$(imgObjId).fadeOut(parseFloat(fadeDuration)*1000);
			$(switchHelperRef).fadeIn(parseFloat(fadeDuration)*1000, completionFunction);
		}
	}, 1);
}


















};
obj13883_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13883_onTap_activeActionGroupIndex = -1;
		$("#obj13883").trigger("obj13883_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13883) {
				console.warn("de-queueing event obj13883." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13883").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13883_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_13886();
function runjs_13886() {
	window.obj13883_onTap_runningActionsCount = obj13883_onTap_runningActionsCount + 1;

	(function(){
    // Ensure window.pubcoder and its globalvariables exist
    if (typeof window.pubcoder === "undefined") {
        window.pubcoder = {};
    }
    if (!window.pubcoder.globalvariables) {
        window.pubcoder.globalvariables = {};
    }
    
    
    // Toggle the menu state
    var pic_audio_state = window.pubcoder.globalvariables.pic_audio_state;
    var new_pic_audio_state = !pic_audio_state;
    window.pubcoder.globalvariables.pic_audio_state = new_pic_audio_state;
    
    localStorage.setItem('pic_audio_state', new_pic_audio_state.toString());
    // var items = document.getElementsByClassName("pic-audio");
    // for (var i = 0; i < items.length; i++) {
    //   item = items[i];
    //   if (new_pic_audio_state) {
    //         item.style.display = "block"; 
    //     } else {
    //         item.style.display = "none";
    //     }
        
    // }
    
    
})();
	
	setTimeout(function() {
		window.obj13883_onTap_runningActionsCount = window.obj13883_onTap_runningActionsCount - 1;
if (window.obj13883_onTap_runningActionsCount < 0) {
	window.obj13883_onTap_runningActionsCount = 0;
} else if (window.obj13883_onTap_runningActionsCount == 0) {
	obj13883_onTap_actionGroup2();
}
	}, 1);
}







};
obj13883_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13883_onTap_activeActionGroupIndex = -1;
		$("#obj13883").trigger("obj13883_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13883) {
				console.warn("de-queueing event obj13883." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13883").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13883_onTap_activeActionGroupIndex = 2;
	






















};
obj13880_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13880_onTap_activeActionGroupIndex = -1;
		$("#obj13880").trigger("obj13880_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13880) {
				console.warn("de-queueing event obj13880." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13880").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13880_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13882();
function goToPage_13882() {
	window.obj13880_onTap_runningActionsCount = obj13880_onTap_runningActionsCount + 1;
	$("#anchor334")[0].click();
	window.obj13880_onTap_runningActionsCount = window.obj13880_onTap_runningActionsCount - 1;
if (window.obj13880_onTap_runningActionsCount < 0) {
	window.obj13880_onTap_runningActionsCount = 0;
} else if (window.obj13880_onTap_runningActionsCount == 0) {
	obj13880_onTap_actionGroup1();
}
}





















};
obj13880_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13880_onTap_activeActionGroupIndex = -1;
		$("#obj13880").trigger("obj13880_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13880) {
				console.warn("de-queueing event obj13880." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13880").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13880_onTap_activeActionGroupIndex = 1;
	






















};
obj13865_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13865_onTap_activeActionGroupIndex = -1;
		$("#obj13865").trigger("obj13865_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13865) {
				console.warn("de-queueing event obj13865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13865_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13867();
function goToPage_13867() {
	window.obj13865_onTap_runningActionsCount = obj13865_onTap_runningActionsCount + 1;
	$("#anchor335")[0].click();
	window.obj13865_onTap_runningActionsCount = window.obj13865_onTap_runningActionsCount - 1;
if (window.obj13865_onTap_runningActionsCount < 0) {
	window.obj13865_onTap_runningActionsCount = 0;
} else if (window.obj13865_onTap_runningActionsCount == 0) {
	obj13865_onTap_actionGroup1();
}
}





















};
obj13865_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13865_onTap_activeActionGroupIndex = -1;
		$("#obj13865").trigger("obj13865_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13865) {
				console.warn("de-queueing event obj13865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13865_onTap_activeActionGroupIndex = 1;
	






















};
obj13849_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13849_onTap_activeActionGroupIndex = -1;
		$("#obj13849").trigger("obj13849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13849) {
				console.warn("de-queueing event obj13849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13849_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_13852();
function runjs_13852() {
	window.obj13849_onTap_runningActionsCount = obj13849_onTap_runningActionsCount + 1;

	(function(){
    if (typeof window.pubcoder === "undefined") {
        window.pubcoder = {};
    }
    if (!window.pubcoder.globalvariables) {
        window.pubcoder.globalvariables = {};
    }
    var menuState = window.pubcoder.globalvariables.menuState;
    var newMenuState = !menuState;
    window.pubcoder.globalvariables.menuState = newMenuState;
    
    localStorage.setItem('tocState', newMenuState.toString());
    var items = document.getElementsByClassName("tocmenu");
    
    var tocBtn = document.querySelector(".toc-btn");
    if(newMenuState){
        tocBtn.setAttribute("aria-label", "Table of Content Pressed");
    } else {
        tocBtn.setAttribute("aria-label", "Table of Content");
    }
    for (var i = 0; i < items.length; i++) {
      item = items[i];
      if (newMenuState) {
            item.style.display = "block"; 
        } else {
            item.style.display = "none";
        }
    }
})();
	
	setTimeout(function() {
		window.obj13849_onTap_runningActionsCount = window.obj13849_onTap_runningActionsCount - 1;
if (window.obj13849_onTap_runningActionsCount < 0) {
	window.obj13849_onTap_runningActionsCount = 0;
} else if (window.obj13849_onTap_runningActionsCount == 0) {
	obj13849_onTap_actionGroup1();
}
	}, 1);
}







};
obj13849_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13849_onTap_activeActionGroupIndex = -1;
		$("#obj13849").trigger("obj13849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13849) {
				console.warn("de-queueing event obj13849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13849_onTap_activeActionGroupIndex = 1;
	






















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

































/*
 *
 *   obj4681: Event Touch Down
 *
 */
$("#obj4681").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4681_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4681_onTap is still running");
	return;
}
var obj4681_onTap_runningActionsCount = 0;
var obj4681_onTap_loopCount = 0;
obj4681_onTap_actionGroup0();
});










/*
 *
 *   obj4685: Event Touch Down
 *
 */
$("#obj4685").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4685_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4685_onTap is still running");
	return;
}
var obj4685_onTap_runningActionsCount = 0;
var obj4685_onTap_loopCount = 0;
obj4685_onTap_actionGroup0();
});










/*
 *
 *   obj4683: Event Touch Down
 *
 */
$("#obj4683").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4683_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4683_onTap is still running");
	return;
}
var obj4683_onTap_runningActionsCount = 0;
var obj4683_onTap_loopCount = 0;
obj4683_onTap_actionGroup0();
});


















































/*
 *
 *   obj4689: Event Touch Down
 *
 */
$("#obj4689").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4689_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4689_onTap is still running");
	return;
}
var obj4689_onTap_runningActionsCount = 0;
var obj4689_onTap_loopCount = 0;
obj4689_onTap_actionGroup0();
});










/*
 *
 *   obj4691: Event Touch Down
 *
 */
$("#obj4691").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4691_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4691_onTap is still running");
	return;
}
var obj4691_onTap_runningActionsCount = 0;
var obj4691_onTap_loopCount = 0;
obj4691_onTap_actionGroup0();
});






































































/*
 *
 *   obj13868: Event Touch Down
 *
 */
$("#obj13868").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13868_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13868_onTap is still running");
	return;
}
var obj13868_onTap_runningActionsCount = 0;
var obj13868_onTap_loopCount = 0;
obj13868_onTap_actionGroup0();
});
























/*
 *
 *   obj13887: Event SCEventReadAloudStarted
 *
 */
$("#obj13887").bind("SCEventReadAloudStarted", function(event) {
	if (window.obj13887_SCEventReadAloudStarted_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13887_SCEventReadAloudStarted is still running");
	return;
}
var obj13887_SCEventReadAloudStarted_runningActionsCount = 0;
var obj13887_SCEventReadAloudStarted_loopCount = 0;
obj13887_SCEventReadAloudStarted_actionGroup0();
});
/*
 *
 *   obj13887: Event SCEventReadAloudStopped
 *
 */
$("#obj13887").bind("SCEventReadAloudStopped", function(event) {
	if (window.obj13887_SCEventReadAloudStopped_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13887_SCEventReadAloudStopped is still running");
	return;
}
var obj13887_SCEventReadAloudStopped_runningActionsCount = 0;
var obj13887_SCEventReadAloudStopped_loopCount = 0;
obj13887_SCEventReadAloudStopped_actionGroup0();
});





/*
 *
 *   obj13858: Event Touch Down
 *
 */
$("#obj13858").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13858_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13858_onTap is still running");
	return;
}
var obj13858_onTap_runningActionsCount = 0;
var obj13858_onTap_loopCount = 0;
obj13858_onTap_actionGroup0();
});










/*
 *
 *   obj13883: Event Touch Down
 *
 */
$("#obj13883").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13883_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13883_onTap is still running");
	return;
}
var obj13883_onTap_runningActionsCount = 0;
var obj13883_onTap_loopCount = 0;
obj13883_onTap_actionGroup0();
});










/*
 *
 *   obj13880: Event Touch Down
 *
 */
$("#obj13880").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13880_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13880_onTap is still running");
	return;
}
var obj13880_onTap_runningActionsCount = 0;
var obj13880_onTap_loopCount = 0;
obj13880_onTap_actionGroup0();
});










/*
 *
 *   obj13865: Event Touch Down
 *
 */
$("#obj13865").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13865_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13865_onTap is still running");
	return;
}
var obj13865_onTap_runningActionsCount = 0;
var obj13865_onTap_loopCount = 0;
obj13865_onTap_actionGroup0();
});










/*
 *
 *   obj13849: Event Touch Down
 *
 */
$("#obj13849").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13849_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13849_onTap is still running");
	return;
}
var obj13849_onTap_runningActionsCount = 0;
var obj13849_onTap_loopCount = 0;
obj13849_onTap_actionGroup0();
});







		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		XPUB.ready();
	 }
});
$(window).on(pubcoder.events.pagePlay, function() {
	$(window).trigger(pubcoder.events.pageReady);
	if (pubcoder.isInteractionObserverSupported) {
		var ob = new IntersectionObserver(function(entries) {
			$(entries).each(function (index, entry) {
				if (entry.isIntersecting) {
					$(entry.target).trigger(pubcoder.events.appear);
				} else {
					$(entry.target).trigger(pubcoder.events.disappear);
				}
			});
		}, {
			root: null,
			rootMargin: "0px",
			threshold: 0
		});
		$(".SCView").each(function (i, el) {
			ob.observe(el);
		});	
	}
	
$("#obj4404").trigger('SCEventShow');
$("#obj4116").trigger('SCEventShow');
$("#obj4406").trigger('SCEventShow');
$("#obj4681").trigger('SCEventShow');
$("#obj4685").trigger('SCEventShow');
$("#obj4683").trigger('SCEventShow');
$("#obj4689").trigger('SCEventShow');
$("#obj4691").trigger('SCEventShow');
$("#obj10139").trigger('SCEventShow');
$("#obj10215").trigger('SCEventShow');
$("#obj13887").trigger('SCEventShow');
$("#obj13858").trigger('SCEventShow');
$("#obj13880").trigger('SCEventShow');
$("#obj13865").trigger('SCEventShow');
$("#obj13849").trigger('SCEventShow');
	const divs = document.querySelectorAll('.focusable');
    divs.forEach(div => {
      div.setAttribute('tabindex', '0');
      div.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault(); 
          const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
          });
          event.target.dispatchEvent(clickEvent);
        }
      });
    });
    
const audio_imgs = document.querySelectorAll('.aimg');
    audio_imgs.forEach(div => {
        div.setAttribute('tabindex', '0');
        div.addEventListener("focus", () => {
            
    if (typeof window.pubcoder === "undefined") {
        window.pubcoder = {};
    }
    if (!window.pubcoder.globalvariables) {
        window.pubcoder.globalvariables = {};
    }
    
    // Toggle the menu state
    var pic_audio_state = window.pubcoder.globalvariables.pic_audio_state;
     if(pic_audio_state){
          const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
          });
          div.dispatchEvent(clickEvent);
     }
        });
        
});

document.querySelectorAll('[class*="t"]').forEach(el => {
  el.classList.forEach(cls => {
    const match = cls.match(/^t(\d{1,2})$/); // Match classes like "t1" to "t20"
    if (match) {
      const index = parseInt(match[1]);
      if (index >= 1 && index <= 40) {
        el.setAttribute('tabindex', index);
      }
    }
  });
});
document.querySelectorAll('video').forEach(dragElement);
function dragElement(elmnt) {
    
  elmnt.setAttribute("controls","controls");
    
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.style.position = 'absolute'; // Ensure draggable behavior
  elmnt.addEventListener('mousedown', dragMouseDown);
  elmnt.addEventListener('touchstart', dragTouchStart, { passive: false });
  function dragMouseDown(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDragMouse;
  }
  function dragTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    pos3 = touch.clientX;
    pos4 = touch.clientY;
    document.ontouchend = closeDragElement;
    document.ontouchmove = elementDragTouch;
  }
  function elementDragMouse(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function elementDragTouch(e) {
    e.preventDefault();
    const touch = e.touches[0];
    pos1 = pos3 - touch.clientX;
    pos2 = pos4 - touch.clientY;
    pos3 = touch.clientX;
    pos4 = touch.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    document.ontouchend = null;
    document.ontouchmove = null;
  }
}

(function(){
    if (typeof window.pubcoder === "undefined") {
        window.pubcoder = {};
    }
    if (!window.pubcoder.globalvariables) {
        window.pubcoder.globalvariables = {};
    }
    var storedState = localStorage.getItem("videosDisabled");
    var currentState = storedState === "true"; 
    window.pubcoder.globalvariables.videosDisabled = currentState;
    console.log("videosDisabled from localStorage:", currentState);
    const container1 = document.querySelector('.nsl-btn');
    if(currentState){
        container1.setAttribute("aria-label", "Sign Language Pressed");
    } else {
        container1.setAttribute("aria-label", "Sign Language");
    }
    
    var videos = document.querySelectorAll("video");
    videos.forEach((video, index) => {
        if (currentState) {
            console.log("Toggle Button: Showing and playing video #" + (index + 1));
            video.style.display = "block";
            video.play();
            const container = document.querySelector('.nsl-btn');
            if (container) {
              const img = container.querySelector('img');
              if (img) {
                img.src = '../images/signLangEnabled.png';
              }
            }
        } else {
            console.log("Toggle Button: Hiding and pausing video #" + (index + 1));
            video.pause();
            video.style.display = "none";
            const container1 = document.querySelector('.nsl-btn');
            if (container1) {
              const img = container1.querySelector('img');
              if (img) {
                img.src = '../images/sign_language.png';
              }
            }
        }
    });
})();
});