pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Unit 1";
pubcoder.page.id = pubcoder.page.id || 1476;
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
var obj2194_onTap_activeActionGroupIndex = -1;
var obj2194_onTap_runningActionsCount = 0;
var obj2194_onTap_loopCount = 0;
var obj2196_onTap_activeActionGroupIndex = -1;
var obj2196_onTap_runningActionsCount = 0;
var obj2196_onTap_loopCount = 0;
var obj2198_onTap_activeActionGroupIndex = -1;
var obj2198_onTap_runningActionsCount = 0;
var obj2198_onTap_loopCount = 0;
var obj2200_onTap_activeActionGroupIndex = -1;
var obj2200_onTap_runningActionsCount = 0;
var obj2200_onTap_loopCount = 0;
var obj2202_onTap_activeActionGroupIndex = -1;
var obj2202_onTap_runningActionsCount = 0;
var obj2202_onTap_loopCount = 0;
var obj2204_onTap_activeActionGroupIndex = -1;
var obj2204_onTap_runningActionsCount = 0;
var obj2204_onTap_loopCount = 0;
var obj2206_onTap_activeActionGroupIndex = -1;
var obj2206_onTap_runningActionsCount = 0;
var obj2206_onTap_loopCount = 0;
var obj2208_onTap_activeActionGroupIndex = -1;
var obj2208_onTap_runningActionsCount = 0;
var obj2208_onTap_loopCount = 0;
var obj2210_onTap_activeActionGroupIndex = -1;
var obj2210_onTap_runningActionsCount = 0;
var obj2210_onTap_loopCount = 0;
var obj2212_onTap_activeActionGroupIndex = -1;
var obj2212_onTap_runningActionsCount = 0;
var obj2212_onTap_loopCount = 0;
var obj2214_onTap_activeActionGroupIndex = -1;
var obj2214_onTap_runningActionsCount = 0;
var obj2214_onTap_loopCount = 0;
var obj2216_onTap_activeActionGroupIndex = -1;
var obj2216_onTap_runningActionsCount = 0;
var obj2216_onTap_loopCount = 0;
var obj2935_SCEventReadAloudStarted_activeActionGroupIndex = -1;
var obj2935_SCEventReadAloudStarted_runningActionsCount = 0;
var obj2935_SCEventReadAloudStarted_loopCount = 0;
var obj2935_onTouchUp_activeActionGroupIndex = -1;
var obj2935_onTouchUp_runningActionsCount = 0;
var obj2935_onTouchUp_loopCount = 0;
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
		
obj2194_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2194_onTap_activeActionGroupIndex = -1;
		$("#obj2194").trigger("obj2194_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2194) {
				console.warn("de-queueing event obj2194." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2194").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2194_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4597
(function(){
	window.obj2194_onTap_runningActionsCount = obj2194_onTap_runningActionsCount + 1;

	var selector = "#obj4597";
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
					window.obj2194_onTap_runningActionsCount = window.obj2194_onTap_runningActionsCount - 1;
if (window.obj2194_onTap_runningActionsCount < 0) {
	window.obj2194_onTap_runningActionsCount = 0;
} else if (window.obj2194_onTap_runningActionsCount == 0) {
	obj2194_onTap_actionGroup1();
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
				window.obj2194_onTap_runningActionsCount = window.obj2194_onTap_runningActionsCount - 1;
if (window.obj2194_onTap_runningActionsCount < 0) {
	window.obj2194_onTap_runningActionsCount = 0;
} else if (window.obj2194_onTap_runningActionsCount == 0) {
	obj2194_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2194_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2194_onTap_activeActionGroupIndex = -1;
		$("#obj2194").trigger("obj2194_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2194) {
				console.warn("de-queueing event obj2194." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2194").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2194_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4659();
function playAudioFile_4659() {
	window.obj2194_onTap_runningActionsCount = obj2194_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4659")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4659");
			$("#obj_audio_playSoundFile4659").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2194_onTap_runningActionsCount = window.obj2194_onTap_runningActionsCount - 1;
if (window.obj2194_onTap_runningActionsCount < 0) {
	window.obj2194_onTap_runningActionsCount = 0;
} else if (window.obj2194_onTap_runningActionsCount == 0) {
	obj2194_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2194_onTap_runningActionsCount = window.obj2194_onTap_runningActionsCount - 1;
if (window.obj2194_onTap_runningActionsCount < 0) {
	window.obj2194_onTap_runningActionsCount = 0;
} else if (window.obj2194_onTap_runningActionsCount == 0) {
	obj2194_onTap_actionGroup2();
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
				window.obj2194_onTap_runningActionsCount = window.obj2194_onTap_runningActionsCount - 1;
if (window.obj2194_onTap_runningActionsCount < 0) {
	window.obj2194_onTap_runningActionsCount = 0;
} else if (window.obj2194_onTap_runningActionsCount == 0) {
	obj2194_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2194_onTap_runningActionsCount = window.obj2194_onTap_runningActionsCount - 1;
if (window.obj2194_onTap_runningActionsCount < 0) {
	window.obj2194_onTap_runningActionsCount = 0;
} else if (window.obj2194_onTap_runningActionsCount == 0) {
	obj2194_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2194_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2194_onTap_activeActionGroupIndex = -1;
		$("#obj2194").trigger("obj2194_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2194) {
				console.warn("de-queueing event obj2194." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2194").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2194_onTap_activeActionGroupIndex = 2;
	





















};
obj2196_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2196_onTap_activeActionGroupIndex = -1;
		$("#obj2196").trigger("obj2196_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2196) {
				console.warn("de-queueing event obj2196." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2196").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2196_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4640
(function(){
	window.obj2196_onTap_runningActionsCount = obj2196_onTap_runningActionsCount + 1;

	var selector = "#obj4640";
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
					window.obj2196_onTap_runningActionsCount = window.obj2196_onTap_runningActionsCount - 1;
if (window.obj2196_onTap_runningActionsCount < 0) {
	window.obj2196_onTap_runningActionsCount = 0;
} else if (window.obj2196_onTap_runningActionsCount == 0) {
	obj2196_onTap_actionGroup1();
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
				window.obj2196_onTap_runningActionsCount = window.obj2196_onTap_runningActionsCount - 1;
if (window.obj2196_onTap_runningActionsCount < 0) {
	window.obj2196_onTap_runningActionsCount = 0;
} else if (window.obj2196_onTap_runningActionsCount == 0) {
	obj2196_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2196_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2196_onTap_activeActionGroupIndex = -1;
		$("#obj2196").trigger("obj2196_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2196) {
				console.warn("de-queueing event obj2196." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2196").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2196_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4654();
function playAudioFile_4654() {
	window.obj2196_onTap_runningActionsCount = obj2196_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4654")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4654");
			$("#obj_audio_playSoundFile4654").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2196_onTap_runningActionsCount = window.obj2196_onTap_runningActionsCount - 1;
if (window.obj2196_onTap_runningActionsCount < 0) {
	window.obj2196_onTap_runningActionsCount = 0;
} else if (window.obj2196_onTap_runningActionsCount == 0) {
	obj2196_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2196_onTap_runningActionsCount = window.obj2196_onTap_runningActionsCount - 1;
if (window.obj2196_onTap_runningActionsCount < 0) {
	window.obj2196_onTap_runningActionsCount = 0;
} else if (window.obj2196_onTap_runningActionsCount == 0) {
	obj2196_onTap_actionGroup2();
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
				window.obj2196_onTap_runningActionsCount = window.obj2196_onTap_runningActionsCount - 1;
if (window.obj2196_onTap_runningActionsCount < 0) {
	window.obj2196_onTap_runningActionsCount = 0;
} else if (window.obj2196_onTap_runningActionsCount == 0) {
	obj2196_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2196_onTap_runningActionsCount = window.obj2196_onTap_runningActionsCount - 1;
if (window.obj2196_onTap_runningActionsCount < 0) {
	window.obj2196_onTap_runningActionsCount = 0;
} else if (window.obj2196_onTap_runningActionsCount == 0) {
	obj2196_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2196_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2196_onTap_activeActionGroupIndex = -1;
		$("#obj2196").trigger("obj2196_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2196) {
				console.warn("de-queueing event obj2196." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2196").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2196_onTap_activeActionGroupIndex = 2;
	





















};
obj2198_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2198_onTap_activeActionGroupIndex = -1;
		$("#obj2198").trigger("obj2198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2198) {
				console.warn("de-queueing event obj2198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2198_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4638
(function(){
	window.obj2198_onTap_runningActionsCount = obj2198_onTap_runningActionsCount + 1;

	var selector = "#obj4638";
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
					window.obj2198_onTap_runningActionsCount = window.obj2198_onTap_runningActionsCount - 1;
if (window.obj2198_onTap_runningActionsCount < 0) {
	window.obj2198_onTap_runningActionsCount = 0;
} else if (window.obj2198_onTap_runningActionsCount == 0) {
	obj2198_onTap_actionGroup1();
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
				window.obj2198_onTap_runningActionsCount = window.obj2198_onTap_runningActionsCount - 1;
if (window.obj2198_onTap_runningActionsCount < 0) {
	window.obj2198_onTap_runningActionsCount = 0;
} else if (window.obj2198_onTap_runningActionsCount == 0) {
	obj2198_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2198_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2198_onTap_activeActionGroupIndex = -1;
		$("#obj2198").trigger("obj2198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2198) {
				console.warn("de-queueing event obj2198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2198_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4653();
function playAudioFile_4653() {
	window.obj2198_onTap_runningActionsCount = obj2198_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4653")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4653");
			$("#obj_audio_playSoundFile4653").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2198_onTap_runningActionsCount = window.obj2198_onTap_runningActionsCount - 1;
if (window.obj2198_onTap_runningActionsCount < 0) {
	window.obj2198_onTap_runningActionsCount = 0;
} else if (window.obj2198_onTap_runningActionsCount == 0) {
	obj2198_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2198_onTap_runningActionsCount = window.obj2198_onTap_runningActionsCount - 1;
if (window.obj2198_onTap_runningActionsCount < 0) {
	window.obj2198_onTap_runningActionsCount = 0;
} else if (window.obj2198_onTap_runningActionsCount == 0) {
	obj2198_onTap_actionGroup2();
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
				window.obj2198_onTap_runningActionsCount = window.obj2198_onTap_runningActionsCount - 1;
if (window.obj2198_onTap_runningActionsCount < 0) {
	window.obj2198_onTap_runningActionsCount = 0;
} else if (window.obj2198_onTap_runningActionsCount == 0) {
	obj2198_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2198_onTap_runningActionsCount = window.obj2198_onTap_runningActionsCount - 1;
if (window.obj2198_onTap_runningActionsCount < 0) {
	window.obj2198_onTap_runningActionsCount = 0;
} else if (window.obj2198_onTap_runningActionsCount == 0) {
	obj2198_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2198_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2198_onTap_activeActionGroupIndex = -1;
		$("#obj2198").trigger("obj2198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2198) {
				console.warn("de-queueing event obj2198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2198_onTap_activeActionGroupIndex = 2;
	





















};
obj2200_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2200_onTap_activeActionGroupIndex = -1;
		$("#obj2200").trigger("obj2200_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2200) {
				console.warn("de-queueing event obj2200." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2200").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2200_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4636
(function(){
	window.obj2200_onTap_runningActionsCount = obj2200_onTap_runningActionsCount + 1;

	var selector = "#obj4636";
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
					window.obj2200_onTap_runningActionsCount = window.obj2200_onTap_runningActionsCount - 1;
if (window.obj2200_onTap_runningActionsCount < 0) {
	window.obj2200_onTap_runningActionsCount = 0;
} else if (window.obj2200_onTap_runningActionsCount == 0) {
	obj2200_onTap_actionGroup1();
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
				window.obj2200_onTap_runningActionsCount = window.obj2200_onTap_runningActionsCount - 1;
if (window.obj2200_onTap_runningActionsCount < 0) {
	window.obj2200_onTap_runningActionsCount = 0;
} else if (window.obj2200_onTap_runningActionsCount == 0) {
	obj2200_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2200_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2200_onTap_activeActionGroupIndex = -1;
		$("#obj2200").trigger("obj2200_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2200) {
				console.warn("de-queueing event obj2200." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2200").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2200_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4652();
function playAudioFile_4652() {
	window.obj2200_onTap_runningActionsCount = obj2200_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4652")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4652");
			$("#obj_audio_playSoundFile4652").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2200_onTap_runningActionsCount = window.obj2200_onTap_runningActionsCount - 1;
if (window.obj2200_onTap_runningActionsCount < 0) {
	window.obj2200_onTap_runningActionsCount = 0;
} else if (window.obj2200_onTap_runningActionsCount == 0) {
	obj2200_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2200_onTap_runningActionsCount = window.obj2200_onTap_runningActionsCount - 1;
if (window.obj2200_onTap_runningActionsCount < 0) {
	window.obj2200_onTap_runningActionsCount = 0;
} else if (window.obj2200_onTap_runningActionsCount == 0) {
	obj2200_onTap_actionGroup2();
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
				window.obj2200_onTap_runningActionsCount = window.obj2200_onTap_runningActionsCount - 1;
if (window.obj2200_onTap_runningActionsCount < 0) {
	window.obj2200_onTap_runningActionsCount = 0;
} else if (window.obj2200_onTap_runningActionsCount == 0) {
	obj2200_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2200_onTap_runningActionsCount = window.obj2200_onTap_runningActionsCount - 1;
if (window.obj2200_onTap_runningActionsCount < 0) {
	window.obj2200_onTap_runningActionsCount = 0;
} else if (window.obj2200_onTap_runningActionsCount == 0) {
	obj2200_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2200_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2200_onTap_activeActionGroupIndex = -1;
		$("#obj2200").trigger("obj2200_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2200) {
				console.warn("de-queueing event obj2200." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2200").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2200_onTap_activeActionGroupIndex = 2;
	





















};
obj2202_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2202_onTap_activeActionGroupIndex = -1;
		$("#obj2202").trigger("obj2202_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2202) {
				console.warn("de-queueing event obj2202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2202_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4634
(function(){
	window.obj2202_onTap_runningActionsCount = obj2202_onTap_runningActionsCount + 1;

	var selector = "#obj4634";
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
					window.obj2202_onTap_runningActionsCount = window.obj2202_onTap_runningActionsCount - 1;
if (window.obj2202_onTap_runningActionsCount < 0) {
	window.obj2202_onTap_runningActionsCount = 0;
} else if (window.obj2202_onTap_runningActionsCount == 0) {
	obj2202_onTap_actionGroup1();
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
				window.obj2202_onTap_runningActionsCount = window.obj2202_onTap_runningActionsCount - 1;
if (window.obj2202_onTap_runningActionsCount < 0) {
	window.obj2202_onTap_runningActionsCount = 0;
} else if (window.obj2202_onTap_runningActionsCount == 0) {
	obj2202_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2202_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2202_onTap_activeActionGroupIndex = -1;
		$("#obj2202").trigger("obj2202_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2202) {
				console.warn("de-queueing event obj2202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2202_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4621();
function playAudioFile_4621() {
	window.obj2202_onTap_runningActionsCount = obj2202_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4621")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4621");
			$("#obj_audio_playSoundFile4621").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2202_onTap_runningActionsCount = window.obj2202_onTap_runningActionsCount - 1;
if (window.obj2202_onTap_runningActionsCount < 0) {
	window.obj2202_onTap_runningActionsCount = 0;
} else if (window.obj2202_onTap_runningActionsCount == 0) {
	obj2202_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2202_onTap_runningActionsCount = window.obj2202_onTap_runningActionsCount - 1;
if (window.obj2202_onTap_runningActionsCount < 0) {
	window.obj2202_onTap_runningActionsCount = 0;
} else if (window.obj2202_onTap_runningActionsCount == 0) {
	obj2202_onTap_actionGroup2();
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
				window.obj2202_onTap_runningActionsCount = window.obj2202_onTap_runningActionsCount - 1;
if (window.obj2202_onTap_runningActionsCount < 0) {
	window.obj2202_onTap_runningActionsCount = 0;
} else if (window.obj2202_onTap_runningActionsCount == 0) {
	obj2202_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2202_onTap_runningActionsCount = window.obj2202_onTap_runningActionsCount - 1;
if (window.obj2202_onTap_runningActionsCount < 0) {
	window.obj2202_onTap_runningActionsCount = 0;
} else if (window.obj2202_onTap_runningActionsCount == 0) {
	obj2202_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2202_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2202_onTap_activeActionGroupIndex = -1;
		$("#obj2202").trigger("obj2202_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2202) {
				console.warn("de-queueing event obj2202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2202_onTap_activeActionGroupIndex = 2;
	





















};
obj2204_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2204_onTap_activeActionGroupIndex = -1;
		$("#obj2204").trigger("obj2204_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2204) {
				console.warn("de-queueing event obj2204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2204_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4606
(function(){
	window.obj2204_onTap_runningActionsCount = obj2204_onTap_runningActionsCount + 1;

	var selector = "#obj4606";
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
					window.obj2204_onTap_runningActionsCount = window.obj2204_onTap_runningActionsCount - 1;
if (window.obj2204_onTap_runningActionsCount < 0) {
	window.obj2204_onTap_runningActionsCount = 0;
} else if (window.obj2204_onTap_runningActionsCount == 0) {
	obj2204_onTap_actionGroup1();
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
				window.obj2204_onTap_runningActionsCount = window.obj2204_onTap_runningActionsCount - 1;
if (window.obj2204_onTap_runningActionsCount < 0) {
	window.obj2204_onTap_runningActionsCount = 0;
} else if (window.obj2204_onTap_runningActionsCount == 0) {
	obj2204_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2204_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2204_onTap_activeActionGroupIndex = -1;
		$("#obj2204").trigger("obj2204_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2204) {
				console.warn("de-queueing event obj2204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2204_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4609();
function playAudioFile_4609() {
	window.obj2204_onTap_runningActionsCount = obj2204_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4609")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4609");
			$("#obj_audio_playSoundFile4609").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2204_onTap_runningActionsCount = window.obj2204_onTap_runningActionsCount - 1;
if (window.obj2204_onTap_runningActionsCount < 0) {
	window.obj2204_onTap_runningActionsCount = 0;
} else if (window.obj2204_onTap_runningActionsCount == 0) {
	obj2204_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2204_onTap_runningActionsCount = window.obj2204_onTap_runningActionsCount - 1;
if (window.obj2204_onTap_runningActionsCount < 0) {
	window.obj2204_onTap_runningActionsCount = 0;
} else if (window.obj2204_onTap_runningActionsCount == 0) {
	obj2204_onTap_actionGroup2();
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
				window.obj2204_onTap_runningActionsCount = window.obj2204_onTap_runningActionsCount - 1;
if (window.obj2204_onTap_runningActionsCount < 0) {
	window.obj2204_onTap_runningActionsCount = 0;
} else if (window.obj2204_onTap_runningActionsCount == 0) {
	obj2204_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2204_onTap_runningActionsCount = window.obj2204_onTap_runningActionsCount - 1;
if (window.obj2204_onTap_runningActionsCount < 0) {
	window.obj2204_onTap_runningActionsCount = 0;
} else if (window.obj2204_onTap_runningActionsCount == 0) {
	obj2204_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2204_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2204_onTap_activeActionGroupIndex = -1;
		$("#obj2204").trigger("obj2204_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2204) {
				console.warn("de-queueing event obj2204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2204_onTap_activeActionGroupIndex = 2;
	





















};
obj2206_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2206_onTap_activeActionGroupIndex = -1;
		$("#obj2206").trigger("obj2206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2206) {
				console.warn("de-queueing event obj2206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2206_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4630
(function(){
	window.obj2206_onTap_runningActionsCount = obj2206_onTap_runningActionsCount + 1;

	var selector = "#obj4630";
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
					window.obj2206_onTap_runningActionsCount = window.obj2206_onTap_runningActionsCount - 1;
if (window.obj2206_onTap_runningActionsCount < 0) {
	window.obj2206_onTap_runningActionsCount = 0;
} else if (window.obj2206_onTap_runningActionsCount == 0) {
	obj2206_onTap_actionGroup1();
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
				window.obj2206_onTap_runningActionsCount = window.obj2206_onTap_runningActionsCount - 1;
if (window.obj2206_onTap_runningActionsCount < 0) {
	window.obj2206_onTap_runningActionsCount = 0;
} else if (window.obj2206_onTap_runningActionsCount == 0) {
	obj2206_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2206_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2206_onTap_activeActionGroupIndex = -1;
		$("#obj2206").trigger("obj2206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2206) {
				console.warn("de-queueing event obj2206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2206_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4650();
function playAudioFile_4650() {
	window.obj2206_onTap_runningActionsCount = obj2206_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4650")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4650");
			$("#obj_audio_playSoundFile4650").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2206_onTap_runningActionsCount = window.obj2206_onTap_runningActionsCount - 1;
if (window.obj2206_onTap_runningActionsCount < 0) {
	window.obj2206_onTap_runningActionsCount = 0;
} else if (window.obj2206_onTap_runningActionsCount == 0) {
	obj2206_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2206_onTap_runningActionsCount = window.obj2206_onTap_runningActionsCount - 1;
if (window.obj2206_onTap_runningActionsCount < 0) {
	window.obj2206_onTap_runningActionsCount = 0;
} else if (window.obj2206_onTap_runningActionsCount == 0) {
	obj2206_onTap_actionGroup2();
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
				window.obj2206_onTap_runningActionsCount = window.obj2206_onTap_runningActionsCount - 1;
if (window.obj2206_onTap_runningActionsCount < 0) {
	window.obj2206_onTap_runningActionsCount = 0;
} else if (window.obj2206_onTap_runningActionsCount == 0) {
	obj2206_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2206_onTap_runningActionsCount = window.obj2206_onTap_runningActionsCount - 1;
if (window.obj2206_onTap_runningActionsCount < 0) {
	window.obj2206_onTap_runningActionsCount = 0;
} else if (window.obj2206_onTap_runningActionsCount == 0) {
	obj2206_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2206_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2206_onTap_activeActionGroupIndex = -1;
		$("#obj2206").trigger("obj2206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2206) {
				console.warn("de-queueing event obj2206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2206_onTap_activeActionGroupIndex = 2;
	





















};
obj2208_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2208_onTap_activeActionGroupIndex = -1;
		$("#obj2208").trigger("obj2208_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2208) {
				console.warn("de-queueing event obj2208." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2208").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2208_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4632
(function(){
	window.obj2208_onTap_runningActionsCount = obj2208_onTap_runningActionsCount + 1;

	var selector = "#obj4632";
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
					window.obj2208_onTap_runningActionsCount = window.obj2208_onTap_runningActionsCount - 1;
if (window.obj2208_onTap_runningActionsCount < 0) {
	window.obj2208_onTap_runningActionsCount = 0;
} else if (window.obj2208_onTap_runningActionsCount == 0) {
	obj2208_onTap_actionGroup1();
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
				window.obj2208_onTap_runningActionsCount = window.obj2208_onTap_runningActionsCount - 1;
if (window.obj2208_onTap_runningActionsCount < 0) {
	window.obj2208_onTap_runningActionsCount = 0;
} else if (window.obj2208_onTap_runningActionsCount == 0) {
	obj2208_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2208_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2208_onTap_activeActionGroupIndex = -1;
		$("#obj2208").trigger("obj2208_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2208) {
				console.warn("de-queueing event obj2208." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2208").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2208_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4651();
function playAudioFile_4651() {
	window.obj2208_onTap_runningActionsCount = obj2208_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4651")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4651");
			$("#obj_audio_playSoundFile4651").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2208_onTap_runningActionsCount = window.obj2208_onTap_runningActionsCount - 1;
if (window.obj2208_onTap_runningActionsCount < 0) {
	window.obj2208_onTap_runningActionsCount = 0;
} else if (window.obj2208_onTap_runningActionsCount == 0) {
	obj2208_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2208_onTap_runningActionsCount = window.obj2208_onTap_runningActionsCount - 1;
if (window.obj2208_onTap_runningActionsCount < 0) {
	window.obj2208_onTap_runningActionsCount = 0;
} else if (window.obj2208_onTap_runningActionsCount == 0) {
	obj2208_onTap_actionGroup2();
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
				window.obj2208_onTap_runningActionsCount = window.obj2208_onTap_runningActionsCount - 1;
if (window.obj2208_onTap_runningActionsCount < 0) {
	window.obj2208_onTap_runningActionsCount = 0;
} else if (window.obj2208_onTap_runningActionsCount == 0) {
	obj2208_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2208_onTap_runningActionsCount = window.obj2208_onTap_runningActionsCount - 1;
if (window.obj2208_onTap_runningActionsCount < 0) {
	window.obj2208_onTap_runningActionsCount = 0;
} else if (window.obj2208_onTap_runningActionsCount == 0) {
	obj2208_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2208_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2208_onTap_activeActionGroupIndex = -1;
		$("#obj2208").trigger("obj2208_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2208) {
				console.warn("de-queueing event obj2208." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2208").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2208_onTap_activeActionGroupIndex = 2;
	





















};
obj2210_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2210_onTap_activeActionGroupIndex = -1;
		$("#obj2210").trigger("obj2210_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2210) {
				console.warn("de-queueing event obj2210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2210_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4642
(function(){
	window.obj2210_onTap_runningActionsCount = obj2210_onTap_runningActionsCount + 1;

	var selector = "#obj4642";
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
					window.obj2210_onTap_runningActionsCount = window.obj2210_onTap_runningActionsCount - 1;
if (window.obj2210_onTap_runningActionsCount < 0) {
	window.obj2210_onTap_runningActionsCount = 0;
} else if (window.obj2210_onTap_runningActionsCount == 0) {
	obj2210_onTap_actionGroup1();
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
				window.obj2210_onTap_runningActionsCount = window.obj2210_onTap_runningActionsCount - 1;
if (window.obj2210_onTap_runningActionsCount < 0) {
	window.obj2210_onTap_runningActionsCount = 0;
} else if (window.obj2210_onTap_runningActionsCount == 0) {
	obj2210_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2210_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2210_onTap_activeActionGroupIndex = -1;
		$("#obj2210").trigger("obj2210_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2210) {
				console.warn("de-queueing event obj2210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2210_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4623();
function playAudioFile_4623() {
	window.obj2210_onTap_runningActionsCount = obj2210_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4623")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4623");
			$("#obj_audio_playSoundFile4623").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2210_onTap_runningActionsCount = window.obj2210_onTap_runningActionsCount - 1;
if (window.obj2210_onTap_runningActionsCount < 0) {
	window.obj2210_onTap_runningActionsCount = 0;
} else if (window.obj2210_onTap_runningActionsCount == 0) {
	obj2210_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2210_onTap_runningActionsCount = window.obj2210_onTap_runningActionsCount - 1;
if (window.obj2210_onTap_runningActionsCount < 0) {
	window.obj2210_onTap_runningActionsCount = 0;
} else if (window.obj2210_onTap_runningActionsCount == 0) {
	obj2210_onTap_actionGroup2();
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
				window.obj2210_onTap_runningActionsCount = window.obj2210_onTap_runningActionsCount - 1;
if (window.obj2210_onTap_runningActionsCount < 0) {
	window.obj2210_onTap_runningActionsCount = 0;
} else if (window.obj2210_onTap_runningActionsCount == 0) {
	obj2210_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2210_onTap_runningActionsCount = window.obj2210_onTap_runningActionsCount - 1;
if (window.obj2210_onTap_runningActionsCount < 0) {
	window.obj2210_onTap_runningActionsCount = 0;
} else if (window.obj2210_onTap_runningActionsCount == 0) {
	obj2210_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2210_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2210_onTap_activeActionGroupIndex = -1;
		$("#obj2210").trigger("obj2210_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2210) {
				console.warn("de-queueing event obj2210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2210_onTap_activeActionGroupIndex = 2;
	





















};
obj2212_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2212_onTap_activeActionGroupIndex = -1;
		$("#obj2212").trigger("obj2212_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2212) {
				console.warn("de-queueing event obj2212." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2212").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2212_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4646
(function(){
	window.obj2212_onTap_runningActionsCount = obj2212_onTap_runningActionsCount + 1;

	var selector = "#obj4646";
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
					window.obj2212_onTap_runningActionsCount = window.obj2212_onTap_runningActionsCount - 1;
if (window.obj2212_onTap_runningActionsCount < 0) {
	window.obj2212_onTap_runningActionsCount = 0;
} else if (window.obj2212_onTap_runningActionsCount == 0) {
	obj2212_onTap_actionGroup1();
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
				window.obj2212_onTap_runningActionsCount = window.obj2212_onTap_runningActionsCount - 1;
if (window.obj2212_onTap_runningActionsCount < 0) {
	window.obj2212_onTap_runningActionsCount = 0;
} else if (window.obj2212_onTap_runningActionsCount == 0) {
	obj2212_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2212_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2212_onTap_activeActionGroupIndex = -1;
		$("#obj2212").trigger("obj2212_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2212) {
				console.warn("de-queueing event obj2212." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2212").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2212_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4656();
function playAudioFile_4656() {
	window.obj2212_onTap_runningActionsCount = obj2212_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4656")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4656");
			$("#obj_audio_playSoundFile4656").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2212_onTap_runningActionsCount = window.obj2212_onTap_runningActionsCount - 1;
if (window.obj2212_onTap_runningActionsCount < 0) {
	window.obj2212_onTap_runningActionsCount = 0;
} else if (window.obj2212_onTap_runningActionsCount == 0) {
	obj2212_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2212_onTap_runningActionsCount = window.obj2212_onTap_runningActionsCount - 1;
if (window.obj2212_onTap_runningActionsCount < 0) {
	window.obj2212_onTap_runningActionsCount = 0;
} else if (window.obj2212_onTap_runningActionsCount == 0) {
	obj2212_onTap_actionGroup2();
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
				window.obj2212_onTap_runningActionsCount = window.obj2212_onTap_runningActionsCount - 1;
if (window.obj2212_onTap_runningActionsCount < 0) {
	window.obj2212_onTap_runningActionsCount = 0;
} else if (window.obj2212_onTap_runningActionsCount == 0) {
	obj2212_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2212_onTap_runningActionsCount = window.obj2212_onTap_runningActionsCount - 1;
if (window.obj2212_onTap_runningActionsCount < 0) {
	window.obj2212_onTap_runningActionsCount = 0;
} else if (window.obj2212_onTap_runningActionsCount == 0) {
	obj2212_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2212_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2212_onTap_activeActionGroupIndex = -1;
		$("#obj2212").trigger("obj2212_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2212) {
				console.warn("de-queueing event obj2212." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2212").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2212_onTap_activeActionGroupIndex = 2;
	





















};
obj2214_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2214_onTap_activeActionGroupIndex = -1;
		$("#obj2214").trigger("obj2214_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2214) {
				console.warn("de-queueing event obj2214." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2214").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2214_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4648
(function(){
	window.obj2214_onTap_runningActionsCount = obj2214_onTap_runningActionsCount + 1;

	var selector = "#obj4648";
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
					window.obj2214_onTap_runningActionsCount = window.obj2214_onTap_runningActionsCount - 1;
if (window.obj2214_onTap_runningActionsCount < 0) {
	window.obj2214_onTap_runningActionsCount = 0;
} else if (window.obj2214_onTap_runningActionsCount == 0) {
	obj2214_onTap_actionGroup1();
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
				window.obj2214_onTap_runningActionsCount = window.obj2214_onTap_runningActionsCount - 1;
if (window.obj2214_onTap_runningActionsCount < 0) {
	window.obj2214_onTap_runningActionsCount = 0;
} else if (window.obj2214_onTap_runningActionsCount == 0) {
	obj2214_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2214_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2214_onTap_activeActionGroupIndex = -1;
		$("#obj2214").trigger("obj2214_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2214) {
				console.warn("de-queueing event obj2214." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2214").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2214_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4657();
function playAudioFile_4657() {
	window.obj2214_onTap_runningActionsCount = obj2214_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4657")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4657");
			$("#obj_audio_playSoundFile4657").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2214_onTap_runningActionsCount = window.obj2214_onTap_runningActionsCount - 1;
if (window.obj2214_onTap_runningActionsCount < 0) {
	window.obj2214_onTap_runningActionsCount = 0;
} else if (window.obj2214_onTap_runningActionsCount == 0) {
	obj2214_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2214_onTap_runningActionsCount = window.obj2214_onTap_runningActionsCount - 1;
if (window.obj2214_onTap_runningActionsCount < 0) {
	window.obj2214_onTap_runningActionsCount = 0;
} else if (window.obj2214_onTap_runningActionsCount == 0) {
	obj2214_onTap_actionGroup2();
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
				window.obj2214_onTap_runningActionsCount = window.obj2214_onTap_runningActionsCount - 1;
if (window.obj2214_onTap_runningActionsCount < 0) {
	window.obj2214_onTap_runningActionsCount = 0;
} else if (window.obj2214_onTap_runningActionsCount == 0) {
	obj2214_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2214_onTap_runningActionsCount = window.obj2214_onTap_runningActionsCount - 1;
if (window.obj2214_onTap_runningActionsCount < 0) {
	window.obj2214_onTap_runningActionsCount = 0;
} else if (window.obj2214_onTap_runningActionsCount == 0) {
	obj2214_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2214_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2214_onTap_activeActionGroupIndex = -1;
		$("#obj2214").trigger("obj2214_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2214) {
				console.warn("de-queueing event obj2214." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2214").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2214_onTap_activeActionGroupIndex = 2;
	





















};
obj2216_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2216_onTap_activeActionGroupIndex = -1;
		$("#obj2216").trigger("obj2216_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2216) {
				console.warn("de-queueing event obj2216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2216_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj4644
(function(){
	window.obj2216_onTap_runningActionsCount = obj2216_onTap_runningActionsCount + 1;

	var selector = "#obj4644";
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
					window.obj2216_onTap_runningActionsCount = window.obj2216_onTap_runningActionsCount - 1;
if (window.obj2216_onTap_runningActionsCount < 0) {
	window.obj2216_onTap_runningActionsCount = 0;
} else if (window.obj2216_onTap_runningActionsCount == 0) {
	obj2216_onTap_actionGroup1();
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
				window.obj2216_onTap_runningActionsCount = window.obj2216_onTap_runningActionsCount - 1;
if (window.obj2216_onTap_runningActionsCount < 0) {
	window.obj2216_onTap_runningActionsCount = 0;
} else if (window.obj2216_onTap_runningActionsCount == 0) {
	obj2216_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2216_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2216_onTap_activeActionGroupIndex = -1;
		$("#obj2216").trigger("obj2216_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2216) {
				console.warn("de-queueing event obj2216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2216_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4655();
function playAudioFile_4655() {
	window.obj2216_onTap_runningActionsCount = obj2216_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4655")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4655");
			$("#obj_audio_playSoundFile4655").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2216_onTap_runningActionsCount = window.obj2216_onTap_runningActionsCount - 1;
if (window.obj2216_onTap_runningActionsCount < 0) {
	window.obj2216_onTap_runningActionsCount = 0;
} else if (window.obj2216_onTap_runningActionsCount == 0) {
	obj2216_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2216_onTap_runningActionsCount = window.obj2216_onTap_runningActionsCount - 1;
if (window.obj2216_onTap_runningActionsCount < 0) {
	window.obj2216_onTap_runningActionsCount = 0;
} else if (window.obj2216_onTap_runningActionsCount == 0) {
	obj2216_onTap_actionGroup2();
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
				window.obj2216_onTap_runningActionsCount = window.obj2216_onTap_runningActionsCount - 1;
if (window.obj2216_onTap_runningActionsCount < 0) {
	window.obj2216_onTap_runningActionsCount = 0;
} else if (window.obj2216_onTap_runningActionsCount == 0) {
	obj2216_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2216_onTap_runningActionsCount = window.obj2216_onTap_runningActionsCount - 1;
if (window.obj2216_onTap_runningActionsCount < 0) {
	window.obj2216_onTap_runningActionsCount = 0;
} else if (window.obj2216_onTap_runningActionsCount == 0) {
	obj2216_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2216_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2216_onTap_activeActionGroupIndex = -1;
		$("#obj2216").trigger("obj2216_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2216) {
				console.warn("de-queueing event obj2216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2216_onTap_activeActionGroupIndex = 2;
	





















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
	var switchHelperId = "switchHelper152"
	var switchHelperRef = "#switchHelper152"
	var switchId = "152";
	var toSwitchId = "152";
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
obj2935_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2935_onTouchUp_activeActionGroupIndex = -1;
		$("#obj2935").trigger("obj2935_onTouchUp_ended");
		
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
	window.obj2935_onTouchUp_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2943();
function runjs_2943() {
	window.obj2935_onTouchUp_runningActionsCount = obj2935_onTouchUp_runningActionsCount + 1;

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
		window.obj2935_onTouchUp_runningActionsCount = window.obj2935_onTouchUp_runningActionsCount - 1;
if (window.obj2935_onTouchUp_runningActionsCount < 0) {
	window.obj2935_onTouchUp_runningActionsCount = 0;
} else if (window.obj2935_onTouchUp_runningActionsCount == 0) {
	obj2935_onTouchUp_actionGroup1();
}
	}, 1);
}







};
obj2935_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2935_onTouchUp_activeActionGroupIndex = -1;
		$("#obj2935").trigger("obj2935_onTouchUp_ended");
		
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
	window.obj2935_onTouchUp_activeActionGroupIndex = 1;
	





















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
	var switchHelperId = "switchHelper153"
	var switchHelperRef = "#switchHelper153"
	var switchId = "153";
	var toSwitchId = "153";
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
	var switchHelperId = "switchHelper154"
	var switchHelperRef = "#switchHelper154"
	var switchId = "154";
	var toSwitchId = "154";
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
	var switchHelperId = "switchHelper155"
	var switchHelperRef = "#switchHelper155"
	var switchId = "155";
	var toSwitchId = "155";
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
	$("#anchor156")[0].click();
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
	$("#anchor157")[0].click();
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
 *   obj2194: Event Touch Down
 *
 */
$("#obj2194").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2194_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2194_onTap is still running");
	return;
}
var obj2194_onTap_runningActionsCount = 0;
var obj2194_onTap_loopCount = 0;
obj2194_onTap_actionGroup0();
});










/*
 *
 *   obj2196: Event Touch Down
 *
 */
$("#obj2196").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2196_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2196_onTap is still running");
	return;
}
var obj2196_onTap_runningActionsCount = 0;
var obj2196_onTap_loopCount = 0;
obj2196_onTap_actionGroup0();
});










/*
 *
 *   obj2198: Event Touch Down
 *
 */
$("#obj2198").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2198_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2198_onTap is still running");
	return;
}
var obj2198_onTap_runningActionsCount = 0;
var obj2198_onTap_loopCount = 0;
obj2198_onTap_actionGroup0();
});










/*
 *
 *   obj2200: Event Touch Down
 *
 */
$("#obj2200").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2200_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2200_onTap is still running");
	return;
}
var obj2200_onTap_runningActionsCount = 0;
var obj2200_onTap_loopCount = 0;
obj2200_onTap_actionGroup0();
});










/*
 *
 *   obj2202: Event Touch Down
 *
 */
$("#obj2202").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2202_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2202_onTap is still running");
	return;
}
var obj2202_onTap_runningActionsCount = 0;
var obj2202_onTap_loopCount = 0;
obj2202_onTap_actionGroup0();
});










/*
 *
 *   obj2204: Event Touch Down
 *
 */
$("#obj2204").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2204_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2204_onTap is still running");
	return;
}
var obj2204_onTap_runningActionsCount = 0;
var obj2204_onTap_loopCount = 0;
obj2204_onTap_actionGroup0();
});










/*
 *
 *   obj2206: Event Touch Down
 *
 */
$("#obj2206").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2206_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2206_onTap is still running");
	return;
}
var obj2206_onTap_runningActionsCount = 0;
var obj2206_onTap_loopCount = 0;
obj2206_onTap_actionGroup0();
});










/*
 *
 *   obj2208: Event Touch Down
 *
 */
$("#obj2208").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2208_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2208_onTap is still running");
	return;
}
var obj2208_onTap_runningActionsCount = 0;
var obj2208_onTap_loopCount = 0;
obj2208_onTap_actionGroup0();
});










/*
 *
 *   obj2210: Event Touch Down
 *
 */
$("#obj2210").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2210_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2210_onTap is still running");
	return;
}
var obj2210_onTap_runningActionsCount = 0;
var obj2210_onTap_loopCount = 0;
obj2210_onTap_actionGroup0();
});










/*
 *
 *   obj2212: Event Touch Down
 *
 */
$("#obj2212").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2212_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2212_onTap is still running");
	return;
}
var obj2212_onTap_runningActionsCount = 0;
var obj2212_onTap_loopCount = 0;
obj2212_onTap_actionGroup0();
});










/*
 *
 *   obj2214: Event Touch Down
 *
 */
$("#obj2214").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2214_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2214_onTap is still running");
	return;
}
var obj2214_onTap_runningActionsCount = 0;
var obj2214_onTap_loopCount = 0;
obj2214_onTap_actionGroup0();
});










/*
 *
 *   obj2216: Event Touch Down
 *
 */
$("#obj2216").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2216_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2216_onTap is still running");
	return;
}
var obj2216_onTap_runningActionsCount = 0;
var obj2216_onTap_loopCount = 0;
obj2216_onTap_actionGroup0();
});
































































































































































/*
 *
 *   obj2935: Event Touch Up
 *
 */
$("#obj2935").bind("touchdown touchmove", function(event) {
	event.preventDefault(); // prevent readers from starting a page swipe on this element
})
$("#obj2935").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj2935").unbind("obj2935_onTouchDown_ended", startActionList);
	    if (window.obj2935_onTouchUp_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2935_onTouchUp is still running");
	return;
}
var obj2935_onTouchUp_runningActionsCount = 0;
var obj2935_onTouchUp_loopCount = 0;
obj2935_onTouchUp_actionGroup0();
	};
	if ((window['obj2935_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj2935_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj2935").bind("obj2935_onTouchDown_ended", startActionList);
	}
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
	
$("#obj1530").trigger('SCEventShow');
$("#obj4486").trigger('SCEventShow');
$("#obj1778").trigger('SCEventShow');
$("#obj2194").trigger('SCEventShow');
$("#obj2196").trigger('SCEventShow');
$("#obj2198").trigger('SCEventShow');
$("#obj2200").trigger('SCEventShow');
$("#obj2202").trigger('SCEventShow');
$("#obj2204").trigger('SCEventShow');
$("#obj2206").trigger('SCEventShow');
$("#obj2208").trigger('SCEventShow');
$("#obj2210").trigger('SCEventShow');
$("#obj2212").trigger('SCEventShow');
$("#obj2214").trigger('SCEventShow');
$("#obj2216").trigger('SCEventShow');
$("#obj2449").trigger('SCEventShow');
$("#obj4149").trigger('SCEventShow');
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
  const header = elmnt.querySelector(".videoheader");
  if (header) {
    header.onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
    
});