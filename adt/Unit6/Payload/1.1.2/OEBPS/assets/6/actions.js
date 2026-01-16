pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serofero - Unit 6";
pubcoder.page.id = pubcoder.page.id || 3999;
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
var obj10789_onTap_activeActionGroupIndex = -1;
var obj10789_onTap_runningActionsCount = 0;
var obj10789_onTap_loopCount = 0;
var obj10784_onTap_activeActionGroupIndex = -1;
var obj10784_onTap_runningActionsCount = 0;
var obj10784_onTap_loopCount = 0;
var obj10805_onTap_activeActionGroupIndex = -1;
var obj10805_onTap_runningActionsCount = 0;
var obj10805_onTap_loopCount = 0;
var obj10811_onTap_activeActionGroupIndex = -1;
var obj10811_onTap_runningActionsCount = 0;
var obj10811_onTap_loopCount = 0;
var obj10849_onTap_activeActionGroupIndex = -1;
var obj10849_onTap_runningActionsCount = 0;
var obj10849_onTap_loopCount = 0;
var obj10864_onTap_activeActionGroupIndex = -1;
var obj10864_onTap_runningActionsCount = 0;
var obj10864_onTap_loopCount = 0;
var obj10855_onTap_activeActionGroupIndex = -1;
var obj10855_onTap_runningActionsCount = 0;
var obj10855_onTap_loopCount = 0;
var obj10827_onTap_activeActionGroupIndex = -1;
var obj10827_onTap_runningActionsCount = 0;
var obj10827_onTap_loopCount = 0;
var obj10833_onTap_activeActionGroupIndex = -1;
var obj10833_onTap_runningActionsCount = 0;
var obj10833_onTap_loopCount = 0;
var obj10881_onTap_activeActionGroupIndex = -1;
var obj10881_onTap_runningActionsCount = 0;
var obj10881_onTap_loopCount = 0;
var obj10875_onTap_activeActionGroupIndex = -1;
var obj10875_onTap_runningActionsCount = 0;
var obj10875_onTap_loopCount = 0;
var obj10903_onTap_activeActionGroupIndex = -1;
var obj10903_onTap_runningActionsCount = 0;
var obj10903_onTap_loopCount = 0;
var obj10897_onTap_activeActionGroupIndex = -1;
var obj10897_onTap_runningActionsCount = 0;
var obj10897_onTap_loopCount = 0;
var obj10925_onTap_activeActionGroupIndex = -1;
var obj10925_onTap_runningActionsCount = 0;
var obj10925_onTap_loopCount = 0;
var obj10919_onTap_activeActionGroupIndex = -1;
var obj10919_onTap_runningActionsCount = 0;
var obj10919_onTap_loopCount = 0;
var obj10947_onTap_activeActionGroupIndex = -1;
var obj10947_onTap_runningActionsCount = 0;
var obj10947_onTap_loopCount = 0;
var obj10941_onTap_activeActionGroupIndex = -1;
var obj10941_onTap_runningActionsCount = 0;
var obj10941_onTap_loopCount = 0;
var obj10969_onTap_activeActionGroupIndex = -1;
var obj10969_onTap_runningActionsCount = 0;
var obj10969_onTap_loopCount = 0;
var obj10963_onTap_activeActionGroupIndex = -1;
var obj10963_onTap_runningActionsCount = 0;
var obj10963_onTap_loopCount = 0;
var obj10991_onTap_activeActionGroupIndex = -1;
var obj10991_onTap_runningActionsCount = 0;
var obj10991_onTap_loopCount = 0;
var obj10985_onTap_activeActionGroupIndex = -1;
var obj10985_onTap_runningActionsCount = 0;
var obj10985_onTap_loopCount = 0;
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
		
obj10789_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10789_onTap_activeActionGroupIndex = -1;
		$("#obj10789").trigger("obj10789_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10789) {
				console.warn("de-queueing event obj10789." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10789").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10789_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj10774 
hide_10797();
function hide_10797() {
	var selector = "#obj10774";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10789_onTap_runningActionsCount = obj10789_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10789_onTap_runningActionsCount = window.obj10789_onTap_runningActionsCount - 1;
if (window.obj10789_onTap_runningActionsCount < 0) {
	window.obj10789_onTap_runningActionsCount = 0;
} else if (window.obj10789_onTap_runningActionsCount == 0) {
	obj10789_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10797(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10789_onTap_runningActionsCount = window.obj10789_onTap_runningActionsCount - 1;
if (window.obj10789_onTap_runningActionsCount < 0) {
	window.obj10789_onTap_runningActionsCount = 0;
} else if (window.obj10789_onTap_runningActionsCount == 0) {
	obj10789_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10789_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10789_onTap_activeActionGroupIndex = -1;
		$("#obj10789").trigger("obj10789_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10789) {
				console.warn("de-queueing event obj10789." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10789").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10789_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj10757
(function(){
	window.obj10789_onTap_runningActionsCount = obj10789_onTap_runningActionsCount + 1;

	var selector = "#obj10757";
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
					window.obj10789_onTap_runningActionsCount = window.obj10789_onTap_runningActionsCount - 1;
if (window.obj10789_onTap_runningActionsCount < 0) {
	window.obj10789_onTap_runningActionsCount = 0;
} else if (window.obj10789_onTap_runningActionsCount == 0) {
	obj10789_onTap_actionGroup2();
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
				window.obj10789_onTap_runningActionsCount = window.obj10789_onTap_runningActionsCount - 1;
if (window.obj10789_onTap_runningActionsCount < 0) {
	window.obj10789_onTap_runningActionsCount = 0;
} else if (window.obj10789_onTap_runningActionsCount == 0) {
	obj10789_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10789_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10789_onTap_activeActionGroupIndex = -1;
		$("#obj10789").trigger("obj10789_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10789) {
				console.warn("de-queueing event obj10789." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10789").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10789_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10800();
function playAudioFile_10800() {
	window.obj10789_onTap_runningActionsCount = obj10789_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10800")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10800");
			$("#obj_audio_playSoundFile10800").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10789_onTap_runningActionsCount = window.obj10789_onTap_runningActionsCount - 1;
if (window.obj10789_onTap_runningActionsCount < 0) {
	window.obj10789_onTap_runningActionsCount = 0;
} else if (window.obj10789_onTap_runningActionsCount == 0) {
	obj10789_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10789_onTap_runningActionsCount = window.obj10789_onTap_runningActionsCount - 1;
if (window.obj10789_onTap_runningActionsCount < 0) {
	window.obj10789_onTap_runningActionsCount = 0;
} else if (window.obj10789_onTap_runningActionsCount == 0) {
	obj10789_onTap_actionGroup3();
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
				window.obj10789_onTap_runningActionsCount = window.obj10789_onTap_runningActionsCount - 1;
if (window.obj10789_onTap_runningActionsCount < 0) {
	window.obj10789_onTap_runningActionsCount = 0;
} else if (window.obj10789_onTap_runningActionsCount == 0) {
	obj10789_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10789_onTap_runningActionsCount = window.obj10789_onTap_runningActionsCount - 1;
if (window.obj10789_onTap_runningActionsCount < 0) {
	window.obj10789_onTap_runningActionsCount = 0;
} else if (window.obj10789_onTap_runningActionsCount == 0) {
	obj10789_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10789_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10789_onTap_activeActionGroupIndex = -1;
		$("#obj10789").trigger("obj10789_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10789) {
				console.warn("de-queueing event obj10789." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10789").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10789_onTap_activeActionGroupIndex = 3;
	






















};
obj10784_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10784_onTap_activeActionGroupIndex = -1;
		$("#obj10784").trigger("obj10784_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10784) {
				console.warn("de-queueing event obj10784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10784_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj10757 
hide_10786();
function hide_10786() {
	var selector = "#obj10757";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10784_onTap_runningActionsCount = obj10784_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10784_onTap_runningActionsCount = window.obj10784_onTap_runningActionsCount - 1;
if (window.obj10784_onTap_runningActionsCount < 0) {
	window.obj10784_onTap_runningActionsCount = 0;
} else if (window.obj10784_onTap_runningActionsCount == 0) {
	obj10784_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10786(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10784_onTap_runningActionsCount = window.obj10784_onTap_runningActionsCount - 1;
if (window.obj10784_onTap_runningActionsCount < 0) {
	window.obj10784_onTap_runningActionsCount = 0;
} else if (window.obj10784_onTap_runningActionsCount == 0) {
	obj10784_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10784_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10784_onTap_activeActionGroupIndex = -1;
		$("#obj10784").trigger("obj10784_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10784) {
				console.warn("de-queueing event obj10784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10784_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj10774
(function(){
	window.obj10784_onTap_runningActionsCount = obj10784_onTap_runningActionsCount + 1;

	var selector = "#obj10774";
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
					window.obj10784_onTap_runningActionsCount = window.obj10784_onTap_runningActionsCount - 1;
if (window.obj10784_onTap_runningActionsCount < 0) {
	window.obj10784_onTap_runningActionsCount = 0;
} else if (window.obj10784_onTap_runningActionsCount == 0) {
	obj10784_onTap_actionGroup2();
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
				window.obj10784_onTap_runningActionsCount = window.obj10784_onTap_runningActionsCount - 1;
if (window.obj10784_onTap_runningActionsCount < 0) {
	window.obj10784_onTap_runningActionsCount = 0;
} else if (window.obj10784_onTap_runningActionsCount == 0) {
	obj10784_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10784_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10784_onTap_activeActionGroupIndex = -1;
		$("#obj10784").trigger("obj10784_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10784) {
				console.warn("de-queueing event obj10784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10784_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10801();
function playAudioFile_10801() {
	window.obj10784_onTap_runningActionsCount = obj10784_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10801")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10801");
			$("#obj_audio_playSoundFile10801").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10784_onTap_runningActionsCount = window.obj10784_onTap_runningActionsCount - 1;
if (window.obj10784_onTap_runningActionsCount < 0) {
	window.obj10784_onTap_runningActionsCount = 0;
} else if (window.obj10784_onTap_runningActionsCount == 0) {
	obj10784_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10784_onTap_runningActionsCount = window.obj10784_onTap_runningActionsCount - 1;
if (window.obj10784_onTap_runningActionsCount < 0) {
	window.obj10784_onTap_runningActionsCount = 0;
} else if (window.obj10784_onTap_runningActionsCount == 0) {
	obj10784_onTap_actionGroup3();
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
				window.obj10784_onTap_runningActionsCount = window.obj10784_onTap_runningActionsCount - 1;
if (window.obj10784_onTap_runningActionsCount < 0) {
	window.obj10784_onTap_runningActionsCount = 0;
} else if (window.obj10784_onTap_runningActionsCount == 0) {
	obj10784_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10784_onTap_runningActionsCount = window.obj10784_onTap_runningActionsCount - 1;
if (window.obj10784_onTap_runningActionsCount < 0) {
	window.obj10784_onTap_runningActionsCount = 0;
} else if (window.obj10784_onTap_runningActionsCount == 0) {
	obj10784_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10784_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10784_onTap_activeActionGroupIndex = -1;
		$("#obj10784").trigger("obj10784_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10784) {
				console.warn("de-queueing event obj10784." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10784").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10784_onTap_activeActionGroupIndex = 3;
	






















};
obj10805_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10805_onTap_activeActionGroupIndex = -1;
		$("#obj10805").trigger("obj10805_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10805) {
				console.warn("de-queueing event obj10805." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10805").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10805_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj10817 
hide_10807();
function hide_10807() {
	var selector = "#obj10817";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10805_onTap_runningActionsCount = obj10805_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10805_onTap_runningActionsCount = window.obj10805_onTap_runningActionsCount - 1;
if (window.obj10805_onTap_runningActionsCount < 0) {
	window.obj10805_onTap_runningActionsCount = 0;
} else if (window.obj10805_onTap_runningActionsCount == 0) {
	obj10805_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10807(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10805_onTap_runningActionsCount = window.obj10805_onTap_runningActionsCount - 1;
if (window.obj10805_onTap_runningActionsCount < 0) {
	window.obj10805_onTap_runningActionsCount = 0;
} else if (window.obj10805_onTap_runningActionsCount == 0) {
	obj10805_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10805_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10805_onTap_activeActionGroupIndex = -1;
		$("#obj10805").trigger("obj10805_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10805) {
				console.warn("de-queueing event obj10805." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10805").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10805_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj10820
(function(){
	window.obj10805_onTap_runningActionsCount = obj10805_onTap_runningActionsCount + 1;

	var selector = "#obj10820";
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
					window.obj10805_onTap_runningActionsCount = window.obj10805_onTap_runningActionsCount - 1;
if (window.obj10805_onTap_runningActionsCount < 0) {
	window.obj10805_onTap_runningActionsCount = 0;
} else if (window.obj10805_onTap_runningActionsCount == 0) {
	obj10805_onTap_actionGroup2();
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
				window.obj10805_onTap_runningActionsCount = window.obj10805_onTap_runningActionsCount - 1;
if (window.obj10805_onTap_runningActionsCount < 0) {
	window.obj10805_onTap_runningActionsCount = 0;
} else if (window.obj10805_onTap_runningActionsCount == 0) {
	obj10805_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10805_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10805_onTap_activeActionGroupIndex = -1;
		$("#obj10805").trigger("obj10805_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10805) {
				console.warn("de-queueing event obj10805." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10805").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10805_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10809();
function playAudioFile_10809() {
	window.obj10805_onTap_runningActionsCount = obj10805_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10809")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10809");
			$("#obj_audio_playSoundFile10809").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10805_onTap_runningActionsCount = window.obj10805_onTap_runningActionsCount - 1;
if (window.obj10805_onTap_runningActionsCount < 0) {
	window.obj10805_onTap_runningActionsCount = 0;
} else if (window.obj10805_onTap_runningActionsCount == 0) {
	obj10805_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10805_onTap_runningActionsCount = window.obj10805_onTap_runningActionsCount - 1;
if (window.obj10805_onTap_runningActionsCount < 0) {
	window.obj10805_onTap_runningActionsCount = 0;
} else if (window.obj10805_onTap_runningActionsCount == 0) {
	obj10805_onTap_actionGroup3();
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
				window.obj10805_onTap_runningActionsCount = window.obj10805_onTap_runningActionsCount - 1;
if (window.obj10805_onTap_runningActionsCount < 0) {
	window.obj10805_onTap_runningActionsCount = 0;
} else if (window.obj10805_onTap_runningActionsCount == 0) {
	obj10805_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10805_onTap_runningActionsCount = window.obj10805_onTap_runningActionsCount - 1;
if (window.obj10805_onTap_runningActionsCount < 0) {
	window.obj10805_onTap_runningActionsCount = 0;
} else if (window.obj10805_onTap_runningActionsCount == 0) {
	obj10805_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10805_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10805_onTap_activeActionGroupIndex = -1;
		$("#obj10805").trigger("obj10805_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10805) {
				console.warn("de-queueing event obj10805." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10805").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10805_onTap_activeActionGroupIndex = 3;
	






















};
obj10811_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10811_onTap_activeActionGroupIndex = -1;
		$("#obj10811").trigger("obj10811_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10811) {
				console.warn("de-queueing event obj10811." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10811").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10811_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj10820 
hide_10813();
function hide_10813() {
	var selector = "#obj10820";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10811_onTap_runningActionsCount = obj10811_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10811_onTap_runningActionsCount = window.obj10811_onTap_runningActionsCount - 1;
if (window.obj10811_onTap_runningActionsCount < 0) {
	window.obj10811_onTap_runningActionsCount = 0;
} else if (window.obj10811_onTap_runningActionsCount == 0) {
	obj10811_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10813(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10811_onTap_runningActionsCount = window.obj10811_onTap_runningActionsCount - 1;
if (window.obj10811_onTap_runningActionsCount < 0) {
	window.obj10811_onTap_runningActionsCount = 0;
} else if (window.obj10811_onTap_runningActionsCount == 0) {
	obj10811_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10811_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10811_onTap_activeActionGroupIndex = -1;
		$("#obj10811").trigger("obj10811_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10811) {
				console.warn("de-queueing event obj10811." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10811").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10811_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj10817
(function(){
	window.obj10811_onTap_runningActionsCount = obj10811_onTap_runningActionsCount + 1;

	var selector = "#obj10817";
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
					window.obj10811_onTap_runningActionsCount = window.obj10811_onTap_runningActionsCount - 1;
if (window.obj10811_onTap_runningActionsCount < 0) {
	window.obj10811_onTap_runningActionsCount = 0;
} else if (window.obj10811_onTap_runningActionsCount == 0) {
	obj10811_onTap_actionGroup2();
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
				window.obj10811_onTap_runningActionsCount = window.obj10811_onTap_runningActionsCount - 1;
if (window.obj10811_onTap_runningActionsCount < 0) {
	window.obj10811_onTap_runningActionsCount = 0;
} else if (window.obj10811_onTap_runningActionsCount == 0) {
	obj10811_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10811_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10811_onTap_activeActionGroupIndex = -1;
		$("#obj10811").trigger("obj10811_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10811) {
				console.warn("de-queueing event obj10811." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10811").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10811_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10815();
function playAudioFile_10815() {
	window.obj10811_onTap_runningActionsCount = obj10811_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10815")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10815");
			$("#obj_audio_playSoundFile10815").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10811_onTap_runningActionsCount = window.obj10811_onTap_runningActionsCount - 1;
if (window.obj10811_onTap_runningActionsCount < 0) {
	window.obj10811_onTap_runningActionsCount = 0;
} else if (window.obj10811_onTap_runningActionsCount == 0) {
	obj10811_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10811_onTap_runningActionsCount = window.obj10811_onTap_runningActionsCount - 1;
if (window.obj10811_onTap_runningActionsCount < 0) {
	window.obj10811_onTap_runningActionsCount = 0;
} else if (window.obj10811_onTap_runningActionsCount == 0) {
	obj10811_onTap_actionGroup3();
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
				window.obj10811_onTap_runningActionsCount = window.obj10811_onTap_runningActionsCount - 1;
if (window.obj10811_onTap_runningActionsCount < 0) {
	window.obj10811_onTap_runningActionsCount = 0;
} else if (window.obj10811_onTap_runningActionsCount == 0) {
	obj10811_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10811_onTap_runningActionsCount = window.obj10811_onTap_runningActionsCount - 1;
if (window.obj10811_onTap_runningActionsCount < 0) {
	window.obj10811_onTap_runningActionsCount = 0;
} else if (window.obj10811_onTap_runningActionsCount == 0) {
	obj10811_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10811_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10811_onTap_activeActionGroupIndex = -1;
		$("#obj10811").trigger("obj10811_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10811) {
				console.warn("de-queueing event obj10811." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10811").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10811_onTap_activeActionGroupIndex = 3;
	






















};
obj10849_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10849_onTap_activeActionGroupIndex = -1;
		$("#obj10849").trigger("obj10849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10849) {
				console.warn("de-queueing event obj10849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10849_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj10861 
hide_10851();
function hide_10851() {
	var selector = "#obj10861";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10849_onTap_runningActionsCount = obj10849_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10849_onTap_runningActionsCount = window.obj10849_onTap_runningActionsCount - 1;
if (window.obj10849_onTap_runningActionsCount < 0) {
	window.obj10849_onTap_runningActionsCount = 0;
} else if (window.obj10849_onTap_runningActionsCount == 0) {
	obj10849_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10851(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10849_onTap_runningActionsCount = window.obj10849_onTap_runningActionsCount - 1;
if (window.obj10849_onTap_runningActionsCount < 0) {
	window.obj10849_onTap_runningActionsCount = 0;
} else if (window.obj10849_onTap_runningActionsCount == 0) {
	obj10849_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10849_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10849_onTap_activeActionGroupIndex = -1;
		$("#obj10849").trigger("obj10849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10849) {
				console.warn("de-queueing event obj10849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10849_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj10864
(function(){
	window.obj10849_onTap_runningActionsCount = obj10849_onTap_runningActionsCount + 1;

	var selector = "#obj10864";
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
					window.obj10849_onTap_runningActionsCount = window.obj10849_onTap_runningActionsCount - 1;
if (window.obj10849_onTap_runningActionsCount < 0) {
	window.obj10849_onTap_runningActionsCount = 0;
} else if (window.obj10849_onTap_runningActionsCount == 0) {
	obj10849_onTap_actionGroup2();
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
				window.obj10849_onTap_runningActionsCount = window.obj10849_onTap_runningActionsCount - 1;
if (window.obj10849_onTap_runningActionsCount < 0) {
	window.obj10849_onTap_runningActionsCount = 0;
} else if (window.obj10849_onTap_runningActionsCount == 0) {
	obj10849_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10849_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10849_onTap_activeActionGroupIndex = -1;
		$("#obj10849").trigger("obj10849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10849) {
				console.warn("de-queueing event obj10849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10849_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10853();
function playAudioFile_10853() {
	window.obj10849_onTap_runningActionsCount = obj10849_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10853")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10853");
			$("#obj_audio_playSoundFile10853").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10849_onTap_runningActionsCount = window.obj10849_onTap_runningActionsCount - 1;
if (window.obj10849_onTap_runningActionsCount < 0) {
	window.obj10849_onTap_runningActionsCount = 0;
} else if (window.obj10849_onTap_runningActionsCount == 0) {
	obj10849_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10849_onTap_runningActionsCount = window.obj10849_onTap_runningActionsCount - 1;
if (window.obj10849_onTap_runningActionsCount < 0) {
	window.obj10849_onTap_runningActionsCount = 0;
} else if (window.obj10849_onTap_runningActionsCount == 0) {
	obj10849_onTap_actionGroup3();
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
				window.obj10849_onTap_runningActionsCount = window.obj10849_onTap_runningActionsCount - 1;
if (window.obj10849_onTap_runningActionsCount < 0) {
	window.obj10849_onTap_runningActionsCount = 0;
} else if (window.obj10849_onTap_runningActionsCount == 0) {
	obj10849_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10849_onTap_runningActionsCount = window.obj10849_onTap_runningActionsCount - 1;
if (window.obj10849_onTap_runningActionsCount < 0) {
	window.obj10849_onTap_runningActionsCount = 0;
} else if (window.obj10849_onTap_runningActionsCount == 0) {
	obj10849_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10849_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10849_onTap_activeActionGroupIndex = -1;
		$("#obj10849").trigger("obj10849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10849) {
				console.warn("de-queueing event obj10849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10849_onTap_activeActionGroupIndex = 3;
	






















};
obj10864_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10864_onTap_activeActionGroupIndex = -1;
		$("#obj10864").trigger("obj10864_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10864) {
				console.warn("de-queueing event obj10864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10864_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj10864 
switchImage_10866();
function switchImage_10866() {
	window.obj10864_onTap_runningActionsCount = obj10864_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj10864";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj10864_img";
	var fromImagePath = "../images/obj10757_image.png";
	var toImagePath = "../images/obj10757_image.png";
	var switchHelperId = "switchHelper76"
	var switchHelperRef = "#switchHelper76"
	var switchId = "76";
	var toSwitchId = "76";
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
				window.obj10864_onTap_runningActionsCount = window.obj10864_onTap_runningActionsCount - 1;
if (window.obj10864_onTap_runningActionsCount < 0) {
	window.obj10864_onTap_runningActionsCount = 0;
} else if (window.obj10864_onTap_runningActionsCount == 0) {
	obj10864_onTap_actionGroup1();
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
obj10864_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10864_onTap_activeActionGroupIndex = -1;
		$("#obj10864").trigger("obj10864_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10864) {
				console.warn("de-queueing event obj10864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10864_onTap_activeActionGroupIndex = 1;
	






















};
obj10855_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10855_onTap_activeActionGroupIndex = -1;
		$("#obj10855").trigger("obj10855_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10855) {
				console.warn("de-queueing event obj10855." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10855").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10855_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj10864 
hide_10857();
function hide_10857() {
	var selector = "#obj10864";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10855_onTap_runningActionsCount = obj10855_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10855_onTap_runningActionsCount = window.obj10855_onTap_runningActionsCount - 1;
if (window.obj10855_onTap_runningActionsCount < 0) {
	window.obj10855_onTap_runningActionsCount = 0;
} else if (window.obj10855_onTap_runningActionsCount == 0) {
	obj10855_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10857(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10855_onTap_runningActionsCount = window.obj10855_onTap_runningActionsCount - 1;
if (window.obj10855_onTap_runningActionsCount < 0) {
	window.obj10855_onTap_runningActionsCount = 0;
} else if (window.obj10855_onTap_runningActionsCount == 0) {
	obj10855_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10855_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10855_onTap_activeActionGroupIndex = -1;
		$("#obj10855").trigger("obj10855_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10855) {
				console.warn("de-queueing event obj10855." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10855").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10855_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj10861
(function(){
	window.obj10855_onTap_runningActionsCount = obj10855_onTap_runningActionsCount + 1;

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
					window.obj10855_onTap_runningActionsCount = window.obj10855_onTap_runningActionsCount - 1;
if (window.obj10855_onTap_runningActionsCount < 0) {
	window.obj10855_onTap_runningActionsCount = 0;
} else if (window.obj10855_onTap_runningActionsCount == 0) {
	obj10855_onTap_actionGroup2();
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
				window.obj10855_onTap_runningActionsCount = window.obj10855_onTap_runningActionsCount - 1;
if (window.obj10855_onTap_runningActionsCount < 0) {
	window.obj10855_onTap_runningActionsCount = 0;
} else if (window.obj10855_onTap_runningActionsCount == 0) {
	obj10855_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10855_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10855_onTap_activeActionGroupIndex = -1;
		$("#obj10855").trigger("obj10855_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10855) {
				console.warn("de-queueing event obj10855." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10855").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10855_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10859();
function playAudioFile_10859() {
	window.obj10855_onTap_runningActionsCount = obj10855_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10859")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10859");
			$("#obj_audio_playSoundFile10859").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10855_onTap_runningActionsCount = window.obj10855_onTap_runningActionsCount - 1;
if (window.obj10855_onTap_runningActionsCount < 0) {
	window.obj10855_onTap_runningActionsCount = 0;
} else if (window.obj10855_onTap_runningActionsCount == 0) {
	obj10855_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10855_onTap_runningActionsCount = window.obj10855_onTap_runningActionsCount - 1;
if (window.obj10855_onTap_runningActionsCount < 0) {
	window.obj10855_onTap_runningActionsCount = 0;
} else if (window.obj10855_onTap_runningActionsCount == 0) {
	obj10855_onTap_actionGroup3();
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
				window.obj10855_onTap_runningActionsCount = window.obj10855_onTap_runningActionsCount - 1;
if (window.obj10855_onTap_runningActionsCount < 0) {
	window.obj10855_onTap_runningActionsCount = 0;
} else if (window.obj10855_onTap_runningActionsCount == 0) {
	obj10855_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10855_onTap_runningActionsCount = window.obj10855_onTap_runningActionsCount - 1;
if (window.obj10855_onTap_runningActionsCount < 0) {
	window.obj10855_onTap_runningActionsCount = 0;
} else if (window.obj10855_onTap_runningActionsCount == 0) {
	obj10855_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10855_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10855_onTap_activeActionGroupIndex = -1;
		$("#obj10855").trigger("obj10855_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10855) {
				console.warn("de-queueing event obj10855." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10855").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10855_onTap_activeActionGroupIndex = 3;
	






















};
obj10827_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10827_onTap_activeActionGroupIndex = -1;
		$("#obj10827").trigger("obj10827_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10827) {
				console.warn("de-queueing event obj10827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10827_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj10839 
hide_10829();
function hide_10829() {
	var selector = "#obj10839";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10827_onTap_runningActionsCount = obj10827_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10827_onTap_runningActionsCount = window.obj10827_onTap_runningActionsCount - 1;
if (window.obj10827_onTap_runningActionsCount < 0) {
	window.obj10827_onTap_runningActionsCount = 0;
} else if (window.obj10827_onTap_runningActionsCount == 0) {
	obj10827_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10829(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10827_onTap_runningActionsCount = window.obj10827_onTap_runningActionsCount - 1;
if (window.obj10827_onTap_runningActionsCount < 0) {
	window.obj10827_onTap_runningActionsCount = 0;
} else if (window.obj10827_onTap_runningActionsCount == 0) {
	obj10827_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10827_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10827_onTap_activeActionGroupIndex = -1;
		$("#obj10827").trigger("obj10827_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10827) {
				console.warn("de-queueing event obj10827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10827_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj10842
(function(){
	window.obj10827_onTap_runningActionsCount = obj10827_onTap_runningActionsCount + 1;

	var selector = "#obj10842";
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
					window.obj10827_onTap_runningActionsCount = window.obj10827_onTap_runningActionsCount - 1;
if (window.obj10827_onTap_runningActionsCount < 0) {
	window.obj10827_onTap_runningActionsCount = 0;
} else if (window.obj10827_onTap_runningActionsCount == 0) {
	obj10827_onTap_actionGroup2();
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
				window.obj10827_onTap_runningActionsCount = window.obj10827_onTap_runningActionsCount - 1;
if (window.obj10827_onTap_runningActionsCount < 0) {
	window.obj10827_onTap_runningActionsCount = 0;
} else if (window.obj10827_onTap_runningActionsCount == 0) {
	obj10827_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10827_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10827_onTap_activeActionGroupIndex = -1;
		$("#obj10827").trigger("obj10827_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10827) {
				console.warn("de-queueing event obj10827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10827_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10831();
function playAudioFile_10831() {
	window.obj10827_onTap_runningActionsCount = obj10827_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10831")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10831");
			$("#obj_audio_playSoundFile10831").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10827_onTap_runningActionsCount = window.obj10827_onTap_runningActionsCount - 1;
if (window.obj10827_onTap_runningActionsCount < 0) {
	window.obj10827_onTap_runningActionsCount = 0;
} else if (window.obj10827_onTap_runningActionsCount == 0) {
	obj10827_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10827_onTap_runningActionsCount = window.obj10827_onTap_runningActionsCount - 1;
if (window.obj10827_onTap_runningActionsCount < 0) {
	window.obj10827_onTap_runningActionsCount = 0;
} else if (window.obj10827_onTap_runningActionsCount == 0) {
	obj10827_onTap_actionGroup3();
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
				window.obj10827_onTap_runningActionsCount = window.obj10827_onTap_runningActionsCount - 1;
if (window.obj10827_onTap_runningActionsCount < 0) {
	window.obj10827_onTap_runningActionsCount = 0;
} else if (window.obj10827_onTap_runningActionsCount == 0) {
	obj10827_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10827_onTap_runningActionsCount = window.obj10827_onTap_runningActionsCount - 1;
if (window.obj10827_onTap_runningActionsCount < 0) {
	window.obj10827_onTap_runningActionsCount = 0;
} else if (window.obj10827_onTap_runningActionsCount == 0) {
	obj10827_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10827_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10827_onTap_activeActionGroupIndex = -1;
		$("#obj10827").trigger("obj10827_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10827) {
				console.warn("de-queueing event obj10827." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10827").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10827_onTap_activeActionGroupIndex = 3;
	






















};
obj10833_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10833_onTap_activeActionGroupIndex = -1;
		$("#obj10833").trigger("obj10833_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10833) {
				console.warn("de-queueing event obj10833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10833_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj10842 
hide_10835();
function hide_10835() {
	var selector = "#obj10842";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10833_onTap_runningActionsCount = obj10833_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10833_onTap_runningActionsCount = window.obj10833_onTap_runningActionsCount - 1;
if (window.obj10833_onTap_runningActionsCount < 0) {
	window.obj10833_onTap_runningActionsCount = 0;
} else if (window.obj10833_onTap_runningActionsCount == 0) {
	obj10833_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10835(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10833_onTap_runningActionsCount = window.obj10833_onTap_runningActionsCount - 1;
if (window.obj10833_onTap_runningActionsCount < 0) {
	window.obj10833_onTap_runningActionsCount = 0;
} else if (window.obj10833_onTap_runningActionsCount == 0) {
	obj10833_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10833_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10833_onTap_activeActionGroupIndex = -1;
		$("#obj10833").trigger("obj10833_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10833) {
				console.warn("de-queueing event obj10833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10833_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj10839
(function(){
	window.obj10833_onTap_runningActionsCount = obj10833_onTap_runningActionsCount + 1;

	var selector = "#obj10839";
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
					window.obj10833_onTap_runningActionsCount = window.obj10833_onTap_runningActionsCount - 1;
if (window.obj10833_onTap_runningActionsCount < 0) {
	window.obj10833_onTap_runningActionsCount = 0;
} else if (window.obj10833_onTap_runningActionsCount == 0) {
	obj10833_onTap_actionGroup2();
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
				window.obj10833_onTap_runningActionsCount = window.obj10833_onTap_runningActionsCount - 1;
if (window.obj10833_onTap_runningActionsCount < 0) {
	window.obj10833_onTap_runningActionsCount = 0;
} else if (window.obj10833_onTap_runningActionsCount == 0) {
	obj10833_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10833_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10833_onTap_activeActionGroupIndex = -1;
		$("#obj10833").trigger("obj10833_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10833) {
				console.warn("de-queueing event obj10833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10833_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10837();
function playAudioFile_10837() {
	window.obj10833_onTap_runningActionsCount = obj10833_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10837")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10837");
			$("#obj_audio_playSoundFile10837").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10833_onTap_runningActionsCount = window.obj10833_onTap_runningActionsCount - 1;
if (window.obj10833_onTap_runningActionsCount < 0) {
	window.obj10833_onTap_runningActionsCount = 0;
} else if (window.obj10833_onTap_runningActionsCount == 0) {
	obj10833_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10833_onTap_runningActionsCount = window.obj10833_onTap_runningActionsCount - 1;
if (window.obj10833_onTap_runningActionsCount < 0) {
	window.obj10833_onTap_runningActionsCount = 0;
} else if (window.obj10833_onTap_runningActionsCount == 0) {
	obj10833_onTap_actionGroup3();
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
				window.obj10833_onTap_runningActionsCount = window.obj10833_onTap_runningActionsCount - 1;
if (window.obj10833_onTap_runningActionsCount < 0) {
	window.obj10833_onTap_runningActionsCount = 0;
} else if (window.obj10833_onTap_runningActionsCount == 0) {
	obj10833_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10833_onTap_runningActionsCount = window.obj10833_onTap_runningActionsCount - 1;
if (window.obj10833_onTap_runningActionsCount < 0) {
	window.obj10833_onTap_runningActionsCount = 0;
} else if (window.obj10833_onTap_runningActionsCount == 0) {
	obj10833_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10833_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10833_onTap_activeActionGroupIndex = -1;
		$("#obj10833").trigger("obj10833_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10833) {
				console.warn("de-queueing event obj10833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10833_onTap_activeActionGroupIndex = 3;
	






















};
obj10881_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10881_onTap_activeActionGroupIndex = -1;
		$("#obj10881").trigger("obj10881_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10881) {
				console.warn("de-queueing event obj10881." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10881").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10881_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj10872 
hide_10883();
function hide_10883() {
	var selector = "#obj10872";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10881_onTap_runningActionsCount = obj10881_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10881_onTap_runningActionsCount = window.obj10881_onTap_runningActionsCount - 1;
if (window.obj10881_onTap_runningActionsCount < 0) {
	window.obj10881_onTap_runningActionsCount = 0;
} else if (window.obj10881_onTap_runningActionsCount == 0) {
	obj10881_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10883(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10881_onTap_runningActionsCount = window.obj10881_onTap_runningActionsCount - 1;
if (window.obj10881_onTap_runningActionsCount < 0) {
	window.obj10881_onTap_runningActionsCount = 0;
} else if (window.obj10881_onTap_runningActionsCount == 0) {
	obj10881_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10881_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10881_onTap_activeActionGroupIndex = -1;
		$("#obj10881").trigger("obj10881_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10881) {
				console.warn("de-queueing event obj10881." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10881").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10881_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj10868
(function(){
	window.obj10881_onTap_runningActionsCount = obj10881_onTap_runningActionsCount + 1;

	var selector = "#obj10868";
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
					window.obj10881_onTap_runningActionsCount = window.obj10881_onTap_runningActionsCount - 1;
if (window.obj10881_onTap_runningActionsCount < 0) {
	window.obj10881_onTap_runningActionsCount = 0;
} else if (window.obj10881_onTap_runningActionsCount == 0) {
	obj10881_onTap_actionGroup2();
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
				window.obj10881_onTap_runningActionsCount = window.obj10881_onTap_runningActionsCount - 1;
if (window.obj10881_onTap_runningActionsCount < 0) {
	window.obj10881_onTap_runningActionsCount = 0;
} else if (window.obj10881_onTap_runningActionsCount == 0) {
	obj10881_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10881_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10881_onTap_activeActionGroupIndex = -1;
		$("#obj10881").trigger("obj10881_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10881) {
				console.warn("de-queueing event obj10881." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10881").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10881_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10885();
function playAudioFile_10885() {
	window.obj10881_onTap_runningActionsCount = obj10881_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10885")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10885");
			$("#obj_audio_playSoundFile10885").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10881_onTap_runningActionsCount = window.obj10881_onTap_runningActionsCount - 1;
if (window.obj10881_onTap_runningActionsCount < 0) {
	window.obj10881_onTap_runningActionsCount = 0;
} else if (window.obj10881_onTap_runningActionsCount == 0) {
	obj10881_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10881_onTap_runningActionsCount = window.obj10881_onTap_runningActionsCount - 1;
if (window.obj10881_onTap_runningActionsCount < 0) {
	window.obj10881_onTap_runningActionsCount = 0;
} else if (window.obj10881_onTap_runningActionsCount == 0) {
	obj10881_onTap_actionGroup3();
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
				window.obj10881_onTap_runningActionsCount = window.obj10881_onTap_runningActionsCount - 1;
if (window.obj10881_onTap_runningActionsCount < 0) {
	window.obj10881_onTap_runningActionsCount = 0;
} else if (window.obj10881_onTap_runningActionsCount == 0) {
	obj10881_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10881_onTap_runningActionsCount = window.obj10881_onTap_runningActionsCount - 1;
if (window.obj10881_onTap_runningActionsCount < 0) {
	window.obj10881_onTap_runningActionsCount = 0;
} else if (window.obj10881_onTap_runningActionsCount == 0) {
	obj10881_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10881_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10881_onTap_activeActionGroupIndex = -1;
		$("#obj10881").trigger("obj10881_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10881) {
				console.warn("de-queueing event obj10881." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10881").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10881_onTap_activeActionGroupIndex = 3;
	






















};
obj10875_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10875_onTap_activeActionGroupIndex = -1;
		$("#obj10875").trigger("obj10875_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10875) {
				console.warn("de-queueing event obj10875." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10875").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10875_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj10868 
hide_10877();
function hide_10877() {
	var selector = "#obj10868";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10875_onTap_runningActionsCount = obj10875_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10875_onTap_runningActionsCount = window.obj10875_onTap_runningActionsCount - 1;
if (window.obj10875_onTap_runningActionsCount < 0) {
	window.obj10875_onTap_runningActionsCount = 0;
} else if (window.obj10875_onTap_runningActionsCount == 0) {
	obj10875_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10877(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10875_onTap_runningActionsCount = window.obj10875_onTap_runningActionsCount - 1;
if (window.obj10875_onTap_runningActionsCount < 0) {
	window.obj10875_onTap_runningActionsCount = 0;
} else if (window.obj10875_onTap_runningActionsCount == 0) {
	obj10875_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10875_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10875_onTap_activeActionGroupIndex = -1;
		$("#obj10875").trigger("obj10875_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10875) {
				console.warn("de-queueing event obj10875." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10875").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10875_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj10872
(function(){
	window.obj10875_onTap_runningActionsCount = obj10875_onTap_runningActionsCount + 1;

	var selector = "#obj10872";
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
					window.obj10875_onTap_runningActionsCount = window.obj10875_onTap_runningActionsCount - 1;
if (window.obj10875_onTap_runningActionsCount < 0) {
	window.obj10875_onTap_runningActionsCount = 0;
} else if (window.obj10875_onTap_runningActionsCount == 0) {
	obj10875_onTap_actionGroup2();
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
				window.obj10875_onTap_runningActionsCount = window.obj10875_onTap_runningActionsCount - 1;
if (window.obj10875_onTap_runningActionsCount < 0) {
	window.obj10875_onTap_runningActionsCount = 0;
} else if (window.obj10875_onTap_runningActionsCount == 0) {
	obj10875_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10875_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10875_onTap_activeActionGroupIndex = -1;
		$("#obj10875").trigger("obj10875_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10875) {
				console.warn("de-queueing event obj10875." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10875").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10875_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10879();
function playAudioFile_10879() {
	window.obj10875_onTap_runningActionsCount = obj10875_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10879")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10879");
			$("#obj_audio_playSoundFile10879").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10875_onTap_runningActionsCount = window.obj10875_onTap_runningActionsCount - 1;
if (window.obj10875_onTap_runningActionsCount < 0) {
	window.obj10875_onTap_runningActionsCount = 0;
} else if (window.obj10875_onTap_runningActionsCount == 0) {
	obj10875_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10875_onTap_runningActionsCount = window.obj10875_onTap_runningActionsCount - 1;
if (window.obj10875_onTap_runningActionsCount < 0) {
	window.obj10875_onTap_runningActionsCount = 0;
} else if (window.obj10875_onTap_runningActionsCount == 0) {
	obj10875_onTap_actionGroup3();
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
				window.obj10875_onTap_runningActionsCount = window.obj10875_onTap_runningActionsCount - 1;
if (window.obj10875_onTap_runningActionsCount < 0) {
	window.obj10875_onTap_runningActionsCount = 0;
} else if (window.obj10875_onTap_runningActionsCount == 0) {
	obj10875_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10875_onTap_runningActionsCount = window.obj10875_onTap_runningActionsCount - 1;
if (window.obj10875_onTap_runningActionsCount < 0) {
	window.obj10875_onTap_runningActionsCount = 0;
} else if (window.obj10875_onTap_runningActionsCount == 0) {
	obj10875_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10875_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10875_onTap_activeActionGroupIndex = -1;
		$("#obj10875").trigger("obj10875_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10875) {
				console.warn("de-queueing event obj10875." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10875").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10875_onTap_activeActionGroupIndex = 3;
	






















};
obj10903_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10903_onTap_activeActionGroupIndex = -1;
		$("#obj10903").trigger("obj10903_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10903) {
				console.warn("de-queueing event obj10903." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10903").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10903_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj10894 
hide_10905();
function hide_10905() {
	var selector = "#obj10894";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10903_onTap_runningActionsCount = obj10903_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10903_onTap_runningActionsCount = window.obj10903_onTap_runningActionsCount - 1;
if (window.obj10903_onTap_runningActionsCount < 0) {
	window.obj10903_onTap_runningActionsCount = 0;
} else if (window.obj10903_onTap_runningActionsCount == 0) {
	obj10903_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10905(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10903_onTap_runningActionsCount = window.obj10903_onTap_runningActionsCount - 1;
if (window.obj10903_onTap_runningActionsCount < 0) {
	window.obj10903_onTap_runningActionsCount = 0;
} else if (window.obj10903_onTap_runningActionsCount == 0) {
	obj10903_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10903_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10903_onTap_activeActionGroupIndex = -1;
		$("#obj10903").trigger("obj10903_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10903) {
				console.warn("de-queueing event obj10903." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10903").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10903_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj10890
(function(){
	window.obj10903_onTap_runningActionsCount = obj10903_onTap_runningActionsCount + 1;

	var selector = "#obj10890";
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
					window.obj10903_onTap_runningActionsCount = window.obj10903_onTap_runningActionsCount - 1;
if (window.obj10903_onTap_runningActionsCount < 0) {
	window.obj10903_onTap_runningActionsCount = 0;
} else if (window.obj10903_onTap_runningActionsCount == 0) {
	obj10903_onTap_actionGroup2();
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
				window.obj10903_onTap_runningActionsCount = window.obj10903_onTap_runningActionsCount - 1;
if (window.obj10903_onTap_runningActionsCount < 0) {
	window.obj10903_onTap_runningActionsCount = 0;
} else if (window.obj10903_onTap_runningActionsCount == 0) {
	obj10903_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10903_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10903_onTap_activeActionGroupIndex = -1;
		$("#obj10903").trigger("obj10903_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10903) {
				console.warn("de-queueing event obj10903." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10903").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10903_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10907();
function playAudioFile_10907() {
	window.obj10903_onTap_runningActionsCount = obj10903_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10907")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10907");
			$("#obj_audio_playSoundFile10907").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10903_onTap_runningActionsCount = window.obj10903_onTap_runningActionsCount - 1;
if (window.obj10903_onTap_runningActionsCount < 0) {
	window.obj10903_onTap_runningActionsCount = 0;
} else if (window.obj10903_onTap_runningActionsCount == 0) {
	obj10903_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10903_onTap_runningActionsCount = window.obj10903_onTap_runningActionsCount - 1;
if (window.obj10903_onTap_runningActionsCount < 0) {
	window.obj10903_onTap_runningActionsCount = 0;
} else if (window.obj10903_onTap_runningActionsCount == 0) {
	obj10903_onTap_actionGroup3();
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
				window.obj10903_onTap_runningActionsCount = window.obj10903_onTap_runningActionsCount - 1;
if (window.obj10903_onTap_runningActionsCount < 0) {
	window.obj10903_onTap_runningActionsCount = 0;
} else if (window.obj10903_onTap_runningActionsCount == 0) {
	obj10903_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10903_onTap_runningActionsCount = window.obj10903_onTap_runningActionsCount - 1;
if (window.obj10903_onTap_runningActionsCount < 0) {
	window.obj10903_onTap_runningActionsCount = 0;
} else if (window.obj10903_onTap_runningActionsCount == 0) {
	obj10903_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10903_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10903_onTap_activeActionGroupIndex = -1;
		$("#obj10903").trigger("obj10903_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10903) {
				console.warn("de-queueing event obj10903." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10903").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10903_onTap_activeActionGroupIndex = 3;
	






















};
obj10897_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10897_onTap_activeActionGroupIndex = -1;
		$("#obj10897").trigger("obj10897_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10897) {
				console.warn("de-queueing event obj10897." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10897").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10897_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj10890 
hide_10899();
function hide_10899() {
	var selector = "#obj10890";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10897_onTap_runningActionsCount = obj10897_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10897_onTap_runningActionsCount = window.obj10897_onTap_runningActionsCount - 1;
if (window.obj10897_onTap_runningActionsCount < 0) {
	window.obj10897_onTap_runningActionsCount = 0;
} else if (window.obj10897_onTap_runningActionsCount == 0) {
	obj10897_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10899(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10897_onTap_runningActionsCount = window.obj10897_onTap_runningActionsCount - 1;
if (window.obj10897_onTap_runningActionsCount < 0) {
	window.obj10897_onTap_runningActionsCount = 0;
} else if (window.obj10897_onTap_runningActionsCount == 0) {
	obj10897_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10897_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10897_onTap_activeActionGroupIndex = -1;
		$("#obj10897").trigger("obj10897_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10897) {
				console.warn("de-queueing event obj10897." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10897").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10897_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj10894
(function(){
	window.obj10897_onTap_runningActionsCount = obj10897_onTap_runningActionsCount + 1;

	var selector = "#obj10894";
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
					window.obj10897_onTap_runningActionsCount = window.obj10897_onTap_runningActionsCount - 1;
if (window.obj10897_onTap_runningActionsCount < 0) {
	window.obj10897_onTap_runningActionsCount = 0;
} else if (window.obj10897_onTap_runningActionsCount == 0) {
	obj10897_onTap_actionGroup2();
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
				window.obj10897_onTap_runningActionsCount = window.obj10897_onTap_runningActionsCount - 1;
if (window.obj10897_onTap_runningActionsCount < 0) {
	window.obj10897_onTap_runningActionsCount = 0;
} else if (window.obj10897_onTap_runningActionsCount == 0) {
	obj10897_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10897_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10897_onTap_activeActionGroupIndex = -1;
		$("#obj10897").trigger("obj10897_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10897) {
				console.warn("de-queueing event obj10897." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10897").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10897_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10901();
function playAudioFile_10901() {
	window.obj10897_onTap_runningActionsCount = obj10897_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10901")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10901");
			$("#obj_audio_playSoundFile10901").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10897_onTap_runningActionsCount = window.obj10897_onTap_runningActionsCount - 1;
if (window.obj10897_onTap_runningActionsCount < 0) {
	window.obj10897_onTap_runningActionsCount = 0;
} else if (window.obj10897_onTap_runningActionsCount == 0) {
	obj10897_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10897_onTap_runningActionsCount = window.obj10897_onTap_runningActionsCount - 1;
if (window.obj10897_onTap_runningActionsCount < 0) {
	window.obj10897_onTap_runningActionsCount = 0;
} else if (window.obj10897_onTap_runningActionsCount == 0) {
	obj10897_onTap_actionGroup3();
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
				window.obj10897_onTap_runningActionsCount = window.obj10897_onTap_runningActionsCount - 1;
if (window.obj10897_onTap_runningActionsCount < 0) {
	window.obj10897_onTap_runningActionsCount = 0;
} else if (window.obj10897_onTap_runningActionsCount == 0) {
	obj10897_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10897_onTap_runningActionsCount = window.obj10897_onTap_runningActionsCount - 1;
if (window.obj10897_onTap_runningActionsCount < 0) {
	window.obj10897_onTap_runningActionsCount = 0;
} else if (window.obj10897_onTap_runningActionsCount == 0) {
	obj10897_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10897_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10897_onTap_activeActionGroupIndex = -1;
		$("#obj10897").trigger("obj10897_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10897) {
				console.warn("de-queueing event obj10897." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10897").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10897_onTap_activeActionGroupIndex = 3;
	






















};
obj10925_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10925_onTap_activeActionGroupIndex = -1;
		$("#obj10925").trigger("obj10925_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10925) {
				console.warn("de-queueing event obj10925." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10925").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10925_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj10916 
hide_10927();
function hide_10927() {
	var selector = "#obj10916";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10925_onTap_runningActionsCount = obj10925_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10925_onTap_runningActionsCount = window.obj10925_onTap_runningActionsCount - 1;
if (window.obj10925_onTap_runningActionsCount < 0) {
	window.obj10925_onTap_runningActionsCount = 0;
} else if (window.obj10925_onTap_runningActionsCount == 0) {
	obj10925_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10927(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10925_onTap_runningActionsCount = window.obj10925_onTap_runningActionsCount - 1;
if (window.obj10925_onTap_runningActionsCount < 0) {
	window.obj10925_onTap_runningActionsCount = 0;
} else if (window.obj10925_onTap_runningActionsCount == 0) {
	obj10925_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10925_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10925_onTap_activeActionGroupIndex = -1;
		$("#obj10925").trigger("obj10925_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10925) {
				console.warn("de-queueing event obj10925." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10925").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10925_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj10912
(function(){
	window.obj10925_onTap_runningActionsCount = obj10925_onTap_runningActionsCount + 1;

	var selector = "#obj10912";
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
					window.obj10925_onTap_runningActionsCount = window.obj10925_onTap_runningActionsCount - 1;
if (window.obj10925_onTap_runningActionsCount < 0) {
	window.obj10925_onTap_runningActionsCount = 0;
} else if (window.obj10925_onTap_runningActionsCount == 0) {
	obj10925_onTap_actionGroup2();
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
				window.obj10925_onTap_runningActionsCount = window.obj10925_onTap_runningActionsCount - 1;
if (window.obj10925_onTap_runningActionsCount < 0) {
	window.obj10925_onTap_runningActionsCount = 0;
} else if (window.obj10925_onTap_runningActionsCount == 0) {
	obj10925_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10925_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10925_onTap_activeActionGroupIndex = -1;
		$("#obj10925").trigger("obj10925_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10925) {
				console.warn("de-queueing event obj10925." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10925").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10925_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10929();
function playAudioFile_10929() {
	window.obj10925_onTap_runningActionsCount = obj10925_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10929")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10929");
			$("#obj_audio_playSoundFile10929").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10925_onTap_runningActionsCount = window.obj10925_onTap_runningActionsCount - 1;
if (window.obj10925_onTap_runningActionsCount < 0) {
	window.obj10925_onTap_runningActionsCount = 0;
} else if (window.obj10925_onTap_runningActionsCount == 0) {
	obj10925_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10925_onTap_runningActionsCount = window.obj10925_onTap_runningActionsCount - 1;
if (window.obj10925_onTap_runningActionsCount < 0) {
	window.obj10925_onTap_runningActionsCount = 0;
} else if (window.obj10925_onTap_runningActionsCount == 0) {
	obj10925_onTap_actionGroup3();
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
				window.obj10925_onTap_runningActionsCount = window.obj10925_onTap_runningActionsCount - 1;
if (window.obj10925_onTap_runningActionsCount < 0) {
	window.obj10925_onTap_runningActionsCount = 0;
} else if (window.obj10925_onTap_runningActionsCount == 0) {
	obj10925_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10925_onTap_runningActionsCount = window.obj10925_onTap_runningActionsCount - 1;
if (window.obj10925_onTap_runningActionsCount < 0) {
	window.obj10925_onTap_runningActionsCount = 0;
} else if (window.obj10925_onTap_runningActionsCount == 0) {
	obj10925_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10925_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10925_onTap_activeActionGroupIndex = -1;
		$("#obj10925").trigger("obj10925_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10925) {
				console.warn("de-queueing event obj10925." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10925").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10925_onTap_activeActionGroupIndex = 3;
	






















};
obj10919_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10919_onTap_activeActionGroupIndex = -1;
		$("#obj10919").trigger("obj10919_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10919) {
				console.warn("de-queueing event obj10919." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10919").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10919_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj10912 
hide_10921();
function hide_10921() {
	var selector = "#obj10912";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10919_onTap_runningActionsCount = obj10919_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10919_onTap_runningActionsCount = window.obj10919_onTap_runningActionsCount - 1;
if (window.obj10919_onTap_runningActionsCount < 0) {
	window.obj10919_onTap_runningActionsCount = 0;
} else if (window.obj10919_onTap_runningActionsCount == 0) {
	obj10919_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10921(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10919_onTap_runningActionsCount = window.obj10919_onTap_runningActionsCount - 1;
if (window.obj10919_onTap_runningActionsCount < 0) {
	window.obj10919_onTap_runningActionsCount = 0;
} else if (window.obj10919_onTap_runningActionsCount == 0) {
	obj10919_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10919_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10919_onTap_activeActionGroupIndex = -1;
		$("#obj10919").trigger("obj10919_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10919) {
				console.warn("de-queueing event obj10919." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10919").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10919_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj10916
(function(){
	window.obj10919_onTap_runningActionsCount = obj10919_onTap_runningActionsCount + 1;

	var selector = "#obj10916";
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
					window.obj10919_onTap_runningActionsCount = window.obj10919_onTap_runningActionsCount - 1;
if (window.obj10919_onTap_runningActionsCount < 0) {
	window.obj10919_onTap_runningActionsCount = 0;
} else if (window.obj10919_onTap_runningActionsCount == 0) {
	obj10919_onTap_actionGroup2();
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
				window.obj10919_onTap_runningActionsCount = window.obj10919_onTap_runningActionsCount - 1;
if (window.obj10919_onTap_runningActionsCount < 0) {
	window.obj10919_onTap_runningActionsCount = 0;
} else if (window.obj10919_onTap_runningActionsCount == 0) {
	obj10919_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10919_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10919_onTap_activeActionGroupIndex = -1;
		$("#obj10919").trigger("obj10919_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10919) {
				console.warn("de-queueing event obj10919." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10919").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10919_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10923();
function playAudioFile_10923() {
	window.obj10919_onTap_runningActionsCount = obj10919_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10923")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10923");
			$("#obj_audio_playSoundFile10923").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10919_onTap_runningActionsCount = window.obj10919_onTap_runningActionsCount - 1;
if (window.obj10919_onTap_runningActionsCount < 0) {
	window.obj10919_onTap_runningActionsCount = 0;
} else if (window.obj10919_onTap_runningActionsCount == 0) {
	obj10919_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10919_onTap_runningActionsCount = window.obj10919_onTap_runningActionsCount - 1;
if (window.obj10919_onTap_runningActionsCount < 0) {
	window.obj10919_onTap_runningActionsCount = 0;
} else if (window.obj10919_onTap_runningActionsCount == 0) {
	obj10919_onTap_actionGroup3();
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
				window.obj10919_onTap_runningActionsCount = window.obj10919_onTap_runningActionsCount - 1;
if (window.obj10919_onTap_runningActionsCount < 0) {
	window.obj10919_onTap_runningActionsCount = 0;
} else if (window.obj10919_onTap_runningActionsCount == 0) {
	obj10919_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10919_onTap_runningActionsCount = window.obj10919_onTap_runningActionsCount - 1;
if (window.obj10919_onTap_runningActionsCount < 0) {
	window.obj10919_onTap_runningActionsCount = 0;
} else if (window.obj10919_onTap_runningActionsCount == 0) {
	obj10919_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10919_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10919_onTap_activeActionGroupIndex = -1;
		$("#obj10919").trigger("obj10919_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10919) {
				console.warn("de-queueing event obj10919." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10919").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10919_onTap_activeActionGroupIndex = 3;
	






















};
obj10947_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10947_onTap_activeActionGroupIndex = -1;
		$("#obj10947").trigger("obj10947_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10947) {
				console.warn("de-queueing event obj10947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10947_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj10938 
hide_10949();
function hide_10949() {
	var selector = "#obj10938";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10947_onTap_runningActionsCount = obj10947_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10947_onTap_runningActionsCount = window.obj10947_onTap_runningActionsCount - 1;
if (window.obj10947_onTap_runningActionsCount < 0) {
	window.obj10947_onTap_runningActionsCount = 0;
} else if (window.obj10947_onTap_runningActionsCount == 0) {
	obj10947_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10949(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10947_onTap_runningActionsCount = window.obj10947_onTap_runningActionsCount - 1;
if (window.obj10947_onTap_runningActionsCount < 0) {
	window.obj10947_onTap_runningActionsCount = 0;
} else if (window.obj10947_onTap_runningActionsCount == 0) {
	obj10947_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10947_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10947_onTap_activeActionGroupIndex = -1;
		$("#obj10947").trigger("obj10947_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10947) {
				console.warn("de-queueing event obj10947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10947_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj10934
(function(){
	window.obj10947_onTap_runningActionsCount = obj10947_onTap_runningActionsCount + 1;

	var selector = "#obj10934";
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
					window.obj10947_onTap_runningActionsCount = window.obj10947_onTap_runningActionsCount - 1;
if (window.obj10947_onTap_runningActionsCount < 0) {
	window.obj10947_onTap_runningActionsCount = 0;
} else if (window.obj10947_onTap_runningActionsCount == 0) {
	obj10947_onTap_actionGroup2();
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
				window.obj10947_onTap_runningActionsCount = window.obj10947_onTap_runningActionsCount - 1;
if (window.obj10947_onTap_runningActionsCount < 0) {
	window.obj10947_onTap_runningActionsCount = 0;
} else if (window.obj10947_onTap_runningActionsCount == 0) {
	obj10947_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10947_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10947_onTap_activeActionGroupIndex = -1;
		$("#obj10947").trigger("obj10947_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10947) {
				console.warn("de-queueing event obj10947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10947_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10951();
function playAudioFile_10951() {
	window.obj10947_onTap_runningActionsCount = obj10947_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10951")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10951");
			$("#obj_audio_playSoundFile10951").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10947_onTap_runningActionsCount = window.obj10947_onTap_runningActionsCount - 1;
if (window.obj10947_onTap_runningActionsCount < 0) {
	window.obj10947_onTap_runningActionsCount = 0;
} else if (window.obj10947_onTap_runningActionsCount == 0) {
	obj10947_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10947_onTap_runningActionsCount = window.obj10947_onTap_runningActionsCount - 1;
if (window.obj10947_onTap_runningActionsCount < 0) {
	window.obj10947_onTap_runningActionsCount = 0;
} else if (window.obj10947_onTap_runningActionsCount == 0) {
	obj10947_onTap_actionGroup3();
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
				window.obj10947_onTap_runningActionsCount = window.obj10947_onTap_runningActionsCount - 1;
if (window.obj10947_onTap_runningActionsCount < 0) {
	window.obj10947_onTap_runningActionsCount = 0;
} else if (window.obj10947_onTap_runningActionsCount == 0) {
	obj10947_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10947_onTap_runningActionsCount = window.obj10947_onTap_runningActionsCount - 1;
if (window.obj10947_onTap_runningActionsCount < 0) {
	window.obj10947_onTap_runningActionsCount = 0;
} else if (window.obj10947_onTap_runningActionsCount == 0) {
	obj10947_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10947_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10947_onTap_activeActionGroupIndex = -1;
		$("#obj10947").trigger("obj10947_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10947) {
				console.warn("de-queueing event obj10947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10947_onTap_activeActionGroupIndex = 3;
	






















};
obj10941_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10941_onTap_activeActionGroupIndex = -1;
		$("#obj10941").trigger("obj10941_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10941) {
				console.warn("de-queueing event obj10941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10941_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj10934 
hide_10943();
function hide_10943() {
	var selector = "#obj10934";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10941_onTap_runningActionsCount = obj10941_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10941_onTap_runningActionsCount = window.obj10941_onTap_runningActionsCount - 1;
if (window.obj10941_onTap_runningActionsCount < 0) {
	window.obj10941_onTap_runningActionsCount = 0;
} else if (window.obj10941_onTap_runningActionsCount == 0) {
	obj10941_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10943(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10941_onTap_runningActionsCount = window.obj10941_onTap_runningActionsCount - 1;
if (window.obj10941_onTap_runningActionsCount < 0) {
	window.obj10941_onTap_runningActionsCount = 0;
} else if (window.obj10941_onTap_runningActionsCount == 0) {
	obj10941_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10941_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10941_onTap_activeActionGroupIndex = -1;
		$("#obj10941").trigger("obj10941_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10941) {
				console.warn("de-queueing event obj10941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10941_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj10938
(function(){
	window.obj10941_onTap_runningActionsCount = obj10941_onTap_runningActionsCount + 1;

	var selector = "#obj10938";
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
					window.obj10941_onTap_runningActionsCount = window.obj10941_onTap_runningActionsCount - 1;
if (window.obj10941_onTap_runningActionsCount < 0) {
	window.obj10941_onTap_runningActionsCount = 0;
} else if (window.obj10941_onTap_runningActionsCount == 0) {
	obj10941_onTap_actionGroup2();
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
				window.obj10941_onTap_runningActionsCount = window.obj10941_onTap_runningActionsCount - 1;
if (window.obj10941_onTap_runningActionsCount < 0) {
	window.obj10941_onTap_runningActionsCount = 0;
} else if (window.obj10941_onTap_runningActionsCount == 0) {
	obj10941_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10941_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10941_onTap_activeActionGroupIndex = -1;
		$("#obj10941").trigger("obj10941_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10941) {
				console.warn("de-queueing event obj10941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10941_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10945();
function playAudioFile_10945() {
	window.obj10941_onTap_runningActionsCount = obj10941_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10945")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10945");
			$("#obj_audio_playSoundFile10945").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10941_onTap_runningActionsCount = window.obj10941_onTap_runningActionsCount - 1;
if (window.obj10941_onTap_runningActionsCount < 0) {
	window.obj10941_onTap_runningActionsCount = 0;
} else if (window.obj10941_onTap_runningActionsCount == 0) {
	obj10941_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10941_onTap_runningActionsCount = window.obj10941_onTap_runningActionsCount - 1;
if (window.obj10941_onTap_runningActionsCount < 0) {
	window.obj10941_onTap_runningActionsCount = 0;
} else if (window.obj10941_onTap_runningActionsCount == 0) {
	obj10941_onTap_actionGroup3();
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
				window.obj10941_onTap_runningActionsCount = window.obj10941_onTap_runningActionsCount - 1;
if (window.obj10941_onTap_runningActionsCount < 0) {
	window.obj10941_onTap_runningActionsCount = 0;
} else if (window.obj10941_onTap_runningActionsCount == 0) {
	obj10941_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10941_onTap_runningActionsCount = window.obj10941_onTap_runningActionsCount - 1;
if (window.obj10941_onTap_runningActionsCount < 0) {
	window.obj10941_onTap_runningActionsCount = 0;
} else if (window.obj10941_onTap_runningActionsCount == 0) {
	obj10941_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10941_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10941_onTap_activeActionGroupIndex = -1;
		$("#obj10941").trigger("obj10941_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10941) {
				console.warn("de-queueing event obj10941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10941_onTap_activeActionGroupIndex = 3;
	






















};
obj10969_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10969_onTap_activeActionGroupIndex = -1;
		$("#obj10969").trigger("obj10969_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10969) {
				console.warn("de-queueing event obj10969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10969_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj10960 
hide_10971();
function hide_10971() {
	var selector = "#obj10960";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10969_onTap_runningActionsCount = obj10969_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10969_onTap_runningActionsCount = window.obj10969_onTap_runningActionsCount - 1;
if (window.obj10969_onTap_runningActionsCount < 0) {
	window.obj10969_onTap_runningActionsCount = 0;
} else if (window.obj10969_onTap_runningActionsCount == 0) {
	obj10969_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10971(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10969_onTap_runningActionsCount = window.obj10969_onTap_runningActionsCount - 1;
if (window.obj10969_onTap_runningActionsCount < 0) {
	window.obj10969_onTap_runningActionsCount = 0;
} else if (window.obj10969_onTap_runningActionsCount == 0) {
	obj10969_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10969_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10969_onTap_activeActionGroupIndex = -1;
		$("#obj10969").trigger("obj10969_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10969) {
				console.warn("de-queueing event obj10969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10969_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj10956
(function(){
	window.obj10969_onTap_runningActionsCount = obj10969_onTap_runningActionsCount + 1;

	var selector = "#obj10956";
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
					window.obj10969_onTap_runningActionsCount = window.obj10969_onTap_runningActionsCount - 1;
if (window.obj10969_onTap_runningActionsCount < 0) {
	window.obj10969_onTap_runningActionsCount = 0;
} else if (window.obj10969_onTap_runningActionsCount == 0) {
	obj10969_onTap_actionGroup2();
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
				window.obj10969_onTap_runningActionsCount = window.obj10969_onTap_runningActionsCount - 1;
if (window.obj10969_onTap_runningActionsCount < 0) {
	window.obj10969_onTap_runningActionsCount = 0;
} else if (window.obj10969_onTap_runningActionsCount == 0) {
	obj10969_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10969_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10969_onTap_activeActionGroupIndex = -1;
		$("#obj10969").trigger("obj10969_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10969) {
				console.warn("de-queueing event obj10969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10969_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10973();
function playAudioFile_10973() {
	window.obj10969_onTap_runningActionsCount = obj10969_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10973")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10973");
			$("#obj_audio_playSoundFile10973").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10969_onTap_runningActionsCount = window.obj10969_onTap_runningActionsCount - 1;
if (window.obj10969_onTap_runningActionsCount < 0) {
	window.obj10969_onTap_runningActionsCount = 0;
} else if (window.obj10969_onTap_runningActionsCount == 0) {
	obj10969_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10969_onTap_runningActionsCount = window.obj10969_onTap_runningActionsCount - 1;
if (window.obj10969_onTap_runningActionsCount < 0) {
	window.obj10969_onTap_runningActionsCount = 0;
} else if (window.obj10969_onTap_runningActionsCount == 0) {
	obj10969_onTap_actionGroup3();
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
				window.obj10969_onTap_runningActionsCount = window.obj10969_onTap_runningActionsCount - 1;
if (window.obj10969_onTap_runningActionsCount < 0) {
	window.obj10969_onTap_runningActionsCount = 0;
} else if (window.obj10969_onTap_runningActionsCount == 0) {
	obj10969_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10969_onTap_runningActionsCount = window.obj10969_onTap_runningActionsCount - 1;
if (window.obj10969_onTap_runningActionsCount < 0) {
	window.obj10969_onTap_runningActionsCount = 0;
} else if (window.obj10969_onTap_runningActionsCount == 0) {
	obj10969_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10969_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10969_onTap_activeActionGroupIndex = -1;
		$("#obj10969").trigger("obj10969_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10969) {
				console.warn("de-queueing event obj10969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10969_onTap_activeActionGroupIndex = 3;
	






















};
obj10963_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10963_onTap_activeActionGroupIndex = -1;
		$("#obj10963").trigger("obj10963_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10963) {
				console.warn("de-queueing event obj10963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10963_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj10956 
hide_10965();
function hide_10965() {
	var selector = "#obj10956";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10963_onTap_runningActionsCount = obj10963_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10963_onTap_runningActionsCount = window.obj10963_onTap_runningActionsCount - 1;
if (window.obj10963_onTap_runningActionsCount < 0) {
	window.obj10963_onTap_runningActionsCount = 0;
} else if (window.obj10963_onTap_runningActionsCount == 0) {
	obj10963_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10965(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10963_onTap_runningActionsCount = window.obj10963_onTap_runningActionsCount - 1;
if (window.obj10963_onTap_runningActionsCount < 0) {
	window.obj10963_onTap_runningActionsCount = 0;
} else if (window.obj10963_onTap_runningActionsCount == 0) {
	obj10963_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10963_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10963_onTap_activeActionGroupIndex = -1;
		$("#obj10963").trigger("obj10963_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10963) {
				console.warn("de-queueing event obj10963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10963_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj10960
(function(){
	window.obj10963_onTap_runningActionsCount = obj10963_onTap_runningActionsCount + 1;

	var selector = "#obj10960";
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
					window.obj10963_onTap_runningActionsCount = window.obj10963_onTap_runningActionsCount - 1;
if (window.obj10963_onTap_runningActionsCount < 0) {
	window.obj10963_onTap_runningActionsCount = 0;
} else if (window.obj10963_onTap_runningActionsCount == 0) {
	obj10963_onTap_actionGroup2();
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
				window.obj10963_onTap_runningActionsCount = window.obj10963_onTap_runningActionsCount - 1;
if (window.obj10963_onTap_runningActionsCount < 0) {
	window.obj10963_onTap_runningActionsCount = 0;
} else if (window.obj10963_onTap_runningActionsCount == 0) {
	obj10963_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10963_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10963_onTap_activeActionGroupIndex = -1;
		$("#obj10963").trigger("obj10963_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10963) {
				console.warn("de-queueing event obj10963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10963_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10967();
function playAudioFile_10967() {
	window.obj10963_onTap_runningActionsCount = obj10963_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10967")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10967");
			$("#obj_audio_playSoundFile10967").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10963_onTap_runningActionsCount = window.obj10963_onTap_runningActionsCount - 1;
if (window.obj10963_onTap_runningActionsCount < 0) {
	window.obj10963_onTap_runningActionsCount = 0;
} else if (window.obj10963_onTap_runningActionsCount == 0) {
	obj10963_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10963_onTap_runningActionsCount = window.obj10963_onTap_runningActionsCount - 1;
if (window.obj10963_onTap_runningActionsCount < 0) {
	window.obj10963_onTap_runningActionsCount = 0;
} else if (window.obj10963_onTap_runningActionsCount == 0) {
	obj10963_onTap_actionGroup3();
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
				window.obj10963_onTap_runningActionsCount = window.obj10963_onTap_runningActionsCount - 1;
if (window.obj10963_onTap_runningActionsCount < 0) {
	window.obj10963_onTap_runningActionsCount = 0;
} else if (window.obj10963_onTap_runningActionsCount == 0) {
	obj10963_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10963_onTap_runningActionsCount = window.obj10963_onTap_runningActionsCount - 1;
if (window.obj10963_onTap_runningActionsCount < 0) {
	window.obj10963_onTap_runningActionsCount = 0;
} else if (window.obj10963_onTap_runningActionsCount == 0) {
	obj10963_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10963_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10963_onTap_activeActionGroupIndex = -1;
		$("#obj10963").trigger("obj10963_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10963) {
				console.warn("de-queueing event obj10963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10963_onTap_activeActionGroupIndex = 3;
	






















};
obj10991_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10991_onTap_activeActionGroupIndex = -1;
		$("#obj10991").trigger("obj10991_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10991) {
				console.warn("de-queueing event obj10991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10991_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj10982 
hide_10993();
function hide_10993() {
	var selector = "#obj10982";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10991_onTap_runningActionsCount = obj10991_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10991_onTap_runningActionsCount = window.obj10991_onTap_runningActionsCount - 1;
if (window.obj10991_onTap_runningActionsCount < 0) {
	window.obj10991_onTap_runningActionsCount = 0;
} else if (window.obj10991_onTap_runningActionsCount == 0) {
	obj10991_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10993(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10991_onTap_runningActionsCount = window.obj10991_onTap_runningActionsCount - 1;
if (window.obj10991_onTap_runningActionsCount < 0) {
	window.obj10991_onTap_runningActionsCount = 0;
} else if (window.obj10991_onTap_runningActionsCount == 0) {
	obj10991_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10991_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10991_onTap_activeActionGroupIndex = -1;
		$("#obj10991").trigger("obj10991_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10991) {
				console.warn("de-queueing event obj10991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10991_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj10978
(function(){
	window.obj10991_onTap_runningActionsCount = obj10991_onTap_runningActionsCount + 1;

	var selector = "#obj10978";
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
					window.obj10991_onTap_runningActionsCount = window.obj10991_onTap_runningActionsCount - 1;
if (window.obj10991_onTap_runningActionsCount < 0) {
	window.obj10991_onTap_runningActionsCount = 0;
} else if (window.obj10991_onTap_runningActionsCount == 0) {
	obj10991_onTap_actionGroup2();
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
				window.obj10991_onTap_runningActionsCount = window.obj10991_onTap_runningActionsCount - 1;
if (window.obj10991_onTap_runningActionsCount < 0) {
	window.obj10991_onTap_runningActionsCount = 0;
} else if (window.obj10991_onTap_runningActionsCount == 0) {
	obj10991_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10991_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10991_onTap_activeActionGroupIndex = -1;
		$("#obj10991").trigger("obj10991_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10991) {
				console.warn("de-queueing event obj10991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10991_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10995();
function playAudioFile_10995() {
	window.obj10991_onTap_runningActionsCount = obj10991_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10995")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10995");
			$("#obj_audio_playSoundFile10995").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10991_onTap_runningActionsCount = window.obj10991_onTap_runningActionsCount - 1;
if (window.obj10991_onTap_runningActionsCount < 0) {
	window.obj10991_onTap_runningActionsCount = 0;
} else if (window.obj10991_onTap_runningActionsCount == 0) {
	obj10991_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10991_onTap_runningActionsCount = window.obj10991_onTap_runningActionsCount - 1;
if (window.obj10991_onTap_runningActionsCount < 0) {
	window.obj10991_onTap_runningActionsCount = 0;
} else if (window.obj10991_onTap_runningActionsCount == 0) {
	obj10991_onTap_actionGroup3();
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
				window.obj10991_onTap_runningActionsCount = window.obj10991_onTap_runningActionsCount - 1;
if (window.obj10991_onTap_runningActionsCount < 0) {
	window.obj10991_onTap_runningActionsCount = 0;
} else if (window.obj10991_onTap_runningActionsCount == 0) {
	obj10991_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10991_onTap_runningActionsCount = window.obj10991_onTap_runningActionsCount - 1;
if (window.obj10991_onTap_runningActionsCount < 0) {
	window.obj10991_onTap_runningActionsCount = 0;
} else if (window.obj10991_onTap_runningActionsCount == 0) {
	obj10991_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10991_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10991_onTap_activeActionGroupIndex = -1;
		$("#obj10991").trigger("obj10991_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10991) {
				console.warn("de-queueing event obj10991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10991_onTap_activeActionGroupIndex = 3;
	






















};
obj10985_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10985_onTap_activeActionGroupIndex = -1;
		$("#obj10985").trigger("obj10985_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10985) {
				console.warn("de-queueing event obj10985." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10985").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10985_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj10978 
hide_10987();
function hide_10987() {
	var selector = "#obj10978";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10985_onTap_runningActionsCount = obj10985_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10985_onTap_runningActionsCount = window.obj10985_onTap_runningActionsCount - 1;
if (window.obj10985_onTap_runningActionsCount < 0) {
	window.obj10985_onTap_runningActionsCount = 0;
} else if (window.obj10985_onTap_runningActionsCount == 0) {
	obj10985_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10987(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10985_onTap_runningActionsCount = window.obj10985_onTap_runningActionsCount - 1;
if (window.obj10985_onTap_runningActionsCount < 0) {
	window.obj10985_onTap_runningActionsCount = 0;
} else if (window.obj10985_onTap_runningActionsCount == 0) {
	obj10985_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10985_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10985_onTap_activeActionGroupIndex = -1;
		$("#obj10985").trigger("obj10985_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10985) {
				console.warn("de-queueing event obj10985." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10985").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10985_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj10982
(function(){
	window.obj10985_onTap_runningActionsCount = obj10985_onTap_runningActionsCount + 1;

	var selector = "#obj10982";
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
					window.obj10985_onTap_runningActionsCount = window.obj10985_onTap_runningActionsCount - 1;
if (window.obj10985_onTap_runningActionsCount < 0) {
	window.obj10985_onTap_runningActionsCount = 0;
} else if (window.obj10985_onTap_runningActionsCount == 0) {
	obj10985_onTap_actionGroup2();
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
				window.obj10985_onTap_runningActionsCount = window.obj10985_onTap_runningActionsCount - 1;
if (window.obj10985_onTap_runningActionsCount < 0) {
	window.obj10985_onTap_runningActionsCount = 0;
} else if (window.obj10985_onTap_runningActionsCount == 0) {
	obj10985_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10985_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10985_onTap_activeActionGroupIndex = -1;
		$("#obj10985").trigger("obj10985_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10985) {
				console.warn("de-queueing event obj10985." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10985").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10985_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10989();
function playAudioFile_10989() {
	window.obj10985_onTap_runningActionsCount = obj10985_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10989")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10989");
			$("#obj_audio_playSoundFile10989").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10985_onTap_runningActionsCount = window.obj10985_onTap_runningActionsCount - 1;
if (window.obj10985_onTap_runningActionsCount < 0) {
	window.obj10985_onTap_runningActionsCount = 0;
} else if (window.obj10985_onTap_runningActionsCount == 0) {
	obj10985_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10985_onTap_runningActionsCount = window.obj10985_onTap_runningActionsCount - 1;
if (window.obj10985_onTap_runningActionsCount < 0) {
	window.obj10985_onTap_runningActionsCount = 0;
} else if (window.obj10985_onTap_runningActionsCount == 0) {
	obj10985_onTap_actionGroup3();
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
				window.obj10985_onTap_runningActionsCount = window.obj10985_onTap_runningActionsCount - 1;
if (window.obj10985_onTap_runningActionsCount < 0) {
	window.obj10985_onTap_runningActionsCount = 0;
} else if (window.obj10985_onTap_runningActionsCount == 0) {
	obj10985_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10985_onTap_runningActionsCount = window.obj10985_onTap_runningActionsCount - 1;
if (window.obj10985_onTap_runningActionsCount < 0) {
	window.obj10985_onTap_runningActionsCount = 0;
} else if (window.obj10985_onTap_runningActionsCount == 0) {
	obj10985_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10985_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10985_onTap_activeActionGroupIndex = -1;
		$("#obj10985").trigger("obj10985_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10985) {
				console.warn("de-queueing event obj10985." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10985").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10985_onTap_activeActionGroupIndex = 3;
	






















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
	var switchHelperId = "switchHelper93"
	var switchHelperRef = "#switchHelper93"
	var switchId = "93";
	var toSwitchId = "93";
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
	var switchHelperId = "switchHelper94"
	var switchHelperRef = "#switchHelper94"
	var switchId = "94";
	var toSwitchId = "94";
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
	var switchHelperId = "switchHelper95"
	var switchHelperRef = "#switchHelper95"
	var switchId = "95";
	var toSwitchId = "95";
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
	$("#anchor96")[0].click();
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
	$("#anchor97")[0].click();
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
 *   obj10789: Event Touch Down
 *
 */
$("#obj10789").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10789_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10789_onTap is still running");
	return;
}
var obj10789_onTap_runningActionsCount = 0;
var obj10789_onTap_loopCount = 0;
obj10789_onTap_actionGroup0();
});






























/*
 *
 *   obj10784: Event Touch Down
 *
 */
$("#obj10784").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10784_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10784_onTap is still running");
	return;
}
var obj10784_onTap_runningActionsCount = 0;
var obj10784_onTap_loopCount = 0;
obj10784_onTap_actionGroup0();
});




















/*
 *
 *   obj10805: Event Touch Down
 *
 */
$("#obj10805").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10805_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10805_onTap is still running");
	return;
}
var obj10805_onTap_runningActionsCount = 0;
var obj10805_onTap_loopCount = 0;
obj10805_onTap_actionGroup0();
});






























/*
 *
 *   obj10811: Event Touch Down
 *
 */
$("#obj10811").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10811_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10811_onTap is still running");
	return;
}
var obj10811_onTap_runningActionsCount = 0;
var obj10811_onTap_loopCount = 0;
obj10811_onTap_actionGroup0();
});




















/*
 *
 *   obj10849: Event Touch Down
 *
 */
$("#obj10849").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10849_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10849_onTap is still running");
	return;
}
var obj10849_onTap_runningActionsCount = 0;
var obj10849_onTap_loopCount = 0;
obj10849_onTap_actionGroup0();
});










/*
 *
 *   obj10864: Event Touch Down
 *
 */
$("#obj10864").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10864_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10864_onTap is still running");
	return;
}
var obj10864_onTap_runningActionsCount = 0;
var obj10864_onTap_loopCount = 0;
obj10864_onTap_actionGroup0();
});




















/*
 *
 *   obj10855: Event Touch Down
 *
 */
$("#obj10855").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10855_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10855_onTap is still running");
	return;
}
var obj10855_onTap_runningActionsCount = 0;
var obj10855_onTap_loopCount = 0;
obj10855_onTap_actionGroup0();
});






























/*
 *
 *   obj10827: Event Touch Down
 *
 */
$("#obj10827").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10827_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10827_onTap is still running");
	return;
}
var obj10827_onTap_runningActionsCount = 0;
var obj10827_onTap_loopCount = 0;
obj10827_onTap_actionGroup0();
});






























/*
 *
 *   obj10833: Event Touch Down
 *
 */
$("#obj10833").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10833_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10833_onTap is still running");
	return;
}
var obj10833_onTap_runningActionsCount = 0;
var obj10833_onTap_loopCount = 0;
obj10833_onTap_actionGroup0();
});




















/*
 *
 *   obj10881: Event Touch Down
 *
 */
$("#obj10881").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10881_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10881_onTap is still running");
	return;
}
var obj10881_onTap_runningActionsCount = 0;
var obj10881_onTap_loopCount = 0;
obj10881_onTap_actionGroup0();
});






























/*
 *
 *   obj10875: Event Touch Down
 *
 */
$("#obj10875").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10875_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10875_onTap is still running");
	return;
}
var obj10875_onTap_runningActionsCount = 0;
var obj10875_onTap_loopCount = 0;
obj10875_onTap_actionGroup0();
});




















/*
 *
 *   obj10903: Event Touch Down
 *
 */
$("#obj10903").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10903_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10903_onTap is still running");
	return;
}
var obj10903_onTap_runningActionsCount = 0;
var obj10903_onTap_loopCount = 0;
obj10903_onTap_actionGroup0();
});






























/*
 *
 *   obj10897: Event Touch Down
 *
 */
$("#obj10897").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10897_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10897_onTap is still running");
	return;
}
var obj10897_onTap_runningActionsCount = 0;
var obj10897_onTap_loopCount = 0;
obj10897_onTap_actionGroup0();
});




















/*
 *
 *   obj10925: Event Touch Down
 *
 */
$("#obj10925").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10925_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10925_onTap is still running");
	return;
}
var obj10925_onTap_runningActionsCount = 0;
var obj10925_onTap_loopCount = 0;
obj10925_onTap_actionGroup0();
});






























/*
 *
 *   obj10919: Event Touch Down
 *
 */
$("#obj10919").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10919_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10919_onTap is still running");
	return;
}
var obj10919_onTap_runningActionsCount = 0;
var obj10919_onTap_loopCount = 0;
obj10919_onTap_actionGroup0();
});




















/*
 *
 *   obj10947: Event Touch Down
 *
 */
$("#obj10947").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10947_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10947_onTap is still running");
	return;
}
var obj10947_onTap_runningActionsCount = 0;
var obj10947_onTap_loopCount = 0;
obj10947_onTap_actionGroup0();
});






























/*
 *
 *   obj10941: Event Touch Down
 *
 */
$("#obj10941").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10941_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10941_onTap is still running");
	return;
}
var obj10941_onTap_runningActionsCount = 0;
var obj10941_onTap_loopCount = 0;
obj10941_onTap_actionGroup0();
});




















/*
 *
 *   obj10969: Event Touch Down
 *
 */
$("#obj10969").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10969_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10969_onTap is still running");
	return;
}
var obj10969_onTap_runningActionsCount = 0;
var obj10969_onTap_loopCount = 0;
obj10969_onTap_actionGroup0();
});






























/*
 *
 *   obj10963: Event Touch Down
 *
 */
$("#obj10963").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10963_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10963_onTap is still running");
	return;
}
var obj10963_onTap_runningActionsCount = 0;
var obj10963_onTap_loopCount = 0;
obj10963_onTap_actionGroup0();
});




















/*
 *
 *   obj10991: Event Touch Down
 *
 */
$("#obj10991").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10991_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10991_onTap is still running");
	return;
}
var obj10991_onTap_runningActionsCount = 0;
var obj10991_onTap_loopCount = 0;
obj10991_onTap_actionGroup0();
});






























/*
 *
 *   obj10985: Event Touch Down
 *
 */
$("#obj10985").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10985_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10985_onTap is still running");
	return;
}
var obj10985_onTap_runningActionsCount = 0;
var obj10985_onTap_loopCount = 0;
obj10985_onTap_actionGroup0();
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
	
$("#obj4060").trigger('SCEventShow');
$("#obj4064").trigger('SCEventShow');
$("#obj4062").trigger('SCEventShow');
$("#obj4072").trigger('SCEventShow');
$("#obj4076").trigger('SCEventShow');
$("#obj4074").trigger('SCEventShow');
$("#obj10789").trigger('SCEventShow');
$("#obj4078").trigger('SCEventShow');
$("#obj10784").trigger('SCEventShow');
$("#obj10805").trigger('SCEventShow');
$("#obj4096").trigger('SCEventShow');
$("#obj10811").trigger('SCEventShow');
$("#obj10849").trigger('SCEventShow');
$("#obj4094").trigger('SCEventShow');
$("#obj10855").trigger('SCEventShow');
$("#obj10827").trigger('SCEventShow');
$("#obj4092").trigger('SCEventShow');
$("#obj10833").trigger('SCEventShow');
$("#obj10881").trigger('SCEventShow');
$("#obj4090").trigger('SCEventShow');
$("#obj10875").trigger('SCEventShow');
$("#obj10903").trigger('SCEventShow');
$("#obj4088").trigger('SCEventShow');
$("#obj10897").trigger('SCEventShow');
$("#obj10925").trigger('SCEventShow');
$("#obj4086").trigger('SCEventShow');
$("#obj10919").trigger('SCEventShow');
$("#obj10947").trigger('SCEventShow');
$("#obj4084").trigger('SCEventShow');
$("#obj10941").trigger('SCEventShow');
$("#obj10969").trigger('SCEventShow');
$("#obj4082").trigger('SCEventShow');
$("#obj10963").trigger('SCEventShow');
$("#obj10991").trigger('SCEventShow');
$("#obj4080").trigger('SCEventShow');
$("#obj10985").trigger('SCEventShow');
$("#obj4000").trigger('SCEventShow');
$("#obj4002").trigger('SCEventShow');
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
});