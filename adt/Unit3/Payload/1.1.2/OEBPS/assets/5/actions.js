pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serophero - Unit 3";
pubcoder.page.id = pubcoder.page.id || 3805;
pubcoder.page.title = pubcoder.page.title || "5";
pubcoder.page.number = pubcoder.page.number || 5;
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
var obj9995_onTap_activeActionGroupIndex = -1;
var obj9995_onTap_runningActionsCount = 0;
var obj9995_onTap_loopCount = 0;
var obj9975_onTap_activeActionGroupIndex = -1;
var obj9975_onTap_runningActionsCount = 0;
var obj9975_onTap_loopCount = 0;
var obj9982_onTap_activeActionGroupIndex = -1;
var obj9982_onTap_runningActionsCount = 0;
var obj9982_onTap_loopCount = 0;
var obj9990_onTap_activeActionGroupIndex = -1;
var obj9990_onTap_runningActionsCount = 0;
var obj9990_onTap_loopCount = 0;
var obj10004_onTap_activeActionGroupIndex = -1;
var obj10004_onTap_runningActionsCount = 0;
var obj10004_onTap_loopCount = 0;
var obj5050_onTap_activeActionGroupIndex = -1;
var obj5050_onTap_runningActionsCount = 0;
var obj5050_onTap_loopCount = 0;
var obj9841_onTap_activeActionGroupIndex = -1;
var obj9841_onTap_runningActionsCount = 0;
var obj9841_onTap_loopCount = 0;
var obj10372_onTap_activeActionGroupIndex = -1;
var obj10372_onTap_runningActionsCount = 0;
var obj10372_onTap_loopCount = 0;
var obj10391_SCEventReadAloudStarted_activeActionGroupIndex = -1;
var obj10391_SCEventReadAloudStarted_runningActionsCount = 0;
var obj10391_SCEventReadAloudStarted_loopCount = 0;
var obj10391_SCEventReadAloudStopped_activeActionGroupIndex = -1;
var obj10391_SCEventReadAloudStopped_runningActionsCount = 0;
var obj10391_SCEventReadAloudStopped_loopCount = 0;
var obj10362_onTap_activeActionGroupIndex = -1;
var obj10362_onTap_runningActionsCount = 0;
var obj10362_onTap_loopCount = 0;
var obj10387_onTap_activeActionGroupIndex = -1;
var obj10387_onTap_runningActionsCount = 0;
var obj10387_onTap_loopCount = 0;
var obj10384_onTap_activeActionGroupIndex = -1;
var obj10384_onTap_runningActionsCount = 0;
var obj10384_onTap_loopCount = 0;
var obj10369_onTap_activeActionGroupIndex = -1;
var obj10369_onTap_runningActionsCount = 0;
var obj10369_onTap_loopCount = 0;
var obj10353_onTap_activeActionGroupIndex = -1;
var obj10353_onTap_runningActionsCount = 0;
var obj10353_onTap_loopCount = 0;
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
		
obj9995_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9995_onTap_activeActionGroupIndex = -1;
		$("#obj9995").trigger("obj9995_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9995) {
				console.warn("de-queueing event obj9995." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9995").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9995_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10000
(function(){
	window.obj9995_onTap_runningActionsCount = obj9995_onTap_runningActionsCount + 1;

	var selector = "#obj10000";
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
					window.obj9995_onTap_runningActionsCount = window.obj9995_onTap_runningActionsCount - 1;
if (window.obj9995_onTap_runningActionsCount < 0) {
	window.obj9995_onTap_runningActionsCount = 0;
} else if (window.obj9995_onTap_runningActionsCount == 0) {
	obj9995_onTap_actionGroup1();
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
				window.obj9995_onTap_runningActionsCount = window.obj9995_onTap_runningActionsCount - 1;
if (window.obj9995_onTap_runningActionsCount < 0) {
	window.obj9995_onTap_runningActionsCount = 0;
} else if (window.obj9995_onTap_runningActionsCount == 0) {
	obj9995_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9995_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9995_onTap_activeActionGroupIndex = -1;
		$("#obj9995").trigger("obj9995_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9995) {
				console.warn("de-queueing event obj9995." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9995").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9995_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10004 
hide_9998();
function hide_9998() {
	var selector = "#obj10004";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9995_onTap_runningActionsCount = obj9995_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9995_onTap_runningActionsCount = window.obj9995_onTap_runningActionsCount - 1;
if (window.obj9995_onTap_runningActionsCount < 0) {
	window.obj9995_onTap_runningActionsCount = 0;
} else if (window.obj9995_onTap_runningActionsCount == 0) {
	obj9995_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9998(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9995_onTap_runningActionsCount = window.obj9995_onTap_runningActionsCount - 1;
if (window.obj9995_onTap_runningActionsCount < 0) {
	window.obj9995_onTap_runningActionsCount = 0;
} else if (window.obj9995_onTap_runningActionsCount == 0) {
	obj9995_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9995_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9995_onTap_activeActionGroupIndex = -1;
		$("#obj9995").trigger("obj9995_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9995) {
				console.warn("de-queueing event obj9995." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9995").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9995_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9999();
function playAudioFile_9999() {
	window.obj9995_onTap_runningActionsCount = obj9995_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9999")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9999");
			$("#obj_audio_playSoundFile9999").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9995_onTap_runningActionsCount = window.obj9995_onTap_runningActionsCount - 1;
if (window.obj9995_onTap_runningActionsCount < 0) {
	window.obj9995_onTap_runningActionsCount = 0;
} else if (window.obj9995_onTap_runningActionsCount == 0) {
	obj9995_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9995_onTap_runningActionsCount = window.obj9995_onTap_runningActionsCount - 1;
if (window.obj9995_onTap_runningActionsCount < 0) {
	window.obj9995_onTap_runningActionsCount = 0;
} else if (window.obj9995_onTap_runningActionsCount == 0) {
	obj9995_onTap_actionGroup3();
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
				window.obj9995_onTap_runningActionsCount = window.obj9995_onTap_runningActionsCount - 1;
if (window.obj9995_onTap_runningActionsCount < 0) {
	window.obj9995_onTap_runningActionsCount = 0;
} else if (window.obj9995_onTap_runningActionsCount == 0) {
	obj9995_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9995_onTap_runningActionsCount = window.obj9995_onTap_runningActionsCount - 1;
if (window.obj9995_onTap_runningActionsCount < 0) {
	window.obj9995_onTap_runningActionsCount = 0;
} else if (window.obj9995_onTap_runningActionsCount == 0) {
	obj9995_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9995_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9995_onTap_activeActionGroupIndex = -1;
		$("#obj9995").trigger("obj9995_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9995) {
				console.warn("de-queueing event obj9995." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9995").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9995_onTap_activeActionGroupIndex = 3;
	






















};
obj9975_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9975_onTap_activeActionGroupIndex = -1;
		$("#obj9975").trigger("obj9975_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9975) {
				console.warn("de-queueing event obj9975." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9975").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9975_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj5046
(function(){
	window.obj9975_onTap_runningActionsCount = obj9975_onTap_runningActionsCount + 1;

	var selector = "#obj5046";
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
					window.obj9975_onTap_runningActionsCount = window.obj9975_onTap_runningActionsCount - 1;
if (window.obj9975_onTap_runningActionsCount < 0) {
	window.obj9975_onTap_runningActionsCount = 0;
} else if (window.obj9975_onTap_runningActionsCount == 0) {
	obj9975_onTap_actionGroup1();
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
				window.obj9975_onTap_runningActionsCount = window.obj9975_onTap_runningActionsCount - 1;
if (window.obj9975_onTap_runningActionsCount < 0) {
	window.obj9975_onTap_runningActionsCount = 0;
} else if (window.obj9975_onTap_runningActionsCount == 0) {
	obj9975_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9975_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9975_onTap_activeActionGroupIndex = -1;
		$("#obj9975").trigger("obj9975_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9975) {
				console.warn("de-queueing event obj9975." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9975").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9975_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj5050 
hide_9980();
function hide_9980() {
	var selector = "#obj5050";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9975_onTap_runningActionsCount = obj9975_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9975_onTap_runningActionsCount = window.obj9975_onTap_runningActionsCount - 1;
if (window.obj9975_onTap_runningActionsCount < 0) {
	window.obj9975_onTap_runningActionsCount = 0;
} else if (window.obj9975_onTap_runningActionsCount == 0) {
	obj9975_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9980(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9975_onTap_runningActionsCount = window.obj9975_onTap_runningActionsCount - 1;
if (window.obj9975_onTap_runningActionsCount < 0) {
	window.obj9975_onTap_runningActionsCount = 0;
} else if (window.obj9975_onTap_runningActionsCount == 0) {
	obj9975_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9975_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9975_onTap_activeActionGroupIndex = -1;
		$("#obj9975").trigger("obj9975_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9975) {
				console.warn("de-queueing event obj9975." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9975").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9975_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9981();
function playAudioFile_9981() {
	window.obj9975_onTap_runningActionsCount = obj9975_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9981")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9981");
			$("#obj_audio_playSoundFile9981").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9975_onTap_runningActionsCount = window.obj9975_onTap_runningActionsCount - 1;
if (window.obj9975_onTap_runningActionsCount < 0) {
	window.obj9975_onTap_runningActionsCount = 0;
} else if (window.obj9975_onTap_runningActionsCount == 0) {
	obj9975_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9975_onTap_runningActionsCount = window.obj9975_onTap_runningActionsCount - 1;
if (window.obj9975_onTap_runningActionsCount < 0) {
	window.obj9975_onTap_runningActionsCount = 0;
} else if (window.obj9975_onTap_runningActionsCount == 0) {
	obj9975_onTap_actionGroup3();
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
				window.obj9975_onTap_runningActionsCount = window.obj9975_onTap_runningActionsCount - 1;
if (window.obj9975_onTap_runningActionsCount < 0) {
	window.obj9975_onTap_runningActionsCount = 0;
} else if (window.obj9975_onTap_runningActionsCount == 0) {
	obj9975_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9975_onTap_runningActionsCount = window.obj9975_onTap_runningActionsCount - 1;
if (window.obj9975_onTap_runningActionsCount < 0) {
	window.obj9975_onTap_runningActionsCount = 0;
} else if (window.obj9975_onTap_runningActionsCount == 0) {
	obj9975_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9975_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9975_onTap_activeActionGroupIndex = -1;
		$("#obj9975").trigger("obj9975_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9975) {
				console.warn("de-queueing event obj9975." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9975").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9975_onTap_activeActionGroupIndex = 3;
	






















};
obj9982_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9982_onTap_activeActionGroupIndex = -1;
		$("#obj9982").trigger("obj9982_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9982) {
				console.warn("de-queueing event obj9982." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9982").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9982_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj5050
(function(){
	window.obj9982_onTap_runningActionsCount = obj9982_onTap_runningActionsCount + 1;

	var selector = "#obj5050";
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
					window.obj9982_onTap_runningActionsCount = window.obj9982_onTap_runningActionsCount - 1;
if (window.obj9982_onTap_runningActionsCount < 0) {
	window.obj9982_onTap_runningActionsCount = 0;
} else if (window.obj9982_onTap_runningActionsCount == 0) {
	obj9982_onTap_actionGroup1();
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
				window.obj9982_onTap_runningActionsCount = window.obj9982_onTap_runningActionsCount - 1;
if (window.obj9982_onTap_runningActionsCount < 0) {
	window.obj9982_onTap_runningActionsCount = 0;
} else if (window.obj9982_onTap_runningActionsCount == 0) {
	obj9982_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9982_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9982_onTap_activeActionGroupIndex = -1;
		$("#obj9982").trigger("obj9982_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9982) {
				console.warn("de-queueing event obj9982." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9982").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9982_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj5046 
hide_9988();
function hide_9988() {
	var selector = "#obj5046";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9982_onTap_runningActionsCount = obj9982_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9982_onTap_runningActionsCount = window.obj9982_onTap_runningActionsCount - 1;
if (window.obj9982_onTap_runningActionsCount < 0) {
	window.obj9982_onTap_runningActionsCount = 0;
} else if (window.obj9982_onTap_runningActionsCount == 0) {
	obj9982_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9988(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9982_onTap_runningActionsCount = window.obj9982_onTap_runningActionsCount - 1;
if (window.obj9982_onTap_runningActionsCount < 0) {
	window.obj9982_onTap_runningActionsCount = 0;
} else if (window.obj9982_onTap_runningActionsCount == 0) {
	obj9982_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9982_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9982_onTap_activeActionGroupIndex = -1;
		$("#obj9982").trigger("obj9982_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9982) {
				console.warn("de-queueing event obj9982." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9982").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9982_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9989();
function playAudioFile_9989() {
	window.obj9982_onTap_runningActionsCount = obj9982_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9989")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9989");
			$("#obj_audio_playSoundFile9989").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9982_onTap_runningActionsCount = window.obj9982_onTap_runningActionsCount - 1;
if (window.obj9982_onTap_runningActionsCount < 0) {
	window.obj9982_onTap_runningActionsCount = 0;
} else if (window.obj9982_onTap_runningActionsCount == 0) {
	obj9982_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9982_onTap_runningActionsCount = window.obj9982_onTap_runningActionsCount - 1;
if (window.obj9982_onTap_runningActionsCount < 0) {
	window.obj9982_onTap_runningActionsCount = 0;
} else if (window.obj9982_onTap_runningActionsCount == 0) {
	obj9982_onTap_actionGroup3();
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
				window.obj9982_onTap_runningActionsCount = window.obj9982_onTap_runningActionsCount - 1;
if (window.obj9982_onTap_runningActionsCount < 0) {
	window.obj9982_onTap_runningActionsCount = 0;
} else if (window.obj9982_onTap_runningActionsCount == 0) {
	obj9982_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9982_onTap_runningActionsCount = window.obj9982_onTap_runningActionsCount - 1;
if (window.obj9982_onTap_runningActionsCount < 0) {
	window.obj9982_onTap_runningActionsCount = 0;
} else if (window.obj9982_onTap_runningActionsCount == 0) {
	obj9982_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9982_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9982_onTap_activeActionGroupIndex = -1;
		$("#obj9982").trigger("obj9982_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9982) {
				console.warn("de-queueing event obj9982." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9982").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9982_onTap_activeActionGroupIndex = 3;
	






















};
obj9990_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9990_onTap_activeActionGroupIndex = -1;
		$("#obj9990").trigger("obj9990_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9990) {
				console.warn("de-queueing event obj9990." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9990").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9990_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10004
(function(){
	window.obj9990_onTap_runningActionsCount = obj9990_onTap_runningActionsCount + 1;

	var selector = "#obj10004";
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
					window.obj9990_onTap_runningActionsCount = window.obj9990_onTap_runningActionsCount - 1;
if (window.obj9990_onTap_runningActionsCount < 0) {
	window.obj9990_onTap_runningActionsCount = 0;
} else if (window.obj9990_onTap_runningActionsCount == 0) {
	obj9990_onTap_actionGroup1();
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
				window.obj9990_onTap_runningActionsCount = window.obj9990_onTap_runningActionsCount - 1;
if (window.obj9990_onTap_runningActionsCount < 0) {
	window.obj9990_onTap_runningActionsCount = 0;
} else if (window.obj9990_onTap_runningActionsCount == 0) {
	obj9990_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9990_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9990_onTap_activeActionGroupIndex = -1;
		$("#obj9990").trigger("obj9990_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9990) {
				console.warn("de-queueing event obj9990." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9990").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9990_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10000 
hide_9993();
function hide_9993() {
	var selector = "#obj10000";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9990_onTap_runningActionsCount = obj9990_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9990_onTap_runningActionsCount = window.obj9990_onTap_runningActionsCount - 1;
if (window.obj9990_onTap_runningActionsCount < 0) {
	window.obj9990_onTap_runningActionsCount = 0;
} else if (window.obj9990_onTap_runningActionsCount == 0) {
	obj9990_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9993(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9990_onTap_runningActionsCount = window.obj9990_onTap_runningActionsCount - 1;
if (window.obj9990_onTap_runningActionsCount < 0) {
	window.obj9990_onTap_runningActionsCount = 0;
} else if (window.obj9990_onTap_runningActionsCount == 0) {
	obj9990_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9990_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9990_onTap_activeActionGroupIndex = -1;
		$("#obj9990").trigger("obj9990_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9990) {
				console.warn("de-queueing event obj9990." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9990").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9990_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9994();
function playAudioFile_9994() {
	window.obj9990_onTap_runningActionsCount = obj9990_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9994")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9994");
			$("#obj_audio_playSoundFile9994").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9990_onTap_runningActionsCount = window.obj9990_onTap_runningActionsCount - 1;
if (window.obj9990_onTap_runningActionsCount < 0) {
	window.obj9990_onTap_runningActionsCount = 0;
} else if (window.obj9990_onTap_runningActionsCount == 0) {
	obj9990_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9990_onTap_runningActionsCount = window.obj9990_onTap_runningActionsCount - 1;
if (window.obj9990_onTap_runningActionsCount < 0) {
	window.obj9990_onTap_runningActionsCount = 0;
} else if (window.obj9990_onTap_runningActionsCount == 0) {
	obj9990_onTap_actionGroup3();
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
				window.obj9990_onTap_runningActionsCount = window.obj9990_onTap_runningActionsCount - 1;
if (window.obj9990_onTap_runningActionsCount < 0) {
	window.obj9990_onTap_runningActionsCount = 0;
} else if (window.obj9990_onTap_runningActionsCount == 0) {
	obj9990_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9990_onTap_runningActionsCount = window.obj9990_onTap_runningActionsCount - 1;
if (window.obj9990_onTap_runningActionsCount < 0) {
	window.obj9990_onTap_runningActionsCount = 0;
} else if (window.obj9990_onTap_runningActionsCount == 0) {
	obj9990_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9990_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9990_onTap_activeActionGroupIndex = -1;
		$("#obj9990").trigger("obj9990_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9990) {
				console.warn("de-queueing event obj9990." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9990").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9990_onTap_activeActionGroupIndex = 3;
	






















};
obj10004_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10004_onTap_activeActionGroupIndex = -1;
		$("#obj10004").trigger("obj10004_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10004) {
				console.warn("de-queueing event obj10004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10004_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj10004 
switchImage_10006();
function switchImage_10006() {
	window.obj10004_onTap_runningActionsCount = obj10004_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj10004";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj10004_img";
	var fromImagePath = "../images/obj10004_image.png";
	var toImagePath = "../images/obj10004_image.png";
	var switchHelperId = "switchHelper102"
	var switchHelperRef = "#switchHelper102"
	var switchId = "102";
	var toSwitchId = "102";
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
				window.obj10004_onTap_runningActionsCount = window.obj10004_onTap_runningActionsCount - 1;
if (window.obj10004_onTap_runningActionsCount < 0) {
	window.obj10004_onTap_runningActionsCount = 0;
} else if (window.obj10004_onTap_runningActionsCount == 0) {
	obj10004_onTap_actionGroup1();
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
obj10004_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10004_onTap_activeActionGroupIndex = -1;
		$("#obj10004").trigger("obj10004_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10004) {
				console.warn("de-queueing event obj10004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10004_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_10007();
function playAudioFile_10007() {
	window.obj10004_onTap_runningActionsCount = obj10004_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10007")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10007");
			$("#obj_audio_playSoundFile10007").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10004_onTap_runningActionsCount = window.obj10004_onTap_runningActionsCount - 1;
if (window.obj10004_onTap_runningActionsCount < 0) {
	window.obj10004_onTap_runningActionsCount = 0;
} else if (window.obj10004_onTap_runningActionsCount == 0) {
	obj10004_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10004_onTap_runningActionsCount = window.obj10004_onTap_runningActionsCount - 1;
if (window.obj10004_onTap_runningActionsCount < 0) {
	window.obj10004_onTap_runningActionsCount = 0;
} else if (window.obj10004_onTap_runningActionsCount == 0) {
	obj10004_onTap_actionGroup2();
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
				window.obj10004_onTap_runningActionsCount = window.obj10004_onTap_runningActionsCount - 1;
if (window.obj10004_onTap_runningActionsCount < 0) {
	window.obj10004_onTap_runningActionsCount = 0;
} else if (window.obj10004_onTap_runningActionsCount == 0) {
	obj10004_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj10004_onTap_runningActionsCount = window.obj10004_onTap_runningActionsCount - 1;
if (window.obj10004_onTap_runningActionsCount < 0) {
	window.obj10004_onTap_runningActionsCount = 0;
} else if (window.obj10004_onTap_runningActionsCount == 0) {
	obj10004_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj10004_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10004_onTap_activeActionGroupIndex = -1;
		$("#obj10004").trigger("obj10004_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10004) {
				console.warn("de-queueing event obj10004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10004_onTap_activeActionGroupIndex = 2;
	






















};
obj5050_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5050_onTap_activeActionGroupIndex = -1;
		$("#obj5050").trigger("obj5050_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5050) {
				console.warn("de-queueing event obj5050." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5050").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5050_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj5050 
switchImage_5052();
function switchImage_5052() {
	window.obj5050_onTap_runningActionsCount = obj5050_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj5050";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj5050_img";
	var fromImagePath = "../images/obj10004_image.png";
	var toImagePath = "../images/obj10004_image.png";
	var switchHelperId = "switchHelper104"
	var switchHelperRef = "#switchHelper104"
	var switchId = "104";
	var toSwitchId = "104";
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
				window.obj5050_onTap_runningActionsCount = window.obj5050_onTap_runningActionsCount - 1;
if (window.obj5050_onTap_runningActionsCount < 0) {
	window.obj5050_onTap_runningActionsCount = 0;
} else if (window.obj5050_onTap_runningActionsCount == 0) {
	obj5050_onTap_actionGroup1();
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
obj5050_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5050_onTap_activeActionGroupIndex = -1;
		$("#obj5050").trigger("obj5050_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5050) {
				console.warn("de-queueing event obj5050." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5050").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5050_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_5053();
function playAudioFile_5053() {
	window.obj5050_onTap_runningActionsCount = obj5050_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5053")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5053");
			$("#obj_audio_playSoundFile5053").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj5050_onTap_runningActionsCount = window.obj5050_onTap_runningActionsCount - 1;
if (window.obj5050_onTap_runningActionsCount < 0) {
	window.obj5050_onTap_runningActionsCount = 0;
} else if (window.obj5050_onTap_runningActionsCount == 0) {
	obj5050_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj5050_onTap_runningActionsCount = window.obj5050_onTap_runningActionsCount - 1;
if (window.obj5050_onTap_runningActionsCount < 0) {
	window.obj5050_onTap_runningActionsCount = 0;
} else if (window.obj5050_onTap_runningActionsCount == 0) {
	obj5050_onTap_actionGroup2();
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
				window.obj5050_onTap_runningActionsCount = window.obj5050_onTap_runningActionsCount - 1;
if (window.obj5050_onTap_runningActionsCount < 0) {
	window.obj5050_onTap_runningActionsCount = 0;
} else if (window.obj5050_onTap_runningActionsCount == 0) {
	obj5050_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj5050_onTap_runningActionsCount = window.obj5050_onTap_runningActionsCount - 1;
if (window.obj5050_onTap_runningActionsCount < 0) {
	window.obj5050_onTap_runningActionsCount = 0;
} else if (window.obj5050_onTap_runningActionsCount == 0) {
	obj5050_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj5050_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5050_onTap_activeActionGroupIndex = -1;
		$("#obj5050").trigger("obj5050_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5050) {
				console.warn("de-queueing event obj5050." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5050").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5050_onTap_activeActionGroupIndex = 2;
	






















};
obj9841_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9841_onTap_activeActionGroupIndex = -1;
		$("#obj9841").trigger("obj9841_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9841) {
				console.warn("de-queueing event obj9841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9841_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_9845();
function runjs_9845() {
	window.obj9841_onTap_runningActionsCount = obj9841_onTap_runningActionsCount + 1;

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
		window.obj9841_onTap_runningActionsCount = window.obj9841_onTap_runningActionsCount - 1;
if (window.obj9841_onTap_runningActionsCount < 0) {
	window.obj9841_onTap_runningActionsCount = 0;
} else if (window.obj9841_onTap_runningActionsCount == 0) {
	obj9841_onTap_actionGroup1();
}
	}, 1);
}







};
obj9841_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9841_onTap_activeActionGroupIndex = -1;
		$("#obj9841").trigger("obj9841_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9841) {
				console.warn("de-queueing event obj9841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9841_onTap_activeActionGroupIndex = 1;
	






















};
obj10372_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10372_onTap_activeActionGroupIndex = -1;
		$("#obj10372").trigger("obj10372_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10372) {
				console.warn("de-queueing event obj10372." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10372").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10372_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_10376();
function runjs_10376() {
	window.obj10372_onTap_runningActionsCount = obj10372_onTap_runningActionsCount + 1;

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
		window.obj10372_onTap_runningActionsCount = window.obj10372_onTap_runningActionsCount - 1;
if (window.obj10372_onTap_runningActionsCount < 0) {
	window.obj10372_onTap_runningActionsCount = 0;
} else if (window.obj10372_onTap_runningActionsCount == 0) {
	obj10372_onTap_actionGroup1();
}
	}, 1);
}







};
obj10372_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10372_onTap_activeActionGroupIndex = -1;
		$("#obj10372").trigger("obj10372_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10372) {
				console.warn("de-queueing event obj10372." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10372").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10372_onTap_activeActionGroupIndex = 1;
	






















};
obj10391_SCEventReadAloudStarted_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10391_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj10391").trigger("obj10391_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10391) {
				console.warn("de-queueing event obj10391." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10391").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10391_SCEventReadAloudStarted_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj10391 
switchImage_10395();
function switchImage_10395() {
	window.obj10391_SCEventReadAloudStarted_runningActionsCount = obj10391_SCEventReadAloudStarted_runningActionsCount + 1;

	var targetObjectId = "#obj10391";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj10391_img";
	var fromImagePath = "../images/obj10391_image.png";
	var toImagePath = "../images/switch69_to.png";
	var switchHelperId = "switchHelper106"
	var switchHelperRef = "#switchHelper106"
	var switchId = "106";
	var toSwitchId = "106";
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
				window.obj10391_SCEventReadAloudStarted_runningActionsCount = window.obj10391_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj10391_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj10391_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj10391_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj10391_SCEventReadAloudStarted_actionGroup1();
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
obj10391_SCEventReadAloudStarted_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10391_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj10391").trigger("obj10391_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10391) {
				console.warn("de-queueing event obj10391." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10391").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10391_SCEventReadAloudStarted_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_10396();
function runjs_10396() {
	window.obj10391_SCEventReadAloudStarted_runningActionsCount = obj10391_SCEventReadAloudStarted_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over Pressed');
}
	
	setTimeout(function() {
		window.obj10391_SCEventReadAloudStarted_runningActionsCount = window.obj10391_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj10391_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj10391_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj10391_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj10391_SCEventReadAloudStarted_actionGroup2();
}
	}, 1);
}







};
obj10391_SCEventReadAloudStarted_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10391_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj10391").trigger("obj10391_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10391) {
				console.warn("de-queueing event obj10391." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10391").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10391_SCEventReadAloudStarted_activeActionGroupIndex = 2;
	






















};
obj10391_SCEventReadAloudStopped_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10391_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj10391").trigger("obj10391_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10391) {
				console.warn("de-queueing event obj10391." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10391").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10391_SCEventReadAloudStopped_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj10391 
switchImage_10401();
function switchImage_10401() {
	window.obj10391_SCEventReadAloudStopped_runningActionsCount = obj10391_SCEventReadAloudStopped_runningActionsCount + 1;

	var targetObjectId = "#obj10391";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj10391_img";
	var fromImagePath = "../images/obj10391_image.png";
	var toImagePath = "../images/obj10391_image.png";
	var switchHelperId = "switchHelper107"
	var switchHelperRef = "#switchHelper107"
	var switchId = "107";
	var toSwitchId = "107";
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
				window.obj10391_SCEventReadAloudStopped_runningActionsCount = window.obj10391_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj10391_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj10391_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj10391_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj10391_SCEventReadAloudStopped_actionGroup1();
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
obj10391_SCEventReadAloudStopped_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10391_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj10391").trigger("obj10391_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10391) {
				console.warn("de-queueing event obj10391." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10391").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10391_SCEventReadAloudStopped_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_10402();
function runjs_10402() {
	window.obj10391_SCEventReadAloudStopped_runningActionsCount = obj10391_SCEventReadAloudStopped_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over');
}
	
	setTimeout(function() {
		window.obj10391_SCEventReadAloudStopped_runningActionsCount = window.obj10391_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj10391_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj10391_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj10391_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj10391_SCEventReadAloudStopped_actionGroup2();
}
	}, 1);
}







};
obj10391_SCEventReadAloudStopped_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10391_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj10391").trigger("obj10391_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10391) {
				console.warn("de-queueing event obj10391." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10391").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10391_SCEventReadAloudStopped_activeActionGroupIndex = 2;
	






















};
obj10362_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10362_onTap_activeActionGroupIndex = -1;
		$("#obj10362").trigger("obj10362_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10362) {
				console.warn("de-queueing event obj10362." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10362").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10362_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_10364();
function runjs_10364() {
	window.obj10362_onTap_runningActionsCount = obj10362_onTap_runningActionsCount + 1;

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
		window.obj10362_onTap_runningActionsCount = window.obj10362_onTap_runningActionsCount - 1;
if (window.obj10362_onTap_runningActionsCount < 0) {
	window.obj10362_onTap_runningActionsCount = 0;
} else if (window.obj10362_onTap_runningActionsCount == 0) {
	obj10362_onTap_actionGroup1();
}
	}, 1);
}







};
obj10362_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10362_onTap_activeActionGroupIndex = -1;
		$("#obj10362").trigger("obj10362_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10362) {
				console.warn("de-queueing event obj10362." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10362").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10362_onTap_activeActionGroupIndex = 1;
	






















};
obj10387_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10387_onTap_activeActionGroupIndex = -1;
		$("#obj10387").trigger("obj10387_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10387) {
				console.warn("de-queueing event obj10387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10387_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj10387 
switchImage_10389();
function switchImage_10389() {
	window.obj10387_onTap_runningActionsCount = obj10387_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj10387";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj10387_img";
	var fromImagePath = "../images/obj10387_image.png";
	var toImagePath = "../images/switch71_to.png";
	var switchHelperId = "switchHelper108"
	var switchHelperRef = "#switchHelper108"
	var switchId = "108";
	var toSwitchId = "108";
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
				window.obj10387_onTap_runningActionsCount = window.obj10387_onTap_runningActionsCount - 1;
if (window.obj10387_onTap_runningActionsCount < 0) {
	window.obj10387_onTap_runningActionsCount = 0;
} else if (window.obj10387_onTap_runningActionsCount == 0) {
	obj10387_onTap_actionGroup1();
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
obj10387_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10387_onTap_activeActionGroupIndex = -1;
		$("#obj10387").trigger("obj10387_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10387) {
				console.warn("de-queueing event obj10387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10387_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_10390();
function runjs_10390() {
	window.obj10387_onTap_runningActionsCount = obj10387_onTap_runningActionsCount + 1;

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
		window.obj10387_onTap_runningActionsCount = window.obj10387_onTap_runningActionsCount - 1;
if (window.obj10387_onTap_runningActionsCount < 0) {
	window.obj10387_onTap_runningActionsCount = 0;
} else if (window.obj10387_onTap_runningActionsCount == 0) {
	obj10387_onTap_actionGroup2();
}
	}, 1);
}







};
obj10387_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10387_onTap_activeActionGroupIndex = -1;
		$("#obj10387").trigger("obj10387_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10387) {
				console.warn("de-queueing event obj10387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10387_onTap_activeActionGroupIndex = 2;
	






















};
obj10384_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10384_onTap_activeActionGroupIndex = -1;
		$("#obj10384").trigger("obj10384_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10384) {
				console.warn("de-queueing event obj10384." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10384").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10384_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_10386();
function goToPage_10386() {
	window.obj10384_onTap_runningActionsCount = obj10384_onTap_runningActionsCount + 1;
	$("#anchor109")[0].click();
	window.obj10384_onTap_runningActionsCount = window.obj10384_onTap_runningActionsCount - 1;
if (window.obj10384_onTap_runningActionsCount < 0) {
	window.obj10384_onTap_runningActionsCount = 0;
} else if (window.obj10384_onTap_runningActionsCount == 0) {
	obj10384_onTap_actionGroup1();
}
}





















};
obj10384_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10384_onTap_activeActionGroupIndex = -1;
		$("#obj10384").trigger("obj10384_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10384) {
				console.warn("de-queueing event obj10384." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10384").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10384_onTap_activeActionGroupIndex = 1;
	






















};
obj10369_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10369_onTap_activeActionGroupIndex = -1;
		$("#obj10369").trigger("obj10369_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10369) {
				console.warn("de-queueing event obj10369." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10369").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10369_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_10371();
function goToPage_10371() {
	window.obj10369_onTap_runningActionsCount = obj10369_onTap_runningActionsCount + 1;
	$("#anchor110")[0].click();
	window.obj10369_onTap_runningActionsCount = window.obj10369_onTap_runningActionsCount - 1;
if (window.obj10369_onTap_runningActionsCount < 0) {
	window.obj10369_onTap_runningActionsCount = 0;
} else if (window.obj10369_onTap_runningActionsCount == 0) {
	obj10369_onTap_actionGroup1();
}
}





















};
obj10369_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10369_onTap_activeActionGroupIndex = -1;
		$("#obj10369").trigger("obj10369_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10369) {
				console.warn("de-queueing event obj10369." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10369").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10369_onTap_activeActionGroupIndex = 1;
	






















};
obj10353_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10353_onTap_activeActionGroupIndex = -1;
		$("#obj10353").trigger("obj10353_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10353) {
				console.warn("de-queueing event obj10353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10353_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_10356();
function runjs_10356() {
	window.obj10353_onTap_runningActionsCount = obj10353_onTap_runningActionsCount + 1;

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
		window.obj10353_onTap_runningActionsCount = window.obj10353_onTap_runningActionsCount - 1;
if (window.obj10353_onTap_runningActionsCount < 0) {
	window.obj10353_onTap_runningActionsCount = 0;
} else if (window.obj10353_onTap_runningActionsCount == 0) {
	obj10353_onTap_actionGroup1();
}
	}, 1);
}







};
obj10353_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10353_onTap_activeActionGroupIndex = -1;
		$("#obj10353").trigger("obj10353_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10353) {
				console.warn("de-queueing event obj10353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10353_onTap_activeActionGroupIndex = 1;
	






















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		







































































































/*
 *
 *   obj9995: Event Touch Down
 *
 */
$("#obj9995").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9995_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9995_onTap is still running");
	return;
}
var obj9995_onTap_runningActionsCount = 0;
var obj9995_onTap_loopCount = 0;
obj9995_onTap_actionGroup0();
});










/*
 *
 *   obj9975: Event Touch Down
 *
 */
$("#obj9975").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9975_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9975_onTap is still running");
	return;
}
var obj9975_onTap_runningActionsCount = 0;
var obj9975_onTap_loopCount = 0;
obj9975_onTap_actionGroup0();
});










/*
 *
 *   obj9982: Event Touch Down
 *
 */
$("#obj9982").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9982_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9982_onTap is still running");
	return;
}
var obj9982_onTap_runningActionsCount = 0;
var obj9982_onTap_loopCount = 0;
obj9982_onTap_actionGroup0();
});




















/*
 *
 *   obj9990: Event Touch Down
 *
 */
$("#obj9990").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9990_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9990_onTap is still running");
	return;
}
var obj9990_onTap_runningActionsCount = 0;
var obj9990_onTap_loopCount = 0;
obj9990_onTap_actionGroup0();
});










/*
 *
 *   obj10004: Event Touch Down
 *
 */
$("#obj10004").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10004_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10004_onTap is still running");
	return;
}
var obj10004_onTap_runningActionsCount = 0;
var obj10004_onTap_loopCount = 0;
obj10004_onTap_actionGroup0();
});




















/*
 *
 *   obj5050: Event Touch Down
 *
 */
$("#obj5050").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj5050_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5050_onTap is still running");
	return;
}
var obj5050_onTap_runningActionsCount = 0;
var obj5050_onTap_loopCount = 0;
obj5050_onTap_actionGroup0();
});




















/*
 *
 *   obj9841: Event Touch Down
 *
 */
$("#obj9841").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9841_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9841_onTap is still running");
	return;
}
var obj9841_onTap_runningActionsCount = 0;
var obj9841_onTap_loopCount = 0;
obj9841_onTap_actionGroup0();
});


















































/*
 *
 *   obj10372: Event Touch Down
 *
 */
$("#obj10372").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10372_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10372_onTap is still running");
	return;
}
var obj10372_onTap_runningActionsCount = 0;
var obj10372_onTap_loopCount = 0;
obj10372_onTap_actionGroup0();
});
























/*
 *
 *   obj10391: Event SCEventReadAloudStarted
 *
 */
$("#obj10391").bind("SCEventReadAloudStarted", function(event) {
	if (window.obj10391_SCEventReadAloudStarted_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10391_SCEventReadAloudStarted is still running");
	return;
}
var obj10391_SCEventReadAloudStarted_runningActionsCount = 0;
var obj10391_SCEventReadAloudStarted_loopCount = 0;
obj10391_SCEventReadAloudStarted_actionGroup0();
});
/*
 *
 *   obj10391: Event SCEventReadAloudStopped
 *
 */
$("#obj10391").bind("SCEventReadAloudStopped", function(event) {
	if (window.obj10391_SCEventReadAloudStopped_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10391_SCEventReadAloudStopped is still running");
	return;
}
var obj10391_SCEventReadAloudStopped_runningActionsCount = 0;
var obj10391_SCEventReadAloudStopped_loopCount = 0;
obj10391_SCEventReadAloudStopped_actionGroup0();
});





/*
 *
 *   obj10362: Event Touch Down
 *
 */
$("#obj10362").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10362_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10362_onTap is still running");
	return;
}
var obj10362_onTap_runningActionsCount = 0;
var obj10362_onTap_loopCount = 0;
obj10362_onTap_actionGroup0();
});










/*
 *
 *   obj10387: Event Touch Down
 *
 */
$("#obj10387").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10387_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10387_onTap is still running");
	return;
}
var obj10387_onTap_runningActionsCount = 0;
var obj10387_onTap_loopCount = 0;
obj10387_onTap_actionGroup0();
});










/*
 *
 *   obj10384: Event Touch Down
 *
 */
$("#obj10384").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10384_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10384_onTap is still running");
	return;
}
var obj10384_onTap_runningActionsCount = 0;
var obj10384_onTap_loopCount = 0;
obj10384_onTap_actionGroup0();
});










/*
 *
 *   obj10369: Event Touch Down
 *
 */
$("#obj10369").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10369_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10369_onTap is still running");
	return;
}
var obj10369_onTap_runningActionsCount = 0;
var obj10369_onTap_loopCount = 0;
obj10369_onTap_actionGroup0();
});










/*
 *
 *   obj10353: Event Touch Down
 *
 */
$("#obj10353").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10353_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10353_onTap is still running");
	return;
}
var obj10353_onTap_runningActionsCount = 0;
var obj10353_onTap_loopCount = 0;
obj10353_onTap_actionGroup0();
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
	
$("#obj3883").trigger('SCEventShow');
$("#obj4097").trigger('SCEventShow');
$("#obj4129").trigger('SCEventShow');
$("#obj4135").trigger('SCEventShow');
$("#obj4131").trigger('SCEventShow');
$("#obj4133").trigger('SCEventShow');
$("#obj4369").trigger('SCEventShow');
$("#obj4371").trigger('SCEventShow');
$("#obj9995").trigger('SCEventShow');
$("#obj9975").trigger('SCEventShow');
$("#obj9982").trigger('SCEventShow');
$("#obj9990").trigger('SCEventShow');
$("#obj4670").trigger('SCEventShow');
$("#obj9841").trigger('SCEventShow');
$("#obj4766").trigger('SCEventShow');
$("#obj9977").trigger('SCEventShow');
$("#obj10391").trigger('SCEventShow');
$("#obj10362").trigger('SCEventShow');
$("#obj10384").trigger('SCEventShow');
$("#obj10369").trigger('SCEventShow');
$("#obj10353").trigger('SCEventShow');
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