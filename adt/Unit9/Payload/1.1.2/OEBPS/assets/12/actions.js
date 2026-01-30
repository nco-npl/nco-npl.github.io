pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serofero - Unit 9";
pubcoder.page.id = pubcoder.page.id || 3967;
pubcoder.page.title = pubcoder.page.title || "12";
pubcoder.page.number = pubcoder.page.number || 12;
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
var obj9198_onTap_activeActionGroupIndex = -1;
var obj9198_onTap_runningActionsCount = 0;
var obj9198_onTap_loopCount = 0;
var obj9192_onTap_activeActionGroupIndex = -1;
var obj9192_onTap_runningActionsCount = 0;
var obj9192_onTap_loopCount = 0;
var obj9078_onTap_activeActionGroupIndex = -1;
var obj9078_onTap_runningActionsCount = 0;
var obj9078_onTap_loopCount = 0;
var obj9084_onTap_activeActionGroupIndex = -1;
var obj9084_onTap_runningActionsCount = 0;
var obj9084_onTap_loopCount = 0;
var obj9122_onTap_activeActionGroupIndex = -1;
var obj9122_onTap_runningActionsCount = 0;
var obj9122_onTap_loopCount = 0;
var obj9128_onTap_activeActionGroupIndex = -1;
var obj9128_onTap_runningActionsCount = 0;
var obj9128_onTap_loopCount = 0;
var obj9154_onTap_activeActionGroupIndex = -1;
var obj9154_onTap_runningActionsCount = 0;
var obj9154_onTap_loopCount = 0;
var obj9148_onTap_activeActionGroupIndex = -1;
var obj9148_onTap_runningActionsCount = 0;
var obj9148_onTap_loopCount = 0;
var obj9176_onTap_activeActionGroupIndex = -1;
var obj9176_onTap_runningActionsCount = 0;
var obj9176_onTap_loopCount = 0;
var obj9170_onTap_activeActionGroupIndex = -1;
var obj9170_onTap_runningActionsCount = 0;
var obj9170_onTap_loopCount = 0;
var obj11669_onTap_activeActionGroupIndex = -1;
var obj11669_onTap_runningActionsCount = 0;
var obj11669_onTap_loopCount = 0;
var obj11688_SCEventReadAloudStarted_activeActionGroupIndex = -1;
var obj11688_SCEventReadAloudStarted_runningActionsCount = 0;
var obj11688_SCEventReadAloudStarted_loopCount = 0;
var obj11688_SCEventReadAloudStopped_activeActionGroupIndex = -1;
var obj11688_SCEventReadAloudStopped_runningActionsCount = 0;
var obj11688_SCEventReadAloudStopped_loopCount = 0;
var obj11659_onTap_activeActionGroupIndex = -1;
var obj11659_onTap_runningActionsCount = 0;
var obj11659_onTap_loopCount = 0;
var obj11684_onTap_activeActionGroupIndex = -1;
var obj11684_onTap_runningActionsCount = 0;
var obj11684_onTap_loopCount = 0;
var obj11681_onTap_activeActionGroupIndex = -1;
var obj11681_onTap_runningActionsCount = 0;
var obj11681_onTap_loopCount = 0;
var obj11666_onTap_activeActionGroupIndex = -1;
var obj11666_onTap_runningActionsCount = 0;
var obj11666_onTap_loopCount = 0;
var obj11650_onTap_activeActionGroupIndex = -1;
var obj11650_onTap_runningActionsCount = 0;
var obj11650_onTap_loopCount = 0;
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
		
obj9198_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9198_onTap_activeActionGroupIndex = -1;
		$("#obj9198").trigger("obj9198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9198) {
				console.warn("de-queueing event obj9198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9198_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9189 
hide_9200();
function hide_9200() {
	var selector = "#obj9189";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9198_onTap_runningActionsCount = obj9198_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9198_onTap_runningActionsCount = window.obj9198_onTap_runningActionsCount - 1;
if (window.obj9198_onTap_runningActionsCount < 0) {
	window.obj9198_onTap_runningActionsCount = 0;
} else if (window.obj9198_onTap_runningActionsCount == 0) {
	obj9198_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9200(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9198_onTap_runningActionsCount = window.obj9198_onTap_runningActionsCount - 1;
if (window.obj9198_onTap_runningActionsCount < 0) {
	window.obj9198_onTap_runningActionsCount = 0;
} else if (window.obj9198_onTap_runningActionsCount == 0) {
	obj9198_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9198_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9198_onTap_activeActionGroupIndex = -1;
		$("#obj9198").trigger("obj9198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9198) {
				console.warn("de-queueing event obj9198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9198_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj9185
(function(){
	window.obj9198_onTap_runningActionsCount = obj9198_onTap_runningActionsCount + 1;

	var selector = "#obj9185";
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
					window.obj9198_onTap_runningActionsCount = window.obj9198_onTap_runningActionsCount - 1;
if (window.obj9198_onTap_runningActionsCount < 0) {
	window.obj9198_onTap_runningActionsCount = 0;
} else if (window.obj9198_onTap_runningActionsCount == 0) {
	obj9198_onTap_actionGroup2();
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
				window.obj9198_onTap_runningActionsCount = window.obj9198_onTap_runningActionsCount - 1;
if (window.obj9198_onTap_runningActionsCount < 0) {
	window.obj9198_onTap_runningActionsCount = 0;
} else if (window.obj9198_onTap_runningActionsCount == 0) {
	obj9198_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9198_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9198_onTap_activeActionGroupIndex = -1;
		$("#obj9198").trigger("obj9198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9198) {
				console.warn("de-queueing event obj9198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9198_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9202();
function playAudioFile_9202() {
	window.obj9198_onTap_runningActionsCount = obj9198_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9202")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9202");
			$("#obj_audio_playSoundFile9202").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9198_onTap_runningActionsCount = window.obj9198_onTap_runningActionsCount - 1;
if (window.obj9198_onTap_runningActionsCount < 0) {
	window.obj9198_onTap_runningActionsCount = 0;
} else if (window.obj9198_onTap_runningActionsCount == 0) {
	obj9198_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9198_onTap_runningActionsCount = window.obj9198_onTap_runningActionsCount - 1;
if (window.obj9198_onTap_runningActionsCount < 0) {
	window.obj9198_onTap_runningActionsCount = 0;
} else if (window.obj9198_onTap_runningActionsCount == 0) {
	obj9198_onTap_actionGroup3();
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
				window.obj9198_onTap_runningActionsCount = window.obj9198_onTap_runningActionsCount - 1;
if (window.obj9198_onTap_runningActionsCount < 0) {
	window.obj9198_onTap_runningActionsCount = 0;
} else if (window.obj9198_onTap_runningActionsCount == 0) {
	obj9198_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9198_onTap_runningActionsCount = window.obj9198_onTap_runningActionsCount - 1;
if (window.obj9198_onTap_runningActionsCount < 0) {
	window.obj9198_onTap_runningActionsCount = 0;
} else if (window.obj9198_onTap_runningActionsCount == 0) {
	obj9198_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9198_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9198_onTap_activeActionGroupIndex = -1;
		$("#obj9198").trigger("obj9198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9198) {
				console.warn("de-queueing event obj9198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9198_onTap_activeActionGroupIndex = 3;
	






















};
obj9192_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9192_onTap_activeActionGroupIndex = -1;
		$("#obj9192").trigger("obj9192_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9192) {
				console.warn("de-queueing event obj9192." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9192").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9192_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9185 
hide_9194();
function hide_9194() {
	var selector = "#obj9185";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9192_onTap_runningActionsCount = obj9192_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9192_onTap_runningActionsCount = window.obj9192_onTap_runningActionsCount - 1;
if (window.obj9192_onTap_runningActionsCount < 0) {
	window.obj9192_onTap_runningActionsCount = 0;
} else if (window.obj9192_onTap_runningActionsCount == 0) {
	obj9192_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9194(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9192_onTap_runningActionsCount = window.obj9192_onTap_runningActionsCount - 1;
if (window.obj9192_onTap_runningActionsCount < 0) {
	window.obj9192_onTap_runningActionsCount = 0;
} else if (window.obj9192_onTap_runningActionsCount == 0) {
	obj9192_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9192_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9192_onTap_activeActionGroupIndex = -1;
		$("#obj9192").trigger("obj9192_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9192) {
				console.warn("de-queueing event obj9192." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9192").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9192_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj9189
(function(){
	window.obj9192_onTap_runningActionsCount = obj9192_onTap_runningActionsCount + 1;

	var selector = "#obj9189";
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
					window.obj9192_onTap_runningActionsCount = window.obj9192_onTap_runningActionsCount - 1;
if (window.obj9192_onTap_runningActionsCount < 0) {
	window.obj9192_onTap_runningActionsCount = 0;
} else if (window.obj9192_onTap_runningActionsCount == 0) {
	obj9192_onTap_actionGroup2();
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
				window.obj9192_onTap_runningActionsCount = window.obj9192_onTap_runningActionsCount - 1;
if (window.obj9192_onTap_runningActionsCount < 0) {
	window.obj9192_onTap_runningActionsCount = 0;
} else if (window.obj9192_onTap_runningActionsCount == 0) {
	obj9192_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9192_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9192_onTap_activeActionGroupIndex = -1;
		$("#obj9192").trigger("obj9192_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9192) {
				console.warn("de-queueing event obj9192." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9192").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9192_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9196();
function playAudioFile_9196() {
	window.obj9192_onTap_runningActionsCount = obj9192_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9196")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9196");
			$("#obj_audio_playSoundFile9196").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9192_onTap_runningActionsCount = window.obj9192_onTap_runningActionsCount - 1;
if (window.obj9192_onTap_runningActionsCount < 0) {
	window.obj9192_onTap_runningActionsCount = 0;
} else if (window.obj9192_onTap_runningActionsCount == 0) {
	obj9192_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9192_onTap_runningActionsCount = window.obj9192_onTap_runningActionsCount - 1;
if (window.obj9192_onTap_runningActionsCount < 0) {
	window.obj9192_onTap_runningActionsCount = 0;
} else if (window.obj9192_onTap_runningActionsCount == 0) {
	obj9192_onTap_actionGroup3();
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
				window.obj9192_onTap_runningActionsCount = window.obj9192_onTap_runningActionsCount - 1;
if (window.obj9192_onTap_runningActionsCount < 0) {
	window.obj9192_onTap_runningActionsCount = 0;
} else if (window.obj9192_onTap_runningActionsCount == 0) {
	obj9192_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9192_onTap_runningActionsCount = window.obj9192_onTap_runningActionsCount - 1;
if (window.obj9192_onTap_runningActionsCount < 0) {
	window.obj9192_onTap_runningActionsCount = 0;
} else if (window.obj9192_onTap_runningActionsCount == 0) {
	obj9192_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9192_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9192_onTap_activeActionGroupIndex = -1;
		$("#obj9192").trigger("obj9192_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9192) {
				console.warn("de-queueing event obj9192." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9192").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9192_onTap_activeActionGroupIndex = 3;
	






















};
obj9078_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9078_onTap_activeActionGroupIndex = -1;
		$("#obj9078").trigger("obj9078_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9078) {
				console.warn("de-queueing event obj9078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9078_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9090 
hide_9080();
function hide_9080() {
	var selector = "#obj9090";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9078_onTap_runningActionsCount = obj9078_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9078_onTap_runningActionsCount = window.obj9078_onTap_runningActionsCount - 1;
if (window.obj9078_onTap_runningActionsCount < 0) {
	window.obj9078_onTap_runningActionsCount = 0;
} else if (window.obj9078_onTap_runningActionsCount == 0) {
	obj9078_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9080(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9078_onTap_runningActionsCount = window.obj9078_onTap_runningActionsCount - 1;
if (window.obj9078_onTap_runningActionsCount < 0) {
	window.obj9078_onTap_runningActionsCount = 0;
} else if (window.obj9078_onTap_runningActionsCount == 0) {
	obj9078_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9078_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9078_onTap_activeActionGroupIndex = -1;
		$("#obj9078").trigger("obj9078_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9078) {
				console.warn("de-queueing event obj9078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9078_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj9093
(function(){
	window.obj9078_onTap_runningActionsCount = obj9078_onTap_runningActionsCount + 1;

	var selector = "#obj9093";
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
					window.obj9078_onTap_runningActionsCount = window.obj9078_onTap_runningActionsCount - 1;
if (window.obj9078_onTap_runningActionsCount < 0) {
	window.obj9078_onTap_runningActionsCount = 0;
} else if (window.obj9078_onTap_runningActionsCount == 0) {
	obj9078_onTap_actionGroup2();
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
				window.obj9078_onTap_runningActionsCount = window.obj9078_onTap_runningActionsCount - 1;
if (window.obj9078_onTap_runningActionsCount < 0) {
	window.obj9078_onTap_runningActionsCount = 0;
} else if (window.obj9078_onTap_runningActionsCount == 0) {
	obj9078_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9078_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9078_onTap_activeActionGroupIndex = -1;
		$("#obj9078").trigger("obj9078_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9078) {
				console.warn("de-queueing event obj9078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9078_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9082();
function playAudioFile_9082() {
	window.obj9078_onTap_runningActionsCount = obj9078_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9082")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9082");
			$("#obj_audio_playSoundFile9082").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9078_onTap_runningActionsCount = window.obj9078_onTap_runningActionsCount - 1;
if (window.obj9078_onTap_runningActionsCount < 0) {
	window.obj9078_onTap_runningActionsCount = 0;
} else if (window.obj9078_onTap_runningActionsCount == 0) {
	obj9078_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9078_onTap_runningActionsCount = window.obj9078_onTap_runningActionsCount - 1;
if (window.obj9078_onTap_runningActionsCount < 0) {
	window.obj9078_onTap_runningActionsCount = 0;
} else if (window.obj9078_onTap_runningActionsCount == 0) {
	obj9078_onTap_actionGroup3();
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
				window.obj9078_onTap_runningActionsCount = window.obj9078_onTap_runningActionsCount - 1;
if (window.obj9078_onTap_runningActionsCount < 0) {
	window.obj9078_onTap_runningActionsCount = 0;
} else if (window.obj9078_onTap_runningActionsCount == 0) {
	obj9078_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9078_onTap_runningActionsCount = window.obj9078_onTap_runningActionsCount - 1;
if (window.obj9078_onTap_runningActionsCount < 0) {
	window.obj9078_onTap_runningActionsCount = 0;
} else if (window.obj9078_onTap_runningActionsCount == 0) {
	obj9078_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9078_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9078_onTap_activeActionGroupIndex = -1;
		$("#obj9078").trigger("obj9078_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9078) {
				console.warn("de-queueing event obj9078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9078_onTap_activeActionGroupIndex = 3;
	






















};
obj9084_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9084_onTap_activeActionGroupIndex = -1;
		$("#obj9084").trigger("obj9084_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9084) {
				console.warn("de-queueing event obj9084." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9084").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9084_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9093 
hide_9086();
function hide_9086() {
	var selector = "#obj9093";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9084_onTap_runningActionsCount = obj9084_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9084_onTap_runningActionsCount = window.obj9084_onTap_runningActionsCount - 1;
if (window.obj9084_onTap_runningActionsCount < 0) {
	window.obj9084_onTap_runningActionsCount = 0;
} else if (window.obj9084_onTap_runningActionsCount == 0) {
	obj9084_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9086(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9084_onTap_runningActionsCount = window.obj9084_onTap_runningActionsCount - 1;
if (window.obj9084_onTap_runningActionsCount < 0) {
	window.obj9084_onTap_runningActionsCount = 0;
} else if (window.obj9084_onTap_runningActionsCount == 0) {
	obj9084_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9084_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9084_onTap_activeActionGroupIndex = -1;
		$("#obj9084").trigger("obj9084_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9084) {
				console.warn("de-queueing event obj9084." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9084").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9084_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj9090
(function(){
	window.obj9084_onTap_runningActionsCount = obj9084_onTap_runningActionsCount + 1;

	var selector = "#obj9090";
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
					window.obj9084_onTap_runningActionsCount = window.obj9084_onTap_runningActionsCount - 1;
if (window.obj9084_onTap_runningActionsCount < 0) {
	window.obj9084_onTap_runningActionsCount = 0;
} else if (window.obj9084_onTap_runningActionsCount == 0) {
	obj9084_onTap_actionGroup2();
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
				window.obj9084_onTap_runningActionsCount = window.obj9084_onTap_runningActionsCount - 1;
if (window.obj9084_onTap_runningActionsCount < 0) {
	window.obj9084_onTap_runningActionsCount = 0;
} else if (window.obj9084_onTap_runningActionsCount == 0) {
	obj9084_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9084_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9084_onTap_activeActionGroupIndex = -1;
		$("#obj9084").trigger("obj9084_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9084) {
				console.warn("de-queueing event obj9084." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9084").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9084_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9088();
function playAudioFile_9088() {
	window.obj9084_onTap_runningActionsCount = obj9084_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9088")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9088");
			$("#obj_audio_playSoundFile9088").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9084_onTap_runningActionsCount = window.obj9084_onTap_runningActionsCount - 1;
if (window.obj9084_onTap_runningActionsCount < 0) {
	window.obj9084_onTap_runningActionsCount = 0;
} else if (window.obj9084_onTap_runningActionsCount == 0) {
	obj9084_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9084_onTap_runningActionsCount = window.obj9084_onTap_runningActionsCount - 1;
if (window.obj9084_onTap_runningActionsCount < 0) {
	window.obj9084_onTap_runningActionsCount = 0;
} else if (window.obj9084_onTap_runningActionsCount == 0) {
	obj9084_onTap_actionGroup3();
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
				window.obj9084_onTap_runningActionsCount = window.obj9084_onTap_runningActionsCount - 1;
if (window.obj9084_onTap_runningActionsCount < 0) {
	window.obj9084_onTap_runningActionsCount = 0;
} else if (window.obj9084_onTap_runningActionsCount == 0) {
	obj9084_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9084_onTap_runningActionsCount = window.obj9084_onTap_runningActionsCount - 1;
if (window.obj9084_onTap_runningActionsCount < 0) {
	window.obj9084_onTap_runningActionsCount = 0;
} else if (window.obj9084_onTap_runningActionsCount == 0) {
	obj9084_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9084_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9084_onTap_activeActionGroupIndex = -1;
		$("#obj9084").trigger("obj9084_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9084) {
				console.warn("de-queueing event obj9084." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9084").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9084_onTap_activeActionGroupIndex = 3;
	






















};
obj9122_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9122_onTap_activeActionGroupIndex = -1;
		$("#obj9122").trigger("obj9122_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9122) {
				console.warn("de-queueing event obj9122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9122_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9134 
hide_9124();
function hide_9124() {
	var selector = "#obj9134";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9122_onTap_runningActionsCount = obj9122_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9122_onTap_runningActionsCount = window.obj9122_onTap_runningActionsCount - 1;
if (window.obj9122_onTap_runningActionsCount < 0) {
	window.obj9122_onTap_runningActionsCount = 0;
} else if (window.obj9122_onTap_runningActionsCount == 0) {
	obj9122_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9124(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9122_onTap_runningActionsCount = window.obj9122_onTap_runningActionsCount - 1;
if (window.obj9122_onTap_runningActionsCount < 0) {
	window.obj9122_onTap_runningActionsCount = 0;
} else if (window.obj9122_onTap_runningActionsCount == 0) {
	obj9122_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9122_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9122_onTap_activeActionGroupIndex = -1;
		$("#obj9122").trigger("obj9122_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9122) {
				console.warn("de-queueing event obj9122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9122_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj9137
(function(){
	window.obj9122_onTap_runningActionsCount = obj9122_onTap_runningActionsCount + 1;

	var selector = "#obj9137";
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
					window.obj9122_onTap_runningActionsCount = window.obj9122_onTap_runningActionsCount - 1;
if (window.obj9122_onTap_runningActionsCount < 0) {
	window.obj9122_onTap_runningActionsCount = 0;
} else if (window.obj9122_onTap_runningActionsCount == 0) {
	obj9122_onTap_actionGroup2();
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
				window.obj9122_onTap_runningActionsCount = window.obj9122_onTap_runningActionsCount - 1;
if (window.obj9122_onTap_runningActionsCount < 0) {
	window.obj9122_onTap_runningActionsCount = 0;
} else if (window.obj9122_onTap_runningActionsCount == 0) {
	obj9122_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9122_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9122_onTap_activeActionGroupIndex = -1;
		$("#obj9122").trigger("obj9122_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9122) {
				console.warn("de-queueing event obj9122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9122_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9126();
function playAudioFile_9126() {
	window.obj9122_onTap_runningActionsCount = obj9122_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9126")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9126");
			$("#obj_audio_playSoundFile9126").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9122_onTap_runningActionsCount = window.obj9122_onTap_runningActionsCount - 1;
if (window.obj9122_onTap_runningActionsCount < 0) {
	window.obj9122_onTap_runningActionsCount = 0;
} else if (window.obj9122_onTap_runningActionsCount == 0) {
	obj9122_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9122_onTap_runningActionsCount = window.obj9122_onTap_runningActionsCount - 1;
if (window.obj9122_onTap_runningActionsCount < 0) {
	window.obj9122_onTap_runningActionsCount = 0;
} else if (window.obj9122_onTap_runningActionsCount == 0) {
	obj9122_onTap_actionGroup3();
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
				window.obj9122_onTap_runningActionsCount = window.obj9122_onTap_runningActionsCount - 1;
if (window.obj9122_onTap_runningActionsCount < 0) {
	window.obj9122_onTap_runningActionsCount = 0;
} else if (window.obj9122_onTap_runningActionsCount == 0) {
	obj9122_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9122_onTap_runningActionsCount = window.obj9122_onTap_runningActionsCount - 1;
if (window.obj9122_onTap_runningActionsCount < 0) {
	window.obj9122_onTap_runningActionsCount = 0;
} else if (window.obj9122_onTap_runningActionsCount == 0) {
	obj9122_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9122_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9122_onTap_activeActionGroupIndex = -1;
		$("#obj9122").trigger("obj9122_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9122) {
				console.warn("de-queueing event obj9122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9122_onTap_activeActionGroupIndex = 3;
	






















};
obj9128_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9128_onTap_activeActionGroupIndex = -1;
		$("#obj9128").trigger("obj9128_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9128) {
				console.warn("de-queueing event obj9128." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9128").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9128_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9137 
hide_9130();
function hide_9130() {
	var selector = "#obj9137";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9128_onTap_runningActionsCount = obj9128_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9128_onTap_runningActionsCount = window.obj9128_onTap_runningActionsCount - 1;
if (window.obj9128_onTap_runningActionsCount < 0) {
	window.obj9128_onTap_runningActionsCount = 0;
} else if (window.obj9128_onTap_runningActionsCount == 0) {
	obj9128_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9130(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9128_onTap_runningActionsCount = window.obj9128_onTap_runningActionsCount - 1;
if (window.obj9128_onTap_runningActionsCount < 0) {
	window.obj9128_onTap_runningActionsCount = 0;
} else if (window.obj9128_onTap_runningActionsCount == 0) {
	obj9128_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9128_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9128_onTap_activeActionGroupIndex = -1;
		$("#obj9128").trigger("obj9128_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9128) {
				console.warn("de-queueing event obj9128." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9128").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9128_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj9134
(function(){
	window.obj9128_onTap_runningActionsCount = obj9128_onTap_runningActionsCount + 1;

	var selector = "#obj9134";
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
					window.obj9128_onTap_runningActionsCount = window.obj9128_onTap_runningActionsCount - 1;
if (window.obj9128_onTap_runningActionsCount < 0) {
	window.obj9128_onTap_runningActionsCount = 0;
} else if (window.obj9128_onTap_runningActionsCount == 0) {
	obj9128_onTap_actionGroup2();
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
				window.obj9128_onTap_runningActionsCount = window.obj9128_onTap_runningActionsCount - 1;
if (window.obj9128_onTap_runningActionsCount < 0) {
	window.obj9128_onTap_runningActionsCount = 0;
} else if (window.obj9128_onTap_runningActionsCount == 0) {
	obj9128_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9128_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9128_onTap_activeActionGroupIndex = -1;
		$("#obj9128").trigger("obj9128_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9128) {
				console.warn("de-queueing event obj9128." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9128").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9128_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9132();
function playAudioFile_9132() {
	window.obj9128_onTap_runningActionsCount = obj9128_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9132")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9132");
			$("#obj_audio_playSoundFile9132").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9128_onTap_runningActionsCount = window.obj9128_onTap_runningActionsCount - 1;
if (window.obj9128_onTap_runningActionsCount < 0) {
	window.obj9128_onTap_runningActionsCount = 0;
} else if (window.obj9128_onTap_runningActionsCount == 0) {
	obj9128_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9128_onTap_runningActionsCount = window.obj9128_onTap_runningActionsCount - 1;
if (window.obj9128_onTap_runningActionsCount < 0) {
	window.obj9128_onTap_runningActionsCount = 0;
} else if (window.obj9128_onTap_runningActionsCount == 0) {
	obj9128_onTap_actionGroup3();
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
				window.obj9128_onTap_runningActionsCount = window.obj9128_onTap_runningActionsCount - 1;
if (window.obj9128_onTap_runningActionsCount < 0) {
	window.obj9128_onTap_runningActionsCount = 0;
} else if (window.obj9128_onTap_runningActionsCount == 0) {
	obj9128_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9128_onTap_runningActionsCount = window.obj9128_onTap_runningActionsCount - 1;
if (window.obj9128_onTap_runningActionsCount < 0) {
	window.obj9128_onTap_runningActionsCount = 0;
} else if (window.obj9128_onTap_runningActionsCount == 0) {
	obj9128_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9128_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9128_onTap_activeActionGroupIndex = -1;
		$("#obj9128").trigger("obj9128_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9128) {
				console.warn("de-queueing event obj9128." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9128").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9128_onTap_activeActionGroupIndex = 3;
	






















};
obj9154_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9154_onTap_activeActionGroupIndex = -1;
		$("#obj9154").trigger("obj9154_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9154) {
				console.warn("de-queueing event obj9154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9154_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9145 
hide_9156();
function hide_9156() {
	var selector = "#obj9145";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9154_onTap_runningActionsCount = obj9154_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9154_onTap_runningActionsCount = window.obj9154_onTap_runningActionsCount - 1;
if (window.obj9154_onTap_runningActionsCount < 0) {
	window.obj9154_onTap_runningActionsCount = 0;
} else if (window.obj9154_onTap_runningActionsCount == 0) {
	obj9154_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9156(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9154_onTap_runningActionsCount = window.obj9154_onTap_runningActionsCount - 1;
if (window.obj9154_onTap_runningActionsCount < 0) {
	window.obj9154_onTap_runningActionsCount = 0;
} else if (window.obj9154_onTap_runningActionsCount == 0) {
	obj9154_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9154_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9154_onTap_activeActionGroupIndex = -1;
		$("#obj9154").trigger("obj9154_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9154) {
				console.warn("de-queueing event obj9154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9154_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj9141
(function(){
	window.obj9154_onTap_runningActionsCount = obj9154_onTap_runningActionsCount + 1;

	var selector = "#obj9141";
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
					window.obj9154_onTap_runningActionsCount = window.obj9154_onTap_runningActionsCount - 1;
if (window.obj9154_onTap_runningActionsCount < 0) {
	window.obj9154_onTap_runningActionsCount = 0;
} else if (window.obj9154_onTap_runningActionsCount == 0) {
	obj9154_onTap_actionGroup2();
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
				window.obj9154_onTap_runningActionsCount = window.obj9154_onTap_runningActionsCount - 1;
if (window.obj9154_onTap_runningActionsCount < 0) {
	window.obj9154_onTap_runningActionsCount = 0;
} else if (window.obj9154_onTap_runningActionsCount == 0) {
	obj9154_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9154_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9154_onTap_activeActionGroupIndex = -1;
		$("#obj9154").trigger("obj9154_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9154) {
				console.warn("de-queueing event obj9154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9154_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9158();
function playAudioFile_9158() {
	window.obj9154_onTap_runningActionsCount = obj9154_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9158")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9158");
			$("#obj_audio_playSoundFile9158").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9154_onTap_runningActionsCount = window.obj9154_onTap_runningActionsCount - 1;
if (window.obj9154_onTap_runningActionsCount < 0) {
	window.obj9154_onTap_runningActionsCount = 0;
} else if (window.obj9154_onTap_runningActionsCount == 0) {
	obj9154_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9154_onTap_runningActionsCount = window.obj9154_onTap_runningActionsCount - 1;
if (window.obj9154_onTap_runningActionsCount < 0) {
	window.obj9154_onTap_runningActionsCount = 0;
} else if (window.obj9154_onTap_runningActionsCount == 0) {
	obj9154_onTap_actionGroup3();
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
				window.obj9154_onTap_runningActionsCount = window.obj9154_onTap_runningActionsCount - 1;
if (window.obj9154_onTap_runningActionsCount < 0) {
	window.obj9154_onTap_runningActionsCount = 0;
} else if (window.obj9154_onTap_runningActionsCount == 0) {
	obj9154_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9154_onTap_runningActionsCount = window.obj9154_onTap_runningActionsCount - 1;
if (window.obj9154_onTap_runningActionsCount < 0) {
	window.obj9154_onTap_runningActionsCount = 0;
} else if (window.obj9154_onTap_runningActionsCount == 0) {
	obj9154_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9154_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9154_onTap_activeActionGroupIndex = -1;
		$("#obj9154").trigger("obj9154_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9154) {
				console.warn("de-queueing event obj9154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9154_onTap_activeActionGroupIndex = 3;
	






















};
obj9148_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9148_onTap_activeActionGroupIndex = -1;
		$("#obj9148").trigger("obj9148_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9148) {
				console.warn("de-queueing event obj9148." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9148").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9148_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9141 
hide_9150();
function hide_9150() {
	var selector = "#obj9141";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9148_onTap_runningActionsCount = obj9148_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9148_onTap_runningActionsCount = window.obj9148_onTap_runningActionsCount - 1;
if (window.obj9148_onTap_runningActionsCount < 0) {
	window.obj9148_onTap_runningActionsCount = 0;
} else if (window.obj9148_onTap_runningActionsCount == 0) {
	obj9148_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9150(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9148_onTap_runningActionsCount = window.obj9148_onTap_runningActionsCount - 1;
if (window.obj9148_onTap_runningActionsCount < 0) {
	window.obj9148_onTap_runningActionsCount = 0;
} else if (window.obj9148_onTap_runningActionsCount == 0) {
	obj9148_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9148_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9148_onTap_activeActionGroupIndex = -1;
		$("#obj9148").trigger("obj9148_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9148) {
				console.warn("de-queueing event obj9148." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9148").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9148_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj9145
(function(){
	window.obj9148_onTap_runningActionsCount = obj9148_onTap_runningActionsCount + 1;

	var selector = "#obj9145";
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
					window.obj9148_onTap_runningActionsCount = window.obj9148_onTap_runningActionsCount - 1;
if (window.obj9148_onTap_runningActionsCount < 0) {
	window.obj9148_onTap_runningActionsCount = 0;
} else if (window.obj9148_onTap_runningActionsCount == 0) {
	obj9148_onTap_actionGroup2();
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
				window.obj9148_onTap_runningActionsCount = window.obj9148_onTap_runningActionsCount - 1;
if (window.obj9148_onTap_runningActionsCount < 0) {
	window.obj9148_onTap_runningActionsCount = 0;
} else if (window.obj9148_onTap_runningActionsCount == 0) {
	obj9148_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9148_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9148_onTap_activeActionGroupIndex = -1;
		$("#obj9148").trigger("obj9148_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9148) {
				console.warn("de-queueing event obj9148." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9148").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9148_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9152();
function playAudioFile_9152() {
	window.obj9148_onTap_runningActionsCount = obj9148_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9152")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9152");
			$("#obj_audio_playSoundFile9152").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9148_onTap_runningActionsCount = window.obj9148_onTap_runningActionsCount - 1;
if (window.obj9148_onTap_runningActionsCount < 0) {
	window.obj9148_onTap_runningActionsCount = 0;
} else if (window.obj9148_onTap_runningActionsCount == 0) {
	obj9148_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9148_onTap_runningActionsCount = window.obj9148_onTap_runningActionsCount - 1;
if (window.obj9148_onTap_runningActionsCount < 0) {
	window.obj9148_onTap_runningActionsCount = 0;
} else if (window.obj9148_onTap_runningActionsCount == 0) {
	obj9148_onTap_actionGroup3();
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
				window.obj9148_onTap_runningActionsCount = window.obj9148_onTap_runningActionsCount - 1;
if (window.obj9148_onTap_runningActionsCount < 0) {
	window.obj9148_onTap_runningActionsCount = 0;
} else if (window.obj9148_onTap_runningActionsCount == 0) {
	obj9148_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9148_onTap_runningActionsCount = window.obj9148_onTap_runningActionsCount - 1;
if (window.obj9148_onTap_runningActionsCount < 0) {
	window.obj9148_onTap_runningActionsCount = 0;
} else if (window.obj9148_onTap_runningActionsCount == 0) {
	obj9148_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9148_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9148_onTap_activeActionGroupIndex = -1;
		$("#obj9148").trigger("obj9148_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9148) {
				console.warn("de-queueing event obj9148." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9148").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9148_onTap_activeActionGroupIndex = 3;
	






















};
obj9176_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9176_onTap_activeActionGroupIndex = -1;
		$("#obj9176").trigger("obj9176_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9176) {
				console.warn("de-queueing event obj9176." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9176").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9176_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9167 
hide_9178();
function hide_9178() {
	var selector = "#obj9167";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9176_onTap_runningActionsCount = obj9176_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9176_onTap_runningActionsCount = window.obj9176_onTap_runningActionsCount - 1;
if (window.obj9176_onTap_runningActionsCount < 0) {
	window.obj9176_onTap_runningActionsCount = 0;
} else if (window.obj9176_onTap_runningActionsCount == 0) {
	obj9176_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9178(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9176_onTap_runningActionsCount = window.obj9176_onTap_runningActionsCount - 1;
if (window.obj9176_onTap_runningActionsCount < 0) {
	window.obj9176_onTap_runningActionsCount = 0;
} else if (window.obj9176_onTap_runningActionsCount == 0) {
	obj9176_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9176_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9176_onTap_activeActionGroupIndex = -1;
		$("#obj9176").trigger("obj9176_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9176) {
				console.warn("de-queueing event obj9176." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9176").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9176_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj9163
(function(){
	window.obj9176_onTap_runningActionsCount = obj9176_onTap_runningActionsCount + 1;

	var selector = "#obj9163";
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
					window.obj9176_onTap_runningActionsCount = window.obj9176_onTap_runningActionsCount - 1;
if (window.obj9176_onTap_runningActionsCount < 0) {
	window.obj9176_onTap_runningActionsCount = 0;
} else if (window.obj9176_onTap_runningActionsCount == 0) {
	obj9176_onTap_actionGroup2();
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
				window.obj9176_onTap_runningActionsCount = window.obj9176_onTap_runningActionsCount - 1;
if (window.obj9176_onTap_runningActionsCount < 0) {
	window.obj9176_onTap_runningActionsCount = 0;
} else if (window.obj9176_onTap_runningActionsCount == 0) {
	obj9176_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9176_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9176_onTap_activeActionGroupIndex = -1;
		$("#obj9176").trigger("obj9176_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9176) {
				console.warn("de-queueing event obj9176." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9176").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9176_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9180();
function playAudioFile_9180() {
	window.obj9176_onTap_runningActionsCount = obj9176_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9180")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9180");
			$("#obj_audio_playSoundFile9180").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9176_onTap_runningActionsCount = window.obj9176_onTap_runningActionsCount - 1;
if (window.obj9176_onTap_runningActionsCount < 0) {
	window.obj9176_onTap_runningActionsCount = 0;
} else if (window.obj9176_onTap_runningActionsCount == 0) {
	obj9176_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9176_onTap_runningActionsCount = window.obj9176_onTap_runningActionsCount - 1;
if (window.obj9176_onTap_runningActionsCount < 0) {
	window.obj9176_onTap_runningActionsCount = 0;
} else if (window.obj9176_onTap_runningActionsCount == 0) {
	obj9176_onTap_actionGroup3();
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
				window.obj9176_onTap_runningActionsCount = window.obj9176_onTap_runningActionsCount - 1;
if (window.obj9176_onTap_runningActionsCount < 0) {
	window.obj9176_onTap_runningActionsCount = 0;
} else if (window.obj9176_onTap_runningActionsCount == 0) {
	obj9176_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9176_onTap_runningActionsCount = window.obj9176_onTap_runningActionsCount - 1;
if (window.obj9176_onTap_runningActionsCount < 0) {
	window.obj9176_onTap_runningActionsCount = 0;
} else if (window.obj9176_onTap_runningActionsCount == 0) {
	obj9176_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9176_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9176_onTap_activeActionGroupIndex = -1;
		$("#obj9176").trigger("obj9176_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9176) {
				console.warn("de-queueing event obj9176." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9176").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9176_onTap_activeActionGroupIndex = 3;
	






















};
obj9170_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9170_onTap_activeActionGroupIndex = -1;
		$("#obj9170").trigger("obj9170_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9170) {
				console.warn("de-queueing event obj9170." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9170").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9170_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj9163 
hide_9172();
function hide_9172() {
	var selector = "#obj9163";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9170_onTap_runningActionsCount = obj9170_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9170_onTap_runningActionsCount = window.obj9170_onTap_runningActionsCount - 1;
if (window.obj9170_onTap_runningActionsCount < 0) {
	window.obj9170_onTap_runningActionsCount = 0;
} else if (window.obj9170_onTap_runningActionsCount == 0) {
	obj9170_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9172(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9170_onTap_runningActionsCount = window.obj9170_onTap_runningActionsCount - 1;
if (window.obj9170_onTap_runningActionsCount < 0) {
	window.obj9170_onTap_runningActionsCount = 0;
} else if (window.obj9170_onTap_runningActionsCount == 0) {
	obj9170_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9170_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9170_onTap_activeActionGroupIndex = -1;
		$("#obj9170").trigger("obj9170_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9170) {
				console.warn("de-queueing event obj9170." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9170").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9170_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj9167
(function(){
	window.obj9170_onTap_runningActionsCount = obj9170_onTap_runningActionsCount + 1;

	var selector = "#obj9167";
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
					window.obj9170_onTap_runningActionsCount = window.obj9170_onTap_runningActionsCount - 1;
if (window.obj9170_onTap_runningActionsCount < 0) {
	window.obj9170_onTap_runningActionsCount = 0;
} else if (window.obj9170_onTap_runningActionsCount == 0) {
	obj9170_onTap_actionGroup2();
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
				window.obj9170_onTap_runningActionsCount = window.obj9170_onTap_runningActionsCount - 1;
if (window.obj9170_onTap_runningActionsCount < 0) {
	window.obj9170_onTap_runningActionsCount = 0;
} else if (window.obj9170_onTap_runningActionsCount == 0) {
	obj9170_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9170_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9170_onTap_activeActionGroupIndex = -1;
		$("#obj9170").trigger("obj9170_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9170) {
				console.warn("de-queueing event obj9170." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9170").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9170_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9174();
function playAudioFile_9174() {
	window.obj9170_onTap_runningActionsCount = obj9170_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9174")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9174");
			$("#obj_audio_playSoundFile9174").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9170_onTap_runningActionsCount = window.obj9170_onTap_runningActionsCount - 1;
if (window.obj9170_onTap_runningActionsCount < 0) {
	window.obj9170_onTap_runningActionsCount = 0;
} else if (window.obj9170_onTap_runningActionsCount == 0) {
	obj9170_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9170_onTap_runningActionsCount = window.obj9170_onTap_runningActionsCount - 1;
if (window.obj9170_onTap_runningActionsCount < 0) {
	window.obj9170_onTap_runningActionsCount = 0;
} else if (window.obj9170_onTap_runningActionsCount == 0) {
	obj9170_onTap_actionGroup3();
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
				window.obj9170_onTap_runningActionsCount = window.obj9170_onTap_runningActionsCount - 1;
if (window.obj9170_onTap_runningActionsCount < 0) {
	window.obj9170_onTap_runningActionsCount = 0;
} else if (window.obj9170_onTap_runningActionsCount == 0) {
	obj9170_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9170_onTap_runningActionsCount = window.obj9170_onTap_runningActionsCount - 1;
if (window.obj9170_onTap_runningActionsCount < 0) {
	window.obj9170_onTap_runningActionsCount = 0;
} else if (window.obj9170_onTap_runningActionsCount == 0) {
	obj9170_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9170_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9170_onTap_activeActionGroupIndex = -1;
		$("#obj9170").trigger("obj9170_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9170) {
				console.warn("de-queueing event obj9170." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9170").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9170_onTap_activeActionGroupIndex = 3;
	






















};
obj11669_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11669_onTap_activeActionGroupIndex = -1;
		$("#obj11669").trigger("obj11669_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 11669) {
				console.warn("de-queueing event obj11669." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj11669").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj11669_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_11673();
function runjs_11673() {
	window.obj11669_onTap_runningActionsCount = obj11669_onTap_runningActionsCount + 1;

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
		window.obj11669_onTap_runningActionsCount = window.obj11669_onTap_runningActionsCount - 1;
if (window.obj11669_onTap_runningActionsCount < 0) {
	window.obj11669_onTap_runningActionsCount = 0;
} else if (window.obj11669_onTap_runningActionsCount == 0) {
	obj11669_onTap_actionGroup1();
}
	}, 1);
}







};
obj11669_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj11669_onTap_activeActionGroupIndex = -1;
		$("#obj11669").trigger("obj11669_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 11669) {
				console.warn("de-queueing event obj11669." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj11669").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj11669_onTap_activeActionGroupIndex = 1;
	






















};
obj11688_SCEventReadAloudStarted_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11688_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj11688").trigger("obj11688_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 11688) {
				console.warn("de-queueing event obj11688." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj11688").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj11688_SCEventReadAloudStarted_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj11688 
switchImage_11692();
function switchImage_11692() {
	window.obj11688_SCEventReadAloudStarted_runningActionsCount = obj11688_SCEventReadAloudStarted_runningActionsCount + 1;

	var targetObjectId = "#obj11688";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj11688_img";
	var fromImagePath = "../images/obj11688_image.png";
	var toImagePath = "../images/switch32_to.png";
	var switchHelperId = "switchHelper130"
	var switchHelperRef = "#switchHelper130"
	var switchId = "130";
	var toSwitchId = "130";
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
				window.obj11688_SCEventReadAloudStarted_runningActionsCount = window.obj11688_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj11688_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj11688_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj11688_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj11688_SCEventReadAloudStarted_actionGroup1();
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
obj11688_SCEventReadAloudStarted_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11688_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj11688").trigger("obj11688_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 11688) {
				console.warn("de-queueing event obj11688." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj11688").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj11688_SCEventReadAloudStarted_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_11693();
function runjs_11693() {
	window.obj11688_SCEventReadAloudStarted_runningActionsCount = obj11688_SCEventReadAloudStarted_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over Pressed');
}
	
	setTimeout(function() {
		window.obj11688_SCEventReadAloudStarted_runningActionsCount = window.obj11688_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj11688_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj11688_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj11688_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj11688_SCEventReadAloudStarted_actionGroup2();
}
	}, 1);
}







};
obj11688_SCEventReadAloudStarted_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj11688_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj11688").trigger("obj11688_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 11688) {
				console.warn("de-queueing event obj11688." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj11688").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj11688_SCEventReadAloudStarted_activeActionGroupIndex = 2;
	






















};
obj11688_SCEventReadAloudStopped_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11688_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj11688").trigger("obj11688_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 11688) {
				console.warn("de-queueing event obj11688." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj11688").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj11688_SCEventReadAloudStopped_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj11688 
switchImage_11698();
function switchImage_11698() {
	window.obj11688_SCEventReadAloudStopped_runningActionsCount = obj11688_SCEventReadAloudStopped_runningActionsCount + 1;

	var targetObjectId = "#obj11688";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj11688_img";
	var fromImagePath = "../images/obj11688_image.png";
	var toImagePath = "../images/obj11688_image.png";
	var switchHelperId = "switchHelper131"
	var switchHelperRef = "#switchHelper131"
	var switchId = "131";
	var toSwitchId = "131";
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
				window.obj11688_SCEventReadAloudStopped_runningActionsCount = window.obj11688_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj11688_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj11688_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj11688_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj11688_SCEventReadAloudStopped_actionGroup1();
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
obj11688_SCEventReadAloudStopped_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11688_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj11688").trigger("obj11688_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 11688) {
				console.warn("de-queueing event obj11688." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj11688").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj11688_SCEventReadAloudStopped_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_11699();
function runjs_11699() {
	window.obj11688_SCEventReadAloudStopped_runningActionsCount = obj11688_SCEventReadAloudStopped_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over');
}
	
	setTimeout(function() {
		window.obj11688_SCEventReadAloudStopped_runningActionsCount = window.obj11688_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj11688_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj11688_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj11688_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj11688_SCEventReadAloudStopped_actionGroup2();
}
	}, 1);
}







};
obj11688_SCEventReadAloudStopped_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj11688_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj11688").trigger("obj11688_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 11688) {
				console.warn("de-queueing event obj11688." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj11688").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj11688_SCEventReadAloudStopped_activeActionGroupIndex = 2;
	






















};
obj11659_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11659_onTap_activeActionGroupIndex = -1;
		$("#obj11659").trigger("obj11659_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 11659) {
				console.warn("de-queueing event obj11659." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj11659").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj11659_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_11661();
function runjs_11661() {
	window.obj11659_onTap_runningActionsCount = obj11659_onTap_runningActionsCount + 1;

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
		window.obj11659_onTap_runningActionsCount = window.obj11659_onTap_runningActionsCount - 1;
if (window.obj11659_onTap_runningActionsCount < 0) {
	window.obj11659_onTap_runningActionsCount = 0;
} else if (window.obj11659_onTap_runningActionsCount == 0) {
	obj11659_onTap_actionGroup1();
}
	}, 1);
}







};
obj11659_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj11659_onTap_activeActionGroupIndex = -1;
		$("#obj11659").trigger("obj11659_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 11659) {
				console.warn("de-queueing event obj11659." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj11659").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj11659_onTap_activeActionGroupIndex = 1;
	






















};
obj11684_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11684_onTap_activeActionGroupIndex = -1;
		$("#obj11684").trigger("obj11684_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 11684) {
				console.warn("de-queueing event obj11684." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj11684").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj11684_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj11684 
switchImage_11686();
function switchImage_11686() {
	window.obj11684_onTap_runningActionsCount = obj11684_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj11684";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj11684_img";
	var fromImagePath = "../images/obj11684_image.png";
	var toImagePath = "../images/switch34_to.png";
	var switchHelperId = "switchHelper132"
	var switchHelperRef = "#switchHelper132"
	var switchId = "132";
	var toSwitchId = "132";
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
				window.obj11684_onTap_runningActionsCount = window.obj11684_onTap_runningActionsCount - 1;
if (window.obj11684_onTap_runningActionsCount < 0) {
	window.obj11684_onTap_runningActionsCount = 0;
} else if (window.obj11684_onTap_runningActionsCount == 0) {
	obj11684_onTap_actionGroup1();
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
obj11684_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11684_onTap_activeActionGroupIndex = -1;
		$("#obj11684").trigger("obj11684_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 11684) {
				console.warn("de-queueing event obj11684." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj11684").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj11684_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_11687();
function runjs_11687() {
	window.obj11684_onTap_runningActionsCount = obj11684_onTap_runningActionsCount + 1;

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
		window.obj11684_onTap_runningActionsCount = window.obj11684_onTap_runningActionsCount - 1;
if (window.obj11684_onTap_runningActionsCount < 0) {
	window.obj11684_onTap_runningActionsCount = 0;
} else if (window.obj11684_onTap_runningActionsCount == 0) {
	obj11684_onTap_actionGroup2();
}
	}, 1);
}







};
obj11684_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj11684_onTap_activeActionGroupIndex = -1;
		$("#obj11684").trigger("obj11684_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 11684) {
				console.warn("de-queueing event obj11684." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj11684").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj11684_onTap_activeActionGroupIndex = 2;
	






















};
obj11681_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11681_onTap_activeActionGroupIndex = -1;
		$("#obj11681").trigger("obj11681_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 11681) {
				console.warn("de-queueing event obj11681." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj11681").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj11681_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_11683();
function goToPage_11683() {
	window.obj11681_onTap_runningActionsCount = obj11681_onTap_runningActionsCount + 1;
	$("#anchor133")[0].click();
	window.obj11681_onTap_runningActionsCount = window.obj11681_onTap_runningActionsCount - 1;
if (window.obj11681_onTap_runningActionsCount < 0) {
	window.obj11681_onTap_runningActionsCount = 0;
} else if (window.obj11681_onTap_runningActionsCount == 0) {
	obj11681_onTap_actionGroup1();
}
}





















};
obj11681_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj11681_onTap_activeActionGroupIndex = -1;
		$("#obj11681").trigger("obj11681_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 11681) {
				console.warn("de-queueing event obj11681." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj11681").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj11681_onTap_activeActionGroupIndex = 1;
	






















};
obj11666_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11666_onTap_activeActionGroupIndex = -1;
		$("#obj11666").trigger("obj11666_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 11666) {
				console.warn("de-queueing event obj11666." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj11666").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj11666_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_11668();
function goToPage_11668() {
	window.obj11666_onTap_runningActionsCount = obj11666_onTap_runningActionsCount + 1;
	$("#anchor134")[0].click();
	window.obj11666_onTap_runningActionsCount = window.obj11666_onTap_runningActionsCount - 1;
if (window.obj11666_onTap_runningActionsCount < 0) {
	window.obj11666_onTap_runningActionsCount = 0;
} else if (window.obj11666_onTap_runningActionsCount == 0) {
	obj11666_onTap_actionGroup1();
}
}





















};
obj11666_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj11666_onTap_activeActionGroupIndex = -1;
		$("#obj11666").trigger("obj11666_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 11666) {
				console.warn("de-queueing event obj11666." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj11666").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj11666_onTap_activeActionGroupIndex = 1;
	






















};
obj11650_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj11650_onTap_activeActionGroupIndex = -1;
		$("#obj11650").trigger("obj11650_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 11650) {
				console.warn("de-queueing event obj11650." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj11650").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj11650_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_11653();
function runjs_11653() {
	window.obj11650_onTap_runningActionsCount = obj11650_onTap_runningActionsCount + 1;

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
		window.obj11650_onTap_runningActionsCount = window.obj11650_onTap_runningActionsCount - 1;
if (window.obj11650_onTap_runningActionsCount < 0) {
	window.obj11650_onTap_runningActionsCount = 0;
} else if (window.obj11650_onTap_runningActionsCount == 0) {
	obj11650_onTap_actionGroup1();
}
	}, 1);
}







};
obj11650_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj11650_onTap_activeActionGroupIndex = -1;
		$("#obj11650").trigger("obj11650_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 11650) {
				console.warn("de-queueing event obj11650." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj11650").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj11650_onTap_activeActionGroupIndex = 1;
	






















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		































































/*
 *
 *   obj9198: Event Touch Down
 *
 */
$("#obj9198").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9198_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9198_onTap is still running");
	return;
}
var obj9198_onTap_runningActionsCount = 0;
var obj9198_onTap_loopCount = 0;
obj9198_onTap_actionGroup0();
});






























/*
 *
 *   obj9192: Event Touch Down
 *
 */
$("#obj9192").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9192_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9192_onTap is still running");
	return;
}
var obj9192_onTap_runningActionsCount = 0;
var obj9192_onTap_loopCount = 0;
obj9192_onTap_actionGroup0();
});






























/*
 *
 *   obj9078: Event Touch Down
 *
 */
$("#obj9078").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9078_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9078_onTap is still running");
	return;
}
var obj9078_onTap_runningActionsCount = 0;
var obj9078_onTap_loopCount = 0;
obj9078_onTap_actionGroup0();
});






























/*
 *
 *   obj9084: Event Touch Down
 *
 */
$("#obj9084").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9084_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9084_onTap is still running");
	return;
}
var obj9084_onTap_runningActionsCount = 0;
var obj9084_onTap_loopCount = 0;
obj9084_onTap_actionGroup0();
});




















/*
 *
 *   obj9122: Event Touch Down
 *
 */
$("#obj9122").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9122_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9122_onTap is still running");
	return;
}
var obj9122_onTap_runningActionsCount = 0;
var obj9122_onTap_loopCount = 0;
obj9122_onTap_actionGroup0();
});






























/*
 *
 *   obj9128: Event Touch Down
 *
 */
$("#obj9128").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9128_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9128_onTap is still running");
	return;
}
var obj9128_onTap_runningActionsCount = 0;
var obj9128_onTap_loopCount = 0;
obj9128_onTap_actionGroup0();
});




















/*
 *
 *   obj9154: Event Touch Down
 *
 */
$("#obj9154").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9154_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9154_onTap is still running");
	return;
}
var obj9154_onTap_runningActionsCount = 0;
var obj9154_onTap_loopCount = 0;
obj9154_onTap_actionGroup0();
});






























/*
 *
 *   obj9148: Event Touch Down
 *
 */
$("#obj9148").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9148_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9148_onTap is still running");
	return;
}
var obj9148_onTap_runningActionsCount = 0;
var obj9148_onTap_loopCount = 0;
obj9148_onTap_actionGroup0();
});




















/*
 *
 *   obj9176: Event Touch Down
 *
 */
$("#obj9176").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9176_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9176_onTap is still running");
	return;
}
var obj9176_onTap_runningActionsCount = 0;
var obj9176_onTap_loopCount = 0;
obj9176_onTap_actionGroup0();
});






























/*
 *
 *   obj9170: Event Touch Down
 *
 */
$("#obj9170").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9170_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9170_onTap is still running");
	return;
}
var obj9170_onTap_runningActionsCount = 0;
var obj9170_onTap_loopCount = 0;
obj9170_onTap_actionGroup0();
});


















































/*
 *
 *   obj11669: Event Touch Down
 *
 */
$("#obj11669").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj11669_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj11669_onTap is still running");
	return;
}
var obj11669_onTap_runningActionsCount = 0;
var obj11669_onTap_loopCount = 0;
obj11669_onTap_actionGroup0();
});
























/*
 *
 *   obj11688: Event SCEventReadAloudStarted
 *
 */
$("#obj11688").bind("SCEventReadAloudStarted", function(event) {
	if (window.obj11688_SCEventReadAloudStarted_activeActionGroupIndex != -1) {
	console.warn("action list window.obj11688_SCEventReadAloudStarted is still running");
	return;
}
var obj11688_SCEventReadAloudStarted_runningActionsCount = 0;
var obj11688_SCEventReadAloudStarted_loopCount = 0;
obj11688_SCEventReadAloudStarted_actionGroup0();
});
/*
 *
 *   obj11688: Event SCEventReadAloudStopped
 *
 */
$("#obj11688").bind("SCEventReadAloudStopped", function(event) {
	if (window.obj11688_SCEventReadAloudStopped_activeActionGroupIndex != -1) {
	console.warn("action list window.obj11688_SCEventReadAloudStopped is still running");
	return;
}
var obj11688_SCEventReadAloudStopped_runningActionsCount = 0;
var obj11688_SCEventReadAloudStopped_loopCount = 0;
obj11688_SCEventReadAloudStopped_actionGroup0();
});





/*
 *
 *   obj11659: Event Touch Down
 *
 */
$("#obj11659").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj11659_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj11659_onTap is still running");
	return;
}
var obj11659_onTap_runningActionsCount = 0;
var obj11659_onTap_loopCount = 0;
obj11659_onTap_actionGroup0();
});










/*
 *
 *   obj11684: Event Touch Down
 *
 */
$("#obj11684").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj11684_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj11684_onTap is still running");
	return;
}
var obj11684_onTap_runningActionsCount = 0;
var obj11684_onTap_loopCount = 0;
obj11684_onTap_actionGroup0();
});










/*
 *
 *   obj11681: Event Touch Down
 *
 */
$("#obj11681").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj11681_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj11681_onTap is still running");
	return;
}
var obj11681_onTap_runningActionsCount = 0;
var obj11681_onTap_loopCount = 0;
obj11681_onTap_actionGroup0();
});










/*
 *
 *   obj11666: Event Touch Down
 *
 */
$("#obj11666").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj11666_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj11666_onTap is still running");
	return;
}
var obj11666_onTap_runningActionsCount = 0;
var obj11666_onTap_loopCount = 0;
obj11666_onTap_actionGroup0();
});










/*
 *
 *   obj11650: Event Touch Down
 *
 */
$("#obj11650").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj11650_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj11650_onTap is still running");
	return;
}
var obj11650_onTap_runningActionsCount = 0;
var obj11650_onTap_loopCount = 0;
obj11650_onTap_actionGroup0();
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
	
$("#obj3968").trigger('SCEventShow');
$("#obj4267").trigger('SCEventShow');
$("#obj4269").trigger('SCEventShow');
$("#obj4271").trigger('SCEventShow');
$("#obj4273").trigger('SCEventShow');
$("#obj4283").trigger('SCEventShow');
$("#obj9198").trigger('SCEventShow');
$("#obj9192").trigger('SCEventShow');
$("#obj4285").trigger('SCEventShow');
$("#obj9078").trigger('SCEventShow');
$("#obj9084").trigger('SCEventShow');
$("#obj4291").trigger('SCEventShow');
$("#obj9122").trigger('SCEventShow');
$("#obj9128").trigger('SCEventShow');
$("#obj4289").trigger('SCEventShow');
$("#obj9154").trigger('SCEventShow');
$("#obj9148").trigger('SCEventShow');
$("#obj4287").trigger('SCEventShow');
$("#obj9176").trigger('SCEventShow');
$("#obj9170").trigger('SCEventShow');
$("#obj4085").trigger('SCEventShow');
$("#obj9028").trigger('SCEventShow');
$("#obj11688").trigger('SCEventShow');
$("#obj11659").trigger('SCEventShow');
$("#obj11681").trigger('SCEventShow');
$("#obj11666").trigger('SCEventShow');
$("#obj11650").trigger('SCEventShow');
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
function escHandler(e) {
  if (e.key === "Escape" || e.keyCode === 27) {
    const xreader = window.parent.document.getElementById("xreaderUI");
    xreader.style.display = "none";
  }
}
if (window.parent && window.parent.document) {
  window.parent.document.addEventListener("keydown", escHandler, true);
}
window.addEventListener("keydown", escHandler, true);
});