pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serophero - Unit 3";
pubcoder.page.id = pubcoder.page.id || 3806;
pubcoder.page.title = pubcoder.page.title || "6";
pubcoder.page.number = pubcoder.page.number || 6;
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
var obj10008_onTap_activeActionGroupIndex = -1;
var obj10008_onTap_runningActionsCount = 0;
var obj10008_onTap_loopCount = 0;
var obj10031_onTap_activeActionGroupIndex = -1;
var obj10031_onTap_runningActionsCount = 0;
var obj10031_onTap_loopCount = 0;
var obj10026_onTap_activeActionGroupIndex = -1;
var obj10026_onTap_runningActionsCount = 0;
var obj10026_onTap_loopCount = 0;
var obj10013_onTap_activeActionGroupIndex = -1;
var obj10013_onTap_runningActionsCount = 0;
var obj10013_onTap_loopCount = 0;
var obj10022_onTap_activeActionGroupIndex = -1;
var obj10022_onTap_runningActionsCount = 0;
var obj10022_onTap_loopCount = 0;
var obj10040_onTap_activeActionGroupIndex = -1;
var obj10040_onTap_runningActionsCount = 0;
var obj10040_onTap_loopCount = 0;
var obj9848_onTap_activeActionGroupIndex = -1;
var obj9848_onTap_runningActionsCount = 0;
var obj9848_onTap_loopCount = 0;
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
		
obj10008_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10008_onTap_activeActionGroupIndex = -1;
		$("#obj10008").trigger("obj10008_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10008) {
				console.warn("de-queueing event obj10008." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10008").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10008_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10022
(function(){
	window.obj10008_onTap_runningActionsCount = obj10008_onTap_runningActionsCount + 1;

	var selector = "#obj10022";
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
					window.obj10008_onTap_runningActionsCount = window.obj10008_onTap_runningActionsCount - 1;
if (window.obj10008_onTap_runningActionsCount < 0) {
	window.obj10008_onTap_runningActionsCount = 0;
} else if (window.obj10008_onTap_runningActionsCount == 0) {
	obj10008_onTap_actionGroup1();
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
				window.obj10008_onTap_runningActionsCount = window.obj10008_onTap_runningActionsCount - 1;
if (window.obj10008_onTap_runningActionsCount < 0) {
	window.obj10008_onTap_runningActionsCount = 0;
} else if (window.obj10008_onTap_runningActionsCount == 0) {
	obj10008_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10008_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10008_onTap_activeActionGroupIndex = -1;
		$("#obj10008").trigger("obj10008_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10008) {
				console.warn("de-queueing event obj10008." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10008").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10008_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10018 
hide_10011();
function hide_10011() {
	var selector = "#obj10018";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10008_onTap_runningActionsCount = obj10008_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10008_onTap_runningActionsCount = window.obj10008_onTap_runningActionsCount - 1;
if (window.obj10008_onTap_runningActionsCount < 0) {
	window.obj10008_onTap_runningActionsCount = 0;
} else if (window.obj10008_onTap_runningActionsCount == 0) {
	obj10008_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10011(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10008_onTap_runningActionsCount = window.obj10008_onTap_runningActionsCount - 1;
if (window.obj10008_onTap_runningActionsCount < 0) {
	window.obj10008_onTap_runningActionsCount = 0;
} else if (window.obj10008_onTap_runningActionsCount == 0) {
	obj10008_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10008_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10008_onTap_activeActionGroupIndex = -1;
		$("#obj10008").trigger("obj10008_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10008) {
				console.warn("de-queueing event obj10008." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10008").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10008_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10012();
function playAudioFile_10012() {
	window.obj10008_onTap_runningActionsCount = obj10008_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10012")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10012");
			$("#obj_audio_playSoundFile10012").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10008_onTap_runningActionsCount = window.obj10008_onTap_runningActionsCount - 1;
if (window.obj10008_onTap_runningActionsCount < 0) {
	window.obj10008_onTap_runningActionsCount = 0;
} else if (window.obj10008_onTap_runningActionsCount == 0) {
	obj10008_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10008_onTap_runningActionsCount = window.obj10008_onTap_runningActionsCount - 1;
if (window.obj10008_onTap_runningActionsCount < 0) {
	window.obj10008_onTap_runningActionsCount = 0;
} else if (window.obj10008_onTap_runningActionsCount == 0) {
	obj10008_onTap_actionGroup3();
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
				window.obj10008_onTap_runningActionsCount = window.obj10008_onTap_runningActionsCount - 1;
if (window.obj10008_onTap_runningActionsCount < 0) {
	window.obj10008_onTap_runningActionsCount = 0;
} else if (window.obj10008_onTap_runningActionsCount == 0) {
	obj10008_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10008_onTap_runningActionsCount = window.obj10008_onTap_runningActionsCount - 1;
if (window.obj10008_onTap_runningActionsCount < 0) {
	window.obj10008_onTap_runningActionsCount = 0;
} else if (window.obj10008_onTap_runningActionsCount == 0) {
	obj10008_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10008_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10008_onTap_activeActionGroupIndex = -1;
		$("#obj10008").trigger("obj10008_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10008) {
				console.warn("de-queueing event obj10008." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10008").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10008_onTap_activeActionGroupIndex = 3;
	






















};
obj10031_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10031_onTap_activeActionGroupIndex = -1;
		$("#obj10031").trigger("obj10031_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10031) {
				console.warn("de-queueing event obj10031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10031_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10036
(function(){
	window.obj10031_onTap_runningActionsCount = obj10031_onTap_runningActionsCount + 1;

	var selector = "#obj10036";
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
					window.obj10031_onTap_runningActionsCount = window.obj10031_onTap_runningActionsCount - 1;
if (window.obj10031_onTap_runningActionsCount < 0) {
	window.obj10031_onTap_runningActionsCount = 0;
} else if (window.obj10031_onTap_runningActionsCount == 0) {
	obj10031_onTap_actionGroup1();
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
				window.obj10031_onTap_runningActionsCount = window.obj10031_onTap_runningActionsCount - 1;
if (window.obj10031_onTap_runningActionsCount < 0) {
	window.obj10031_onTap_runningActionsCount = 0;
} else if (window.obj10031_onTap_runningActionsCount == 0) {
	obj10031_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10031_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10031_onTap_activeActionGroupIndex = -1;
		$("#obj10031").trigger("obj10031_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10031) {
				console.warn("de-queueing event obj10031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10031_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10040 
hide_10034();
function hide_10034() {
	var selector = "#obj10040";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10031_onTap_runningActionsCount = obj10031_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10031_onTap_runningActionsCount = window.obj10031_onTap_runningActionsCount - 1;
if (window.obj10031_onTap_runningActionsCount < 0) {
	window.obj10031_onTap_runningActionsCount = 0;
} else if (window.obj10031_onTap_runningActionsCount == 0) {
	obj10031_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10034(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10031_onTap_runningActionsCount = window.obj10031_onTap_runningActionsCount - 1;
if (window.obj10031_onTap_runningActionsCount < 0) {
	window.obj10031_onTap_runningActionsCount = 0;
} else if (window.obj10031_onTap_runningActionsCount == 0) {
	obj10031_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10031_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10031_onTap_activeActionGroupIndex = -1;
		$("#obj10031").trigger("obj10031_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10031) {
				console.warn("de-queueing event obj10031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10031_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10035();
function playAudioFile_10035() {
	window.obj10031_onTap_runningActionsCount = obj10031_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10035")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10035");
			$("#obj_audio_playSoundFile10035").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10031_onTap_runningActionsCount = window.obj10031_onTap_runningActionsCount - 1;
if (window.obj10031_onTap_runningActionsCount < 0) {
	window.obj10031_onTap_runningActionsCount = 0;
} else if (window.obj10031_onTap_runningActionsCount == 0) {
	obj10031_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10031_onTap_runningActionsCount = window.obj10031_onTap_runningActionsCount - 1;
if (window.obj10031_onTap_runningActionsCount < 0) {
	window.obj10031_onTap_runningActionsCount = 0;
} else if (window.obj10031_onTap_runningActionsCount == 0) {
	obj10031_onTap_actionGroup3();
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
				window.obj10031_onTap_runningActionsCount = window.obj10031_onTap_runningActionsCount - 1;
if (window.obj10031_onTap_runningActionsCount < 0) {
	window.obj10031_onTap_runningActionsCount = 0;
} else if (window.obj10031_onTap_runningActionsCount == 0) {
	obj10031_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10031_onTap_runningActionsCount = window.obj10031_onTap_runningActionsCount - 1;
if (window.obj10031_onTap_runningActionsCount < 0) {
	window.obj10031_onTap_runningActionsCount = 0;
} else if (window.obj10031_onTap_runningActionsCount == 0) {
	obj10031_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10031_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10031_onTap_activeActionGroupIndex = -1;
		$("#obj10031").trigger("obj10031_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10031) {
				console.warn("de-queueing event obj10031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10031_onTap_activeActionGroupIndex = 3;
	






















};
obj10026_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10026_onTap_activeActionGroupIndex = -1;
		$("#obj10026").trigger("obj10026_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10026) {
				console.warn("de-queueing event obj10026." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10026").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10026_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10040
(function(){
	window.obj10026_onTap_runningActionsCount = obj10026_onTap_runningActionsCount + 1;

	var selector = "#obj10040";
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
					window.obj10026_onTap_runningActionsCount = window.obj10026_onTap_runningActionsCount - 1;
if (window.obj10026_onTap_runningActionsCount < 0) {
	window.obj10026_onTap_runningActionsCount = 0;
} else if (window.obj10026_onTap_runningActionsCount == 0) {
	obj10026_onTap_actionGroup1();
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
				window.obj10026_onTap_runningActionsCount = window.obj10026_onTap_runningActionsCount - 1;
if (window.obj10026_onTap_runningActionsCount < 0) {
	window.obj10026_onTap_runningActionsCount = 0;
} else if (window.obj10026_onTap_runningActionsCount == 0) {
	obj10026_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10026_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10026_onTap_activeActionGroupIndex = -1;
		$("#obj10026").trigger("obj10026_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10026) {
				console.warn("de-queueing event obj10026." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10026").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10026_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10036 
hide_10029();
function hide_10029() {
	var selector = "#obj10036";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10026_onTap_runningActionsCount = obj10026_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10026_onTap_runningActionsCount = window.obj10026_onTap_runningActionsCount - 1;
if (window.obj10026_onTap_runningActionsCount < 0) {
	window.obj10026_onTap_runningActionsCount = 0;
} else if (window.obj10026_onTap_runningActionsCount == 0) {
	obj10026_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10029(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10026_onTap_runningActionsCount = window.obj10026_onTap_runningActionsCount - 1;
if (window.obj10026_onTap_runningActionsCount < 0) {
	window.obj10026_onTap_runningActionsCount = 0;
} else if (window.obj10026_onTap_runningActionsCount == 0) {
	obj10026_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10026_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10026_onTap_activeActionGroupIndex = -1;
		$("#obj10026").trigger("obj10026_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10026) {
				console.warn("de-queueing event obj10026." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10026").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10026_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10030();
function playAudioFile_10030() {
	window.obj10026_onTap_runningActionsCount = obj10026_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10030")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10030");
			$("#obj_audio_playSoundFile10030").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10026_onTap_runningActionsCount = window.obj10026_onTap_runningActionsCount - 1;
if (window.obj10026_onTap_runningActionsCount < 0) {
	window.obj10026_onTap_runningActionsCount = 0;
} else if (window.obj10026_onTap_runningActionsCount == 0) {
	obj10026_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10026_onTap_runningActionsCount = window.obj10026_onTap_runningActionsCount - 1;
if (window.obj10026_onTap_runningActionsCount < 0) {
	window.obj10026_onTap_runningActionsCount = 0;
} else if (window.obj10026_onTap_runningActionsCount == 0) {
	obj10026_onTap_actionGroup3();
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
				window.obj10026_onTap_runningActionsCount = window.obj10026_onTap_runningActionsCount - 1;
if (window.obj10026_onTap_runningActionsCount < 0) {
	window.obj10026_onTap_runningActionsCount = 0;
} else if (window.obj10026_onTap_runningActionsCount == 0) {
	obj10026_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10026_onTap_runningActionsCount = window.obj10026_onTap_runningActionsCount - 1;
if (window.obj10026_onTap_runningActionsCount < 0) {
	window.obj10026_onTap_runningActionsCount = 0;
} else if (window.obj10026_onTap_runningActionsCount == 0) {
	obj10026_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10026_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10026_onTap_activeActionGroupIndex = -1;
		$("#obj10026").trigger("obj10026_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10026) {
				console.warn("de-queueing event obj10026." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10026").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10026_onTap_activeActionGroupIndex = 3;
	






















};
obj10013_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10013_onTap_activeActionGroupIndex = -1;
		$("#obj10013").trigger("obj10013_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10013) {
				console.warn("de-queueing event obj10013." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10013").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10013_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10018
(function(){
	window.obj10013_onTap_runningActionsCount = obj10013_onTap_runningActionsCount + 1;

	var selector = "#obj10018";
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
					window.obj10013_onTap_runningActionsCount = window.obj10013_onTap_runningActionsCount - 1;
if (window.obj10013_onTap_runningActionsCount < 0) {
	window.obj10013_onTap_runningActionsCount = 0;
} else if (window.obj10013_onTap_runningActionsCount == 0) {
	obj10013_onTap_actionGroup1();
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
				window.obj10013_onTap_runningActionsCount = window.obj10013_onTap_runningActionsCount - 1;
if (window.obj10013_onTap_runningActionsCount < 0) {
	window.obj10013_onTap_runningActionsCount = 0;
} else if (window.obj10013_onTap_runningActionsCount == 0) {
	obj10013_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10013_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10013_onTap_activeActionGroupIndex = -1;
		$("#obj10013").trigger("obj10013_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10013) {
				console.warn("de-queueing event obj10013." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10013").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10013_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10022 
hide_10016();
function hide_10016() {
	var selector = "#obj10022";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10013_onTap_runningActionsCount = obj10013_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10013_onTap_runningActionsCount = window.obj10013_onTap_runningActionsCount - 1;
if (window.obj10013_onTap_runningActionsCount < 0) {
	window.obj10013_onTap_runningActionsCount = 0;
} else if (window.obj10013_onTap_runningActionsCount == 0) {
	obj10013_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10016(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10013_onTap_runningActionsCount = window.obj10013_onTap_runningActionsCount - 1;
if (window.obj10013_onTap_runningActionsCount < 0) {
	window.obj10013_onTap_runningActionsCount = 0;
} else if (window.obj10013_onTap_runningActionsCount == 0) {
	obj10013_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10013_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10013_onTap_activeActionGroupIndex = -1;
		$("#obj10013").trigger("obj10013_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10013) {
				console.warn("de-queueing event obj10013." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10013").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10013_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10017();
function playAudioFile_10017() {
	window.obj10013_onTap_runningActionsCount = obj10013_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10017")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10017");
			$("#obj_audio_playSoundFile10017").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10013_onTap_runningActionsCount = window.obj10013_onTap_runningActionsCount - 1;
if (window.obj10013_onTap_runningActionsCount < 0) {
	window.obj10013_onTap_runningActionsCount = 0;
} else if (window.obj10013_onTap_runningActionsCount == 0) {
	obj10013_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10013_onTap_runningActionsCount = window.obj10013_onTap_runningActionsCount - 1;
if (window.obj10013_onTap_runningActionsCount < 0) {
	window.obj10013_onTap_runningActionsCount = 0;
} else if (window.obj10013_onTap_runningActionsCount == 0) {
	obj10013_onTap_actionGroup3();
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
				window.obj10013_onTap_runningActionsCount = window.obj10013_onTap_runningActionsCount - 1;
if (window.obj10013_onTap_runningActionsCount < 0) {
	window.obj10013_onTap_runningActionsCount = 0;
} else if (window.obj10013_onTap_runningActionsCount == 0) {
	obj10013_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10013_onTap_runningActionsCount = window.obj10013_onTap_runningActionsCount - 1;
if (window.obj10013_onTap_runningActionsCount < 0) {
	window.obj10013_onTap_runningActionsCount = 0;
} else if (window.obj10013_onTap_runningActionsCount == 0) {
	obj10013_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10013_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10013_onTap_activeActionGroupIndex = -1;
		$("#obj10013").trigger("obj10013_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10013) {
				console.warn("de-queueing event obj10013." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10013").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10013_onTap_activeActionGroupIndex = 3;
	






















};
obj10022_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10022_onTap_activeActionGroupIndex = -1;
		$("#obj10022").trigger("obj10022_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10022) {
				console.warn("de-queueing event obj10022." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10022").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10022_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj10022 
switchImage_10024();
function switchImage_10024() {
	window.obj10022_onTap_runningActionsCount = obj10022_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj10022";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj10022_img";
	var fromImagePath = "../images/obj10004_image.png";
	var toImagePath = "../images/obj10004_image.png";
	var switchHelperId = "switchHelper118"
	var switchHelperRef = "#switchHelper118"
	var switchId = "118";
	var toSwitchId = "118";
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
				window.obj10022_onTap_runningActionsCount = window.obj10022_onTap_runningActionsCount - 1;
if (window.obj10022_onTap_runningActionsCount < 0) {
	window.obj10022_onTap_runningActionsCount = 0;
} else if (window.obj10022_onTap_runningActionsCount == 0) {
	obj10022_onTap_actionGroup1();
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
obj10022_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10022_onTap_activeActionGroupIndex = -1;
		$("#obj10022").trigger("obj10022_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10022) {
				console.warn("de-queueing event obj10022." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10022").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10022_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_10025();
function playAudioFile_10025() {
	window.obj10022_onTap_runningActionsCount = obj10022_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10025")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10025");
			$("#obj_audio_playSoundFile10025").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10022_onTap_runningActionsCount = window.obj10022_onTap_runningActionsCount - 1;
if (window.obj10022_onTap_runningActionsCount < 0) {
	window.obj10022_onTap_runningActionsCount = 0;
} else if (window.obj10022_onTap_runningActionsCount == 0) {
	obj10022_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10022_onTap_runningActionsCount = window.obj10022_onTap_runningActionsCount - 1;
if (window.obj10022_onTap_runningActionsCount < 0) {
	window.obj10022_onTap_runningActionsCount = 0;
} else if (window.obj10022_onTap_runningActionsCount == 0) {
	obj10022_onTap_actionGroup2();
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
				window.obj10022_onTap_runningActionsCount = window.obj10022_onTap_runningActionsCount - 1;
if (window.obj10022_onTap_runningActionsCount < 0) {
	window.obj10022_onTap_runningActionsCount = 0;
} else if (window.obj10022_onTap_runningActionsCount == 0) {
	obj10022_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj10022_onTap_runningActionsCount = window.obj10022_onTap_runningActionsCount - 1;
if (window.obj10022_onTap_runningActionsCount < 0) {
	window.obj10022_onTap_runningActionsCount = 0;
} else if (window.obj10022_onTap_runningActionsCount == 0) {
	obj10022_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj10022_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10022_onTap_activeActionGroupIndex = -1;
		$("#obj10022").trigger("obj10022_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10022) {
				console.warn("de-queueing event obj10022." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10022").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10022_onTap_activeActionGroupIndex = 2;
	






















};
obj10040_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10040_onTap_activeActionGroupIndex = -1;
		$("#obj10040").trigger("obj10040_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10040) {
				console.warn("de-queueing event obj10040." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10040").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10040_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj10040 
switchImage_10042();
function switchImage_10042() {
	window.obj10040_onTap_runningActionsCount = obj10040_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj10040";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj10040_img";
	var fromImagePath = "../images/obj10004_image.png";
	var toImagePath = "../images/obj10004_image.png";
	var switchHelperId = "switchHelper120"
	var switchHelperRef = "#switchHelper120"
	var switchId = "120";
	var toSwitchId = "120";
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
				window.obj10040_onTap_runningActionsCount = window.obj10040_onTap_runningActionsCount - 1;
if (window.obj10040_onTap_runningActionsCount < 0) {
	window.obj10040_onTap_runningActionsCount = 0;
} else if (window.obj10040_onTap_runningActionsCount == 0) {
	obj10040_onTap_actionGroup1();
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
obj10040_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10040_onTap_activeActionGroupIndex = -1;
		$("#obj10040").trigger("obj10040_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10040) {
				console.warn("de-queueing event obj10040." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10040").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10040_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_10043();
function playAudioFile_10043() {
	window.obj10040_onTap_runningActionsCount = obj10040_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10043")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10043");
			$("#obj_audio_playSoundFile10043").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10040_onTap_runningActionsCount = window.obj10040_onTap_runningActionsCount - 1;
if (window.obj10040_onTap_runningActionsCount < 0) {
	window.obj10040_onTap_runningActionsCount = 0;
} else if (window.obj10040_onTap_runningActionsCount == 0) {
	obj10040_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10040_onTap_runningActionsCount = window.obj10040_onTap_runningActionsCount - 1;
if (window.obj10040_onTap_runningActionsCount < 0) {
	window.obj10040_onTap_runningActionsCount = 0;
} else if (window.obj10040_onTap_runningActionsCount == 0) {
	obj10040_onTap_actionGroup2();
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
				window.obj10040_onTap_runningActionsCount = window.obj10040_onTap_runningActionsCount - 1;
if (window.obj10040_onTap_runningActionsCount < 0) {
	window.obj10040_onTap_runningActionsCount = 0;
} else if (window.obj10040_onTap_runningActionsCount == 0) {
	obj10040_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj10040_onTap_runningActionsCount = window.obj10040_onTap_runningActionsCount - 1;
if (window.obj10040_onTap_runningActionsCount < 0) {
	window.obj10040_onTap_runningActionsCount = 0;
} else if (window.obj10040_onTap_runningActionsCount == 0) {
	obj10040_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj10040_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10040_onTap_activeActionGroupIndex = -1;
		$("#obj10040").trigger("obj10040_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10040) {
				console.warn("de-queueing event obj10040." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10040").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10040_onTap_activeActionGroupIndex = 2;
	






















};
obj9848_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9848_onTap_activeActionGroupIndex = -1;
		$("#obj9848").trigger("obj9848_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9848) {
				console.warn("de-queueing event obj9848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9848_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_9852();
function runjs_9852() {
	window.obj9848_onTap_runningActionsCount = obj9848_onTap_runningActionsCount + 1;

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
		window.obj9848_onTap_runningActionsCount = window.obj9848_onTap_runningActionsCount - 1;
if (window.obj9848_onTap_runningActionsCount < 0) {
	window.obj9848_onTap_runningActionsCount = 0;
} else if (window.obj9848_onTap_runningActionsCount == 0) {
	obj9848_onTap_actionGroup1();
}
	}, 1);
}







};
obj9848_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9848_onTap_activeActionGroupIndex = -1;
		$("#obj9848").trigger("obj9848_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9848) {
				console.warn("de-queueing event obj9848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9848_onTap_activeActionGroupIndex = 1;
	






















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
	var switchHelperId = "switchHelper122"
	var switchHelperRef = "#switchHelper122"
	var switchId = "122";
	var toSwitchId = "122";
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
	var switchHelperId = "switchHelper123"
	var switchHelperRef = "#switchHelper123"
	var switchId = "123";
	var toSwitchId = "123";
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
	var switchHelperId = "switchHelper124"
	var switchHelperRef = "#switchHelper124"
	var switchId = "124";
	var toSwitchId = "124";
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
	$("#anchor125")[0].click();
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
	$("#anchor126")[0].click();
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
 *   obj10008: Event Touch Down
 *
 */
$("#obj10008").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10008_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10008_onTap is still running");
	return;
}
var obj10008_onTap_runningActionsCount = 0;
var obj10008_onTap_loopCount = 0;
obj10008_onTap_actionGroup0();
});










/*
 *
 *   obj10031: Event Touch Down
 *
 */
$("#obj10031").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10031_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10031_onTap is still running");
	return;
}
var obj10031_onTap_runningActionsCount = 0;
var obj10031_onTap_loopCount = 0;
obj10031_onTap_actionGroup0();
});










/*
 *
 *   obj10026: Event Touch Down
 *
 */
$("#obj10026").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10026_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10026_onTap is still running");
	return;
}
var obj10026_onTap_runningActionsCount = 0;
var obj10026_onTap_loopCount = 0;
obj10026_onTap_actionGroup0();
});










/*
 *
 *   obj10013: Event Touch Down
 *
 */
$("#obj10013").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10013_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10013_onTap is still running");
	return;
}
var obj10013_onTap_runningActionsCount = 0;
var obj10013_onTap_loopCount = 0;
obj10013_onTap_actionGroup0();
});










/*
 *
 *   obj10022: Event Touch Down
 *
 */
$("#obj10022").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10022_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10022_onTap is still running");
	return;
}
var obj10022_onTap_runningActionsCount = 0;
var obj10022_onTap_loopCount = 0;
obj10022_onTap_actionGroup0();
});




















/*
 *
 *   obj10040: Event Touch Down
 *
 */
$("#obj10040").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10040_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10040_onTap is still running");
	return;
}
var obj10040_onTap_runningActionsCount = 0;
var obj10040_onTap_loopCount = 0;
obj10040_onTap_actionGroup0();
});






























/*
 *
 *   obj9848: Event Touch Down
 *
 */
$("#obj9848").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9848_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9848_onTap is still running");
	return;
}
var obj9848_onTap_runningActionsCount = 0;
var obj9848_onTap_loopCount = 0;
obj9848_onTap_actionGroup0();
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
	
$("#obj3886").trigger('SCEventShow');
$("#obj4137").trigger('SCEventShow');
$("#obj4139").trigger('SCEventShow');
$("#obj4375").trigger('SCEventShow');
$("#obj4373").trigger('SCEventShow');
$("#obj10008").trigger('SCEventShow');
$("#obj10031").trigger('SCEventShow');
$("#obj10026").trigger('SCEventShow');
$("#obj10013").trigger('SCEventShow');
$("#obj4672").trigger('SCEventShow');
$("#obj9848").trigger('SCEventShow');
$("#obj4768").trigger('SCEventShow');
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