pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serofero - Unit 9";
pubcoder.page.id = pubcoder.page.id || 3983;
pubcoder.page.title = pubcoder.page.title || "16";
pubcoder.page.number = pubcoder.page.number || 16;
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
var obj4366_onTap_activeActionGroupIndex = -1;
var obj4366_onTap_runningActionsCount = 0;
var obj4366_onTap_loopCount = 0;
var obj4376_onTap_activeActionGroupIndex = -1;
var obj4376_onTap_runningActionsCount = 0;
var obj4376_onTap_loopCount = 0;
var obj4374_onTap_activeActionGroupIndex = -1;
var obj4374_onTap_runningActionsCount = 0;
var obj4374_onTap_loopCount = 0;
var obj4370_onTap_activeActionGroupIndex = -1;
var obj4370_onTap_runningActionsCount = 0;
var obj4370_onTap_loopCount = 0;
var obj4368_onTap_activeActionGroupIndex = -1;
var obj4368_onTap_runningActionsCount = 0;
var obj4368_onTap_loopCount = 0;
var obj4372_onTap_activeActionGroupIndex = -1;
var obj4372_onTap_runningActionsCount = 0;
var obj4372_onTap_loopCount = 0;
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
		
obj4366_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4366_onTap_activeActionGroupIndex = -1;
		$("#obj4366").trigger("obj4366_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4366) {
				console.warn("de-queueing event obj4366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4366_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj9309
(function(){
	window.obj4366_onTap_runningActionsCount = obj4366_onTap_runningActionsCount + 1;

	var selector = "#obj9309";
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
					window.obj4366_onTap_runningActionsCount = window.obj4366_onTap_runningActionsCount - 1;
if (window.obj4366_onTap_runningActionsCount < 0) {
	window.obj4366_onTap_runningActionsCount = 0;
} else if (window.obj4366_onTap_runningActionsCount == 0) {
	obj4366_onTap_actionGroup1();
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
				window.obj4366_onTap_runningActionsCount = window.obj4366_onTap_runningActionsCount - 1;
if (window.obj4366_onTap_runningActionsCount < 0) {
	window.obj4366_onTap_runningActionsCount = 0;
} else if (window.obj4366_onTap_runningActionsCount == 0) {
	obj4366_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4366_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4366_onTap_activeActionGroupIndex = -1;
		$("#obj4366").trigger("obj4366_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4366) {
				console.warn("de-queueing event obj4366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4366_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_9323();
function playAudioFile_9323() {
	window.obj4366_onTap_runningActionsCount = obj4366_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9323")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9323");
			$("#obj_audio_playSoundFile9323").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4366_onTap_runningActionsCount = window.obj4366_onTap_runningActionsCount - 1;
if (window.obj4366_onTap_runningActionsCount < 0) {
	window.obj4366_onTap_runningActionsCount = 0;
} else if (window.obj4366_onTap_runningActionsCount == 0) {
	obj4366_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4366_onTap_runningActionsCount = window.obj4366_onTap_runningActionsCount - 1;
if (window.obj4366_onTap_runningActionsCount < 0) {
	window.obj4366_onTap_runningActionsCount = 0;
} else if (window.obj4366_onTap_runningActionsCount == 0) {
	obj4366_onTap_actionGroup2();
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
				window.obj4366_onTap_runningActionsCount = window.obj4366_onTap_runningActionsCount - 1;
if (window.obj4366_onTap_runningActionsCount < 0) {
	window.obj4366_onTap_runningActionsCount = 0;
} else if (window.obj4366_onTap_runningActionsCount == 0) {
	obj4366_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4366_onTap_runningActionsCount = window.obj4366_onTap_runningActionsCount - 1;
if (window.obj4366_onTap_runningActionsCount < 0) {
	window.obj4366_onTap_runningActionsCount = 0;
} else if (window.obj4366_onTap_runningActionsCount == 0) {
	obj4366_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj4366_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4366_onTap_activeActionGroupIndex = -1;
		$("#obj4366").trigger("obj4366_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4366) {
				console.warn("de-queueing event obj4366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4366_onTap_activeActionGroupIndex = 2;
	






















};
obj4376_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4376_onTap_activeActionGroupIndex = -1;
		$("#obj4376").trigger("obj4376_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4376) {
				console.warn("de-queueing event obj4376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4376_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj9311
(function(){
	window.obj4376_onTap_runningActionsCount = obj4376_onTap_runningActionsCount + 1;

	var selector = "#obj9311";
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
					window.obj4376_onTap_runningActionsCount = window.obj4376_onTap_runningActionsCount - 1;
if (window.obj4376_onTap_runningActionsCount < 0) {
	window.obj4376_onTap_runningActionsCount = 0;
} else if (window.obj4376_onTap_runningActionsCount == 0) {
	obj4376_onTap_actionGroup1();
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
				window.obj4376_onTap_runningActionsCount = window.obj4376_onTap_runningActionsCount - 1;
if (window.obj4376_onTap_runningActionsCount < 0) {
	window.obj4376_onTap_runningActionsCount = 0;
} else if (window.obj4376_onTap_runningActionsCount == 0) {
	obj4376_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4376_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4376_onTap_activeActionGroupIndex = -1;
		$("#obj4376").trigger("obj4376_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4376) {
				console.warn("de-queueing event obj4376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4376_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_9325();
function playAudioFile_9325() {
	window.obj4376_onTap_runningActionsCount = obj4376_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9325")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9325");
			$("#obj_audio_playSoundFile9325").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4376_onTap_runningActionsCount = window.obj4376_onTap_runningActionsCount - 1;
if (window.obj4376_onTap_runningActionsCount < 0) {
	window.obj4376_onTap_runningActionsCount = 0;
} else if (window.obj4376_onTap_runningActionsCount == 0) {
	obj4376_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4376_onTap_runningActionsCount = window.obj4376_onTap_runningActionsCount - 1;
if (window.obj4376_onTap_runningActionsCount < 0) {
	window.obj4376_onTap_runningActionsCount = 0;
} else if (window.obj4376_onTap_runningActionsCount == 0) {
	obj4376_onTap_actionGroup2();
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
				window.obj4376_onTap_runningActionsCount = window.obj4376_onTap_runningActionsCount - 1;
if (window.obj4376_onTap_runningActionsCount < 0) {
	window.obj4376_onTap_runningActionsCount = 0;
} else if (window.obj4376_onTap_runningActionsCount == 0) {
	obj4376_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4376_onTap_runningActionsCount = window.obj4376_onTap_runningActionsCount - 1;
if (window.obj4376_onTap_runningActionsCount < 0) {
	window.obj4376_onTap_runningActionsCount = 0;
} else if (window.obj4376_onTap_runningActionsCount == 0) {
	obj4376_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj4376_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4376_onTap_activeActionGroupIndex = -1;
		$("#obj4376").trigger("obj4376_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4376) {
				console.warn("de-queueing event obj4376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4376_onTap_activeActionGroupIndex = 2;
	






















};
obj4374_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4374_onTap_activeActionGroupIndex = -1;
		$("#obj4374").trigger("obj4374_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4374) {
				console.warn("de-queueing event obj4374." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4374").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4374_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj9313
(function(){
	window.obj4374_onTap_runningActionsCount = obj4374_onTap_runningActionsCount + 1;

	var selector = "#obj9313";
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
					window.obj4374_onTap_runningActionsCount = window.obj4374_onTap_runningActionsCount - 1;
if (window.obj4374_onTap_runningActionsCount < 0) {
	window.obj4374_onTap_runningActionsCount = 0;
} else if (window.obj4374_onTap_runningActionsCount == 0) {
	obj4374_onTap_actionGroup1();
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
				window.obj4374_onTap_runningActionsCount = window.obj4374_onTap_runningActionsCount - 1;
if (window.obj4374_onTap_runningActionsCount < 0) {
	window.obj4374_onTap_runningActionsCount = 0;
} else if (window.obj4374_onTap_runningActionsCount == 0) {
	obj4374_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4374_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4374_onTap_activeActionGroupIndex = -1;
		$("#obj4374").trigger("obj4374_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4374) {
				console.warn("de-queueing event obj4374." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4374").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4374_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_9327();
function playAudioFile_9327() {
	window.obj4374_onTap_runningActionsCount = obj4374_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9327")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9327");
			$("#obj_audio_playSoundFile9327").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4374_onTap_runningActionsCount = window.obj4374_onTap_runningActionsCount - 1;
if (window.obj4374_onTap_runningActionsCount < 0) {
	window.obj4374_onTap_runningActionsCount = 0;
} else if (window.obj4374_onTap_runningActionsCount == 0) {
	obj4374_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4374_onTap_runningActionsCount = window.obj4374_onTap_runningActionsCount - 1;
if (window.obj4374_onTap_runningActionsCount < 0) {
	window.obj4374_onTap_runningActionsCount = 0;
} else if (window.obj4374_onTap_runningActionsCount == 0) {
	obj4374_onTap_actionGroup2();
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
				window.obj4374_onTap_runningActionsCount = window.obj4374_onTap_runningActionsCount - 1;
if (window.obj4374_onTap_runningActionsCount < 0) {
	window.obj4374_onTap_runningActionsCount = 0;
} else if (window.obj4374_onTap_runningActionsCount == 0) {
	obj4374_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4374_onTap_runningActionsCount = window.obj4374_onTap_runningActionsCount - 1;
if (window.obj4374_onTap_runningActionsCount < 0) {
	window.obj4374_onTap_runningActionsCount = 0;
} else if (window.obj4374_onTap_runningActionsCount == 0) {
	obj4374_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj4374_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4374_onTap_activeActionGroupIndex = -1;
		$("#obj4374").trigger("obj4374_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4374) {
				console.warn("de-queueing event obj4374." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4374").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4374_onTap_activeActionGroupIndex = 2;
	






















};
obj4370_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4370_onTap_activeActionGroupIndex = -1;
		$("#obj4370").trigger("obj4370_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4370) {
				console.warn("de-queueing event obj4370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4370_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj9317
(function(){
	window.obj4370_onTap_runningActionsCount = obj4370_onTap_runningActionsCount + 1;

	var selector = "#obj9317";
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
					window.obj4370_onTap_runningActionsCount = window.obj4370_onTap_runningActionsCount - 1;
if (window.obj4370_onTap_runningActionsCount < 0) {
	window.obj4370_onTap_runningActionsCount = 0;
} else if (window.obj4370_onTap_runningActionsCount == 0) {
	obj4370_onTap_actionGroup1();
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
				window.obj4370_onTap_runningActionsCount = window.obj4370_onTap_runningActionsCount - 1;
if (window.obj4370_onTap_runningActionsCount < 0) {
	window.obj4370_onTap_runningActionsCount = 0;
} else if (window.obj4370_onTap_runningActionsCount == 0) {
	obj4370_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4370_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4370_onTap_activeActionGroupIndex = -1;
		$("#obj4370").trigger("obj4370_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4370) {
				console.warn("de-queueing event obj4370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4370_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_9331();
function playAudioFile_9331() {
	window.obj4370_onTap_runningActionsCount = obj4370_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9331")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9331");
			$("#obj_audio_playSoundFile9331").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4370_onTap_runningActionsCount = window.obj4370_onTap_runningActionsCount - 1;
if (window.obj4370_onTap_runningActionsCount < 0) {
	window.obj4370_onTap_runningActionsCount = 0;
} else if (window.obj4370_onTap_runningActionsCount == 0) {
	obj4370_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4370_onTap_runningActionsCount = window.obj4370_onTap_runningActionsCount - 1;
if (window.obj4370_onTap_runningActionsCount < 0) {
	window.obj4370_onTap_runningActionsCount = 0;
} else if (window.obj4370_onTap_runningActionsCount == 0) {
	obj4370_onTap_actionGroup2();
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
				window.obj4370_onTap_runningActionsCount = window.obj4370_onTap_runningActionsCount - 1;
if (window.obj4370_onTap_runningActionsCount < 0) {
	window.obj4370_onTap_runningActionsCount = 0;
} else if (window.obj4370_onTap_runningActionsCount == 0) {
	obj4370_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4370_onTap_runningActionsCount = window.obj4370_onTap_runningActionsCount - 1;
if (window.obj4370_onTap_runningActionsCount < 0) {
	window.obj4370_onTap_runningActionsCount = 0;
} else if (window.obj4370_onTap_runningActionsCount == 0) {
	obj4370_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj4370_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4370_onTap_activeActionGroupIndex = -1;
		$("#obj4370").trigger("obj4370_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4370) {
				console.warn("de-queueing event obj4370." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4370").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4370_onTap_activeActionGroupIndex = 2;
	






















};
obj4368_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4368_onTap_activeActionGroupIndex = -1;
		$("#obj4368").trigger("obj4368_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4368) {
				console.warn("de-queueing event obj4368." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4368").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4368_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj9315
(function(){
	window.obj4368_onTap_runningActionsCount = obj4368_onTap_runningActionsCount + 1;

	var selector = "#obj9315";
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
					window.obj4368_onTap_runningActionsCount = window.obj4368_onTap_runningActionsCount - 1;
if (window.obj4368_onTap_runningActionsCount < 0) {
	window.obj4368_onTap_runningActionsCount = 0;
} else if (window.obj4368_onTap_runningActionsCount == 0) {
	obj4368_onTap_actionGroup1();
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
				window.obj4368_onTap_runningActionsCount = window.obj4368_onTap_runningActionsCount - 1;
if (window.obj4368_onTap_runningActionsCount < 0) {
	window.obj4368_onTap_runningActionsCount = 0;
} else if (window.obj4368_onTap_runningActionsCount == 0) {
	obj4368_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4368_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4368_onTap_activeActionGroupIndex = -1;
		$("#obj4368").trigger("obj4368_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4368) {
				console.warn("de-queueing event obj4368." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4368").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4368_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_9329();
function playAudioFile_9329() {
	window.obj4368_onTap_runningActionsCount = obj4368_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9329")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9329");
			$("#obj_audio_playSoundFile9329").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4368_onTap_runningActionsCount = window.obj4368_onTap_runningActionsCount - 1;
if (window.obj4368_onTap_runningActionsCount < 0) {
	window.obj4368_onTap_runningActionsCount = 0;
} else if (window.obj4368_onTap_runningActionsCount == 0) {
	obj4368_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4368_onTap_runningActionsCount = window.obj4368_onTap_runningActionsCount - 1;
if (window.obj4368_onTap_runningActionsCount < 0) {
	window.obj4368_onTap_runningActionsCount = 0;
} else if (window.obj4368_onTap_runningActionsCount == 0) {
	obj4368_onTap_actionGroup2();
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
				window.obj4368_onTap_runningActionsCount = window.obj4368_onTap_runningActionsCount - 1;
if (window.obj4368_onTap_runningActionsCount < 0) {
	window.obj4368_onTap_runningActionsCount = 0;
} else if (window.obj4368_onTap_runningActionsCount == 0) {
	obj4368_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4368_onTap_runningActionsCount = window.obj4368_onTap_runningActionsCount - 1;
if (window.obj4368_onTap_runningActionsCount < 0) {
	window.obj4368_onTap_runningActionsCount = 0;
} else if (window.obj4368_onTap_runningActionsCount == 0) {
	obj4368_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj4368_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4368_onTap_activeActionGroupIndex = -1;
		$("#obj4368").trigger("obj4368_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4368) {
				console.warn("de-queueing event obj4368." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4368").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4368_onTap_activeActionGroupIndex = 2;
	






















};
obj4372_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4372_onTap_activeActionGroupIndex = -1;
		$("#obj4372").trigger("obj4372_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4372) {
				console.warn("de-queueing event obj4372." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4372").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4372_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj9319
(function(){
	window.obj4372_onTap_runningActionsCount = obj4372_onTap_runningActionsCount + 1;

	var selector = "#obj9319";
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
					window.obj4372_onTap_runningActionsCount = window.obj4372_onTap_runningActionsCount - 1;
if (window.obj4372_onTap_runningActionsCount < 0) {
	window.obj4372_onTap_runningActionsCount = 0;
} else if (window.obj4372_onTap_runningActionsCount == 0) {
	obj4372_onTap_actionGroup1();
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
				window.obj4372_onTap_runningActionsCount = window.obj4372_onTap_runningActionsCount - 1;
if (window.obj4372_onTap_runningActionsCount < 0) {
	window.obj4372_onTap_runningActionsCount = 0;
} else if (window.obj4372_onTap_runningActionsCount == 0) {
	obj4372_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4372_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4372_onTap_activeActionGroupIndex = -1;
		$("#obj4372").trigger("obj4372_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4372) {
				console.warn("de-queueing event obj4372." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4372").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4372_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_9333();
function playAudioFile_9333() {
	window.obj4372_onTap_runningActionsCount = obj4372_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile9333")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile9333");
			$("#obj_audio_playSoundFile9333").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4372_onTap_runningActionsCount = window.obj4372_onTap_runningActionsCount - 1;
if (window.obj4372_onTap_runningActionsCount < 0) {
	window.obj4372_onTap_runningActionsCount = 0;
} else if (window.obj4372_onTap_runningActionsCount == 0) {
	obj4372_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4372_onTap_runningActionsCount = window.obj4372_onTap_runningActionsCount - 1;
if (window.obj4372_onTap_runningActionsCount < 0) {
	window.obj4372_onTap_runningActionsCount = 0;
} else if (window.obj4372_onTap_runningActionsCount == 0) {
	obj4372_onTap_actionGroup2();
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
				window.obj4372_onTap_runningActionsCount = window.obj4372_onTap_runningActionsCount - 1;
if (window.obj4372_onTap_runningActionsCount < 0) {
	window.obj4372_onTap_runningActionsCount = 0;
} else if (window.obj4372_onTap_runningActionsCount == 0) {
	obj4372_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4372_onTap_runningActionsCount = window.obj4372_onTap_runningActionsCount - 1;
if (window.obj4372_onTap_runningActionsCount < 0) {
	window.obj4372_onTap_runningActionsCount = 0;
} else if (window.obj4372_onTap_runningActionsCount == 0) {
	obj4372_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj4372_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4372_onTap_activeActionGroupIndex = -1;
		$("#obj4372").trigger("obj4372_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4372) {
				console.warn("de-queueing event obj4372." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4372").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4372_onTap_activeActionGroupIndex = 2;
	






















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
	var switchHelperId = "switchHelper168"
	var switchHelperRef = "#switchHelper168"
	var switchId = "168";
	var toSwitchId = "168";
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
	var switchHelperId = "switchHelper169"
	var switchHelperRef = "#switchHelper169"
	var switchId = "169";
	var toSwitchId = "169";
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
	var switchHelperId = "switchHelper170"
	var switchHelperRef = "#switchHelper170"
	var switchId = "170";
	var toSwitchId = "170";
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
	$("#anchor171")[0].click();
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
	$("#anchor172")[0].click();
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
 *   obj4366: Event Touch Down
 *
 */
$("#obj4366").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4366_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4366_onTap is still running");
	return;
}
var obj4366_onTap_runningActionsCount = 0;
var obj4366_onTap_loopCount = 0;
obj4366_onTap_actionGroup0();
});










/*
 *
 *   obj4376: Event Touch Down
 *
 */
$("#obj4376").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4376_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4376_onTap is still running");
	return;
}
var obj4376_onTap_runningActionsCount = 0;
var obj4376_onTap_loopCount = 0;
obj4376_onTap_actionGroup0();
});










/*
 *
 *   obj4374: Event Touch Down
 *
 */
$("#obj4374").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4374_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4374_onTap is still running");
	return;
}
var obj4374_onTap_runningActionsCount = 0;
var obj4374_onTap_loopCount = 0;
obj4374_onTap_actionGroup0();
});




























































/*
 *
 *   obj4370: Event Touch Down
 *
 */
$("#obj4370").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4370_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4370_onTap is still running");
	return;
}
var obj4370_onTap_runningActionsCount = 0;
var obj4370_onTap_loopCount = 0;
obj4370_onTap_actionGroup0();
});










/*
 *
 *   obj4368: Event Touch Down
 *
 */
$("#obj4368").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4368_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4368_onTap is still running");
	return;
}
var obj4368_onTap_runningActionsCount = 0;
var obj4368_onTap_loopCount = 0;
obj4368_onTap_actionGroup0();
});










/*
 *
 *   obj4372: Event Touch Down
 *
 */
$("#obj4372").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4372_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4372_onTap is still running");
	return;
}
var obj4372_onTap_runningActionsCount = 0;
var obj4372_onTap_loopCount = 0;
obj4372_onTap_actionGroup0();
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
	
$("#obj3984").trigger('SCEventShow');
$("#obj4362").trigger('SCEventShow');
$("#obj4364").trigger('SCEventShow');
$("#obj4366").trigger('SCEventShow');
$("#obj4376").trigger('SCEventShow');
$("#obj4374").trigger('SCEventShow');
$("#obj9306").trigger('SCEventShow');
$("#obj4370").trigger('SCEventShow');
$("#obj4368").trigger('SCEventShow');
$("#obj4372").trigger('SCEventShow');
$("#obj4093").trigger('SCEventShow');
$("#obj9036").trigger('SCEventShow');
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