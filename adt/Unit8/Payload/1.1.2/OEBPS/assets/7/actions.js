pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serofero - Unit 8";
pubcoder.page.id = pubcoder.page.id || 3803;
pubcoder.page.title = pubcoder.page.title || "7";
pubcoder.page.number = pubcoder.page.number || 7;
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
var obj8557_onTap_activeActionGroupIndex = -1;
var obj8557_onTap_runningActionsCount = 0;
var obj8557_onTap_loopCount = 0;
var obj8559_onTap_activeActionGroupIndex = -1;
var obj8559_onTap_runningActionsCount = 0;
var obj8559_onTap_loopCount = 0;
var obj8572_onTap_activeActionGroupIndex = -1;
var obj8572_onTap_runningActionsCount = 0;
var obj8572_onTap_loopCount = 0;
var obj8567_onTap_activeActionGroupIndex = -1;
var obj8567_onTap_runningActionsCount = 0;
var obj8567_onTap_loopCount = 0;
var obj8589_onTap_activeActionGroupIndex = -1;
var obj8589_onTap_runningActionsCount = 0;
var obj8589_onTap_loopCount = 0;
var obj8594_onTap_activeActionGroupIndex = -1;
var obj8594_onTap_runningActionsCount = 0;
var obj8594_onTap_loopCount = 0;
var obj8605_onTap_activeActionGroupIndex = -1;
var obj8605_onTap_runningActionsCount = 0;
var obj8605_onTap_loopCount = 0;
var obj8610_onTap_activeActionGroupIndex = -1;
var obj8610_onTap_runningActionsCount = 0;
var obj8610_onTap_loopCount = 0;
var obj8621_onTap_activeActionGroupIndex = -1;
var obj8621_onTap_runningActionsCount = 0;
var obj8621_onTap_loopCount = 0;
var obj8626_onTap_activeActionGroupIndex = -1;
var obj8626_onTap_runningActionsCount = 0;
var obj8626_onTap_loopCount = 0;
var obj8642_onTap_activeActionGroupIndex = -1;
var obj8642_onTap_runningActionsCount = 0;
var obj8642_onTap_loopCount = 0;
var obj8637_onTap_activeActionGroupIndex = -1;
var obj8637_onTap_runningActionsCount = 0;
var obj8637_onTap_loopCount = 0;
var obj12411_onTap_activeActionGroupIndex = -1;
var obj12411_onTap_runningActionsCount = 0;
var obj12411_onTap_loopCount = 0;
var obj12430_SCEventReadAloudStarted_activeActionGroupIndex = -1;
var obj12430_SCEventReadAloudStarted_runningActionsCount = 0;
var obj12430_SCEventReadAloudStarted_loopCount = 0;
var obj12430_SCEventReadAloudStopped_activeActionGroupIndex = -1;
var obj12430_SCEventReadAloudStopped_runningActionsCount = 0;
var obj12430_SCEventReadAloudStopped_loopCount = 0;
var obj12401_onTap_activeActionGroupIndex = -1;
var obj12401_onTap_runningActionsCount = 0;
var obj12401_onTap_loopCount = 0;
var obj12426_onTap_activeActionGroupIndex = -1;
var obj12426_onTap_runningActionsCount = 0;
var obj12426_onTap_loopCount = 0;
var obj12423_onTap_activeActionGroupIndex = -1;
var obj12423_onTap_runningActionsCount = 0;
var obj12423_onTap_loopCount = 0;
var obj12408_onTap_activeActionGroupIndex = -1;
var obj12408_onTap_runningActionsCount = 0;
var obj12408_onTap_loopCount = 0;
var obj12392_onTap_activeActionGroupIndex = -1;
var obj12392_onTap_runningActionsCount = 0;
var obj12392_onTap_loopCount = 0;
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
		
obj8557_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8557_onTap_activeActionGroupIndex = -1;
		$("#obj8557").trigger("obj8557_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8557) {
				console.warn("de-queueing event obj8557." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8557").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8557_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8550 
hide_8561();
function hide_8561() {
	var selector = "#obj8550";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8557_onTap_runningActionsCount = obj8557_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8557_onTap_runningActionsCount = window.obj8557_onTap_runningActionsCount - 1;
if (window.obj8557_onTap_runningActionsCount < 0) {
	window.obj8557_onTap_runningActionsCount = 0;
} else if (window.obj8557_onTap_runningActionsCount == 0) {
	obj8557_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8561(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8557_onTap_runningActionsCount = window.obj8557_onTap_runningActionsCount - 1;
if (window.obj8557_onTap_runningActionsCount < 0) {
	window.obj8557_onTap_runningActionsCount = 0;
} else if (window.obj8557_onTap_runningActionsCount == 0) {
	obj8557_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj8557_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8557_onTap_activeActionGroupIndex = -1;
		$("#obj8557").trigger("obj8557_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8557) {
				console.warn("de-queueing event obj8557." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8557").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8557_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj8535
(function(){
	window.obj8557_onTap_runningActionsCount = obj8557_onTap_runningActionsCount + 1;

	var selector = "#obj8535";
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
					window.obj8557_onTap_runningActionsCount = window.obj8557_onTap_runningActionsCount - 1;
if (window.obj8557_onTap_runningActionsCount < 0) {
	window.obj8557_onTap_runningActionsCount = 0;
} else if (window.obj8557_onTap_runningActionsCount == 0) {
	obj8557_onTap_actionGroup2();
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
				window.obj8557_onTap_runningActionsCount = window.obj8557_onTap_runningActionsCount - 1;
if (window.obj8557_onTap_runningActionsCount < 0) {
	window.obj8557_onTap_runningActionsCount = 0;
} else if (window.obj8557_onTap_runningActionsCount == 0) {
	obj8557_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj8557_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8557_onTap_activeActionGroupIndex = -1;
		$("#obj8557").trigger("obj8557_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8557) {
				console.warn("de-queueing event obj8557." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8557").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8557_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_8563();
function playAudioFile_8563() {
	window.obj8557_onTap_runningActionsCount = obj8557_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile8563")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8563");
			$("#obj_audio_playSoundFile8563").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8557_onTap_runningActionsCount = window.obj8557_onTap_runningActionsCount - 1;
if (window.obj8557_onTap_runningActionsCount < 0) {
	window.obj8557_onTap_runningActionsCount = 0;
} else if (window.obj8557_onTap_runningActionsCount == 0) {
	obj8557_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8557_onTap_runningActionsCount = window.obj8557_onTap_runningActionsCount - 1;
if (window.obj8557_onTap_runningActionsCount < 0) {
	window.obj8557_onTap_runningActionsCount = 0;
} else if (window.obj8557_onTap_runningActionsCount == 0) {
	obj8557_onTap_actionGroup3();
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
				window.obj8557_onTap_runningActionsCount = window.obj8557_onTap_runningActionsCount - 1;
if (window.obj8557_onTap_runningActionsCount < 0) {
	window.obj8557_onTap_runningActionsCount = 0;
} else if (window.obj8557_onTap_runningActionsCount == 0) {
	obj8557_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj8557_onTap_runningActionsCount = window.obj8557_onTap_runningActionsCount - 1;
if (window.obj8557_onTap_runningActionsCount < 0) {
	window.obj8557_onTap_runningActionsCount = 0;
} else if (window.obj8557_onTap_runningActionsCount == 0) {
	obj8557_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj8557_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8557_onTap_activeActionGroupIndex = -1;
		$("#obj8557").trigger("obj8557_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8557) {
				console.warn("de-queueing event obj8557." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8557").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8557_onTap_activeActionGroupIndex = 3;
	






















};
obj8559_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8559_onTap_activeActionGroupIndex = -1;
		$("#obj8559").trigger("obj8559_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8559) {
				console.warn("de-queueing event obj8559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8559_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8535 
hide_8564();
function hide_8564() {
	var selector = "#obj8535";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8559_onTap_runningActionsCount = obj8559_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8559_onTap_runningActionsCount = window.obj8559_onTap_runningActionsCount - 1;
if (window.obj8559_onTap_runningActionsCount < 0) {
	window.obj8559_onTap_runningActionsCount = 0;
} else if (window.obj8559_onTap_runningActionsCount == 0) {
	obj8559_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8564(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8559_onTap_runningActionsCount = window.obj8559_onTap_runningActionsCount - 1;
if (window.obj8559_onTap_runningActionsCount < 0) {
	window.obj8559_onTap_runningActionsCount = 0;
} else if (window.obj8559_onTap_runningActionsCount == 0) {
	obj8559_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj8559_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8559_onTap_activeActionGroupIndex = -1;
		$("#obj8559").trigger("obj8559_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8559) {
				console.warn("de-queueing event obj8559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8559_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj8550
(function(){
	window.obj8559_onTap_runningActionsCount = obj8559_onTap_runningActionsCount + 1;

	var selector = "#obj8550";
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
					window.obj8559_onTap_runningActionsCount = window.obj8559_onTap_runningActionsCount - 1;
if (window.obj8559_onTap_runningActionsCount < 0) {
	window.obj8559_onTap_runningActionsCount = 0;
} else if (window.obj8559_onTap_runningActionsCount == 0) {
	obj8559_onTap_actionGroup2();
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
				window.obj8559_onTap_runningActionsCount = window.obj8559_onTap_runningActionsCount - 1;
if (window.obj8559_onTap_runningActionsCount < 0) {
	window.obj8559_onTap_runningActionsCount = 0;
} else if (window.obj8559_onTap_runningActionsCount == 0) {
	obj8559_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj8559_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8559_onTap_activeActionGroupIndex = -1;
		$("#obj8559").trigger("obj8559_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8559) {
				console.warn("de-queueing event obj8559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8559_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_8566();
function playAudioFile_8566() {
	window.obj8559_onTap_runningActionsCount = obj8559_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile8566")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8566");
			$("#obj_audio_playSoundFile8566").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8559_onTap_runningActionsCount = window.obj8559_onTap_runningActionsCount - 1;
if (window.obj8559_onTap_runningActionsCount < 0) {
	window.obj8559_onTap_runningActionsCount = 0;
} else if (window.obj8559_onTap_runningActionsCount == 0) {
	obj8559_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8559_onTap_runningActionsCount = window.obj8559_onTap_runningActionsCount - 1;
if (window.obj8559_onTap_runningActionsCount < 0) {
	window.obj8559_onTap_runningActionsCount = 0;
} else if (window.obj8559_onTap_runningActionsCount == 0) {
	obj8559_onTap_actionGroup3();
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
				window.obj8559_onTap_runningActionsCount = window.obj8559_onTap_runningActionsCount - 1;
if (window.obj8559_onTap_runningActionsCount < 0) {
	window.obj8559_onTap_runningActionsCount = 0;
} else if (window.obj8559_onTap_runningActionsCount == 0) {
	obj8559_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj8559_onTap_runningActionsCount = window.obj8559_onTap_runningActionsCount - 1;
if (window.obj8559_onTap_runningActionsCount < 0) {
	window.obj8559_onTap_runningActionsCount = 0;
} else if (window.obj8559_onTap_runningActionsCount == 0) {
	obj8559_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj8559_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8559_onTap_activeActionGroupIndex = -1;
		$("#obj8559").trigger("obj8559_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8559) {
				console.warn("de-queueing event obj8559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8559_onTap_activeActionGroupIndex = 3;
	






















};
obj8572_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8572_onTap_activeActionGroupIndex = -1;
		$("#obj8572").trigger("obj8572_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8572) {
				console.warn("de-queueing event obj8572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8572_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8580 
hide_8574();
function hide_8574() {
	var selector = "#obj8580";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8572_onTap_runningActionsCount = obj8572_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8572_onTap_runningActionsCount = window.obj8572_onTap_runningActionsCount - 1;
if (window.obj8572_onTap_runningActionsCount < 0) {
	window.obj8572_onTap_runningActionsCount = 0;
} else if (window.obj8572_onTap_runningActionsCount == 0) {
	obj8572_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8574(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8572_onTap_runningActionsCount = window.obj8572_onTap_runningActionsCount - 1;
if (window.obj8572_onTap_runningActionsCount < 0) {
	window.obj8572_onTap_runningActionsCount = 0;
} else if (window.obj8572_onTap_runningActionsCount == 0) {
	obj8572_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj8572_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8572_onTap_activeActionGroupIndex = -1;
		$("#obj8572").trigger("obj8572_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8572) {
				console.warn("de-queueing event obj8572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8572_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj8577
(function(){
	window.obj8572_onTap_runningActionsCount = obj8572_onTap_runningActionsCount + 1;

	var selector = "#obj8577";
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
					window.obj8572_onTap_runningActionsCount = window.obj8572_onTap_runningActionsCount - 1;
if (window.obj8572_onTap_runningActionsCount < 0) {
	window.obj8572_onTap_runningActionsCount = 0;
} else if (window.obj8572_onTap_runningActionsCount == 0) {
	obj8572_onTap_actionGroup2();
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
				window.obj8572_onTap_runningActionsCount = window.obj8572_onTap_runningActionsCount - 1;
if (window.obj8572_onTap_runningActionsCount < 0) {
	window.obj8572_onTap_runningActionsCount = 0;
} else if (window.obj8572_onTap_runningActionsCount == 0) {
	obj8572_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj8572_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8572_onTap_activeActionGroupIndex = -1;
		$("#obj8572").trigger("obj8572_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8572) {
				console.warn("de-queueing event obj8572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8572_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_8576();
function playAudioFile_8576() {
	window.obj8572_onTap_runningActionsCount = obj8572_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile8576")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8576");
			$("#obj_audio_playSoundFile8576").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8572_onTap_runningActionsCount = window.obj8572_onTap_runningActionsCount - 1;
if (window.obj8572_onTap_runningActionsCount < 0) {
	window.obj8572_onTap_runningActionsCount = 0;
} else if (window.obj8572_onTap_runningActionsCount == 0) {
	obj8572_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8572_onTap_runningActionsCount = window.obj8572_onTap_runningActionsCount - 1;
if (window.obj8572_onTap_runningActionsCount < 0) {
	window.obj8572_onTap_runningActionsCount = 0;
} else if (window.obj8572_onTap_runningActionsCount == 0) {
	obj8572_onTap_actionGroup3();
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
				window.obj8572_onTap_runningActionsCount = window.obj8572_onTap_runningActionsCount - 1;
if (window.obj8572_onTap_runningActionsCount < 0) {
	window.obj8572_onTap_runningActionsCount = 0;
} else if (window.obj8572_onTap_runningActionsCount == 0) {
	obj8572_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj8572_onTap_runningActionsCount = window.obj8572_onTap_runningActionsCount - 1;
if (window.obj8572_onTap_runningActionsCount < 0) {
	window.obj8572_onTap_runningActionsCount = 0;
} else if (window.obj8572_onTap_runningActionsCount == 0) {
	obj8572_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj8572_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8572_onTap_activeActionGroupIndex = -1;
		$("#obj8572").trigger("obj8572_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8572) {
				console.warn("de-queueing event obj8572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8572_onTap_activeActionGroupIndex = 3;
	






















};
obj8567_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8567_onTap_activeActionGroupIndex = -1;
		$("#obj8567").trigger("obj8567_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8567) {
				console.warn("de-queueing event obj8567." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8567").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8567_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8577 
hide_8569();
function hide_8569() {
	var selector = "#obj8577";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8567_onTap_runningActionsCount = obj8567_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8567_onTap_runningActionsCount = window.obj8567_onTap_runningActionsCount - 1;
if (window.obj8567_onTap_runningActionsCount < 0) {
	window.obj8567_onTap_runningActionsCount = 0;
} else if (window.obj8567_onTap_runningActionsCount == 0) {
	obj8567_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8569(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8567_onTap_runningActionsCount = window.obj8567_onTap_runningActionsCount - 1;
if (window.obj8567_onTap_runningActionsCount < 0) {
	window.obj8567_onTap_runningActionsCount = 0;
} else if (window.obj8567_onTap_runningActionsCount == 0) {
	obj8567_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj8567_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8567_onTap_activeActionGroupIndex = -1;
		$("#obj8567").trigger("obj8567_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8567) {
				console.warn("de-queueing event obj8567." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8567").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8567_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj8580
(function(){
	window.obj8567_onTap_runningActionsCount = obj8567_onTap_runningActionsCount + 1;

	var selector = "#obj8580";
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
					window.obj8567_onTap_runningActionsCount = window.obj8567_onTap_runningActionsCount - 1;
if (window.obj8567_onTap_runningActionsCount < 0) {
	window.obj8567_onTap_runningActionsCount = 0;
} else if (window.obj8567_onTap_runningActionsCount == 0) {
	obj8567_onTap_actionGroup2();
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
				window.obj8567_onTap_runningActionsCount = window.obj8567_onTap_runningActionsCount - 1;
if (window.obj8567_onTap_runningActionsCount < 0) {
	window.obj8567_onTap_runningActionsCount = 0;
} else if (window.obj8567_onTap_runningActionsCount == 0) {
	obj8567_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj8567_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8567_onTap_activeActionGroupIndex = -1;
		$("#obj8567").trigger("obj8567_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8567) {
				console.warn("de-queueing event obj8567." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8567").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8567_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_8571();
function playAudioFile_8571() {
	window.obj8567_onTap_runningActionsCount = obj8567_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile8571")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8571");
			$("#obj_audio_playSoundFile8571").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8567_onTap_runningActionsCount = window.obj8567_onTap_runningActionsCount - 1;
if (window.obj8567_onTap_runningActionsCount < 0) {
	window.obj8567_onTap_runningActionsCount = 0;
} else if (window.obj8567_onTap_runningActionsCount == 0) {
	obj8567_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8567_onTap_runningActionsCount = window.obj8567_onTap_runningActionsCount - 1;
if (window.obj8567_onTap_runningActionsCount < 0) {
	window.obj8567_onTap_runningActionsCount = 0;
} else if (window.obj8567_onTap_runningActionsCount == 0) {
	obj8567_onTap_actionGroup3();
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
				window.obj8567_onTap_runningActionsCount = window.obj8567_onTap_runningActionsCount - 1;
if (window.obj8567_onTap_runningActionsCount < 0) {
	window.obj8567_onTap_runningActionsCount = 0;
} else if (window.obj8567_onTap_runningActionsCount == 0) {
	obj8567_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj8567_onTap_runningActionsCount = window.obj8567_onTap_runningActionsCount - 1;
if (window.obj8567_onTap_runningActionsCount < 0) {
	window.obj8567_onTap_runningActionsCount = 0;
} else if (window.obj8567_onTap_runningActionsCount == 0) {
	obj8567_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj8567_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8567_onTap_activeActionGroupIndex = -1;
		$("#obj8567").trigger("obj8567_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8567) {
				console.warn("de-queueing event obj8567." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8567").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8567_onTap_activeActionGroupIndex = 3;
	






















};
obj8589_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8589_onTap_activeActionGroupIndex = -1;
		$("#obj8589").trigger("obj8589_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8589) {
				console.warn("de-queueing event obj8589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8589_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8583 
hide_8591();
function hide_8591() {
	var selector = "#obj8583";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8589_onTap_runningActionsCount = obj8589_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8589_onTap_runningActionsCount = window.obj8589_onTap_runningActionsCount - 1;
if (window.obj8589_onTap_runningActionsCount < 0) {
	window.obj8589_onTap_runningActionsCount = 0;
} else if (window.obj8589_onTap_runningActionsCount == 0) {
	obj8589_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8591(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8589_onTap_runningActionsCount = window.obj8589_onTap_runningActionsCount - 1;
if (window.obj8589_onTap_runningActionsCount < 0) {
	window.obj8589_onTap_runningActionsCount = 0;
} else if (window.obj8589_onTap_runningActionsCount == 0) {
	obj8589_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj8589_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8589_onTap_activeActionGroupIndex = -1;
		$("#obj8589").trigger("obj8589_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8589) {
				console.warn("de-queueing event obj8589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8589_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj8586
(function(){
	window.obj8589_onTap_runningActionsCount = obj8589_onTap_runningActionsCount + 1;

	var selector = "#obj8586";
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
					window.obj8589_onTap_runningActionsCount = window.obj8589_onTap_runningActionsCount - 1;
if (window.obj8589_onTap_runningActionsCount < 0) {
	window.obj8589_onTap_runningActionsCount = 0;
} else if (window.obj8589_onTap_runningActionsCount == 0) {
	obj8589_onTap_actionGroup2();
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
				window.obj8589_onTap_runningActionsCount = window.obj8589_onTap_runningActionsCount - 1;
if (window.obj8589_onTap_runningActionsCount < 0) {
	window.obj8589_onTap_runningActionsCount = 0;
} else if (window.obj8589_onTap_runningActionsCount == 0) {
	obj8589_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj8589_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8589_onTap_activeActionGroupIndex = -1;
		$("#obj8589").trigger("obj8589_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8589) {
				console.warn("de-queueing event obj8589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8589_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_8593();
function playAudioFile_8593() {
	window.obj8589_onTap_runningActionsCount = obj8589_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile8593")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8593");
			$("#obj_audio_playSoundFile8593").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8589_onTap_runningActionsCount = window.obj8589_onTap_runningActionsCount - 1;
if (window.obj8589_onTap_runningActionsCount < 0) {
	window.obj8589_onTap_runningActionsCount = 0;
} else if (window.obj8589_onTap_runningActionsCount == 0) {
	obj8589_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8589_onTap_runningActionsCount = window.obj8589_onTap_runningActionsCount - 1;
if (window.obj8589_onTap_runningActionsCount < 0) {
	window.obj8589_onTap_runningActionsCount = 0;
} else if (window.obj8589_onTap_runningActionsCount == 0) {
	obj8589_onTap_actionGroup3();
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
				window.obj8589_onTap_runningActionsCount = window.obj8589_onTap_runningActionsCount - 1;
if (window.obj8589_onTap_runningActionsCount < 0) {
	window.obj8589_onTap_runningActionsCount = 0;
} else if (window.obj8589_onTap_runningActionsCount == 0) {
	obj8589_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj8589_onTap_runningActionsCount = window.obj8589_onTap_runningActionsCount - 1;
if (window.obj8589_onTap_runningActionsCount < 0) {
	window.obj8589_onTap_runningActionsCount = 0;
} else if (window.obj8589_onTap_runningActionsCount == 0) {
	obj8589_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj8589_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8589_onTap_activeActionGroupIndex = -1;
		$("#obj8589").trigger("obj8589_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8589) {
				console.warn("de-queueing event obj8589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8589_onTap_activeActionGroupIndex = 3;
	






















};
obj8594_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8594_onTap_activeActionGroupIndex = -1;
		$("#obj8594").trigger("obj8594_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8594) {
				console.warn("de-queueing event obj8594." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8594").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8594_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8586 
hide_8596();
function hide_8596() {
	var selector = "#obj8586";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8594_onTap_runningActionsCount = obj8594_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8594_onTap_runningActionsCount = window.obj8594_onTap_runningActionsCount - 1;
if (window.obj8594_onTap_runningActionsCount < 0) {
	window.obj8594_onTap_runningActionsCount = 0;
} else if (window.obj8594_onTap_runningActionsCount == 0) {
	obj8594_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8596(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8594_onTap_runningActionsCount = window.obj8594_onTap_runningActionsCount - 1;
if (window.obj8594_onTap_runningActionsCount < 0) {
	window.obj8594_onTap_runningActionsCount = 0;
} else if (window.obj8594_onTap_runningActionsCount == 0) {
	obj8594_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj8594_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8594_onTap_activeActionGroupIndex = -1;
		$("#obj8594").trigger("obj8594_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8594) {
				console.warn("de-queueing event obj8594." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8594").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8594_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj8583
(function(){
	window.obj8594_onTap_runningActionsCount = obj8594_onTap_runningActionsCount + 1;

	var selector = "#obj8583";
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
					window.obj8594_onTap_runningActionsCount = window.obj8594_onTap_runningActionsCount - 1;
if (window.obj8594_onTap_runningActionsCount < 0) {
	window.obj8594_onTap_runningActionsCount = 0;
} else if (window.obj8594_onTap_runningActionsCount == 0) {
	obj8594_onTap_actionGroup2();
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
				window.obj8594_onTap_runningActionsCount = window.obj8594_onTap_runningActionsCount - 1;
if (window.obj8594_onTap_runningActionsCount < 0) {
	window.obj8594_onTap_runningActionsCount = 0;
} else if (window.obj8594_onTap_runningActionsCount == 0) {
	obj8594_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj8594_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8594_onTap_activeActionGroupIndex = -1;
		$("#obj8594").trigger("obj8594_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8594) {
				console.warn("de-queueing event obj8594." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8594").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8594_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_8598();
function playAudioFile_8598() {
	window.obj8594_onTap_runningActionsCount = obj8594_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile8598")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8598");
			$("#obj_audio_playSoundFile8598").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8594_onTap_runningActionsCount = window.obj8594_onTap_runningActionsCount - 1;
if (window.obj8594_onTap_runningActionsCount < 0) {
	window.obj8594_onTap_runningActionsCount = 0;
} else if (window.obj8594_onTap_runningActionsCount == 0) {
	obj8594_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8594_onTap_runningActionsCount = window.obj8594_onTap_runningActionsCount - 1;
if (window.obj8594_onTap_runningActionsCount < 0) {
	window.obj8594_onTap_runningActionsCount = 0;
} else if (window.obj8594_onTap_runningActionsCount == 0) {
	obj8594_onTap_actionGroup3();
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
				window.obj8594_onTap_runningActionsCount = window.obj8594_onTap_runningActionsCount - 1;
if (window.obj8594_onTap_runningActionsCount < 0) {
	window.obj8594_onTap_runningActionsCount = 0;
} else if (window.obj8594_onTap_runningActionsCount == 0) {
	obj8594_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj8594_onTap_runningActionsCount = window.obj8594_onTap_runningActionsCount - 1;
if (window.obj8594_onTap_runningActionsCount < 0) {
	window.obj8594_onTap_runningActionsCount = 0;
} else if (window.obj8594_onTap_runningActionsCount == 0) {
	obj8594_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj8594_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8594_onTap_activeActionGroupIndex = -1;
		$("#obj8594").trigger("obj8594_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8594) {
				console.warn("de-queueing event obj8594." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8594").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8594_onTap_activeActionGroupIndex = 3;
	






















};
obj8605_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8605_onTap_activeActionGroupIndex = -1;
		$("#obj8605").trigger("obj8605_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8605) {
				console.warn("de-queueing event obj8605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8605_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8599 
hide_8607();
function hide_8607() {
	var selector = "#obj8599";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8605_onTap_runningActionsCount = obj8605_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8605_onTap_runningActionsCount = window.obj8605_onTap_runningActionsCount - 1;
if (window.obj8605_onTap_runningActionsCount < 0) {
	window.obj8605_onTap_runningActionsCount = 0;
} else if (window.obj8605_onTap_runningActionsCount == 0) {
	obj8605_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8607(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8605_onTap_runningActionsCount = window.obj8605_onTap_runningActionsCount - 1;
if (window.obj8605_onTap_runningActionsCount < 0) {
	window.obj8605_onTap_runningActionsCount = 0;
} else if (window.obj8605_onTap_runningActionsCount == 0) {
	obj8605_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj8605_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8605_onTap_activeActionGroupIndex = -1;
		$("#obj8605").trigger("obj8605_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8605) {
				console.warn("de-queueing event obj8605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8605_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj8602
(function(){
	window.obj8605_onTap_runningActionsCount = obj8605_onTap_runningActionsCount + 1;

	var selector = "#obj8602";
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
					window.obj8605_onTap_runningActionsCount = window.obj8605_onTap_runningActionsCount - 1;
if (window.obj8605_onTap_runningActionsCount < 0) {
	window.obj8605_onTap_runningActionsCount = 0;
} else if (window.obj8605_onTap_runningActionsCount == 0) {
	obj8605_onTap_actionGroup2();
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
				window.obj8605_onTap_runningActionsCount = window.obj8605_onTap_runningActionsCount - 1;
if (window.obj8605_onTap_runningActionsCount < 0) {
	window.obj8605_onTap_runningActionsCount = 0;
} else if (window.obj8605_onTap_runningActionsCount == 0) {
	obj8605_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj8605_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8605_onTap_activeActionGroupIndex = -1;
		$("#obj8605").trigger("obj8605_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8605) {
				console.warn("de-queueing event obj8605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8605_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_8609();
function playAudioFile_8609() {
	window.obj8605_onTap_runningActionsCount = obj8605_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile8609")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8609");
			$("#obj_audio_playSoundFile8609").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8605_onTap_runningActionsCount = window.obj8605_onTap_runningActionsCount - 1;
if (window.obj8605_onTap_runningActionsCount < 0) {
	window.obj8605_onTap_runningActionsCount = 0;
} else if (window.obj8605_onTap_runningActionsCount == 0) {
	obj8605_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8605_onTap_runningActionsCount = window.obj8605_onTap_runningActionsCount - 1;
if (window.obj8605_onTap_runningActionsCount < 0) {
	window.obj8605_onTap_runningActionsCount = 0;
} else if (window.obj8605_onTap_runningActionsCount == 0) {
	obj8605_onTap_actionGroup3();
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
				window.obj8605_onTap_runningActionsCount = window.obj8605_onTap_runningActionsCount - 1;
if (window.obj8605_onTap_runningActionsCount < 0) {
	window.obj8605_onTap_runningActionsCount = 0;
} else if (window.obj8605_onTap_runningActionsCount == 0) {
	obj8605_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj8605_onTap_runningActionsCount = window.obj8605_onTap_runningActionsCount - 1;
if (window.obj8605_onTap_runningActionsCount < 0) {
	window.obj8605_onTap_runningActionsCount = 0;
} else if (window.obj8605_onTap_runningActionsCount == 0) {
	obj8605_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj8605_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8605_onTap_activeActionGroupIndex = -1;
		$("#obj8605").trigger("obj8605_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8605) {
				console.warn("de-queueing event obj8605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8605_onTap_activeActionGroupIndex = 3;
	






















};
obj8610_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8610_onTap_activeActionGroupIndex = -1;
		$("#obj8610").trigger("obj8610_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8610) {
				console.warn("de-queueing event obj8610." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8610").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8610_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8602 
hide_8612();
function hide_8612() {
	var selector = "#obj8602";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8610_onTap_runningActionsCount = obj8610_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8610_onTap_runningActionsCount = window.obj8610_onTap_runningActionsCount - 1;
if (window.obj8610_onTap_runningActionsCount < 0) {
	window.obj8610_onTap_runningActionsCount = 0;
} else if (window.obj8610_onTap_runningActionsCount == 0) {
	obj8610_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8612(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8610_onTap_runningActionsCount = window.obj8610_onTap_runningActionsCount - 1;
if (window.obj8610_onTap_runningActionsCount < 0) {
	window.obj8610_onTap_runningActionsCount = 0;
} else if (window.obj8610_onTap_runningActionsCount == 0) {
	obj8610_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj8610_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8610_onTap_activeActionGroupIndex = -1;
		$("#obj8610").trigger("obj8610_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8610) {
				console.warn("de-queueing event obj8610." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8610").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8610_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj8599
(function(){
	window.obj8610_onTap_runningActionsCount = obj8610_onTap_runningActionsCount + 1;

	var selector = "#obj8599";
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
					window.obj8610_onTap_runningActionsCount = window.obj8610_onTap_runningActionsCount - 1;
if (window.obj8610_onTap_runningActionsCount < 0) {
	window.obj8610_onTap_runningActionsCount = 0;
} else if (window.obj8610_onTap_runningActionsCount == 0) {
	obj8610_onTap_actionGroup2();
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
				window.obj8610_onTap_runningActionsCount = window.obj8610_onTap_runningActionsCount - 1;
if (window.obj8610_onTap_runningActionsCount < 0) {
	window.obj8610_onTap_runningActionsCount = 0;
} else if (window.obj8610_onTap_runningActionsCount == 0) {
	obj8610_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj8610_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8610_onTap_activeActionGroupIndex = -1;
		$("#obj8610").trigger("obj8610_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8610) {
				console.warn("de-queueing event obj8610." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8610").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8610_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_8614();
function playAudioFile_8614() {
	window.obj8610_onTap_runningActionsCount = obj8610_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile8614")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8614");
			$("#obj_audio_playSoundFile8614").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8610_onTap_runningActionsCount = window.obj8610_onTap_runningActionsCount - 1;
if (window.obj8610_onTap_runningActionsCount < 0) {
	window.obj8610_onTap_runningActionsCount = 0;
} else if (window.obj8610_onTap_runningActionsCount == 0) {
	obj8610_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8610_onTap_runningActionsCount = window.obj8610_onTap_runningActionsCount - 1;
if (window.obj8610_onTap_runningActionsCount < 0) {
	window.obj8610_onTap_runningActionsCount = 0;
} else if (window.obj8610_onTap_runningActionsCount == 0) {
	obj8610_onTap_actionGroup3();
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
				window.obj8610_onTap_runningActionsCount = window.obj8610_onTap_runningActionsCount - 1;
if (window.obj8610_onTap_runningActionsCount < 0) {
	window.obj8610_onTap_runningActionsCount = 0;
} else if (window.obj8610_onTap_runningActionsCount == 0) {
	obj8610_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj8610_onTap_runningActionsCount = window.obj8610_onTap_runningActionsCount - 1;
if (window.obj8610_onTap_runningActionsCount < 0) {
	window.obj8610_onTap_runningActionsCount = 0;
} else if (window.obj8610_onTap_runningActionsCount == 0) {
	obj8610_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj8610_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8610_onTap_activeActionGroupIndex = -1;
		$("#obj8610").trigger("obj8610_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8610) {
				console.warn("de-queueing event obj8610." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8610").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8610_onTap_activeActionGroupIndex = 3;
	






















};
obj8621_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8621_onTap_activeActionGroupIndex = -1;
		$("#obj8621").trigger("obj8621_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8621) {
				console.warn("de-queueing event obj8621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8621_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8615 
hide_8623();
function hide_8623() {
	var selector = "#obj8615";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8621_onTap_runningActionsCount = obj8621_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8621_onTap_runningActionsCount = window.obj8621_onTap_runningActionsCount - 1;
if (window.obj8621_onTap_runningActionsCount < 0) {
	window.obj8621_onTap_runningActionsCount = 0;
} else if (window.obj8621_onTap_runningActionsCount == 0) {
	obj8621_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8623(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8621_onTap_runningActionsCount = window.obj8621_onTap_runningActionsCount - 1;
if (window.obj8621_onTap_runningActionsCount < 0) {
	window.obj8621_onTap_runningActionsCount = 0;
} else if (window.obj8621_onTap_runningActionsCount == 0) {
	obj8621_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj8621_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8621_onTap_activeActionGroupIndex = -1;
		$("#obj8621").trigger("obj8621_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8621) {
				console.warn("de-queueing event obj8621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8621_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj8618
(function(){
	window.obj8621_onTap_runningActionsCount = obj8621_onTap_runningActionsCount + 1;

	var selector = "#obj8618";
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
					window.obj8621_onTap_runningActionsCount = window.obj8621_onTap_runningActionsCount - 1;
if (window.obj8621_onTap_runningActionsCount < 0) {
	window.obj8621_onTap_runningActionsCount = 0;
} else if (window.obj8621_onTap_runningActionsCount == 0) {
	obj8621_onTap_actionGroup2();
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
				window.obj8621_onTap_runningActionsCount = window.obj8621_onTap_runningActionsCount - 1;
if (window.obj8621_onTap_runningActionsCount < 0) {
	window.obj8621_onTap_runningActionsCount = 0;
} else if (window.obj8621_onTap_runningActionsCount == 0) {
	obj8621_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj8621_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8621_onTap_activeActionGroupIndex = -1;
		$("#obj8621").trigger("obj8621_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8621) {
				console.warn("de-queueing event obj8621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8621_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_8625();
function playAudioFile_8625() {
	window.obj8621_onTap_runningActionsCount = obj8621_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile8625")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8625");
			$("#obj_audio_playSoundFile8625").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8621_onTap_runningActionsCount = window.obj8621_onTap_runningActionsCount - 1;
if (window.obj8621_onTap_runningActionsCount < 0) {
	window.obj8621_onTap_runningActionsCount = 0;
} else if (window.obj8621_onTap_runningActionsCount == 0) {
	obj8621_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8621_onTap_runningActionsCount = window.obj8621_onTap_runningActionsCount - 1;
if (window.obj8621_onTap_runningActionsCount < 0) {
	window.obj8621_onTap_runningActionsCount = 0;
} else if (window.obj8621_onTap_runningActionsCount == 0) {
	obj8621_onTap_actionGroup3();
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
				window.obj8621_onTap_runningActionsCount = window.obj8621_onTap_runningActionsCount - 1;
if (window.obj8621_onTap_runningActionsCount < 0) {
	window.obj8621_onTap_runningActionsCount = 0;
} else if (window.obj8621_onTap_runningActionsCount == 0) {
	obj8621_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj8621_onTap_runningActionsCount = window.obj8621_onTap_runningActionsCount - 1;
if (window.obj8621_onTap_runningActionsCount < 0) {
	window.obj8621_onTap_runningActionsCount = 0;
} else if (window.obj8621_onTap_runningActionsCount == 0) {
	obj8621_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj8621_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8621_onTap_activeActionGroupIndex = -1;
		$("#obj8621").trigger("obj8621_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8621) {
				console.warn("de-queueing event obj8621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8621_onTap_activeActionGroupIndex = 3;
	






















};
obj8626_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8626_onTap_activeActionGroupIndex = -1;
		$("#obj8626").trigger("obj8626_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8626) {
				console.warn("de-queueing event obj8626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8626_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8618 
hide_8628();
function hide_8628() {
	var selector = "#obj8618";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8626_onTap_runningActionsCount = obj8626_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8626_onTap_runningActionsCount = window.obj8626_onTap_runningActionsCount - 1;
if (window.obj8626_onTap_runningActionsCount < 0) {
	window.obj8626_onTap_runningActionsCount = 0;
} else if (window.obj8626_onTap_runningActionsCount == 0) {
	obj8626_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8628(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8626_onTap_runningActionsCount = window.obj8626_onTap_runningActionsCount - 1;
if (window.obj8626_onTap_runningActionsCount < 0) {
	window.obj8626_onTap_runningActionsCount = 0;
} else if (window.obj8626_onTap_runningActionsCount == 0) {
	obj8626_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj8626_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8626_onTap_activeActionGroupIndex = -1;
		$("#obj8626").trigger("obj8626_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8626) {
				console.warn("de-queueing event obj8626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8626_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj8615
(function(){
	window.obj8626_onTap_runningActionsCount = obj8626_onTap_runningActionsCount + 1;

	var selector = "#obj8615";
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
					window.obj8626_onTap_runningActionsCount = window.obj8626_onTap_runningActionsCount - 1;
if (window.obj8626_onTap_runningActionsCount < 0) {
	window.obj8626_onTap_runningActionsCount = 0;
} else if (window.obj8626_onTap_runningActionsCount == 0) {
	obj8626_onTap_actionGroup2();
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
				window.obj8626_onTap_runningActionsCount = window.obj8626_onTap_runningActionsCount - 1;
if (window.obj8626_onTap_runningActionsCount < 0) {
	window.obj8626_onTap_runningActionsCount = 0;
} else if (window.obj8626_onTap_runningActionsCount == 0) {
	obj8626_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj8626_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8626_onTap_activeActionGroupIndex = -1;
		$("#obj8626").trigger("obj8626_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8626) {
				console.warn("de-queueing event obj8626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8626_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_8630();
function playAudioFile_8630() {
	window.obj8626_onTap_runningActionsCount = obj8626_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile8630")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8630");
			$("#obj_audio_playSoundFile8630").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8626_onTap_runningActionsCount = window.obj8626_onTap_runningActionsCount - 1;
if (window.obj8626_onTap_runningActionsCount < 0) {
	window.obj8626_onTap_runningActionsCount = 0;
} else if (window.obj8626_onTap_runningActionsCount == 0) {
	obj8626_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8626_onTap_runningActionsCount = window.obj8626_onTap_runningActionsCount - 1;
if (window.obj8626_onTap_runningActionsCount < 0) {
	window.obj8626_onTap_runningActionsCount = 0;
} else if (window.obj8626_onTap_runningActionsCount == 0) {
	obj8626_onTap_actionGroup3();
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
				window.obj8626_onTap_runningActionsCount = window.obj8626_onTap_runningActionsCount - 1;
if (window.obj8626_onTap_runningActionsCount < 0) {
	window.obj8626_onTap_runningActionsCount = 0;
} else if (window.obj8626_onTap_runningActionsCount == 0) {
	obj8626_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj8626_onTap_runningActionsCount = window.obj8626_onTap_runningActionsCount - 1;
if (window.obj8626_onTap_runningActionsCount < 0) {
	window.obj8626_onTap_runningActionsCount = 0;
} else if (window.obj8626_onTap_runningActionsCount == 0) {
	obj8626_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj8626_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8626_onTap_activeActionGroupIndex = -1;
		$("#obj8626").trigger("obj8626_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8626) {
				console.warn("de-queueing event obj8626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8626_onTap_activeActionGroupIndex = 3;
	






















};
obj8642_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8642_onTap_activeActionGroupIndex = -1;
		$("#obj8642").trigger("obj8642_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8642) {
				console.warn("de-queueing event obj8642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8642_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8634 
hide_8644();
function hide_8644() {
	var selector = "#obj8634";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8642_onTap_runningActionsCount = obj8642_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8642_onTap_runningActionsCount = window.obj8642_onTap_runningActionsCount - 1;
if (window.obj8642_onTap_runningActionsCount < 0) {
	window.obj8642_onTap_runningActionsCount = 0;
} else if (window.obj8642_onTap_runningActionsCount == 0) {
	obj8642_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8644(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8642_onTap_runningActionsCount = window.obj8642_onTap_runningActionsCount - 1;
if (window.obj8642_onTap_runningActionsCount < 0) {
	window.obj8642_onTap_runningActionsCount = 0;
} else if (window.obj8642_onTap_runningActionsCount == 0) {
	obj8642_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj8642_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8642_onTap_activeActionGroupIndex = -1;
		$("#obj8642").trigger("obj8642_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8642) {
				console.warn("de-queueing event obj8642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8642_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj8631
(function(){
	window.obj8642_onTap_runningActionsCount = obj8642_onTap_runningActionsCount + 1;

	var selector = "#obj8631";
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
					window.obj8642_onTap_runningActionsCount = window.obj8642_onTap_runningActionsCount - 1;
if (window.obj8642_onTap_runningActionsCount < 0) {
	window.obj8642_onTap_runningActionsCount = 0;
} else if (window.obj8642_onTap_runningActionsCount == 0) {
	obj8642_onTap_actionGroup2();
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
				window.obj8642_onTap_runningActionsCount = window.obj8642_onTap_runningActionsCount - 1;
if (window.obj8642_onTap_runningActionsCount < 0) {
	window.obj8642_onTap_runningActionsCount = 0;
} else if (window.obj8642_onTap_runningActionsCount == 0) {
	obj8642_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj8642_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8642_onTap_activeActionGroupIndex = -1;
		$("#obj8642").trigger("obj8642_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8642) {
				console.warn("de-queueing event obj8642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8642_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_8646();
function playAudioFile_8646() {
	window.obj8642_onTap_runningActionsCount = obj8642_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile8646")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8646");
			$("#obj_audio_playSoundFile8646").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8642_onTap_runningActionsCount = window.obj8642_onTap_runningActionsCount - 1;
if (window.obj8642_onTap_runningActionsCount < 0) {
	window.obj8642_onTap_runningActionsCount = 0;
} else if (window.obj8642_onTap_runningActionsCount == 0) {
	obj8642_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8642_onTap_runningActionsCount = window.obj8642_onTap_runningActionsCount - 1;
if (window.obj8642_onTap_runningActionsCount < 0) {
	window.obj8642_onTap_runningActionsCount = 0;
} else if (window.obj8642_onTap_runningActionsCount == 0) {
	obj8642_onTap_actionGroup3();
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
				window.obj8642_onTap_runningActionsCount = window.obj8642_onTap_runningActionsCount - 1;
if (window.obj8642_onTap_runningActionsCount < 0) {
	window.obj8642_onTap_runningActionsCount = 0;
} else if (window.obj8642_onTap_runningActionsCount == 0) {
	obj8642_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj8642_onTap_runningActionsCount = window.obj8642_onTap_runningActionsCount - 1;
if (window.obj8642_onTap_runningActionsCount < 0) {
	window.obj8642_onTap_runningActionsCount = 0;
} else if (window.obj8642_onTap_runningActionsCount == 0) {
	obj8642_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj8642_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8642_onTap_activeActionGroupIndex = -1;
		$("#obj8642").trigger("obj8642_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8642) {
				console.warn("de-queueing event obj8642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8642_onTap_activeActionGroupIndex = 3;
	






















};
obj8637_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8637_onTap_activeActionGroupIndex = -1;
		$("#obj8637").trigger("obj8637_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8637) {
				console.warn("de-queueing event obj8637." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8637").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8637_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj8631 
hide_8639();
function hide_8639() {
	var selector = "#obj8631";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj8637_onTap_runningActionsCount = obj8637_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj8637_onTap_runningActionsCount = window.obj8637_onTap_runningActionsCount - 1;
if (window.obj8637_onTap_runningActionsCount < 0) {
	window.obj8637_onTap_runningActionsCount = 0;
} else if (window.obj8637_onTap_runningActionsCount == 0) {
	obj8637_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_8639(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj8637_onTap_runningActionsCount = window.obj8637_onTap_runningActionsCount - 1;
if (window.obj8637_onTap_runningActionsCount < 0) {
	window.obj8637_onTap_runningActionsCount = 0;
} else if (window.obj8637_onTap_runningActionsCount == 0) {
	obj8637_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj8637_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8637_onTap_activeActionGroupIndex = -1;
		$("#obj8637").trigger("obj8637_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8637) {
				console.warn("de-queueing event obj8637." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8637").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8637_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj8634
(function(){
	window.obj8637_onTap_runningActionsCount = obj8637_onTap_runningActionsCount + 1;

	var selector = "#obj8634";
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
					window.obj8637_onTap_runningActionsCount = window.obj8637_onTap_runningActionsCount - 1;
if (window.obj8637_onTap_runningActionsCount < 0) {
	window.obj8637_onTap_runningActionsCount = 0;
} else if (window.obj8637_onTap_runningActionsCount == 0) {
	obj8637_onTap_actionGroup2();
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
				window.obj8637_onTap_runningActionsCount = window.obj8637_onTap_runningActionsCount - 1;
if (window.obj8637_onTap_runningActionsCount < 0) {
	window.obj8637_onTap_runningActionsCount = 0;
} else if (window.obj8637_onTap_runningActionsCount == 0) {
	obj8637_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj8637_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8637_onTap_activeActionGroupIndex = -1;
		$("#obj8637").trigger("obj8637_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8637) {
				console.warn("de-queueing event obj8637." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8637").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8637_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_8641();
function playAudioFile_8641() {
	window.obj8637_onTap_runningActionsCount = obj8637_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile8641")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile8641");
			$("#obj_audio_playSoundFile8641").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj8637_onTap_runningActionsCount = window.obj8637_onTap_runningActionsCount - 1;
if (window.obj8637_onTap_runningActionsCount < 0) {
	window.obj8637_onTap_runningActionsCount = 0;
} else if (window.obj8637_onTap_runningActionsCount == 0) {
	obj8637_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj8637_onTap_runningActionsCount = window.obj8637_onTap_runningActionsCount - 1;
if (window.obj8637_onTap_runningActionsCount < 0) {
	window.obj8637_onTap_runningActionsCount = 0;
} else if (window.obj8637_onTap_runningActionsCount == 0) {
	obj8637_onTap_actionGroup3();
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
				window.obj8637_onTap_runningActionsCount = window.obj8637_onTap_runningActionsCount - 1;
if (window.obj8637_onTap_runningActionsCount < 0) {
	window.obj8637_onTap_runningActionsCount = 0;
} else if (window.obj8637_onTap_runningActionsCount == 0) {
	obj8637_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj8637_onTap_runningActionsCount = window.obj8637_onTap_runningActionsCount - 1;
if (window.obj8637_onTap_runningActionsCount < 0) {
	window.obj8637_onTap_runningActionsCount = 0;
} else if (window.obj8637_onTap_runningActionsCount == 0) {
	obj8637_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj8637_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8637_onTap_activeActionGroupIndex = -1;
		$("#obj8637").trigger("obj8637_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8637) {
				console.warn("de-queueing event obj8637." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8637").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8637_onTap_activeActionGroupIndex = 3;
	






















};
obj12411_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12411_onTap_activeActionGroupIndex = -1;
		$("#obj12411").trigger("obj12411_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12411) {
				console.warn("de-queueing event obj12411." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12411").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12411_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_12415();
function runjs_12415() {
	window.obj12411_onTap_runningActionsCount = obj12411_onTap_runningActionsCount + 1;

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
		window.obj12411_onTap_runningActionsCount = window.obj12411_onTap_runningActionsCount - 1;
if (window.obj12411_onTap_runningActionsCount < 0) {
	window.obj12411_onTap_runningActionsCount = 0;
} else if (window.obj12411_onTap_runningActionsCount == 0) {
	obj12411_onTap_actionGroup1();
}
	}, 1);
}







};
obj12411_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12411_onTap_activeActionGroupIndex = -1;
		$("#obj12411").trigger("obj12411_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12411) {
				console.warn("de-queueing event obj12411." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12411").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12411_onTap_activeActionGroupIndex = 1;
	






















};
obj12430_SCEventReadAloudStarted_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12430_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj12430").trigger("obj12430_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12430) {
				console.warn("de-queueing event obj12430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12430_SCEventReadAloudStarted_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj12430 
switchImage_12434();
function switchImage_12434() {
	window.obj12430_SCEventReadAloudStarted_runningActionsCount = obj12430_SCEventReadAloudStarted_runningActionsCount + 1;

	var targetObjectId = "#obj12430";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj12430_img";
	var fromImagePath = "../images/obj12430_image.png";
	var toImagePath = "../images/switch24_to.png";
	var switchHelperId = "switchHelper85"
	var switchHelperRef = "#switchHelper85"
	var switchId = "85";
	var toSwitchId = "85";
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
				window.obj12430_SCEventReadAloudStarted_runningActionsCount = window.obj12430_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj12430_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj12430_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj12430_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj12430_SCEventReadAloudStarted_actionGroup1();
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
obj12430_SCEventReadAloudStarted_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12430_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj12430").trigger("obj12430_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12430) {
				console.warn("de-queueing event obj12430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12430_SCEventReadAloudStarted_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_12435();
function runjs_12435() {
	window.obj12430_SCEventReadAloudStarted_runningActionsCount = obj12430_SCEventReadAloudStarted_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over Pressed');
}
	
	setTimeout(function() {
		window.obj12430_SCEventReadAloudStarted_runningActionsCount = window.obj12430_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj12430_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj12430_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj12430_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj12430_SCEventReadAloudStarted_actionGroup2();
}
	}, 1);
}







};
obj12430_SCEventReadAloudStarted_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12430_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj12430").trigger("obj12430_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12430) {
				console.warn("de-queueing event obj12430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12430_SCEventReadAloudStarted_activeActionGroupIndex = 2;
	






















};
obj12430_SCEventReadAloudStopped_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12430_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj12430").trigger("obj12430_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12430) {
				console.warn("de-queueing event obj12430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12430_SCEventReadAloudStopped_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj12430 
switchImage_12440();
function switchImage_12440() {
	window.obj12430_SCEventReadAloudStopped_runningActionsCount = obj12430_SCEventReadAloudStopped_runningActionsCount + 1;

	var targetObjectId = "#obj12430";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj12430_img";
	var fromImagePath = "../images/obj12430_image.png";
	var toImagePath = "../images/obj12430_image.png";
	var switchHelperId = "switchHelper86"
	var switchHelperRef = "#switchHelper86"
	var switchId = "86";
	var toSwitchId = "86";
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
				window.obj12430_SCEventReadAloudStopped_runningActionsCount = window.obj12430_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj12430_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj12430_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj12430_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj12430_SCEventReadAloudStopped_actionGroup1();
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
obj12430_SCEventReadAloudStopped_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12430_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj12430").trigger("obj12430_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12430) {
				console.warn("de-queueing event obj12430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12430_SCEventReadAloudStopped_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_12441();
function runjs_12441() {
	window.obj12430_SCEventReadAloudStopped_runningActionsCount = obj12430_SCEventReadAloudStopped_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over');
}
	
	setTimeout(function() {
		window.obj12430_SCEventReadAloudStopped_runningActionsCount = window.obj12430_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj12430_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj12430_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj12430_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj12430_SCEventReadAloudStopped_actionGroup2();
}
	}, 1);
}







};
obj12430_SCEventReadAloudStopped_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12430_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj12430").trigger("obj12430_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12430) {
				console.warn("de-queueing event obj12430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12430_SCEventReadAloudStopped_activeActionGroupIndex = 2;
	






















};
obj12401_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12401_onTap_activeActionGroupIndex = -1;
		$("#obj12401").trigger("obj12401_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12401) {
				console.warn("de-queueing event obj12401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12401_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_12403();
function runjs_12403() {
	window.obj12401_onTap_runningActionsCount = obj12401_onTap_runningActionsCount + 1;

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
		window.obj12401_onTap_runningActionsCount = window.obj12401_onTap_runningActionsCount - 1;
if (window.obj12401_onTap_runningActionsCount < 0) {
	window.obj12401_onTap_runningActionsCount = 0;
} else if (window.obj12401_onTap_runningActionsCount == 0) {
	obj12401_onTap_actionGroup1();
}
	}, 1);
}







};
obj12401_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12401_onTap_activeActionGroupIndex = -1;
		$("#obj12401").trigger("obj12401_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12401) {
				console.warn("de-queueing event obj12401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12401_onTap_activeActionGroupIndex = 1;
	






















};
obj12426_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12426_onTap_activeActionGroupIndex = -1;
		$("#obj12426").trigger("obj12426_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12426) {
				console.warn("de-queueing event obj12426." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12426").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12426_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj12426 
switchImage_12428();
function switchImage_12428() {
	window.obj12426_onTap_runningActionsCount = obj12426_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj12426";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj12426_img";
	var fromImagePath = "../images/obj12426_image.png";
	var toImagePath = "../images/switch26_to.png";
	var switchHelperId = "switchHelper87"
	var switchHelperRef = "#switchHelper87"
	var switchId = "87";
	var toSwitchId = "87";
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
				window.obj12426_onTap_runningActionsCount = window.obj12426_onTap_runningActionsCount - 1;
if (window.obj12426_onTap_runningActionsCount < 0) {
	window.obj12426_onTap_runningActionsCount = 0;
} else if (window.obj12426_onTap_runningActionsCount == 0) {
	obj12426_onTap_actionGroup1();
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
obj12426_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12426_onTap_activeActionGroupIndex = -1;
		$("#obj12426").trigger("obj12426_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12426) {
				console.warn("de-queueing event obj12426." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12426").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12426_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_12429();
function runjs_12429() {
	window.obj12426_onTap_runningActionsCount = obj12426_onTap_runningActionsCount + 1;

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
		window.obj12426_onTap_runningActionsCount = window.obj12426_onTap_runningActionsCount - 1;
if (window.obj12426_onTap_runningActionsCount < 0) {
	window.obj12426_onTap_runningActionsCount = 0;
} else if (window.obj12426_onTap_runningActionsCount == 0) {
	obj12426_onTap_actionGroup2();
}
	}, 1);
}







};
obj12426_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12426_onTap_activeActionGroupIndex = -1;
		$("#obj12426").trigger("obj12426_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12426) {
				console.warn("de-queueing event obj12426." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12426").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12426_onTap_activeActionGroupIndex = 2;
	






















};
obj12423_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12423_onTap_activeActionGroupIndex = -1;
		$("#obj12423").trigger("obj12423_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12423) {
				console.warn("de-queueing event obj12423." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12423").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12423_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_12425();
function goToPage_12425() {
	window.obj12423_onTap_runningActionsCount = obj12423_onTap_runningActionsCount + 1;
	$("#anchor88")[0].click();
	window.obj12423_onTap_runningActionsCount = window.obj12423_onTap_runningActionsCount - 1;
if (window.obj12423_onTap_runningActionsCount < 0) {
	window.obj12423_onTap_runningActionsCount = 0;
} else if (window.obj12423_onTap_runningActionsCount == 0) {
	obj12423_onTap_actionGroup1();
}
}





















};
obj12423_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12423_onTap_activeActionGroupIndex = -1;
		$("#obj12423").trigger("obj12423_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12423) {
				console.warn("de-queueing event obj12423." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12423").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12423_onTap_activeActionGroupIndex = 1;
	






















};
obj12408_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12408_onTap_activeActionGroupIndex = -1;
		$("#obj12408").trigger("obj12408_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12408) {
				console.warn("de-queueing event obj12408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12408_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_12410();
function goToPage_12410() {
	window.obj12408_onTap_runningActionsCount = obj12408_onTap_runningActionsCount + 1;
	$("#anchor89")[0].click();
	window.obj12408_onTap_runningActionsCount = window.obj12408_onTap_runningActionsCount - 1;
if (window.obj12408_onTap_runningActionsCount < 0) {
	window.obj12408_onTap_runningActionsCount = 0;
} else if (window.obj12408_onTap_runningActionsCount == 0) {
	obj12408_onTap_actionGroup1();
}
}





















};
obj12408_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12408_onTap_activeActionGroupIndex = -1;
		$("#obj12408").trigger("obj12408_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12408) {
				console.warn("de-queueing event obj12408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12408_onTap_activeActionGroupIndex = 1;
	






















};
obj12392_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12392_onTap_activeActionGroupIndex = -1;
		$("#obj12392").trigger("obj12392_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12392) {
				console.warn("de-queueing event obj12392." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12392").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12392_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_12395();
function runjs_12395() {
	window.obj12392_onTap_runningActionsCount = obj12392_onTap_runningActionsCount + 1;

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
		window.obj12392_onTap_runningActionsCount = window.obj12392_onTap_runningActionsCount - 1;
if (window.obj12392_onTap_runningActionsCount < 0) {
	window.obj12392_onTap_runningActionsCount = 0;
} else if (window.obj12392_onTap_runningActionsCount == 0) {
	obj12392_onTap_actionGroup1();
}
	}, 1);
}







};
obj12392_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12392_onTap_activeActionGroupIndex = -1;
		$("#obj12392").trigger("obj12392_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12392) {
				console.warn("de-queueing event obj12392." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12392").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12392_onTap_activeActionGroupIndex = 1;
	






















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





















































/*
 *
 *   obj8557: Event Touch Down
 *
 */
$("#obj8557").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj8557_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8557_onTap is still running");
	return;
}
var obj8557_onTap_runningActionsCount = 0;
var obj8557_onTap_loopCount = 0;
obj8557_onTap_actionGroup0();
});




















/*
 *
 *   obj8559: Event Touch Down
 *
 */
$("#obj8559").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj8559_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8559_onTap is still running");
	return;
}
var obj8559_onTap_runningActionsCount = 0;
var obj8559_onTap_loopCount = 0;
obj8559_onTap_actionGroup0();
});






























/*
 *
 *   obj8572: Event Touch Down
 *
 */
$("#obj8572").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj8572_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8572_onTap is still running");
	return;
}
var obj8572_onTap_runningActionsCount = 0;
var obj8572_onTap_loopCount = 0;
obj8572_onTap_actionGroup0();
});




















/*
 *
 *   obj8567: Event Touch Down
 *
 */
$("#obj8567").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj8567_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8567_onTap is still running");
	return;
}
var obj8567_onTap_runningActionsCount = 0;
var obj8567_onTap_loopCount = 0;
obj8567_onTap_actionGroup0();
});




























































/*
 *
 *   obj8589: Event Touch Down
 *
 */
$("#obj8589").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj8589_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8589_onTap is still running");
	return;
}
var obj8589_onTap_runningActionsCount = 0;
var obj8589_onTap_loopCount = 0;
obj8589_onTap_actionGroup0();
});






























/*
 *
 *   obj8594: Event Touch Down
 *
 */
$("#obj8594").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj8594_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8594_onTap is still running");
	return;
}
var obj8594_onTap_runningActionsCount = 0;
var obj8594_onTap_loopCount = 0;
obj8594_onTap_actionGroup0();
});








































/*
 *
 *   obj8605: Event Touch Down
 *
 */
$("#obj8605").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj8605_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8605_onTap is still running");
	return;
}
var obj8605_onTap_runningActionsCount = 0;
var obj8605_onTap_loopCount = 0;
obj8605_onTap_actionGroup0();
});




















/*
 *
 *   obj8610: Event Touch Down
 *
 */
$("#obj8610").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj8610_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8610_onTap is still running");
	return;
}
var obj8610_onTap_runningActionsCount = 0;
var obj8610_onTap_loopCount = 0;
obj8610_onTap_actionGroup0();
});










/*
 *
 *   obj8621: Event Touch Down
 *
 */
$("#obj8621").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj8621_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8621_onTap is still running");
	return;
}
var obj8621_onTap_runningActionsCount = 0;
var obj8621_onTap_loopCount = 0;
obj8621_onTap_actionGroup0();
});






























/*
 *
 *   obj8626: Event Touch Down
 *
 */
$("#obj8626").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj8626_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8626_onTap is still running");
	return;
}
var obj8626_onTap_runningActionsCount = 0;
var obj8626_onTap_loopCount = 0;
obj8626_onTap_actionGroup0();
});






































































/*
 *
 *   obj8642: Event Touch Down
 *
 */
$("#obj8642").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj8642_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8642_onTap is still running");
	return;
}
var obj8642_onTap_runningActionsCount = 0;
var obj8642_onTap_loopCount = 0;
obj8642_onTap_actionGroup0();
});










/*
 *
 *   obj8637: Event Touch Down
 *
 */
$("#obj8637").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj8637_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8637_onTap is still running");
	return;
}
var obj8637_onTap_runningActionsCount = 0;
var obj8637_onTap_loopCount = 0;
obj8637_onTap_actionGroup0();
});


















































/*
 *
 *   obj12411: Event Touch Down
 *
 */
$("#obj12411").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj12411_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12411_onTap is still running");
	return;
}
var obj12411_onTap_runningActionsCount = 0;
var obj12411_onTap_loopCount = 0;
obj12411_onTap_actionGroup0();
});
























/*
 *
 *   obj12430: Event SCEventReadAloudStarted
 *
 */
$("#obj12430").bind("SCEventReadAloudStarted", function(event) {
	if (window.obj12430_SCEventReadAloudStarted_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12430_SCEventReadAloudStarted is still running");
	return;
}
var obj12430_SCEventReadAloudStarted_runningActionsCount = 0;
var obj12430_SCEventReadAloudStarted_loopCount = 0;
obj12430_SCEventReadAloudStarted_actionGroup0();
});
/*
 *
 *   obj12430: Event SCEventReadAloudStopped
 *
 */
$("#obj12430").bind("SCEventReadAloudStopped", function(event) {
	if (window.obj12430_SCEventReadAloudStopped_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12430_SCEventReadAloudStopped is still running");
	return;
}
var obj12430_SCEventReadAloudStopped_runningActionsCount = 0;
var obj12430_SCEventReadAloudStopped_loopCount = 0;
obj12430_SCEventReadAloudStopped_actionGroup0();
});





/*
 *
 *   obj12401: Event Touch Down
 *
 */
$("#obj12401").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj12401_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12401_onTap is still running");
	return;
}
var obj12401_onTap_runningActionsCount = 0;
var obj12401_onTap_loopCount = 0;
obj12401_onTap_actionGroup0();
});










/*
 *
 *   obj12426: Event Touch Down
 *
 */
$("#obj12426").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj12426_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12426_onTap is still running");
	return;
}
var obj12426_onTap_runningActionsCount = 0;
var obj12426_onTap_loopCount = 0;
obj12426_onTap_actionGroup0();
});










/*
 *
 *   obj12423: Event Touch Down
 *
 */
$("#obj12423").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj12423_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12423_onTap is still running");
	return;
}
var obj12423_onTap_runningActionsCount = 0;
var obj12423_onTap_loopCount = 0;
obj12423_onTap_actionGroup0();
});










/*
 *
 *   obj12408: Event Touch Down
 *
 */
$("#obj12408").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj12408_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12408_onTap is still running");
	return;
}
var obj12408_onTap_runningActionsCount = 0;
var obj12408_onTap_loopCount = 0;
obj12408_onTap_actionGroup0();
});










/*
 *
 *   obj12392: Event Touch Down
 *
 */
$("#obj12392").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj12392_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12392_onTap is still running");
	return;
}
var obj12392_onTap_runningActionsCount = 0;
var obj12392_onTap_loopCount = 0;
obj12392_onTap_actionGroup0();
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
	
$("#obj3988").trigger('SCEventShow');
$("#obj4239").trigger('SCEventShow');
$("#obj4237").trigger('SCEventShow');
$("#obj4253").trigger('SCEventShow');
$("#obj8557").trigger('SCEventShow');
$("#obj8559").trigger('SCEventShow');
$("#obj4241").trigger('SCEventShow');
$("#obj8572").trigger('SCEventShow');
$("#obj8567").trigger('SCEventShow');
$("#obj4251").trigger('SCEventShow');
$("#obj4255").trigger('SCEventShow');
$("#obj4257").trigger('SCEventShow');
$("#obj8589").trigger('SCEventShow');
$("#obj4249").trigger('SCEventShow');
$("#obj8594").trigger('SCEventShow');
$("#obj4261").trigger('SCEventShow');
$("#obj4247").trigger('SCEventShow');
$("#obj8605").trigger('SCEventShow');
$("#obj8610").trigger('SCEventShow');
$("#obj8621").trigger('SCEventShow');
$("#obj4245").trigger('SCEventShow');
$("#obj4263").trigger('SCEventShow');
$("#obj8626").trigger('SCEventShow');
$("#obj4243").trigger('SCEventShow');
$("#obj4265").trigger('SCEventShow');
$("#obj8642").trigger('SCEventShow');
$("#obj8637").trigger('SCEventShow');
$("#obj4474").trigger('SCEventShow');
$("#obj4500").trigger('SCEventShow');
$("#obj12430").trigger('SCEventShow');
$("#obj12401").trigger('SCEventShow');
$("#obj12423").trigger('SCEventShow');
$("#obj12408").trigger('SCEventShow');
$("#obj12392").trigger('SCEventShow');
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