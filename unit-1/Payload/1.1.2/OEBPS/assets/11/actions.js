pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Unit 1";
pubcoder.page.id = pubcoder.page.id || 1475;
pubcoder.page.title = pubcoder.page.title || "11";
pubcoder.page.number = pubcoder.page.number || 11;
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
var obj2168_onTap_activeActionGroupIndex = -1;
var obj2168_onTap_runningActionsCount = 0;
var obj2168_onTap_loopCount = 0;
var obj2170_onTap_activeActionGroupIndex = -1;
var obj2170_onTap_runningActionsCount = 0;
var obj2170_onTap_loopCount = 0;
var obj2172_onTap_activeActionGroupIndex = -1;
var obj2172_onTap_runningActionsCount = 0;
var obj2172_onTap_loopCount = 0;
var obj2174_onTap_activeActionGroupIndex = -1;
var obj2174_onTap_runningActionsCount = 0;
var obj2174_onTap_loopCount = 0;
var obj2176_onTap_activeActionGroupIndex = -1;
var obj2176_onTap_runningActionsCount = 0;
var obj2176_onTap_loopCount = 0;
var obj2178_onTap_activeActionGroupIndex = -1;
var obj2178_onTap_runningActionsCount = 0;
var obj2178_onTap_loopCount = 0;
var obj2180_onTap_activeActionGroupIndex = -1;
var obj2180_onTap_runningActionsCount = 0;
var obj2180_onTap_loopCount = 0;
var obj2182_onTap_activeActionGroupIndex = -1;
var obj2182_onTap_runningActionsCount = 0;
var obj2182_onTap_loopCount = 0;
var obj2184_onTap_activeActionGroupIndex = -1;
var obj2184_onTap_runningActionsCount = 0;
var obj2184_onTap_loopCount = 0;
var obj2186_onTap_activeActionGroupIndex = -1;
var obj2186_onTap_runningActionsCount = 0;
var obj2186_onTap_loopCount = 0;
var obj2188_onTap_activeActionGroupIndex = -1;
var obj2188_onTap_runningActionsCount = 0;
var obj2188_onTap_loopCount = 0;
var obj2190_onTap_activeActionGroupIndex = -1;
var obj2190_onTap_runningActionsCount = 0;
var obj2190_onTap_loopCount = 0;
var obj2192_onTap_activeActionGroupIndex = -1;
var obj2192_onTap_runningActionsCount = 0;
var obj2192_onTap_loopCount = 0;
var obj2935_SCEventReadAloudStarted_activeActionGroupIndex = -1;
var obj2935_SCEventReadAloudStarted_runningActionsCount = 0;
var obj2935_SCEventReadAloudStarted_loopCount = 0;
var obj2935_SCEventReadAloudStopped_activeActionGroupIndex = -1;
var obj2935_SCEventReadAloudStopped_runningActionsCount = 0;
var obj2935_SCEventReadAloudStopped_loopCount = 0;
var obj2928_onTap_activeActionGroupIndex = -1;
var obj2928_onTap_runningActionsCount = 0;
var obj2928_onTap_loopCount = 0;
var obj2924_onTap_activeActionGroupIndex = -1;
var obj2924_onTap_runningActionsCount = 0;
var obj2924_onTap_loopCount = 0;
var obj2921_onTap_activeActionGroupIndex = -1;
var obj2921_onTap_runningActionsCount = 0;
var obj2921_onTap_loopCount = 0;
var obj2918_onTap_activeActionGroupIndex = -1;
var obj2918_onTap_runningActionsCount = 0;
var obj2918_onTap_loopCount = 0;
var obj2907_onTouchUp_activeActionGroupIndex = -1;
var obj2907_onTouchUp_runningActionsCount = 0;
var obj2907_onTouchUp_loopCount = 0;
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
		
obj2168_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2168_onTap_activeActionGroupIndex = -1;
		$("#obj2168").trigger("obj2168_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2168) {
				console.warn("de-queueing event obj2168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2168_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4564
(function(){
	window.obj2168_onTap_runningActionsCount = obj2168_onTap_runningActionsCount + 1;

	var selector = "#obj4564";
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
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2168_onTap_runningActionsCount = window.obj2168_onTap_runningActionsCount - 1;
if (window.obj2168_onTap_runningActionsCount < 0) {
	window.obj2168_onTap_runningActionsCount = 0;
} else if (window.obj2168_onTap_runningActionsCount == 0) {
	obj2168_onTap_actionGroup1();
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
				window.obj2168_onTap_runningActionsCount = window.obj2168_onTap_runningActionsCount - 1;
if (window.obj2168_onTap_runningActionsCount < 0) {
	window.obj2168_onTap_runningActionsCount = 0;
} else if (window.obj2168_onTap_runningActionsCount == 0) {
	obj2168_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2168_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2168_onTap_activeActionGroupIndex = -1;
		$("#obj2168").trigger("obj2168_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2168) {
				console.warn("de-queueing event obj2168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2168_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4673();
function playAudioFile_4673() {
	window.obj2168_onTap_runningActionsCount = obj2168_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4673")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4673");
			$("#obj_audio_playSoundFile4673").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2168_onTap_runningActionsCount = window.obj2168_onTap_runningActionsCount - 1;
if (window.obj2168_onTap_runningActionsCount < 0) {
	window.obj2168_onTap_runningActionsCount = 0;
} else if (window.obj2168_onTap_runningActionsCount == 0) {
	obj2168_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2168_onTap_runningActionsCount = window.obj2168_onTap_runningActionsCount - 1;
if (window.obj2168_onTap_runningActionsCount < 0) {
	window.obj2168_onTap_runningActionsCount = 0;
} else if (window.obj2168_onTap_runningActionsCount == 0) {
	obj2168_onTap_actionGroup2();
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
				window.obj2168_onTap_runningActionsCount = window.obj2168_onTap_runningActionsCount - 1;
if (window.obj2168_onTap_runningActionsCount < 0) {
	window.obj2168_onTap_runningActionsCount = 0;
} else if (window.obj2168_onTap_runningActionsCount == 0) {
	obj2168_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2168_onTap_runningActionsCount = window.obj2168_onTap_runningActionsCount - 1;
if (window.obj2168_onTap_runningActionsCount < 0) {
	window.obj2168_onTap_runningActionsCount = 0;
} else if (window.obj2168_onTap_runningActionsCount == 0) {
	obj2168_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2168_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2168_onTap_activeActionGroupIndex = -1;
		$("#obj2168").trigger("obj2168_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2168) {
				console.warn("de-queueing event obj2168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2168_onTap_activeActionGroupIndex = 2;
	





















};
obj2170_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2170_onTap_activeActionGroupIndex = -1;
		$("#obj2170").trigger("obj2170_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2170) {
				console.warn("de-queueing event obj2170." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2170").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2170_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4568
(function(){
	window.obj2170_onTap_runningActionsCount = obj2170_onTap_runningActionsCount + 1;

	var selector = "#obj4568";
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
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2170_onTap_runningActionsCount = window.obj2170_onTap_runningActionsCount - 1;
if (window.obj2170_onTap_runningActionsCount < 0) {
	window.obj2170_onTap_runningActionsCount = 0;
} else if (window.obj2170_onTap_runningActionsCount == 0) {
	obj2170_onTap_actionGroup1();
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
				window.obj2170_onTap_runningActionsCount = window.obj2170_onTap_runningActionsCount - 1;
if (window.obj2170_onTap_runningActionsCount < 0) {
	window.obj2170_onTap_runningActionsCount = 0;
} else if (window.obj2170_onTap_runningActionsCount == 0) {
	obj2170_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2170_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2170_onTap_activeActionGroupIndex = -1;
		$("#obj2170").trigger("obj2170_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2170) {
				console.warn("de-queueing event obj2170." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2170").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2170_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4675();
function playAudioFile_4675() {
	window.obj2170_onTap_runningActionsCount = obj2170_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4675")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4675");
			$("#obj_audio_playSoundFile4675").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2170_onTap_runningActionsCount = window.obj2170_onTap_runningActionsCount - 1;
if (window.obj2170_onTap_runningActionsCount < 0) {
	window.obj2170_onTap_runningActionsCount = 0;
} else if (window.obj2170_onTap_runningActionsCount == 0) {
	obj2170_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2170_onTap_runningActionsCount = window.obj2170_onTap_runningActionsCount - 1;
if (window.obj2170_onTap_runningActionsCount < 0) {
	window.obj2170_onTap_runningActionsCount = 0;
} else if (window.obj2170_onTap_runningActionsCount == 0) {
	obj2170_onTap_actionGroup2();
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
				window.obj2170_onTap_runningActionsCount = window.obj2170_onTap_runningActionsCount - 1;
if (window.obj2170_onTap_runningActionsCount < 0) {
	window.obj2170_onTap_runningActionsCount = 0;
} else if (window.obj2170_onTap_runningActionsCount == 0) {
	obj2170_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2170_onTap_runningActionsCount = window.obj2170_onTap_runningActionsCount - 1;
if (window.obj2170_onTap_runningActionsCount < 0) {
	window.obj2170_onTap_runningActionsCount = 0;
} else if (window.obj2170_onTap_runningActionsCount == 0) {
	obj2170_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2170_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2170_onTap_activeActionGroupIndex = -1;
		$("#obj2170").trigger("obj2170_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2170) {
				console.warn("de-queueing event obj2170." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2170").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2170_onTap_activeActionGroupIndex = 2;
	





















};
obj2172_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2172_onTap_activeActionGroupIndex = -1;
		$("#obj2172").trigger("obj2172_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2172) {
				console.warn("de-queueing event obj2172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2172_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4570
(function(){
	window.obj2172_onTap_runningActionsCount = obj2172_onTap_runningActionsCount + 1;

	var selector = "#obj4570";
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
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2172_onTap_runningActionsCount = window.obj2172_onTap_runningActionsCount - 1;
if (window.obj2172_onTap_runningActionsCount < 0) {
	window.obj2172_onTap_runningActionsCount = 0;
} else if (window.obj2172_onTap_runningActionsCount == 0) {
	obj2172_onTap_actionGroup1();
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
				window.obj2172_onTap_runningActionsCount = window.obj2172_onTap_runningActionsCount - 1;
if (window.obj2172_onTap_runningActionsCount < 0) {
	window.obj2172_onTap_runningActionsCount = 0;
} else if (window.obj2172_onTap_runningActionsCount == 0) {
	obj2172_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2172_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2172_onTap_activeActionGroupIndex = -1;
		$("#obj2172").trigger("obj2172_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2172) {
				console.warn("de-queueing event obj2172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2172_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4676();
function playAudioFile_4676() {
	window.obj2172_onTap_runningActionsCount = obj2172_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4676")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4676");
			$("#obj_audio_playSoundFile4676").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2172_onTap_runningActionsCount = window.obj2172_onTap_runningActionsCount - 1;
if (window.obj2172_onTap_runningActionsCount < 0) {
	window.obj2172_onTap_runningActionsCount = 0;
} else if (window.obj2172_onTap_runningActionsCount == 0) {
	obj2172_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2172_onTap_runningActionsCount = window.obj2172_onTap_runningActionsCount - 1;
if (window.obj2172_onTap_runningActionsCount < 0) {
	window.obj2172_onTap_runningActionsCount = 0;
} else if (window.obj2172_onTap_runningActionsCount == 0) {
	obj2172_onTap_actionGroup2();
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
				window.obj2172_onTap_runningActionsCount = window.obj2172_onTap_runningActionsCount - 1;
if (window.obj2172_onTap_runningActionsCount < 0) {
	window.obj2172_onTap_runningActionsCount = 0;
} else if (window.obj2172_onTap_runningActionsCount == 0) {
	obj2172_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2172_onTap_runningActionsCount = window.obj2172_onTap_runningActionsCount - 1;
if (window.obj2172_onTap_runningActionsCount < 0) {
	window.obj2172_onTap_runningActionsCount = 0;
} else if (window.obj2172_onTap_runningActionsCount == 0) {
	obj2172_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2172_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2172_onTap_activeActionGroupIndex = -1;
		$("#obj2172").trigger("obj2172_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2172) {
				console.warn("de-queueing event obj2172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2172_onTap_activeActionGroupIndex = 2;
	





















};
obj2174_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2174_onTap_activeActionGroupIndex = -1;
		$("#obj2174").trigger("obj2174_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2174) {
				console.warn("de-queueing event obj2174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2174_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4566
(function(){
	window.obj2174_onTap_runningActionsCount = obj2174_onTap_runningActionsCount + 1;

	var selector = "#obj4566";
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
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2174_onTap_runningActionsCount = window.obj2174_onTap_runningActionsCount - 1;
if (window.obj2174_onTap_runningActionsCount < 0) {
	window.obj2174_onTap_runningActionsCount = 0;
} else if (window.obj2174_onTap_runningActionsCount == 0) {
	obj2174_onTap_actionGroup1();
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
				window.obj2174_onTap_runningActionsCount = window.obj2174_onTap_runningActionsCount - 1;
if (window.obj2174_onTap_runningActionsCount < 0) {
	window.obj2174_onTap_runningActionsCount = 0;
} else if (window.obj2174_onTap_runningActionsCount == 0) {
	obj2174_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2174_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2174_onTap_activeActionGroupIndex = -1;
		$("#obj2174").trigger("obj2174_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2174) {
				console.warn("de-queueing event obj2174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2174_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4674();
function playAudioFile_4674() {
	window.obj2174_onTap_runningActionsCount = obj2174_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4674")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4674");
			$("#obj_audio_playSoundFile4674").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2174_onTap_runningActionsCount = window.obj2174_onTap_runningActionsCount - 1;
if (window.obj2174_onTap_runningActionsCount < 0) {
	window.obj2174_onTap_runningActionsCount = 0;
} else if (window.obj2174_onTap_runningActionsCount == 0) {
	obj2174_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2174_onTap_runningActionsCount = window.obj2174_onTap_runningActionsCount - 1;
if (window.obj2174_onTap_runningActionsCount < 0) {
	window.obj2174_onTap_runningActionsCount = 0;
} else if (window.obj2174_onTap_runningActionsCount == 0) {
	obj2174_onTap_actionGroup2();
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
				window.obj2174_onTap_runningActionsCount = window.obj2174_onTap_runningActionsCount - 1;
if (window.obj2174_onTap_runningActionsCount < 0) {
	window.obj2174_onTap_runningActionsCount = 0;
} else if (window.obj2174_onTap_runningActionsCount == 0) {
	obj2174_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2174_onTap_runningActionsCount = window.obj2174_onTap_runningActionsCount - 1;
if (window.obj2174_onTap_runningActionsCount < 0) {
	window.obj2174_onTap_runningActionsCount = 0;
} else if (window.obj2174_onTap_runningActionsCount == 0) {
	obj2174_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2174_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2174_onTap_activeActionGroupIndex = -1;
		$("#obj2174").trigger("obj2174_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2174) {
				console.warn("de-queueing event obj2174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2174_onTap_activeActionGroupIndex = 2;
	





















};
obj2176_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2176_onTap_activeActionGroupIndex = -1;
		$("#obj2176").trigger("obj2176_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2176) {
				console.warn("de-queueing event obj2176." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2176").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2176_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4574
(function(){
	window.obj2176_onTap_runningActionsCount = obj2176_onTap_runningActionsCount + 1;

	var selector = "#obj4574";
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
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2176_onTap_runningActionsCount = window.obj2176_onTap_runningActionsCount - 1;
if (window.obj2176_onTap_runningActionsCount < 0) {
	window.obj2176_onTap_runningActionsCount = 0;
} else if (window.obj2176_onTap_runningActionsCount == 0) {
	obj2176_onTap_actionGroup1();
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
				window.obj2176_onTap_runningActionsCount = window.obj2176_onTap_runningActionsCount - 1;
if (window.obj2176_onTap_runningActionsCount < 0) {
	window.obj2176_onTap_runningActionsCount = 0;
} else if (window.obj2176_onTap_runningActionsCount == 0) {
	obj2176_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2176_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2176_onTap_activeActionGroupIndex = -1;
		$("#obj2176").trigger("obj2176_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2176) {
				console.warn("de-queueing event obj2176." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2176").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2176_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4785();
function playAudioFile_4785() {
	window.obj2176_onTap_runningActionsCount = obj2176_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4785")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4785");
			$("#obj_audio_playSoundFile4785").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2176_onTap_runningActionsCount = window.obj2176_onTap_runningActionsCount - 1;
if (window.obj2176_onTap_runningActionsCount < 0) {
	window.obj2176_onTap_runningActionsCount = 0;
} else if (window.obj2176_onTap_runningActionsCount == 0) {
	obj2176_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2176_onTap_runningActionsCount = window.obj2176_onTap_runningActionsCount - 1;
if (window.obj2176_onTap_runningActionsCount < 0) {
	window.obj2176_onTap_runningActionsCount = 0;
} else if (window.obj2176_onTap_runningActionsCount == 0) {
	obj2176_onTap_actionGroup2();
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
				window.obj2176_onTap_runningActionsCount = window.obj2176_onTap_runningActionsCount - 1;
if (window.obj2176_onTap_runningActionsCount < 0) {
	window.obj2176_onTap_runningActionsCount = 0;
} else if (window.obj2176_onTap_runningActionsCount == 0) {
	obj2176_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2176_onTap_runningActionsCount = window.obj2176_onTap_runningActionsCount - 1;
if (window.obj2176_onTap_runningActionsCount < 0) {
	window.obj2176_onTap_runningActionsCount = 0;
} else if (window.obj2176_onTap_runningActionsCount == 0) {
	obj2176_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2176_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2176_onTap_activeActionGroupIndex = -1;
		$("#obj2176").trigger("obj2176_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2176) {
				console.warn("de-queueing event obj2176." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2176").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2176_onTap_activeActionGroupIndex = 2;
	





















};
obj2178_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2178_onTap_activeActionGroupIndex = -1;
		$("#obj2178").trigger("obj2178_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2178) {
				console.warn("de-queueing event obj2178." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2178").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2178_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4578
(function(){
	window.obj2178_onTap_runningActionsCount = obj2178_onTap_runningActionsCount + 1;

	var selector = "#obj4578";
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
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2178_onTap_runningActionsCount = window.obj2178_onTap_runningActionsCount - 1;
if (window.obj2178_onTap_runningActionsCount < 0) {
	window.obj2178_onTap_runningActionsCount = 0;
} else if (window.obj2178_onTap_runningActionsCount == 0) {
	obj2178_onTap_actionGroup1();
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
				window.obj2178_onTap_runningActionsCount = window.obj2178_onTap_runningActionsCount - 1;
if (window.obj2178_onTap_runningActionsCount < 0) {
	window.obj2178_onTap_runningActionsCount = 0;
} else if (window.obj2178_onTap_runningActionsCount == 0) {
	obj2178_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2178_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2178_onTap_activeActionGroupIndex = -1;
		$("#obj2178").trigger("obj2178_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2178) {
				console.warn("de-queueing event obj2178." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2178").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2178_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4787();
function playAudioFile_4787() {
	window.obj2178_onTap_runningActionsCount = obj2178_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4787")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4787");
			$("#obj_audio_playSoundFile4787").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2178_onTap_runningActionsCount = window.obj2178_onTap_runningActionsCount - 1;
if (window.obj2178_onTap_runningActionsCount < 0) {
	window.obj2178_onTap_runningActionsCount = 0;
} else if (window.obj2178_onTap_runningActionsCount == 0) {
	obj2178_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2178_onTap_runningActionsCount = window.obj2178_onTap_runningActionsCount - 1;
if (window.obj2178_onTap_runningActionsCount < 0) {
	window.obj2178_onTap_runningActionsCount = 0;
} else if (window.obj2178_onTap_runningActionsCount == 0) {
	obj2178_onTap_actionGroup2();
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
				window.obj2178_onTap_runningActionsCount = window.obj2178_onTap_runningActionsCount - 1;
if (window.obj2178_onTap_runningActionsCount < 0) {
	window.obj2178_onTap_runningActionsCount = 0;
} else if (window.obj2178_onTap_runningActionsCount == 0) {
	obj2178_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2178_onTap_runningActionsCount = window.obj2178_onTap_runningActionsCount - 1;
if (window.obj2178_onTap_runningActionsCount < 0) {
	window.obj2178_onTap_runningActionsCount = 0;
} else if (window.obj2178_onTap_runningActionsCount == 0) {
	obj2178_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2178_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2178_onTap_activeActionGroupIndex = -1;
		$("#obj2178").trigger("obj2178_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2178) {
				console.warn("de-queueing event obj2178." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2178").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2178_onTap_activeActionGroupIndex = 2;
	





















};
obj2180_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2180_onTap_activeActionGroupIndex = -1;
		$("#obj2180").trigger("obj2180_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2180) {
				console.warn("de-queueing event obj2180." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2180").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2180_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4576
(function(){
	window.obj2180_onTap_runningActionsCount = obj2180_onTap_runningActionsCount + 1;

	var selector = "#obj4576";
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
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2180_onTap_runningActionsCount = window.obj2180_onTap_runningActionsCount - 1;
if (window.obj2180_onTap_runningActionsCount < 0) {
	window.obj2180_onTap_runningActionsCount = 0;
} else if (window.obj2180_onTap_runningActionsCount == 0) {
	obj2180_onTap_actionGroup1();
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
				window.obj2180_onTap_runningActionsCount = window.obj2180_onTap_runningActionsCount - 1;
if (window.obj2180_onTap_runningActionsCount < 0) {
	window.obj2180_onTap_runningActionsCount = 0;
} else if (window.obj2180_onTap_runningActionsCount == 0) {
	obj2180_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2180_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2180_onTap_activeActionGroupIndex = -1;
		$("#obj2180").trigger("obj2180_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2180) {
				console.warn("de-queueing event obj2180." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2180").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2180_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4786();
function playAudioFile_4786() {
	window.obj2180_onTap_runningActionsCount = obj2180_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4786")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4786");
			$("#obj_audio_playSoundFile4786").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2180_onTap_runningActionsCount = window.obj2180_onTap_runningActionsCount - 1;
if (window.obj2180_onTap_runningActionsCount < 0) {
	window.obj2180_onTap_runningActionsCount = 0;
} else if (window.obj2180_onTap_runningActionsCount == 0) {
	obj2180_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2180_onTap_runningActionsCount = window.obj2180_onTap_runningActionsCount - 1;
if (window.obj2180_onTap_runningActionsCount < 0) {
	window.obj2180_onTap_runningActionsCount = 0;
} else if (window.obj2180_onTap_runningActionsCount == 0) {
	obj2180_onTap_actionGroup2();
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
				window.obj2180_onTap_runningActionsCount = window.obj2180_onTap_runningActionsCount - 1;
if (window.obj2180_onTap_runningActionsCount < 0) {
	window.obj2180_onTap_runningActionsCount = 0;
} else if (window.obj2180_onTap_runningActionsCount == 0) {
	obj2180_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2180_onTap_runningActionsCount = window.obj2180_onTap_runningActionsCount - 1;
if (window.obj2180_onTap_runningActionsCount < 0) {
	window.obj2180_onTap_runningActionsCount = 0;
} else if (window.obj2180_onTap_runningActionsCount == 0) {
	obj2180_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2180_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2180_onTap_activeActionGroupIndex = -1;
		$("#obj2180").trigger("obj2180_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2180) {
				console.warn("de-queueing event obj2180." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2180").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2180_onTap_activeActionGroupIndex = 2;
	





















};
obj2182_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2182_onTap_activeActionGroupIndex = -1;
		$("#obj2182").trigger("obj2182_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2182) {
				console.warn("de-queueing event obj2182." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2182").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2182_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4580
(function(){
	window.obj2182_onTap_runningActionsCount = obj2182_onTap_runningActionsCount + 1;

	var selector = "#obj4580";
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
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2182_onTap_runningActionsCount = window.obj2182_onTap_runningActionsCount - 1;
if (window.obj2182_onTap_runningActionsCount < 0) {
	window.obj2182_onTap_runningActionsCount = 0;
} else if (window.obj2182_onTap_runningActionsCount == 0) {
	obj2182_onTap_actionGroup1();
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
				window.obj2182_onTap_runningActionsCount = window.obj2182_onTap_runningActionsCount - 1;
if (window.obj2182_onTap_runningActionsCount < 0) {
	window.obj2182_onTap_runningActionsCount = 0;
} else if (window.obj2182_onTap_runningActionsCount == 0) {
	obj2182_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2182_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2182_onTap_activeActionGroupIndex = -1;
		$("#obj2182").trigger("obj2182_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2182) {
				console.warn("de-queueing event obj2182." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2182").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2182_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4788();
function playAudioFile_4788() {
	window.obj2182_onTap_runningActionsCount = obj2182_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4788")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4788");
			$("#obj_audio_playSoundFile4788").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2182_onTap_runningActionsCount = window.obj2182_onTap_runningActionsCount - 1;
if (window.obj2182_onTap_runningActionsCount < 0) {
	window.obj2182_onTap_runningActionsCount = 0;
} else if (window.obj2182_onTap_runningActionsCount == 0) {
	obj2182_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2182_onTap_runningActionsCount = window.obj2182_onTap_runningActionsCount - 1;
if (window.obj2182_onTap_runningActionsCount < 0) {
	window.obj2182_onTap_runningActionsCount = 0;
} else if (window.obj2182_onTap_runningActionsCount == 0) {
	obj2182_onTap_actionGroup2();
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
				window.obj2182_onTap_runningActionsCount = window.obj2182_onTap_runningActionsCount - 1;
if (window.obj2182_onTap_runningActionsCount < 0) {
	window.obj2182_onTap_runningActionsCount = 0;
} else if (window.obj2182_onTap_runningActionsCount == 0) {
	obj2182_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2182_onTap_runningActionsCount = window.obj2182_onTap_runningActionsCount - 1;
if (window.obj2182_onTap_runningActionsCount < 0) {
	window.obj2182_onTap_runningActionsCount = 0;
} else if (window.obj2182_onTap_runningActionsCount == 0) {
	obj2182_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2182_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2182_onTap_activeActionGroupIndex = -1;
		$("#obj2182").trigger("obj2182_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2182) {
				console.warn("de-queueing event obj2182." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2182").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2182_onTap_activeActionGroupIndex = 2;
	





















};
obj2184_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2184_onTap_activeActionGroupIndex = -1;
		$("#obj2184").trigger("obj2184_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2184) {
				console.warn("de-queueing event obj2184." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2184").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2184_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4586
(function(){
	window.obj2184_onTap_runningActionsCount = obj2184_onTap_runningActionsCount + 1;

	var selector = "#obj4586";
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
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2184_onTap_runningActionsCount = window.obj2184_onTap_runningActionsCount - 1;
if (window.obj2184_onTap_runningActionsCount < 0) {
	window.obj2184_onTap_runningActionsCount = 0;
} else if (window.obj2184_onTap_runningActionsCount == 0) {
	obj2184_onTap_actionGroup1();
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
				window.obj2184_onTap_runningActionsCount = window.obj2184_onTap_runningActionsCount - 1;
if (window.obj2184_onTap_runningActionsCount < 0) {
	window.obj2184_onTap_runningActionsCount = 0;
} else if (window.obj2184_onTap_runningActionsCount == 0) {
	obj2184_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2184_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2184_onTap_activeActionGroupIndex = -1;
		$("#obj2184").trigger("obj2184_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2184) {
				console.warn("de-queueing event obj2184." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2184").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2184_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4792();
function playAudioFile_4792() {
	window.obj2184_onTap_runningActionsCount = obj2184_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4792")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4792");
			$("#obj_audio_playSoundFile4792").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2184_onTap_runningActionsCount = window.obj2184_onTap_runningActionsCount - 1;
if (window.obj2184_onTap_runningActionsCount < 0) {
	window.obj2184_onTap_runningActionsCount = 0;
} else if (window.obj2184_onTap_runningActionsCount == 0) {
	obj2184_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2184_onTap_runningActionsCount = window.obj2184_onTap_runningActionsCount - 1;
if (window.obj2184_onTap_runningActionsCount < 0) {
	window.obj2184_onTap_runningActionsCount = 0;
} else if (window.obj2184_onTap_runningActionsCount == 0) {
	obj2184_onTap_actionGroup2();
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
				window.obj2184_onTap_runningActionsCount = window.obj2184_onTap_runningActionsCount - 1;
if (window.obj2184_onTap_runningActionsCount < 0) {
	window.obj2184_onTap_runningActionsCount = 0;
} else if (window.obj2184_onTap_runningActionsCount == 0) {
	obj2184_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2184_onTap_runningActionsCount = window.obj2184_onTap_runningActionsCount - 1;
if (window.obj2184_onTap_runningActionsCount < 0) {
	window.obj2184_onTap_runningActionsCount = 0;
} else if (window.obj2184_onTap_runningActionsCount == 0) {
	obj2184_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2184_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2184_onTap_activeActionGroupIndex = -1;
		$("#obj2184").trigger("obj2184_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2184) {
				console.warn("de-queueing event obj2184." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2184").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2184_onTap_activeActionGroupIndex = 2;
	





















};
obj2186_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2186_onTap_activeActionGroupIndex = -1;
		$("#obj2186").trigger("obj2186_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2186) {
				console.warn("de-queueing event obj2186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2186_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4584
(function(){
	window.obj2186_onTap_runningActionsCount = obj2186_onTap_runningActionsCount + 1;

	var selector = "#obj4584";
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
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2186_onTap_runningActionsCount = window.obj2186_onTap_runningActionsCount - 1;
if (window.obj2186_onTap_runningActionsCount < 0) {
	window.obj2186_onTap_runningActionsCount = 0;
} else if (window.obj2186_onTap_runningActionsCount == 0) {
	obj2186_onTap_actionGroup1();
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
				window.obj2186_onTap_runningActionsCount = window.obj2186_onTap_runningActionsCount - 1;
if (window.obj2186_onTap_runningActionsCount < 0) {
	window.obj2186_onTap_runningActionsCount = 0;
} else if (window.obj2186_onTap_runningActionsCount == 0) {
	obj2186_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2186_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2186_onTap_activeActionGroupIndex = -1;
		$("#obj2186").trigger("obj2186_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2186) {
				console.warn("de-queueing event obj2186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2186_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4791();
function playAudioFile_4791() {
	window.obj2186_onTap_runningActionsCount = obj2186_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4791")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4791");
			$("#obj_audio_playSoundFile4791").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2186_onTap_runningActionsCount = window.obj2186_onTap_runningActionsCount - 1;
if (window.obj2186_onTap_runningActionsCount < 0) {
	window.obj2186_onTap_runningActionsCount = 0;
} else if (window.obj2186_onTap_runningActionsCount == 0) {
	obj2186_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2186_onTap_runningActionsCount = window.obj2186_onTap_runningActionsCount - 1;
if (window.obj2186_onTap_runningActionsCount < 0) {
	window.obj2186_onTap_runningActionsCount = 0;
} else if (window.obj2186_onTap_runningActionsCount == 0) {
	obj2186_onTap_actionGroup2();
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
				window.obj2186_onTap_runningActionsCount = window.obj2186_onTap_runningActionsCount - 1;
if (window.obj2186_onTap_runningActionsCount < 0) {
	window.obj2186_onTap_runningActionsCount = 0;
} else if (window.obj2186_onTap_runningActionsCount == 0) {
	obj2186_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2186_onTap_runningActionsCount = window.obj2186_onTap_runningActionsCount - 1;
if (window.obj2186_onTap_runningActionsCount < 0) {
	window.obj2186_onTap_runningActionsCount = 0;
} else if (window.obj2186_onTap_runningActionsCount == 0) {
	obj2186_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2186_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2186_onTap_activeActionGroupIndex = -1;
		$("#obj2186").trigger("obj2186_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2186) {
				console.warn("de-queueing event obj2186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2186_onTap_activeActionGroupIndex = 2;
	





















};
obj2188_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2188_onTap_activeActionGroupIndex = -1;
		$("#obj2188").trigger("obj2188_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2188) {
				console.warn("de-queueing event obj2188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2188_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4588
(function(){
	window.obj2188_onTap_runningActionsCount = obj2188_onTap_runningActionsCount + 1;

	var selector = "#obj4588";
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
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2188_onTap_runningActionsCount = window.obj2188_onTap_runningActionsCount - 1;
if (window.obj2188_onTap_runningActionsCount < 0) {
	window.obj2188_onTap_runningActionsCount = 0;
} else if (window.obj2188_onTap_runningActionsCount == 0) {
	obj2188_onTap_actionGroup1();
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
				window.obj2188_onTap_runningActionsCount = window.obj2188_onTap_runningActionsCount - 1;
if (window.obj2188_onTap_runningActionsCount < 0) {
	window.obj2188_onTap_runningActionsCount = 0;
} else if (window.obj2188_onTap_runningActionsCount == 0) {
	obj2188_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2188_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2188_onTap_activeActionGroupIndex = -1;
		$("#obj2188").trigger("obj2188_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2188) {
				console.warn("de-queueing event obj2188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2188_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4790();
function playAudioFile_4790() {
	window.obj2188_onTap_runningActionsCount = obj2188_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4790")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4790");
			$("#obj_audio_playSoundFile4790").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2188_onTap_runningActionsCount = window.obj2188_onTap_runningActionsCount - 1;
if (window.obj2188_onTap_runningActionsCount < 0) {
	window.obj2188_onTap_runningActionsCount = 0;
} else if (window.obj2188_onTap_runningActionsCount == 0) {
	obj2188_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2188_onTap_runningActionsCount = window.obj2188_onTap_runningActionsCount - 1;
if (window.obj2188_onTap_runningActionsCount < 0) {
	window.obj2188_onTap_runningActionsCount = 0;
} else if (window.obj2188_onTap_runningActionsCount == 0) {
	obj2188_onTap_actionGroup2();
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
				window.obj2188_onTap_runningActionsCount = window.obj2188_onTap_runningActionsCount - 1;
if (window.obj2188_onTap_runningActionsCount < 0) {
	window.obj2188_onTap_runningActionsCount = 0;
} else if (window.obj2188_onTap_runningActionsCount == 0) {
	obj2188_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2188_onTap_runningActionsCount = window.obj2188_onTap_runningActionsCount - 1;
if (window.obj2188_onTap_runningActionsCount < 0) {
	window.obj2188_onTap_runningActionsCount = 0;
} else if (window.obj2188_onTap_runningActionsCount == 0) {
	obj2188_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2188_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2188_onTap_activeActionGroupIndex = -1;
		$("#obj2188").trigger("obj2188_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2188) {
				console.warn("de-queueing event obj2188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2188_onTap_activeActionGroupIndex = 2;
	





















};
obj2190_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2190_onTap_activeActionGroupIndex = -1;
		$("#obj2190").trigger("obj2190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2190) {
				console.warn("de-queueing event obj2190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2190_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4582
(function(){
	window.obj2190_onTap_runningActionsCount = obj2190_onTap_runningActionsCount + 1;

	var selector = "#obj4582";
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
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2190_onTap_runningActionsCount = window.obj2190_onTap_runningActionsCount - 1;
if (window.obj2190_onTap_runningActionsCount < 0) {
	window.obj2190_onTap_runningActionsCount = 0;
} else if (window.obj2190_onTap_runningActionsCount == 0) {
	obj2190_onTap_actionGroup1();
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
				window.obj2190_onTap_runningActionsCount = window.obj2190_onTap_runningActionsCount - 1;
if (window.obj2190_onTap_runningActionsCount < 0) {
	window.obj2190_onTap_runningActionsCount = 0;
} else if (window.obj2190_onTap_runningActionsCount == 0) {
	obj2190_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2190_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2190_onTap_activeActionGroupIndex = -1;
		$("#obj2190").trigger("obj2190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2190) {
				console.warn("de-queueing event obj2190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2190_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4789();
function playAudioFile_4789() {
	window.obj2190_onTap_runningActionsCount = obj2190_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4789")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4789");
			$("#obj_audio_playSoundFile4789").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2190_onTap_runningActionsCount = window.obj2190_onTap_runningActionsCount - 1;
if (window.obj2190_onTap_runningActionsCount < 0) {
	window.obj2190_onTap_runningActionsCount = 0;
} else if (window.obj2190_onTap_runningActionsCount == 0) {
	obj2190_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2190_onTap_runningActionsCount = window.obj2190_onTap_runningActionsCount - 1;
if (window.obj2190_onTap_runningActionsCount < 0) {
	window.obj2190_onTap_runningActionsCount = 0;
} else if (window.obj2190_onTap_runningActionsCount == 0) {
	obj2190_onTap_actionGroup2();
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
				window.obj2190_onTap_runningActionsCount = window.obj2190_onTap_runningActionsCount - 1;
if (window.obj2190_onTap_runningActionsCount < 0) {
	window.obj2190_onTap_runningActionsCount = 0;
} else if (window.obj2190_onTap_runningActionsCount == 0) {
	obj2190_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2190_onTap_runningActionsCount = window.obj2190_onTap_runningActionsCount - 1;
if (window.obj2190_onTap_runningActionsCount < 0) {
	window.obj2190_onTap_runningActionsCount = 0;
} else if (window.obj2190_onTap_runningActionsCount == 0) {
	obj2190_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2190_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2190_onTap_activeActionGroupIndex = -1;
		$("#obj2190").trigger("obj2190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2190) {
				console.warn("de-queueing event obj2190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2190_onTap_activeActionGroupIndex = 2;
	





















};
obj2192_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2192_onTap_activeActionGroupIndex = -1;
		$("#obj2192").trigger("obj2192_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2192) {
				console.warn("de-queueing event obj2192." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2192").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2192_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4572
(function(){
	window.obj2192_onTap_runningActionsCount = obj2192_onTap_runningActionsCount + 1;

	var selector = "#obj4572";
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
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2192_onTap_runningActionsCount = window.obj2192_onTap_runningActionsCount - 1;
if (window.obj2192_onTap_runningActionsCount < 0) {
	window.obj2192_onTap_runningActionsCount = 0;
} else if (window.obj2192_onTap_runningActionsCount == 0) {
	obj2192_onTap_actionGroup1();
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
				window.obj2192_onTap_runningActionsCount = window.obj2192_onTap_runningActionsCount - 1;
if (window.obj2192_onTap_runningActionsCount < 0) {
	window.obj2192_onTap_runningActionsCount = 0;
} else if (window.obj2192_onTap_runningActionsCount == 0) {
	obj2192_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2192_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2192_onTap_activeActionGroupIndex = -1;
		$("#obj2192").trigger("obj2192_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2192) {
				console.warn("de-queueing event obj2192." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2192").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2192_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4677();
function playAudioFile_4677() {
	window.obj2192_onTap_runningActionsCount = obj2192_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4677")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4677");
			$("#obj_audio_playSoundFile4677").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2192_onTap_runningActionsCount = window.obj2192_onTap_runningActionsCount - 1;
if (window.obj2192_onTap_runningActionsCount < 0) {
	window.obj2192_onTap_runningActionsCount = 0;
} else if (window.obj2192_onTap_runningActionsCount == 0) {
	obj2192_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2192_onTap_runningActionsCount = window.obj2192_onTap_runningActionsCount - 1;
if (window.obj2192_onTap_runningActionsCount < 0) {
	window.obj2192_onTap_runningActionsCount = 0;
} else if (window.obj2192_onTap_runningActionsCount == 0) {
	obj2192_onTap_actionGroup2();
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
				window.obj2192_onTap_runningActionsCount = window.obj2192_onTap_runningActionsCount - 1;
if (window.obj2192_onTap_runningActionsCount < 0) {
	window.obj2192_onTap_runningActionsCount = 0;
} else if (window.obj2192_onTap_runningActionsCount == 0) {
	obj2192_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2192_onTap_runningActionsCount = window.obj2192_onTap_runningActionsCount - 1;
if (window.obj2192_onTap_runningActionsCount < 0) {
	window.obj2192_onTap_runningActionsCount = 0;
} else if (window.obj2192_onTap_runningActionsCount == 0) {
	obj2192_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2192_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2192_onTap_activeActionGroupIndex = -1;
		$("#obj2192").trigger("obj2192_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2192) {
				console.warn("de-queueing event obj2192." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2192").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2192_onTap_activeActionGroupIndex = 2;
	





















};
obj2935_SCEventReadAloudStarted_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2935_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj2935").trigger("obj2935_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2935) {
				console.warn("de-queueing event obj2935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2935_SCEventReadAloudStarted_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj2935 
switchImage_2939();
function switchImage_2939() {
	window.obj2935_SCEventReadAloudStarted_runningActionsCount = obj2935_SCEventReadAloudStarted_runningActionsCount + 1;

	var targetObjectId = "#obj2935";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj2935_img";
	var fromImagePath = "../images/obj2935_image.png";
	var toImagePath = "../images/switch36_to.png";
	var switchHelperId = "switchHelper139"
	var switchHelperRef = "#switchHelper139"
	var switchId = "139";
	var toSwitchId = "139";
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
				window.obj2935_SCEventReadAloudStarted_runningActionsCount = window.obj2935_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj2935_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj2935_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj2935_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj2935_SCEventReadAloudStarted_actionGroup1();
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
obj2935_SCEventReadAloudStarted_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2935_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj2935").trigger("obj2935_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2935) {
				console.warn("de-queueing event obj2935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2935_SCEventReadAloudStarted_activeActionGroupIndex = 1;
	





















};
obj2935_SCEventReadAloudStopped_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2935_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj2935").trigger("obj2935_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2935) {
				console.warn("de-queueing event obj2935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2935_SCEventReadAloudStopped_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj2935 
switchImage_2945();
function switchImage_2945() {
	window.obj2935_SCEventReadAloudStopped_runningActionsCount = obj2935_SCEventReadAloudStopped_runningActionsCount + 1;

	var targetObjectId = "#obj2935";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj2935_img";
	var fromImagePath = "../images/obj2935_image.png";
	var toImagePath = "../images/obj2935_image.png";
	var switchHelperId = "switchHelper140"
	var switchHelperRef = "#switchHelper140"
	var switchId = "140";
	var toSwitchId = "140";
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
				window.obj2935_SCEventReadAloudStopped_runningActionsCount = window.obj2935_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj2935_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj2935_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj2935_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj2935_SCEventReadAloudStopped_actionGroup1();
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
obj2935_SCEventReadAloudStopped_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2935_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj2935").trigger("obj2935_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2935) {
				console.warn("de-queueing event obj2935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2935_SCEventReadAloudStopped_activeActionGroupIndex = 1;
	





















};
obj2928_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2928_onTap_activeActionGroupIndex = -1;
		$("#obj2928").trigger("obj2928_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2928) {
				console.warn("de-queueing event obj2928." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2928").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2928_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2930();
function runjs_2930() {
	window.obj2928_onTap_runningActionsCount = obj2928_onTap_runningActionsCount + 1;

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
    videos.forEach((video, index) => {
        if (newState) {
            console.log("Toggle Button: Showing and playing video #" + (index + 1));
            video.style.display = "block"; // Adjust as needed for your layout
            // video.play();
        } else {
            console.log("Toggle Button: Hiding and pausing video #" + (index + 1));
            // video.pause();
            video.style.display = "none";
        }
    });
   
    
})();
	
	setTimeout(function() {
		window.obj2928_onTap_runningActionsCount = window.obj2928_onTap_runningActionsCount - 1;
if (window.obj2928_onTap_runningActionsCount < 0) {
	window.obj2928_onTap_runningActionsCount = 0;
} else if (window.obj2928_onTap_runningActionsCount == 0) {
	obj2928_onTap_actionGroup1();
}
	}, 1);
}







};
obj2928_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2928_onTap_activeActionGroupIndex = -1;
		$("#obj2928").trigger("obj2928_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2928) {
				console.warn("de-queueing event obj2928." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2928").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2928_onTap_activeActionGroupIndex = 1;
	



//	action: switchImage 
//	target: obj2928 
switchImage_2931();
function switchImage_2931() {
	window.obj2928_onTap_runningActionsCount = obj2928_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj2928";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj2928_img";
	var fromImagePath = "../images/obj2928_image.png";
	var toImagePath = "../images/switch38_to.png";
	var switchHelperId = "switchHelper141"
	var switchHelperRef = "#switchHelper141"
	var switchId = "141";
	var toSwitchId = "141";
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
				window.obj2928_onTap_runningActionsCount = window.obj2928_onTap_runningActionsCount - 1;
if (window.obj2928_onTap_runningActionsCount < 0) {
	window.obj2928_onTap_runningActionsCount = 0;
} else if (window.obj2928_onTap_runningActionsCount == 0) {
	obj2928_onTap_actionGroup2();
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
obj2928_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2928_onTap_activeActionGroupIndex = -1;
		$("#obj2928").trigger("obj2928_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2928) {
				console.warn("de-queueing event obj2928." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2928").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2928_onTap_activeActionGroupIndex = 2;
	





















};
obj2924_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2924_onTap_activeActionGroupIndex = -1;
		$("#obj2924").trigger("obj2924_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2924) {
				console.warn("de-queueing event obj2924." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2924").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2924_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj2924 
switchImage_2926();
function switchImage_2926() {
	window.obj2924_onTap_runningActionsCount = obj2924_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj2924";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj2924_img";
	var fromImagePath = "../images/obj2924_image.png";
	var toImagePath = "../images/switch39_to.png";
	var switchHelperId = "switchHelper142"
	var switchHelperRef = "#switchHelper142"
	var switchId = "142";
	var toSwitchId = "142";
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
				window.obj2924_onTap_runningActionsCount = window.obj2924_onTap_runningActionsCount - 1;
if (window.obj2924_onTap_runningActionsCount < 0) {
	window.obj2924_onTap_runningActionsCount = 0;
} else if (window.obj2924_onTap_runningActionsCount == 0) {
	obj2924_onTap_actionGroup1();
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
obj2924_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2924_onTap_activeActionGroupIndex = -1;
		$("#obj2924").trigger("obj2924_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2924) {
				console.warn("de-queueing event obj2924." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2924").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2924_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2927();
function runjs_2927() {
	window.obj2924_onTap_runningActionsCount = obj2924_onTap_runningActionsCount + 1;

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
		window.obj2924_onTap_runningActionsCount = window.obj2924_onTap_runningActionsCount - 1;
if (window.obj2924_onTap_runningActionsCount < 0) {
	window.obj2924_onTap_runningActionsCount = 0;
} else if (window.obj2924_onTap_runningActionsCount == 0) {
	obj2924_onTap_actionGroup2();
}
	}, 1);
}







};
obj2924_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2924_onTap_activeActionGroupIndex = -1;
		$("#obj2924").trigger("obj2924_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2924) {
				console.warn("de-queueing event obj2924." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2924").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2924_onTap_activeActionGroupIndex = 2;
	





















};
obj2921_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2921_onTap_activeActionGroupIndex = -1;
		$("#obj2921").trigger("obj2921_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2921) {
				console.warn("de-queueing event obj2921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2921_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2923();
function goToPage_2923() {
	window.obj2921_onTap_runningActionsCount = obj2921_onTap_runningActionsCount + 1;
	$("#anchor143")[0].click();
	window.obj2921_onTap_runningActionsCount = window.obj2921_onTap_runningActionsCount - 1;
if (window.obj2921_onTap_runningActionsCount < 0) {
	window.obj2921_onTap_runningActionsCount = 0;
} else if (window.obj2921_onTap_runningActionsCount == 0) {
	obj2921_onTap_actionGroup1();
}
}





















};
obj2921_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2921_onTap_activeActionGroupIndex = -1;
		$("#obj2921").trigger("obj2921_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2921) {
				console.warn("de-queueing event obj2921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2921_onTap_activeActionGroupIndex = 1;
	





















};
obj2918_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2918_onTap_activeActionGroupIndex = -1;
		$("#obj2918").trigger("obj2918_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2918) {
				console.warn("de-queueing event obj2918." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2918").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2918_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2920();
function goToPage_2920() {
	window.obj2918_onTap_runningActionsCount = obj2918_onTap_runningActionsCount + 1;
	$("#anchor144")[0].click();
	window.obj2918_onTap_runningActionsCount = window.obj2918_onTap_runningActionsCount - 1;
if (window.obj2918_onTap_runningActionsCount < 0) {
	window.obj2918_onTap_runningActionsCount = 0;
} else if (window.obj2918_onTap_runningActionsCount == 0) {
	obj2918_onTap_actionGroup1();
}
}





















};
obj2918_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2918_onTap_activeActionGroupIndex = -1;
		$("#obj2918").trigger("obj2918_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2918) {
				console.warn("de-queueing event obj2918." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2918").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2918_onTap_activeActionGroupIndex = 1;
	





















};
obj2907_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2907_onTouchUp_activeActionGroupIndex = -1;
		$("#obj2907").trigger("obj2907_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2907) {
				console.warn("de-queueing event obj2907." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2907").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2907_onTouchUp_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2914();
function runjs_2914() {
	window.obj2907_onTouchUp_runningActionsCount = obj2907_onTouchUp_runningActionsCount + 1;

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
    
    var videos = document.querySelectorAll("video");
    videos.forEach((video, index) => {
        video.load();
        video.play();
        if (currentState) {
            console.log("Toggle Button: Showing and playing video #" + (index + 1));
            // video.style.display = "block"; // Adjust as needed for your layout
            video.load();
            video.play();
        } else {
            console.log("Toggle Button: Hiding and pausing video #" + (index + 1));
            video.pause();
            // video.style.display = "none";
        }
    });
   
    
})();
	
	setTimeout(function() {
		window.obj2907_onTouchUp_runningActionsCount = window.obj2907_onTouchUp_runningActionsCount - 1;
if (window.obj2907_onTouchUp_runningActionsCount < 0) {
	window.obj2907_onTouchUp_runningActionsCount = 0;
} else if (window.obj2907_onTouchUp_runningActionsCount == 0) {
	obj2907_onTouchUp_actionGroup1();
}
	}, 1);
}







};
obj2907_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2907_onTouchUp_activeActionGroupIndex = -1;
		$("#obj2907").trigger("obj2907_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2907) {
				console.warn("de-queueing event obj2907." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2907").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2907_onTouchUp_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

































/*
 *
 *   obj2168: Event Touch Down
 *
 */
$("#obj2168").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2168_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2168_onTap is still running");
	return;
}
var obj2168_onTap_runningActionsCount = 0;
var obj2168_onTap_loopCount = 0;
obj2168_onTap_actionGroup0();
});










/*
 *
 *   obj2170: Event Touch Down
 *
 */
$("#obj2170").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2170_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2170_onTap is still running");
	return;
}
var obj2170_onTap_runningActionsCount = 0;
var obj2170_onTap_loopCount = 0;
obj2170_onTap_actionGroup0();
});










/*
 *
 *   obj2172: Event Touch Down
 *
 */
$("#obj2172").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2172_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2172_onTap is still running");
	return;
}
var obj2172_onTap_runningActionsCount = 0;
var obj2172_onTap_loopCount = 0;
obj2172_onTap_actionGroup0();
});










/*
 *
 *   obj2174: Event Touch Down
 *
 */
$("#obj2174").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2174_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2174_onTap is still running");
	return;
}
var obj2174_onTap_runningActionsCount = 0;
var obj2174_onTap_loopCount = 0;
obj2174_onTap_actionGroup0();
});










/*
 *
 *   obj2176: Event Touch Down
 *
 */
$("#obj2176").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2176_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2176_onTap is still running");
	return;
}
var obj2176_onTap_runningActionsCount = 0;
var obj2176_onTap_loopCount = 0;
obj2176_onTap_actionGroup0();
});










/*
 *
 *   obj2178: Event Touch Down
 *
 */
$("#obj2178").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2178_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2178_onTap is still running");
	return;
}
var obj2178_onTap_runningActionsCount = 0;
var obj2178_onTap_loopCount = 0;
obj2178_onTap_actionGroup0();
});










/*
 *
 *   obj2180: Event Touch Down
 *
 */
$("#obj2180").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2180_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2180_onTap is still running");
	return;
}
var obj2180_onTap_runningActionsCount = 0;
var obj2180_onTap_loopCount = 0;
obj2180_onTap_actionGroup0();
});










/*
 *
 *   obj2182: Event Touch Down
 *
 */
$("#obj2182").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2182_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2182_onTap is still running");
	return;
}
var obj2182_onTap_runningActionsCount = 0;
var obj2182_onTap_loopCount = 0;
obj2182_onTap_actionGroup0();
});










/*
 *
 *   obj2184: Event Touch Down
 *
 */
$("#obj2184").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2184_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2184_onTap is still running");
	return;
}
var obj2184_onTap_runningActionsCount = 0;
var obj2184_onTap_loopCount = 0;
obj2184_onTap_actionGroup0();
});










/*
 *
 *   obj2186: Event Touch Down
 *
 */
$("#obj2186").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2186_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2186_onTap is still running");
	return;
}
var obj2186_onTap_runningActionsCount = 0;
var obj2186_onTap_loopCount = 0;
obj2186_onTap_actionGroup0();
});










/*
 *
 *   obj2188: Event Touch Down
 *
 */
$("#obj2188").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2188_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2188_onTap is still running");
	return;
}
var obj2188_onTap_runningActionsCount = 0;
var obj2188_onTap_loopCount = 0;
obj2188_onTap_actionGroup0();
});










/*
 *
 *   obj2190: Event Touch Down
 *
 */
$("#obj2190").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2190_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2190_onTap is still running");
	return;
}
var obj2190_onTap_runningActionsCount = 0;
var obj2190_onTap_loopCount = 0;
obj2190_onTap_actionGroup0();
});










/*
 *
 *   obj2192: Event Touch Down
 *
 */
$("#obj2192").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2192_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2192_onTap is still running");
	return;
}
var obj2192_onTap_runningActionsCount = 0;
var obj2192_onTap_loopCount = 0;
obj2192_onTap_actionGroup0();
});




































































































































































/*
 *
 *   obj2935: Event SCEventReadAloudStarted
 *
 */
$("#obj2935").bind("SCEventReadAloudStarted", function(event) {
	if (window.obj2935_SCEventReadAloudStarted_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2935_SCEventReadAloudStarted is still running");
	return;
}
var obj2935_SCEventReadAloudStarted_runningActionsCount = 0;
var obj2935_SCEventReadAloudStarted_loopCount = 0;
obj2935_SCEventReadAloudStarted_actionGroup0();
});
/*
 *
 *   obj2935: Event SCEventReadAloudStopped
 *
 */
$("#obj2935").bind("SCEventReadAloudStopped", function(event) {
	if (window.obj2935_SCEventReadAloudStopped_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2935_SCEventReadAloudStopped is still running");
	return;
}
var obj2935_SCEventReadAloudStopped_runningActionsCount = 0;
var obj2935_SCEventReadAloudStopped_loopCount = 0;
obj2935_SCEventReadAloudStopped_actionGroup0();
});





/*
 *
 *   obj2928: Event Touch Down
 *
 */
$("#obj2928").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2928_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2928_onTap is still running");
	return;
}
var obj2928_onTap_runningActionsCount = 0;
var obj2928_onTap_loopCount = 0;
obj2928_onTap_actionGroup0();
});










/*
 *
 *   obj2924: Event Touch Down
 *
 */
$("#obj2924").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2924_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2924_onTap is still running");
	return;
}
var obj2924_onTap_runningActionsCount = 0;
var obj2924_onTap_loopCount = 0;
obj2924_onTap_actionGroup0();
});










/*
 *
 *   obj2921: Event Touch Down
 *
 */
$("#obj2921").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2921_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2921_onTap is still running");
	return;
}
var obj2921_onTap_runningActionsCount = 0;
var obj2921_onTap_loopCount = 0;
obj2921_onTap_actionGroup0();
});










/*
 *
 *   obj2918: Event Touch Down
 *
 */
$("#obj2918").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2918_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2918_onTap is still running");
	return;
}
var obj2918_onTap_runningActionsCount = 0;
var obj2918_onTap_loopCount = 0;
obj2918_onTap_actionGroup0();
});




















/*
 *
 *   obj2907: Event Touch Up
 *
 */
$("#obj2907").bind("touchdown touchmove", function(event) {
	event.preventDefault(); // prevent readers from starting a page swipe on this element
})
$("#obj2907").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj2907").unbind("obj2907_onTouchDown_ended", startActionList);
	    if (window.obj2907_onTouchUp_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2907_onTouchUp is still running");
	return;
}
var obj2907_onTouchUp_runningActionsCount = 0;
var obj2907_onTouchUp_loopCount = 0;
obj2907_onTouchUp_actionGroup0();
	};
	if ((window['obj2907_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj2907_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj2907").bind("obj2907_onTouchDown_ended", startActionList);
	}
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
	
$("#obj1527").trigger('SCEventShow');
$("#obj4482").trigger('SCEventShow');
$("#obj1776").trigger('SCEventShow');
$("#obj2168").trigger('SCEventShow');
$("#obj2170").trigger('SCEventShow');
$("#obj2172").trigger('SCEventShow');
$("#obj2174").trigger('SCEventShow');
$("#obj2176").trigger('SCEventShow');
$("#obj2178").trigger('SCEventShow');
$("#obj2180").trigger('SCEventShow');
$("#obj2182").trigger('SCEventShow');
$("#obj2184").trigger('SCEventShow');
$("#obj2186").trigger('SCEventShow');
$("#obj2188").trigger('SCEventShow');
$("#obj2190").trigger('SCEventShow');
$("#obj2192").trigger('SCEventShow');
$("#obj2447").trigger('SCEventShow');
$("#obj2935").trigger('SCEventShow');
$("#obj2928").trigger('SCEventShow');
$("#obj2921").trigger('SCEventShow');
$("#obj2918").trigger('SCEventShow');
$("#obj2907").trigger('SCEventShow');
$("#obj2900").trigger('SCEventShow');
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

document.querySelectorAll('video').forEach(dragElement);
function dragElement(elmnt) {
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
    
});