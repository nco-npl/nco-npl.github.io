pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serofero - Unit 6";
pubcoder.page.id = pubcoder.page.id || 3805;
pubcoder.page.title = pubcoder.page.title || "13";
pubcoder.page.number = pubcoder.page.number || 13;
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
var obj4425_onTap_activeActionGroupIndex = -1;
var obj4425_onTap_runningActionsCount = 0;
var obj4425_onTap_loopCount = 0;
var obj4423_onTap_activeActionGroupIndex = -1;
var obj4423_onTap_runningActionsCount = 0;
var obj4423_onTap_loopCount = 0;
var obj4421_onTap_activeActionGroupIndex = -1;
var obj4421_onTap_runningActionsCount = 0;
var obj4421_onTap_loopCount = 0;
var obj4429_onTap_activeActionGroupIndex = -1;
var obj4429_onTap_runningActionsCount = 0;
var obj4429_onTap_loopCount = 0;
var obj4427_onTap_activeActionGroupIndex = -1;
var obj4427_onTap_runningActionsCount = 0;
var obj4427_onTap_loopCount = 0;
var obj4417_onTap_activeActionGroupIndex = -1;
var obj4417_onTap_runningActionsCount = 0;
var obj4417_onTap_loopCount = 0;
var obj4413_onTap_activeActionGroupIndex = -1;
var obj4413_onTap_runningActionsCount = 0;
var obj4413_onTap_loopCount = 0;
var obj4415_onTap_activeActionGroupIndex = -1;
var obj4415_onTap_runningActionsCount = 0;
var obj4415_onTap_loopCount = 0;
var obj4419_onTap_activeActionGroupIndex = -1;
var obj4419_onTap_runningActionsCount = 0;
var obj4419_onTap_loopCount = 0;
var obj4411_onTap_activeActionGroupIndex = -1;
var obj4411_onTap_runningActionsCount = 0;
var obj4411_onTap_loopCount = 0;
var obj4403_onTap_activeActionGroupIndex = -1;
var obj4403_onTap_runningActionsCount = 0;
var obj4403_onTap_loopCount = 0;
var obj4409_onTap_activeActionGroupIndex = -1;
var obj4409_onTap_runningActionsCount = 0;
var obj4409_onTap_loopCount = 0;
var obj4401_onTap_activeActionGroupIndex = -1;
var obj4401_onTap_runningActionsCount = 0;
var obj4401_onTap_loopCount = 0;
var obj4407_onTap_activeActionGroupIndex = -1;
var obj4407_onTap_runningActionsCount = 0;
var obj4407_onTap_loopCount = 0;
var obj14034_onTap_activeActionGroupIndex = -1;
var obj14034_onTap_runningActionsCount = 0;
var obj14034_onTap_loopCount = 0;
var obj14053_SCEventReadAloudStarted_activeActionGroupIndex = -1;
var obj14053_SCEventReadAloudStarted_runningActionsCount = 0;
var obj14053_SCEventReadAloudStarted_loopCount = 0;
var obj14053_SCEventReadAloudStopped_activeActionGroupIndex = -1;
var obj14053_SCEventReadAloudStopped_runningActionsCount = 0;
var obj14053_SCEventReadAloudStopped_loopCount = 0;
var obj14024_onTap_activeActionGroupIndex = -1;
var obj14024_onTap_runningActionsCount = 0;
var obj14024_onTap_loopCount = 0;
var obj14049_onTap_activeActionGroupIndex = -1;
var obj14049_onTap_runningActionsCount = 0;
var obj14049_onTap_loopCount = 0;
var obj14046_onTap_activeActionGroupIndex = -1;
var obj14046_onTap_runningActionsCount = 0;
var obj14046_onTap_loopCount = 0;
var obj14031_onTap_activeActionGroupIndex = -1;
var obj14031_onTap_runningActionsCount = 0;
var obj14031_onTap_loopCount = 0;
var obj14015_onTap_activeActionGroupIndex = -1;
var obj14015_onTap_runningActionsCount = 0;
var obj14015_onTap_loopCount = 0;
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
		
obj4425_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4425_onTap_activeActionGroupIndex = -1;
		$("#obj4425").trigger("obj4425_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4425) {
				console.warn("de-queueing event obj4425." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4425").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4425_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_14119();
function runjs_14119() {
	window.obj4425_onTap_runningActionsCount = obj4425_onTap_runningActionsCount + 1;

	$("#obj4425").css("border-color", "#692F04"); $("#obj4425").css("border-width", "2px"); $("#obj4425").css("border-style", "solid"); $("#obj4425").css("border-radius", "100px"); $("#obj4425").css("-webkit-border-radius", "100px"); $("#obj4425").css("-moz-border-radius", "100px"); $("#obj4425_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj4425_onTap_runningActionsCount = window.obj4425_onTap_runningActionsCount - 1;
if (window.obj4425_onTap_runningActionsCount < 0) {
	window.obj4425_onTap_runningActionsCount = 0;
} else if (window.obj4425_onTap_runningActionsCount == 0) {
	obj4425_onTap_actionGroup1();
}
	}, 1);
}







};
obj4425_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4425_onTap_activeActionGroupIndex = -1;
		$("#obj4425").trigger("obj4425_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4425) {
				console.warn("de-queueing event obj4425." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4425").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4425_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj14076
(function(){
	window.obj4425_onTap_runningActionsCount = obj4425_onTap_runningActionsCount + 1;

	var selector = "#obj14076";
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
					window.obj4425_onTap_runningActionsCount = window.obj4425_onTap_runningActionsCount - 1;
if (window.obj4425_onTap_runningActionsCount < 0) {
	window.obj4425_onTap_runningActionsCount = 0;
} else if (window.obj4425_onTap_runningActionsCount == 0) {
	obj4425_onTap_actionGroup2();
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
				window.obj4425_onTap_runningActionsCount = window.obj4425_onTap_runningActionsCount - 1;
if (window.obj4425_onTap_runningActionsCount < 0) {
	window.obj4425_onTap_runningActionsCount = 0;
} else if (window.obj4425_onTap_runningActionsCount == 0) {
	obj4425_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4425_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4425_onTap_activeActionGroupIndex = -1;
		$("#obj4425").trigger("obj4425_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4425) {
				console.warn("de-queueing event obj4425." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4425").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4425_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_14121();
function playAudioFile_14121() {
	window.obj4425_onTap_runningActionsCount = obj4425_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile14121")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14121");
			$("#obj_audio_playSoundFile14121").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4425_onTap_runningActionsCount = window.obj4425_onTap_runningActionsCount - 1;
if (window.obj4425_onTap_runningActionsCount < 0) {
	window.obj4425_onTap_runningActionsCount = 0;
} else if (window.obj4425_onTap_runningActionsCount == 0) {
	obj4425_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4425_onTap_runningActionsCount = window.obj4425_onTap_runningActionsCount - 1;
if (window.obj4425_onTap_runningActionsCount < 0) {
	window.obj4425_onTap_runningActionsCount = 0;
} else if (window.obj4425_onTap_runningActionsCount == 0) {
	obj4425_onTap_actionGroup3();
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
				window.obj4425_onTap_runningActionsCount = window.obj4425_onTap_runningActionsCount - 1;
if (window.obj4425_onTap_runningActionsCount < 0) {
	window.obj4425_onTap_runningActionsCount = 0;
} else if (window.obj4425_onTap_runningActionsCount == 0) {
	obj4425_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4425_onTap_runningActionsCount = window.obj4425_onTap_runningActionsCount - 1;
if (window.obj4425_onTap_runningActionsCount < 0) {
	window.obj4425_onTap_runningActionsCount = 0;
} else if (window.obj4425_onTap_runningActionsCount == 0) {
	obj4425_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj4425_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4425_onTap_activeActionGroupIndex = -1;
		$("#obj4425").trigger("obj4425_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4425) {
				console.warn("de-queueing event obj4425." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4425").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4425_onTap_activeActionGroupIndex = 3;
	






















};
obj4423_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4423_onTap_activeActionGroupIndex = -1;
		$("#obj4423").trigger("obj4423_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4423) {
				console.warn("de-queueing event obj4423." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4423").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4423_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_14122();
function runjs_14122() {
	window.obj4423_onTap_runningActionsCount = obj4423_onTap_runningActionsCount + 1;

	$("#obj4423").css("border-color", "#692F04"); $("#obj4423").css("border-width", "2px"); $("#obj4423").css("border-style", "solid"); $("#obj4423").css("border-radius", "100px"); $("#obj4423").css("-webkit-border-radius", "100px"); $("#obj4423").css("-moz-border-radius", "100px"); $("#obj4423_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj4423_onTap_runningActionsCount = window.obj4423_onTap_runningActionsCount - 1;
if (window.obj4423_onTap_runningActionsCount < 0) {
	window.obj4423_onTap_runningActionsCount = 0;
} else if (window.obj4423_onTap_runningActionsCount == 0) {
	obj4423_onTap_actionGroup1();
}
	}, 1);
}







};
obj4423_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4423_onTap_activeActionGroupIndex = -1;
		$("#obj4423").trigger("obj4423_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4423) {
				console.warn("de-queueing event obj4423." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4423").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4423_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj14074
(function(){
	window.obj4423_onTap_runningActionsCount = obj4423_onTap_runningActionsCount + 1;

	var selector = "#obj14074";
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
					window.obj4423_onTap_runningActionsCount = window.obj4423_onTap_runningActionsCount - 1;
if (window.obj4423_onTap_runningActionsCount < 0) {
	window.obj4423_onTap_runningActionsCount = 0;
} else if (window.obj4423_onTap_runningActionsCount == 0) {
	obj4423_onTap_actionGroup2();
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
				window.obj4423_onTap_runningActionsCount = window.obj4423_onTap_runningActionsCount - 1;
if (window.obj4423_onTap_runningActionsCount < 0) {
	window.obj4423_onTap_runningActionsCount = 0;
} else if (window.obj4423_onTap_runningActionsCount == 0) {
	obj4423_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4423_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4423_onTap_activeActionGroupIndex = -1;
		$("#obj4423").trigger("obj4423_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4423) {
				console.warn("de-queueing event obj4423." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4423").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4423_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_14124();
function playAudioFile_14124() {
	window.obj4423_onTap_runningActionsCount = obj4423_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile14124")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14124");
			$("#obj_audio_playSoundFile14124").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4423_onTap_runningActionsCount = window.obj4423_onTap_runningActionsCount - 1;
if (window.obj4423_onTap_runningActionsCount < 0) {
	window.obj4423_onTap_runningActionsCount = 0;
} else if (window.obj4423_onTap_runningActionsCount == 0) {
	obj4423_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4423_onTap_runningActionsCount = window.obj4423_onTap_runningActionsCount - 1;
if (window.obj4423_onTap_runningActionsCount < 0) {
	window.obj4423_onTap_runningActionsCount = 0;
} else if (window.obj4423_onTap_runningActionsCount == 0) {
	obj4423_onTap_actionGroup3();
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
				window.obj4423_onTap_runningActionsCount = window.obj4423_onTap_runningActionsCount - 1;
if (window.obj4423_onTap_runningActionsCount < 0) {
	window.obj4423_onTap_runningActionsCount = 0;
} else if (window.obj4423_onTap_runningActionsCount == 0) {
	obj4423_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4423_onTap_runningActionsCount = window.obj4423_onTap_runningActionsCount - 1;
if (window.obj4423_onTap_runningActionsCount < 0) {
	window.obj4423_onTap_runningActionsCount = 0;
} else if (window.obj4423_onTap_runningActionsCount == 0) {
	obj4423_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj4423_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4423_onTap_activeActionGroupIndex = -1;
		$("#obj4423").trigger("obj4423_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4423) {
				console.warn("de-queueing event obj4423." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4423").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4423_onTap_activeActionGroupIndex = 3;
	






















};
obj4421_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4421_onTap_activeActionGroupIndex = -1;
		$("#obj4421").trigger("obj4421_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4421) {
				console.warn("de-queueing event obj4421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4421_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_14107();
function runjs_14107() {
	window.obj4421_onTap_runningActionsCount = obj4421_onTap_runningActionsCount + 1;

	$("#obj4421").css("border-color", "#692F04"); $("#obj4421").css("border-width", "2px"); $("#obj4421").css("border-style", "solid"); $("#obj4421").css("border-radius", "100px"); $("#obj4421").css("-webkit-border-radius", "100px"); $("#obj4421").css("-moz-border-radius", "100px"); $("#obj4421_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj4421_onTap_runningActionsCount = window.obj4421_onTap_runningActionsCount - 1;
if (window.obj4421_onTap_runningActionsCount < 0) {
	window.obj4421_onTap_runningActionsCount = 0;
} else if (window.obj4421_onTap_runningActionsCount == 0) {
	obj4421_onTap_actionGroup1();
}
	}, 1);
}







};
obj4421_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4421_onTap_activeActionGroupIndex = -1;
		$("#obj4421").trigger("obj4421_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4421) {
				console.warn("de-queueing event obj4421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4421_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj14090
(function(){
	window.obj4421_onTap_runningActionsCount = obj4421_onTap_runningActionsCount + 1;

	var selector = "#obj14090";
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
					window.obj4421_onTap_runningActionsCount = window.obj4421_onTap_runningActionsCount - 1;
if (window.obj4421_onTap_runningActionsCount < 0) {
	window.obj4421_onTap_runningActionsCount = 0;
} else if (window.obj4421_onTap_runningActionsCount == 0) {
	obj4421_onTap_actionGroup2();
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
				window.obj4421_onTap_runningActionsCount = window.obj4421_onTap_runningActionsCount - 1;
if (window.obj4421_onTap_runningActionsCount < 0) {
	window.obj4421_onTap_runningActionsCount = 0;
} else if (window.obj4421_onTap_runningActionsCount == 0) {
	obj4421_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4421_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4421_onTap_activeActionGroupIndex = -1;
		$("#obj4421").trigger("obj4421_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4421) {
				console.warn("de-queueing event obj4421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4421_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_14109();
function playAudioFile_14109() {
	window.obj4421_onTap_runningActionsCount = obj4421_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile14109")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14109");
			$("#obj_audio_playSoundFile14109").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4421_onTap_runningActionsCount = window.obj4421_onTap_runningActionsCount - 1;
if (window.obj4421_onTap_runningActionsCount < 0) {
	window.obj4421_onTap_runningActionsCount = 0;
} else if (window.obj4421_onTap_runningActionsCount == 0) {
	obj4421_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4421_onTap_runningActionsCount = window.obj4421_onTap_runningActionsCount - 1;
if (window.obj4421_onTap_runningActionsCount < 0) {
	window.obj4421_onTap_runningActionsCount = 0;
} else if (window.obj4421_onTap_runningActionsCount == 0) {
	obj4421_onTap_actionGroup3();
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
				window.obj4421_onTap_runningActionsCount = window.obj4421_onTap_runningActionsCount - 1;
if (window.obj4421_onTap_runningActionsCount < 0) {
	window.obj4421_onTap_runningActionsCount = 0;
} else if (window.obj4421_onTap_runningActionsCount == 0) {
	obj4421_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4421_onTap_runningActionsCount = window.obj4421_onTap_runningActionsCount - 1;
if (window.obj4421_onTap_runningActionsCount < 0) {
	window.obj4421_onTap_runningActionsCount = 0;
} else if (window.obj4421_onTap_runningActionsCount == 0) {
	obj4421_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj4421_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4421_onTap_activeActionGroupIndex = -1;
		$("#obj4421").trigger("obj4421_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4421) {
				console.warn("de-queueing event obj4421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4421_onTap_activeActionGroupIndex = 3;
	






















};
obj4429_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4429_onTap_activeActionGroupIndex = -1;
		$("#obj4429").trigger("obj4429_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4429) {
				console.warn("de-queueing event obj4429." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4429").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4429_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_14065();
function runjs_14065() {
	window.obj4429_onTap_runningActionsCount = obj4429_onTap_runningActionsCount + 1;

	$("#obj4429").css("border-color", "#692F04"); $("#obj4429").css("border-width", "2px"); $("#obj4429").css("border-style", "solid"); $("#obj4429").css("border-radius", "100px"); $("#obj4429").css("-webkit-border-radius", "100px"); $("#obj4429").css("-moz-border-radius", "100px"); $("#obj4429_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj4429_onTap_runningActionsCount = window.obj4429_onTap_runningActionsCount - 1;
if (window.obj4429_onTap_runningActionsCount < 0) {
	window.obj4429_onTap_runningActionsCount = 0;
} else if (window.obj4429_onTap_runningActionsCount == 0) {
	obj4429_onTap_actionGroup1();
}
	}, 1);
}







};
obj4429_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4429_onTap_activeActionGroupIndex = -1;
		$("#obj4429").trigger("obj4429_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4429) {
				console.warn("de-queueing event obj4429." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4429").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4429_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj14068
(function(){
	window.obj4429_onTap_runningActionsCount = obj4429_onTap_runningActionsCount + 1;

	var selector = "#obj14068";
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
					window.obj4429_onTap_runningActionsCount = window.obj4429_onTap_runningActionsCount - 1;
if (window.obj4429_onTap_runningActionsCount < 0) {
	window.obj4429_onTap_runningActionsCount = 0;
} else if (window.obj4429_onTap_runningActionsCount == 0) {
	obj4429_onTap_actionGroup2();
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
				window.obj4429_onTap_runningActionsCount = window.obj4429_onTap_runningActionsCount - 1;
if (window.obj4429_onTap_runningActionsCount < 0) {
	window.obj4429_onTap_runningActionsCount = 0;
} else if (window.obj4429_onTap_runningActionsCount == 0) {
	obj4429_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4429_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4429_onTap_activeActionGroupIndex = -1;
		$("#obj4429").trigger("obj4429_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4429) {
				console.warn("de-queueing event obj4429." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4429").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4429_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_14106();
function playAudioFile_14106() {
	window.obj4429_onTap_runningActionsCount = obj4429_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile14106")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14106");
			$("#obj_audio_playSoundFile14106").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4429_onTap_runningActionsCount = window.obj4429_onTap_runningActionsCount - 1;
if (window.obj4429_onTap_runningActionsCount < 0) {
	window.obj4429_onTap_runningActionsCount = 0;
} else if (window.obj4429_onTap_runningActionsCount == 0) {
	obj4429_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4429_onTap_runningActionsCount = window.obj4429_onTap_runningActionsCount - 1;
if (window.obj4429_onTap_runningActionsCount < 0) {
	window.obj4429_onTap_runningActionsCount = 0;
} else if (window.obj4429_onTap_runningActionsCount == 0) {
	obj4429_onTap_actionGroup3();
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
				window.obj4429_onTap_runningActionsCount = window.obj4429_onTap_runningActionsCount - 1;
if (window.obj4429_onTap_runningActionsCount < 0) {
	window.obj4429_onTap_runningActionsCount = 0;
} else if (window.obj4429_onTap_runningActionsCount == 0) {
	obj4429_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4429_onTap_runningActionsCount = window.obj4429_onTap_runningActionsCount - 1;
if (window.obj4429_onTap_runningActionsCount < 0) {
	window.obj4429_onTap_runningActionsCount = 0;
} else if (window.obj4429_onTap_runningActionsCount == 0) {
	obj4429_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj4429_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4429_onTap_activeActionGroupIndex = -1;
		$("#obj4429").trigger("obj4429_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4429) {
				console.warn("de-queueing event obj4429." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4429").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4429_onTap_activeActionGroupIndex = 3;
	






















};
obj4427_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4427_onTap_activeActionGroupIndex = -1;
		$("#obj4427").trigger("obj4427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4427) {
				console.warn("de-queueing event obj4427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4427_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_14116();
function runjs_14116() {
	window.obj4427_onTap_runningActionsCount = obj4427_onTap_runningActionsCount + 1;

	$("#obj4427").css("border-color", "#692F04"); $("#obj4427").css("border-width", "2px"); $("#obj4427").css("border-style", "solid"); $("#obj4427").css("border-radius", "100px"); $("#obj4427").css("-webkit-border-radius", "100px"); $("#obj4427").css("-moz-border-radius", "100px"); $("#obj4427_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj4427_onTap_runningActionsCount = window.obj4427_onTap_runningActionsCount - 1;
if (window.obj4427_onTap_runningActionsCount < 0) {
	window.obj4427_onTap_runningActionsCount = 0;
} else if (window.obj4427_onTap_runningActionsCount == 0) {
	obj4427_onTap_actionGroup1();
}
	}, 1);
}







};
obj4427_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4427_onTap_activeActionGroupIndex = -1;
		$("#obj4427").trigger("obj4427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4427) {
				console.warn("de-queueing event obj4427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4427_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj14084
(function(){
	window.obj4427_onTap_runningActionsCount = obj4427_onTap_runningActionsCount + 1;

	var selector = "#obj14084";
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
					window.obj4427_onTap_runningActionsCount = window.obj4427_onTap_runningActionsCount - 1;
if (window.obj4427_onTap_runningActionsCount < 0) {
	window.obj4427_onTap_runningActionsCount = 0;
} else if (window.obj4427_onTap_runningActionsCount == 0) {
	obj4427_onTap_actionGroup2();
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
				window.obj4427_onTap_runningActionsCount = window.obj4427_onTap_runningActionsCount - 1;
if (window.obj4427_onTap_runningActionsCount < 0) {
	window.obj4427_onTap_runningActionsCount = 0;
} else if (window.obj4427_onTap_runningActionsCount == 0) {
	obj4427_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4427_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4427_onTap_activeActionGroupIndex = -1;
		$("#obj4427").trigger("obj4427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4427) {
				console.warn("de-queueing event obj4427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4427_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_14118();
function playAudioFile_14118() {
	window.obj4427_onTap_runningActionsCount = obj4427_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile14118")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14118");
			$("#obj_audio_playSoundFile14118").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4427_onTap_runningActionsCount = window.obj4427_onTap_runningActionsCount - 1;
if (window.obj4427_onTap_runningActionsCount < 0) {
	window.obj4427_onTap_runningActionsCount = 0;
} else if (window.obj4427_onTap_runningActionsCount == 0) {
	obj4427_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4427_onTap_runningActionsCount = window.obj4427_onTap_runningActionsCount - 1;
if (window.obj4427_onTap_runningActionsCount < 0) {
	window.obj4427_onTap_runningActionsCount = 0;
} else if (window.obj4427_onTap_runningActionsCount == 0) {
	obj4427_onTap_actionGroup3();
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
				window.obj4427_onTap_runningActionsCount = window.obj4427_onTap_runningActionsCount - 1;
if (window.obj4427_onTap_runningActionsCount < 0) {
	window.obj4427_onTap_runningActionsCount = 0;
} else if (window.obj4427_onTap_runningActionsCount == 0) {
	obj4427_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4427_onTap_runningActionsCount = window.obj4427_onTap_runningActionsCount - 1;
if (window.obj4427_onTap_runningActionsCount < 0) {
	window.obj4427_onTap_runningActionsCount = 0;
} else if (window.obj4427_onTap_runningActionsCount == 0) {
	obj4427_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj4427_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4427_onTap_activeActionGroupIndex = -1;
		$("#obj4427").trigger("obj4427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4427) {
				console.warn("de-queueing event obj4427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4427_onTap_activeActionGroupIndex = 3;
	






















};
obj4417_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4417_onTap_activeActionGroupIndex = -1;
		$("#obj4417").trigger("obj4417_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4417) {
				console.warn("de-queueing event obj4417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4417_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_14125();
function runjs_14125() {
	window.obj4417_onTap_runningActionsCount = obj4417_onTap_runningActionsCount + 1;

	$("#obj4417").css("border-color", "#692F04"); $("#obj4417").css("border-width", "2px"); $("#obj4417").css("border-style", "solid"); $("#obj4417").css("border-radius", "100px"); $("#obj4417").css("-webkit-border-radius", "100px"); $("#obj4417").css("-moz-border-radius", "100px"); $("#obj4417_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj4417_onTap_runningActionsCount = window.obj4417_onTap_runningActionsCount - 1;
if (window.obj4417_onTap_runningActionsCount < 0) {
	window.obj4417_onTap_runningActionsCount = 0;
} else if (window.obj4417_onTap_runningActionsCount == 0) {
	obj4417_onTap_actionGroup1();
}
	}, 1);
}







};
obj4417_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4417_onTap_activeActionGroupIndex = -1;
		$("#obj4417").trigger("obj4417_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4417) {
				console.warn("de-queueing event obj4417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4417_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj14072
(function(){
	window.obj4417_onTap_runningActionsCount = obj4417_onTap_runningActionsCount + 1;

	var selector = "#obj14072";
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
					window.obj4417_onTap_runningActionsCount = window.obj4417_onTap_runningActionsCount - 1;
if (window.obj4417_onTap_runningActionsCount < 0) {
	window.obj4417_onTap_runningActionsCount = 0;
} else if (window.obj4417_onTap_runningActionsCount == 0) {
	obj4417_onTap_actionGroup2();
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
				window.obj4417_onTap_runningActionsCount = window.obj4417_onTap_runningActionsCount - 1;
if (window.obj4417_onTap_runningActionsCount < 0) {
	window.obj4417_onTap_runningActionsCount = 0;
} else if (window.obj4417_onTap_runningActionsCount == 0) {
	obj4417_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4417_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4417_onTap_activeActionGroupIndex = -1;
		$("#obj4417").trigger("obj4417_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4417) {
				console.warn("de-queueing event obj4417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4417_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_14127();
function playAudioFile_14127() {
	window.obj4417_onTap_runningActionsCount = obj4417_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile14127")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14127");
			$("#obj_audio_playSoundFile14127").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4417_onTap_runningActionsCount = window.obj4417_onTap_runningActionsCount - 1;
if (window.obj4417_onTap_runningActionsCount < 0) {
	window.obj4417_onTap_runningActionsCount = 0;
} else if (window.obj4417_onTap_runningActionsCount == 0) {
	obj4417_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4417_onTap_runningActionsCount = window.obj4417_onTap_runningActionsCount - 1;
if (window.obj4417_onTap_runningActionsCount < 0) {
	window.obj4417_onTap_runningActionsCount = 0;
} else if (window.obj4417_onTap_runningActionsCount == 0) {
	obj4417_onTap_actionGroup3();
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
				window.obj4417_onTap_runningActionsCount = window.obj4417_onTap_runningActionsCount - 1;
if (window.obj4417_onTap_runningActionsCount < 0) {
	window.obj4417_onTap_runningActionsCount = 0;
} else if (window.obj4417_onTap_runningActionsCount == 0) {
	obj4417_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4417_onTap_runningActionsCount = window.obj4417_onTap_runningActionsCount - 1;
if (window.obj4417_onTap_runningActionsCount < 0) {
	window.obj4417_onTap_runningActionsCount = 0;
} else if (window.obj4417_onTap_runningActionsCount == 0) {
	obj4417_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj4417_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4417_onTap_activeActionGroupIndex = -1;
		$("#obj4417").trigger("obj4417_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4417) {
				console.warn("de-queueing event obj4417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4417_onTap_activeActionGroupIndex = 3;
	






















};
obj4413_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4413_onTap_activeActionGroupIndex = -1;
		$("#obj4413").trigger("obj4413_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4413) {
				console.warn("de-queueing event obj4413." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4413").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4413_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_14128();
function runjs_14128() {
	window.obj4413_onTap_runningActionsCount = obj4413_onTap_runningActionsCount + 1;

	$("#obj4413").css("border-color", "#692F04"); $("#obj4413").css("border-width", "2px"); $("#obj4413").css("border-style", "solid"); $("#obj4413").css("border-radius", "100px"); $("#obj4413").css("-webkit-border-radius", "100px"); $("#obj4413").css("-moz-border-radius", "100px"); $("#obj4413_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj4413_onTap_runningActionsCount = window.obj4413_onTap_runningActionsCount - 1;
if (window.obj4413_onTap_runningActionsCount < 0) {
	window.obj4413_onTap_runningActionsCount = 0;
} else if (window.obj4413_onTap_runningActionsCount == 0) {
	obj4413_onTap_actionGroup1();
}
	}, 1);
}







};
obj4413_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4413_onTap_activeActionGroupIndex = -1;
		$("#obj4413").trigger("obj4413_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4413) {
				console.warn("de-queueing event obj4413." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4413").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4413_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj14080
(function(){
	window.obj4413_onTap_runningActionsCount = obj4413_onTap_runningActionsCount + 1;

	var selector = "#obj14080";
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
					window.obj4413_onTap_runningActionsCount = window.obj4413_onTap_runningActionsCount - 1;
if (window.obj4413_onTap_runningActionsCount < 0) {
	window.obj4413_onTap_runningActionsCount = 0;
} else if (window.obj4413_onTap_runningActionsCount == 0) {
	obj4413_onTap_actionGroup2();
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
				window.obj4413_onTap_runningActionsCount = window.obj4413_onTap_runningActionsCount - 1;
if (window.obj4413_onTap_runningActionsCount < 0) {
	window.obj4413_onTap_runningActionsCount = 0;
} else if (window.obj4413_onTap_runningActionsCount == 0) {
	obj4413_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4413_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4413_onTap_activeActionGroupIndex = -1;
		$("#obj4413").trigger("obj4413_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4413) {
				console.warn("de-queueing event obj4413." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4413").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4413_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_14130();
function playAudioFile_14130() {
	window.obj4413_onTap_runningActionsCount = obj4413_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile14130")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14130");
			$("#obj_audio_playSoundFile14130").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4413_onTap_runningActionsCount = window.obj4413_onTap_runningActionsCount - 1;
if (window.obj4413_onTap_runningActionsCount < 0) {
	window.obj4413_onTap_runningActionsCount = 0;
} else if (window.obj4413_onTap_runningActionsCount == 0) {
	obj4413_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4413_onTap_runningActionsCount = window.obj4413_onTap_runningActionsCount - 1;
if (window.obj4413_onTap_runningActionsCount < 0) {
	window.obj4413_onTap_runningActionsCount = 0;
} else if (window.obj4413_onTap_runningActionsCount == 0) {
	obj4413_onTap_actionGroup3();
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
				window.obj4413_onTap_runningActionsCount = window.obj4413_onTap_runningActionsCount - 1;
if (window.obj4413_onTap_runningActionsCount < 0) {
	window.obj4413_onTap_runningActionsCount = 0;
} else if (window.obj4413_onTap_runningActionsCount == 0) {
	obj4413_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4413_onTap_runningActionsCount = window.obj4413_onTap_runningActionsCount - 1;
if (window.obj4413_onTap_runningActionsCount < 0) {
	window.obj4413_onTap_runningActionsCount = 0;
} else if (window.obj4413_onTap_runningActionsCount == 0) {
	obj4413_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj4413_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4413_onTap_activeActionGroupIndex = -1;
		$("#obj4413").trigger("obj4413_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4413) {
				console.warn("de-queueing event obj4413." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4413").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4413_onTap_activeActionGroupIndex = 3;
	






















};
obj4415_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4415_onTap_activeActionGroupIndex = -1;
		$("#obj4415").trigger("obj4415_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4415) {
				console.warn("de-queueing event obj4415." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4415").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4415_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_14110();
function runjs_14110() {
	window.obj4415_onTap_runningActionsCount = obj4415_onTap_runningActionsCount + 1;

	$("#obj4415").css("border-color", "#692F04"); $("#obj4415").css("border-width", "2px"); $("#obj4415").css("border-style", "solid"); $("#obj4415").css("border-radius", "100px"); $("#obj4415").css("-webkit-border-radius", "100px"); $("#obj4415").css("-moz-border-radius", "100px"); $("#obj4415_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj4415_onTap_runningActionsCount = window.obj4415_onTap_runningActionsCount - 1;
if (window.obj4415_onTap_runningActionsCount < 0) {
	window.obj4415_onTap_runningActionsCount = 0;
} else if (window.obj4415_onTap_runningActionsCount == 0) {
	obj4415_onTap_actionGroup1();
}
	}, 1);
}







};
obj4415_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4415_onTap_activeActionGroupIndex = -1;
		$("#obj4415").trigger("obj4415_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4415) {
				console.warn("de-queueing event obj4415." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4415").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4415_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj14088
(function(){
	window.obj4415_onTap_runningActionsCount = obj4415_onTap_runningActionsCount + 1;

	var selector = "#obj14088";
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
					window.obj4415_onTap_runningActionsCount = window.obj4415_onTap_runningActionsCount - 1;
if (window.obj4415_onTap_runningActionsCount < 0) {
	window.obj4415_onTap_runningActionsCount = 0;
} else if (window.obj4415_onTap_runningActionsCount == 0) {
	obj4415_onTap_actionGroup2();
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
				window.obj4415_onTap_runningActionsCount = window.obj4415_onTap_runningActionsCount - 1;
if (window.obj4415_onTap_runningActionsCount < 0) {
	window.obj4415_onTap_runningActionsCount = 0;
} else if (window.obj4415_onTap_runningActionsCount == 0) {
	obj4415_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4415_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4415_onTap_activeActionGroupIndex = -1;
		$("#obj4415").trigger("obj4415_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4415) {
				console.warn("de-queueing event obj4415." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4415").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4415_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_14112();
function playAudioFile_14112() {
	window.obj4415_onTap_runningActionsCount = obj4415_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile14112")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14112");
			$("#obj_audio_playSoundFile14112").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4415_onTap_runningActionsCount = window.obj4415_onTap_runningActionsCount - 1;
if (window.obj4415_onTap_runningActionsCount < 0) {
	window.obj4415_onTap_runningActionsCount = 0;
} else if (window.obj4415_onTap_runningActionsCount == 0) {
	obj4415_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4415_onTap_runningActionsCount = window.obj4415_onTap_runningActionsCount - 1;
if (window.obj4415_onTap_runningActionsCount < 0) {
	window.obj4415_onTap_runningActionsCount = 0;
} else if (window.obj4415_onTap_runningActionsCount == 0) {
	obj4415_onTap_actionGroup3();
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
				window.obj4415_onTap_runningActionsCount = window.obj4415_onTap_runningActionsCount - 1;
if (window.obj4415_onTap_runningActionsCount < 0) {
	window.obj4415_onTap_runningActionsCount = 0;
} else if (window.obj4415_onTap_runningActionsCount == 0) {
	obj4415_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4415_onTap_runningActionsCount = window.obj4415_onTap_runningActionsCount - 1;
if (window.obj4415_onTap_runningActionsCount < 0) {
	window.obj4415_onTap_runningActionsCount = 0;
} else if (window.obj4415_onTap_runningActionsCount == 0) {
	obj4415_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj4415_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4415_onTap_activeActionGroupIndex = -1;
		$("#obj4415").trigger("obj4415_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4415) {
				console.warn("de-queueing event obj4415." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4415").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4415_onTap_activeActionGroupIndex = 3;
	






















};
obj4419_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4419_onTap_activeActionGroupIndex = -1;
		$("#obj4419").trigger("obj4419_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4419) {
				console.warn("de-queueing event obj4419." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4419").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4419_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_14113();
function runjs_14113() {
	window.obj4419_onTap_runningActionsCount = obj4419_onTap_runningActionsCount + 1;

	$("#obj4419").css("border-color", "#692F04"); $("#obj4419").css("border-width", "2px"); $("#obj4419").css("border-style", "solid"); $("#obj4419").css("border-radius", "100px"); $("#obj4419").css("-webkit-border-radius", "100px"); $("#obj4419").css("-moz-border-radius", "100px"); $("#obj4419_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj4419_onTap_runningActionsCount = window.obj4419_onTap_runningActionsCount - 1;
if (window.obj4419_onTap_runningActionsCount < 0) {
	window.obj4419_onTap_runningActionsCount = 0;
} else if (window.obj4419_onTap_runningActionsCount == 0) {
	obj4419_onTap_actionGroup1();
}
	}, 1);
}







};
obj4419_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4419_onTap_activeActionGroupIndex = -1;
		$("#obj4419").trigger("obj4419_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4419) {
				console.warn("de-queueing event obj4419." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4419").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4419_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj14086
(function(){
	window.obj4419_onTap_runningActionsCount = obj4419_onTap_runningActionsCount + 1;

	var selector = "#obj14086";
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
					window.obj4419_onTap_runningActionsCount = window.obj4419_onTap_runningActionsCount - 1;
if (window.obj4419_onTap_runningActionsCount < 0) {
	window.obj4419_onTap_runningActionsCount = 0;
} else if (window.obj4419_onTap_runningActionsCount == 0) {
	obj4419_onTap_actionGroup2();
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
				window.obj4419_onTap_runningActionsCount = window.obj4419_onTap_runningActionsCount - 1;
if (window.obj4419_onTap_runningActionsCount < 0) {
	window.obj4419_onTap_runningActionsCount = 0;
} else if (window.obj4419_onTap_runningActionsCount == 0) {
	obj4419_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4419_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4419_onTap_activeActionGroupIndex = -1;
		$("#obj4419").trigger("obj4419_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4419) {
				console.warn("de-queueing event obj4419." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4419").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4419_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_14115();
function playAudioFile_14115() {
	window.obj4419_onTap_runningActionsCount = obj4419_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile14115")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14115");
			$("#obj_audio_playSoundFile14115").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4419_onTap_runningActionsCount = window.obj4419_onTap_runningActionsCount - 1;
if (window.obj4419_onTap_runningActionsCount < 0) {
	window.obj4419_onTap_runningActionsCount = 0;
} else if (window.obj4419_onTap_runningActionsCount == 0) {
	obj4419_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4419_onTap_runningActionsCount = window.obj4419_onTap_runningActionsCount - 1;
if (window.obj4419_onTap_runningActionsCount < 0) {
	window.obj4419_onTap_runningActionsCount = 0;
} else if (window.obj4419_onTap_runningActionsCount == 0) {
	obj4419_onTap_actionGroup3();
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
				window.obj4419_onTap_runningActionsCount = window.obj4419_onTap_runningActionsCount - 1;
if (window.obj4419_onTap_runningActionsCount < 0) {
	window.obj4419_onTap_runningActionsCount = 0;
} else if (window.obj4419_onTap_runningActionsCount == 0) {
	obj4419_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4419_onTap_runningActionsCount = window.obj4419_onTap_runningActionsCount - 1;
if (window.obj4419_onTap_runningActionsCount < 0) {
	window.obj4419_onTap_runningActionsCount = 0;
} else if (window.obj4419_onTap_runningActionsCount == 0) {
	obj4419_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj4419_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4419_onTap_activeActionGroupIndex = -1;
		$("#obj4419").trigger("obj4419_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4419) {
				console.warn("de-queueing event obj4419." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4419").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4419_onTap_activeActionGroupIndex = 3;
	






















};
obj4411_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4411_onTap_activeActionGroupIndex = -1;
		$("#obj4411").trigger("obj4411_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4411) {
				console.warn("de-queueing event obj4411." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4411").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4411_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_14131();
function runjs_14131() {
	window.obj4411_onTap_runningActionsCount = obj4411_onTap_runningActionsCount + 1;

	$("#obj4411").css("border-color", "#692F04"); $("#obj4411").css("border-width", "2px"); $("#obj4411").css("border-style", "solid"); $("#obj4411").css("border-radius", "100px"); $("#obj4411").css("-webkit-border-radius", "100px"); $("#obj4411").css("-moz-border-radius", "100px"); $("#obj4411_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj4411_onTap_runningActionsCount = window.obj4411_onTap_runningActionsCount - 1;
if (window.obj4411_onTap_runningActionsCount < 0) {
	window.obj4411_onTap_runningActionsCount = 0;
} else if (window.obj4411_onTap_runningActionsCount == 0) {
	obj4411_onTap_actionGroup1();
}
	}, 1);
}







};
obj4411_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4411_onTap_activeActionGroupIndex = -1;
		$("#obj4411").trigger("obj4411_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4411) {
				console.warn("de-queueing event obj4411." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4411").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4411_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj14078
(function(){
	window.obj4411_onTap_runningActionsCount = obj4411_onTap_runningActionsCount + 1;

	var selector = "#obj14078";
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
					window.obj4411_onTap_runningActionsCount = window.obj4411_onTap_runningActionsCount - 1;
if (window.obj4411_onTap_runningActionsCount < 0) {
	window.obj4411_onTap_runningActionsCount = 0;
} else if (window.obj4411_onTap_runningActionsCount == 0) {
	obj4411_onTap_actionGroup2();
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
				window.obj4411_onTap_runningActionsCount = window.obj4411_onTap_runningActionsCount - 1;
if (window.obj4411_onTap_runningActionsCount < 0) {
	window.obj4411_onTap_runningActionsCount = 0;
} else if (window.obj4411_onTap_runningActionsCount == 0) {
	obj4411_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4411_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4411_onTap_activeActionGroupIndex = -1;
		$("#obj4411").trigger("obj4411_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4411) {
				console.warn("de-queueing event obj4411." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4411").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4411_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_14133();
function playAudioFile_14133() {
	window.obj4411_onTap_runningActionsCount = obj4411_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile14133")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14133");
			$("#obj_audio_playSoundFile14133").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4411_onTap_runningActionsCount = window.obj4411_onTap_runningActionsCount - 1;
if (window.obj4411_onTap_runningActionsCount < 0) {
	window.obj4411_onTap_runningActionsCount = 0;
} else if (window.obj4411_onTap_runningActionsCount == 0) {
	obj4411_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4411_onTap_runningActionsCount = window.obj4411_onTap_runningActionsCount - 1;
if (window.obj4411_onTap_runningActionsCount < 0) {
	window.obj4411_onTap_runningActionsCount = 0;
} else if (window.obj4411_onTap_runningActionsCount == 0) {
	obj4411_onTap_actionGroup3();
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
				window.obj4411_onTap_runningActionsCount = window.obj4411_onTap_runningActionsCount - 1;
if (window.obj4411_onTap_runningActionsCount < 0) {
	window.obj4411_onTap_runningActionsCount = 0;
} else if (window.obj4411_onTap_runningActionsCount == 0) {
	obj4411_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4411_onTap_runningActionsCount = window.obj4411_onTap_runningActionsCount - 1;
if (window.obj4411_onTap_runningActionsCount < 0) {
	window.obj4411_onTap_runningActionsCount = 0;
} else if (window.obj4411_onTap_runningActionsCount == 0) {
	obj4411_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj4411_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4411_onTap_activeActionGroupIndex = -1;
		$("#obj4411").trigger("obj4411_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4411) {
				console.warn("de-queueing event obj4411." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4411").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4411_onTap_activeActionGroupIndex = 3;
	






















};
obj4403_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4403_onTap_activeActionGroupIndex = -1;
		$("#obj4403").trigger("obj4403_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4403) {
				console.warn("de-queueing event obj4403." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4403").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4403_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_14134();
function runjs_14134() {
	window.obj4403_onTap_runningActionsCount = obj4403_onTap_runningActionsCount + 1;

	$("#obj4403").css("border-color", "#692F04"); $("#obj4403").css("border-width", "2px"); $("#obj4403").css("border-style", "solid"); $("#obj4403").css("border-radius", "100px"); $("#obj4403").css("-webkit-border-radius", "100px"); $("#obj4403").css("-moz-border-radius", "100px"); $("#obj4403_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj4403_onTap_runningActionsCount = window.obj4403_onTap_runningActionsCount - 1;
if (window.obj4403_onTap_runningActionsCount < 0) {
	window.obj4403_onTap_runningActionsCount = 0;
} else if (window.obj4403_onTap_runningActionsCount == 0) {
	obj4403_onTap_actionGroup1();
}
	}, 1);
}







};
obj4403_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4403_onTap_activeActionGroupIndex = -1;
		$("#obj4403").trigger("obj4403_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4403) {
				console.warn("de-queueing event obj4403." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4403").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4403_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj14094
(function(){
	window.obj4403_onTap_runningActionsCount = obj4403_onTap_runningActionsCount + 1;

	var selector = "#obj14094";
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
					window.obj4403_onTap_runningActionsCount = window.obj4403_onTap_runningActionsCount - 1;
if (window.obj4403_onTap_runningActionsCount < 0) {
	window.obj4403_onTap_runningActionsCount = 0;
} else if (window.obj4403_onTap_runningActionsCount == 0) {
	obj4403_onTap_actionGroup2();
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
				window.obj4403_onTap_runningActionsCount = window.obj4403_onTap_runningActionsCount - 1;
if (window.obj4403_onTap_runningActionsCount < 0) {
	window.obj4403_onTap_runningActionsCount = 0;
} else if (window.obj4403_onTap_runningActionsCount == 0) {
	obj4403_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4403_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4403_onTap_activeActionGroupIndex = -1;
		$("#obj4403").trigger("obj4403_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4403) {
				console.warn("de-queueing event obj4403." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4403").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4403_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_14136();
function playAudioFile_14136() {
	window.obj4403_onTap_runningActionsCount = obj4403_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile14136")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14136");
			$("#obj_audio_playSoundFile14136").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4403_onTap_runningActionsCount = window.obj4403_onTap_runningActionsCount - 1;
if (window.obj4403_onTap_runningActionsCount < 0) {
	window.obj4403_onTap_runningActionsCount = 0;
} else if (window.obj4403_onTap_runningActionsCount == 0) {
	obj4403_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4403_onTap_runningActionsCount = window.obj4403_onTap_runningActionsCount - 1;
if (window.obj4403_onTap_runningActionsCount < 0) {
	window.obj4403_onTap_runningActionsCount = 0;
} else if (window.obj4403_onTap_runningActionsCount == 0) {
	obj4403_onTap_actionGroup3();
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
				window.obj4403_onTap_runningActionsCount = window.obj4403_onTap_runningActionsCount - 1;
if (window.obj4403_onTap_runningActionsCount < 0) {
	window.obj4403_onTap_runningActionsCount = 0;
} else if (window.obj4403_onTap_runningActionsCount == 0) {
	obj4403_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4403_onTap_runningActionsCount = window.obj4403_onTap_runningActionsCount - 1;
if (window.obj4403_onTap_runningActionsCount < 0) {
	window.obj4403_onTap_runningActionsCount = 0;
} else if (window.obj4403_onTap_runningActionsCount == 0) {
	obj4403_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj4403_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4403_onTap_activeActionGroupIndex = -1;
		$("#obj4403").trigger("obj4403_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4403) {
				console.warn("de-queueing event obj4403." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4403").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4403_onTap_activeActionGroupIndex = 3;
	






















};
obj4409_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4409_onTap_activeActionGroupIndex = -1;
		$("#obj4409").trigger("obj4409_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4409) {
				console.warn("de-queueing event obj4409." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4409").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4409_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_14143();
function runjs_14143() {
	window.obj4409_onTap_runningActionsCount = obj4409_onTap_runningActionsCount + 1;

	$("#obj4409").css("border-color", "#692F04"); $("#obj4409").css("border-width", "2px"); $("#obj4409").css("border-style", "solid"); $("#obj4409").css("border-radius", "100px"); $("#obj4409").css("-webkit-border-radius", "100px"); $("#obj4409").css("-moz-border-radius", "100px"); $("#obj4409_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj4409_onTap_runningActionsCount = window.obj4409_onTap_runningActionsCount - 1;
if (window.obj4409_onTap_runningActionsCount < 0) {
	window.obj4409_onTap_runningActionsCount = 0;
} else if (window.obj4409_onTap_runningActionsCount == 0) {
	obj4409_onTap_actionGroup1();
}
	}, 1);
}







};
obj4409_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4409_onTap_activeActionGroupIndex = -1;
		$("#obj4409").trigger("obj4409_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4409) {
				console.warn("de-queueing event obj4409." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4409").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4409_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj14070
(function(){
	window.obj4409_onTap_runningActionsCount = obj4409_onTap_runningActionsCount + 1;

	var selector = "#obj14070";
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
					window.obj4409_onTap_runningActionsCount = window.obj4409_onTap_runningActionsCount - 1;
if (window.obj4409_onTap_runningActionsCount < 0) {
	window.obj4409_onTap_runningActionsCount = 0;
} else if (window.obj4409_onTap_runningActionsCount == 0) {
	obj4409_onTap_actionGroup2();
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
				window.obj4409_onTap_runningActionsCount = window.obj4409_onTap_runningActionsCount - 1;
if (window.obj4409_onTap_runningActionsCount < 0) {
	window.obj4409_onTap_runningActionsCount = 0;
} else if (window.obj4409_onTap_runningActionsCount == 0) {
	obj4409_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4409_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4409_onTap_activeActionGroupIndex = -1;
		$("#obj4409").trigger("obj4409_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4409) {
				console.warn("de-queueing event obj4409." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4409").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4409_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_14145();
function playAudioFile_14145() {
	window.obj4409_onTap_runningActionsCount = obj4409_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile14145")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14145");
			$("#obj_audio_playSoundFile14145").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4409_onTap_runningActionsCount = window.obj4409_onTap_runningActionsCount - 1;
if (window.obj4409_onTap_runningActionsCount < 0) {
	window.obj4409_onTap_runningActionsCount = 0;
} else if (window.obj4409_onTap_runningActionsCount == 0) {
	obj4409_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4409_onTap_runningActionsCount = window.obj4409_onTap_runningActionsCount - 1;
if (window.obj4409_onTap_runningActionsCount < 0) {
	window.obj4409_onTap_runningActionsCount = 0;
} else if (window.obj4409_onTap_runningActionsCount == 0) {
	obj4409_onTap_actionGroup3();
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
				window.obj4409_onTap_runningActionsCount = window.obj4409_onTap_runningActionsCount - 1;
if (window.obj4409_onTap_runningActionsCount < 0) {
	window.obj4409_onTap_runningActionsCount = 0;
} else if (window.obj4409_onTap_runningActionsCount == 0) {
	obj4409_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4409_onTap_runningActionsCount = window.obj4409_onTap_runningActionsCount - 1;
if (window.obj4409_onTap_runningActionsCount < 0) {
	window.obj4409_onTap_runningActionsCount = 0;
} else if (window.obj4409_onTap_runningActionsCount == 0) {
	obj4409_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj4409_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4409_onTap_activeActionGroupIndex = -1;
		$("#obj4409").trigger("obj4409_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4409) {
				console.warn("de-queueing event obj4409." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4409").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4409_onTap_activeActionGroupIndex = 3;
	






















};
obj4401_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4401_onTap_activeActionGroupIndex = -1;
		$("#obj4401").trigger("obj4401_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4401) {
				console.warn("de-queueing event obj4401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4401_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_14137();
function runjs_14137() {
	window.obj4401_onTap_runningActionsCount = obj4401_onTap_runningActionsCount + 1;

	$("#obj4401").css("border-color", "#692F04"); $("#obj4401").css("border-width", "2px"); $("#obj4401").css("border-style", "solid"); $("#obj4401").css("border-radius", "100px"); $("#obj4401").css("-webkit-border-radius", "100px"); $("#obj4401").css("-moz-border-radius", "100px"); $("#obj4401_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj4401_onTap_runningActionsCount = window.obj4401_onTap_runningActionsCount - 1;
if (window.obj4401_onTap_runningActionsCount < 0) {
	window.obj4401_onTap_runningActionsCount = 0;
} else if (window.obj4401_onTap_runningActionsCount == 0) {
	obj4401_onTap_actionGroup1();
}
	}, 1);
}







};
obj4401_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4401_onTap_activeActionGroupIndex = -1;
		$("#obj4401").trigger("obj4401_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4401) {
				console.warn("de-queueing event obj4401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4401_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj14082
(function(){
	window.obj4401_onTap_runningActionsCount = obj4401_onTap_runningActionsCount + 1;

	var selector = "#obj14082";
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
					window.obj4401_onTap_runningActionsCount = window.obj4401_onTap_runningActionsCount - 1;
if (window.obj4401_onTap_runningActionsCount < 0) {
	window.obj4401_onTap_runningActionsCount = 0;
} else if (window.obj4401_onTap_runningActionsCount == 0) {
	obj4401_onTap_actionGroup2();
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
				window.obj4401_onTap_runningActionsCount = window.obj4401_onTap_runningActionsCount - 1;
if (window.obj4401_onTap_runningActionsCount < 0) {
	window.obj4401_onTap_runningActionsCount = 0;
} else if (window.obj4401_onTap_runningActionsCount == 0) {
	obj4401_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4401_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4401_onTap_activeActionGroupIndex = -1;
		$("#obj4401").trigger("obj4401_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4401) {
				console.warn("de-queueing event obj4401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4401_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_14139();
function playAudioFile_14139() {
	window.obj4401_onTap_runningActionsCount = obj4401_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile14139")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14139");
			$("#obj_audio_playSoundFile14139").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4401_onTap_runningActionsCount = window.obj4401_onTap_runningActionsCount - 1;
if (window.obj4401_onTap_runningActionsCount < 0) {
	window.obj4401_onTap_runningActionsCount = 0;
} else if (window.obj4401_onTap_runningActionsCount == 0) {
	obj4401_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4401_onTap_runningActionsCount = window.obj4401_onTap_runningActionsCount - 1;
if (window.obj4401_onTap_runningActionsCount < 0) {
	window.obj4401_onTap_runningActionsCount = 0;
} else if (window.obj4401_onTap_runningActionsCount == 0) {
	obj4401_onTap_actionGroup3();
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
				window.obj4401_onTap_runningActionsCount = window.obj4401_onTap_runningActionsCount - 1;
if (window.obj4401_onTap_runningActionsCount < 0) {
	window.obj4401_onTap_runningActionsCount = 0;
} else if (window.obj4401_onTap_runningActionsCount == 0) {
	obj4401_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4401_onTap_runningActionsCount = window.obj4401_onTap_runningActionsCount - 1;
if (window.obj4401_onTap_runningActionsCount < 0) {
	window.obj4401_onTap_runningActionsCount = 0;
} else if (window.obj4401_onTap_runningActionsCount == 0) {
	obj4401_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj4401_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4401_onTap_activeActionGroupIndex = -1;
		$("#obj4401").trigger("obj4401_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4401) {
				console.warn("de-queueing event obj4401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4401_onTap_activeActionGroupIndex = 3;
	






















};
obj4407_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4407_onTap_activeActionGroupIndex = -1;
		$("#obj4407").trigger("obj4407_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4407) {
				console.warn("de-queueing event obj4407." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4407").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4407_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_14140();
function runjs_14140() {
	window.obj4407_onTap_runningActionsCount = obj4407_onTap_runningActionsCount + 1;

	$("#obj4407").css("border-color", "#692F04"); $("#obj4407").css("border-width", "2px"); $("#obj4407").css("border-style", "solid"); $("#obj4407").css("border-radius", "100px"); $("#obj4407").css("-webkit-border-radius", "100px"); $("#obj4407").css("-moz-border-radius", "100px"); $("#obj4407_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj4407_onTap_runningActionsCount = window.obj4407_onTap_runningActionsCount - 1;
if (window.obj4407_onTap_runningActionsCount < 0) {
	window.obj4407_onTap_runningActionsCount = 0;
} else if (window.obj4407_onTap_runningActionsCount == 0) {
	obj4407_onTap_actionGroup1();
}
	}, 1);
}







};
obj4407_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4407_onTap_activeActionGroupIndex = -1;
		$("#obj4407").trigger("obj4407_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4407) {
				console.warn("de-queueing event obj4407." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4407").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4407_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj14092
(function(){
	window.obj4407_onTap_runningActionsCount = obj4407_onTap_runningActionsCount + 1;

	var selector = "#obj14092";
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
					window.obj4407_onTap_runningActionsCount = window.obj4407_onTap_runningActionsCount - 1;
if (window.obj4407_onTap_runningActionsCount < 0) {
	window.obj4407_onTap_runningActionsCount = 0;
} else if (window.obj4407_onTap_runningActionsCount == 0) {
	obj4407_onTap_actionGroup2();
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
				window.obj4407_onTap_runningActionsCount = window.obj4407_onTap_runningActionsCount - 1;
if (window.obj4407_onTap_runningActionsCount < 0) {
	window.obj4407_onTap_runningActionsCount = 0;
} else if (window.obj4407_onTap_runningActionsCount == 0) {
	obj4407_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4407_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4407_onTap_activeActionGroupIndex = -1;
		$("#obj4407").trigger("obj4407_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4407) {
				console.warn("de-queueing event obj4407." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4407").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4407_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_14142();
function playAudioFile_14142() {
	window.obj4407_onTap_runningActionsCount = obj4407_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile14142")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile14142");
			$("#obj_audio_playSoundFile14142").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4407_onTap_runningActionsCount = window.obj4407_onTap_runningActionsCount - 1;
if (window.obj4407_onTap_runningActionsCount < 0) {
	window.obj4407_onTap_runningActionsCount = 0;
} else if (window.obj4407_onTap_runningActionsCount == 0) {
	obj4407_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4407_onTap_runningActionsCount = window.obj4407_onTap_runningActionsCount - 1;
if (window.obj4407_onTap_runningActionsCount < 0) {
	window.obj4407_onTap_runningActionsCount = 0;
} else if (window.obj4407_onTap_runningActionsCount == 0) {
	obj4407_onTap_actionGroup3();
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
				window.obj4407_onTap_runningActionsCount = window.obj4407_onTap_runningActionsCount - 1;
if (window.obj4407_onTap_runningActionsCount < 0) {
	window.obj4407_onTap_runningActionsCount = 0;
} else if (window.obj4407_onTap_runningActionsCount == 0) {
	obj4407_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4407_onTap_runningActionsCount = window.obj4407_onTap_runningActionsCount - 1;
if (window.obj4407_onTap_runningActionsCount < 0) {
	window.obj4407_onTap_runningActionsCount = 0;
} else if (window.obj4407_onTap_runningActionsCount == 0) {
	obj4407_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj4407_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4407_onTap_activeActionGroupIndex = -1;
		$("#obj4407").trigger("obj4407_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4407) {
				console.warn("de-queueing event obj4407." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4407").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4407_onTap_activeActionGroupIndex = 3;
	






















};
obj14034_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14034_onTap_activeActionGroupIndex = -1;
		$("#obj14034").trigger("obj14034_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14034) {
				console.warn("de-queueing event obj14034." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14034").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14034_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_14038();
function runjs_14038() {
	window.obj14034_onTap_runningActionsCount = obj14034_onTap_runningActionsCount + 1;

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
		window.obj14034_onTap_runningActionsCount = window.obj14034_onTap_runningActionsCount - 1;
if (window.obj14034_onTap_runningActionsCount < 0) {
	window.obj14034_onTap_runningActionsCount = 0;
} else if (window.obj14034_onTap_runningActionsCount == 0) {
	obj14034_onTap_actionGroup1();
}
	}, 1);
}







};
obj14034_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14034_onTap_activeActionGroupIndex = -1;
		$("#obj14034").trigger("obj14034_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14034) {
				console.warn("de-queueing event obj14034." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14034").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14034_onTap_activeActionGroupIndex = 1;
	






















};
obj14053_SCEventReadAloudStarted_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14053_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj14053").trigger("obj14053_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14053) {
				console.warn("de-queueing event obj14053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14053_SCEventReadAloudStarted_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj14053 
switchImage_14057();
function switchImage_14057() {
	window.obj14053_SCEventReadAloudStarted_runningActionsCount = obj14053_SCEventReadAloudStarted_runningActionsCount + 1;

	var targetObjectId = "#obj14053";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj14053_img";
	var fromImagePath = "../images/obj14053_image.png";
	var toImagePath = "../images/switch32_to.png";
	var switchHelperId = "switchHelper182"
	var switchHelperRef = "#switchHelper182"
	var switchId = "182";
	var toSwitchId = "182";
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
				window.obj14053_SCEventReadAloudStarted_runningActionsCount = window.obj14053_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj14053_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj14053_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj14053_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj14053_SCEventReadAloudStarted_actionGroup1();
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
obj14053_SCEventReadAloudStarted_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14053_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj14053").trigger("obj14053_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14053) {
				console.warn("de-queueing event obj14053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14053_SCEventReadAloudStarted_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_14058();
function runjs_14058() {
	window.obj14053_SCEventReadAloudStarted_runningActionsCount = obj14053_SCEventReadAloudStarted_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over Pressed');
}
	
	setTimeout(function() {
		window.obj14053_SCEventReadAloudStarted_runningActionsCount = window.obj14053_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj14053_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj14053_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj14053_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj14053_SCEventReadAloudStarted_actionGroup2();
}
	}, 1);
}







};
obj14053_SCEventReadAloudStarted_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14053_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj14053").trigger("obj14053_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14053) {
				console.warn("de-queueing event obj14053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14053_SCEventReadAloudStarted_activeActionGroupIndex = 2;
	






















};
obj14053_SCEventReadAloudStopped_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14053_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj14053").trigger("obj14053_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14053) {
				console.warn("de-queueing event obj14053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14053_SCEventReadAloudStopped_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj14053 
switchImage_14063();
function switchImage_14063() {
	window.obj14053_SCEventReadAloudStopped_runningActionsCount = obj14053_SCEventReadAloudStopped_runningActionsCount + 1;

	var targetObjectId = "#obj14053";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj14053_img";
	var fromImagePath = "../images/obj14053_image.png";
	var toImagePath = "../images/obj14053_image.png";
	var switchHelperId = "switchHelper183"
	var switchHelperRef = "#switchHelper183"
	var switchId = "183";
	var toSwitchId = "183";
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
				window.obj14053_SCEventReadAloudStopped_runningActionsCount = window.obj14053_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj14053_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj14053_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj14053_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj14053_SCEventReadAloudStopped_actionGroup1();
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
obj14053_SCEventReadAloudStopped_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14053_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj14053").trigger("obj14053_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14053) {
				console.warn("de-queueing event obj14053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14053_SCEventReadAloudStopped_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_14064();
function runjs_14064() {
	window.obj14053_SCEventReadAloudStopped_runningActionsCount = obj14053_SCEventReadAloudStopped_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over');
}
	
	setTimeout(function() {
		window.obj14053_SCEventReadAloudStopped_runningActionsCount = window.obj14053_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj14053_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj14053_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj14053_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj14053_SCEventReadAloudStopped_actionGroup2();
}
	}, 1);
}







};
obj14053_SCEventReadAloudStopped_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14053_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj14053").trigger("obj14053_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14053) {
				console.warn("de-queueing event obj14053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14053_SCEventReadAloudStopped_activeActionGroupIndex = 2;
	






















};
obj14024_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14024_onTap_activeActionGroupIndex = -1;
		$("#obj14024").trigger("obj14024_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14024) {
				console.warn("de-queueing event obj14024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14024_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_14026();
function runjs_14026() {
	window.obj14024_onTap_runningActionsCount = obj14024_onTap_runningActionsCount + 1;

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
		window.obj14024_onTap_runningActionsCount = window.obj14024_onTap_runningActionsCount - 1;
if (window.obj14024_onTap_runningActionsCount < 0) {
	window.obj14024_onTap_runningActionsCount = 0;
} else if (window.obj14024_onTap_runningActionsCount == 0) {
	obj14024_onTap_actionGroup1();
}
	}, 1);
}







};
obj14024_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14024_onTap_activeActionGroupIndex = -1;
		$("#obj14024").trigger("obj14024_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14024) {
				console.warn("de-queueing event obj14024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14024_onTap_activeActionGroupIndex = 1;
	






















};
obj14049_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14049_onTap_activeActionGroupIndex = -1;
		$("#obj14049").trigger("obj14049_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14049) {
				console.warn("de-queueing event obj14049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14049_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj14049 
switchImage_14051();
function switchImage_14051() {
	window.obj14049_onTap_runningActionsCount = obj14049_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj14049";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj14049_img";
	var fromImagePath = "../images/obj14049_image.png";
	var toImagePath = "../images/switch34_to.png";
	var switchHelperId = "switchHelper184"
	var switchHelperRef = "#switchHelper184"
	var switchId = "184";
	var toSwitchId = "184";
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
				window.obj14049_onTap_runningActionsCount = window.obj14049_onTap_runningActionsCount - 1;
if (window.obj14049_onTap_runningActionsCount < 0) {
	window.obj14049_onTap_runningActionsCount = 0;
} else if (window.obj14049_onTap_runningActionsCount == 0) {
	obj14049_onTap_actionGroup1();
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
obj14049_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14049_onTap_activeActionGroupIndex = -1;
		$("#obj14049").trigger("obj14049_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14049) {
				console.warn("de-queueing event obj14049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14049_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_14052();
function runjs_14052() {
	window.obj14049_onTap_runningActionsCount = obj14049_onTap_runningActionsCount + 1;

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
		window.obj14049_onTap_runningActionsCount = window.obj14049_onTap_runningActionsCount - 1;
if (window.obj14049_onTap_runningActionsCount < 0) {
	window.obj14049_onTap_runningActionsCount = 0;
} else if (window.obj14049_onTap_runningActionsCount == 0) {
	obj14049_onTap_actionGroup2();
}
	}, 1);
}







};
obj14049_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14049_onTap_activeActionGroupIndex = -1;
		$("#obj14049").trigger("obj14049_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14049) {
				console.warn("de-queueing event obj14049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14049_onTap_activeActionGroupIndex = 2;
	






















};
obj14046_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14046_onTap_activeActionGroupIndex = -1;
		$("#obj14046").trigger("obj14046_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14046) {
				console.warn("de-queueing event obj14046." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14046").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14046_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_14048();
function goToPage_14048() {
	window.obj14046_onTap_runningActionsCount = obj14046_onTap_runningActionsCount + 1;
	$("#anchor185")[0].click();
	window.obj14046_onTap_runningActionsCount = window.obj14046_onTap_runningActionsCount - 1;
if (window.obj14046_onTap_runningActionsCount < 0) {
	window.obj14046_onTap_runningActionsCount = 0;
} else if (window.obj14046_onTap_runningActionsCount == 0) {
	obj14046_onTap_actionGroup1();
}
}





















};
obj14046_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14046_onTap_activeActionGroupIndex = -1;
		$("#obj14046").trigger("obj14046_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14046) {
				console.warn("de-queueing event obj14046." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14046").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14046_onTap_activeActionGroupIndex = 1;
	






















};
obj14031_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14031_onTap_activeActionGroupIndex = -1;
		$("#obj14031").trigger("obj14031_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14031) {
				console.warn("de-queueing event obj14031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14031_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_14033();
function goToPage_14033() {
	window.obj14031_onTap_runningActionsCount = obj14031_onTap_runningActionsCount + 1;
	$("#anchor186")[0].click();
	window.obj14031_onTap_runningActionsCount = window.obj14031_onTap_runningActionsCount - 1;
if (window.obj14031_onTap_runningActionsCount < 0) {
	window.obj14031_onTap_runningActionsCount = 0;
} else if (window.obj14031_onTap_runningActionsCount == 0) {
	obj14031_onTap_actionGroup1();
}
}





















};
obj14031_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14031_onTap_activeActionGroupIndex = -1;
		$("#obj14031").trigger("obj14031_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14031) {
				console.warn("de-queueing event obj14031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14031_onTap_activeActionGroupIndex = 1;
	






















};
obj14015_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14015_onTap_activeActionGroupIndex = -1;
		$("#obj14015").trigger("obj14015_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14015) {
				console.warn("de-queueing event obj14015." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14015").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14015_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_14018();
function runjs_14018() {
	window.obj14015_onTap_runningActionsCount = obj14015_onTap_runningActionsCount + 1;

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
		window.obj14015_onTap_runningActionsCount = window.obj14015_onTap_runningActionsCount - 1;
if (window.obj14015_onTap_runningActionsCount < 0) {
	window.obj14015_onTap_runningActionsCount = 0;
} else if (window.obj14015_onTap_runningActionsCount == 0) {
	obj14015_onTap_actionGroup1();
}
	}, 1);
}







};
obj14015_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14015_onTap_activeActionGroupIndex = -1;
		$("#obj14015").trigger("obj14015_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14015) {
				console.warn("de-queueing event obj14015." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14015").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14015_onTap_activeActionGroupIndex = 1;
	






















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		































































/*
 *
 *   obj4425: Event Touch Down
 *
 */
$("#obj4425").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4425_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4425_onTap is still running");
	return;
}
var obj4425_onTap_runningActionsCount = 0;
var obj4425_onTap_loopCount = 0;
obj4425_onTap_actionGroup0();
});






























/*
 *
 *   obj4423: Event Touch Down
 *
 */
$("#obj4423").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4423_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4423_onTap is still running");
	return;
}
var obj4423_onTap_runningActionsCount = 0;
var obj4423_onTap_loopCount = 0;
obj4423_onTap_actionGroup0();
});










/*
 *
 *   obj4421: Event Touch Down
 *
 */
$("#obj4421").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4421_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4421_onTap is still running");
	return;
}
var obj4421_onTap_runningActionsCount = 0;
var obj4421_onTap_loopCount = 0;
obj4421_onTap_actionGroup0();
});










/*
 *
 *   obj4429: Event Touch Down
 *
 */
$("#obj4429").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4429_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4429_onTap is still running");
	return;
}
var obj4429_onTap_runningActionsCount = 0;
var obj4429_onTap_loopCount = 0;
obj4429_onTap_actionGroup0();
});










/*
 *
 *   obj4427: Event Touch Down
 *
 */
$("#obj4427").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4427_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4427_onTap is still running");
	return;
}
var obj4427_onTap_runningActionsCount = 0;
var obj4427_onTap_loopCount = 0;
obj4427_onTap_actionGroup0();
});










/*
 *
 *   obj4417: Event Touch Down
 *
 */
$("#obj4417").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4417_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4417_onTap is still running");
	return;
}
var obj4417_onTap_runningActionsCount = 0;
var obj4417_onTap_loopCount = 0;
obj4417_onTap_actionGroup0();
});




















/*
 *
 *   obj4413: Event Touch Down
 *
 */
$("#obj4413").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4413_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4413_onTap is still running");
	return;
}
var obj4413_onTap_runningActionsCount = 0;
var obj4413_onTap_loopCount = 0;
obj4413_onTap_actionGroup0();
});








































/*
 *
 *   obj4415: Event Touch Down
 *
 */
$("#obj4415").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4415_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4415_onTap is still running");
	return;
}
var obj4415_onTap_runningActionsCount = 0;
var obj4415_onTap_loopCount = 0;
obj4415_onTap_actionGroup0();
});










/*
 *
 *   obj4419: Event Touch Down
 *
 */
$("#obj4419").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4419_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4419_onTap is still running");
	return;
}
var obj4419_onTap_runningActionsCount = 0;
var obj4419_onTap_loopCount = 0;
obj4419_onTap_actionGroup0();
});






























/*
 *
 *   obj4411: Event Touch Down
 *
 */
$("#obj4411").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4411_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4411_onTap is still running");
	return;
}
var obj4411_onTap_runningActionsCount = 0;
var obj4411_onTap_loopCount = 0;
obj4411_onTap_actionGroup0();
});






























/*
 *
 *   obj4403: Event Touch Down
 *
 */
$("#obj4403").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4403_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4403_onTap is still running");
	return;
}
var obj4403_onTap_runningActionsCount = 0;
var obj4403_onTap_loopCount = 0;
obj4403_onTap_actionGroup0();
});










/*
 *
 *   obj4409: Event Touch Down
 *
 */
$("#obj4409").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4409_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4409_onTap is still running");
	return;
}
var obj4409_onTap_runningActionsCount = 0;
var obj4409_onTap_loopCount = 0;
obj4409_onTap_actionGroup0();
});




















/*
 *
 *   obj4401: Event Touch Down
 *
 */
$("#obj4401").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4401_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4401_onTap is still running");
	return;
}
var obj4401_onTap_runningActionsCount = 0;
var obj4401_onTap_loopCount = 0;
obj4401_onTap_actionGroup0();
});










/*
 *
 *   obj4407: Event Touch Down
 *
 */
$("#obj4407").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4407_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4407_onTap is still running");
	return;
}
var obj4407_onTap_runningActionsCount = 0;
var obj4407_onTap_loopCount = 0;
obj4407_onTap_actionGroup0();
});




























































/*
 *
 *   obj14034: Event Touch Down
 *
 */
$("#obj14034").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj14034_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14034_onTap is still running");
	return;
}
var obj14034_onTap_runningActionsCount = 0;
var obj14034_onTap_loopCount = 0;
obj14034_onTap_actionGroup0();
});
























/*
 *
 *   obj14053: Event SCEventReadAloudStarted
 *
 */
$("#obj14053").bind("SCEventReadAloudStarted", function(event) {
	if (window.obj14053_SCEventReadAloudStarted_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14053_SCEventReadAloudStarted is still running");
	return;
}
var obj14053_SCEventReadAloudStarted_runningActionsCount = 0;
var obj14053_SCEventReadAloudStarted_loopCount = 0;
obj14053_SCEventReadAloudStarted_actionGroup0();
});
/*
 *
 *   obj14053: Event SCEventReadAloudStopped
 *
 */
$("#obj14053").bind("SCEventReadAloudStopped", function(event) {
	if (window.obj14053_SCEventReadAloudStopped_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14053_SCEventReadAloudStopped is still running");
	return;
}
var obj14053_SCEventReadAloudStopped_runningActionsCount = 0;
var obj14053_SCEventReadAloudStopped_loopCount = 0;
obj14053_SCEventReadAloudStopped_actionGroup0();
});





/*
 *
 *   obj14024: Event Touch Down
 *
 */
$("#obj14024").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj14024_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14024_onTap is still running");
	return;
}
var obj14024_onTap_runningActionsCount = 0;
var obj14024_onTap_loopCount = 0;
obj14024_onTap_actionGroup0();
});










/*
 *
 *   obj14049: Event Touch Down
 *
 */
$("#obj14049").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj14049_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14049_onTap is still running");
	return;
}
var obj14049_onTap_runningActionsCount = 0;
var obj14049_onTap_loopCount = 0;
obj14049_onTap_actionGroup0();
});










/*
 *
 *   obj14046: Event Touch Down
 *
 */
$("#obj14046").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj14046_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14046_onTap is still running");
	return;
}
var obj14046_onTap_runningActionsCount = 0;
var obj14046_onTap_loopCount = 0;
obj14046_onTap_actionGroup0();
});










/*
 *
 *   obj14031: Event Touch Down
 *
 */
$("#obj14031").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj14031_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14031_onTap is still running");
	return;
}
var obj14031_onTap_runningActionsCount = 0;
var obj14031_onTap_loopCount = 0;
obj14031_onTap_actionGroup0();
});










/*
 *
 *   obj14015: Event Touch Down
 *
 */
$("#obj14015").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj14015_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14015_onTap is still running");
	return;
}
var obj14015_onTap_runningActionsCount = 0;
var obj14015_onTap_loopCount = 0;
obj14015_onTap_actionGroup0();
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
	
$("#obj4176").trigger('SCEventShow');
$("#obj4399").trigger('SCEventShow');
$("#obj4397").trigger('SCEventShow');
$("#obj4425").trigger('SCEventShow');
$("#obj4423").trigger('SCEventShow');
$("#obj4421").trigger('SCEventShow');
$("#obj4429").trigger('SCEventShow');
$("#obj4427").trigger('SCEventShow');
$("#obj4417").trigger('SCEventShow');
$("#obj4413").trigger('SCEventShow');
$("#obj4415").trigger('SCEventShow');
$("#obj4419").trigger('SCEventShow');
$("#obj4411").trigger('SCEventShow');
$("#obj4403").trigger('SCEventShow');
$("#obj4409").trigger('SCEventShow');
$("#obj4401").trigger('SCEventShow');
$("#obj4407").trigger('SCEventShow');
$("#obj4250").trigger('SCEventShow');
$("#obj4290").trigger('SCEventShow');
$("#obj14053").trigger('SCEventShow');
$("#obj14024").trigger('SCEventShow');
$("#obj14046").trigger('SCEventShow');
$("#obj14031").trigger('SCEventShow');
$("#obj14015").trigger('SCEventShow');
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