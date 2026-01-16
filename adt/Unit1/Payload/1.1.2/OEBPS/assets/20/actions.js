pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serofero : Unit 1";
pubcoder.page.id = pubcoder.page.id || 1488;
pubcoder.page.title = pubcoder.page.title || "20";
pubcoder.page.number = pubcoder.page.number || 20;
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
var obj6901_onTap_activeActionGroupIndex = -1;
var obj6901_onTap_runningActionsCount = 0;
var obj6901_onTap_loopCount = 0;
var obj6898_onTap_activeActionGroupIndex = -1;
var obj6898_onTap_runningActionsCount = 0;
var obj6898_onTap_loopCount = 0;
var obj7411_onTap_activeActionGroupIndex = -1;
var obj7411_onTap_runningActionsCount = 0;
var obj7411_onTap_loopCount = 0;
var obj7417_onTap_activeActionGroupIndex = -1;
var obj7417_onTap_runningActionsCount = 0;
var obj7417_onTap_loopCount = 0;
var obj1900_onTap_activeActionGroupIndex = -1;
var obj1900_onTap_runningActionsCount = 0;
var obj1900_onTap_loopCount = 0;
var obj7426_onTap_activeActionGroupIndex = -1;
var obj7426_onTap_runningActionsCount = 0;
var obj7426_onTap_loopCount = 0;
var obj7449_onTap_activeActionGroupIndex = -1;
var obj7449_onTap_runningActionsCount = 0;
var obj7449_onTap_loopCount = 0;
var obj7430_onTap_activeActionGroupIndex = -1;
var obj7430_onTap_runningActionsCount = 0;
var obj7430_onTap_loopCount = 0;
var obj7436_onTap_activeActionGroupIndex = -1;
var obj7436_onTap_runningActionsCount = 0;
var obj7436_onTap_loopCount = 0;
var obj7455_onTap_activeActionGroupIndex = -1;
var obj7455_onTap_runningActionsCount = 0;
var obj7455_onTap_loopCount = 0;
var obj7464_onTap_activeActionGroupIndex = -1;
var obj7464_onTap_runningActionsCount = 0;
var obj7464_onTap_loopCount = 0;
var obj7445_onTap_activeActionGroupIndex = -1;
var obj7445_onTap_runningActionsCount = 0;
var obj7445_onTap_loopCount = 0;
var obj8166_onTap_activeActionGroupIndex = -1;
var obj8166_onTap_runningActionsCount = 0;
var obj8166_onTap_loopCount = 0;
var obj8185_SCEventReadAloudStarted_activeActionGroupIndex = -1;
var obj8185_SCEventReadAloudStarted_runningActionsCount = 0;
var obj8185_SCEventReadAloudStarted_loopCount = 0;
var obj8185_SCEventReadAloudStopped_activeActionGroupIndex = -1;
var obj8185_SCEventReadAloudStopped_runningActionsCount = 0;
var obj8185_SCEventReadAloudStopped_loopCount = 0;
var obj8156_onTap_activeActionGroupIndex = -1;
var obj8156_onTap_runningActionsCount = 0;
var obj8156_onTap_loopCount = 0;
var obj8181_onTap_activeActionGroupIndex = -1;
var obj8181_onTap_runningActionsCount = 0;
var obj8181_onTap_loopCount = 0;
var obj8178_onTap_activeActionGroupIndex = -1;
var obj8178_onTap_runningActionsCount = 0;
var obj8178_onTap_loopCount = 0;
var obj8163_onTap_activeActionGroupIndex = -1;
var obj8163_onTap_runningActionsCount = 0;
var obj8163_onTap_loopCount = 0;
var obj8147_onTap_activeActionGroupIndex = -1;
var obj8147_onTap_runningActionsCount = 0;
var obj8147_onTap_loopCount = 0;
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
		
obj6901_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6901_onTap_activeActionGroupIndex = -1;
		$("#obj6901").trigger("obj6901_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6901) {
				console.warn("de-queueing event obj6901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6901_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj1900
(function(){
	window.obj6901_onTap_runningActionsCount = obj6901_onTap_runningActionsCount + 1;

	var selector = "#obj1900";
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
					window.obj6901_onTap_runningActionsCount = window.obj6901_onTap_runningActionsCount - 1;
if (window.obj6901_onTap_runningActionsCount < 0) {
	window.obj6901_onTap_runningActionsCount = 0;
} else if (window.obj6901_onTap_runningActionsCount == 0) {
	obj6901_onTap_actionGroup1();
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
				window.obj6901_onTap_runningActionsCount = window.obj6901_onTap_runningActionsCount - 1;
if (window.obj6901_onTap_runningActionsCount < 0) {
	window.obj6901_onTap_runningActionsCount = 0;
} else if (window.obj6901_onTap_runningActionsCount == 0) {
	obj6901_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj6901_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6901_onTap_activeActionGroupIndex = -1;
		$("#obj6901").trigger("obj6901_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6901) {
				console.warn("de-queueing event obj6901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6901_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj6893 
hide_7407();
function hide_7407() {
	var selector = "#obj6893";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6901_onTap_runningActionsCount = obj6901_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6901_onTap_runningActionsCount = window.obj6901_onTap_runningActionsCount - 1;
if (window.obj6901_onTap_runningActionsCount < 0) {
	window.obj6901_onTap_runningActionsCount = 0;
} else if (window.obj6901_onTap_runningActionsCount == 0) {
	obj6901_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7407(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6901_onTap_runningActionsCount = window.obj6901_onTap_runningActionsCount - 1;
if (window.obj6901_onTap_runningActionsCount < 0) {
	window.obj6901_onTap_runningActionsCount = 0;
} else if (window.obj6901_onTap_runningActionsCount == 0) {
	obj6901_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj6901_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6901_onTap_activeActionGroupIndex = -1;
		$("#obj6901").trigger("obj6901_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6901) {
				console.warn("de-queueing event obj6901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6901_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_7410();
function playAudioFile_7410() {
	window.obj6901_onTap_runningActionsCount = obj6901_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7410")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7410");
			$("#obj_audio_playSoundFile7410").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj6901_onTap_runningActionsCount = window.obj6901_onTap_runningActionsCount - 1;
if (window.obj6901_onTap_runningActionsCount < 0) {
	window.obj6901_onTap_runningActionsCount = 0;
} else if (window.obj6901_onTap_runningActionsCount == 0) {
	obj6901_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj6901_onTap_runningActionsCount = window.obj6901_onTap_runningActionsCount - 1;
if (window.obj6901_onTap_runningActionsCount < 0) {
	window.obj6901_onTap_runningActionsCount = 0;
} else if (window.obj6901_onTap_runningActionsCount == 0) {
	obj6901_onTap_actionGroup3();
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
				window.obj6901_onTap_runningActionsCount = window.obj6901_onTap_runningActionsCount - 1;
if (window.obj6901_onTap_runningActionsCount < 0) {
	window.obj6901_onTap_runningActionsCount = 0;
} else if (window.obj6901_onTap_runningActionsCount == 0) {
	obj6901_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj6901_onTap_runningActionsCount = window.obj6901_onTap_runningActionsCount - 1;
if (window.obj6901_onTap_runningActionsCount < 0) {
	window.obj6901_onTap_runningActionsCount = 0;
} else if (window.obj6901_onTap_runningActionsCount == 0) {
	obj6901_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj6901_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6901_onTap_activeActionGroupIndex = -1;
		$("#obj6901").trigger("obj6901_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6901) {
				console.warn("de-queueing event obj6901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6901_onTap_activeActionGroupIndex = 3;
	






















};
obj6898_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6898_onTap_activeActionGroupIndex = -1;
		$("#obj6898").trigger("obj6898_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6898) {
				console.warn("de-queueing event obj6898." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6898").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6898_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj6893
(function(){
	window.obj6898_onTap_runningActionsCount = obj6898_onTap_runningActionsCount + 1;

	var selector = "#obj6893";
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
					window.obj6898_onTap_runningActionsCount = window.obj6898_onTap_runningActionsCount - 1;
if (window.obj6898_onTap_runningActionsCount < 0) {
	window.obj6898_onTap_runningActionsCount = 0;
} else if (window.obj6898_onTap_runningActionsCount == 0) {
	obj6898_onTap_actionGroup1();
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
				window.obj6898_onTap_runningActionsCount = window.obj6898_onTap_runningActionsCount - 1;
if (window.obj6898_onTap_runningActionsCount < 0) {
	window.obj6898_onTap_runningActionsCount = 0;
} else if (window.obj6898_onTap_runningActionsCount == 0) {
	obj6898_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj6898_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6898_onTap_activeActionGroupIndex = -1;
		$("#obj6898").trigger("obj6898_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6898) {
				console.warn("de-queueing event obj6898." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6898").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6898_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj1900 
hide_7408();
function hide_7408() {
	var selector = "#obj1900";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6898_onTap_runningActionsCount = obj6898_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6898_onTap_runningActionsCount = window.obj6898_onTap_runningActionsCount - 1;
if (window.obj6898_onTap_runningActionsCount < 0) {
	window.obj6898_onTap_runningActionsCount = 0;
} else if (window.obj6898_onTap_runningActionsCount == 0) {
	obj6898_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7408(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6898_onTap_runningActionsCount = window.obj6898_onTap_runningActionsCount - 1;
if (window.obj6898_onTap_runningActionsCount < 0) {
	window.obj6898_onTap_runningActionsCount = 0;
} else if (window.obj6898_onTap_runningActionsCount == 0) {
	obj6898_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj6898_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6898_onTap_activeActionGroupIndex = -1;
		$("#obj6898").trigger("obj6898_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6898) {
				console.warn("de-queueing event obj6898." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6898").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6898_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_7409();
function playAudioFile_7409() {
	window.obj6898_onTap_runningActionsCount = obj6898_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7409")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7409");
			$("#obj_audio_playSoundFile7409").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj6898_onTap_runningActionsCount = window.obj6898_onTap_runningActionsCount - 1;
if (window.obj6898_onTap_runningActionsCount < 0) {
	window.obj6898_onTap_runningActionsCount = 0;
} else if (window.obj6898_onTap_runningActionsCount == 0) {
	obj6898_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj6898_onTap_runningActionsCount = window.obj6898_onTap_runningActionsCount - 1;
if (window.obj6898_onTap_runningActionsCount < 0) {
	window.obj6898_onTap_runningActionsCount = 0;
} else if (window.obj6898_onTap_runningActionsCount == 0) {
	obj6898_onTap_actionGroup3();
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
				window.obj6898_onTap_runningActionsCount = window.obj6898_onTap_runningActionsCount - 1;
if (window.obj6898_onTap_runningActionsCount < 0) {
	window.obj6898_onTap_runningActionsCount = 0;
} else if (window.obj6898_onTap_runningActionsCount == 0) {
	obj6898_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj6898_onTap_runningActionsCount = window.obj6898_onTap_runningActionsCount - 1;
if (window.obj6898_onTap_runningActionsCount < 0) {
	window.obj6898_onTap_runningActionsCount = 0;
} else if (window.obj6898_onTap_runningActionsCount == 0) {
	obj6898_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj6898_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6898_onTap_activeActionGroupIndex = -1;
		$("#obj6898").trigger("obj6898_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6898) {
				console.warn("de-queueing event obj6898." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6898").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6898_onTap_activeActionGroupIndex = 3;
	






















};
obj7411_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7411_onTap_activeActionGroupIndex = -1;
		$("#obj7411").trigger("obj7411_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7411) {
				console.warn("de-queueing event obj7411." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7411").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7411_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj7426
(function(){
	window.obj7411_onTap_runningActionsCount = obj7411_onTap_runningActionsCount + 1;

	var selector = "#obj7426";
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
					window.obj7411_onTap_runningActionsCount = window.obj7411_onTap_runningActionsCount - 1;
if (window.obj7411_onTap_runningActionsCount < 0) {
	window.obj7411_onTap_runningActionsCount = 0;
} else if (window.obj7411_onTap_runningActionsCount == 0) {
	obj7411_onTap_actionGroup1();
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
				window.obj7411_onTap_runningActionsCount = window.obj7411_onTap_runningActionsCount - 1;
if (window.obj7411_onTap_runningActionsCount < 0) {
	window.obj7411_onTap_runningActionsCount = 0;
} else if (window.obj7411_onTap_runningActionsCount == 0) {
	obj7411_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj7411_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7411_onTap_activeActionGroupIndex = -1;
		$("#obj7411").trigger("obj7411_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7411) {
				console.warn("de-queueing event obj7411." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7411").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7411_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj7423 
hide_7414();
function hide_7414() {
	var selector = "#obj7423";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7411_onTap_runningActionsCount = obj7411_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7411_onTap_runningActionsCount = window.obj7411_onTap_runningActionsCount - 1;
if (window.obj7411_onTap_runningActionsCount < 0) {
	window.obj7411_onTap_runningActionsCount = 0;
} else if (window.obj7411_onTap_runningActionsCount == 0) {
	obj7411_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7414(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7411_onTap_runningActionsCount = window.obj7411_onTap_runningActionsCount - 1;
if (window.obj7411_onTap_runningActionsCount < 0) {
	window.obj7411_onTap_runningActionsCount = 0;
} else if (window.obj7411_onTap_runningActionsCount == 0) {
	obj7411_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj7411_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7411_onTap_activeActionGroupIndex = -1;
		$("#obj7411").trigger("obj7411_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7411) {
				console.warn("de-queueing event obj7411." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7411").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7411_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_7415();
function playAudioFile_7415() {
	window.obj7411_onTap_runningActionsCount = obj7411_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7415")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7415");
			$("#obj_audio_playSoundFile7415").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7411_onTap_runningActionsCount = window.obj7411_onTap_runningActionsCount - 1;
if (window.obj7411_onTap_runningActionsCount < 0) {
	window.obj7411_onTap_runningActionsCount = 0;
} else if (window.obj7411_onTap_runningActionsCount == 0) {
	obj7411_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7411_onTap_runningActionsCount = window.obj7411_onTap_runningActionsCount - 1;
if (window.obj7411_onTap_runningActionsCount < 0) {
	window.obj7411_onTap_runningActionsCount = 0;
} else if (window.obj7411_onTap_runningActionsCount == 0) {
	obj7411_onTap_actionGroup3();
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
				window.obj7411_onTap_runningActionsCount = window.obj7411_onTap_runningActionsCount - 1;
if (window.obj7411_onTap_runningActionsCount < 0) {
	window.obj7411_onTap_runningActionsCount = 0;
} else if (window.obj7411_onTap_runningActionsCount == 0) {
	obj7411_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj7411_onTap_runningActionsCount = window.obj7411_onTap_runningActionsCount - 1;
if (window.obj7411_onTap_runningActionsCount < 0) {
	window.obj7411_onTap_runningActionsCount = 0;
} else if (window.obj7411_onTap_runningActionsCount == 0) {
	obj7411_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj7411_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7411_onTap_activeActionGroupIndex = -1;
		$("#obj7411").trigger("obj7411_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7411) {
				console.warn("de-queueing event obj7411." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7411").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7411_onTap_activeActionGroupIndex = 3;
	






















};
obj7417_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7417_onTap_activeActionGroupIndex = -1;
		$("#obj7417").trigger("obj7417_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7417) {
				console.warn("de-queueing event obj7417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7417_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj7423
(function(){
	window.obj7417_onTap_runningActionsCount = obj7417_onTap_runningActionsCount + 1;

	var selector = "#obj7423";
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
					window.obj7417_onTap_runningActionsCount = window.obj7417_onTap_runningActionsCount - 1;
if (window.obj7417_onTap_runningActionsCount < 0) {
	window.obj7417_onTap_runningActionsCount = 0;
} else if (window.obj7417_onTap_runningActionsCount == 0) {
	obj7417_onTap_actionGroup1();
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
				window.obj7417_onTap_runningActionsCount = window.obj7417_onTap_runningActionsCount - 1;
if (window.obj7417_onTap_runningActionsCount < 0) {
	window.obj7417_onTap_runningActionsCount = 0;
} else if (window.obj7417_onTap_runningActionsCount == 0) {
	obj7417_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj7417_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7417_onTap_activeActionGroupIndex = -1;
		$("#obj7417").trigger("obj7417_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7417) {
				console.warn("de-queueing event obj7417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7417_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj7426 
hide_7420();
function hide_7420() {
	var selector = "#obj7426";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7417_onTap_runningActionsCount = obj7417_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7417_onTap_runningActionsCount = window.obj7417_onTap_runningActionsCount - 1;
if (window.obj7417_onTap_runningActionsCount < 0) {
	window.obj7417_onTap_runningActionsCount = 0;
} else if (window.obj7417_onTap_runningActionsCount == 0) {
	obj7417_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7420(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7417_onTap_runningActionsCount = window.obj7417_onTap_runningActionsCount - 1;
if (window.obj7417_onTap_runningActionsCount < 0) {
	window.obj7417_onTap_runningActionsCount = 0;
} else if (window.obj7417_onTap_runningActionsCount == 0) {
	obj7417_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj7417_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7417_onTap_activeActionGroupIndex = -1;
		$("#obj7417").trigger("obj7417_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7417) {
				console.warn("de-queueing event obj7417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7417_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_7421();
function playAudioFile_7421() {
	window.obj7417_onTap_runningActionsCount = obj7417_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7421")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7421");
			$("#obj_audio_playSoundFile7421").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7417_onTap_runningActionsCount = window.obj7417_onTap_runningActionsCount - 1;
if (window.obj7417_onTap_runningActionsCount < 0) {
	window.obj7417_onTap_runningActionsCount = 0;
} else if (window.obj7417_onTap_runningActionsCount == 0) {
	obj7417_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7417_onTap_runningActionsCount = window.obj7417_onTap_runningActionsCount - 1;
if (window.obj7417_onTap_runningActionsCount < 0) {
	window.obj7417_onTap_runningActionsCount = 0;
} else if (window.obj7417_onTap_runningActionsCount == 0) {
	obj7417_onTap_actionGroup3();
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
				window.obj7417_onTap_runningActionsCount = window.obj7417_onTap_runningActionsCount - 1;
if (window.obj7417_onTap_runningActionsCount < 0) {
	window.obj7417_onTap_runningActionsCount = 0;
} else if (window.obj7417_onTap_runningActionsCount == 0) {
	obj7417_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj7417_onTap_runningActionsCount = window.obj7417_onTap_runningActionsCount - 1;
if (window.obj7417_onTap_runningActionsCount < 0) {
	window.obj7417_onTap_runningActionsCount = 0;
} else if (window.obj7417_onTap_runningActionsCount == 0) {
	obj7417_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj7417_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7417_onTap_activeActionGroupIndex = -1;
		$("#obj7417").trigger("obj7417_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7417) {
				console.warn("de-queueing event obj7417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7417_onTap_activeActionGroupIndex = 3;
	






















};
obj1900_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1900_onTap_activeActionGroupIndex = -1;
		$("#obj1900").trigger("obj1900_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1900) {
				console.warn("de-queueing event obj1900." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1900").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1900_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1900 
switchImage_1971();
function switchImage_1971() {
	window.obj1900_onTap_runningActionsCount = obj1900_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1900";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1900_img";
	var fromImagePath = "../images/obj1900_image.png";
	var toImagePath = "../images/obj1900_image.png";
	var switchHelperId = "switchHelper260"
	var switchHelperRef = "#switchHelper260"
	var switchId = "260";
	var toSwitchId = "260";
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
				window.obj1900_onTap_runningActionsCount = window.obj1900_onTap_runningActionsCount - 1;
if (window.obj1900_onTap_runningActionsCount < 0) {
	window.obj1900_onTap_runningActionsCount = 0;
} else if (window.obj1900_onTap_runningActionsCount == 0) {
	obj1900_onTap_actionGroup1();
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
obj1900_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1900_onTap_activeActionGroupIndex = -1;
		$("#obj1900").trigger("obj1900_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1900) {
				console.warn("de-queueing event obj1900." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1900").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1900_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4684();
function playAudioFile_4684() {
	window.obj1900_onTap_runningActionsCount = obj1900_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4684")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4684");
			$("#obj_audio_playSoundFile4684").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1900_onTap_runningActionsCount = window.obj1900_onTap_runningActionsCount - 1;
if (window.obj1900_onTap_runningActionsCount < 0) {
	window.obj1900_onTap_runningActionsCount = 0;
} else if (window.obj1900_onTap_runningActionsCount == 0) {
	obj1900_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1900_onTap_runningActionsCount = window.obj1900_onTap_runningActionsCount - 1;
if (window.obj1900_onTap_runningActionsCount < 0) {
	window.obj1900_onTap_runningActionsCount = 0;
} else if (window.obj1900_onTap_runningActionsCount == 0) {
	obj1900_onTap_actionGroup2();
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
				window.obj1900_onTap_runningActionsCount = window.obj1900_onTap_runningActionsCount - 1;
if (window.obj1900_onTap_runningActionsCount < 0) {
	window.obj1900_onTap_runningActionsCount = 0;
} else if (window.obj1900_onTap_runningActionsCount == 0) {
	obj1900_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj1900_onTap_runningActionsCount = window.obj1900_onTap_runningActionsCount - 1;
if (window.obj1900_onTap_runningActionsCount < 0) {
	window.obj1900_onTap_runningActionsCount = 0;
} else if (window.obj1900_onTap_runningActionsCount == 0) {
	obj1900_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj1900_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1900_onTap_activeActionGroupIndex = -1;
		$("#obj1900").trigger("obj1900_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1900) {
				console.warn("de-queueing event obj1900." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1900").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1900_onTap_activeActionGroupIndex = 2;
	






















};
obj7426_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7426_onTap_activeActionGroupIndex = -1;
		$("#obj7426").trigger("obj7426_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7426) {
				console.warn("de-queueing event obj7426." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7426").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7426_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj7426 
switchImage_7428();
function switchImage_7428() {
	window.obj7426_onTap_runningActionsCount = obj7426_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj7426";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj7426_img";
	var fromImagePath = "../images/obj1900_image.png";
	var toImagePath = "../images/obj1900_image.png";
	var switchHelperId = "switchHelper262"
	var switchHelperRef = "#switchHelper262"
	var switchId = "262";
	var toSwitchId = "262";
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
				window.obj7426_onTap_runningActionsCount = window.obj7426_onTap_runningActionsCount - 1;
if (window.obj7426_onTap_runningActionsCount < 0) {
	window.obj7426_onTap_runningActionsCount = 0;
} else if (window.obj7426_onTap_runningActionsCount == 0) {
	obj7426_onTap_actionGroup1();
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
obj7426_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7426_onTap_activeActionGroupIndex = -1;
		$("#obj7426").trigger("obj7426_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7426) {
				console.warn("de-queueing event obj7426." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7426").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7426_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_7429();
function playAudioFile_7429() {
	window.obj7426_onTap_runningActionsCount = obj7426_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7429")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7429");
			$("#obj_audio_playSoundFile7429").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7426_onTap_runningActionsCount = window.obj7426_onTap_runningActionsCount - 1;
if (window.obj7426_onTap_runningActionsCount < 0) {
	window.obj7426_onTap_runningActionsCount = 0;
} else if (window.obj7426_onTap_runningActionsCount == 0) {
	obj7426_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7426_onTap_runningActionsCount = window.obj7426_onTap_runningActionsCount - 1;
if (window.obj7426_onTap_runningActionsCount < 0) {
	window.obj7426_onTap_runningActionsCount = 0;
} else if (window.obj7426_onTap_runningActionsCount == 0) {
	obj7426_onTap_actionGroup2();
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
				window.obj7426_onTap_runningActionsCount = window.obj7426_onTap_runningActionsCount - 1;
if (window.obj7426_onTap_runningActionsCount < 0) {
	window.obj7426_onTap_runningActionsCount = 0;
} else if (window.obj7426_onTap_runningActionsCount == 0) {
	obj7426_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj7426_onTap_runningActionsCount = window.obj7426_onTap_runningActionsCount - 1;
if (window.obj7426_onTap_runningActionsCount < 0) {
	window.obj7426_onTap_runningActionsCount = 0;
} else if (window.obj7426_onTap_runningActionsCount == 0) {
	obj7426_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj7426_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7426_onTap_activeActionGroupIndex = -1;
		$("#obj7426").trigger("obj7426_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7426) {
				console.warn("de-queueing event obj7426." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7426").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7426_onTap_activeActionGroupIndex = 2;
	






















};
obj7449_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7449_onTap_activeActionGroupIndex = -1;
		$("#obj7449").trigger("obj7449_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7449) {
				console.warn("de-queueing event obj7449." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7449").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7449_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj7464
(function(){
	window.obj7449_onTap_runningActionsCount = obj7449_onTap_runningActionsCount + 1;

	var selector = "#obj7464";
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
					window.obj7449_onTap_runningActionsCount = window.obj7449_onTap_runningActionsCount - 1;
if (window.obj7449_onTap_runningActionsCount < 0) {
	window.obj7449_onTap_runningActionsCount = 0;
} else if (window.obj7449_onTap_runningActionsCount == 0) {
	obj7449_onTap_actionGroup1();
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
				window.obj7449_onTap_runningActionsCount = window.obj7449_onTap_runningActionsCount - 1;
if (window.obj7449_onTap_runningActionsCount < 0) {
	window.obj7449_onTap_runningActionsCount = 0;
} else if (window.obj7449_onTap_runningActionsCount == 0) {
	obj7449_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj7449_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7449_onTap_activeActionGroupIndex = -1;
		$("#obj7449").trigger("obj7449_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7449) {
				console.warn("de-queueing event obj7449." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7449").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7449_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj7461 
hide_7452();
function hide_7452() {
	var selector = "#obj7461";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7449_onTap_runningActionsCount = obj7449_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7449_onTap_runningActionsCount = window.obj7449_onTap_runningActionsCount - 1;
if (window.obj7449_onTap_runningActionsCount < 0) {
	window.obj7449_onTap_runningActionsCount = 0;
} else if (window.obj7449_onTap_runningActionsCount == 0) {
	obj7449_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7452(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7449_onTap_runningActionsCount = window.obj7449_onTap_runningActionsCount - 1;
if (window.obj7449_onTap_runningActionsCount < 0) {
	window.obj7449_onTap_runningActionsCount = 0;
} else if (window.obj7449_onTap_runningActionsCount == 0) {
	obj7449_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj7449_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7449_onTap_activeActionGroupIndex = -1;
		$("#obj7449").trigger("obj7449_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7449) {
				console.warn("de-queueing event obj7449." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7449").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7449_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_7453();
function playAudioFile_7453() {
	window.obj7449_onTap_runningActionsCount = obj7449_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7453")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7453");
			$("#obj_audio_playSoundFile7453").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7449_onTap_runningActionsCount = window.obj7449_onTap_runningActionsCount - 1;
if (window.obj7449_onTap_runningActionsCount < 0) {
	window.obj7449_onTap_runningActionsCount = 0;
} else if (window.obj7449_onTap_runningActionsCount == 0) {
	obj7449_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7449_onTap_runningActionsCount = window.obj7449_onTap_runningActionsCount - 1;
if (window.obj7449_onTap_runningActionsCount < 0) {
	window.obj7449_onTap_runningActionsCount = 0;
} else if (window.obj7449_onTap_runningActionsCount == 0) {
	obj7449_onTap_actionGroup3();
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
				window.obj7449_onTap_runningActionsCount = window.obj7449_onTap_runningActionsCount - 1;
if (window.obj7449_onTap_runningActionsCount < 0) {
	window.obj7449_onTap_runningActionsCount = 0;
} else if (window.obj7449_onTap_runningActionsCount == 0) {
	obj7449_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj7449_onTap_runningActionsCount = window.obj7449_onTap_runningActionsCount - 1;
if (window.obj7449_onTap_runningActionsCount < 0) {
	window.obj7449_onTap_runningActionsCount = 0;
} else if (window.obj7449_onTap_runningActionsCount == 0) {
	obj7449_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj7449_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7449_onTap_activeActionGroupIndex = -1;
		$("#obj7449").trigger("obj7449_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7449) {
				console.warn("de-queueing event obj7449." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7449").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7449_onTap_activeActionGroupIndex = 3;
	






















};
obj7430_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7430_onTap_activeActionGroupIndex = -1;
		$("#obj7430").trigger("obj7430_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7430) {
				console.warn("de-queueing event obj7430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7430_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj7445
(function(){
	window.obj7430_onTap_runningActionsCount = obj7430_onTap_runningActionsCount + 1;

	var selector = "#obj7445";
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
					window.obj7430_onTap_runningActionsCount = window.obj7430_onTap_runningActionsCount - 1;
if (window.obj7430_onTap_runningActionsCount < 0) {
	window.obj7430_onTap_runningActionsCount = 0;
} else if (window.obj7430_onTap_runningActionsCount == 0) {
	obj7430_onTap_actionGroup1();
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
				window.obj7430_onTap_runningActionsCount = window.obj7430_onTap_runningActionsCount - 1;
if (window.obj7430_onTap_runningActionsCount < 0) {
	window.obj7430_onTap_runningActionsCount = 0;
} else if (window.obj7430_onTap_runningActionsCount == 0) {
	obj7430_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj7430_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7430_onTap_activeActionGroupIndex = -1;
		$("#obj7430").trigger("obj7430_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7430) {
				console.warn("de-queueing event obj7430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7430_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj7442 
hide_7433();
function hide_7433() {
	var selector = "#obj7442";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7430_onTap_runningActionsCount = obj7430_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7430_onTap_runningActionsCount = window.obj7430_onTap_runningActionsCount - 1;
if (window.obj7430_onTap_runningActionsCount < 0) {
	window.obj7430_onTap_runningActionsCount = 0;
} else if (window.obj7430_onTap_runningActionsCount == 0) {
	obj7430_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7433(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7430_onTap_runningActionsCount = window.obj7430_onTap_runningActionsCount - 1;
if (window.obj7430_onTap_runningActionsCount < 0) {
	window.obj7430_onTap_runningActionsCount = 0;
} else if (window.obj7430_onTap_runningActionsCount == 0) {
	obj7430_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj7430_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7430_onTap_activeActionGroupIndex = -1;
		$("#obj7430").trigger("obj7430_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7430) {
				console.warn("de-queueing event obj7430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7430_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_7434();
function playAudioFile_7434() {
	window.obj7430_onTap_runningActionsCount = obj7430_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7434")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7434");
			$("#obj_audio_playSoundFile7434").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7430_onTap_runningActionsCount = window.obj7430_onTap_runningActionsCount - 1;
if (window.obj7430_onTap_runningActionsCount < 0) {
	window.obj7430_onTap_runningActionsCount = 0;
} else if (window.obj7430_onTap_runningActionsCount == 0) {
	obj7430_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7430_onTap_runningActionsCount = window.obj7430_onTap_runningActionsCount - 1;
if (window.obj7430_onTap_runningActionsCount < 0) {
	window.obj7430_onTap_runningActionsCount = 0;
} else if (window.obj7430_onTap_runningActionsCount == 0) {
	obj7430_onTap_actionGroup3();
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
				window.obj7430_onTap_runningActionsCount = window.obj7430_onTap_runningActionsCount - 1;
if (window.obj7430_onTap_runningActionsCount < 0) {
	window.obj7430_onTap_runningActionsCount = 0;
} else if (window.obj7430_onTap_runningActionsCount == 0) {
	obj7430_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj7430_onTap_runningActionsCount = window.obj7430_onTap_runningActionsCount - 1;
if (window.obj7430_onTap_runningActionsCount < 0) {
	window.obj7430_onTap_runningActionsCount = 0;
} else if (window.obj7430_onTap_runningActionsCount == 0) {
	obj7430_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj7430_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7430_onTap_activeActionGroupIndex = -1;
		$("#obj7430").trigger("obj7430_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7430) {
				console.warn("de-queueing event obj7430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7430_onTap_activeActionGroupIndex = 3;
	






















};
obj7436_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7436_onTap_activeActionGroupIndex = -1;
		$("#obj7436").trigger("obj7436_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7436) {
				console.warn("de-queueing event obj7436." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7436").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7436_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj7442
(function(){
	window.obj7436_onTap_runningActionsCount = obj7436_onTap_runningActionsCount + 1;

	var selector = "#obj7442";
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
					window.obj7436_onTap_runningActionsCount = window.obj7436_onTap_runningActionsCount - 1;
if (window.obj7436_onTap_runningActionsCount < 0) {
	window.obj7436_onTap_runningActionsCount = 0;
} else if (window.obj7436_onTap_runningActionsCount == 0) {
	obj7436_onTap_actionGroup1();
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
				window.obj7436_onTap_runningActionsCount = window.obj7436_onTap_runningActionsCount - 1;
if (window.obj7436_onTap_runningActionsCount < 0) {
	window.obj7436_onTap_runningActionsCount = 0;
} else if (window.obj7436_onTap_runningActionsCount == 0) {
	obj7436_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj7436_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7436_onTap_activeActionGroupIndex = -1;
		$("#obj7436").trigger("obj7436_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7436) {
				console.warn("de-queueing event obj7436." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7436").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7436_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj7445 
hide_7439();
function hide_7439() {
	var selector = "#obj7445";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7436_onTap_runningActionsCount = obj7436_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7436_onTap_runningActionsCount = window.obj7436_onTap_runningActionsCount - 1;
if (window.obj7436_onTap_runningActionsCount < 0) {
	window.obj7436_onTap_runningActionsCount = 0;
} else if (window.obj7436_onTap_runningActionsCount == 0) {
	obj7436_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7439(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7436_onTap_runningActionsCount = window.obj7436_onTap_runningActionsCount - 1;
if (window.obj7436_onTap_runningActionsCount < 0) {
	window.obj7436_onTap_runningActionsCount = 0;
} else if (window.obj7436_onTap_runningActionsCount == 0) {
	obj7436_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj7436_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7436_onTap_activeActionGroupIndex = -1;
		$("#obj7436").trigger("obj7436_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7436) {
				console.warn("de-queueing event obj7436." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7436").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7436_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_7440();
function playAudioFile_7440() {
	window.obj7436_onTap_runningActionsCount = obj7436_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7440")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7440");
			$("#obj_audio_playSoundFile7440").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7436_onTap_runningActionsCount = window.obj7436_onTap_runningActionsCount - 1;
if (window.obj7436_onTap_runningActionsCount < 0) {
	window.obj7436_onTap_runningActionsCount = 0;
} else if (window.obj7436_onTap_runningActionsCount == 0) {
	obj7436_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7436_onTap_runningActionsCount = window.obj7436_onTap_runningActionsCount - 1;
if (window.obj7436_onTap_runningActionsCount < 0) {
	window.obj7436_onTap_runningActionsCount = 0;
} else if (window.obj7436_onTap_runningActionsCount == 0) {
	obj7436_onTap_actionGroup3();
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
				window.obj7436_onTap_runningActionsCount = window.obj7436_onTap_runningActionsCount - 1;
if (window.obj7436_onTap_runningActionsCount < 0) {
	window.obj7436_onTap_runningActionsCount = 0;
} else if (window.obj7436_onTap_runningActionsCount == 0) {
	obj7436_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj7436_onTap_runningActionsCount = window.obj7436_onTap_runningActionsCount - 1;
if (window.obj7436_onTap_runningActionsCount < 0) {
	window.obj7436_onTap_runningActionsCount = 0;
} else if (window.obj7436_onTap_runningActionsCount == 0) {
	obj7436_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj7436_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7436_onTap_activeActionGroupIndex = -1;
		$("#obj7436").trigger("obj7436_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7436) {
				console.warn("de-queueing event obj7436." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7436").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7436_onTap_activeActionGroupIndex = 3;
	






















};
obj7455_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7455_onTap_activeActionGroupIndex = -1;
		$("#obj7455").trigger("obj7455_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7455) {
				console.warn("de-queueing event obj7455." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7455").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7455_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj7461
(function(){
	window.obj7455_onTap_runningActionsCount = obj7455_onTap_runningActionsCount + 1;

	var selector = "#obj7461";
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
					window.obj7455_onTap_runningActionsCount = window.obj7455_onTap_runningActionsCount - 1;
if (window.obj7455_onTap_runningActionsCount < 0) {
	window.obj7455_onTap_runningActionsCount = 0;
} else if (window.obj7455_onTap_runningActionsCount == 0) {
	obj7455_onTap_actionGroup1();
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
				window.obj7455_onTap_runningActionsCount = window.obj7455_onTap_runningActionsCount - 1;
if (window.obj7455_onTap_runningActionsCount < 0) {
	window.obj7455_onTap_runningActionsCount = 0;
} else if (window.obj7455_onTap_runningActionsCount == 0) {
	obj7455_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj7455_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7455_onTap_activeActionGroupIndex = -1;
		$("#obj7455").trigger("obj7455_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7455) {
				console.warn("de-queueing event obj7455." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7455").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7455_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj7464 
hide_7458();
function hide_7458() {
	var selector = "#obj7464";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7455_onTap_runningActionsCount = obj7455_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7455_onTap_runningActionsCount = window.obj7455_onTap_runningActionsCount - 1;
if (window.obj7455_onTap_runningActionsCount < 0) {
	window.obj7455_onTap_runningActionsCount = 0;
} else if (window.obj7455_onTap_runningActionsCount == 0) {
	obj7455_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7458(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7455_onTap_runningActionsCount = window.obj7455_onTap_runningActionsCount - 1;
if (window.obj7455_onTap_runningActionsCount < 0) {
	window.obj7455_onTap_runningActionsCount = 0;
} else if (window.obj7455_onTap_runningActionsCount == 0) {
	obj7455_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj7455_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7455_onTap_activeActionGroupIndex = -1;
		$("#obj7455").trigger("obj7455_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7455) {
				console.warn("de-queueing event obj7455." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7455").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7455_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_7459();
function playAudioFile_7459() {
	window.obj7455_onTap_runningActionsCount = obj7455_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7459")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7459");
			$("#obj_audio_playSoundFile7459").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7455_onTap_runningActionsCount = window.obj7455_onTap_runningActionsCount - 1;
if (window.obj7455_onTap_runningActionsCount < 0) {
	window.obj7455_onTap_runningActionsCount = 0;
} else if (window.obj7455_onTap_runningActionsCount == 0) {
	obj7455_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7455_onTap_runningActionsCount = window.obj7455_onTap_runningActionsCount - 1;
if (window.obj7455_onTap_runningActionsCount < 0) {
	window.obj7455_onTap_runningActionsCount = 0;
} else if (window.obj7455_onTap_runningActionsCount == 0) {
	obj7455_onTap_actionGroup3();
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
				window.obj7455_onTap_runningActionsCount = window.obj7455_onTap_runningActionsCount - 1;
if (window.obj7455_onTap_runningActionsCount < 0) {
	window.obj7455_onTap_runningActionsCount = 0;
} else if (window.obj7455_onTap_runningActionsCount == 0) {
	obj7455_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj7455_onTap_runningActionsCount = window.obj7455_onTap_runningActionsCount - 1;
if (window.obj7455_onTap_runningActionsCount < 0) {
	window.obj7455_onTap_runningActionsCount = 0;
} else if (window.obj7455_onTap_runningActionsCount == 0) {
	obj7455_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj7455_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7455_onTap_activeActionGroupIndex = -1;
		$("#obj7455").trigger("obj7455_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7455) {
				console.warn("de-queueing event obj7455." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7455").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7455_onTap_activeActionGroupIndex = 3;
	






















};
obj7464_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7464_onTap_activeActionGroupIndex = -1;
		$("#obj7464").trigger("obj7464_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7464) {
				console.warn("de-queueing event obj7464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7464_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj7464 
switchImage_7466();
function switchImage_7466() {
	window.obj7464_onTap_runningActionsCount = obj7464_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj7464";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj7464_img";
	var fromImagePath = "../images/obj1900_image.png";
	var toImagePath = "../images/obj1900_image.png";
	var switchHelperId = "switchHelper268"
	var switchHelperRef = "#switchHelper268"
	var switchId = "268";
	var toSwitchId = "268";
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
				window.obj7464_onTap_runningActionsCount = window.obj7464_onTap_runningActionsCount - 1;
if (window.obj7464_onTap_runningActionsCount < 0) {
	window.obj7464_onTap_runningActionsCount = 0;
} else if (window.obj7464_onTap_runningActionsCount == 0) {
	obj7464_onTap_actionGroup1();
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
obj7464_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7464_onTap_activeActionGroupIndex = -1;
		$("#obj7464").trigger("obj7464_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7464) {
				console.warn("de-queueing event obj7464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7464_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_7467();
function playAudioFile_7467() {
	window.obj7464_onTap_runningActionsCount = obj7464_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7467")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7467");
			$("#obj_audio_playSoundFile7467").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7464_onTap_runningActionsCount = window.obj7464_onTap_runningActionsCount - 1;
if (window.obj7464_onTap_runningActionsCount < 0) {
	window.obj7464_onTap_runningActionsCount = 0;
} else if (window.obj7464_onTap_runningActionsCount == 0) {
	obj7464_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7464_onTap_runningActionsCount = window.obj7464_onTap_runningActionsCount - 1;
if (window.obj7464_onTap_runningActionsCount < 0) {
	window.obj7464_onTap_runningActionsCount = 0;
} else if (window.obj7464_onTap_runningActionsCount == 0) {
	obj7464_onTap_actionGroup2();
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
				window.obj7464_onTap_runningActionsCount = window.obj7464_onTap_runningActionsCount - 1;
if (window.obj7464_onTap_runningActionsCount < 0) {
	window.obj7464_onTap_runningActionsCount = 0;
} else if (window.obj7464_onTap_runningActionsCount == 0) {
	obj7464_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj7464_onTap_runningActionsCount = window.obj7464_onTap_runningActionsCount - 1;
if (window.obj7464_onTap_runningActionsCount < 0) {
	window.obj7464_onTap_runningActionsCount = 0;
} else if (window.obj7464_onTap_runningActionsCount == 0) {
	obj7464_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj7464_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7464_onTap_activeActionGroupIndex = -1;
		$("#obj7464").trigger("obj7464_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7464) {
				console.warn("de-queueing event obj7464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7464_onTap_activeActionGroupIndex = 2;
	






















};
obj7445_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7445_onTap_activeActionGroupIndex = -1;
		$("#obj7445").trigger("obj7445_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7445) {
				console.warn("de-queueing event obj7445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7445_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj7445 
switchImage_7447();
function switchImage_7447() {
	window.obj7445_onTap_runningActionsCount = obj7445_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj7445";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj7445_img";
	var fromImagePath = "../images/obj1900_image.png";
	var toImagePath = "../images/obj1900_image.png";
	var switchHelperId = "switchHelper270"
	var switchHelperRef = "#switchHelper270"
	var switchId = "270";
	var toSwitchId = "270";
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
				window.obj7445_onTap_runningActionsCount = window.obj7445_onTap_runningActionsCount - 1;
if (window.obj7445_onTap_runningActionsCount < 0) {
	window.obj7445_onTap_runningActionsCount = 0;
} else if (window.obj7445_onTap_runningActionsCount == 0) {
	obj7445_onTap_actionGroup1();
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
obj7445_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7445_onTap_activeActionGroupIndex = -1;
		$("#obj7445").trigger("obj7445_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7445) {
				console.warn("de-queueing event obj7445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7445_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_7448();
function playAudioFile_7448() {
	window.obj7445_onTap_runningActionsCount = obj7445_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7448")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7448");
			$("#obj_audio_playSoundFile7448").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7445_onTap_runningActionsCount = window.obj7445_onTap_runningActionsCount - 1;
if (window.obj7445_onTap_runningActionsCount < 0) {
	window.obj7445_onTap_runningActionsCount = 0;
} else if (window.obj7445_onTap_runningActionsCount == 0) {
	obj7445_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7445_onTap_runningActionsCount = window.obj7445_onTap_runningActionsCount - 1;
if (window.obj7445_onTap_runningActionsCount < 0) {
	window.obj7445_onTap_runningActionsCount = 0;
} else if (window.obj7445_onTap_runningActionsCount == 0) {
	obj7445_onTap_actionGroup2();
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
				window.obj7445_onTap_runningActionsCount = window.obj7445_onTap_runningActionsCount - 1;
if (window.obj7445_onTap_runningActionsCount < 0) {
	window.obj7445_onTap_runningActionsCount = 0;
} else if (window.obj7445_onTap_runningActionsCount == 0) {
	obj7445_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj7445_onTap_runningActionsCount = window.obj7445_onTap_runningActionsCount - 1;
if (window.obj7445_onTap_runningActionsCount < 0) {
	window.obj7445_onTap_runningActionsCount = 0;
} else if (window.obj7445_onTap_runningActionsCount == 0) {
	obj7445_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj7445_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7445_onTap_activeActionGroupIndex = -1;
		$("#obj7445").trigger("obj7445_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7445) {
				console.warn("de-queueing event obj7445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7445_onTap_activeActionGroupIndex = 2;
	






















};
obj8166_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8166_onTap_activeActionGroupIndex = -1;
		$("#obj8166").trigger("obj8166_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8166) {
				console.warn("de-queueing event obj8166." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8166").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8166_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_8170();
function runjs_8170() {
	window.obj8166_onTap_runningActionsCount = obj8166_onTap_runningActionsCount + 1;

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
		window.obj8166_onTap_runningActionsCount = window.obj8166_onTap_runningActionsCount - 1;
if (window.obj8166_onTap_runningActionsCount < 0) {
	window.obj8166_onTap_runningActionsCount = 0;
} else if (window.obj8166_onTap_runningActionsCount == 0) {
	obj8166_onTap_actionGroup1();
}
	}, 1);
}







};
obj8166_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8166_onTap_activeActionGroupIndex = -1;
		$("#obj8166").trigger("obj8166_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8166) {
				console.warn("de-queueing event obj8166." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8166").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8166_onTap_activeActionGroupIndex = 1;
	






















};
obj8185_SCEventReadAloudStarted_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8185_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj8185").trigger("obj8185_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8185) {
				console.warn("de-queueing event obj8185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8185_SCEventReadAloudStarted_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj8185 
switchImage_8189();
function switchImage_8189() {
	window.obj8185_SCEventReadAloudStarted_runningActionsCount = obj8185_SCEventReadAloudStarted_runningActionsCount + 1;

	var targetObjectId = "#obj8185";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj8185_img";
	var fromImagePath = "../images/obj8185_image.png";
	var toImagePath = "../images/switch50_to.png";
	var switchHelperId = "switchHelper272"
	var switchHelperRef = "#switchHelper272"
	var switchId = "272";
	var toSwitchId = "272";
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
				window.obj8185_SCEventReadAloudStarted_runningActionsCount = window.obj8185_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj8185_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj8185_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj8185_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj8185_SCEventReadAloudStarted_actionGroup1();
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
obj8185_SCEventReadAloudStarted_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8185_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj8185").trigger("obj8185_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8185) {
				console.warn("de-queueing event obj8185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8185_SCEventReadAloudStarted_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_8190();
function runjs_8190() {
	window.obj8185_SCEventReadAloudStarted_runningActionsCount = obj8185_SCEventReadAloudStarted_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over Pressed');
}
	
	setTimeout(function() {
		window.obj8185_SCEventReadAloudStarted_runningActionsCount = window.obj8185_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj8185_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj8185_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj8185_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj8185_SCEventReadAloudStarted_actionGroup2();
}
	}, 1);
}







};
obj8185_SCEventReadAloudStarted_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8185_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj8185").trigger("obj8185_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8185) {
				console.warn("de-queueing event obj8185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8185_SCEventReadAloudStarted_activeActionGroupIndex = 2;
	






















};
obj8185_SCEventReadAloudStopped_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8185_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj8185").trigger("obj8185_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8185) {
				console.warn("de-queueing event obj8185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8185_SCEventReadAloudStopped_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj8185 
switchImage_8195();
function switchImage_8195() {
	window.obj8185_SCEventReadAloudStopped_runningActionsCount = obj8185_SCEventReadAloudStopped_runningActionsCount + 1;

	var targetObjectId = "#obj8185";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj8185_img";
	var fromImagePath = "../images/obj8185_image.png";
	var toImagePath = "../images/obj8185_image.png";
	var switchHelperId = "switchHelper273"
	var switchHelperRef = "#switchHelper273"
	var switchId = "273";
	var toSwitchId = "273";
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
				window.obj8185_SCEventReadAloudStopped_runningActionsCount = window.obj8185_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj8185_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj8185_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj8185_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj8185_SCEventReadAloudStopped_actionGroup1();
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
obj8185_SCEventReadAloudStopped_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8185_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj8185").trigger("obj8185_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8185) {
				console.warn("de-queueing event obj8185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8185_SCEventReadAloudStopped_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_8196();
function runjs_8196() {
	window.obj8185_SCEventReadAloudStopped_runningActionsCount = obj8185_SCEventReadAloudStopped_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over');
}
	
	setTimeout(function() {
		window.obj8185_SCEventReadAloudStopped_runningActionsCount = window.obj8185_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj8185_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj8185_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj8185_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj8185_SCEventReadAloudStopped_actionGroup2();
}
	}, 1);
}







};
obj8185_SCEventReadAloudStopped_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8185_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj8185").trigger("obj8185_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8185) {
				console.warn("de-queueing event obj8185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8185_SCEventReadAloudStopped_activeActionGroupIndex = 2;
	






















};
obj8156_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8156_onTap_activeActionGroupIndex = -1;
		$("#obj8156").trigger("obj8156_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8156) {
				console.warn("de-queueing event obj8156." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8156").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8156_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_8158();
function runjs_8158() {
	window.obj8156_onTap_runningActionsCount = obj8156_onTap_runningActionsCount + 1;

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
		window.obj8156_onTap_runningActionsCount = window.obj8156_onTap_runningActionsCount - 1;
if (window.obj8156_onTap_runningActionsCount < 0) {
	window.obj8156_onTap_runningActionsCount = 0;
} else if (window.obj8156_onTap_runningActionsCount == 0) {
	obj8156_onTap_actionGroup1();
}
	}, 1);
}







};
obj8156_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8156_onTap_activeActionGroupIndex = -1;
		$("#obj8156").trigger("obj8156_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8156) {
				console.warn("de-queueing event obj8156." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8156").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8156_onTap_activeActionGroupIndex = 1;
	






















};
obj8181_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8181_onTap_activeActionGroupIndex = -1;
		$("#obj8181").trigger("obj8181_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8181) {
				console.warn("de-queueing event obj8181." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8181").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8181_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj8181 
switchImage_8183();
function switchImage_8183() {
	window.obj8181_onTap_runningActionsCount = obj8181_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj8181";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj8181_img";
	var fromImagePath = "../images/obj8181_image.png";
	var toImagePath = "../images/switch52_to.png";
	var switchHelperId = "switchHelper274"
	var switchHelperRef = "#switchHelper274"
	var switchId = "274";
	var toSwitchId = "274";
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
				window.obj8181_onTap_runningActionsCount = window.obj8181_onTap_runningActionsCount - 1;
if (window.obj8181_onTap_runningActionsCount < 0) {
	window.obj8181_onTap_runningActionsCount = 0;
} else if (window.obj8181_onTap_runningActionsCount == 0) {
	obj8181_onTap_actionGroup1();
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
obj8181_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8181_onTap_activeActionGroupIndex = -1;
		$("#obj8181").trigger("obj8181_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8181) {
				console.warn("de-queueing event obj8181." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8181").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8181_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_8184();
function runjs_8184() {
	window.obj8181_onTap_runningActionsCount = obj8181_onTap_runningActionsCount + 1;

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
		window.obj8181_onTap_runningActionsCount = window.obj8181_onTap_runningActionsCount - 1;
if (window.obj8181_onTap_runningActionsCount < 0) {
	window.obj8181_onTap_runningActionsCount = 0;
} else if (window.obj8181_onTap_runningActionsCount == 0) {
	obj8181_onTap_actionGroup2();
}
	}, 1);
}







};
obj8181_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8181_onTap_activeActionGroupIndex = -1;
		$("#obj8181").trigger("obj8181_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8181) {
				console.warn("de-queueing event obj8181." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8181").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8181_onTap_activeActionGroupIndex = 2;
	






















};
obj8178_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8178_onTap_activeActionGroupIndex = -1;
		$("#obj8178").trigger("obj8178_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8178) {
				console.warn("de-queueing event obj8178." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8178").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8178_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_8180();
function goToPage_8180() {
	window.obj8178_onTap_runningActionsCount = obj8178_onTap_runningActionsCount + 1;
	$("#anchor275")[0].click();
	window.obj8178_onTap_runningActionsCount = window.obj8178_onTap_runningActionsCount - 1;
if (window.obj8178_onTap_runningActionsCount < 0) {
	window.obj8178_onTap_runningActionsCount = 0;
} else if (window.obj8178_onTap_runningActionsCount == 0) {
	obj8178_onTap_actionGroup1();
}
}





















};
obj8178_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8178_onTap_activeActionGroupIndex = -1;
		$("#obj8178").trigger("obj8178_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8178) {
				console.warn("de-queueing event obj8178." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8178").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8178_onTap_activeActionGroupIndex = 1;
	






















};
obj8163_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8163_onTap_activeActionGroupIndex = -1;
		$("#obj8163").trigger("obj8163_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8163) {
				console.warn("de-queueing event obj8163." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8163").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8163_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_8165();
function goToPage_8165() {
	window.obj8163_onTap_runningActionsCount = obj8163_onTap_runningActionsCount + 1;
	$("#anchor276")[0].click();
	window.obj8163_onTap_runningActionsCount = window.obj8163_onTap_runningActionsCount - 1;
if (window.obj8163_onTap_runningActionsCount < 0) {
	window.obj8163_onTap_runningActionsCount = 0;
} else if (window.obj8163_onTap_runningActionsCount == 0) {
	obj8163_onTap_actionGroup1();
}
}





















};
obj8163_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8163_onTap_activeActionGroupIndex = -1;
		$("#obj8163").trigger("obj8163_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8163) {
				console.warn("de-queueing event obj8163." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8163").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8163_onTap_activeActionGroupIndex = 1;
	






















};
obj8147_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8147_onTap_activeActionGroupIndex = -1;
		$("#obj8147").trigger("obj8147_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8147) {
				console.warn("de-queueing event obj8147." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8147").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8147_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_8150();
function runjs_8150() {
	window.obj8147_onTap_runningActionsCount = obj8147_onTap_runningActionsCount + 1;

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
		window.obj8147_onTap_runningActionsCount = window.obj8147_onTap_runningActionsCount - 1;
if (window.obj8147_onTap_runningActionsCount < 0) {
	window.obj8147_onTap_runningActionsCount = 0;
} else if (window.obj8147_onTap_runningActionsCount == 0) {
	obj8147_onTap_actionGroup1();
}
	}, 1);
}







};
obj8147_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8147_onTap_activeActionGroupIndex = -1;
		$("#obj8147").trigger("obj8147_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8147) {
				console.warn("de-queueing event obj8147." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8147").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8147_onTap_activeActionGroupIndex = 1;
	






















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		









































































/*
 *
 *   obj6901: Event Touch Down
 *
 */
$("#obj6901").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj6901_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6901_onTap is still running");
	return;
}
var obj6901_onTap_runningActionsCount = 0;
var obj6901_onTap_loopCount = 0;
obj6901_onTap_actionGroup0();
});










/*
 *
 *   obj6898: Event Touch Down
 *
 */
$("#obj6898").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj6898_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6898_onTap is still running");
	return;
}
var obj6898_onTap_runningActionsCount = 0;
var obj6898_onTap_loopCount = 0;
obj6898_onTap_actionGroup0();
});










/*
 *
 *   obj7411: Event Touch Down
 *
 */
$("#obj7411").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7411_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7411_onTap is still running");
	return;
}
var obj7411_onTap_runningActionsCount = 0;
var obj7411_onTap_loopCount = 0;
obj7411_onTap_actionGroup0();
});










/*
 *
 *   obj7417: Event Touch Down
 *
 */
$("#obj7417").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7417_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7417_onTap is still running");
	return;
}
var obj7417_onTap_runningActionsCount = 0;
var obj7417_onTap_loopCount = 0;
obj7417_onTap_actionGroup0();
});










/*
 *
 *   obj1900: Event Touch Down
 *
 */
$("#obj1900").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj1900_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1900_onTap is still running");
	return;
}
var obj1900_onTap_runningActionsCount = 0;
var obj1900_onTap_loopCount = 0;
obj1900_onTap_actionGroup0();
});










/*
 *
 *   obj7426: Event Touch Down
 *
 */
$("#obj7426").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7426_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7426_onTap is still running");
	return;
}
var obj7426_onTap_runningActionsCount = 0;
var obj7426_onTap_loopCount = 0;
obj7426_onTap_actionGroup0();
});


















































/*
 *
 *   obj7449: Event Touch Down
 *
 */
$("#obj7449").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7449_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7449_onTap is still running");
	return;
}
var obj7449_onTap_runningActionsCount = 0;
var obj7449_onTap_loopCount = 0;
obj7449_onTap_actionGroup0();
});










/*
 *
 *   obj7430: Event Touch Down
 *
 */
$("#obj7430").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7430_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7430_onTap is still running");
	return;
}
var obj7430_onTap_runningActionsCount = 0;
var obj7430_onTap_loopCount = 0;
obj7430_onTap_actionGroup0();
});










/*
 *
 *   obj7436: Event Touch Down
 *
 */
$("#obj7436").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7436_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7436_onTap is still running");
	return;
}
var obj7436_onTap_runningActionsCount = 0;
var obj7436_onTap_loopCount = 0;
obj7436_onTap_actionGroup0();
});










/*
 *
 *   obj7455: Event Touch Down
 *
 */
$("#obj7455").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7455_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7455_onTap is still running");
	return;
}
var obj7455_onTap_runningActionsCount = 0;
var obj7455_onTap_loopCount = 0;
obj7455_onTap_actionGroup0();
});










/*
 *
 *   obj7464: Event Touch Down
 *
 */
$("#obj7464").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7464_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7464_onTap is still running");
	return;
}
var obj7464_onTap_runningActionsCount = 0;
var obj7464_onTap_loopCount = 0;
obj7464_onTap_actionGroup0();
});






























/*
 *
 *   obj7445: Event Touch Down
 *
 */
$("#obj7445").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7445_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7445_onTap is still running");
	return;
}
var obj7445_onTap_runningActionsCount = 0;
var obj7445_onTap_loopCount = 0;
obj7445_onTap_actionGroup0();
});


















































/*
 *
 *   obj8166: Event Touch Down
 *
 */
$("#obj8166").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj8166_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8166_onTap is still running");
	return;
}
var obj8166_onTap_runningActionsCount = 0;
var obj8166_onTap_loopCount = 0;
obj8166_onTap_actionGroup0();
});
























/*
 *
 *   obj8185: Event SCEventReadAloudStarted
 *
 */
$("#obj8185").bind("SCEventReadAloudStarted", function(event) {
	if (window.obj8185_SCEventReadAloudStarted_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8185_SCEventReadAloudStarted is still running");
	return;
}
var obj8185_SCEventReadAloudStarted_runningActionsCount = 0;
var obj8185_SCEventReadAloudStarted_loopCount = 0;
obj8185_SCEventReadAloudStarted_actionGroup0();
});
/*
 *
 *   obj8185: Event SCEventReadAloudStopped
 *
 */
$("#obj8185").bind("SCEventReadAloudStopped", function(event) {
	if (window.obj8185_SCEventReadAloudStopped_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8185_SCEventReadAloudStopped is still running");
	return;
}
var obj8185_SCEventReadAloudStopped_runningActionsCount = 0;
var obj8185_SCEventReadAloudStopped_loopCount = 0;
obj8185_SCEventReadAloudStopped_actionGroup0();
});





/*
 *
 *   obj8156: Event Touch Down
 *
 */
$("#obj8156").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj8156_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8156_onTap is still running");
	return;
}
var obj8156_onTap_runningActionsCount = 0;
var obj8156_onTap_loopCount = 0;
obj8156_onTap_actionGroup0();
});










/*
 *
 *   obj8181: Event Touch Down
 *
 */
$("#obj8181").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj8181_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8181_onTap is still running");
	return;
}
var obj8181_onTap_runningActionsCount = 0;
var obj8181_onTap_loopCount = 0;
obj8181_onTap_actionGroup0();
});










/*
 *
 *   obj8178: Event Touch Down
 *
 */
$("#obj8178").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj8178_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8178_onTap is still running");
	return;
}
var obj8178_onTap_runningActionsCount = 0;
var obj8178_onTap_loopCount = 0;
obj8178_onTap_actionGroup0();
});










/*
 *
 *   obj8163: Event Touch Down
 *
 */
$("#obj8163").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj8163_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8163_onTap is still running");
	return;
}
var obj8163_onTap_runningActionsCount = 0;
var obj8163_onTap_loopCount = 0;
obj8163_onTap_actionGroup0();
});










/*
 *
 *   obj8147: Event Touch Down
 *
 */
$("#obj8147").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj8147_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8147_onTap is still running");
	return;
}
var obj8147_onTap_runningActionsCount = 0;
var obj8147_onTap_loopCount = 0;
obj8147_onTap_actionGroup0();
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
	
$("#obj1557").trigger('SCEventShow');
$("#obj2499").trigger('SCEventShow');
$("#obj6678").trigger('SCEventShow');
$("#obj7095").trigger('SCEventShow');
$("#obj1949").trigger('SCEventShow');
$("#obj1946").trigger('SCEventShow');
$("#obj6901").trigger('SCEventShow');
$("#obj6898").trigger('SCEventShow');
$("#obj7411").trigger('SCEventShow');
$("#obj7417").trigger('SCEventShow');
$("#obj1951").trigger('SCEventShow');
$("#obj1953").trigger('SCEventShow');
$("#obj7449").trigger('SCEventShow');
$("#obj7430").trigger('SCEventShow');
$("#obj7436").trigger('SCEventShow');
$("#obj7455").trigger('SCEventShow');
$("#obj4500").trigger('SCEventShow');
$("#obj1794").trigger('SCEventShow');
$("#obj8185").trigger('SCEventShow');
$("#obj8156").trigger('SCEventShow');
$("#obj8178").trigger('SCEventShow');
$("#obj8163").trigger('SCEventShow');
$("#obj8147").trigger('SCEventShow');
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