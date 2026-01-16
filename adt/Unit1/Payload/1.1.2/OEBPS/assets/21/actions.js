pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serofero : Unit 1";
pubcoder.page.id = pubcoder.page.id || 1489;
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
var obj7474_onTap_activeActionGroupIndex = -1;
var obj7474_onTap_runningActionsCount = 0;
var obj7474_onTap_loopCount = 0;
var obj7493_onTap_activeActionGroupIndex = -1;
var obj7493_onTap_runningActionsCount = 0;
var obj7493_onTap_loopCount = 0;
var obj7487_onTap_activeActionGroupIndex = -1;
var obj7487_onTap_runningActionsCount = 0;
var obj7487_onTap_loopCount = 0;
var obj7468_onTap_activeActionGroupIndex = -1;
var obj7468_onTap_runningActionsCount = 0;
var obj7468_onTap_loopCount = 0;
var obj7512_onTap_activeActionGroupIndex = -1;
var obj7512_onTap_runningActionsCount = 0;
var obj7512_onTap_loopCount = 0;
var obj7531_onTap_activeActionGroupIndex = -1;
var obj7531_onTap_runningActionsCount = 0;
var obj7531_onTap_loopCount = 0;
var obj7525_onTap_activeActionGroupIndex = -1;
var obj7525_onTap_runningActionsCount = 0;
var obj7525_onTap_loopCount = 0;
var obj7506_onTap_activeActionGroupIndex = -1;
var obj7506_onTap_runningActionsCount = 0;
var obj7506_onTap_loopCount = 0;
var obj7570_onTap_activeActionGroupIndex = -1;
var obj7570_onTap_runningActionsCount = 0;
var obj7570_onTap_loopCount = 0;
var obj7551_onTap_activeActionGroupIndex = -1;
var obj7551_onTap_runningActionsCount = 0;
var obj7551_onTap_loopCount = 0;
var obj7557_onTap_activeActionGroupIndex = -1;
var obj7557_onTap_runningActionsCount = 0;
var obj7557_onTap_loopCount = 0;
var obj7576_onTap_activeActionGroupIndex = -1;
var obj7576_onTap_runningActionsCount = 0;
var obj7576_onTap_loopCount = 0;
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
		
obj7474_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7474_onTap_activeActionGroupIndex = -1;
		$("#obj7474").trigger("obj7474_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7474) {
				console.warn("de-queueing event obj7474." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7474").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7474_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj7480
(function(){
	window.obj7474_onTap_runningActionsCount = obj7474_onTap_runningActionsCount + 1;

	var selector = "#obj7480";
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
					window.obj7474_onTap_runningActionsCount = window.obj7474_onTap_runningActionsCount - 1;
if (window.obj7474_onTap_runningActionsCount < 0) {
	window.obj7474_onTap_runningActionsCount = 0;
} else if (window.obj7474_onTap_runningActionsCount == 0) {
	obj7474_onTap_actionGroup1();
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
				window.obj7474_onTap_runningActionsCount = window.obj7474_onTap_runningActionsCount - 1;
if (window.obj7474_onTap_runningActionsCount < 0) {
	window.obj7474_onTap_runningActionsCount = 0;
} else if (window.obj7474_onTap_runningActionsCount == 0) {
	obj7474_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj7474_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7474_onTap_activeActionGroupIndex = -1;
		$("#obj7474").trigger("obj7474_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7474) {
				console.warn("de-queueing event obj7474." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7474").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7474_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj7483 
hide_7477();
function hide_7477() {
	var selector = "#obj7483";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7474_onTap_runningActionsCount = obj7474_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7474_onTap_runningActionsCount = window.obj7474_onTap_runningActionsCount - 1;
if (window.obj7474_onTap_runningActionsCount < 0) {
	window.obj7474_onTap_runningActionsCount = 0;
} else if (window.obj7474_onTap_runningActionsCount == 0) {
	obj7474_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7477(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7474_onTap_runningActionsCount = window.obj7474_onTap_runningActionsCount - 1;
if (window.obj7474_onTap_runningActionsCount < 0) {
	window.obj7474_onTap_runningActionsCount = 0;
} else if (window.obj7474_onTap_runningActionsCount == 0) {
	obj7474_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj7474_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7474_onTap_activeActionGroupIndex = -1;
		$("#obj7474").trigger("obj7474_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7474) {
				console.warn("de-queueing event obj7474." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7474").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7474_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_7478();
function playAudioFile_7478() {
	window.obj7474_onTap_runningActionsCount = obj7474_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7478")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7478");
			$("#obj_audio_playSoundFile7478").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7474_onTap_runningActionsCount = window.obj7474_onTap_runningActionsCount - 1;
if (window.obj7474_onTap_runningActionsCount < 0) {
	window.obj7474_onTap_runningActionsCount = 0;
} else if (window.obj7474_onTap_runningActionsCount == 0) {
	obj7474_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7474_onTap_runningActionsCount = window.obj7474_onTap_runningActionsCount - 1;
if (window.obj7474_onTap_runningActionsCount < 0) {
	window.obj7474_onTap_runningActionsCount = 0;
} else if (window.obj7474_onTap_runningActionsCount == 0) {
	obj7474_onTap_actionGroup3();
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
				window.obj7474_onTap_runningActionsCount = window.obj7474_onTap_runningActionsCount - 1;
if (window.obj7474_onTap_runningActionsCount < 0) {
	window.obj7474_onTap_runningActionsCount = 0;
} else if (window.obj7474_onTap_runningActionsCount == 0) {
	obj7474_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj7474_onTap_runningActionsCount = window.obj7474_onTap_runningActionsCount - 1;
if (window.obj7474_onTap_runningActionsCount < 0) {
	window.obj7474_onTap_runningActionsCount = 0;
} else if (window.obj7474_onTap_runningActionsCount == 0) {
	obj7474_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj7474_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7474_onTap_activeActionGroupIndex = -1;
		$("#obj7474").trigger("obj7474_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7474) {
				console.warn("de-queueing event obj7474." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7474").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7474_onTap_activeActionGroupIndex = 3;
	






















};
obj7493_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7493_onTap_activeActionGroupIndex = -1;
		$("#obj7493").trigger("obj7493_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7493) {
				console.warn("de-queueing event obj7493." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7493").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7493_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj7499
(function(){
	window.obj7493_onTap_runningActionsCount = obj7493_onTap_runningActionsCount + 1;

	var selector = "#obj7499";
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
					window.obj7493_onTap_runningActionsCount = window.obj7493_onTap_runningActionsCount - 1;
if (window.obj7493_onTap_runningActionsCount < 0) {
	window.obj7493_onTap_runningActionsCount = 0;
} else if (window.obj7493_onTap_runningActionsCount == 0) {
	obj7493_onTap_actionGroup1();
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
				window.obj7493_onTap_runningActionsCount = window.obj7493_onTap_runningActionsCount - 1;
if (window.obj7493_onTap_runningActionsCount < 0) {
	window.obj7493_onTap_runningActionsCount = 0;
} else if (window.obj7493_onTap_runningActionsCount == 0) {
	obj7493_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj7493_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7493_onTap_activeActionGroupIndex = -1;
		$("#obj7493").trigger("obj7493_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7493) {
				console.warn("de-queueing event obj7493." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7493").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7493_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj7502 
hide_7496();
function hide_7496() {
	var selector = "#obj7502";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7493_onTap_runningActionsCount = obj7493_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7493_onTap_runningActionsCount = window.obj7493_onTap_runningActionsCount - 1;
if (window.obj7493_onTap_runningActionsCount < 0) {
	window.obj7493_onTap_runningActionsCount = 0;
} else if (window.obj7493_onTap_runningActionsCount == 0) {
	obj7493_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7496(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7493_onTap_runningActionsCount = window.obj7493_onTap_runningActionsCount - 1;
if (window.obj7493_onTap_runningActionsCount < 0) {
	window.obj7493_onTap_runningActionsCount = 0;
} else if (window.obj7493_onTap_runningActionsCount == 0) {
	obj7493_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj7493_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7493_onTap_activeActionGroupIndex = -1;
		$("#obj7493").trigger("obj7493_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7493) {
				console.warn("de-queueing event obj7493." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7493").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7493_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_7497();
function playAudioFile_7497() {
	window.obj7493_onTap_runningActionsCount = obj7493_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7497")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7497");
			$("#obj_audio_playSoundFile7497").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7493_onTap_runningActionsCount = window.obj7493_onTap_runningActionsCount - 1;
if (window.obj7493_onTap_runningActionsCount < 0) {
	window.obj7493_onTap_runningActionsCount = 0;
} else if (window.obj7493_onTap_runningActionsCount == 0) {
	obj7493_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7493_onTap_runningActionsCount = window.obj7493_onTap_runningActionsCount - 1;
if (window.obj7493_onTap_runningActionsCount < 0) {
	window.obj7493_onTap_runningActionsCount = 0;
} else if (window.obj7493_onTap_runningActionsCount == 0) {
	obj7493_onTap_actionGroup3();
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
				window.obj7493_onTap_runningActionsCount = window.obj7493_onTap_runningActionsCount - 1;
if (window.obj7493_onTap_runningActionsCount < 0) {
	window.obj7493_onTap_runningActionsCount = 0;
} else if (window.obj7493_onTap_runningActionsCount == 0) {
	obj7493_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj7493_onTap_runningActionsCount = window.obj7493_onTap_runningActionsCount - 1;
if (window.obj7493_onTap_runningActionsCount < 0) {
	window.obj7493_onTap_runningActionsCount = 0;
} else if (window.obj7493_onTap_runningActionsCount == 0) {
	obj7493_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj7493_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7493_onTap_activeActionGroupIndex = -1;
		$("#obj7493").trigger("obj7493_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7493) {
				console.warn("de-queueing event obj7493." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7493").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7493_onTap_activeActionGroupIndex = 3;
	






















};
obj7487_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7487_onTap_activeActionGroupIndex = -1;
		$("#obj7487").trigger("obj7487_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7487) {
				console.warn("de-queueing event obj7487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7487_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj7502
(function(){
	window.obj7487_onTap_runningActionsCount = obj7487_onTap_runningActionsCount + 1;

	var selector = "#obj7502";
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
					window.obj7487_onTap_runningActionsCount = window.obj7487_onTap_runningActionsCount - 1;
if (window.obj7487_onTap_runningActionsCount < 0) {
	window.obj7487_onTap_runningActionsCount = 0;
} else if (window.obj7487_onTap_runningActionsCount == 0) {
	obj7487_onTap_actionGroup1();
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
				window.obj7487_onTap_runningActionsCount = window.obj7487_onTap_runningActionsCount - 1;
if (window.obj7487_onTap_runningActionsCount < 0) {
	window.obj7487_onTap_runningActionsCount = 0;
} else if (window.obj7487_onTap_runningActionsCount == 0) {
	obj7487_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj7487_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7487_onTap_activeActionGroupIndex = -1;
		$("#obj7487").trigger("obj7487_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7487) {
				console.warn("de-queueing event obj7487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7487_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj7499 
hide_7490();
function hide_7490() {
	var selector = "#obj7499";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7487_onTap_runningActionsCount = obj7487_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7487_onTap_runningActionsCount = window.obj7487_onTap_runningActionsCount - 1;
if (window.obj7487_onTap_runningActionsCount < 0) {
	window.obj7487_onTap_runningActionsCount = 0;
} else if (window.obj7487_onTap_runningActionsCount == 0) {
	obj7487_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7490(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7487_onTap_runningActionsCount = window.obj7487_onTap_runningActionsCount - 1;
if (window.obj7487_onTap_runningActionsCount < 0) {
	window.obj7487_onTap_runningActionsCount = 0;
} else if (window.obj7487_onTap_runningActionsCount == 0) {
	obj7487_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj7487_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7487_onTap_activeActionGroupIndex = -1;
		$("#obj7487").trigger("obj7487_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7487) {
				console.warn("de-queueing event obj7487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7487_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_7491();
function playAudioFile_7491() {
	window.obj7487_onTap_runningActionsCount = obj7487_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7491")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7491");
			$("#obj_audio_playSoundFile7491").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7487_onTap_runningActionsCount = window.obj7487_onTap_runningActionsCount - 1;
if (window.obj7487_onTap_runningActionsCount < 0) {
	window.obj7487_onTap_runningActionsCount = 0;
} else if (window.obj7487_onTap_runningActionsCount == 0) {
	obj7487_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7487_onTap_runningActionsCount = window.obj7487_onTap_runningActionsCount - 1;
if (window.obj7487_onTap_runningActionsCount < 0) {
	window.obj7487_onTap_runningActionsCount = 0;
} else if (window.obj7487_onTap_runningActionsCount == 0) {
	obj7487_onTap_actionGroup3();
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
				window.obj7487_onTap_runningActionsCount = window.obj7487_onTap_runningActionsCount - 1;
if (window.obj7487_onTap_runningActionsCount < 0) {
	window.obj7487_onTap_runningActionsCount = 0;
} else if (window.obj7487_onTap_runningActionsCount == 0) {
	obj7487_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj7487_onTap_runningActionsCount = window.obj7487_onTap_runningActionsCount - 1;
if (window.obj7487_onTap_runningActionsCount < 0) {
	window.obj7487_onTap_runningActionsCount = 0;
} else if (window.obj7487_onTap_runningActionsCount == 0) {
	obj7487_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj7487_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7487_onTap_activeActionGroupIndex = -1;
		$("#obj7487").trigger("obj7487_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7487) {
				console.warn("de-queueing event obj7487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7487_onTap_activeActionGroupIndex = 3;
	






















};
obj7468_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7468_onTap_activeActionGroupIndex = -1;
		$("#obj7468").trigger("obj7468_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7468) {
				console.warn("de-queueing event obj7468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7468_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj7483
(function(){
	window.obj7468_onTap_runningActionsCount = obj7468_onTap_runningActionsCount + 1;

	var selector = "#obj7483";
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
					window.obj7468_onTap_runningActionsCount = window.obj7468_onTap_runningActionsCount - 1;
if (window.obj7468_onTap_runningActionsCount < 0) {
	window.obj7468_onTap_runningActionsCount = 0;
} else if (window.obj7468_onTap_runningActionsCount == 0) {
	obj7468_onTap_actionGroup1();
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
				window.obj7468_onTap_runningActionsCount = window.obj7468_onTap_runningActionsCount - 1;
if (window.obj7468_onTap_runningActionsCount < 0) {
	window.obj7468_onTap_runningActionsCount = 0;
} else if (window.obj7468_onTap_runningActionsCount == 0) {
	obj7468_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj7468_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7468_onTap_activeActionGroupIndex = -1;
		$("#obj7468").trigger("obj7468_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7468) {
				console.warn("de-queueing event obj7468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7468_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj7480 
hide_7471();
function hide_7471() {
	var selector = "#obj7480";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7468_onTap_runningActionsCount = obj7468_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7468_onTap_runningActionsCount = window.obj7468_onTap_runningActionsCount - 1;
if (window.obj7468_onTap_runningActionsCount < 0) {
	window.obj7468_onTap_runningActionsCount = 0;
} else if (window.obj7468_onTap_runningActionsCount == 0) {
	obj7468_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7471(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7468_onTap_runningActionsCount = window.obj7468_onTap_runningActionsCount - 1;
if (window.obj7468_onTap_runningActionsCount < 0) {
	window.obj7468_onTap_runningActionsCount = 0;
} else if (window.obj7468_onTap_runningActionsCount == 0) {
	obj7468_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj7468_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7468_onTap_activeActionGroupIndex = -1;
		$("#obj7468").trigger("obj7468_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7468) {
				console.warn("de-queueing event obj7468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7468_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_7472();
function playAudioFile_7472() {
	window.obj7468_onTap_runningActionsCount = obj7468_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7472")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7472");
			$("#obj_audio_playSoundFile7472").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7468_onTap_runningActionsCount = window.obj7468_onTap_runningActionsCount - 1;
if (window.obj7468_onTap_runningActionsCount < 0) {
	window.obj7468_onTap_runningActionsCount = 0;
} else if (window.obj7468_onTap_runningActionsCount == 0) {
	obj7468_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7468_onTap_runningActionsCount = window.obj7468_onTap_runningActionsCount - 1;
if (window.obj7468_onTap_runningActionsCount < 0) {
	window.obj7468_onTap_runningActionsCount = 0;
} else if (window.obj7468_onTap_runningActionsCount == 0) {
	obj7468_onTap_actionGroup3();
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
				window.obj7468_onTap_runningActionsCount = window.obj7468_onTap_runningActionsCount - 1;
if (window.obj7468_onTap_runningActionsCount < 0) {
	window.obj7468_onTap_runningActionsCount = 0;
} else if (window.obj7468_onTap_runningActionsCount == 0) {
	obj7468_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj7468_onTap_runningActionsCount = window.obj7468_onTap_runningActionsCount - 1;
if (window.obj7468_onTap_runningActionsCount < 0) {
	window.obj7468_onTap_runningActionsCount = 0;
} else if (window.obj7468_onTap_runningActionsCount == 0) {
	obj7468_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj7468_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7468_onTap_activeActionGroupIndex = -1;
		$("#obj7468").trigger("obj7468_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7468) {
				console.warn("de-queueing event obj7468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7468_onTap_activeActionGroupIndex = 3;
	






















};
obj7512_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7512_onTap_activeActionGroupIndex = -1;
		$("#obj7512").trigger("obj7512_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7512) {
				console.warn("de-queueing event obj7512." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7512").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7512_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj7518
(function(){
	window.obj7512_onTap_runningActionsCount = obj7512_onTap_runningActionsCount + 1;

	var selector = "#obj7518";
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
					window.obj7512_onTap_runningActionsCount = window.obj7512_onTap_runningActionsCount - 1;
if (window.obj7512_onTap_runningActionsCount < 0) {
	window.obj7512_onTap_runningActionsCount = 0;
} else if (window.obj7512_onTap_runningActionsCount == 0) {
	obj7512_onTap_actionGroup1();
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
				window.obj7512_onTap_runningActionsCount = window.obj7512_onTap_runningActionsCount - 1;
if (window.obj7512_onTap_runningActionsCount < 0) {
	window.obj7512_onTap_runningActionsCount = 0;
} else if (window.obj7512_onTap_runningActionsCount == 0) {
	obj7512_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj7512_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7512_onTap_activeActionGroupIndex = -1;
		$("#obj7512").trigger("obj7512_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7512) {
				console.warn("de-queueing event obj7512." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7512").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7512_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj7521 
hide_7515();
function hide_7515() {
	var selector = "#obj7521";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7512_onTap_runningActionsCount = obj7512_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7512_onTap_runningActionsCount = window.obj7512_onTap_runningActionsCount - 1;
if (window.obj7512_onTap_runningActionsCount < 0) {
	window.obj7512_onTap_runningActionsCount = 0;
} else if (window.obj7512_onTap_runningActionsCount == 0) {
	obj7512_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7515(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7512_onTap_runningActionsCount = window.obj7512_onTap_runningActionsCount - 1;
if (window.obj7512_onTap_runningActionsCount < 0) {
	window.obj7512_onTap_runningActionsCount = 0;
} else if (window.obj7512_onTap_runningActionsCount == 0) {
	obj7512_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj7512_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7512_onTap_activeActionGroupIndex = -1;
		$("#obj7512").trigger("obj7512_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7512) {
				console.warn("de-queueing event obj7512." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7512").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7512_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_7516();
function playAudioFile_7516() {
	window.obj7512_onTap_runningActionsCount = obj7512_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7516")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7516");
			$("#obj_audio_playSoundFile7516").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7512_onTap_runningActionsCount = window.obj7512_onTap_runningActionsCount - 1;
if (window.obj7512_onTap_runningActionsCount < 0) {
	window.obj7512_onTap_runningActionsCount = 0;
} else if (window.obj7512_onTap_runningActionsCount == 0) {
	obj7512_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7512_onTap_runningActionsCount = window.obj7512_onTap_runningActionsCount - 1;
if (window.obj7512_onTap_runningActionsCount < 0) {
	window.obj7512_onTap_runningActionsCount = 0;
} else if (window.obj7512_onTap_runningActionsCount == 0) {
	obj7512_onTap_actionGroup3();
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
				window.obj7512_onTap_runningActionsCount = window.obj7512_onTap_runningActionsCount - 1;
if (window.obj7512_onTap_runningActionsCount < 0) {
	window.obj7512_onTap_runningActionsCount = 0;
} else if (window.obj7512_onTap_runningActionsCount == 0) {
	obj7512_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj7512_onTap_runningActionsCount = window.obj7512_onTap_runningActionsCount - 1;
if (window.obj7512_onTap_runningActionsCount < 0) {
	window.obj7512_onTap_runningActionsCount = 0;
} else if (window.obj7512_onTap_runningActionsCount == 0) {
	obj7512_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj7512_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7512_onTap_activeActionGroupIndex = -1;
		$("#obj7512").trigger("obj7512_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7512) {
				console.warn("de-queueing event obj7512." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7512").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7512_onTap_activeActionGroupIndex = 3;
	






















};
obj7531_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7531_onTap_activeActionGroupIndex = -1;
		$("#obj7531").trigger("obj7531_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7531) {
				console.warn("de-queueing event obj7531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7531_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj7537
(function(){
	window.obj7531_onTap_runningActionsCount = obj7531_onTap_runningActionsCount + 1;

	var selector = "#obj7537";
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
					window.obj7531_onTap_runningActionsCount = window.obj7531_onTap_runningActionsCount - 1;
if (window.obj7531_onTap_runningActionsCount < 0) {
	window.obj7531_onTap_runningActionsCount = 0;
} else if (window.obj7531_onTap_runningActionsCount == 0) {
	obj7531_onTap_actionGroup1();
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
				window.obj7531_onTap_runningActionsCount = window.obj7531_onTap_runningActionsCount - 1;
if (window.obj7531_onTap_runningActionsCount < 0) {
	window.obj7531_onTap_runningActionsCount = 0;
} else if (window.obj7531_onTap_runningActionsCount == 0) {
	obj7531_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj7531_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7531_onTap_activeActionGroupIndex = -1;
		$("#obj7531").trigger("obj7531_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7531) {
				console.warn("de-queueing event obj7531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7531_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj7540 
hide_7534();
function hide_7534() {
	var selector = "#obj7540";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7531_onTap_runningActionsCount = obj7531_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7531_onTap_runningActionsCount = window.obj7531_onTap_runningActionsCount - 1;
if (window.obj7531_onTap_runningActionsCount < 0) {
	window.obj7531_onTap_runningActionsCount = 0;
} else if (window.obj7531_onTap_runningActionsCount == 0) {
	obj7531_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7534(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7531_onTap_runningActionsCount = window.obj7531_onTap_runningActionsCount - 1;
if (window.obj7531_onTap_runningActionsCount < 0) {
	window.obj7531_onTap_runningActionsCount = 0;
} else if (window.obj7531_onTap_runningActionsCount == 0) {
	obj7531_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj7531_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7531_onTap_activeActionGroupIndex = -1;
		$("#obj7531").trigger("obj7531_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7531) {
				console.warn("de-queueing event obj7531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7531_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_7535();
function playAudioFile_7535() {
	window.obj7531_onTap_runningActionsCount = obj7531_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7535")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7535");
			$("#obj_audio_playSoundFile7535").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7531_onTap_runningActionsCount = window.obj7531_onTap_runningActionsCount - 1;
if (window.obj7531_onTap_runningActionsCount < 0) {
	window.obj7531_onTap_runningActionsCount = 0;
} else if (window.obj7531_onTap_runningActionsCount == 0) {
	obj7531_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7531_onTap_runningActionsCount = window.obj7531_onTap_runningActionsCount - 1;
if (window.obj7531_onTap_runningActionsCount < 0) {
	window.obj7531_onTap_runningActionsCount = 0;
} else if (window.obj7531_onTap_runningActionsCount == 0) {
	obj7531_onTap_actionGroup3();
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
				window.obj7531_onTap_runningActionsCount = window.obj7531_onTap_runningActionsCount - 1;
if (window.obj7531_onTap_runningActionsCount < 0) {
	window.obj7531_onTap_runningActionsCount = 0;
} else if (window.obj7531_onTap_runningActionsCount == 0) {
	obj7531_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj7531_onTap_runningActionsCount = window.obj7531_onTap_runningActionsCount - 1;
if (window.obj7531_onTap_runningActionsCount < 0) {
	window.obj7531_onTap_runningActionsCount = 0;
} else if (window.obj7531_onTap_runningActionsCount == 0) {
	obj7531_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj7531_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7531_onTap_activeActionGroupIndex = -1;
		$("#obj7531").trigger("obj7531_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7531) {
				console.warn("de-queueing event obj7531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7531_onTap_activeActionGroupIndex = 3;
	






















};
obj7525_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7525_onTap_activeActionGroupIndex = -1;
		$("#obj7525").trigger("obj7525_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7525) {
				console.warn("de-queueing event obj7525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7525_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj7540
(function(){
	window.obj7525_onTap_runningActionsCount = obj7525_onTap_runningActionsCount + 1;

	var selector = "#obj7540";
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
					window.obj7525_onTap_runningActionsCount = window.obj7525_onTap_runningActionsCount - 1;
if (window.obj7525_onTap_runningActionsCount < 0) {
	window.obj7525_onTap_runningActionsCount = 0;
} else if (window.obj7525_onTap_runningActionsCount == 0) {
	obj7525_onTap_actionGroup1();
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
				window.obj7525_onTap_runningActionsCount = window.obj7525_onTap_runningActionsCount - 1;
if (window.obj7525_onTap_runningActionsCount < 0) {
	window.obj7525_onTap_runningActionsCount = 0;
} else if (window.obj7525_onTap_runningActionsCount == 0) {
	obj7525_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj7525_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7525_onTap_activeActionGroupIndex = -1;
		$("#obj7525").trigger("obj7525_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7525) {
				console.warn("de-queueing event obj7525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7525_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj7537 
hide_7528();
function hide_7528() {
	var selector = "#obj7537";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7525_onTap_runningActionsCount = obj7525_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7525_onTap_runningActionsCount = window.obj7525_onTap_runningActionsCount - 1;
if (window.obj7525_onTap_runningActionsCount < 0) {
	window.obj7525_onTap_runningActionsCount = 0;
} else if (window.obj7525_onTap_runningActionsCount == 0) {
	obj7525_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7528(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7525_onTap_runningActionsCount = window.obj7525_onTap_runningActionsCount - 1;
if (window.obj7525_onTap_runningActionsCount < 0) {
	window.obj7525_onTap_runningActionsCount = 0;
} else if (window.obj7525_onTap_runningActionsCount == 0) {
	obj7525_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj7525_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7525_onTap_activeActionGroupIndex = -1;
		$("#obj7525").trigger("obj7525_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7525) {
				console.warn("de-queueing event obj7525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7525_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_7529();
function playAudioFile_7529() {
	window.obj7525_onTap_runningActionsCount = obj7525_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7529")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7529");
			$("#obj_audio_playSoundFile7529").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7525_onTap_runningActionsCount = window.obj7525_onTap_runningActionsCount - 1;
if (window.obj7525_onTap_runningActionsCount < 0) {
	window.obj7525_onTap_runningActionsCount = 0;
} else if (window.obj7525_onTap_runningActionsCount == 0) {
	obj7525_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7525_onTap_runningActionsCount = window.obj7525_onTap_runningActionsCount - 1;
if (window.obj7525_onTap_runningActionsCount < 0) {
	window.obj7525_onTap_runningActionsCount = 0;
} else if (window.obj7525_onTap_runningActionsCount == 0) {
	obj7525_onTap_actionGroup3();
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
				window.obj7525_onTap_runningActionsCount = window.obj7525_onTap_runningActionsCount - 1;
if (window.obj7525_onTap_runningActionsCount < 0) {
	window.obj7525_onTap_runningActionsCount = 0;
} else if (window.obj7525_onTap_runningActionsCount == 0) {
	obj7525_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj7525_onTap_runningActionsCount = window.obj7525_onTap_runningActionsCount - 1;
if (window.obj7525_onTap_runningActionsCount < 0) {
	window.obj7525_onTap_runningActionsCount = 0;
} else if (window.obj7525_onTap_runningActionsCount == 0) {
	obj7525_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj7525_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7525_onTap_activeActionGroupIndex = -1;
		$("#obj7525").trigger("obj7525_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7525) {
				console.warn("de-queueing event obj7525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7525_onTap_activeActionGroupIndex = 3;
	






















};
obj7506_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7506_onTap_activeActionGroupIndex = -1;
		$("#obj7506").trigger("obj7506_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7506) {
				console.warn("de-queueing event obj7506." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7506").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7506_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj7521
(function(){
	window.obj7506_onTap_runningActionsCount = obj7506_onTap_runningActionsCount + 1;

	var selector = "#obj7521";
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
					window.obj7506_onTap_runningActionsCount = window.obj7506_onTap_runningActionsCount - 1;
if (window.obj7506_onTap_runningActionsCount < 0) {
	window.obj7506_onTap_runningActionsCount = 0;
} else if (window.obj7506_onTap_runningActionsCount == 0) {
	obj7506_onTap_actionGroup1();
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
				window.obj7506_onTap_runningActionsCount = window.obj7506_onTap_runningActionsCount - 1;
if (window.obj7506_onTap_runningActionsCount < 0) {
	window.obj7506_onTap_runningActionsCount = 0;
} else if (window.obj7506_onTap_runningActionsCount == 0) {
	obj7506_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj7506_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7506_onTap_activeActionGroupIndex = -1;
		$("#obj7506").trigger("obj7506_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7506) {
				console.warn("de-queueing event obj7506." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7506").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7506_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj7518 
hide_7509();
function hide_7509() {
	var selector = "#obj7518";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7506_onTap_runningActionsCount = obj7506_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7506_onTap_runningActionsCount = window.obj7506_onTap_runningActionsCount - 1;
if (window.obj7506_onTap_runningActionsCount < 0) {
	window.obj7506_onTap_runningActionsCount = 0;
} else if (window.obj7506_onTap_runningActionsCount == 0) {
	obj7506_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7509(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7506_onTap_runningActionsCount = window.obj7506_onTap_runningActionsCount - 1;
if (window.obj7506_onTap_runningActionsCount < 0) {
	window.obj7506_onTap_runningActionsCount = 0;
} else if (window.obj7506_onTap_runningActionsCount == 0) {
	obj7506_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj7506_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7506_onTap_activeActionGroupIndex = -1;
		$("#obj7506").trigger("obj7506_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7506) {
				console.warn("de-queueing event obj7506." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7506").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7506_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_7510();
function playAudioFile_7510() {
	window.obj7506_onTap_runningActionsCount = obj7506_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7510")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7510");
			$("#obj_audio_playSoundFile7510").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7506_onTap_runningActionsCount = window.obj7506_onTap_runningActionsCount - 1;
if (window.obj7506_onTap_runningActionsCount < 0) {
	window.obj7506_onTap_runningActionsCount = 0;
} else if (window.obj7506_onTap_runningActionsCount == 0) {
	obj7506_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7506_onTap_runningActionsCount = window.obj7506_onTap_runningActionsCount - 1;
if (window.obj7506_onTap_runningActionsCount < 0) {
	window.obj7506_onTap_runningActionsCount = 0;
} else if (window.obj7506_onTap_runningActionsCount == 0) {
	obj7506_onTap_actionGroup3();
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
				window.obj7506_onTap_runningActionsCount = window.obj7506_onTap_runningActionsCount - 1;
if (window.obj7506_onTap_runningActionsCount < 0) {
	window.obj7506_onTap_runningActionsCount = 0;
} else if (window.obj7506_onTap_runningActionsCount == 0) {
	obj7506_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj7506_onTap_runningActionsCount = window.obj7506_onTap_runningActionsCount - 1;
if (window.obj7506_onTap_runningActionsCount < 0) {
	window.obj7506_onTap_runningActionsCount = 0;
} else if (window.obj7506_onTap_runningActionsCount == 0) {
	obj7506_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj7506_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7506_onTap_activeActionGroupIndex = -1;
		$("#obj7506").trigger("obj7506_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7506) {
				console.warn("de-queueing event obj7506." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7506").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7506_onTap_activeActionGroupIndex = 3;
	






















};
obj7570_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7570_onTap_activeActionGroupIndex = -1;
		$("#obj7570").trigger("obj7570_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7570) {
				console.warn("de-queueing event obj7570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7570_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj7567
(function(){
	window.obj7570_onTap_runningActionsCount = obj7570_onTap_runningActionsCount + 1;

	var selector = "#obj7567";
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
					window.obj7570_onTap_runningActionsCount = window.obj7570_onTap_runningActionsCount - 1;
if (window.obj7570_onTap_runningActionsCount < 0) {
	window.obj7570_onTap_runningActionsCount = 0;
} else if (window.obj7570_onTap_runningActionsCount == 0) {
	obj7570_onTap_actionGroup1();
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
				window.obj7570_onTap_runningActionsCount = window.obj7570_onTap_runningActionsCount - 1;
if (window.obj7570_onTap_runningActionsCount < 0) {
	window.obj7570_onTap_runningActionsCount = 0;
} else if (window.obj7570_onTap_runningActionsCount == 0) {
	obj7570_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj7570_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7570_onTap_activeActionGroupIndex = -1;
		$("#obj7570").trigger("obj7570_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7570) {
				console.warn("de-queueing event obj7570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7570_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj7563 
hide_7573();
function hide_7573() {
	var selector = "#obj7563";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7570_onTap_runningActionsCount = obj7570_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7570_onTap_runningActionsCount = window.obj7570_onTap_runningActionsCount - 1;
if (window.obj7570_onTap_runningActionsCount < 0) {
	window.obj7570_onTap_runningActionsCount = 0;
} else if (window.obj7570_onTap_runningActionsCount == 0) {
	obj7570_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7573(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7570_onTap_runningActionsCount = window.obj7570_onTap_runningActionsCount - 1;
if (window.obj7570_onTap_runningActionsCount < 0) {
	window.obj7570_onTap_runningActionsCount = 0;
} else if (window.obj7570_onTap_runningActionsCount == 0) {
	obj7570_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj7570_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7570_onTap_activeActionGroupIndex = -1;
		$("#obj7570").trigger("obj7570_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7570) {
				console.warn("de-queueing event obj7570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7570_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_7574();
function playAudioFile_7574() {
	window.obj7570_onTap_runningActionsCount = obj7570_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7574")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7574");
			$("#obj_audio_playSoundFile7574").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7570_onTap_runningActionsCount = window.obj7570_onTap_runningActionsCount - 1;
if (window.obj7570_onTap_runningActionsCount < 0) {
	window.obj7570_onTap_runningActionsCount = 0;
} else if (window.obj7570_onTap_runningActionsCount == 0) {
	obj7570_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7570_onTap_runningActionsCount = window.obj7570_onTap_runningActionsCount - 1;
if (window.obj7570_onTap_runningActionsCount < 0) {
	window.obj7570_onTap_runningActionsCount = 0;
} else if (window.obj7570_onTap_runningActionsCount == 0) {
	obj7570_onTap_actionGroup3();
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
				window.obj7570_onTap_runningActionsCount = window.obj7570_onTap_runningActionsCount - 1;
if (window.obj7570_onTap_runningActionsCount < 0) {
	window.obj7570_onTap_runningActionsCount = 0;
} else if (window.obj7570_onTap_runningActionsCount == 0) {
	obj7570_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj7570_onTap_runningActionsCount = window.obj7570_onTap_runningActionsCount - 1;
if (window.obj7570_onTap_runningActionsCount < 0) {
	window.obj7570_onTap_runningActionsCount = 0;
} else if (window.obj7570_onTap_runningActionsCount == 0) {
	obj7570_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj7570_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7570_onTap_activeActionGroupIndex = -1;
		$("#obj7570").trigger("obj7570_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7570) {
				console.warn("de-queueing event obj7570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7570_onTap_activeActionGroupIndex = 3;
	






















};
obj7551_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7551_onTap_activeActionGroupIndex = -1;
		$("#obj7551").trigger("obj7551_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7551) {
				console.warn("de-queueing event obj7551." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7551").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7551_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj7548
(function(){
	window.obj7551_onTap_runningActionsCount = obj7551_onTap_runningActionsCount + 1;

	var selector = "#obj7548";
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
					window.obj7551_onTap_runningActionsCount = window.obj7551_onTap_runningActionsCount - 1;
if (window.obj7551_onTap_runningActionsCount < 0) {
	window.obj7551_onTap_runningActionsCount = 0;
} else if (window.obj7551_onTap_runningActionsCount == 0) {
	obj7551_onTap_actionGroup1();
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
				window.obj7551_onTap_runningActionsCount = window.obj7551_onTap_runningActionsCount - 1;
if (window.obj7551_onTap_runningActionsCount < 0) {
	window.obj7551_onTap_runningActionsCount = 0;
} else if (window.obj7551_onTap_runningActionsCount == 0) {
	obj7551_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj7551_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7551_onTap_activeActionGroupIndex = -1;
		$("#obj7551").trigger("obj7551_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7551) {
				console.warn("de-queueing event obj7551." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7551").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7551_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj7544 
hide_7554();
function hide_7554() {
	var selector = "#obj7544";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7551_onTap_runningActionsCount = obj7551_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7551_onTap_runningActionsCount = window.obj7551_onTap_runningActionsCount - 1;
if (window.obj7551_onTap_runningActionsCount < 0) {
	window.obj7551_onTap_runningActionsCount = 0;
} else if (window.obj7551_onTap_runningActionsCount == 0) {
	obj7551_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7554(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7551_onTap_runningActionsCount = window.obj7551_onTap_runningActionsCount - 1;
if (window.obj7551_onTap_runningActionsCount < 0) {
	window.obj7551_onTap_runningActionsCount = 0;
} else if (window.obj7551_onTap_runningActionsCount == 0) {
	obj7551_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj7551_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7551_onTap_activeActionGroupIndex = -1;
		$("#obj7551").trigger("obj7551_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7551) {
				console.warn("de-queueing event obj7551." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7551").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7551_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_7555();
function playAudioFile_7555() {
	window.obj7551_onTap_runningActionsCount = obj7551_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7555")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7555");
			$("#obj_audio_playSoundFile7555").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7551_onTap_runningActionsCount = window.obj7551_onTap_runningActionsCount - 1;
if (window.obj7551_onTap_runningActionsCount < 0) {
	window.obj7551_onTap_runningActionsCount = 0;
} else if (window.obj7551_onTap_runningActionsCount == 0) {
	obj7551_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7551_onTap_runningActionsCount = window.obj7551_onTap_runningActionsCount - 1;
if (window.obj7551_onTap_runningActionsCount < 0) {
	window.obj7551_onTap_runningActionsCount = 0;
} else if (window.obj7551_onTap_runningActionsCount == 0) {
	obj7551_onTap_actionGroup3();
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
				window.obj7551_onTap_runningActionsCount = window.obj7551_onTap_runningActionsCount - 1;
if (window.obj7551_onTap_runningActionsCount < 0) {
	window.obj7551_onTap_runningActionsCount = 0;
} else if (window.obj7551_onTap_runningActionsCount == 0) {
	obj7551_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj7551_onTap_runningActionsCount = window.obj7551_onTap_runningActionsCount - 1;
if (window.obj7551_onTap_runningActionsCount < 0) {
	window.obj7551_onTap_runningActionsCount = 0;
} else if (window.obj7551_onTap_runningActionsCount == 0) {
	obj7551_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj7551_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7551_onTap_activeActionGroupIndex = -1;
		$("#obj7551").trigger("obj7551_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7551) {
				console.warn("de-queueing event obj7551." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7551").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7551_onTap_activeActionGroupIndex = 3;
	






















};
obj7557_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7557_onTap_activeActionGroupIndex = -1;
		$("#obj7557").trigger("obj7557_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7557) {
				console.warn("de-queueing event obj7557." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7557").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7557_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj7544
(function(){
	window.obj7557_onTap_runningActionsCount = obj7557_onTap_runningActionsCount + 1;

	var selector = "#obj7544";
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
					window.obj7557_onTap_runningActionsCount = window.obj7557_onTap_runningActionsCount - 1;
if (window.obj7557_onTap_runningActionsCount < 0) {
	window.obj7557_onTap_runningActionsCount = 0;
} else if (window.obj7557_onTap_runningActionsCount == 0) {
	obj7557_onTap_actionGroup1();
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
				window.obj7557_onTap_runningActionsCount = window.obj7557_onTap_runningActionsCount - 1;
if (window.obj7557_onTap_runningActionsCount < 0) {
	window.obj7557_onTap_runningActionsCount = 0;
} else if (window.obj7557_onTap_runningActionsCount == 0) {
	obj7557_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj7557_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7557_onTap_activeActionGroupIndex = -1;
		$("#obj7557").trigger("obj7557_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7557) {
				console.warn("de-queueing event obj7557." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7557").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7557_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj7548 
hide_7560();
function hide_7560() {
	var selector = "#obj7548";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7557_onTap_runningActionsCount = obj7557_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7557_onTap_runningActionsCount = window.obj7557_onTap_runningActionsCount - 1;
if (window.obj7557_onTap_runningActionsCount < 0) {
	window.obj7557_onTap_runningActionsCount = 0;
} else if (window.obj7557_onTap_runningActionsCount == 0) {
	obj7557_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7560(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7557_onTap_runningActionsCount = window.obj7557_onTap_runningActionsCount - 1;
if (window.obj7557_onTap_runningActionsCount < 0) {
	window.obj7557_onTap_runningActionsCount = 0;
} else if (window.obj7557_onTap_runningActionsCount == 0) {
	obj7557_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj7557_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7557_onTap_activeActionGroupIndex = -1;
		$("#obj7557").trigger("obj7557_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7557) {
				console.warn("de-queueing event obj7557." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7557").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7557_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_7561();
function playAudioFile_7561() {
	window.obj7557_onTap_runningActionsCount = obj7557_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7561")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7561");
			$("#obj_audio_playSoundFile7561").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7557_onTap_runningActionsCount = window.obj7557_onTap_runningActionsCount - 1;
if (window.obj7557_onTap_runningActionsCount < 0) {
	window.obj7557_onTap_runningActionsCount = 0;
} else if (window.obj7557_onTap_runningActionsCount == 0) {
	obj7557_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7557_onTap_runningActionsCount = window.obj7557_onTap_runningActionsCount - 1;
if (window.obj7557_onTap_runningActionsCount < 0) {
	window.obj7557_onTap_runningActionsCount = 0;
} else if (window.obj7557_onTap_runningActionsCount == 0) {
	obj7557_onTap_actionGroup3();
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
				window.obj7557_onTap_runningActionsCount = window.obj7557_onTap_runningActionsCount - 1;
if (window.obj7557_onTap_runningActionsCount < 0) {
	window.obj7557_onTap_runningActionsCount = 0;
} else if (window.obj7557_onTap_runningActionsCount == 0) {
	obj7557_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj7557_onTap_runningActionsCount = window.obj7557_onTap_runningActionsCount - 1;
if (window.obj7557_onTap_runningActionsCount < 0) {
	window.obj7557_onTap_runningActionsCount = 0;
} else if (window.obj7557_onTap_runningActionsCount == 0) {
	obj7557_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj7557_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7557_onTap_activeActionGroupIndex = -1;
		$("#obj7557").trigger("obj7557_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7557) {
				console.warn("de-queueing event obj7557." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7557").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7557_onTap_activeActionGroupIndex = 3;
	






















};
obj7576_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7576_onTap_activeActionGroupIndex = -1;
		$("#obj7576").trigger("obj7576_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7576) {
				console.warn("de-queueing event obj7576." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7576").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7576_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj7563
(function(){
	window.obj7576_onTap_runningActionsCount = obj7576_onTap_runningActionsCount + 1;

	var selector = "#obj7563";
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
					window.obj7576_onTap_runningActionsCount = window.obj7576_onTap_runningActionsCount - 1;
if (window.obj7576_onTap_runningActionsCount < 0) {
	window.obj7576_onTap_runningActionsCount = 0;
} else if (window.obj7576_onTap_runningActionsCount == 0) {
	obj7576_onTap_actionGroup1();
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
				window.obj7576_onTap_runningActionsCount = window.obj7576_onTap_runningActionsCount - 1;
if (window.obj7576_onTap_runningActionsCount < 0) {
	window.obj7576_onTap_runningActionsCount = 0;
} else if (window.obj7576_onTap_runningActionsCount == 0) {
	obj7576_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj7576_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7576_onTap_activeActionGroupIndex = -1;
		$("#obj7576").trigger("obj7576_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7576) {
				console.warn("de-queueing event obj7576." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7576").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7576_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj7567 
hide_7579();
function hide_7579() {
	var selector = "#obj7567";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7576_onTap_runningActionsCount = obj7576_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7576_onTap_runningActionsCount = window.obj7576_onTap_runningActionsCount - 1;
if (window.obj7576_onTap_runningActionsCount < 0) {
	window.obj7576_onTap_runningActionsCount = 0;
} else if (window.obj7576_onTap_runningActionsCount == 0) {
	obj7576_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7579(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7576_onTap_runningActionsCount = window.obj7576_onTap_runningActionsCount - 1;
if (window.obj7576_onTap_runningActionsCount < 0) {
	window.obj7576_onTap_runningActionsCount = 0;
} else if (window.obj7576_onTap_runningActionsCount == 0) {
	obj7576_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj7576_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7576_onTap_activeActionGroupIndex = -1;
		$("#obj7576").trigger("obj7576_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7576) {
				console.warn("de-queueing event obj7576." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7576").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7576_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_7580();
function playAudioFile_7580() {
	window.obj7576_onTap_runningActionsCount = obj7576_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7580")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7580");
			$("#obj_audio_playSoundFile7580").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7576_onTap_runningActionsCount = window.obj7576_onTap_runningActionsCount - 1;
if (window.obj7576_onTap_runningActionsCount < 0) {
	window.obj7576_onTap_runningActionsCount = 0;
} else if (window.obj7576_onTap_runningActionsCount == 0) {
	obj7576_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7576_onTap_runningActionsCount = window.obj7576_onTap_runningActionsCount - 1;
if (window.obj7576_onTap_runningActionsCount < 0) {
	window.obj7576_onTap_runningActionsCount = 0;
} else if (window.obj7576_onTap_runningActionsCount == 0) {
	obj7576_onTap_actionGroup3();
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
				window.obj7576_onTap_runningActionsCount = window.obj7576_onTap_runningActionsCount - 1;
if (window.obj7576_onTap_runningActionsCount < 0) {
	window.obj7576_onTap_runningActionsCount = 0;
} else if (window.obj7576_onTap_runningActionsCount == 0) {
	obj7576_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj7576_onTap_runningActionsCount = window.obj7576_onTap_runningActionsCount - 1;
if (window.obj7576_onTap_runningActionsCount < 0) {
	window.obj7576_onTap_runningActionsCount = 0;
} else if (window.obj7576_onTap_runningActionsCount == 0) {
	obj7576_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj7576_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7576_onTap_activeActionGroupIndex = -1;
		$("#obj7576").trigger("obj7576_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7576) {
				console.warn("de-queueing event obj7576." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7576").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7576_onTap_activeActionGroupIndex = 3;
	






















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
	var switchHelperId = "switchHelper292"
	var switchHelperRef = "#switchHelper292"
	var switchId = "292";
	var toSwitchId = "292";
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
	var switchHelperId = "switchHelper293"
	var switchHelperRef = "#switchHelper293"
	var switchId = "293";
	var toSwitchId = "293";
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
	var switchHelperId = "switchHelper294"
	var switchHelperRef = "#switchHelper294"
	var switchId = "294";
	var toSwitchId = "294";
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
	$("#anchor295")[0].click();
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
	$("#anchor296")[0].click();
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
 *   obj7474: Event Touch Down
 *
 */
$("#obj7474").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7474_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7474_onTap is still running");
	return;
}
var obj7474_onTap_runningActionsCount = 0;
var obj7474_onTap_loopCount = 0;
obj7474_onTap_actionGroup0();
});










/*
 *
 *   obj7493: Event Touch Down
 *
 */
$("#obj7493").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7493_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7493_onTap is still running");
	return;
}
var obj7493_onTap_runningActionsCount = 0;
var obj7493_onTap_loopCount = 0;
obj7493_onTap_actionGroup0();
});










/*
 *
 *   obj7487: Event Touch Down
 *
 */
$("#obj7487").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7487_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7487_onTap is still running");
	return;
}
var obj7487_onTap_runningActionsCount = 0;
var obj7487_onTap_loopCount = 0;
obj7487_onTap_actionGroup0();
});










/*
 *
 *   obj7468: Event Touch Down
 *
 */
$("#obj7468").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7468_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7468_onTap is still running");
	return;
}
var obj7468_onTap_runningActionsCount = 0;
var obj7468_onTap_loopCount = 0;
obj7468_onTap_actionGroup0();
});
















































































/*
 *
 *   obj7512: Event Touch Down
 *
 */
$("#obj7512").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7512_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7512_onTap is still running");
	return;
}
var obj7512_onTap_runningActionsCount = 0;
var obj7512_onTap_loopCount = 0;
obj7512_onTap_actionGroup0();
});










/*
 *
 *   obj7531: Event Touch Down
 *
 */
$("#obj7531").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7531_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7531_onTap is still running");
	return;
}
var obj7531_onTap_runningActionsCount = 0;
var obj7531_onTap_loopCount = 0;
obj7531_onTap_actionGroup0();
});










/*
 *
 *   obj7525: Event Touch Down
 *
 */
$("#obj7525").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7525_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7525_onTap is still running");
	return;
}
var obj7525_onTap_runningActionsCount = 0;
var obj7525_onTap_loopCount = 0;
obj7525_onTap_actionGroup0();
});










/*
 *
 *   obj7506: Event Touch Down
 *
 */
$("#obj7506").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7506_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7506_onTap is still running");
	return;
}
var obj7506_onTap_runningActionsCount = 0;
var obj7506_onTap_loopCount = 0;
obj7506_onTap_actionGroup0();
});






































































/*
 *
 *   obj7570: Event Touch Down
 *
 */
$("#obj7570").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7570_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7570_onTap is still running");
	return;
}
var obj7570_onTap_runningActionsCount = 0;
var obj7570_onTap_loopCount = 0;
obj7570_onTap_actionGroup0();
});










/*
 *
 *   obj7551: Event Touch Down
 *
 */
$("#obj7551").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7551_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7551_onTap is still running");
	return;
}
var obj7551_onTap_runningActionsCount = 0;
var obj7551_onTap_loopCount = 0;
obj7551_onTap_actionGroup0();
});










/*
 *
 *   obj7557: Event Touch Down
 *
 */
$("#obj7557").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7557_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7557_onTap is still running");
	return;
}
var obj7557_onTap_runningActionsCount = 0;
var obj7557_onTap_loopCount = 0;
obj7557_onTap_actionGroup0();
});










/*
 *
 *   obj7576: Event Touch Down
 *
 */
$("#obj7576").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7576_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7576_onTap is still running");
	return;
}
var obj7576_onTap_runningActionsCount = 0;
var obj7576_onTap_loopCount = 0;
obj7576_onTap_actionGroup0();
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
	
$("#obj1560").trigger('SCEventShow');
$("#obj1955").trigger('SCEventShow');
$("#obj1957").trigger('SCEventShow');
$("#obj7474").trigger('SCEventShow');
$("#obj7493").trigger('SCEventShow');
$("#obj7487").trigger('SCEventShow');
$("#obj7468").trigger('SCEventShow');
$("#obj1961").trigger('SCEventShow');
$("#obj1959").trigger('SCEventShow');
$("#obj7512").trigger('SCEventShow');
$("#obj7531").trigger('SCEventShow');
$("#obj7525").trigger('SCEventShow');
$("#obj7506").trigger('SCEventShow');
$("#obj1963").trigger('SCEventShow');
$("#obj1965").trigger('SCEventShow');
$("#obj7570").trigger('SCEventShow');
$("#obj7551").trigger('SCEventShow');
$("#obj7557").trigger('SCEventShow');
$("#obj7576").trigger('SCEventShow');
$("#obj4502").trigger('SCEventShow');
$("#obj1796").trigger('SCEventShow');
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