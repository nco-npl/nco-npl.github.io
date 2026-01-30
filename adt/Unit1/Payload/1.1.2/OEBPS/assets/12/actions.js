pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serofero : Unit 1";
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
var obj2208_onTap_activeActionGroupIndex = -1;
var obj2208_onTap_runningActionsCount = 0;
var obj2208_onTap_loopCount = 0;
var obj2204_onTap_activeActionGroupIndex = -1;
var obj2204_onTap_runningActionsCount = 0;
var obj2204_onTap_loopCount = 0;
var obj2206_onTap_activeActionGroupIndex = -1;
var obj2206_onTap_runningActionsCount = 0;
var obj2206_onTap_loopCount = 0;
var obj2194_onTap_activeActionGroupIndex = -1;
var obj2194_onTap_runningActionsCount = 0;
var obj2194_onTap_loopCount = 0;
var obj2200_onTap_activeActionGroupIndex = -1;
var obj2200_onTap_runningActionsCount = 0;
var obj2200_onTap_loopCount = 0;
var obj2202_onTap_activeActionGroupIndex = -1;
var obj2202_onTap_runningActionsCount = 0;
var obj2202_onTap_loopCount = 0;
var obj2198_onTap_activeActionGroupIndex = -1;
var obj2198_onTap_runningActionsCount = 0;
var obj2198_onTap_loopCount = 0;
var obj2196_onTap_activeActionGroupIndex = -1;
var obj2196_onTap_runningActionsCount = 0;
var obj2196_onTap_loopCount = 0;
var obj2210_onTap_activeActionGroupIndex = -1;
var obj2210_onTap_runningActionsCount = 0;
var obj2210_onTap_loopCount = 0;
var obj2214_onTap_activeActionGroupIndex = -1;
var obj2214_onTap_runningActionsCount = 0;
var obj2214_onTap_loopCount = 0;
var obj2212_onTap_activeActionGroupIndex = -1;
var obj2212_onTap_runningActionsCount = 0;
var obj2212_onTap_loopCount = 0;
var obj2216_onTap_activeActionGroupIndex = -1;
var obj2216_onTap_runningActionsCount = 0;
var obj2216_onTap_loopCount = 0;
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
	var switchHelperId = "switchHelper191"
	var switchHelperRef = "#switchHelper191"
	var switchId = "191";
	var toSwitchId = "191";
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
	var switchHelperId = "switchHelper192"
	var switchHelperRef = "#switchHelper192"
	var switchId = "192";
	var toSwitchId = "192";
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
	var switchHelperId = "switchHelper193"
	var switchHelperRef = "#switchHelper193"
	var switchId = "193";
	var toSwitchId = "193";
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
	$("#anchor194")[0].click();
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
	$("#anchor195")[0].click();
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
 *   obj2208: Event Touch Down
 *
 */
$("#obj2208").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
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
 *   obj2204: Event Touch Down
 *
 */
$("#obj2204").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
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
$("#obj2206").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
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
 *   obj2194: Event Touch Down
 *
 */
$("#obj2194").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
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
 *   obj2200: Event Touch Down
 *
 */
$("#obj2200").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
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
$("#obj2202").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
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
 *   obj2198: Event Touch Down
 *
 */
$("#obj2198").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
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
 *   obj2196: Event Touch Down
 *
 */
$("#obj2196").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
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
 *   obj2210: Event Touch Down
 *
 */
$("#obj2210").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
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
 *   obj2214: Event Touch Down
 *
 */
$("#obj2214").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
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
 *   obj2212: Event Touch Down
 *
 */
$("#obj2212").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
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
 *   obj2216: Event Touch Down
 *
 */
$("#obj2216").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
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
	
$("#obj1530").trigger('SCEventShow');
$("#obj4149").trigger('SCEventShow');
$("#obj2449").trigger('SCEventShow');
$("#obj2208").trigger('SCEventShow');
$("#obj2204").trigger('SCEventShow');
$("#obj2206").trigger('SCEventShow');
$("#obj2194").trigger('SCEventShow');
$("#obj2200").trigger('SCEventShow');
$("#obj2202").trigger('SCEventShow');
$("#obj2198").trigger('SCEventShow');
$("#obj2196").trigger('SCEventShow');
$("#obj2210").trigger('SCEventShow');
$("#obj2214").trigger('SCEventShow');
$("#obj2212").trigger('SCEventShow');
$("#obj2216").trigger('SCEventShow');
$("#obj4486").trigger('SCEventShow');
$("#obj1778").trigger('SCEventShow');
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