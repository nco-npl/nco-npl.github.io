pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serofero - Unit 10";
pubcoder.page.id = pubcoder.page.id || 3817;
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
var obj10798_onTap_activeActionGroupIndex = -1;
var obj10798_onTap_runningActionsCount = 0;
var obj10798_onTap_loopCount = 0;
var obj10780_onTap_activeActionGroupIndex = -1;
var obj10780_onTap_runningActionsCount = 0;
var obj10780_onTap_loopCount = 0;
var obj10793_onTap_activeActionGroupIndex = -1;
var obj10793_onTap_runningActionsCount = 0;
var obj10793_onTap_loopCount = 0;
var obj10775_onTap_activeActionGroupIndex = -1;
var obj10775_onTap_runningActionsCount = 0;
var obj10775_onTap_loopCount = 0;
var obj10868_onTap_activeActionGroupIndex = -1;
var obj10868_onTap_runningActionsCount = 0;
var obj10868_onTap_loopCount = 0;
var obj10812_onTap_activeActionGroupIndex = -1;
var obj10812_onTap_runningActionsCount = 0;
var obj10812_onTap_loopCount = 0;
var obj10863_onTap_activeActionGroupIndex = -1;
var obj10863_onTap_runningActionsCount = 0;
var obj10863_onTap_loopCount = 0;
var obj10807_onTap_activeActionGroupIndex = -1;
var obj10807_onTap_runningActionsCount = 0;
var obj10807_onTap_loopCount = 0;
var obj10845_onTap_activeActionGroupIndex = -1;
var obj10845_onTap_runningActionsCount = 0;
var obj10845_onTap_loopCount = 0;
var obj10817_onTap_activeActionGroupIndex = -1;
var obj10817_onTap_runningActionsCount = 0;
var obj10817_onTap_loopCount = 0;
var obj10850_onTap_activeActionGroupIndex = -1;
var obj10850_onTap_runningActionsCount = 0;
var obj10850_onTap_loopCount = 0;
var obj10822_onTap_activeActionGroupIndex = -1;
var obj10822_onTap_runningActionsCount = 0;
var obj10822_onTap_loopCount = 0;
var obj10873_onTap_activeActionGroupIndex = -1;
var obj10873_onTap_runningActionsCount = 0;
var obj10873_onTap_loopCount = 0;
var obj10831_onTap_activeActionGroupIndex = -1;
var obj10831_onTap_runningActionsCount = 0;
var obj10831_onTap_loopCount = 0;
var obj10878_onTap_activeActionGroupIndex = -1;
var obj10878_onTap_runningActionsCount = 0;
var obj10878_onTap_loopCount = 0;
var obj10836_onTap_activeActionGroupIndex = -1;
var obj10836_onTap_runningActionsCount = 0;
var obj10836_onTap_loopCount = 0;
var obj13868_onTap_activeActionGroupIndex = -1;
var obj13868_onTap_runningActionsCount = 0;
var obj13868_onTap_loopCount = 0;
var obj13887_SCEventReadAloudStarted_activeActionGroupIndex = -1;
var obj13887_SCEventReadAloudStarted_runningActionsCount = 0;
var obj13887_SCEventReadAloudStarted_loopCount = 0;
var obj13887_SCEventReadAloudStopped_activeActionGroupIndex = -1;
var obj13887_SCEventReadAloudStopped_runningActionsCount = 0;
var obj13887_SCEventReadAloudStopped_loopCount = 0;
var obj13858_onTap_activeActionGroupIndex = -1;
var obj13858_onTap_runningActionsCount = 0;
var obj13858_onTap_loopCount = 0;
var obj13883_onTap_activeActionGroupIndex = -1;
var obj13883_onTap_runningActionsCount = 0;
var obj13883_onTap_loopCount = 0;
var obj13880_onTap_activeActionGroupIndex = -1;
var obj13880_onTap_runningActionsCount = 0;
var obj13880_onTap_loopCount = 0;
var obj13865_onTap_activeActionGroupIndex = -1;
var obj13865_onTap_runningActionsCount = 0;
var obj13865_onTap_loopCount = 0;
var obj13849_onTap_activeActionGroupIndex = -1;
var obj13849_onTap_runningActionsCount = 0;
var obj13849_onTap_loopCount = 0;
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
		
obj10798_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10798_onTap_activeActionGroupIndex = -1;
		$("#obj10798").trigger("obj10798_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10798) {
				console.warn("de-queueing event obj10798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10798_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10787
(function(){
	window.obj10798_onTap_runningActionsCount = obj10798_onTap_runningActionsCount + 1;

	var selector = "#obj10787";
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
					window.obj10798_onTap_runningActionsCount = window.obj10798_onTap_runningActionsCount - 1;
if (window.obj10798_onTap_runningActionsCount < 0) {
	window.obj10798_onTap_runningActionsCount = 0;
} else if (window.obj10798_onTap_runningActionsCount == 0) {
	obj10798_onTap_actionGroup1();
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
				window.obj10798_onTap_runningActionsCount = window.obj10798_onTap_runningActionsCount - 1;
if (window.obj10798_onTap_runningActionsCount < 0) {
	window.obj10798_onTap_runningActionsCount = 0;
} else if (window.obj10798_onTap_runningActionsCount == 0) {
	obj10798_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10798_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10798_onTap_activeActionGroupIndex = -1;
		$("#obj10798").trigger("obj10798_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10798) {
				console.warn("de-queueing event obj10798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10798_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10785 
hide_10801();
function hide_10801() {
	var selector = "#obj10785";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10798_onTap_runningActionsCount = obj10798_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10798_onTap_runningActionsCount = window.obj10798_onTap_runningActionsCount - 1;
if (window.obj10798_onTap_runningActionsCount < 0) {
	window.obj10798_onTap_runningActionsCount = 0;
} else if (window.obj10798_onTap_runningActionsCount == 0) {
	obj10798_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10801(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10798_onTap_runningActionsCount = window.obj10798_onTap_runningActionsCount - 1;
if (window.obj10798_onTap_runningActionsCount < 0) {
	window.obj10798_onTap_runningActionsCount = 0;
} else if (window.obj10798_onTap_runningActionsCount == 0) {
	obj10798_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10798_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10798_onTap_activeActionGroupIndex = -1;
		$("#obj10798").trigger("obj10798_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10798) {
				console.warn("de-queueing event obj10798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10798_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10802();
function playAudioFile_10802() {
	window.obj10798_onTap_runningActionsCount = obj10798_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10802")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10802");
			$("#obj_audio_playSoundFile10802").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10798_onTap_runningActionsCount = window.obj10798_onTap_runningActionsCount - 1;
if (window.obj10798_onTap_runningActionsCount < 0) {
	window.obj10798_onTap_runningActionsCount = 0;
} else if (window.obj10798_onTap_runningActionsCount == 0) {
	obj10798_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10798_onTap_runningActionsCount = window.obj10798_onTap_runningActionsCount - 1;
if (window.obj10798_onTap_runningActionsCount < 0) {
	window.obj10798_onTap_runningActionsCount = 0;
} else if (window.obj10798_onTap_runningActionsCount == 0) {
	obj10798_onTap_actionGroup3();
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
				window.obj10798_onTap_runningActionsCount = window.obj10798_onTap_runningActionsCount - 1;
if (window.obj10798_onTap_runningActionsCount < 0) {
	window.obj10798_onTap_runningActionsCount = 0;
} else if (window.obj10798_onTap_runningActionsCount == 0) {
	obj10798_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10798_onTap_runningActionsCount = window.obj10798_onTap_runningActionsCount - 1;
if (window.obj10798_onTap_runningActionsCount < 0) {
	window.obj10798_onTap_runningActionsCount = 0;
} else if (window.obj10798_onTap_runningActionsCount == 0) {
	obj10798_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10798_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10798_onTap_activeActionGroupIndex = -1;
		$("#obj10798").trigger("obj10798_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10798) {
				console.warn("de-queueing event obj10798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10798_onTap_activeActionGroupIndex = 3;
	






















};
obj10780_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10780_onTap_activeActionGroupIndex = -1;
		$("#obj10780").trigger("obj10780_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10780) {
				console.warn("de-queueing event obj10780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10780_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10773
(function(){
	window.obj10780_onTap_runningActionsCount = obj10780_onTap_runningActionsCount + 1;

	var selector = "#obj10773";
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
					window.obj10780_onTap_runningActionsCount = window.obj10780_onTap_runningActionsCount - 1;
if (window.obj10780_onTap_runningActionsCount < 0) {
	window.obj10780_onTap_runningActionsCount = 0;
} else if (window.obj10780_onTap_runningActionsCount == 0) {
	obj10780_onTap_actionGroup1();
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
				window.obj10780_onTap_runningActionsCount = window.obj10780_onTap_runningActionsCount - 1;
if (window.obj10780_onTap_runningActionsCount < 0) {
	window.obj10780_onTap_runningActionsCount = 0;
} else if (window.obj10780_onTap_runningActionsCount == 0) {
	obj10780_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10780_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10780_onTap_activeActionGroupIndex = -1;
		$("#obj10780").trigger("obj10780_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10780) {
				console.warn("de-queueing event obj10780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10780_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10771 
hide_10783();
function hide_10783() {
	var selector = "#obj10771";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10780_onTap_runningActionsCount = obj10780_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10780_onTap_runningActionsCount = window.obj10780_onTap_runningActionsCount - 1;
if (window.obj10780_onTap_runningActionsCount < 0) {
	window.obj10780_onTap_runningActionsCount = 0;
} else if (window.obj10780_onTap_runningActionsCount == 0) {
	obj10780_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10783(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10780_onTap_runningActionsCount = window.obj10780_onTap_runningActionsCount - 1;
if (window.obj10780_onTap_runningActionsCount < 0) {
	window.obj10780_onTap_runningActionsCount = 0;
} else if (window.obj10780_onTap_runningActionsCount == 0) {
	obj10780_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10780_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10780_onTap_activeActionGroupIndex = -1;
		$("#obj10780").trigger("obj10780_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10780) {
				console.warn("de-queueing event obj10780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10780_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10784();
function playAudioFile_10784() {
	window.obj10780_onTap_runningActionsCount = obj10780_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10784")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10784");
			$("#obj_audio_playSoundFile10784").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10780_onTap_runningActionsCount = window.obj10780_onTap_runningActionsCount - 1;
if (window.obj10780_onTap_runningActionsCount < 0) {
	window.obj10780_onTap_runningActionsCount = 0;
} else if (window.obj10780_onTap_runningActionsCount == 0) {
	obj10780_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10780_onTap_runningActionsCount = window.obj10780_onTap_runningActionsCount - 1;
if (window.obj10780_onTap_runningActionsCount < 0) {
	window.obj10780_onTap_runningActionsCount = 0;
} else if (window.obj10780_onTap_runningActionsCount == 0) {
	obj10780_onTap_actionGroup3();
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
				window.obj10780_onTap_runningActionsCount = window.obj10780_onTap_runningActionsCount - 1;
if (window.obj10780_onTap_runningActionsCount < 0) {
	window.obj10780_onTap_runningActionsCount = 0;
} else if (window.obj10780_onTap_runningActionsCount == 0) {
	obj10780_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10780_onTap_runningActionsCount = window.obj10780_onTap_runningActionsCount - 1;
if (window.obj10780_onTap_runningActionsCount < 0) {
	window.obj10780_onTap_runningActionsCount = 0;
} else if (window.obj10780_onTap_runningActionsCount == 0) {
	obj10780_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10780_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10780_onTap_activeActionGroupIndex = -1;
		$("#obj10780").trigger("obj10780_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10780) {
				console.warn("de-queueing event obj10780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10780_onTap_activeActionGroupIndex = 3;
	






















};
obj10793_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10793_onTap_activeActionGroupIndex = -1;
		$("#obj10793").trigger("obj10793_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10793) {
				console.warn("de-queueing event obj10793." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10793").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10793_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10785
(function(){
	window.obj10793_onTap_runningActionsCount = obj10793_onTap_runningActionsCount + 1;

	var selector = "#obj10785";
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
					window.obj10793_onTap_runningActionsCount = window.obj10793_onTap_runningActionsCount - 1;
if (window.obj10793_onTap_runningActionsCount < 0) {
	window.obj10793_onTap_runningActionsCount = 0;
} else if (window.obj10793_onTap_runningActionsCount == 0) {
	obj10793_onTap_actionGroup1();
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
				window.obj10793_onTap_runningActionsCount = window.obj10793_onTap_runningActionsCount - 1;
if (window.obj10793_onTap_runningActionsCount < 0) {
	window.obj10793_onTap_runningActionsCount = 0;
} else if (window.obj10793_onTap_runningActionsCount == 0) {
	obj10793_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10793_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10793_onTap_activeActionGroupIndex = -1;
		$("#obj10793").trigger("obj10793_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10793) {
				console.warn("de-queueing event obj10793." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10793").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10793_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10787 
hide_10796();
function hide_10796() {
	var selector = "#obj10787";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10793_onTap_runningActionsCount = obj10793_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10793_onTap_runningActionsCount = window.obj10793_onTap_runningActionsCount - 1;
if (window.obj10793_onTap_runningActionsCount < 0) {
	window.obj10793_onTap_runningActionsCount = 0;
} else if (window.obj10793_onTap_runningActionsCount == 0) {
	obj10793_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10796(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10793_onTap_runningActionsCount = window.obj10793_onTap_runningActionsCount - 1;
if (window.obj10793_onTap_runningActionsCount < 0) {
	window.obj10793_onTap_runningActionsCount = 0;
} else if (window.obj10793_onTap_runningActionsCount == 0) {
	obj10793_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10793_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10793_onTap_activeActionGroupIndex = -1;
		$("#obj10793").trigger("obj10793_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10793) {
				console.warn("de-queueing event obj10793." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10793").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10793_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10797();
function playAudioFile_10797() {
	window.obj10793_onTap_runningActionsCount = obj10793_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10797")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10797");
			$("#obj_audio_playSoundFile10797").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10793_onTap_runningActionsCount = window.obj10793_onTap_runningActionsCount - 1;
if (window.obj10793_onTap_runningActionsCount < 0) {
	window.obj10793_onTap_runningActionsCount = 0;
} else if (window.obj10793_onTap_runningActionsCount == 0) {
	obj10793_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10793_onTap_runningActionsCount = window.obj10793_onTap_runningActionsCount - 1;
if (window.obj10793_onTap_runningActionsCount < 0) {
	window.obj10793_onTap_runningActionsCount = 0;
} else if (window.obj10793_onTap_runningActionsCount == 0) {
	obj10793_onTap_actionGroup3();
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
				window.obj10793_onTap_runningActionsCount = window.obj10793_onTap_runningActionsCount - 1;
if (window.obj10793_onTap_runningActionsCount < 0) {
	window.obj10793_onTap_runningActionsCount = 0;
} else if (window.obj10793_onTap_runningActionsCount == 0) {
	obj10793_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10793_onTap_runningActionsCount = window.obj10793_onTap_runningActionsCount - 1;
if (window.obj10793_onTap_runningActionsCount < 0) {
	window.obj10793_onTap_runningActionsCount = 0;
} else if (window.obj10793_onTap_runningActionsCount == 0) {
	obj10793_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10793_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10793_onTap_activeActionGroupIndex = -1;
		$("#obj10793").trigger("obj10793_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10793) {
				console.warn("de-queueing event obj10793." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10793").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10793_onTap_activeActionGroupIndex = 3;
	






















};
obj10775_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10775_onTap_activeActionGroupIndex = -1;
		$("#obj10775").trigger("obj10775_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10775) {
				console.warn("de-queueing event obj10775." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10775").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10775_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10771
(function(){
	window.obj10775_onTap_runningActionsCount = obj10775_onTap_runningActionsCount + 1;

	var selector = "#obj10771";
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
					window.obj10775_onTap_runningActionsCount = window.obj10775_onTap_runningActionsCount - 1;
if (window.obj10775_onTap_runningActionsCount < 0) {
	window.obj10775_onTap_runningActionsCount = 0;
} else if (window.obj10775_onTap_runningActionsCount == 0) {
	obj10775_onTap_actionGroup1();
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
				window.obj10775_onTap_runningActionsCount = window.obj10775_onTap_runningActionsCount - 1;
if (window.obj10775_onTap_runningActionsCount < 0) {
	window.obj10775_onTap_runningActionsCount = 0;
} else if (window.obj10775_onTap_runningActionsCount == 0) {
	obj10775_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10775_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10775_onTap_activeActionGroupIndex = -1;
		$("#obj10775").trigger("obj10775_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10775) {
				console.warn("de-queueing event obj10775." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10775").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10775_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10773 
hide_10778();
function hide_10778() {
	var selector = "#obj10773";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10775_onTap_runningActionsCount = obj10775_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10775_onTap_runningActionsCount = window.obj10775_onTap_runningActionsCount - 1;
if (window.obj10775_onTap_runningActionsCount < 0) {
	window.obj10775_onTap_runningActionsCount = 0;
} else if (window.obj10775_onTap_runningActionsCount == 0) {
	obj10775_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10778(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10775_onTap_runningActionsCount = window.obj10775_onTap_runningActionsCount - 1;
if (window.obj10775_onTap_runningActionsCount < 0) {
	window.obj10775_onTap_runningActionsCount = 0;
} else if (window.obj10775_onTap_runningActionsCount == 0) {
	obj10775_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10775_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10775_onTap_activeActionGroupIndex = -1;
		$("#obj10775").trigger("obj10775_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10775) {
				console.warn("de-queueing event obj10775." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10775").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10775_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10779();
function playAudioFile_10779() {
	window.obj10775_onTap_runningActionsCount = obj10775_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10779")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10779");
			$("#obj_audio_playSoundFile10779").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10775_onTap_runningActionsCount = window.obj10775_onTap_runningActionsCount - 1;
if (window.obj10775_onTap_runningActionsCount < 0) {
	window.obj10775_onTap_runningActionsCount = 0;
} else if (window.obj10775_onTap_runningActionsCount == 0) {
	obj10775_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10775_onTap_runningActionsCount = window.obj10775_onTap_runningActionsCount - 1;
if (window.obj10775_onTap_runningActionsCount < 0) {
	window.obj10775_onTap_runningActionsCount = 0;
} else if (window.obj10775_onTap_runningActionsCount == 0) {
	obj10775_onTap_actionGroup3();
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
				window.obj10775_onTap_runningActionsCount = window.obj10775_onTap_runningActionsCount - 1;
if (window.obj10775_onTap_runningActionsCount < 0) {
	window.obj10775_onTap_runningActionsCount = 0;
} else if (window.obj10775_onTap_runningActionsCount == 0) {
	obj10775_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10775_onTap_runningActionsCount = window.obj10775_onTap_runningActionsCount - 1;
if (window.obj10775_onTap_runningActionsCount < 0) {
	window.obj10775_onTap_runningActionsCount = 0;
} else if (window.obj10775_onTap_runningActionsCount == 0) {
	obj10775_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10775_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10775_onTap_activeActionGroupIndex = -1;
		$("#obj10775").trigger("obj10775_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10775) {
				console.warn("de-queueing event obj10775." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10775").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10775_onTap_activeActionGroupIndex = 3;
	






















};
obj10868_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10868_onTap_activeActionGroupIndex = -1;
		$("#obj10868").trigger("obj10868_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10868) {
				console.warn("de-queueing event obj10868." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10868").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10868_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10861
(function(){
	window.obj10868_onTap_runningActionsCount = obj10868_onTap_runningActionsCount + 1;

	var selector = "#obj10861";
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
					window.obj10868_onTap_runningActionsCount = window.obj10868_onTap_runningActionsCount - 1;
if (window.obj10868_onTap_runningActionsCount < 0) {
	window.obj10868_onTap_runningActionsCount = 0;
} else if (window.obj10868_onTap_runningActionsCount == 0) {
	obj10868_onTap_actionGroup1();
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
				window.obj10868_onTap_runningActionsCount = window.obj10868_onTap_runningActionsCount - 1;
if (window.obj10868_onTap_runningActionsCount < 0) {
	window.obj10868_onTap_runningActionsCount = 0;
} else if (window.obj10868_onTap_runningActionsCount == 0) {
	obj10868_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10868_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10868_onTap_activeActionGroupIndex = -1;
		$("#obj10868").trigger("obj10868_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10868) {
				console.warn("de-queueing event obj10868." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10868").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10868_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10859 
hide_10871();
function hide_10871() {
	var selector = "#obj10859";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10868_onTap_runningActionsCount = obj10868_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10868_onTap_runningActionsCount = window.obj10868_onTap_runningActionsCount - 1;
if (window.obj10868_onTap_runningActionsCount < 0) {
	window.obj10868_onTap_runningActionsCount = 0;
} else if (window.obj10868_onTap_runningActionsCount == 0) {
	obj10868_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10871(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10868_onTap_runningActionsCount = window.obj10868_onTap_runningActionsCount - 1;
if (window.obj10868_onTap_runningActionsCount < 0) {
	window.obj10868_onTap_runningActionsCount = 0;
} else if (window.obj10868_onTap_runningActionsCount == 0) {
	obj10868_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10868_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10868_onTap_activeActionGroupIndex = -1;
		$("#obj10868").trigger("obj10868_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10868) {
				console.warn("de-queueing event obj10868." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10868").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10868_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10872();
function playAudioFile_10872() {
	window.obj10868_onTap_runningActionsCount = obj10868_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10872")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10872");
			$("#obj_audio_playSoundFile10872").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10868_onTap_runningActionsCount = window.obj10868_onTap_runningActionsCount - 1;
if (window.obj10868_onTap_runningActionsCount < 0) {
	window.obj10868_onTap_runningActionsCount = 0;
} else if (window.obj10868_onTap_runningActionsCount == 0) {
	obj10868_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10868_onTap_runningActionsCount = window.obj10868_onTap_runningActionsCount - 1;
if (window.obj10868_onTap_runningActionsCount < 0) {
	window.obj10868_onTap_runningActionsCount = 0;
} else if (window.obj10868_onTap_runningActionsCount == 0) {
	obj10868_onTap_actionGroup3();
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
				window.obj10868_onTap_runningActionsCount = window.obj10868_onTap_runningActionsCount - 1;
if (window.obj10868_onTap_runningActionsCount < 0) {
	window.obj10868_onTap_runningActionsCount = 0;
} else if (window.obj10868_onTap_runningActionsCount == 0) {
	obj10868_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10868_onTap_runningActionsCount = window.obj10868_onTap_runningActionsCount - 1;
if (window.obj10868_onTap_runningActionsCount < 0) {
	window.obj10868_onTap_runningActionsCount = 0;
} else if (window.obj10868_onTap_runningActionsCount == 0) {
	obj10868_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10868_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10868_onTap_activeActionGroupIndex = -1;
		$("#obj10868").trigger("obj10868_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10868) {
				console.warn("de-queueing event obj10868." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10868").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10868_onTap_activeActionGroupIndex = 3;
	






















};
obj10812_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10812_onTap_activeActionGroupIndex = -1;
		$("#obj10812").trigger("obj10812_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10812) {
				console.warn("de-queueing event obj10812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10812_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10805
(function(){
	window.obj10812_onTap_runningActionsCount = obj10812_onTap_runningActionsCount + 1;

	var selector = "#obj10805";
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
					window.obj10812_onTap_runningActionsCount = window.obj10812_onTap_runningActionsCount - 1;
if (window.obj10812_onTap_runningActionsCount < 0) {
	window.obj10812_onTap_runningActionsCount = 0;
} else if (window.obj10812_onTap_runningActionsCount == 0) {
	obj10812_onTap_actionGroup1();
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
				window.obj10812_onTap_runningActionsCount = window.obj10812_onTap_runningActionsCount - 1;
if (window.obj10812_onTap_runningActionsCount < 0) {
	window.obj10812_onTap_runningActionsCount = 0;
} else if (window.obj10812_onTap_runningActionsCount == 0) {
	obj10812_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10812_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10812_onTap_activeActionGroupIndex = -1;
		$("#obj10812").trigger("obj10812_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10812) {
				console.warn("de-queueing event obj10812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10812_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10803 
hide_10815();
function hide_10815() {
	var selector = "#obj10803";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10812_onTap_runningActionsCount = obj10812_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10812_onTap_runningActionsCount = window.obj10812_onTap_runningActionsCount - 1;
if (window.obj10812_onTap_runningActionsCount < 0) {
	window.obj10812_onTap_runningActionsCount = 0;
} else if (window.obj10812_onTap_runningActionsCount == 0) {
	obj10812_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10815(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10812_onTap_runningActionsCount = window.obj10812_onTap_runningActionsCount - 1;
if (window.obj10812_onTap_runningActionsCount < 0) {
	window.obj10812_onTap_runningActionsCount = 0;
} else if (window.obj10812_onTap_runningActionsCount == 0) {
	obj10812_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10812_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10812_onTap_activeActionGroupIndex = -1;
		$("#obj10812").trigger("obj10812_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10812) {
				console.warn("de-queueing event obj10812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10812_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10816();
function playAudioFile_10816() {
	window.obj10812_onTap_runningActionsCount = obj10812_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10816")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10816");
			$("#obj_audio_playSoundFile10816").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10812_onTap_runningActionsCount = window.obj10812_onTap_runningActionsCount - 1;
if (window.obj10812_onTap_runningActionsCount < 0) {
	window.obj10812_onTap_runningActionsCount = 0;
} else if (window.obj10812_onTap_runningActionsCount == 0) {
	obj10812_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10812_onTap_runningActionsCount = window.obj10812_onTap_runningActionsCount - 1;
if (window.obj10812_onTap_runningActionsCount < 0) {
	window.obj10812_onTap_runningActionsCount = 0;
} else if (window.obj10812_onTap_runningActionsCount == 0) {
	obj10812_onTap_actionGroup3();
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
				window.obj10812_onTap_runningActionsCount = window.obj10812_onTap_runningActionsCount - 1;
if (window.obj10812_onTap_runningActionsCount < 0) {
	window.obj10812_onTap_runningActionsCount = 0;
} else if (window.obj10812_onTap_runningActionsCount == 0) {
	obj10812_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10812_onTap_runningActionsCount = window.obj10812_onTap_runningActionsCount - 1;
if (window.obj10812_onTap_runningActionsCount < 0) {
	window.obj10812_onTap_runningActionsCount = 0;
} else if (window.obj10812_onTap_runningActionsCount == 0) {
	obj10812_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10812_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10812_onTap_activeActionGroupIndex = -1;
		$("#obj10812").trigger("obj10812_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10812) {
				console.warn("de-queueing event obj10812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10812_onTap_activeActionGroupIndex = 3;
	






















};
obj10863_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10863_onTap_activeActionGroupIndex = -1;
		$("#obj10863").trigger("obj10863_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10863) {
				console.warn("de-queueing event obj10863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10863_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10859
(function(){
	window.obj10863_onTap_runningActionsCount = obj10863_onTap_runningActionsCount + 1;

	var selector = "#obj10859";
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
					window.obj10863_onTap_runningActionsCount = window.obj10863_onTap_runningActionsCount - 1;
if (window.obj10863_onTap_runningActionsCount < 0) {
	window.obj10863_onTap_runningActionsCount = 0;
} else if (window.obj10863_onTap_runningActionsCount == 0) {
	obj10863_onTap_actionGroup1();
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
				window.obj10863_onTap_runningActionsCount = window.obj10863_onTap_runningActionsCount - 1;
if (window.obj10863_onTap_runningActionsCount < 0) {
	window.obj10863_onTap_runningActionsCount = 0;
} else if (window.obj10863_onTap_runningActionsCount == 0) {
	obj10863_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10863_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10863_onTap_activeActionGroupIndex = -1;
		$("#obj10863").trigger("obj10863_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10863) {
				console.warn("de-queueing event obj10863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10863_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10861 
hide_10866();
function hide_10866() {
	var selector = "#obj10861";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10863_onTap_runningActionsCount = obj10863_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10863_onTap_runningActionsCount = window.obj10863_onTap_runningActionsCount - 1;
if (window.obj10863_onTap_runningActionsCount < 0) {
	window.obj10863_onTap_runningActionsCount = 0;
} else if (window.obj10863_onTap_runningActionsCount == 0) {
	obj10863_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10866(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10863_onTap_runningActionsCount = window.obj10863_onTap_runningActionsCount - 1;
if (window.obj10863_onTap_runningActionsCount < 0) {
	window.obj10863_onTap_runningActionsCount = 0;
} else if (window.obj10863_onTap_runningActionsCount == 0) {
	obj10863_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10863_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10863_onTap_activeActionGroupIndex = -1;
		$("#obj10863").trigger("obj10863_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10863) {
				console.warn("de-queueing event obj10863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10863_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10867();
function playAudioFile_10867() {
	window.obj10863_onTap_runningActionsCount = obj10863_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10867")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10867");
			$("#obj_audio_playSoundFile10867").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10863_onTap_runningActionsCount = window.obj10863_onTap_runningActionsCount - 1;
if (window.obj10863_onTap_runningActionsCount < 0) {
	window.obj10863_onTap_runningActionsCount = 0;
} else if (window.obj10863_onTap_runningActionsCount == 0) {
	obj10863_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10863_onTap_runningActionsCount = window.obj10863_onTap_runningActionsCount - 1;
if (window.obj10863_onTap_runningActionsCount < 0) {
	window.obj10863_onTap_runningActionsCount = 0;
} else if (window.obj10863_onTap_runningActionsCount == 0) {
	obj10863_onTap_actionGroup3();
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
				window.obj10863_onTap_runningActionsCount = window.obj10863_onTap_runningActionsCount - 1;
if (window.obj10863_onTap_runningActionsCount < 0) {
	window.obj10863_onTap_runningActionsCount = 0;
} else if (window.obj10863_onTap_runningActionsCount == 0) {
	obj10863_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10863_onTap_runningActionsCount = window.obj10863_onTap_runningActionsCount - 1;
if (window.obj10863_onTap_runningActionsCount < 0) {
	window.obj10863_onTap_runningActionsCount = 0;
} else if (window.obj10863_onTap_runningActionsCount == 0) {
	obj10863_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10863_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10863_onTap_activeActionGroupIndex = -1;
		$("#obj10863").trigger("obj10863_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10863) {
				console.warn("de-queueing event obj10863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10863_onTap_activeActionGroupIndex = 3;
	






















};
obj10807_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10807_onTap_activeActionGroupIndex = -1;
		$("#obj10807").trigger("obj10807_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10807) {
				console.warn("de-queueing event obj10807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10807_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10803
(function(){
	window.obj10807_onTap_runningActionsCount = obj10807_onTap_runningActionsCount + 1;

	var selector = "#obj10803";
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
					window.obj10807_onTap_runningActionsCount = window.obj10807_onTap_runningActionsCount - 1;
if (window.obj10807_onTap_runningActionsCount < 0) {
	window.obj10807_onTap_runningActionsCount = 0;
} else if (window.obj10807_onTap_runningActionsCount == 0) {
	obj10807_onTap_actionGroup1();
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
				window.obj10807_onTap_runningActionsCount = window.obj10807_onTap_runningActionsCount - 1;
if (window.obj10807_onTap_runningActionsCount < 0) {
	window.obj10807_onTap_runningActionsCount = 0;
} else if (window.obj10807_onTap_runningActionsCount == 0) {
	obj10807_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10807_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10807_onTap_activeActionGroupIndex = -1;
		$("#obj10807").trigger("obj10807_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10807) {
				console.warn("de-queueing event obj10807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10807_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10805 
hide_10810();
function hide_10810() {
	var selector = "#obj10805";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10807_onTap_runningActionsCount = obj10807_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10807_onTap_runningActionsCount = window.obj10807_onTap_runningActionsCount - 1;
if (window.obj10807_onTap_runningActionsCount < 0) {
	window.obj10807_onTap_runningActionsCount = 0;
} else if (window.obj10807_onTap_runningActionsCount == 0) {
	obj10807_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10810(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10807_onTap_runningActionsCount = window.obj10807_onTap_runningActionsCount - 1;
if (window.obj10807_onTap_runningActionsCount < 0) {
	window.obj10807_onTap_runningActionsCount = 0;
} else if (window.obj10807_onTap_runningActionsCount == 0) {
	obj10807_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10807_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10807_onTap_activeActionGroupIndex = -1;
		$("#obj10807").trigger("obj10807_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10807) {
				console.warn("de-queueing event obj10807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10807_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10811();
function playAudioFile_10811() {
	window.obj10807_onTap_runningActionsCount = obj10807_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10811")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10811");
			$("#obj_audio_playSoundFile10811").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10807_onTap_runningActionsCount = window.obj10807_onTap_runningActionsCount - 1;
if (window.obj10807_onTap_runningActionsCount < 0) {
	window.obj10807_onTap_runningActionsCount = 0;
} else if (window.obj10807_onTap_runningActionsCount == 0) {
	obj10807_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10807_onTap_runningActionsCount = window.obj10807_onTap_runningActionsCount - 1;
if (window.obj10807_onTap_runningActionsCount < 0) {
	window.obj10807_onTap_runningActionsCount = 0;
} else if (window.obj10807_onTap_runningActionsCount == 0) {
	obj10807_onTap_actionGroup3();
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
				window.obj10807_onTap_runningActionsCount = window.obj10807_onTap_runningActionsCount - 1;
if (window.obj10807_onTap_runningActionsCount < 0) {
	window.obj10807_onTap_runningActionsCount = 0;
} else if (window.obj10807_onTap_runningActionsCount == 0) {
	obj10807_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10807_onTap_runningActionsCount = window.obj10807_onTap_runningActionsCount - 1;
if (window.obj10807_onTap_runningActionsCount < 0) {
	window.obj10807_onTap_runningActionsCount = 0;
} else if (window.obj10807_onTap_runningActionsCount == 0) {
	obj10807_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10807_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10807_onTap_activeActionGroupIndex = -1;
		$("#obj10807").trigger("obj10807_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10807) {
				console.warn("de-queueing event obj10807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10807_onTap_activeActionGroupIndex = 3;
	






















};
obj10845_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10845_onTap_activeActionGroupIndex = -1;
		$("#obj10845").trigger("obj10845_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10845) {
				console.warn("de-queueing event obj10845." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10845").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10845_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10855
(function(){
	window.obj10845_onTap_runningActionsCount = obj10845_onTap_runningActionsCount + 1;

	var selector = "#obj10855";
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
					window.obj10845_onTap_runningActionsCount = window.obj10845_onTap_runningActionsCount - 1;
if (window.obj10845_onTap_runningActionsCount < 0) {
	window.obj10845_onTap_runningActionsCount = 0;
} else if (window.obj10845_onTap_runningActionsCount == 0) {
	obj10845_onTap_actionGroup1();
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
				window.obj10845_onTap_runningActionsCount = window.obj10845_onTap_runningActionsCount - 1;
if (window.obj10845_onTap_runningActionsCount < 0) {
	window.obj10845_onTap_runningActionsCount = 0;
} else if (window.obj10845_onTap_runningActionsCount == 0) {
	obj10845_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10845_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10845_onTap_activeActionGroupIndex = -1;
		$("#obj10845").trigger("obj10845_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10845) {
				console.warn("de-queueing event obj10845." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10845").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10845_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10857 
hide_10848();
function hide_10848() {
	var selector = "#obj10857";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10845_onTap_runningActionsCount = obj10845_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10845_onTap_runningActionsCount = window.obj10845_onTap_runningActionsCount - 1;
if (window.obj10845_onTap_runningActionsCount < 0) {
	window.obj10845_onTap_runningActionsCount = 0;
} else if (window.obj10845_onTap_runningActionsCount == 0) {
	obj10845_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10848(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10845_onTap_runningActionsCount = window.obj10845_onTap_runningActionsCount - 1;
if (window.obj10845_onTap_runningActionsCount < 0) {
	window.obj10845_onTap_runningActionsCount = 0;
} else if (window.obj10845_onTap_runningActionsCount == 0) {
	obj10845_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10845_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10845_onTap_activeActionGroupIndex = -1;
		$("#obj10845").trigger("obj10845_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10845) {
				console.warn("de-queueing event obj10845." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10845").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10845_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10849();
function playAudioFile_10849() {
	window.obj10845_onTap_runningActionsCount = obj10845_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10849")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10849");
			$("#obj_audio_playSoundFile10849").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10845_onTap_runningActionsCount = window.obj10845_onTap_runningActionsCount - 1;
if (window.obj10845_onTap_runningActionsCount < 0) {
	window.obj10845_onTap_runningActionsCount = 0;
} else if (window.obj10845_onTap_runningActionsCount == 0) {
	obj10845_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10845_onTap_runningActionsCount = window.obj10845_onTap_runningActionsCount - 1;
if (window.obj10845_onTap_runningActionsCount < 0) {
	window.obj10845_onTap_runningActionsCount = 0;
} else if (window.obj10845_onTap_runningActionsCount == 0) {
	obj10845_onTap_actionGroup3();
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
				window.obj10845_onTap_runningActionsCount = window.obj10845_onTap_runningActionsCount - 1;
if (window.obj10845_onTap_runningActionsCount < 0) {
	window.obj10845_onTap_runningActionsCount = 0;
} else if (window.obj10845_onTap_runningActionsCount == 0) {
	obj10845_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10845_onTap_runningActionsCount = window.obj10845_onTap_runningActionsCount - 1;
if (window.obj10845_onTap_runningActionsCount < 0) {
	window.obj10845_onTap_runningActionsCount = 0;
} else if (window.obj10845_onTap_runningActionsCount == 0) {
	obj10845_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10845_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10845_onTap_activeActionGroupIndex = -1;
		$("#obj10845").trigger("obj10845_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10845) {
				console.warn("de-queueing event obj10845." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10845").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10845_onTap_activeActionGroupIndex = 3;
	






















};
obj10817_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10817_onTap_activeActionGroupIndex = -1;
		$("#obj10817").trigger("obj10817_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10817) {
				console.warn("de-queueing event obj10817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10817_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10827
(function(){
	window.obj10817_onTap_runningActionsCount = obj10817_onTap_runningActionsCount + 1;

	var selector = "#obj10827";
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
					window.obj10817_onTap_runningActionsCount = window.obj10817_onTap_runningActionsCount - 1;
if (window.obj10817_onTap_runningActionsCount < 0) {
	window.obj10817_onTap_runningActionsCount = 0;
} else if (window.obj10817_onTap_runningActionsCount == 0) {
	obj10817_onTap_actionGroup1();
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
				window.obj10817_onTap_runningActionsCount = window.obj10817_onTap_runningActionsCount - 1;
if (window.obj10817_onTap_runningActionsCount < 0) {
	window.obj10817_onTap_runningActionsCount = 0;
} else if (window.obj10817_onTap_runningActionsCount == 0) {
	obj10817_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10817_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10817_onTap_activeActionGroupIndex = -1;
		$("#obj10817").trigger("obj10817_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10817) {
				console.warn("de-queueing event obj10817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10817_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10829 
hide_10820();
function hide_10820() {
	var selector = "#obj10829";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10817_onTap_runningActionsCount = obj10817_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10817_onTap_runningActionsCount = window.obj10817_onTap_runningActionsCount - 1;
if (window.obj10817_onTap_runningActionsCount < 0) {
	window.obj10817_onTap_runningActionsCount = 0;
} else if (window.obj10817_onTap_runningActionsCount == 0) {
	obj10817_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10820(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10817_onTap_runningActionsCount = window.obj10817_onTap_runningActionsCount - 1;
if (window.obj10817_onTap_runningActionsCount < 0) {
	window.obj10817_onTap_runningActionsCount = 0;
} else if (window.obj10817_onTap_runningActionsCount == 0) {
	obj10817_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10817_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10817_onTap_activeActionGroupIndex = -1;
		$("#obj10817").trigger("obj10817_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10817) {
				console.warn("de-queueing event obj10817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10817_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10821();
function playAudioFile_10821() {
	window.obj10817_onTap_runningActionsCount = obj10817_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10821")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10821");
			$("#obj_audio_playSoundFile10821").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10817_onTap_runningActionsCount = window.obj10817_onTap_runningActionsCount - 1;
if (window.obj10817_onTap_runningActionsCount < 0) {
	window.obj10817_onTap_runningActionsCount = 0;
} else if (window.obj10817_onTap_runningActionsCount == 0) {
	obj10817_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10817_onTap_runningActionsCount = window.obj10817_onTap_runningActionsCount - 1;
if (window.obj10817_onTap_runningActionsCount < 0) {
	window.obj10817_onTap_runningActionsCount = 0;
} else if (window.obj10817_onTap_runningActionsCount == 0) {
	obj10817_onTap_actionGroup3();
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
				window.obj10817_onTap_runningActionsCount = window.obj10817_onTap_runningActionsCount - 1;
if (window.obj10817_onTap_runningActionsCount < 0) {
	window.obj10817_onTap_runningActionsCount = 0;
} else if (window.obj10817_onTap_runningActionsCount == 0) {
	obj10817_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10817_onTap_runningActionsCount = window.obj10817_onTap_runningActionsCount - 1;
if (window.obj10817_onTap_runningActionsCount < 0) {
	window.obj10817_onTap_runningActionsCount = 0;
} else if (window.obj10817_onTap_runningActionsCount == 0) {
	obj10817_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10817_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10817_onTap_activeActionGroupIndex = -1;
		$("#obj10817").trigger("obj10817_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10817) {
				console.warn("de-queueing event obj10817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10817_onTap_activeActionGroupIndex = 3;
	






















};
obj10850_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10850_onTap_activeActionGroupIndex = -1;
		$("#obj10850").trigger("obj10850_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10850) {
				console.warn("de-queueing event obj10850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10850_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10857
(function(){
	window.obj10850_onTap_runningActionsCount = obj10850_onTap_runningActionsCount + 1;

	var selector = "#obj10857";
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
					window.obj10850_onTap_runningActionsCount = window.obj10850_onTap_runningActionsCount - 1;
if (window.obj10850_onTap_runningActionsCount < 0) {
	window.obj10850_onTap_runningActionsCount = 0;
} else if (window.obj10850_onTap_runningActionsCount == 0) {
	obj10850_onTap_actionGroup1();
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
				window.obj10850_onTap_runningActionsCount = window.obj10850_onTap_runningActionsCount - 1;
if (window.obj10850_onTap_runningActionsCount < 0) {
	window.obj10850_onTap_runningActionsCount = 0;
} else if (window.obj10850_onTap_runningActionsCount == 0) {
	obj10850_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10850_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10850_onTap_activeActionGroupIndex = -1;
		$("#obj10850").trigger("obj10850_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10850) {
				console.warn("de-queueing event obj10850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10850_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10855 
hide_10853();
function hide_10853() {
	var selector = "#obj10855";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10850_onTap_runningActionsCount = obj10850_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10850_onTap_runningActionsCount = window.obj10850_onTap_runningActionsCount - 1;
if (window.obj10850_onTap_runningActionsCount < 0) {
	window.obj10850_onTap_runningActionsCount = 0;
} else if (window.obj10850_onTap_runningActionsCount == 0) {
	obj10850_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10853(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10850_onTap_runningActionsCount = window.obj10850_onTap_runningActionsCount - 1;
if (window.obj10850_onTap_runningActionsCount < 0) {
	window.obj10850_onTap_runningActionsCount = 0;
} else if (window.obj10850_onTap_runningActionsCount == 0) {
	obj10850_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10850_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10850_onTap_activeActionGroupIndex = -1;
		$("#obj10850").trigger("obj10850_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10850) {
				console.warn("de-queueing event obj10850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10850_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10854();
function playAudioFile_10854() {
	window.obj10850_onTap_runningActionsCount = obj10850_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10854")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10854");
			$("#obj_audio_playSoundFile10854").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10850_onTap_runningActionsCount = window.obj10850_onTap_runningActionsCount - 1;
if (window.obj10850_onTap_runningActionsCount < 0) {
	window.obj10850_onTap_runningActionsCount = 0;
} else if (window.obj10850_onTap_runningActionsCount == 0) {
	obj10850_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10850_onTap_runningActionsCount = window.obj10850_onTap_runningActionsCount - 1;
if (window.obj10850_onTap_runningActionsCount < 0) {
	window.obj10850_onTap_runningActionsCount = 0;
} else if (window.obj10850_onTap_runningActionsCount == 0) {
	obj10850_onTap_actionGroup3();
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
				window.obj10850_onTap_runningActionsCount = window.obj10850_onTap_runningActionsCount - 1;
if (window.obj10850_onTap_runningActionsCount < 0) {
	window.obj10850_onTap_runningActionsCount = 0;
} else if (window.obj10850_onTap_runningActionsCount == 0) {
	obj10850_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10850_onTap_runningActionsCount = window.obj10850_onTap_runningActionsCount - 1;
if (window.obj10850_onTap_runningActionsCount < 0) {
	window.obj10850_onTap_runningActionsCount = 0;
} else if (window.obj10850_onTap_runningActionsCount == 0) {
	obj10850_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10850_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10850_onTap_activeActionGroupIndex = -1;
		$("#obj10850").trigger("obj10850_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10850) {
				console.warn("de-queueing event obj10850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10850_onTap_activeActionGroupIndex = 3;
	






















};
obj10822_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10822_onTap_activeActionGroupIndex = -1;
		$("#obj10822").trigger("obj10822_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10822) {
				console.warn("de-queueing event obj10822." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10822").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10822_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10829
(function(){
	window.obj10822_onTap_runningActionsCount = obj10822_onTap_runningActionsCount + 1;

	var selector = "#obj10829";
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
					window.obj10822_onTap_runningActionsCount = window.obj10822_onTap_runningActionsCount - 1;
if (window.obj10822_onTap_runningActionsCount < 0) {
	window.obj10822_onTap_runningActionsCount = 0;
} else if (window.obj10822_onTap_runningActionsCount == 0) {
	obj10822_onTap_actionGroup1();
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
				window.obj10822_onTap_runningActionsCount = window.obj10822_onTap_runningActionsCount - 1;
if (window.obj10822_onTap_runningActionsCount < 0) {
	window.obj10822_onTap_runningActionsCount = 0;
} else if (window.obj10822_onTap_runningActionsCount == 0) {
	obj10822_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10822_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10822_onTap_activeActionGroupIndex = -1;
		$("#obj10822").trigger("obj10822_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10822) {
				console.warn("de-queueing event obj10822." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10822").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10822_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10827 
hide_10825();
function hide_10825() {
	var selector = "#obj10827";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10822_onTap_runningActionsCount = obj10822_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10822_onTap_runningActionsCount = window.obj10822_onTap_runningActionsCount - 1;
if (window.obj10822_onTap_runningActionsCount < 0) {
	window.obj10822_onTap_runningActionsCount = 0;
} else if (window.obj10822_onTap_runningActionsCount == 0) {
	obj10822_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10825(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10822_onTap_runningActionsCount = window.obj10822_onTap_runningActionsCount - 1;
if (window.obj10822_onTap_runningActionsCount < 0) {
	window.obj10822_onTap_runningActionsCount = 0;
} else if (window.obj10822_onTap_runningActionsCount == 0) {
	obj10822_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10822_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10822_onTap_activeActionGroupIndex = -1;
		$("#obj10822").trigger("obj10822_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10822) {
				console.warn("de-queueing event obj10822." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10822").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10822_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10826();
function playAudioFile_10826() {
	window.obj10822_onTap_runningActionsCount = obj10822_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10826")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10826");
			$("#obj_audio_playSoundFile10826").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10822_onTap_runningActionsCount = window.obj10822_onTap_runningActionsCount - 1;
if (window.obj10822_onTap_runningActionsCount < 0) {
	window.obj10822_onTap_runningActionsCount = 0;
} else if (window.obj10822_onTap_runningActionsCount == 0) {
	obj10822_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10822_onTap_runningActionsCount = window.obj10822_onTap_runningActionsCount - 1;
if (window.obj10822_onTap_runningActionsCount < 0) {
	window.obj10822_onTap_runningActionsCount = 0;
} else if (window.obj10822_onTap_runningActionsCount == 0) {
	obj10822_onTap_actionGroup3();
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
				window.obj10822_onTap_runningActionsCount = window.obj10822_onTap_runningActionsCount - 1;
if (window.obj10822_onTap_runningActionsCount < 0) {
	window.obj10822_onTap_runningActionsCount = 0;
} else if (window.obj10822_onTap_runningActionsCount == 0) {
	obj10822_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10822_onTap_runningActionsCount = window.obj10822_onTap_runningActionsCount - 1;
if (window.obj10822_onTap_runningActionsCount < 0) {
	window.obj10822_onTap_runningActionsCount = 0;
} else if (window.obj10822_onTap_runningActionsCount == 0) {
	obj10822_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10822_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10822_onTap_activeActionGroupIndex = -1;
		$("#obj10822").trigger("obj10822_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10822) {
				console.warn("de-queueing event obj10822." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10822").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10822_onTap_activeActionGroupIndex = 3;
	






















};
obj10873_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10873_onTap_activeActionGroupIndex = -1;
		$("#obj10873").trigger("obj10873_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10873) {
				console.warn("de-queueing event obj10873." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10873").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10873_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10883
(function(){
	window.obj10873_onTap_runningActionsCount = obj10873_onTap_runningActionsCount + 1;

	var selector = "#obj10883";
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
					window.obj10873_onTap_runningActionsCount = window.obj10873_onTap_runningActionsCount - 1;
if (window.obj10873_onTap_runningActionsCount < 0) {
	window.obj10873_onTap_runningActionsCount = 0;
} else if (window.obj10873_onTap_runningActionsCount == 0) {
	obj10873_onTap_actionGroup1();
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
				window.obj10873_onTap_runningActionsCount = window.obj10873_onTap_runningActionsCount - 1;
if (window.obj10873_onTap_runningActionsCount < 0) {
	window.obj10873_onTap_runningActionsCount = 0;
} else if (window.obj10873_onTap_runningActionsCount == 0) {
	obj10873_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10873_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10873_onTap_activeActionGroupIndex = -1;
		$("#obj10873").trigger("obj10873_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10873) {
				console.warn("de-queueing event obj10873." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10873").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10873_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10885 
hide_10876();
function hide_10876() {
	var selector = "#obj10885";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10873_onTap_runningActionsCount = obj10873_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10873_onTap_runningActionsCount = window.obj10873_onTap_runningActionsCount - 1;
if (window.obj10873_onTap_runningActionsCount < 0) {
	window.obj10873_onTap_runningActionsCount = 0;
} else if (window.obj10873_onTap_runningActionsCount == 0) {
	obj10873_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10876(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10873_onTap_runningActionsCount = window.obj10873_onTap_runningActionsCount - 1;
if (window.obj10873_onTap_runningActionsCount < 0) {
	window.obj10873_onTap_runningActionsCount = 0;
} else if (window.obj10873_onTap_runningActionsCount == 0) {
	obj10873_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10873_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10873_onTap_activeActionGroupIndex = -1;
		$("#obj10873").trigger("obj10873_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10873) {
				console.warn("de-queueing event obj10873." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10873").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10873_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10877();
function playAudioFile_10877() {
	window.obj10873_onTap_runningActionsCount = obj10873_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10877")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10877");
			$("#obj_audio_playSoundFile10877").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10873_onTap_runningActionsCount = window.obj10873_onTap_runningActionsCount - 1;
if (window.obj10873_onTap_runningActionsCount < 0) {
	window.obj10873_onTap_runningActionsCount = 0;
} else if (window.obj10873_onTap_runningActionsCount == 0) {
	obj10873_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10873_onTap_runningActionsCount = window.obj10873_onTap_runningActionsCount - 1;
if (window.obj10873_onTap_runningActionsCount < 0) {
	window.obj10873_onTap_runningActionsCount = 0;
} else if (window.obj10873_onTap_runningActionsCount == 0) {
	obj10873_onTap_actionGroup3();
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
				window.obj10873_onTap_runningActionsCount = window.obj10873_onTap_runningActionsCount - 1;
if (window.obj10873_onTap_runningActionsCount < 0) {
	window.obj10873_onTap_runningActionsCount = 0;
} else if (window.obj10873_onTap_runningActionsCount == 0) {
	obj10873_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10873_onTap_runningActionsCount = window.obj10873_onTap_runningActionsCount - 1;
if (window.obj10873_onTap_runningActionsCount < 0) {
	window.obj10873_onTap_runningActionsCount = 0;
} else if (window.obj10873_onTap_runningActionsCount == 0) {
	obj10873_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10873_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10873_onTap_activeActionGroupIndex = -1;
		$("#obj10873").trigger("obj10873_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10873) {
				console.warn("de-queueing event obj10873." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10873").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10873_onTap_activeActionGroupIndex = 3;
	






















};
obj10831_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10831_onTap_activeActionGroupIndex = -1;
		$("#obj10831").trigger("obj10831_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10831) {
				console.warn("de-queueing event obj10831." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10831").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10831_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10841
(function(){
	window.obj10831_onTap_runningActionsCount = obj10831_onTap_runningActionsCount + 1;

	var selector = "#obj10841";
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
					window.obj10831_onTap_runningActionsCount = window.obj10831_onTap_runningActionsCount - 1;
if (window.obj10831_onTap_runningActionsCount < 0) {
	window.obj10831_onTap_runningActionsCount = 0;
} else if (window.obj10831_onTap_runningActionsCount == 0) {
	obj10831_onTap_actionGroup1();
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
				window.obj10831_onTap_runningActionsCount = window.obj10831_onTap_runningActionsCount - 1;
if (window.obj10831_onTap_runningActionsCount < 0) {
	window.obj10831_onTap_runningActionsCount = 0;
} else if (window.obj10831_onTap_runningActionsCount == 0) {
	obj10831_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10831_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10831_onTap_activeActionGroupIndex = -1;
		$("#obj10831").trigger("obj10831_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10831) {
				console.warn("de-queueing event obj10831." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10831").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10831_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10843 
hide_10834();
function hide_10834() {
	var selector = "#obj10843";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10831_onTap_runningActionsCount = obj10831_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10831_onTap_runningActionsCount = window.obj10831_onTap_runningActionsCount - 1;
if (window.obj10831_onTap_runningActionsCount < 0) {
	window.obj10831_onTap_runningActionsCount = 0;
} else if (window.obj10831_onTap_runningActionsCount == 0) {
	obj10831_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10834(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10831_onTap_runningActionsCount = window.obj10831_onTap_runningActionsCount - 1;
if (window.obj10831_onTap_runningActionsCount < 0) {
	window.obj10831_onTap_runningActionsCount = 0;
} else if (window.obj10831_onTap_runningActionsCount == 0) {
	obj10831_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10831_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10831_onTap_activeActionGroupIndex = -1;
		$("#obj10831").trigger("obj10831_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10831) {
				console.warn("de-queueing event obj10831." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10831").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10831_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10835();
function playAudioFile_10835() {
	window.obj10831_onTap_runningActionsCount = obj10831_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10835")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10835");
			$("#obj_audio_playSoundFile10835").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10831_onTap_runningActionsCount = window.obj10831_onTap_runningActionsCount - 1;
if (window.obj10831_onTap_runningActionsCount < 0) {
	window.obj10831_onTap_runningActionsCount = 0;
} else if (window.obj10831_onTap_runningActionsCount == 0) {
	obj10831_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10831_onTap_runningActionsCount = window.obj10831_onTap_runningActionsCount - 1;
if (window.obj10831_onTap_runningActionsCount < 0) {
	window.obj10831_onTap_runningActionsCount = 0;
} else if (window.obj10831_onTap_runningActionsCount == 0) {
	obj10831_onTap_actionGroup3();
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
				window.obj10831_onTap_runningActionsCount = window.obj10831_onTap_runningActionsCount - 1;
if (window.obj10831_onTap_runningActionsCount < 0) {
	window.obj10831_onTap_runningActionsCount = 0;
} else if (window.obj10831_onTap_runningActionsCount == 0) {
	obj10831_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10831_onTap_runningActionsCount = window.obj10831_onTap_runningActionsCount - 1;
if (window.obj10831_onTap_runningActionsCount < 0) {
	window.obj10831_onTap_runningActionsCount = 0;
} else if (window.obj10831_onTap_runningActionsCount == 0) {
	obj10831_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10831_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10831_onTap_activeActionGroupIndex = -1;
		$("#obj10831").trigger("obj10831_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10831) {
				console.warn("de-queueing event obj10831." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10831").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10831_onTap_activeActionGroupIndex = 3;
	






















};
obj10878_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10878_onTap_activeActionGroupIndex = -1;
		$("#obj10878").trigger("obj10878_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10878) {
				console.warn("de-queueing event obj10878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10878_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10885
(function(){
	window.obj10878_onTap_runningActionsCount = obj10878_onTap_runningActionsCount + 1;

	var selector = "#obj10885";
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
					window.obj10878_onTap_runningActionsCount = window.obj10878_onTap_runningActionsCount - 1;
if (window.obj10878_onTap_runningActionsCount < 0) {
	window.obj10878_onTap_runningActionsCount = 0;
} else if (window.obj10878_onTap_runningActionsCount == 0) {
	obj10878_onTap_actionGroup1();
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
				window.obj10878_onTap_runningActionsCount = window.obj10878_onTap_runningActionsCount - 1;
if (window.obj10878_onTap_runningActionsCount < 0) {
	window.obj10878_onTap_runningActionsCount = 0;
} else if (window.obj10878_onTap_runningActionsCount == 0) {
	obj10878_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10878_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10878_onTap_activeActionGroupIndex = -1;
		$("#obj10878").trigger("obj10878_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10878) {
				console.warn("de-queueing event obj10878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10878_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10883 
hide_10881();
function hide_10881() {
	var selector = "#obj10883";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10878_onTap_runningActionsCount = obj10878_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10878_onTap_runningActionsCount = window.obj10878_onTap_runningActionsCount - 1;
if (window.obj10878_onTap_runningActionsCount < 0) {
	window.obj10878_onTap_runningActionsCount = 0;
} else if (window.obj10878_onTap_runningActionsCount == 0) {
	obj10878_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10881(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10878_onTap_runningActionsCount = window.obj10878_onTap_runningActionsCount - 1;
if (window.obj10878_onTap_runningActionsCount < 0) {
	window.obj10878_onTap_runningActionsCount = 0;
} else if (window.obj10878_onTap_runningActionsCount == 0) {
	obj10878_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10878_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10878_onTap_activeActionGroupIndex = -1;
		$("#obj10878").trigger("obj10878_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10878) {
				console.warn("de-queueing event obj10878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10878_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10882();
function playAudioFile_10882() {
	window.obj10878_onTap_runningActionsCount = obj10878_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10882")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10882");
			$("#obj_audio_playSoundFile10882").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10878_onTap_runningActionsCount = window.obj10878_onTap_runningActionsCount - 1;
if (window.obj10878_onTap_runningActionsCount < 0) {
	window.obj10878_onTap_runningActionsCount = 0;
} else if (window.obj10878_onTap_runningActionsCount == 0) {
	obj10878_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10878_onTap_runningActionsCount = window.obj10878_onTap_runningActionsCount - 1;
if (window.obj10878_onTap_runningActionsCount < 0) {
	window.obj10878_onTap_runningActionsCount = 0;
} else if (window.obj10878_onTap_runningActionsCount == 0) {
	obj10878_onTap_actionGroup3();
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
				window.obj10878_onTap_runningActionsCount = window.obj10878_onTap_runningActionsCount - 1;
if (window.obj10878_onTap_runningActionsCount < 0) {
	window.obj10878_onTap_runningActionsCount = 0;
} else if (window.obj10878_onTap_runningActionsCount == 0) {
	obj10878_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10878_onTap_runningActionsCount = window.obj10878_onTap_runningActionsCount - 1;
if (window.obj10878_onTap_runningActionsCount < 0) {
	window.obj10878_onTap_runningActionsCount = 0;
} else if (window.obj10878_onTap_runningActionsCount == 0) {
	obj10878_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10878_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10878_onTap_activeActionGroupIndex = -1;
		$("#obj10878").trigger("obj10878_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10878) {
				console.warn("de-queueing event obj10878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10878_onTap_activeActionGroupIndex = 3;
	






















};
obj10836_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10836_onTap_activeActionGroupIndex = -1;
		$("#obj10836").trigger("obj10836_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10836) {
				console.warn("de-queueing event obj10836." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10836").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10836_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10843
(function(){
	window.obj10836_onTap_runningActionsCount = obj10836_onTap_runningActionsCount + 1;

	var selector = "#obj10843";
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
					window.obj10836_onTap_runningActionsCount = window.obj10836_onTap_runningActionsCount - 1;
if (window.obj10836_onTap_runningActionsCount < 0) {
	window.obj10836_onTap_runningActionsCount = 0;
} else if (window.obj10836_onTap_runningActionsCount == 0) {
	obj10836_onTap_actionGroup1();
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
				window.obj10836_onTap_runningActionsCount = window.obj10836_onTap_runningActionsCount - 1;
if (window.obj10836_onTap_runningActionsCount < 0) {
	window.obj10836_onTap_runningActionsCount = 0;
} else if (window.obj10836_onTap_runningActionsCount == 0) {
	obj10836_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10836_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10836_onTap_activeActionGroupIndex = -1;
		$("#obj10836").trigger("obj10836_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10836) {
				console.warn("de-queueing event obj10836." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10836").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10836_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10841 
hide_10839();
function hide_10839() {
	var selector = "#obj10841";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10836_onTap_runningActionsCount = obj10836_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10836_onTap_runningActionsCount = window.obj10836_onTap_runningActionsCount - 1;
if (window.obj10836_onTap_runningActionsCount < 0) {
	window.obj10836_onTap_runningActionsCount = 0;
} else if (window.obj10836_onTap_runningActionsCount == 0) {
	obj10836_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10839(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10836_onTap_runningActionsCount = window.obj10836_onTap_runningActionsCount - 1;
if (window.obj10836_onTap_runningActionsCount < 0) {
	window.obj10836_onTap_runningActionsCount = 0;
} else if (window.obj10836_onTap_runningActionsCount == 0) {
	obj10836_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10836_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10836_onTap_activeActionGroupIndex = -1;
		$("#obj10836").trigger("obj10836_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10836) {
				console.warn("de-queueing event obj10836." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10836").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10836_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10840();
function playAudioFile_10840() {
	window.obj10836_onTap_runningActionsCount = obj10836_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10840")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10840");
			$("#obj_audio_playSoundFile10840").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10836_onTap_runningActionsCount = window.obj10836_onTap_runningActionsCount - 1;
if (window.obj10836_onTap_runningActionsCount < 0) {
	window.obj10836_onTap_runningActionsCount = 0;
} else if (window.obj10836_onTap_runningActionsCount == 0) {
	obj10836_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10836_onTap_runningActionsCount = window.obj10836_onTap_runningActionsCount - 1;
if (window.obj10836_onTap_runningActionsCount < 0) {
	window.obj10836_onTap_runningActionsCount = 0;
} else if (window.obj10836_onTap_runningActionsCount == 0) {
	obj10836_onTap_actionGroup3();
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
				window.obj10836_onTap_runningActionsCount = window.obj10836_onTap_runningActionsCount - 1;
if (window.obj10836_onTap_runningActionsCount < 0) {
	window.obj10836_onTap_runningActionsCount = 0;
} else if (window.obj10836_onTap_runningActionsCount == 0) {
	obj10836_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10836_onTap_runningActionsCount = window.obj10836_onTap_runningActionsCount - 1;
if (window.obj10836_onTap_runningActionsCount < 0) {
	window.obj10836_onTap_runningActionsCount = 0;
} else if (window.obj10836_onTap_runningActionsCount == 0) {
	obj10836_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10836_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10836_onTap_activeActionGroupIndex = -1;
		$("#obj10836").trigger("obj10836_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10836) {
				console.warn("de-queueing event obj10836." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10836").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10836_onTap_activeActionGroupIndex = 3;
	






















};
obj13868_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13868_onTap_activeActionGroupIndex = -1;
		$("#obj13868").trigger("obj13868_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13868) {
				console.warn("de-queueing event obj13868." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13868").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13868_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_13872();
function runjs_13872() {
	window.obj13868_onTap_runningActionsCount = obj13868_onTap_runningActionsCount + 1;

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
		window.obj13868_onTap_runningActionsCount = window.obj13868_onTap_runningActionsCount - 1;
if (window.obj13868_onTap_runningActionsCount < 0) {
	window.obj13868_onTap_runningActionsCount = 0;
} else if (window.obj13868_onTap_runningActionsCount == 0) {
	obj13868_onTap_actionGroup1();
}
	}, 1);
}







};
obj13868_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13868_onTap_activeActionGroupIndex = -1;
		$("#obj13868").trigger("obj13868_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13868) {
				console.warn("de-queueing event obj13868." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13868").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13868_onTap_activeActionGroupIndex = 1;
	






















};
obj13887_SCEventReadAloudStarted_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13887_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj13887").trigger("obj13887_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13887) {
				console.warn("de-queueing event obj13887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13887_SCEventReadAloudStarted_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj13887 
switchImage_13891();
function switchImage_13891() {
	window.obj13887_SCEventReadAloudStarted_runningActionsCount = obj13887_SCEventReadAloudStarted_runningActionsCount + 1;

	var targetObjectId = "#obj13887";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj13887_img";
	var fromImagePath = "../images/obj13887_image.png";
	var toImagePath = "../images/switch35_to.png";
	var switchHelperId = "switchHelper214"
	var switchHelperRef = "#switchHelper214"
	var switchId = "214";
	var toSwitchId = "214";
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
				window.obj13887_SCEventReadAloudStarted_runningActionsCount = window.obj13887_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj13887_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj13887_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj13887_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj13887_SCEventReadAloudStarted_actionGroup1();
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
obj13887_SCEventReadAloudStarted_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13887_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj13887").trigger("obj13887_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13887) {
				console.warn("de-queueing event obj13887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13887_SCEventReadAloudStarted_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_13892();
function runjs_13892() {
	window.obj13887_SCEventReadAloudStarted_runningActionsCount = obj13887_SCEventReadAloudStarted_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over Pressed');
}
	
	setTimeout(function() {
		window.obj13887_SCEventReadAloudStarted_runningActionsCount = window.obj13887_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj13887_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj13887_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj13887_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj13887_SCEventReadAloudStarted_actionGroup2();
}
	}, 1);
}







};
obj13887_SCEventReadAloudStarted_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13887_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj13887").trigger("obj13887_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13887) {
				console.warn("de-queueing event obj13887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13887_SCEventReadAloudStarted_activeActionGroupIndex = 2;
	






















};
obj13887_SCEventReadAloudStopped_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13887_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj13887").trigger("obj13887_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13887) {
				console.warn("de-queueing event obj13887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13887_SCEventReadAloudStopped_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj13887 
switchImage_13897();
function switchImage_13897() {
	window.obj13887_SCEventReadAloudStopped_runningActionsCount = obj13887_SCEventReadAloudStopped_runningActionsCount + 1;

	var targetObjectId = "#obj13887";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj13887_img";
	var fromImagePath = "../images/obj13887_image.png";
	var toImagePath = "../images/obj13887_image.png";
	var switchHelperId = "switchHelper215"
	var switchHelperRef = "#switchHelper215"
	var switchId = "215";
	var toSwitchId = "215";
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
				window.obj13887_SCEventReadAloudStopped_runningActionsCount = window.obj13887_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj13887_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj13887_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj13887_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj13887_SCEventReadAloudStopped_actionGroup1();
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
obj13887_SCEventReadAloudStopped_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13887_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj13887").trigger("obj13887_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13887) {
				console.warn("de-queueing event obj13887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13887_SCEventReadAloudStopped_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_13898();
function runjs_13898() {
	window.obj13887_SCEventReadAloudStopped_runningActionsCount = obj13887_SCEventReadAloudStopped_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over');
}
	
	setTimeout(function() {
		window.obj13887_SCEventReadAloudStopped_runningActionsCount = window.obj13887_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj13887_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj13887_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj13887_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj13887_SCEventReadAloudStopped_actionGroup2();
}
	}, 1);
}







};
obj13887_SCEventReadAloudStopped_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13887_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj13887").trigger("obj13887_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13887) {
				console.warn("de-queueing event obj13887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13887_SCEventReadAloudStopped_activeActionGroupIndex = 2;
	






















};
obj13858_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13858_onTap_activeActionGroupIndex = -1;
		$("#obj13858").trigger("obj13858_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13858) {
				console.warn("de-queueing event obj13858." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13858").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13858_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_13860();
function runjs_13860() {
	window.obj13858_onTap_runningActionsCount = obj13858_onTap_runningActionsCount + 1;

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
		window.obj13858_onTap_runningActionsCount = window.obj13858_onTap_runningActionsCount - 1;
if (window.obj13858_onTap_runningActionsCount < 0) {
	window.obj13858_onTap_runningActionsCount = 0;
} else if (window.obj13858_onTap_runningActionsCount == 0) {
	obj13858_onTap_actionGroup1();
}
	}, 1);
}







};
obj13858_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13858_onTap_activeActionGroupIndex = -1;
		$("#obj13858").trigger("obj13858_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13858) {
				console.warn("de-queueing event obj13858." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13858").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13858_onTap_activeActionGroupIndex = 1;
	






















};
obj13883_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13883_onTap_activeActionGroupIndex = -1;
		$("#obj13883").trigger("obj13883_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13883) {
				console.warn("de-queueing event obj13883." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13883").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13883_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj13883 
switchImage_13885();
function switchImage_13885() {
	window.obj13883_onTap_runningActionsCount = obj13883_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj13883";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj13883_img";
	var fromImagePath = "../images/obj13883_image.png";
	var toImagePath = "../images/switch37_to.png";
	var switchHelperId = "switchHelper216"
	var switchHelperRef = "#switchHelper216"
	var switchId = "216";
	var toSwitchId = "216";
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
				window.obj13883_onTap_runningActionsCount = window.obj13883_onTap_runningActionsCount - 1;
if (window.obj13883_onTap_runningActionsCount < 0) {
	window.obj13883_onTap_runningActionsCount = 0;
} else if (window.obj13883_onTap_runningActionsCount == 0) {
	obj13883_onTap_actionGroup1();
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
obj13883_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13883_onTap_activeActionGroupIndex = -1;
		$("#obj13883").trigger("obj13883_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13883) {
				console.warn("de-queueing event obj13883." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13883").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13883_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_13886();
function runjs_13886() {
	window.obj13883_onTap_runningActionsCount = obj13883_onTap_runningActionsCount + 1;

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
		window.obj13883_onTap_runningActionsCount = window.obj13883_onTap_runningActionsCount - 1;
if (window.obj13883_onTap_runningActionsCount < 0) {
	window.obj13883_onTap_runningActionsCount = 0;
} else if (window.obj13883_onTap_runningActionsCount == 0) {
	obj13883_onTap_actionGroup2();
}
	}, 1);
}







};
obj13883_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13883_onTap_activeActionGroupIndex = -1;
		$("#obj13883").trigger("obj13883_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13883) {
				console.warn("de-queueing event obj13883." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13883").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13883_onTap_activeActionGroupIndex = 2;
	






















};
obj13880_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13880_onTap_activeActionGroupIndex = -1;
		$("#obj13880").trigger("obj13880_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13880) {
				console.warn("de-queueing event obj13880." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13880").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13880_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13882();
function goToPage_13882() {
	window.obj13880_onTap_runningActionsCount = obj13880_onTap_runningActionsCount + 1;
	$("#anchor217")[0].click();
	window.obj13880_onTap_runningActionsCount = window.obj13880_onTap_runningActionsCount - 1;
if (window.obj13880_onTap_runningActionsCount < 0) {
	window.obj13880_onTap_runningActionsCount = 0;
} else if (window.obj13880_onTap_runningActionsCount == 0) {
	obj13880_onTap_actionGroup1();
}
}





















};
obj13880_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13880_onTap_activeActionGroupIndex = -1;
		$("#obj13880").trigger("obj13880_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13880) {
				console.warn("de-queueing event obj13880." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13880").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13880_onTap_activeActionGroupIndex = 1;
	






















};
obj13865_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13865_onTap_activeActionGroupIndex = -1;
		$("#obj13865").trigger("obj13865_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13865) {
				console.warn("de-queueing event obj13865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13865_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13867();
function goToPage_13867() {
	window.obj13865_onTap_runningActionsCount = obj13865_onTap_runningActionsCount + 1;
	$("#anchor218")[0].click();
	window.obj13865_onTap_runningActionsCount = window.obj13865_onTap_runningActionsCount - 1;
if (window.obj13865_onTap_runningActionsCount < 0) {
	window.obj13865_onTap_runningActionsCount = 0;
} else if (window.obj13865_onTap_runningActionsCount == 0) {
	obj13865_onTap_actionGroup1();
}
}





















};
obj13865_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13865_onTap_activeActionGroupIndex = -1;
		$("#obj13865").trigger("obj13865_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13865) {
				console.warn("de-queueing event obj13865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13865_onTap_activeActionGroupIndex = 1;
	






















};
obj13849_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13849_onTap_activeActionGroupIndex = -1;
		$("#obj13849").trigger("obj13849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13849) {
				console.warn("de-queueing event obj13849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13849_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_13852();
function runjs_13852() {
	window.obj13849_onTap_runningActionsCount = obj13849_onTap_runningActionsCount + 1;

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
		window.obj13849_onTap_runningActionsCount = window.obj13849_onTap_runningActionsCount - 1;
if (window.obj13849_onTap_runningActionsCount < 0) {
	window.obj13849_onTap_runningActionsCount = 0;
} else if (window.obj13849_onTap_runningActionsCount == 0) {
	obj13849_onTap_actionGroup1();
}
	}, 1);
}







};
obj13849_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13849_onTap_activeActionGroupIndex = -1;
		$("#obj13849").trigger("obj13849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13849) {
				console.warn("de-queueing event obj13849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13849_onTap_activeActionGroupIndex = 1;
	






















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





















































/*
 *
 *   obj10798: Event Touch Down
 *
 */
$("#obj10798").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10798_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10798_onTap is still running");
	return;
}
var obj10798_onTap_runningActionsCount = 0;
var obj10798_onTap_loopCount = 0;
obj10798_onTap_actionGroup0();
});










/*
 *
 *   obj10780: Event Touch Down
 *
 */
$("#obj10780").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10780_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10780_onTap is still running");
	return;
}
var obj10780_onTap_runningActionsCount = 0;
var obj10780_onTap_loopCount = 0;
obj10780_onTap_actionGroup0();
});




















/*
 *
 *   obj10793: Event Touch Down
 *
 */
$("#obj10793").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10793_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10793_onTap is still running");
	return;
}
var obj10793_onTap_runningActionsCount = 0;
var obj10793_onTap_loopCount = 0;
obj10793_onTap_actionGroup0();
});




















/*
 *
 *   obj10775: Event Touch Down
 *
 */
$("#obj10775").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10775_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10775_onTap is still running");
	return;
}
var obj10775_onTap_runningActionsCount = 0;
var obj10775_onTap_loopCount = 0;
obj10775_onTap_actionGroup0();
});






























/*
 *
 *   obj10868: Event Touch Down
 *
 */
$("#obj10868").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10868_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10868_onTap is still running");
	return;
}
var obj10868_onTap_runningActionsCount = 0;
var obj10868_onTap_loopCount = 0;
obj10868_onTap_actionGroup0();
});






























/*
 *
 *   obj10812: Event Touch Down
 *
 */
$("#obj10812").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10812_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10812_onTap is still running");
	return;
}
var obj10812_onTap_runningActionsCount = 0;
var obj10812_onTap_loopCount = 0;
obj10812_onTap_actionGroup0();
});




















/*
 *
 *   obj10863: Event Touch Down
 *
 */
$("#obj10863").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10863_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10863_onTap is still running");
	return;
}
var obj10863_onTap_runningActionsCount = 0;
var obj10863_onTap_loopCount = 0;
obj10863_onTap_actionGroup0();
});




















/*
 *
 *   obj10807: Event Touch Down
 *
 */
$("#obj10807").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10807_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10807_onTap is still running");
	return;
}
var obj10807_onTap_runningActionsCount = 0;
var obj10807_onTap_loopCount = 0;
obj10807_onTap_actionGroup0();
});








































/*
 *
 *   obj10845: Event Touch Down
 *
 */
$("#obj10845").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10845_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10845_onTap is still running");
	return;
}
var obj10845_onTap_runningActionsCount = 0;
var obj10845_onTap_loopCount = 0;
obj10845_onTap_actionGroup0();
});










/*
 *
 *   obj10817: Event Touch Down
 *
 */
$("#obj10817").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10817_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10817_onTap is still running");
	return;
}
var obj10817_onTap_runningActionsCount = 0;
var obj10817_onTap_loopCount = 0;
obj10817_onTap_actionGroup0();
});






























/*
 *
 *   obj10850: Event Touch Down
 *
 */
$("#obj10850").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10850_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10850_onTap is still running");
	return;
}
var obj10850_onTap_runningActionsCount = 0;
var obj10850_onTap_loopCount = 0;
obj10850_onTap_actionGroup0();
});




















/*
 *
 *   obj10822: Event Touch Down
 *
 */
$("#obj10822").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10822_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10822_onTap is still running");
	return;
}
var obj10822_onTap_runningActionsCount = 0;
var obj10822_onTap_loopCount = 0;
obj10822_onTap_actionGroup0();
});






























/*
 *
 *   obj10873: Event Touch Down
 *
 */
$("#obj10873").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10873_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10873_onTap is still running");
	return;
}
var obj10873_onTap_runningActionsCount = 0;
var obj10873_onTap_loopCount = 0;
obj10873_onTap_actionGroup0();
});






























/*
 *
 *   obj10831: Event Touch Down
 *
 */
$("#obj10831").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10831_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10831_onTap is still running");
	return;
}
var obj10831_onTap_runningActionsCount = 0;
var obj10831_onTap_loopCount = 0;
obj10831_onTap_actionGroup0();
});




















/*
 *
 *   obj10878: Event Touch Down
 *
 */
$("#obj10878").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10878_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10878_onTap is still running");
	return;
}
var obj10878_onTap_runningActionsCount = 0;
var obj10878_onTap_loopCount = 0;
obj10878_onTap_actionGroup0();
});




















/*
 *
 *   obj10836: Event Touch Down
 *
 */
$("#obj10836").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10836_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10836_onTap is still running");
	return;
}
var obj10836_onTap_runningActionsCount = 0;
var obj10836_onTap_loopCount = 0;
obj10836_onTap_actionGroup0();
});




























































/*
 *
 *   obj13868: Event Touch Down
 *
 */
$("#obj13868").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13868_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13868_onTap is still running");
	return;
}
var obj13868_onTap_runningActionsCount = 0;
var obj13868_onTap_loopCount = 0;
obj13868_onTap_actionGroup0();
});
























/*
 *
 *   obj13887: Event SCEventReadAloudStarted
 *
 */
$("#obj13887").bind("SCEventReadAloudStarted", function(event) {
	if (window.obj13887_SCEventReadAloudStarted_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13887_SCEventReadAloudStarted is still running");
	return;
}
var obj13887_SCEventReadAloudStarted_runningActionsCount = 0;
var obj13887_SCEventReadAloudStarted_loopCount = 0;
obj13887_SCEventReadAloudStarted_actionGroup0();
});
/*
 *
 *   obj13887: Event SCEventReadAloudStopped
 *
 */
$("#obj13887").bind("SCEventReadAloudStopped", function(event) {
	if (window.obj13887_SCEventReadAloudStopped_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13887_SCEventReadAloudStopped is still running");
	return;
}
var obj13887_SCEventReadAloudStopped_runningActionsCount = 0;
var obj13887_SCEventReadAloudStopped_loopCount = 0;
obj13887_SCEventReadAloudStopped_actionGroup0();
});





/*
 *
 *   obj13858: Event Touch Down
 *
 */
$("#obj13858").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13858_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13858_onTap is still running");
	return;
}
var obj13858_onTap_runningActionsCount = 0;
var obj13858_onTap_loopCount = 0;
obj13858_onTap_actionGroup0();
});










/*
 *
 *   obj13883: Event Touch Down
 *
 */
$("#obj13883").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13883_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13883_onTap is still running");
	return;
}
var obj13883_onTap_runningActionsCount = 0;
var obj13883_onTap_loopCount = 0;
obj13883_onTap_actionGroup0();
});










/*
 *
 *   obj13880: Event Touch Down
 *
 */
$("#obj13880").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13880_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13880_onTap is still running");
	return;
}
var obj13880_onTap_runningActionsCount = 0;
var obj13880_onTap_loopCount = 0;
obj13880_onTap_actionGroup0();
});










/*
 *
 *   obj13865: Event Touch Down
 *
 */
$("#obj13865").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13865_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13865_onTap is still running");
	return;
}
var obj13865_onTap_runningActionsCount = 0;
var obj13865_onTap_loopCount = 0;
obj13865_onTap_actionGroup0();
});










/*
 *
 *   obj13849: Event Touch Down
 *
 */
$("#obj13849").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13849_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13849_onTap is still running");
	return;
}
var obj13849_onTap_runningActionsCount = 0;
var obj13849_onTap_loopCount = 0;
obj13849_onTap_actionGroup0();
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
	
$("#obj4059").trigger('SCEventShow');
$("#obj4637").trigger('SCEventShow');
$("#obj4623").trigger('SCEventShow');
$("#obj10798").trigger('SCEventShow');
$("#obj10780").trigger('SCEventShow');
$("#obj10793").trigger('SCEventShow');
$("#obj10775").trigger('SCEventShow');
$("#obj4635").trigger('SCEventShow');
$("#obj4633").trigger('SCEventShow');
$("#obj10868").trigger('SCEventShow');
$("#obj10812").trigger('SCEventShow');
$("#obj10863").trigger('SCEventShow');
$("#obj10807").trigger('SCEventShow');
$("#obj4631").trigger('SCEventShow');
$("#obj10845").trigger('SCEventShow');
$("#obj10817").trigger('SCEventShow');
$("#obj4627").trigger('SCEventShow');
$("#obj10850").trigger('SCEventShow');
$("#obj10822").trigger('SCEventShow');
$("#obj4629").trigger('SCEventShow');
$("#obj4625").trigger('SCEventShow');
$("#obj10873").trigger('SCEventShow');
$("#obj10831").trigger('SCEventShow');
$("#obj10878").trigger('SCEventShow');
$("#obj10836").trigger('SCEventShow');
$("#obj10109").trigger('SCEventShow');
$("#obj10107").trigger('SCEventShow');
$("#obj10185").trigger('SCEventShow');
$("#obj13887").trigger('SCEventShow');
$("#obj13858").trigger('SCEventShow');
$("#obj13880").trigger('SCEventShow');
$("#obj13865").trigger('SCEventShow');
$("#obj13849").trigger('SCEventShow');
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