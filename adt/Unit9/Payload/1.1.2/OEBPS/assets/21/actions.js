pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serofero - Unit 9";
pubcoder.page.id = pubcoder.page.id || 3801;
pubcoder.page.title = pubcoder.page.title || "21";
pubcoder.page.number = pubcoder.page.number || 21;
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
var obj9642_onTap_activeActionGroupIndex = -1;
var obj9642_onTap_runningActionsCount = 0;
var obj9642_onTap_loopCount = 0;
var obj4440_onTap_activeActionGroupIndex = -1;
var obj4440_onTap_runningActionsCount = 0;
var obj4440_onTap_loopCount = 0;
var obj9637_onTap_activeActionGroupIndex = -1;
var obj9637_onTap_runningActionsCount = 0;
var obj9637_onTap_loopCount = 0;
var obj4452_onTap_activeActionGroupIndex = -1;
var obj4452_onTap_runningActionsCount = 0;
var obj4452_onTap_loopCount = 0;
var obj9624_onTap_activeActionGroupIndex = -1;
var obj9624_onTap_runningActionsCount = 0;
var obj9624_onTap_loopCount = 0;
var obj9570_onTap_activeActionGroupIndex = -1;
var obj9570_onTap_runningActionsCount = 0;
var obj9570_onTap_loopCount = 0;
var obj9619_onTap_activeActionGroupIndex = -1;
var obj9619_onTap_runningActionsCount = 0;
var obj9619_onTap_loopCount = 0;
var obj9565_onTap_activeActionGroupIndex = -1;
var obj9565_onTap_runningActionsCount = 0;
var obj9565_onTap_loopCount = 0;
var obj9575_onTap_activeActionGroupIndex = -1;
var obj9575_onTap_runningActionsCount = 0;
var obj9575_onTap_loopCount = 0;
var obj9580_onTap_activeActionGroupIndex = -1;
var obj9580_onTap_runningActionsCount = 0;
var obj9580_onTap_loopCount = 0;
var obj9593_onTap_activeActionGroupIndex = -1;
var obj9593_onTap_runningActionsCount = 0;
var obj9593_onTap_loopCount = 0;
var obj9598_onTap_activeActionGroupIndex = -1;
var obj9598_onTap_runningActionsCount = 0;
var obj9598_onTap_loopCount = 0;
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
		
obj9642_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9642_onTap_activeActionGroupIndex = -1;
		$("#obj9642").trigger("obj9642_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9642) {
				console.warn("de-queueing event obj9642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9642_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj9633
(function(){
	window.obj9642_onTap_runningActionsCount = obj9642_onTap_runningActionsCount + 1;

	var selector = "#obj9633";
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
					window.obj9642_onTap_runningActionsCount = window.obj9642_onTap_runningActionsCount - 1;
if (window.obj9642_onTap_runningActionsCount < 0) {
	window.obj9642_onTap_runningActionsCount = 0;
} else if (window.obj9642_onTap_runningActionsCount == 0) {
	obj9642_onTap_actionGroup1();
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
				window.obj9642_onTap_runningActionsCount = window.obj9642_onTap_runningActionsCount - 1;
if (window.obj9642_onTap_runningActionsCount < 0) {
	window.obj9642_onTap_runningActionsCount = 0;
} else if (window.obj9642_onTap_runningActionsCount == 0) {
	obj9642_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9642_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9642_onTap_activeActionGroupIndex = -1;
		$("#obj9642").trigger("obj9642_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9642) {
				console.warn("de-queueing event obj9642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9642_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj9629 
hide_9645();
function hide_9645() {
	var selector = "#obj9629";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9642_onTap_runningActionsCount = obj9642_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9642_onTap_runningActionsCount = window.obj9642_onTap_runningActionsCount - 1;
if (window.obj9642_onTap_runningActionsCount < 0) {
	window.obj9642_onTap_runningActionsCount = 0;
} else if (window.obj9642_onTap_runningActionsCount == 0) {
	obj9642_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9645(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9642_onTap_runningActionsCount = window.obj9642_onTap_runningActionsCount - 1;
if (window.obj9642_onTap_runningActionsCount < 0) {
	window.obj9642_onTap_runningActionsCount = 0;
} else if (window.obj9642_onTap_runningActionsCount == 0) {
	obj9642_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9642_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9642_onTap_activeActionGroupIndex = -1;
		$("#obj9642").trigger("obj9642_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9642) {
				console.warn("de-queueing event obj9642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9642_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9646();
function playAudioFile_9646() {
	window.obj9642_onTap_runningActionsCount = obj9642_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9646")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9646");
			$("#obj_audio_playSoundFile9646").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9642_onTap_runningActionsCount = window.obj9642_onTap_runningActionsCount - 1;
if (window.obj9642_onTap_runningActionsCount < 0) {
	window.obj9642_onTap_runningActionsCount = 0;
} else if (window.obj9642_onTap_runningActionsCount == 0) {
	obj9642_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9642_onTap_runningActionsCount = window.obj9642_onTap_runningActionsCount - 1;
if (window.obj9642_onTap_runningActionsCount < 0) {
	window.obj9642_onTap_runningActionsCount = 0;
} else if (window.obj9642_onTap_runningActionsCount == 0) {
	obj9642_onTap_actionGroup3();
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
				window.obj9642_onTap_runningActionsCount = window.obj9642_onTap_runningActionsCount - 1;
if (window.obj9642_onTap_runningActionsCount < 0) {
	window.obj9642_onTap_runningActionsCount = 0;
} else if (window.obj9642_onTap_runningActionsCount == 0) {
	obj9642_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9642_onTap_runningActionsCount = window.obj9642_onTap_runningActionsCount - 1;
if (window.obj9642_onTap_runningActionsCount < 0) {
	window.obj9642_onTap_runningActionsCount = 0;
} else if (window.obj9642_onTap_runningActionsCount == 0) {
	obj9642_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9642_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9642_onTap_activeActionGroupIndex = -1;
		$("#obj9642").trigger("obj9642_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9642) {
				console.warn("de-queueing event obj9642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9642_onTap_activeActionGroupIndex = 3;
	






















};
obj4440_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4440_onTap_activeActionGroupIndex = -1;
		$("#obj4440").trigger("obj4440_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4440) {
				console.warn("de-queueing event obj4440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4440_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj9545
(function(){
	window.obj4440_onTap_runningActionsCount = obj4440_onTap_runningActionsCount + 1;

	var selector = "#obj9545";
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
					window.obj4440_onTap_runningActionsCount = window.obj4440_onTap_runningActionsCount - 1;
if (window.obj4440_onTap_runningActionsCount < 0) {
	window.obj4440_onTap_runningActionsCount = 0;
} else if (window.obj4440_onTap_runningActionsCount == 0) {
	obj4440_onTap_actionGroup1();
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
				window.obj4440_onTap_runningActionsCount = window.obj4440_onTap_runningActionsCount - 1;
if (window.obj4440_onTap_runningActionsCount < 0) {
	window.obj4440_onTap_runningActionsCount = 0;
} else if (window.obj4440_onTap_runningActionsCount == 0) {
	obj4440_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4440_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4440_onTap_activeActionGroupIndex = -1;
		$("#obj4440").trigger("obj4440_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4440) {
				console.warn("de-queueing event obj4440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4440_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj9547 
hide_9552();
function hide_9552() {
	var selector = "#obj9547";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4440_onTap_runningActionsCount = obj4440_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4440_onTap_runningActionsCount = window.obj4440_onTap_runningActionsCount - 1;
if (window.obj4440_onTap_runningActionsCount < 0) {
	window.obj4440_onTap_runningActionsCount = 0;
} else if (window.obj4440_onTap_runningActionsCount == 0) {
	obj4440_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9552(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4440_onTap_runningActionsCount = window.obj4440_onTap_runningActionsCount - 1;
if (window.obj4440_onTap_runningActionsCount < 0) {
	window.obj4440_onTap_runningActionsCount = 0;
} else if (window.obj4440_onTap_runningActionsCount == 0) {
	obj4440_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj4440_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4440_onTap_activeActionGroupIndex = -1;
		$("#obj4440").trigger("obj4440_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4440) {
				console.warn("de-queueing event obj4440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4440_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9556();
function playAudioFile_9556() {
	window.obj4440_onTap_runningActionsCount = obj4440_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9556")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9556");
			$("#obj_audio_playSoundFile9556").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4440_onTap_runningActionsCount = window.obj4440_onTap_runningActionsCount - 1;
if (window.obj4440_onTap_runningActionsCount < 0) {
	window.obj4440_onTap_runningActionsCount = 0;
} else if (window.obj4440_onTap_runningActionsCount == 0) {
	obj4440_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4440_onTap_runningActionsCount = window.obj4440_onTap_runningActionsCount - 1;
if (window.obj4440_onTap_runningActionsCount < 0) {
	window.obj4440_onTap_runningActionsCount = 0;
} else if (window.obj4440_onTap_runningActionsCount == 0) {
	obj4440_onTap_actionGroup3();
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
				window.obj4440_onTap_runningActionsCount = window.obj4440_onTap_runningActionsCount - 1;
if (window.obj4440_onTap_runningActionsCount < 0) {
	window.obj4440_onTap_runningActionsCount = 0;
} else if (window.obj4440_onTap_runningActionsCount == 0) {
	obj4440_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4440_onTap_runningActionsCount = window.obj4440_onTap_runningActionsCount - 1;
if (window.obj4440_onTap_runningActionsCount < 0) {
	window.obj4440_onTap_runningActionsCount = 0;
} else if (window.obj4440_onTap_runningActionsCount == 0) {
	obj4440_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj4440_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4440_onTap_activeActionGroupIndex = -1;
		$("#obj4440").trigger("obj4440_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4440) {
				console.warn("de-queueing event obj4440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4440_onTap_activeActionGroupIndex = 3;
	






















};
obj9637_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9637_onTap_activeActionGroupIndex = -1;
		$("#obj9637").trigger("obj9637_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9637) {
				console.warn("de-queueing event obj9637." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9637").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9637_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj9629
(function(){
	window.obj9637_onTap_runningActionsCount = obj9637_onTap_runningActionsCount + 1;

	var selector = "#obj9629";
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
					window.obj9637_onTap_runningActionsCount = window.obj9637_onTap_runningActionsCount - 1;
if (window.obj9637_onTap_runningActionsCount < 0) {
	window.obj9637_onTap_runningActionsCount = 0;
} else if (window.obj9637_onTap_runningActionsCount == 0) {
	obj9637_onTap_actionGroup1();
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
				window.obj9637_onTap_runningActionsCount = window.obj9637_onTap_runningActionsCount - 1;
if (window.obj9637_onTap_runningActionsCount < 0) {
	window.obj9637_onTap_runningActionsCount = 0;
} else if (window.obj9637_onTap_runningActionsCount == 0) {
	obj9637_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9637_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9637_onTap_activeActionGroupIndex = -1;
		$("#obj9637").trigger("obj9637_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9637) {
				console.warn("de-queueing event obj9637." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9637").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9637_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj9633 
hide_9640();
function hide_9640() {
	var selector = "#obj9633";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9637_onTap_runningActionsCount = obj9637_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9637_onTap_runningActionsCount = window.obj9637_onTap_runningActionsCount - 1;
if (window.obj9637_onTap_runningActionsCount < 0) {
	window.obj9637_onTap_runningActionsCount = 0;
} else if (window.obj9637_onTap_runningActionsCount == 0) {
	obj9637_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9640(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9637_onTap_runningActionsCount = window.obj9637_onTap_runningActionsCount - 1;
if (window.obj9637_onTap_runningActionsCount < 0) {
	window.obj9637_onTap_runningActionsCount = 0;
} else if (window.obj9637_onTap_runningActionsCount == 0) {
	obj9637_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9637_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9637_onTap_activeActionGroupIndex = -1;
		$("#obj9637").trigger("obj9637_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9637) {
				console.warn("de-queueing event obj9637." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9637").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9637_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9641();
function playAudioFile_9641() {
	window.obj9637_onTap_runningActionsCount = obj9637_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9641")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9641");
			$("#obj_audio_playSoundFile9641").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9637_onTap_runningActionsCount = window.obj9637_onTap_runningActionsCount - 1;
if (window.obj9637_onTap_runningActionsCount < 0) {
	window.obj9637_onTap_runningActionsCount = 0;
} else if (window.obj9637_onTap_runningActionsCount == 0) {
	obj9637_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9637_onTap_runningActionsCount = window.obj9637_onTap_runningActionsCount - 1;
if (window.obj9637_onTap_runningActionsCount < 0) {
	window.obj9637_onTap_runningActionsCount = 0;
} else if (window.obj9637_onTap_runningActionsCount == 0) {
	obj9637_onTap_actionGroup3();
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
				window.obj9637_onTap_runningActionsCount = window.obj9637_onTap_runningActionsCount - 1;
if (window.obj9637_onTap_runningActionsCount < 0) {
	window.obj9637_onTap_runningActionsCount = 0;
} else if (window.obj9637_onTap_runningActionsCount == 0) {
	obj9637_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9637_onTap_runningActionsCount = window.obj9637_onTap_runningActionsCount - 1;
if (window.obj9637_onTap_runningActionsCount < 0) {
	window.obj9637_onTap_runningActionsCount = 0;
} else if (window.obj9637_onTap_runningActionsCount == 0) {
	obj9637_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9637_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9637_onTap_activeActionGroupIndex = -1;
		$("#obj9637").trigger("obj9637_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9637) {
				console.warn("de-queueing event obj9637." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9637").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9637_onTap_activeActionGroupIndex = 3;
	






















};
obj4452_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4452_onTap_activeActionGroupIndex = -1;
		$("#obj4452").trigger("obj4452_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4452) {
				console.warn("de-queueing event obj4452." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4452").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4452_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj9547
(function(){
	window.obj4452_onTap_runningActionsCount = obj4452_onTap_runningActionsCount + 1;

	var selector = "#obj9547";
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
					window.obj4452_onTap_runningActionsCount = window.obj4452_onTap_runningActionsCount - 1;
if (window.obj4452_onTap_runningActionsCount < 0) {
	window.obj4452_onTap_runningActionsCount = 0;
} else if (window.obj4452_onTap_runningActionsCount == 0) {
	obj4452_onTap_actionGroup1();
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
				window.obj4452_onTap_runningActionsCount = window.obj4452_onTap_runningActionsCount - 1;
if (window.obj4452_onTap_runningActionsCount < 0) {
	window.obj4452_onTap_runningActionsCount = 0;
} else if (window.obj4452_onTap_runningActionsCount == 0) {
	obj4452_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4452_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4452_onTap_activeActionGroupIndex = -1;
		$("#obj4452").trigger("obj4452_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4452) {
				console.warn("de-queueing event obj4452." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4452").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4452_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj9545 
hide_9554();
function hide_9554() {
	var selector = "#obj9545";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4452_onTap_runningActionsCount = obj4452_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4452_onTap_runningActionsCount = window.obj4452_onTap_runningActionsCount - 1;
if (window.obj4452_onTap_runningActionsCount < 0) {
	window.obj4452_onTap_runningActionsCount = 0;
} else if (window.obj4452_onTap_runningActionsCount == 0) {
	obj4452_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9554(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4452_onTap_runningActionsCount = window.obj4452_onTap_runningActionsCount - 1;
if (window.obj4452_onTap_runningActionsCount < 0) {
	window.obj4452_onTap_runningActionsCount = 0;
} else if (window.obj4452_onTap_runningActionsCount == 0) {
	obj4452_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj4452_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4452_onTap_activeActionGroupIndex = -1;
		$("#obj4452").trigger("obj4452_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4452) {
				console.warn("de-queueing event obj4452." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4452").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4452_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9555();
function playAudioFile_9555() {
	window.obj4452_onTap_runningActionsCount = obj4452_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9555")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9555");
			$("#obj_audio_playSoundFile9555").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4452_onTap_runningActionsCount = window.obj4452_onTap_runningActionsCount - 1;
if (window.obj4452_onTap_runningActionsCount < 0) {
	window.obj4452_onTap_runningActionsCount = 0;
} else if (window.obj4452_onTap_runningActionsCount == 0) {
	obj4452_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4452_onTap_runningActionsCount = window.obj4452_onTap_runningActionsCount - 1;
if (window.obj4452_onTap_runningActionsCount < 0) {
	window.obj4452_onTap_runningActionsCount = 0;
} else if (window.obj4452_onTap_runningActionsCount == 0) {
	obj4452_onTap_actionGroup3();
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
				window.obj4452_onTap_runningActionsCount = window.obj4452_onTap_runningActionsCount - 1;
if (window.obj4452_onTap_runningActionsCount < 0) {
	window.obj4452_onTap_runningActionsCount = 0;
} else if (window.obj4452_onTap_runningActionsCount == 0) {
	obj4452_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4452_onTap_runningActionsCount = window.obj4452_onTap_runningActionsCount - 1;
if (window.obj4452_onTap_runningActionsCount < 0) {
	window.obj4452_onTap_runningActionsCount = 0;
} else if (window.obj4452_onTap_runningActionsCount == 0) {
	obj4452_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj4452_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4452_onTap_activeActionGroupIndex = -1;
		$("#obj4452").trigger("obj4452_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4452) {
				console.warn("de-queueing event obj4452." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4452").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4452_onTap_activeActionGroupIndex = 3;
	






















};
obj9624_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9624_onTap_activeActionGroupIndex = -1;
		$("#obj9624").trigger("obj9624_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9624) {
				console.warn("de-queueing event obj9624." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9624").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9624_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj9615
(function(){
	window.obj9624_onTap_runningActionsCount = obj9624_onTap_runningActionsCount + 1;

	var selector = "#obj9615";
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
					window.obj9624_onTap_runningActionsCount = window.obj9624_onTap_runningActionsCount - 1;
if (window.obj9624_onTap_runningActionsCount < 0) {
	window.obj9624_onTap_runningActionsCount = 0;
} else if (window.obj9624_onTap_runningActionsCount == 0) {
	obj9624_onTap_actionGroup1();
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
				window.obj9624_onTap_runningActionsCount = window.obj9624_onTap_runningActionsCount - 1;
if (window.obj9624_onTap_runningActionsCount < 0) {
	window.obj9624_onTap_runningActionsCount = 0;
} else if (window.obj9624_onTap_runningActionsCount == 0) {
	obj9624_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9624_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9624_onTap_activeActionGroupIndex = -1;
		$("#obj9624").trigger("obj9624_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9624) {
				console.warn("de-queueing event obj9624." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9624").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9624_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj9611 
hide_9627();
function hide_9627() {
	var selector = "#obj9611";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9624_onTap_runningActionsCount = obj9624_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9624_onTap_runningActionsCount = window.obj9624_onTap_runningActionsCount - 1;
if (window.obj9624_onTap_runningActionsCount < 0) {
	window.obj9624_onTap_runningActionsCount = 0;
} else if (window.obj9624_onTap_runningActionsCount == 0) {
	obj9624_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9627(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9624_onTap_runningActionsCount = window.obj9624_onTap_runningActionsCount - 1;
if (window.obj9624_onTap_runningActionsCount < 0) {
	window.obj9624_onTap_runningActionsCount = 0;
} else if (window.obj9624_onTap_runningActionsCount == 0) {
	obj9624_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9624_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9624_onTap_activeActionGroupIndex = -1;
		$("#obj9624").trigger("obj9624_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9624) {
				console.warn("de-queueing event obj9624." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9624").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9624_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9628();
function playAudioFile_9628() {
	window.obj9624_onTap_runningActionsCount = obj9624_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9628")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9628");
			$("#obj_audio_playSoundFile9628").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9624_onTap_runningActionsCount = window.obj9624_onTap_runningActionsCount - 1;
if (window.obj9624_onTap_runningActionsCount < 0) {
	window.obj9624_onTap_runningActionsCount = 0;
} else if (window.obj9624_onTap_runningActionsCount == 0) {
	obj9624_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9624_onTap_runningActionsCount = window.obj9624_onTap_runningActionsCount - 1;
if (window.obj9624_onTap_runningActionsCount < 0) {
	window.obj9624_onTap_runningActionsCount = 0;
} else if (window.obj9624_onTap_runningActionsCount == 0) {
	obj9624_onTap_actionGroup3();
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
				window.obj9624_onTap_runningActionsCount = window.obj9624_onTap_runningActionsCount - 1;
if (window.obj9624_onTap_runningActionsCount < 0) {
	window.obj9624_onTap_runningActionsCount = 0;
} else if (window.obj9624_onTap_runningActionsCount == 0) {
	obj9624_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9624_onTap_runningActionsCount = window.obj9624_onTap_runningActionsCount - 1;
if (window.obj9624_onTap_runningActionsCount < 0) {
	window.obj9624_onTap_runningActionsCount = 0;
} else if (window.obj9624_onTap_runningActionsCount == 0) {
	obj9624_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9624_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9624_onTap_activeActionGroupIndex = -1;
		$("#obj9624").trigger("obj9624_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9624) {
				console.warn("de-queueing event obj9624." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9624").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9624_onTap_activeActionGroupIndex = 3;
	






















};
obj9570_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9570_onTap_activeActionGroupIndex = -1;
		$("#obj9570").trigger("obj9570_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9570) {
				console.warn("de-queueing event obj9570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9570_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj9561
(function(){
	window.obj9570_onTap_runningActionsCount = obj9570_onTap_runningActionsCount + 1;

	var selector = "#obj9561";
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
					window.obj9570_onTap_runningActionsCount = window.obj9570_onTap_runningActionsCount - 1;
if (window.obj9570_onTap_runningActionsCount < 0) {
	window.obj9570_onTap_runningActionsCount = 0;
} else if (window.obj9570_onTap_runningActionsCount == 0) {
	obj9570_onTap_actionGroup1();
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
				window.obj9570_onTap_runningActionsCount = window.obj9570_onTap_runningActionsCount - 1;
if (window.obj9570_onTap_runningActionsCount < 0) {
	window.obj9570_onTap_runningActionsCount = 0;
} else if (window.obj9570_onTap_runningActionsCount == 0) {
	obj9570_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9570_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9570_onTap_activeActionGroupIndex = -1;
		$("#obj9570").trigger("obj9570_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9570) {
				console.warn("de-queueing event obj9570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9570_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj9557 
hide_9573();
function hide_9573() {
	var selector = "#obj9557";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9570_onTap_runningActionsCount = obj9570_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9570_onTap_runningActionsCount = window.obj9570_onTap_runningActionsCount - 1;
if (window.obj9570_onTap_runningActionsCount < 0) {
	window.obj9570_onTap_runningActionsCount = 0;
} else if (window.obj9570_onTap_runningActionsCount == 0) {
	obj9570_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9573(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9570_onTap_runningActionsCount = window.obj9570_onTap_runningActionsCount - 1;
if (window.obj9570_onTap_runningActionsCount < 0) {
	window.obj9570_onTap_runningActionsCount = 0;
} else if (window.obj9570_onTap_runningActionsCount == 0) {
	obj9570_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9570_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9570_onTap_activeActionGroupIndex = -1;
		$("#obj9570").trigger("obj9570_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9570) {
				console.warn("de-queueing event obj9570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9570_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9574();
function playAudioFile_9574() {
	window.obj9570_onTap_runningActionsCount = obj9570_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9574")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9574");
			$("#obj_audio_playSoundFile9574").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9570_onTap_runningActionsCount = window.obj9570_onTap_runningActionsCount - 1;
if (window.obj9570_onTap_runningActionsCount < 0) {
	window.obj9570_onTap_runningActionsCount = 0;
} else if (window.obj9570_onTap_runningActionsCount == 0) {
	obj9570_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9570_onTap_runningActionsCount = window.obj9570_onTap_runningActionsCount - 1;
if (window.obj9570_onTap_runningActionsCount < 0) {
	window.obj9570_onTap_runningActionsCount = 0;
} else if (window.obj9570_onTap_runningActionsCount == 0) {
	obj9570_onTap_actionGroup3();
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
				window.obj9570_onTap_runningActionsCount = window.obj9570_onTap_runningActionsCount - 1;
if (window.obj9570_onTap_runningActionsCount < 0) {
	window.obj9570_onTap_runningActionsCount = 0;
} else if (window.obj9570_onTap_runningActionsCount == 0) {
	obj9570_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9570_onTap_runningActionsCount = window.obj9570_onTap_runningActionsCount - 1;
if (window.obj9570_onTap_runningActionsCount < 0) {
	window.obj9570_onTap_runningActionsCount = 0;
} else if (window.obj9570_onTap_runningActionsCount == 0) {
	obj9570_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9570_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9570_onTap_activeActionGroupIndex = -1;
		$("#obj9570").trigger("obj9570_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9570) {
				console.warn("de-queueing event obj9570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9570_onTap_activeActionGroupIndex = 3;
	






















};
obj9619_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9619_onTap_activeActionGroupIndex = -1;
		$("#obj9619").trigger("obj9619_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9619) {
				console.warn("de-queueing event obj9619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9619_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj9611
(function(){
	window.obj9619_onTap_runningActionsCount = obj9619_onTap_runningActionsCount + 1;

	var selector = "#obj9611";
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
					window.obj9619_onTap_runningActionsCount = window.obj9619_onTap_runningActionsCount - 1;
if (window.obj9619_onTap_runningActionsCount < 0) {
	window.obj9619_onTap_runningActionsCount = 0;
} else if (window.obj9619_onTap_runningActionsCount == 0) {
	obj9619_onTap_actionGroup1();
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
				window.obj9619_onTap_runningActionsCount = window.obj9619_onTap_runningActionsCount - 1;
if (window.obj9619_onTap_runningActionsCount < 0) {
	window.obj9619_onTap_runningActionsCount = 0;
} else if (window.obj9619_onTap_runningActionsCount == 0) {
	obj9619_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9619_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9619_onTap_activeActionGroupIndex = -1;
		$("#obj9619").trigger("obj9619_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9619) {
				console.warn("de-queueing event obj9619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9619_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj9615 
hide_9622();
function hide_9622() {
	var selector = "#obj9615";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9619_onTap_runningActionsCount = obj9619_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9619_onTap_runningActionsCount = window.obj9619_onTap_runningActionsCount - 1;
if (window.obj9619_onTap_runningActionsCount < 0) {
	window.obj9619_onTap_runningActionsCount = 0;
} else if (window.obj9619_onTap_runningActionsCount == 0) {
	obj9619_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9622(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9619_onTap_runningActionsCount = window.obj9619_onTap_runningActionsCount - 1;
if (window.obj9619_onTap_runningActionsCount < 0) {
	window.obj9619_onTap_runningActionsCount = 0;
} else if (window.obj9619_onTap_runningActionsCount == 0) {
	obj9619_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9619_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9619_onTap_activeActionGroupIndex = -1;
		$("#obj9619").trigger("obj9619_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9619) {
				console.warn("de-queueing event obj9619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9619_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9623();
function playAudioFile_9623() {
	window.obj9619_onTap_runningActionsCount = obj9619_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9623")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9623");
			$("#obj_audio_playSoundFile9623").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9619_onTap_runningActionsCount = window.obj9619_onTap_runningActionsCount - 1;
if (window.obj9619_onTap_runningActionsCount < 0) {
	window.obj9619_onTap_runningActionsCount = 0;
} else if (window.obj9619_onTap_runningActionsCount == 0) {
	obj9619_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9619_onTap_runningActionsCount = window.obj9619_onTap_runningActionsCount - 1;
if (window.obj9619_onTap_runningActionsCount < 0) {
	window.obj9619_onTap_runningActionsCount = 0;
} else if (window.obj9619_onTap_runningActionsCount == 0) {
	obj9619_onTap_actionGroup3();
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
				window.obj9619_onTap_runningActionsCount = window.obj9619_onTap_runningActionsCount - 1;
if (window.obj9619_onTap_runningActionsCount < 0) {
	window.obj9619_onTap_runningActionsCount = 0;
} else if (window.obj9619_onTap_runningActionsCount == 0) {
	obj9619_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9619_onTap_runningActionsCount = window.obj9619_onTap_runningActionsCount - 1;
if (window.obj9619_onTap_runningActionsCount < 0) {
	window.obj9619_onTap_runningActionsCount = 0;
} else if (window.obj9619_onTap_runningActionsCount == 0) {
	obj9619_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9619_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9619_onTap_activeActionGroupIndex = -1;
		$("#obj9619").trigger("obj9619_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9619) {
				console.warn("de-queueing event obj9619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9619_onTap_activeActionGroupIndex = 3;
	






















};
obj9565_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9565_onTap_activeActionGroupIndex = -1;
		$("#obj9565").trigger("obj9565_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9565) {
				console.warn("de-queueing event obj9565." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9565").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9565_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj9557
(function(){
	window.obj9565_onTap_runningActionsCount = obj9565_onTap_runningActionsCount + 1;

	var selector = "#obj9557";
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
					window.obj9565_onTap_runningActionsCount = window.obj9565_onTap_runningActionsCount - 1;
if (window.obj9565_onTap_runningActionsCount < 0) {
	window.obj9565_onTap_runningActionsCount = 0;
} else if (window.obj9565_onTap_runningActionsCount == 0) {
	obj9565_onTap_actionGroup1();
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
				window.obj9565_onTap_runningActionsCount = window.obj9565_onTap_runningActionsCount - 1;
if (window.obj9565_onTap_runningActionsCount < 0) {
	window.obj9565_onTap_runningActionsCount = 0;
} else if (window.obj9565_onTap_runningActionsCount == 0) {
	obj9565_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9565_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9565_onTap_activeActionGroupIndex = -1;
		$("#obj9565").trigger("obj9565_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9565) {
				console.warn("de-queueing event obj9565." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9565").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9565_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj9561 
hide_9568();
function hide_9568() {
	var selector = "#obj9561";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9565_onTap_runningActionsCount = obj9565_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9565_onTap_runningActionsCount = window.obj9565_onTap_runningActionsCount - 1;
if (window.obj9565_onTap_runningActionsCount < 0) {
	window.obj9565_onTap_runningActionsCount = 0;
} else if (window.obj9565_onTap_runningActionsCount == 0) {
	obj9565_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9568(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9565_onTap_runningActionsCount = window.obj9565_onTap_runningActionsCount - 1;
if (window.obj9565_onTap_runningActionsCount < 0) {
	window.obj9565_onTap_runningActionsCount = 0;
} else if (window.obj9565_onTap_runningActionsCount == 0) {
	obj9565_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9565_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9565_onTap_activeActionGroupIndex = -1;
		$("#obj9565").trigger("obj9565_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9565) {
				console.warn("de-queueing event obj9565." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9565").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9565_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9569();
function playAudioFile_9569() {
	window.obj9565_onTap_runningActionsCount = obj9565_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9569")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9569");
			$("#obj_audio_playSoundFile9569").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9565_onTap_runningActionsCount = window.obj9565_onTap_runningActionsCount - 1;
if (window.obj9565_onTap_runningActionsCount < 0) {
	window.obj9565_onTap_runningActionsCount = 0;
} else if (window.obj9565_onTap_runningActionsCount == 0) {
	obj9565_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9565_onTap_runningActionsCount = window.obj9565_onTap_runningActionsCount - 1;
if (window.obj9565_onTap_runningActionsCount < 0) {
	window.obj9565_onTap_runningActionsCount = 0;
} else if (window.obj9565_onTap_runningActionsCount == 0) {
	obj9565_onTap_actionGroup3();
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
				window.obj9565_onTap_runningActionsCount = window.obj9565_onTap_runningActionsCount - 1;
if (window.obj9565_onTap_runningActionsCount < 0) {
	window.obj9565_onTap_runningActionsCount = 0;
} else if (window.obj9565_onTap_runningActionsCount == 0) {
	obj9565_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9565_onTap_runningActionsCount = window.obj9565_onTap_runningActionsCount - 1;
if (window.obj9565_onTap_runningActionsCount < 0) {
	window.obj9565_onTap_runningActionsCount = 0;
} else if (window.obj9565_onTap_runningActionsCount == 0) {
	obj9565_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9565_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9565_onTap_activeActionGroupIndex = -1;
		$("#obj9565").trigger("obj9565_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9565) {
				console.warn("de-queueing event obj9565." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9565").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9565_onTap_activeActionGroupIndex = 3;
	






















};
obj9575_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9575_onTap_activeActionGroupIndex = -1;
		$("#obj9575").trigger("obj9575_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9575) {
				console.warn("de-queueing event obj9575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9575_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj9587
(function(){
	window.obj9575_onTap_runningActionsCount = obj9575_onTap_runningActionsCount + 1;

	var selector = "#obj9587";
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
					window.obj9575_onTap_runningActionsCount = window.obj9575_onTap_runningActionsCount - 1;
if (window.obj9575_onTap_runningActionsCount < 0) {
	window.obj9575_onTap_runningActionsCount = 0;
} else if (window.obj9575_onTap_runningActionsCount == 0) {
	obj9575_onTap_actionGroup1();
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
				window.obj9575_onTap_runningActionsCount = window.obj9575_onTap_runningActionsCount - 1;
if (window.obj9575_onTap_runningActionsCount < 0) {
	window.obj9575_onTap_runningActionsCount = 0;
} else if (window.obj9575_onTap_runningActionsCount == 0) {
	obj9575_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9575_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9575_onTap_activeActionGroupIndex = -1;
		$("#obj9575").trigger("obj9575_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9575) {
				console.warn("de-queueing event obj9575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9575_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj9591 
hide_9578();
function hide_9578() {
	var selector = "#obj9591";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9575_onTap_runningActionsCount = obj9575_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9575_onTap_runningActionsCount = window.obj9575_onTap_runningActionsCount - 1;
if (window.obj9575_onTap_runningActionsCount < 0) {
	window.obj9575_onTap_runningActionsCount = 0;
} else if (window.obj9575_onTap_runningActionsCount == 0) {
	obj9575_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9578(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9575_onTap_runningActionsCount = window.obj9575_onTap_runningActionsCount - 1;
if (window.obj9575_onTap_runningActionsCount < 0) {
	window.obj9575_onTap_runningActionsCount = 0;
} else if (window.obj9575_onTap_runningActionsCount == 0) {
	obj9575_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9575_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9575_onTap_activeActionGroupIndex = -1;
		$("#obj9575").trigger("obj9575_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9575) {
				console.warn("de-queueing event obj9575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9575_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9579();
function playAudioFile_9579() {
	window.obj9575_onTap_runningActionsCount = obj9575_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9579")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9579");
			$("#obj_audio_playSoundFile9579").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9575_onTap_runningActionsCount = window.obj9575_onTap_runningActionsCount - 1;
if (window.obj9575_onTap_runningActionsCount < 0) {
	window.obj9575_onTap_runningActionsCount = 0;
} else if (window.obj9575_onTap_runningActionsCount == 0) {
	obj9575_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9575_onTap_runningActionsCount = window.obj9575_onTap_runningActionsCount - 1;
if (window.obj9575_onTap_runningActionsCount < 0) {
	window.obj9575_onTap_runningActionsCount = 0;
} else if (window.obj9575_onTap_runningActionsCount == 0) {
	obj9575_onTap_actionGroup3();
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
				window.obj9575_onTap_runningActionsCount = window.obj9575_onTap_runningActionsCount - 1;
if (window.obj9575_onTap_runningActionsCount < 0) {
	window.obj9575_onTap_runningActionsCount = 0;
} else if (window.obj9575_onTap_runningActionsCount == 0) {
	obj9575_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9575_onTap_runningActionsCount = window.obj9575_onTap_runningActionsCount - 1;
if (window.obj9575_onTap_runningActionsCount < 0) {
	window.obj9575_onTap_runningActionsCount = 0;
} else if (window.obj9575_onTap_runningActionsCount == 0) {
	obj9575_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9575_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9575_onTap_activeActionGroupIndex = -1;
		$("#obj9575").trigger("obj9575_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9575) {
				console.warn("de-queueing event obj9575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9575_onTap_activeActionGroupIndex = 3;
	






















};
obj9580_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9580_onTap_activeActionGroupIndex = -1;
		$("#obj9580").trigger("obj9580_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9580) {
				console.warn("de-queueing event obj9580." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9580").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9580_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj9591
(function(){
	window.obj9580_onTap_runningActionsCount = obj9580_onTap_runningActionsCount + 1;

	var selector = "#obj9591";
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
					window.obj9580_onTap_runningActionsCount = window.obj9580_onTap_runningActionsCount - 1;
if (window.obj9580_onTap_runningActionsCount < 0) {
	window.obj9580_onTap_runningActionsCount = 0;
} else if (window.obj9580_onTap_runningActionsCount == 0) {
	obj9580_onTap_actionGroup1();
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
				window.obj9580_onTap_runningActionsCount = window.obj9580_onTap_runningActionsCount - 1;
if (window.obj9580_onTap_runningActionsCount < 0) {
	window.obj9580_onTap_runningActionsCount = 0;
} else if (window.obj9580_onTap_runningActionsCount == 0) {
	obj9580_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9580_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9580_onTap_activeActionGroupIndex = -1;
		$("#obj9580").trigger("obj9580_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9580) {
				console.warn("de-queueing event obj9580." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9580").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9580_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj9587 
hide_9583();
function hide_9583() {
	var selector = "#obj9587";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9580_onTap_runningActionsCount = obj9580_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9580_onTap_runningActionsCount = window.obj9580_onTap_runningActionsCount - 1;
if (window.obj9580_onTap_runningActionsCount < 0) {
	window.obj9580_onTap_runningActionsCount = 0;
} else if (window.obj9580_onTap_runningActionsCount == 0) {
	obj9580_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9583(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9580_onTap_runningActionsCount = window.obj9580_onTap_runningActionsCount - 1;
if (window.obj9580_onTap_runningActionsCount < 0) {
	window.obj9580_onTap_runningActionsCount = 0;
} else if (window.obj9580_onTap_runningActionsCount == 0) {
	obj9580_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9580_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9580_onTap_activeActionGroupIndex = -1;
		$("#obj9580").trigger("obj9580_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9580) {
				console.warn("de-queueing event obj9580." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9580").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9580_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9584();
function playAudioFile_9584() {
	window.obj9580_onTap_runningActionsCount = obj9580_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9584")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9584");
			$("#obj_audio_playSoundFile9584").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9580_onTap_runningActionsCount = window.obj9580_onTap_runningActionsCount - 1;
if (window.obj9580_onTap_runningActionsCount < 0) {
	window.obj9580_onTap_runningActionsCount = 0;
} else if (window.obj9580_onTap_runningActionsCount == 0) {
	obj9580_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9580_onTap_runningActionsCount = window.obj9580_onTap_runningActionsCount - 1;
if (window.obj9580_onTap_runningActionsCount < 0) {
	window.obj9580_onTap_runningActionsCount = 0;
} else if (window.obj9580_onTap_runningActionsCount == 0) {
	obj9580_onTap_actionGroup3();
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
				window.obj9580_onTap_runningActionsCount = window.obj9580_onTap_runningActionsCount - 1;
if (window.obj9580_onTap_runningActionsCount < 0) {
	window.obj9580_onTap_runningActionsCount = 0;
} else if (window.obj9580_onTap_runningActionsCount == 0) {
	obj9580_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9580_onTap_runningActionsCount = window.obj9580_onTap_runningActionsCount - 1;
if (window.obj9580_onTap_runningActionsCount < 0) {
	window.obj9580_onTap_runningActionsCount = 0;
} else if (window.obj9580_onTap_runningActionsCount == 0) {
	obj9580_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9580_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9580_onTap_activeActionGroupIndex = -1;
		$("#obj9580").trigger("obj9580_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9580) {
				console.warn("de-queueing event obj9580." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9580").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9580_onTap_activeActionGroupIndex = 3;
	






















};
obj9593_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9593_onTap_activeActionGroupIndex = -1;
		$("#obj9593").trigger("obj9593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9593) {
				console.warn("de-queueing event obj9593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9593_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj9605
(function(){
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;

	var selector = "#obj9605";
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
					window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;
if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup1();
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
				window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;
if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9593_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9593_onTap_activeActionGroupIndex = -1;
		$("#obj9593").trigger("obj9593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9593) {
				console.warn("de-queueing event obj9593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9593_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj9609 
hide_9596();
function hide_9596() {
	var selector = "#obj9609";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;
if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9596(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;
if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9593_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9593_onTap_activeActionGroupIndex = -1;
		$("#obj9593").trigger("obj9593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9593) {
				console.warn("de-queueing event obj9593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9593_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9597();
function playAudioFile_9597() {
	window.obj9593_onTap_runningActionsCount = obj9593_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9597")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9597");
			$("#obj_audio_playSoundFile9597").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;
if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;
if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup3();
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
				window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;
if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9593_onTap_runningActionsCount = window.obj9593_onTap_runningActionsCount - 1;
if (window.obj9593_onTap_runningActionsCount < 0) {
	window.obj9593_onTap_runningActionsCount = 0;
} else if (window.obj9593_onTap_runningActionsCount == 0) {
	obj9593_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9593_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9593_onTap_activeActionGroupIndex = -1;
		$("#obj9593").trigger("obj9593_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9593) {
				console.warn("de-queueing event obj9593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9593_onTap_activeActionGroupIndex = 3;
	






















};
obj9598_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9598_onTap_activeActionGroupIndex = -1;
		$("#obj9598").trigger("obj9598_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9598) {
				console.warn("de-queueing event obj9598." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9598").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9598_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj9609
(function(){
	window.obj9598_onTap_runningActionsCount = obj9598_onTap_runningActionsCount + 1;

	var selector = "#obj9609";
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
					window.obj9598_onTap_runningActionsCount = window.obj9598_onTap_runningActionsCount - 1;
if (window.obj9598_onTap_runningActionsCount < 0) {
	window.obj9598_onTap_runningActionsCount = 0;
} else if (window.obj9598_onTap_runningActionsCount == 0) {
	obj9598_onTap_actionGroup1();
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
				window.obj9598_onTap_runningActionsCount = window.obj9598_onTap_runningActionsCount - 1;
if (window.obj9598_onTap_runningActionsCount < 0) {
	window.obj9598_onTap_runningActionsCount = 0;
} else if (window.obj9598_onTap_runningActionsCount == 0) {
	obj9598_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj9598_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9598_onTap_activeActionGroupIndex = -1;
		$("#obj9598").trigger("obj9598_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9598) {
				console.warn("de-queueing event obj9598." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9598").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9598_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj9605 
hide_9601();
function hide_9601() {
	var selector = "#obj9605";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj9598_onTap_runningActionsCount = obj9598_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj9598_onTap_runningActionsCount = window.obj9598_onTap_runningActionsCount - 1;
if (window.obj9598_onTap_runningActionsCount < 0) {
	window.obj9598_onTap_runningActionsCount = 0;
} else if (window.obj9598_onTap_runningActionsCount == 0) {
	obj9598_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_9601(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj9598_onTap_runningActionsCount = window.obj9598_onTap_runningActionsCount - 1;
if (window.obj9598_onTap_runningActionsCount < 0) {
	window.obj9598_onTap_runningActionsCount = 0;
} else if (window.obj9598_onTap_runningActionsCount == 0) {
	obj9598_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj9598_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9598_onTap_activeActionGroupIndex = -1;
		$("#obj9598").trigger("obj9598_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9598) {
				console.warn("de-queueing event obj9598." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9598").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9598_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_9602();
function playAudioFile_9602() {
	window.obj9598_onTap_runningActionsCount = obj9598_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9602")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9602");
			$("#obj_audio_playSoundFile9602").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj9598_onTap_runningActionsCount = window.obj9598_onTap_runningActionsCount - 1;
if (window.obj9598_onTap_runningActionsCount < 0) {
	window.obj9598_onTap_runningActionsCount = 0;
} else if (window.obj9598_onTap_runningActionsCount == 0) {
	obj9598_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj9598_onTap_runningActionsCount = window.obj9598_onTap_runningActionsCount - 1;
if (window.obj9598_onTap_runningActionsCount < 0) {
	window.obj9598_onTap_runningActionsCount = 0;
} else if (window.obj9598_onTap_runningActionsCount == 0) {
	obj9598_onTap_actionGroup3();
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
				window.obj9598_onTap_runningActionsCount = window.obj9598_onTap_runningActionsCount - 1;
if (window.obj9598_onTap_runningActionsCount < 0) {
	window.obj9598_onTap_runningActionsCount = 0;
} else if (window.obj9598_onTap_runningActionsCount == 0) {
	obj9598_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj9598_onTap_runningActionsCount = window.obj9598_onTap_runningActionsCount - 1;
if (window.obj9598_onTap_runningActionsCount < 0) {
	window.obj9598_onTap_runningActionsCount = 0;
} else if (window.obj9598_onTap_runningActionsCount == 0) {
	obj9598_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj9598_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9598_onTap_activeActionGroupIndex = -1;
		$("#obj9598").trigger("obj9598_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9598) {
				console.warn("de-queueing event obj9598." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9598").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9598_onTap_activeActionGroupIndex = 3;
	






















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
	var switchHelperId = "switchHelper220"
	var switchHelperRef = "#switchHelper220"
	var switchId = "220";
	var toSwitchId = "220";
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
	var switchHelperId = "switchHelper221"
	var switchHelperRef = "#switchHelper221"
	var switchId = "221";
	var toSwitchId = "221";
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
	var switchHelperId = "switchHelper222"
	var switchHelperRef = "#switchHelper222"
	var switchId = "222";
	var toSwitchId = "222";
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
	$("#anchor223")[0].click();
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
	$("#anchor224")[0].click();
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
 *   obj9642: Event Touch Down
 *
 */
$("#obj9642").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9642_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9642_onTap is still running");
	return;
}
var obj9642_onTap_runningActionsCount = 0;
var obj9642_onTap_loopCount = 0;
obj9642_onTap_actionGroup0();
});




















/*
 *
 *   obj4440: Event Touch Down
 *
 */
$("#obj4440").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4440_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4440_onTap is still running");
	return;
}
var obj4440_onTap_runningActionsCount = 0;
var obj4440_onTap_loopCount = 0;
obj4440_onTap_actionGroup0();
});








































/*
 *
 *   obj9637: Event Touch Down
 *
 */
$("#obj9637").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9637_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9637_onTap is still running");
	return;
}
var obj9637_onTap_runningActionsCount = 0;
var obj9637_onTap_loopCount = 0;
obj9637_onTap_actionGroup0();
});




















/*
 *
 *   obj4452: Event Touch Down
 *
 */
$("#obj4452").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4452_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4452_onTap is still running");
	return;
}
var obj4452_onTap_runningActionsCount = 0;
var obj4452_onTap_loopCount = 0;
obj4452_onTap_actionGroup0();
});




























































/*
 *
 *   obj9624: Event Touch Down
 *
 */
$("#obj9624").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9624_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9624_onTap is still running");
	return;
}
var obj9624_onTap_runningActionsCount = 0;
var obj9624_onTap_loopCount = 0;
obj9624_onTap_actionGroup0();
});




















/*
 *
 *   obj9570: Event Touch Down
 *
 */
$("#obj9570").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9570_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9570_onTap is still running");
	return;
}
var obj9570_onTap_runningActionsCount = 0;
var obj9570_onTap_loopCount = 0;
obj9570_onTap_actionGroup0();
});








































/*
 *
 *   obj9619: Event Touch Down
 *
 */
$("#obj9619").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9619_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9619_onTap is still running");
	return;
}
var obj9619_onTap_runningActionsCount = 0;
var obj9619_onTap_loopCount = 0;
obj9619_onTap_actionGroup0();
});




















/*
 *
 *   obj9565: Event Touch Down
 *
 */
$("#obj9565").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9565_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9565_onTap is still running");
	return;
}
var obj9565_onTap_runningActionsCount = 0;
var obj9565_onTap_loopCount = 0;
obj9565_onTap_actionGroup0();
});




























































/*
 *
 *   obj9575: Event Touch Down
 *
 */
$("#obj9575").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9575_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9575_onTap is still running");
	return;
}
var obj9575_onTap_runningActionsCount = 0;
var obj9575_onTap_loopCount = 0;
obj9575_onTap_actionGroup0();
});






























/*
 *
 *   obj9580: Event Touch Down
 *
 */
$("#obj9580").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9580_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9580_onTap is still running");
	return;
}
var obj9580_onTap_runningActionsCount = 0;
var obj9580_onTap_loopCount = 0;
obj9580_onTap_actionGroup0();
});








































/*
 *
 *   obj9593: Event Touch Down
 *
 */
$("#obj9593").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9593_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9593_onTap is still running");
	return;
}
var obj9593_onTap_runningActionsCount = 0;
var obj9593_onTap_loopCount = 0;
obj9593_onTap_actionGroup0();
});






























/*
 *
 *   obj9598: Event Touch Down
 *
 */
$("#obj9598").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9598_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9598_onTap is still running");
	return;
}
var obj9598_onTap_runningActionsCount = 0;
var obj9598_onTap_loopCount = 0;
obj9598_onTap_actionGroup0();
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
	
$("#obj4033").trigger('SCEventShow');
$("#obj4436").trigger('SCEventShow');
$("#obj4438").trigger('SCEventShow');
$("#obj4468").trigger('SCEventShow');
$("#obj4472").trigger('SCEventShow');
$("#obj9635").trigger('SCEventShow');
$("#obj9642").trigger('SCEventShow');
$("#obj9543").trigger('SCEventShow');
$("#obj4440").trigger('SCEventShow');
$("#obj9631").trigger('SCEventShow');
$("#obj9637").trigger('SCEventShow');
$("#obj9549").trigger('SCEventShow');
$("#obj4452").trigger('SCEventShow');
$("#obj4470").trigger('SCEventShow');
$("#obj4478").trigger('SCEventShow');
$("#obj9617").trigger('SCEventShow');
$("#obj9624").trigger('SCEventShow');
$("#obj9563").trigger('SCEventShow');
$("#obj9570").trigger('SCEventShow');
$("#obj9613").trigger('SCEventShow');
$("#obj9619").trigger('SCEventShow');
$("#obj9559").trigger('SCEventShow');
$("#obj9565").trigger('SCEventShow');
$("#obj4476").trigger('SCEventShow');
$("#obj9585").trigger('SCEventShow');
$("#obj9575").trigger('SCEventShow');
$("#obj9589").trigger('SCEventShow');
$("#obj9580").trigger('SCEventShow');
$("#obj4474").trigger('SCEventShow');
$("#obj9603").trigger('SCEventShow');
$("#obj9593").trigger('SCEventShow');
$("#obj9607").trigger('SCEventShow');
$("#obj9598").trigger('SCEventShow');
$("#obj4103").trigger('SCEventShow');
$("#obj3937").trigger('SCEventShow');
$("#obj9046").trigger('SCEventShow');
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
});