pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serofero - Unit 10";
pubcoder.page.id = pubcoder.page.id || 3816;
pubcoder.page.title = pubcoder.page.title || "19";
pubcoder.page.number = pubcoder.page.number || 19;
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
var obj10713_onTap_activeActionGroupIndex = -1;
var obj10713_onTap_runningActionsCount = 0;
var obj10713_onTap_loopCount = 0;
var obj4248_onTap_activeActionGroupIndex = -1;
var obj4248_onTap_runningActionsCount = 0;
var obj4248_onTap_loopCount = 0;
var obj10720_onTap_activeActionGroupIndex = -1;
var obj10720_onTap_runningActionsCount = 0;
var obj10720_onTap_loopCount = 0;
var obj4250_onTap_activeActionGroupIndex = -1;
var obj4250_onTap_runningActionsCount = 0;
var obj4250_onTap_loopCount = 0;
var obj10748_onTap_activeActionGroupIndex = -1;
var obj10748_onTap_runningActionsCount = 0;
var obj10748_onTap_loopCount = 0;
var obj10766_onTap_activeActionGroupIndex = -1;
var obj10766_onTap_runningActionsCount = 0;
var obj10766_onTap_loopCount = 0;
var obj10743_onTap_activeActionGroupIndex = -1;
var obj10743_onTap_runningActionsCount = 0;
var obj10743_onTap_loopCount = 0;
var obj10761_onTap_activeActionGroupIndex = -1;
var obj10761_onTap_runningActionsCount = 0;
var obj10761_onTap_loopCount = 0;
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
		
obj10713_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10713_onTap_activeActionGroupIndex = -1;
		$("#obj10713").trigger("obj10713_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10713) {
				console.warn("de-queueing event obj10713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10713_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10711
(function(){
	window.obj10713_onTap_runningActionsCount = obj10713_onTap_runningActionsCount + 1;

	var selector = "#obj10711";
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
					window.obj10713_onTap_runningActionsCount = window.obj10713_onTap_runningActionsCount - 1;
if (window.obj10713_onTap_runningActionsCount < 0) {
	window.obj10713_onTap_runningActionsCount = 0;
} else if (window.obj10713_onTap_runningActionsCount == 0) {
	obj10713_onTap_actionGroup1();
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
				window.obj10713_onTap_runningActionsCount = window.obj10713_onTap_runningActionsCount - 1;
if (window.obj10713_onTap_runningActionsCount < 0) {
	window.obj10713_onTap_runningActionsCount = 0;
} else if (window.obj10713_onTap_runningActionsCount == 0) {
	obj10713_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10713_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10713_onTap_activeActionGroupIndex = -1;
		$("#obj10713").trigger("obj10713_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10713) {
				console.warn("de-queueing event obj10713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10713_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10718 
hide_10716();
function hide_10716() {
	var selector = "#obj10718";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10713_onTap_runningActionsCount = obj10713_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10713_onTap_runningActionsCount = window.obj10713_onTap_runningActionsCount - 1;
if (window.obj10713_onTap_runningActionsCount < 0) {
	window.obj10713_onTap_runningActionsCount = 0;
} else if (window.obj10713_onTap_runningActionsCount == 0) {
	obj10713_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10716(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10713_onTap_runningActionsCount = window.obj10713_onTap_runningActionsCount - 1;
if (window.obj10713_onTap_runningActionsCount < 0) {
	window.obj10713_onTap_runningActionsCount = 0;
} else if (window.obj10713_onTap_runningActionsCount == 0) {
	obj10713_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10713_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10713_onTap_activeActionGroupIndex = -1;
		$("#obj10713").trigger("obj10713_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10713) {
				console.warn("de-queueing event obj10713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10713_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10717();
function playAudioFile_10717() {
	window.obj10713_onTap_runningActionsCount = obj10713_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10717")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10717");
			$("#obj_audio_playSoundFile10717").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10713_onTap_runningActionsCount = window.obj10713_onTap_runningActionsCount - 1;
if (window.obj10713_onTap_runningActionsCount < 0) {
	window.obj10713_onTap_runningActionsCount = 0;
} else if (window.obj10713_onTap_runningActionsCount == 0) {
	obj10713_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10713_onTap_runningActionsCount = window.obj10713_onTap_runningActionsCount - 1;
if (window.obj10713_onTap_runningActionsCount < 0) {
	window.obj10713_onTap_runningActionsCount = 0;
} else if (window.obj10713_onTap_runningActionsCount == 0) {
	obj10713_onTap_actionGroup3();
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
				window.obj10713_onTap_runningActionsCount = window.obj10713_onTap_runningActionsCount - 1;
if (window.obj10713_onTap_runningActionsCount < 0) {
	window.obj10713_onTap_runningActionsCount = 0;
} else if (window.obj10713_onTap_runningActionsCount == 0) {
	obj10713_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10713_onTap_runningActionsCount = window.obj10713_onTap_runningActionsCount - 1;
if (window.obj10713_onTap_runningActionsCount < 0) {
	window.obj10713_onTap_runningActionsCount = 0;
} else if (window.obj10713_onTap_runningActionsCount == 0) {
	obj10713_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10713_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10713_onTap_activeActionGroupIndex = -1;
		$("#obj10713").trigger("obj10713_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10713) {
				console.warn("de-queueing event obj10713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10713_onTap_activeActionGroupIndex = 3;
	






















};
obj4248_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4248_onTap_activeActionGroupIndex = -1;
		$("#obj4248").trigger("obj4248_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4248) {
				console.warn("de-queueing event obj4248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4248_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10616
(function(){
	window.obj4248_onTap_runningActionsCount = obj4248_onTap_runningActionsCount + 1;

	var selector = "#obj10616";
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
					window.obj4248_onTap_runningActionsCount = window.obj4248_onTap_runningActionsCount - 1;
if (window.obj4248_onTap_runningActionsCount < 0) {
	window.obj4248_onTap_runningActionsCount = 0;
} else if (window.obj4248_onTap_runningActionsCount == 0) {
	obj4248_onTap_actionGroup1();
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
				window.obj4248_onTap_runningActionsCount = window.obj4248_onTap_runningActionsCount - 1;
if (window.obj4248_onTap_runningActionsCount < 0) {
	window.obj4248_onTap_runningActionsCount = 0;
} else if (window.obj4248_onTap_runningActionsCount == 0) {
	obj4248_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4248_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4248_onTap_activeActionGroupIndex = -1;
		$("#obj4248").trigger("obj4248_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4248) {
				console.warn("de-queueing event obj4248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4248_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10618 
hide_10621();
function hide_10621() {
	var selector = "#obj10618";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4248_onTap_runningActionsCount = obj4248_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4248_onTap_runningActionsCount = window.obj4248_onTap_runningActionsCount - 1;
if (window.obj4248_onTap_runningActionsCount < 0) {
	window.obj4248_onTap_runningActionsCount = 0;
} else if (window.obj4248_onTap_runningActionsCount == 0) {
	obj4248_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10621(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4248_onTap_runningActionsCount = window.obj4248_onTap_runningActionsCount - 1;
if (window.obj4248_onTap_runningActionsCount < 0) {
	window.obj4248_onTap_runningActionsCount = 0;
} else if (window.obj4248_onTap_runningActionsCount == 0) {
	obj4248_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj4248_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4248_onTap_activeActionGroupIndex = -1;
		$("#obj4248").trigger("obj4248_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4248) {
				console.warn("de-queueing event obj4248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4248_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10623();
function playAudioFile_10623() {
	window.obj4248_onTap_runningActionsCount = obj4248_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10623")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10623");
			$("#obj_audio_playSoundFile10623").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4248_onTap_runningActionsCount = window.obj4248_onTap_runningActionsCount - 1;
if (window.obj4248_onTap_runningActionsCount < 0) {
	window.obj4248_onTap_runningActionsCount = 0;
} else if (window.obj4248_onTap_runningActionsCount == 0) {
	obj4248_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4248_onTap_runningActionsCount = window.obj4248_onTap_runningActionsCount - 1;
if (window.obj4248_onTap_runningActionsCount < 0) {
	window.obj4248_onTap_runningActionsCount = 0;
} else if (window.obj4248_onTap_runningActionsCount == 0) {
	obj4248_onTap_actionGroup3();
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
				window.obj4248_onTap_runningActionsCount = window.obj4248_onTap_runningActionsCount - 1;
if (window.obj4248_onTap_runningActionsCount < 0) {
	window.obj4248_onTap_runningActionsCount = 0;
} else if (window.obj4248_onTap_runningActionsCount == 0) {
	obj4248_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4248_onTap_runningActionsCount = window.obj4248_onTap_runningActionsCount - 1;
if (window.obj4248_onTap_runningActionsCount < 0) {
	window.obj4248_onTap_runningActionsCount = 0;
} else if (window.obj4248_onTap_runningActionsCount == 0) {
	obj4248_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj4248_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4248_onTap_activeActionGroupIndex = -1;
		$("#obj4248").trigger("obj4248_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4248) {
				console.warn("de-queueing event obj4248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4248_onTap_activeActionGroupIndex = 3;
	






















};
obj10720_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10720_onTap_activeActionGroupIndex = -1;
		$("#obj10720").trigger("obj10720_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10720) {
				console.warn("de-queueing event obj10720." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10720").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10720_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10718
(function(){
	window.obj10720_onTap_runningActionsCount = obj10720_onTap_runningActionsCount + 1;

	var selector = "#obj10718";
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
					window.obj10720_onTap_runningActionsCount = window.obj10720_onTap_runningActionsCount - 1;
if (window.obj10720_onTap_runningActionsCount < 0) {
	window.obj10720_onTap_runningActionsCount = 0;
} else if (window.obj10720_onTap_runningActionsCount == 0) {
	obj10720_onTap_actionGroup1();
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
				window.obj10720_onTap_runningActionsCount = window.obj10720_onTap_runningActionsCount - 1;
if (window.obj10720_onTap_runningActionsCount < 0) {
	window.obj10720_onTap_runningActionsCount = 0;
} else if (window.obj10720_onTap_runningActionsCount == 0) {
	obj10720_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10720_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10720_onTap_activeActionGroupIndex = -1;
		$("#obj10720").trigger("obj10720_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10720) {
				console.warn("de-queueing event obj10720." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10720").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10720_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10711 
hide_10723();
function hide_10723() {
	var selector = "#obj10711";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10720_onTap_runningActionsCount = obj10720_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10720_onTap_runningActionsCount = window.obj10720_onTap_runningActionsCount - 1;
if (window.obj10720_onTap_runningActionsCount < 0) {
	window.obj10720_onTap_runningActionsCount = 0;
} else if (window.obj10720_onTap_runningActionsCount == 0) {
	obj10720_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10723(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10720_onTap_runningActionsCount = window.obj10720_onTap_runningActionsCount - 1;
if (window.obj10720_onTap_runningActionsCount < 0) {
	window.obj10720_onTap_runningActionsCount = 0;
} else if (window.obj10720_onTap_runningActionsCount == 0) {
	obj10720_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10720_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10720_onTap_activeActionGroupIndex = -1;
		$("#obj10720").trigger("obj10720_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10720) {
				console.warn("de-queueing event obj10720." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10720").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10720_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10724();
function playAudioFile_10724() {
	window.obj10720_onTap_runningActionsCount = obj10720_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10724")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10724");
			$("#obj_audio_playSoundFile10724").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10720_onTap_runningActionsCount = window.obj10720_onTap_runningActionsCount - 1;
if (window.obj10720_onTap_runningActionsCount < 0) {
	window.obj10720_onTap_runningActionsCount = 0;
} else if (window.obj10720_onTap_runningActionsCount == 0) {
	obj10720_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10720_onTap_runningActionsCount = window.obj10720_onTap_runningActionsCount - 1;
if (window.obj10720_onTap_runningActionsCount < 0) {
	window.obj10720_onTap_runningActionsCount = 0;
} else if (window.obj10720_onTap_runningActionsCount == 0) {
	obj10720_onTap_actionGroup3();
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
				window.obj10720_onTap_runningActionsCount = window.obj10720_onTap_runningActionsCount - 1;
if (window.obj10720_onTap_runningActionsCount < 0) {
	window.obj10720_onTap_runningActionsCount = 0;
} else if (window.obj10720_onTap_runningActionsCount == 0) {
	obj10720_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10720_onTap_runningActionsCount = window.obj10720_onTap_runningActionsCount - 1;
if (window.obj10720_onTap_runningActionsCount < 0) {
	window.obj10720_onTap_runningActionsCount = 0;
} else if (window.obj10720_onTap_runningActionsCount == 0) {
	obj10720_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10720_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10720_onTap_activeActionGroupIndex = -1;
		$("#obj10720").trigger("obj10720_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10720) {
				console.warn("de-queueing event obj10720." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10720").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10720_onTap_activeActionGroupIndex = 3;
	






















};
obj4250_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4250_onTap_activeActionGroupIndex = -1;
		$("#obj4250").trigger("obj4250_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4250) {
				console.warn("de-queueing event obj4250." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4250").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4250_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10618
(function(){
	window.obj4250_onTap_runningActionsCount = obj4250_onTap_runningActionsCount + 1;

	var selector = "#obj10618";
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
					window.obj4250_onTap_runningActionsCount = window.obj4250_onTap_runningActionsCount - 1;
if (window.obj4250_onTap_runningActionsCount < 0) {
	window.obj4250_onTap_runningActionsCount = 0;
} else if (window.obj4250_onTap_runningActionsCount == 0) {
	obj4250_onTap_actionGroup1();
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
				window.obj4250_onTap_runningActionsCount = window.obj4250_onTap_runningActionsCount - 1;
if (window.obj4250_onTap_runningActionsCount < 0) {
	window.obj4250_onTap_runningActionsCount = 0;
} else if (window.obj4250_onTap_runningActionsCount == 0) {
	obj4250_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4250_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4250_onTap_activeActionGroupIndex = -1;
		$("#obj4250").trigger("obj4250_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4250) {
				console.warn("de-queueing event obj4250." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4250").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4250_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10616 
hide_10625();
function hide_10625() {
	var selector = "#obj10616";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4250_onTap_runningActionsCount = obj4250_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4250_onTap_runningActionsCount = window.obj4250_onTap_runningActionsCount - 1;
if (window.obj4250_onTap_runningActionsCount < 0) {
	window.obj4250_onTap_runningActionsCount = 0;
} else if (window.obj4250_onTap_runningActionsCount == 0) {
	obj4250_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10625(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4250_onTap_runningActionsCount = window.obj4250_onTap_runningActionsCount - 1;
if (window.obj4250_onTap_runningActionsCount < 0) {
	window.obj4250_onTap_runningActionsCount = 0;
} else if (window.obj4250_onTap_runningActionsCount == 0) {
	obj4250_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj4250_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4250_onTap_activeActionGroupIndex = -1;
		$("#obj4250").trigger("obj4250_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4250) {
				console.warn("de-queueing event obj4250." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4250").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4250_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10626();
function playAudioFile_10626() {
	window.obj4250_onTap_runningActionsCount = obj4250_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10626")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10626");
			$("#obj_audio_playSoundFile10626").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4250_onTap_runningActionsCount = window.obj4250_onTap_runningActionsCount - 1;
if (window.obj4250_onTap_runningActionsCount < 0) {
	window.obj4250_onTap_runningActionsCount = 0;
} else if (window.obj4250_onTap_runningActionsCount == 0) {
	obj4250_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4250_onTap_runningActionsCount = window.obj4250_onTap_runningActionsCount - 1;
if (window.obj4250_onTap_runningActionsCount < 0) {
	window.obj4250_onTap_runningActionsCount = 0;
} else if (window.obj4250_onTap_runningActionsCount == 0) {
	obj4250_onTap_actionGroup3();
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
				window.obj4250_onTap_runningActionsCount = window.obj4250_onTap_runningActionsCount - 1;
if (window.obj4250_onTap_runningActionsCount < 0) {
	window.obj4250_onTap_runningActionsCount = 0;
} else if (window.obj4250_onTap_runningActionsCount == 0) {
	obj4250_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4250_onTap_runningActionsCount = window.obj4250_onTap_runningActionsCount - 1;
if (window.obj4250_onTap_runningActionsCount < 0) {
	window.obj4250_onTap_runningActionsCount = 0;
} else if (window.obj4250_onTap_runningActionsCount == 0) {
	obj4250_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj4250_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4250_onTap_activeActionGroupIndex = -1;
		$("#obj4250").trigger("obj4250_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4250) {
				console.warn("de-queueing event obj4250." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4250").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4250_onTap_activeActionGroupIndex = 3;
	






















};
obj10748_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10748_onTap_activeActionGroupIndex = -1;
		$("#obj10748").trigger("obj10748_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10748) {
				console.warn("de-queueing event obj10748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10748_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10741
(function(){
	window.obj10748_onTap_runningActionsCount = obj10748_onTap_runningActionsCount + 1;

	var selector = "#obj10741";
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
					window.obj10748_onTap_runningActionsCount = window.obj10748_onTap_runningActionsCount - 1;
if (window.obj10748_onTap_runningActionsCount < 0) {
	window.obj10748_onTap_runningActionsCount = 0;
} else if (window.obj10748_onTap_runningActionsCount == 0) {
	obj10748_onTap_actionGroup1();
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
				window.obj10748_onTap_runningActionsCount = window.obj10748_onTap_runningActionsCount - 1;
if (window.obj10748_onTap_runningActionsCount < 0) {
	window.obj10748_onTap_runningActionsCount = 0;
} else if (window.obj10748_onTap_runningActionsCount == 0) {
	obj10748_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10748_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10748_onTap_activeActionGroupIndex = -1;
		$("#obj10748").trigger("obj10748_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10748) {
				console.warn("de-queueing event obj10748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10748_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10739 
hide_10751();
function hide_10751() {
	var selector = "#obj10739";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10748_onTap_runningActionsCount = obj10748_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10748_onTap_runningActionsCount = window.obj10748_onTap_runningActionsCount - 1;
if (window.obj10748_onTap_runningActionsCount < 0) {
	window.obj10748_onTap_runningActionsCount = 0;
} else if (window.obj10748_onTap_runningActionsCount == 0) {
	obj10748_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10751(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10748_onTap_runningActionsCount = window.obj10748_onTap_runningActionsCount - 1;
if (window.obj10748_onTap_runningActionsCount < 0) {
	window.obj10748_onTap_runningActionsCount = 0;
} else if (window.obj10748_onTap_runningActionsCount == 0) {
	obj10748_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10748_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10748_onTap_activeActionGroupIndex = -1;
		$("#obj10748").trigger("obj10748_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10748) {
				console.warn("de-queueing event obj10748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10748_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10752();
function playAudioFile_10752() {
	window.obj10748_onTap_runningActionsCount = obj10748_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10752")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10752");
			$("#obj_audio_playSoundFile10752").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10748_onTap_runningActionsCount = window.obj10748_onTap_runningActionsCount - 1;
if (window.obj10748_onTap_runningActionsCount < 0) {
	window.obj10748_onTap_runningActionsCount = 0;
} else if (window.obj10748_onTap_runningActionsCount == 0) {
	obj10748_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10748_onTap_runningActionsCount = window.obj10748_onTap_runningActionsCount - 1;
if (window.obj10748_onTap_runningActionsCount < 0) {
	window.obj10748_onTap_runningActionsCount = 0;
} else if (window.obj10748_onTap_runningActionsCount == 0) {
	obj10748_onTap_actionGroup3();
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
				window.obj10748_onTap_runningActionsCount = window.obj10748_onTap_runningActionsCount - 1;
if (window.obj10748_onTap_runningActionsCount < 0) {
	window.obj10748_onTap_runningActionsCount = 0;
} else if (window.obj10748_onTap_runningActionsCount == 0) {
	obj10748_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10748_onTap_runningActionsCount = window.obj10748_onTap_runningActionsCount - 1;
if (window.obj10748_onTap_runningActionsCount < 0) {
	window.obj10748_onTap_runningActionsCount = 0;
} else if (window.obj10748_onTap_runningActionsCount == 0) {
	obj10748_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10748_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10748_onTap_activeActionGroupIndex = -1;
		$("#obj10748").trigger("obj10748_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10748) {
				console.warn("de-queueing event obj10748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10748_onTap_activeActionGroupIndex = 3;
	






















};
obj10766_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10766_onTap_activeActionGroupIndex = -1;
		$("#obj10766").trigger("obj10766_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10766) {
				console.warn("de-queueing event obj10766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10766_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10755
(function(){
	window.obj10766_onTap_runningActionsCount = obj10766_onTap_runningActionsCount + 1;

	var selector = "#obj10755";
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
					window.obj10766_onTap_runningActionsCount = window.obj10766_onTap_runningActionsCount - 1;
if (window.obj10766_onTap_runningActionsCount < 0) {
	window.obj10766_onTap_runningActionsCount = 0;
} else if (window.obj10766_onTap_runningActionsCount == 0) {
	obj10766_onTap_actionGroup1();
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
				window.obj10766_onTap_runningActionsCount = window.obj10766_onTap_runningActionsCount - 1;
if (window.obj10766_onTap_runningActionsCount < 0) {
	window.obj10766_onTap_runningActionsCount = 0;
} else if (window.obj10766_onTap_runningActionsCount == 0) {
	obj10766_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10766_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10766_onTap_activeActionGroupIndex = -1;
		$("#obj10766").trigger("obj10766_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10766) {
				console.warn("de-queueing event obj10766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10766_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10753 
hide_10769();
function hide_10769() {
	var selector = "#obj10753";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10766_onTap_runningActionsCount = obj10766_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10766_onTap_runningActionsCount = window.obj10766_onTap_runningActionsCount - 1;
if (window.obj10766_onTap_runningActionsCount < 0) {
	window.obj10766_onTap_runningActionsCount = 0;
} else if (window.obj10766_onTap_runningActionsCount == 0) {
	obj10766_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10769(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10766_onTap_runningActionsCount = window.obj10766_onTap_runningActionsCount - 1;
if (window.obj10766_onTap_runningActionsCount < 0) {
	window.obj10766_onTap_runningActionsCount = 0;
} else if (window.obj10766_onTap_runningActionsCount == 0) {
	obj10766_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10766_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10766_onTap_activeActionGroupIndex = -1;
		$("#obj10766").trigger("obj10766_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10766) {
				console.warn("de-queueing event obj10766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10766_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10770();
function playAudioFile_10770() {
	window.obj10766_onTap_runningActionsCount = obj10766_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10770")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10770");
			$("#obj_audio_playSoundFile10770").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10766_onTap_runningActionsCount = window.obj10766_onTap_runningActionsCount - 1;
if (window.obj10766_onTap_runningActionsCount < 0) {
	window.obj10766_onTap_runningActionsCount = 0;
} else if (window.obj10766_onTap_runningActionsCount == 0) {
	obj10766_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10766_onTap_runningActionsCount = window.obj10766_onTap_runningActionsCount - 1;
if (window.obj10766_onTap_runningActionsCount < 0) {
	window.obj10766_onTap_runningActionsCount = 0;
} else if (window.obj10766_onTap_runningActionsCount == 0) {
	obj10766_onTap_actionGroup3();
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
				window.obj10766_onTap_runningActionsCount = window.obj10766_onTap_runningActionsCount - 1;
if (window.obj10766_onTap_runningActionsCount < 0) {
	window.obj10766_onTap_runningActionsCount = 0;
} else if (window.obj10766_onTap_runningActionsCount == 0) {
	obj10766_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10766_onTap_runningActionsCount = window.obj10766_onTap_runningActionsCount - 1;
if (window.obj10766_onTap_runningActionsCount < 0) {
	window.obj10766_onTap_runningActionsCount = 0;
} else if (window.obj10766_onTap_runningActionsCount == 0) {
	obj10766_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10766_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10766_onTap_activeActionGroupIndex = -1;
		$("#obj10766").trigger("obj10766_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10766) {
				console.warn("de-queueing event obj10766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10766_onTap_activeActionGroupIndex = 3;
	






















};
obj10743_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10743_onTap_activeActionGroupIndex = -1;
		$("#obj10743").trigger("obj10743_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10743) {
				console.warn("de-queueing event obj10743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10743_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10739
(function(){
	window.obj10743_onTap_runningActionsCount = obj10743_onTap_runningActionsCount + 1;

	var selector = "#obj10739";
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
					window.obj10743_onTap_runningActionsCount = window.obj10743_onTap_runningActionsCount - 1;
if (window.obj10743_onTap_runningActionsCount < 0) {
	window.obj10743_onTap_runningActionsCount = 0;
} else if (window.obj10743_onTap_runningActionsCount == 0) {
	obj10743_onTap_actionGroup1();
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
				window.obj10743_onTap_runningActionsCount = window.obj10743_onTap_runningActionsCount - 1;
if (window.obj10743_onTap_runningActionsCount < 0) {
	window.obj10743_onTap_runningActionsCount = 0;
} else if (window.obj10743_onTap_runningActionsCount == 0) {
	obj10743_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10743_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10743_onTap_activeActionGroupIndex = -1;
		$("#obj10743").trigger("obj10743_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10743) {
				console.warn("de-queueing event obj10743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10743_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10741 
hide_10746();
function hide_10746() {
	var selector = "#obj10741";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10743_onTap_runningActionsCount = obj10743_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10743_onTap_runningActionsCount = window.obj10743_onTap_runningActionsCount - 1;
if (window.obj10743_onTap_runningActionsCount < 0) {
	window.obj10743_onTap_runningActionsCount = 0;
} else if (window.obj10743_onTap_runningActionsCount == 0) {
	obj10743_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10746(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10743_onTap_runningActionsCount = window.obj10743_onTap_runningActionsCount - 1;
if (window.obj10743_onTap_runningActionsCount < 0) {
	window.obj10743_onTap_runningActionsCount = 0;
} else if (window.obj10743_onTap_runningActionsCount == 0) {
	obj10743_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10743_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10743_onTap_activeActionGroupIndex = -1;
		$("#obj10743").trigger("obj10743_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10743) {
				console.warn("de-queueing event obj10743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10743_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10747();
function playAudioFile_10747() {
	window.obj10743_onTap_runningActionsCount = obj10743_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10747")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10747");
			$("#obj_audio_playSoundFile10747").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10743_onTap_runningActionsCount = window.obj10743_onTap_runningActionsCount - 1;
if (window.obj10743_onTap_runningActionsCount < 0) {
	window.obj10743_onTap_runningActionsCount = 0;
} else if (window.obj10743_onTap_runningActionsCount == 0) {
	obj10743_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10743_onTap_runningActionsCount = window.obj10743_onTap_runningActionsCount - 1;
if (window.obj10743_onTap_runningActionsCount < 0) {
	window.obj10743_onTap_runningActionsCount = 0;
} else if (window.obj10743_onTap_runningActionsCount == 0) {
	obj10743_onTap_actionGroup3();
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
				window.obj10743_onTap_runningActionsCount = window.obj10743_onTap_runningActionsCount - 1;
if (window.obj10743_onTap_runningActionsCount < 0) {
	window.obj10743_onTap_runningActionsCount = 0;
} else if (window.obj10743_onTap_runningActionsCount == 0) {
	obj10743_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10743_onTap_runningActionsCount = window.obj10743_onTap_runningActionsCount - 1;
if (window.obj10743_onTap_runningActionsCount < 0) {
	window.obj10743_onTap_runningActionsCount = 0;
} else if (window.obj10743_onTap_runningActionsCount == 0) {
	obj10743_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10743_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10743_onTap_activeActionGroupIndex = -1;
		$("#obj10743").trigger("obj10743_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10743) {
				console.warn("de-queueing event obj10743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10743_onTap_activeActionGroupIndex = 3;
	






















};
obj10761_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10761_onTap_activeActionGroupIndex = -1;
		$("#obj10761").trigger("obj10761_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10761) {
				console.warn("de-queueing event obj10761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10761_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10753
(function(){
	window.obj10761_onTap_runningActionsCount = obj10761_onTap_runningActionsCount + 1;

	var selector = "#obj10753";
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
					window.obj10761_onTap_runningActionsCount = window.obj10761_onTap_runningActionsCount - 1;
if (window.obj10761_onTap_runningActionsCount < 0) {
	window.obj10761_onTap_runningActionsCount = 0;
} else if (window.obj10761_onTap_runningActionsCount == 0) {
	obj10761_onTap_actionGroup1();
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
				window.obj10761_onTap_runningActionsCount = window.obj10761_onTap_runningActionsCount - 1;
if (window.obj10761_onTap_runningActionsCount < 0) {
	window.obj10761_onTap_runningActionsCount = 0;
} else if (window.obj10761_onTap_runningActionsCount == 0) {
	obj10761_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10761_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10761_onTap_activeActionGroupIndex = -1;
		$("#obj10761").trigger("obj10761_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10761) {
				console.warn("de-queueing event obj10761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10761_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10755 
hide_10764();
function hide_10764() {
	var selector = "#obj10755";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10761_onTap_runningActionsCount = obj10761_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10761_onTap_runningActionsCount = window.obj10761_onTap_runningActionsCount - 1;
if (window.obj10761_onTap_runningActionsCount < 0) {
	window.obj10761_onTap_runningActionsCount = 0;
} else if (window.obj10761_onTap_runningActionsCount == 0) {
	obj10761_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10764(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10761_onTap_runningActionsCount = window.obj10761_onTap_runningActionsCount - 1;
if (window.obj10761_onTap_runningActionsCount < 0) {
	window.obj10761_onTap_runningActionsCount = 0;
} else if (window.obj10761_onTap_runningActionsCount == 0) {
	obj10761_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10761_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10761_onTap_activeActionGroupIndex = -1;
		$("#obj10761").trigger("obj10761_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10761) {
				console.warn("de-queueing event obj10761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10761_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10765();
function playAudioFile_10765() {
	window.obj10761_onTap_runningActionsCount = obj10761_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10765")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10765");
			$("#obj_audio_playSoundFile10765").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10761_onTap_runningActionsCount = window.obj10761_onTap_runningActionsCount - 1;
if (window.obj10761_onTap_runningActionsCount < 0) {
	window.obj10761_onTap_runningActionsCount = 0;
} else if (window.obj10761_onTap_runningActionsCount == 0) {
	obj10761_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10761_onTap_runningActionsCount = window.obj10761_onTap_runningActionsCount - 1;
if (window.obj10761_onTap_runningActionsCount < 0) {
	window.obj10761_onTap_runningActionsCount = 0;
} else if (window.obj10761_onTap_runningActionsCount == 0) {
	obj10761_onTap_actionGroup3();
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
				window.obj10761_onTap_runningActionsCount = window.obj10761_onTap_runningActionsCount - 1;
if (window.obj10761_onTap_runningActionsCount < 0) {
	window.obj10761_onTap_runningActionsCount = 0;
} else if (window.obj10761_onTap_runningActionsCount == 0) {
	obj10761_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10761_onTap_runningActionsCount = window.obj10761_onTap_runningActionsCount - 1;
if (window.obj10761_onTap_runningActionsCount < 0) {
	window.obj10761_onTap_runningActionsCount = 0;
} else if (window.obj10761_onTap_runningActionsCount == 0) {
	obj10761_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10761_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10761_onTap_activeActionGroupIndex = -1;
		$("#obj10761").trigger("obj10761_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10761) {
				console.warn("de-queueing event obj10761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10761_onTap_activeActionGroupIndex = 3;
	






















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
	$("#anchor194")[0].click();
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
	$("#anchor195")[0].click();
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
 *   obj10713: Event Touch Down
 *
 */
$("#obj10713").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10713_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10713_onTap is still running");
	return;
}
var obj10713_onTap_runningActionsCount = 0;
var obj10713_onTap_loopCount = 0;
obj10713_onTap_actionGroup0();
});










/*
 *
 *   obj4248: Event Touch Down
 *
 */
$("#obj4248").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4248_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4248_onTap is still running");
	return;
}
var obj4248_onTap_runningActionsCount = 0;
var obj4248_onTap_loopCount = 0;
obj4248_onTap_actionGroup0();
});


















































/*
 *
 *   obj10720: Event Touch Down
 *
 */
$("#obj10720").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10720_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10720_onTap is still running");
	return;
}
var obj10720_onTap_runningActionsCount = 0;
var obj10720_onTap_loopCount = 0;
obj10720_onTap_actionGroup0();
});










/*
 *
 *   obj4250: Event Touch Down
 *
 */
$("#obj4250").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4250_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4250_onTap is still running");
	return;
}
var obj4250_onTap_runningActionsCount = 0;
var obj4250_onTap_loopCount = 0;
obj4250_onTap_actionGroup0();
});




























































/*
 *
 *   obj10748: Event Touch Down
 *
 */
$("#obj10748").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10748_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10748_onTap is still running");
	return;
}
var obj10748_onTap_runningActionsCount = 0;
var obj10748_onTap_loopCount = 0;
obj10748_onTap_actionGroup0();
});










/*
 *
 *   obj10766: Event Touch Down
 *
 */
$("#obj10766").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10766_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10766_onTap is still running");
	return;
}
var obj10766_onTap_runningActionsCount = 0;
var obj10766_onTap_loopCount = 0;
obj10766_onTap_actionGroup0();
});








































/*
 *
 *   obj10743: Event Touch Down
 *
 */
$("#obj10743").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10743_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10743_onTap is still running");
	return;
}
var obj10743_onTap_runningActionsCount = 0;
var obj10743_onTap_loopCount = 0;
obj10743_onTap_actionGroup0();
});










/*
 *
 *   obj10761: Event Touch Down
 *
 */
$("#obj10761").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10761_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10761_onTap is still running");
	return;
}
var obj10761_onTap_runningActionsCount = 0;
var obj10761_onTap_loopCount = 0;
obj10761_onTap_actionGroup0();
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
	
$("#obj4246").trigger('SCEventShow');
$("#obj4056").trigger('SCEventShow');
$("#obj4244").trigger('SCEventShow');
$("#obj4621").trigger('SCEventShow');
$("#obj4615").trigger('SCEventShow');
$("#obj10713").trigger('SCEventShow');
$("#obj4248").trigger('SCEventShow');
$("#obj4256").trigger('SCEventShow');
$("#obj10720").trigger('SCEventShow');
$("#obj4250").trigger('SCEventShow');
$("#obj4262").trigger('SCEventShow');
$("#obj4619").trigger('SCEventShow');
$("#obj4617").trigger('SCEventShow');
$("#obj10748").trigger('SCEventShow');
$("#obj10766").trigger('SCEventShow');
$("#obj10759").trigger('SCEventShow');
$("#obj10743").trigger('SCEventShow');
$("#obj10761").trigger('SCEventShow');
$("#obj10757").trigger('SCEventShow');
$("#obj10105").trigger('SCEventShow');
$("#obj10183").trigger('SCEventShow');
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