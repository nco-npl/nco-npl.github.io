pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serophero - Unit 4";
pubcoder.page.id = pubcoder.page.id || 3833;
pubcoder.page.title = pubcoder.page.title || "36";
pubcoder.page.number = pubcoder.page.number || 36;
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
var obj10359_onTap_activeActionGroupIndex = -1;
var obj10359_onTap_runningActionsCount = 0;
var obj10359_onTap_loopCount = 0;
var obj10364_onTap_activeActionGroupIndex = -1;
var obj10364_onTap_runningActionsCount = 0;
var obj10364_onTap_loopCount = 0;
var obj10354_onTap_activeActionGroupIndex = -1;
var obj10354_onTap_runningActionsCount = 0;
var obj10354_onTap_loopCount = 0;
var obj10348_onTap_activeActionGroupIndex = -1;
var obj10348_onTap_runningActionsCount = 0;
var obj10348_onTap_loopCount = 0;
var obj10339_onTap_activeActionGroupIndex = -1;
var obj10339_onTap_runningActionsCount = 0;
var obj10339_onTap_loopCount = 0;
var obj10333_onTap_activeActionGroupIndex = -1;
var obj10333_onTap_runningActionsCount = 0;
var obj10333_onTap_loopCount = 0;
var obj10324_onTap_activeActionGroupIndex = -1;
var obj10324_onTap_runningActionsCount = 0;
var obj10324_onTap_loopCount = 0;
var obj10318_onTap_activeActionGroupIndex = -1;
var obj10318_onTap_runningActionsCount = 0;
var obj10318_onTap_loopCount = 0;
var obj10374_onTap_activeActionGroupIndex = -1;
var obj10374_onTap_runningActionsCount = 0;
var obj10374_onTap_loopCount = 0;
var obj10379_onTap_activeActionGroupIndex = -1;
var obj10379_onTap_runningActionsCount = 0;
var obj10379_onTap_loopCount = 0;
var obj10299_onTap_activeActionGroupIndex = -1;
var obj10299_onTap_runningActionsCount = 0;
var obj10299_onTap_loopCount = 0;
var obj10304_onTap_activeActionGroupIndex = -1;
var obj10304_onTap_runningActionsCount = 0;
var obj10304_onTap_loopCount = 0;
var obj10252_onTap_activeActionGroupIndex = -1;
var obj10252_onTap_runningActionsCount = 0;
var obj10252_onTap_loopCount = 0;
var obj10271_SCEventReadAloudStarted_activeActionGroupIndex = -1;
var obj10271_SCEventReadAloudStarted_runningActionsCount = 0;
var obj10271_SCEventReadAloudStarted_loopCount = 0;
var obj10271_SCEventReadAloudStopped_activeActionGroupIndex = -1;
var obj10271_SCEventReadAloudStopped_runningActionsCount = 0;
var obj10271_SCEventReadAloudStopped_loopCount = 0;
var obj10242_onTap_activeActionGroupIndex = -1;
var obj10242_onTap_runningActionsCount = 0;
var obj10242_onTap_loopCount = 0;
var obj10267_onTap_activeActionGroupIndex = -1;
var obj10267_onTap_runningActionsCount = 0;
var obj10267_onTap_loopCount = 0;
var obj10264_onTap_activeActionGroupIndex = -1;
var obj10264_onTap_runningActionsCount = 0;
var obj10264_onTap_loopCount = 0;
var obj10249_onTap_activeActionGroupIndex = -1;
var obj10249_onTap_runningActionsCount = 0;
var obj10249_onTap_loopCount = 0;
var obj10233_onTap_activeActionGroupIndex = -1;
var obj10233_onTap_runningActionsCount = 0;
var obj10233_onTap_loopCount = 0;
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
		
obj10359_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10359_onTap_activeActionGroupIndex = -1;
		$("#obj10359").trigger("obj10359_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10359) {
				console.warn("de-queueing event obj10359." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10359").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10359_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10372
(function(){
	window.obj10359_onTap_runningActionsCount = obj10359_onTap_runningActionsCount + 1;

	var selector = "#obj10372";
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
					window.obj10359_onTap_runningActionsCount = window.obj10359_onTap_runningActionsCount - 1;
if (window.obj10359_onTap_runningActionsCount < 0) {
	window.obj10359_onTap_runningActionsCount = 0;
} else if (window.obj10359_onTap_runningActionsCount == 0) {
	obj10359_onTap_actionGroup1();
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
				window.obj10359_onTap_runningActionsCount = window.obj10359_onTap_runningActionsCount - 1;
if (window.obj10359_onTap_runningActionsCount < 0) {
	window.obj10359_onTap_runningActionsCount = 0;
} else if (window.obj10359_onTap_runningActionsCount == 0) {
	obj10359_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10359_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10359_onTap_activeActionGroupIndex = -1;
		$("#obj10359").trigger("obj10359_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10359) {
				console.warn("de-queueing event obj10359." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10359").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10359_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_10362();
function playAudioFile_10362() {
	window.obj10359_onTap_runningActionsCount = obj10359_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10362")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10362");
			$("#obj_audio_playSoundFile10362").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10359_onTap_runningActionsCount = window.obj10359_onTap_runningActionsCount - 1;
if (window.obj10359_onTap_runningActionsCount < 0) {
	window.obj10359_onTap_runningActionsCount = 0;
} else if (window.obj10359_onTap_runningActionsCount == 0) {
	obj10359_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10359_onTap_runningActionsCount = window.obj10359_onTap_runningActionsCount - 1;
if (window.obj10359_onTap_runningActionsCount < 0) {
	window.obj10359_onTap_runningActionsCount = 0;
} else if (window.obj10359_onTap_runningActionsCount == 0) {
	obj10359_onTap_actionGroup2();
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
				window.obj10359_onTap_runningActionsCount = window.obj10359_onTap_runningActionsCount - 1;
if (window.obj10359_onTap_runningActionsCount < 0) {
	window.obj10359_onTap_runningActionsCount = 0;
} else if (window.obj10359_onTap_runningActionsCount == 0) {
	obj10359_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj10359_onTap_runningActionsCount = window.obj10359_onTap_runningActionsCount - 1;
if (window.obj10359_onTap_runningActionsCount < 0) {
	window.obj10359_onTap_runningActionsCount = 0;
} else if (window.obj10359_onTap_runningActionsCount == 0) {
	obj10359_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj10359_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10359_onTap_activeActionGroupIndex = -1;
		$("#obj10359").trigger("obj10359_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10359) {
				console.warn("de-queueing event obj10359." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10359").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10359_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj10370 
hide_10363();
function hide_10363() {
	var selector = "#obj10370";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10359_onTap_runningActionsCount = obj10359_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10359_onTap_runningActionsCount = window.obj10359_onTap_runningActionsCount - 1;
if (window.obj10359_onTap_runningActionsCount < 0) {
	window.obj10359_onTap_runningActionsCount = 0;
} else if (window.obj10359_onTap_runningActionsCount == 0) {
	obj10359_onTap_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10363(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10359_onTap_runningActionsCount = window.obj10359_onTap_runningActionsCount - 1;
if (window.obj10359_onTap_runningActionsCount < 0) {
	window.obj10359_onTap_runningActionsCount = 0;
} else if (window.obj10359_onTap_runningActionsCount == 0) {
	obj10359_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10359_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10359_onTap_activeActionGroupIndex = -1;
		$("#obj10359").trigger("obj10359_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10359) {
				console.warn("de-queueing event obj10359." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10359").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10359_onTap_activeActionGroupIndex = 3;
	






















};
obj10364_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10364_onTap_activeActionGroupIndex = -1;
		$("#obj10364").trigger("obj10364_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10364) {
				console.warn("de-queueing event obj10364." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10364").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10364_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10370
(function(){
	window.obj10364_onTap_runningActionsCount = obj10364_onTap_runningActionsCount + 1;

	var selector = "#obj10370";
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
					window.obj10364_onTap_runningActionsCount = window.obj10364_onTap_runningActionsCount - 1;
if (window.obj10364_onTap_runningActionsCount < 0) {
	window.obj10364_onTap_runningActionsCount = 0;
} else if (window.obj10364_onTap_runningActionsCount == 0) {
	obj10364_onTap_actionGroup1();
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
				window.obj10364_onTap_runningActionsCount = window.obj10364_onTap_runningActionsCount - 1;
if (window.obj10364_onTap_runningActionsCount < 0) {
	window.obj10364_onTap_runningActionsCount = 0;
} else if (window.obj10364_onTap_runningActionsCount == 0) {
	obj10364_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10364_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10364_onTap_activeActionGroupIndex = -1;
		$("#obj10364").trigger("obj10364_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10364) {
				console.warn("de-queueing event obj10364." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10364").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10364_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10372 
hide_10367();
function hide_10367() {
	var selector = "#obj10372";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10364_onTap_runningActionsCount = obj10364_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10364_onTap_runningActionsCount = window.obj10364_onTap_runningActionsCount - 1;
if (window.obj10364_onTap_runningActionsCount < 0) {
	window.obj10364_onTap_runningActionsCount = 0;
} else if (window.obj10364_onTap_runningActionsCount == 0) {
	obj10364_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10367(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10364_onTap_runningActionsCount = window.obj10364_onTap_runningActionsCount - 1;
if (window.obj10364_onTap_runningActionsCount < 0) {
	window.obj10364_onTap_runningActionsCount = 0;
} else if (window.obj10364_onTap_runningActionsCount == 0) {
	obj10364_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10364_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10364_onTap_activeActionGroupIndex = -1;
		$("#obj10364").trigger("obj10364_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10364) {
				console.warn("de-queueing event obj10364." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10364").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10364_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10368();
function playAudioFile_10368() {
	window.obj10364_onTap_runningActionsCount = obj10364_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10368")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10368");
			$("#obj_audio_playSoundFile10368").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10364_onTap_runningActionsCount = window.obj10364_onTap_runningActionsCount - 1;
if (window.obj10364_onTap_runningActionsCount < 0) {
	window.obj10364_onTap_runningActionsCount = 0;
} else if (window.obj10364_onTap_runningActionsCount == 0) {
	obj10364_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10364_onTap_runningActionsCount = window.obj10364_onTap_runningActionsCount - 1;
if (window.obj10364_onTap_runningActionsCount < 0) {
	window.obj10364_onTap_runningActionsCount = 0;
} else if (window.obj10364_onTap_runningActionsCount == 0) {
	obj10364_onTap_actionGroup3();
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
				window.obj10364_onTap_runningActionsCount = window.obj10364_onTap_runningActionsCount - 1;
if (window.obj10364_onTap_runningActionsCount < 0) {
	window.obj10364_onTap_runningActionsCount = 0;
} else if (window.obj10364_onTap_runningActionsCount == 0) {
	obj10364_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10364_onTap_runningActionsCount = window.obj10364_onTap_runningActionsCount - 1;
if (window.obj10364_onTap_runningActionsCount < 0) {
	window.obj10364_onTap_runningActionsCount = 0;
} else if (window.obj10364_onTap_runningActionsCount == 0) {
	obj10364_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10364_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10364_onTap_activeActionGroupIndex = -1;
		$("#obj10364").trigger("obj10364_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10364) {
				console.warn("de-queueing event obj10364." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10364").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10364_onTap_activeActionGroupIndex = 3;
	






















};
obj10354_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10354_onTap_activeActionGroupIndex = -1;
		$("#obj10354").trigger("obj10354_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10354) {
				console.warn("de-queueing event obj10354." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10354").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10354_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10344
(function(){
	window.obj10354_onTap_runningActionsCount = obj10354_onTap_runningActionsCount + 1;

	var selector = "#obj10344";
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
					window.obj10354_onTap_runningActionsCount = window.obj10354_onTap_runningActionsCount - 1;
if (window.obj10354_onTap_runningActionsCount < 0) {
	window.obj10354_onTap_runningActionsCount = 0;
} else if (window.obj10354_onTap_runningActionsCount == 0) {
	obj10354_onTap_actionGroup1();
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
				window.obj10354_onTap_runningActionsCount = window.obj10354_onTap_runningActionsCount - 1;
if (window.obj10354_onTap_runningActionsCount < 0) {
	window.obj10354_onTap_runningActionsCount = 0;
} else if (window.obj10354_onTap_runningActionsCount == 0) {
	obj10354_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10354_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10354_onTap_activeActionGroupIndex = -1;
		$("#obj10354").trigger("obj10354_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10354) {
				console.warn("de-queueing event obj10354." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10354").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10354_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_10357();
function playAudioFile_10357() {
	window.obj10354_onTap_runningActionsCount = obj10354_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10357")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10357");
			$("#obj_audio_playSoundFile10357").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10354_onTap_runningActionsCount = window.obj10354_onTap_runningActionsCount - 1;
if (window.obj10354_onTap_runningActionsCount < 0) {
	window.obj10354_onTap_runningActionsCount = 0;
} else if (window.obj10354_onTap_runningActionsCount == 0) {
	obj10354_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10354_onTap_runningActionsCount = window.obj10354_onTap_runningActionsCount - 1;
if (window.obj10354_onTap_runningActionsCount < 0) {
	window.obj10354_onTap_runningActionsCount = 0;
} else if (window.obj10354_onTap_runningActionsCount == 0) {
	obj10354_onTap_actionGroup2();
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
				window.obj10354_onTap_runningActionsCount = window.obj10354_onTap_runningActionsCount - 1;
if (window.obj10354_onTap_runningActionsCount < 0) {
	window.obj10354_onTap_runningActionsCount = 0;
} else if (window.obj10354_onTap_runningActionsCount == 0) {
	obj10354_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj10354_onTap_runningActionsCount = window.obj10354_onTap_runningActionsCount - 1;
if (window.obj10354_onTap_runningActionsCount < 0) {
	window.obj10354_onTap_runningActionsCount = 0;
} else if (window.obj10354_onTap_runningActionsCount == 0) {
	obj10354_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj10354_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10354_onTap_activeActionGroupIndex = -1;
		$("#obj10354").trigger("obj10354_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10354) {
				console.warn("de-queueing event obj10354." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10354").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10354_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj10346 
hide_10358();
function hide_10358() {
	var selector = "#obj10346";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10354_onTap_runningActionsCount = obj10354_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10354_onTap_runningActionsCount = window.obj10354_onTap_runningActionsCount - 1;
if (window.obj10354_onTap_runningActionsCount < 0) {
	window.obj10354_onTap_runningActionsCount = 0;
} else if (window.obj10354_onTap_runningActionsCount == 0) {
	obj10354_onTap_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10358(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10354_onTap_runningActionsCount = window.obj10354_onTap_runningActionsCount - 1;
if (window.obj10354_onTap_runningActionsCount < 0) {
	window.obj10354_onTap_runningActionsCount = 0;
} else if (window.obj10354_onTap_runningActionsCount == 0) {
	obj10354_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10354_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10354_onTap_activeActionGroupIndex = -1;
		$("#obj10354").trigger("obj10354_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10354) {
				console.warn("de-queueing event obj10354." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10354").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10354_onTap_activeActionGroupIndex = 3;
	






















};
obj10348_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10348_onTap_activeActionGroupIndex = -1;
		$("#obj10348").trigger("obj10348_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10348) {
				console.warn("de-queueing event obj10348." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10348").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10348_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10346
(function(){
	window.obj10348_onTap_runningActionsCount = obj10348_onTap_runningActionsCount + 1;

	var selector = "#obj10346";
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
					window.obj10348_onTap_runningActionsCount = window.obj10348_onTap_runningActionsCount - 1;
if (window.obj10348_onTap_runningActionsCount < 0) {
	window.obj10348_onTap_runningActionsCount = 0;
} else if (window.obj10348_onTap_runningActionsCount == 0) {
	obj10348_onTap_actionGroup1();
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
				window.obj10348_onTap_runningActionsCount = window.obj10348_onTap_runningActionsCount - 1;
if (window.obj10348_onTap_runningActionsCount < 0) {
	window.obj10348_onTap_runningActionsCount = 0;
} else if (window.obj10348_onTap_runningActionsCount == 0) {
	obj10348_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10348_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10348_onTap_activeActionGroupIndex = -1;
		$("#obj10348").trigger("obj10348_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10348) {
				console.warn("de-queueing event obj10348." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10348").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10348_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10344 
hide_10351();
function hide_10351() {
	var selector = "#obj10344";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10348_onTap_runningActionsCount = obj10348_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10348_onTap_runningActionsCount = window.obj10348_onTap_runningActionsCount - 1;
if (window.obj10348_onTap_runningActionsCount < 0) {
	window.obj10348_onTap_runningActionsCount = 0;
} else if (window.obj10348_onTap_runningActionsCount == 0) {
	obj10348_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10351(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10348_onTap_runningActionsCount = window.obj10348_onTap_runningActionsCount - 1;
if (window.obj10348_onTap_runningActionsCount < 0) {
	window.obj10348_onTap_runningActionsCount = 0;
} else if (window.obj10348_onTap_runningActionsCount == 0) {
	obj10348_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10348_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10348_onTap_activeActionGroupIndex = -1;
		$("#obj10348").trigger("obj10348_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10348) {
				console.warn("de-queueing event obj10348." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10348").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10348_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10352();
function playAudioFile_10352() {
	window.obj10348_onTap_runningActionsCount = obj10348_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10352")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10352");
			$("#obj_audio_playSoundFile10352").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10348_onTap_runningActionsCount = window.obj10348_onTap_runningActionsCount - 1;
if (window.obj10348_onTap_runningActionsCount < 0) {
	window.obj10348_onTap_runningActionsCount = 0;
} else if (window.obj10348_onTap_runningActionsCount == 0) {
	obj10348_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10348_onTap_runningActionsCount = window.obj10348_onTap_runningActionsCount - 1;
if (window.obj10348_onTap_runningActionsCount < 0) {
	window.obj10348_onTap_runningActionsCount = 0;
} else if (window.obj10348_onTap_runningActionsCount == 0) {
	obj10348_onTap_actionGroup3();
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
				window.obj10348_onTap_runningActionsCount = window.obj10348_onTap_runningActionsCount - 1;
if (window.obj10348_onTap_runningActionsCount < 0) {
	window.obj10348_onTap_runningActionsCount = 0;
} else if (window.obj10348_onTap_runningActionsCount == 0) {
	obj10348_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10348_onTap_runningActionsCount = window.obj10348_onTap_runningActionsCount - 1;
if (window.obj10348_onTap_runningActionsCount < 0) {
	window.obj10348_onTap_runningActionsCount = 0;
} else if (window.obj10348_onTap_runningActionsCount == 0) {
	obj10348_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10348_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10348_onTap_activeActionGroupIndex = -1;
		$("#obj10348").trigger("obj10348_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10348) {
				console.warn("de-queueing event obj10348." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10348").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10348_onTap_activeActionGroupIndex = 3;
	






















};
obj10339_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10339_onTap_activeActionGroupIndex = -1;
		$("#obj10339").trigger("obj10339_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10339) {
				console.warn("de-queueing event obj10339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10339_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10329
(function(){
	window.obj10339_onTap_runningActionsCount = obj10339_onTap_runningActionsCount + 1;

	var selector = "#obj10329";
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
					window.obj10339_onTap_runningActionsCount = window.obj10339_onTap_runningActionsCount - 1;
if (window.obj10339_onTap_runningActionsCount < 0) {
	window.obj10339_onTap_runningActionsCount = 0;
} else if (window.obj10339_onTap_runningActionsCount == 0) {
	obj10339_onTap_actionGroup1();
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
				window.obj10339_onTap_runningActionsCount = window.obj10339_onTap_runningActionsCount - 1;
if (window.obj10339_onTap_runningActionsCount < 0) {
	window.obj10339_onTap_runningActionsCount = 0;
} else if (window.obj10339_onTap_runningActionsCount == 0) {
	obj10339_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10339_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10339_onTap_activeActionGroupIndex = -1;
		$("#obj10339").trigger("obj10339_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10339) {
				console.warn("de-queueing event obj10339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10339_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_10342();
function playAudioFile_10342() {
	window.obj10339_onTap_runningActionsCount = obj10339_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10342")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10342");
			$("#obj_audio_playSoundFile10342").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10339_onTap_runningActionsCount = window.obj10339_onTap_runningActionsCount - 1;
if (window.obj10339_onTap_runningActionsCount < 0) {
	window.obj10339_onTap_runningActionsCount = 0;
} else if (window.obj10339_onTap_runningActionsCount == 0) {
	obj10339_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10339_onTap_runningActionsCount = window.obj10339_onTap_runningActionsCount - 1;
if (window.obj10339_onTap_runningActionsCount < 0) {
	window.obj10339_onTap_runningActionsCount = 0;
} else if (window.obj10339_onTap_runningActionsCount == 0) {
	obj10339_onTap_actionGroup2();
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
				window.obj10339_onTap_runningActionsCount = window.obj10339_onTap_runningActionsCount - 1;
if (window.obj10339_onTap_runningActionsCount < 0) {
	window.obj10339_onTap_runningActionsCount = 0;
} else if (window.obj10339_onTap_runningActionsCount == 0) {
	obj10339_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj10339_onTap_runningActionsCount = window.obj10339_onTap_runningActionsCount - 1;
if (window.obj10339_onTap_runningActionsCount < 0) {
	window.obj10339_onTap_runningActionsCount = 0;
} else if (window.obj10339_onTap_runningActionsCount == 0) {
	obj10339_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj10339_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10339_onTap_activeActionGroupIndex = -1;
		$("#obj10339").trigger("obj10339_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10339) {
				console.warn("de-queueing event obj10339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10339_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj10331 
hide_10343();
function hide_10343() {
	var selector = "#obj10331";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10339_onTap_runningActionsCount = obj10339_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10339_onTap_runningActionsCount = window.obj10339_onTap_runningActionsCount - 1;
if (window.obj10339_onTap_runningActionsCount < 0) {
	window.obj10339_onTap_runningActionsCount = 0;
} else if (window.obj10339_onTap_runningActionsCount == 0) {
	obj10339_onTap_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10343(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10339_onTap_runningActionsCount = window.obj10339_onTap_runningActionsCount - 1;
if (window.obj10339_onTap_runningActionsCount < 0) {
	window.obj10339_onTap_runningActionsCount = 0;
} else if (window.obj10339_onTap_runningActionsCount == 0) {
	obj10339_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10339_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10339_onTap_activeActionGroupIndex = -1;
		$("#obj10339").trigger("obj10339_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10339) {
				console.warn("de-queueing event obj10339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10339_onTap_activeActionGroupIndex = 3;
	






















};
obj10333_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10333_onTap_activeActionGroupIndex = -1;
		$("#obj10333").trigger("obj10333_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10333) {
				console.warn("de-queueing event obj10333." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10333").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10333_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10331
(function(){
	window.obj10333_onTap_runningActionsCount = obj10333_onTap_runningActionsCount + 1;

	var selector = "#obj10331";
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
					window.obj10333_onTap_runningActionsCount = window.obj10333_onTap_runningActionsCount - 1;
if (window.obj10333_onTap_runningActionsCount < 0) {
	window.obj10333_onTap_runningActionsCount = 0;
} else if (window.obj10333_onTap_runningActionsCount == 0) {
	obj10333_onTap_actionGroup1();
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
				window.obj10333_onTap_runningActionsCount = window.obj10333_onTap_runningActionsCount - 1;
if (window.obj10333_onTap_runningActionsCount < 0) {
	window.obj10333_onTap_runningActionsCount = 0;
} else if (window.obj10333_onTap_runningActionsCount == 0) {
	obj10333_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10333_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10333_onTap_activeActionGroupIndex = -1;
		$("#obj10333").trigger("obj10333_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10333) {
				console.warn("de-queueing event obj10333." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10333").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10333_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10329 
hide_10336();
function hide_10336() {
	var selector = "#obj10329";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10333_onTap_runningActionsCount = obj10333_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10333_onTap_runningActionsCount = window.obj10333_onTap_runningActionsCount - 1;
if (window.obj10333_onTap_runningActionsCount < 0) {
	window.obj10333_onTap_runningActionsCount = 0;
} else if (window.obj10333_onTap_runningActionsCount == 0) {
	obj10333_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10336(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10333_onTap_runningActionsCount = window.obj10333_onTap_runningActionsCount - 1;
if (window.obj10333_onTap_runningActionsCount < 0) {
	window.obj10333_onTap_runningActionsCount = 0;
} else if (window.obj10333_onTap_runningActionsCount == 0) {
	obj10333_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10333_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10333_onTap_activeActionGroupIndex = -1;
		$("#obj10333").trigger("obj10333_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10333) {
				console.warn("de-queueing event obj10333." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10333").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10333_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10337();
function playAudioFile_10337() {
	window.obj10333_onTap_runningActionsCount = obj10333_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10337")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10337");
			$("#obj_audio_playSoundFile10337").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10333_onTap_runningActionsCount = window.obj10333_onTap_runningActionsCount - 1;
if (window.obj10333_onTap_runningActionsCount < 0) {
	window.obj10333_onTap_runningActionsCount = 0;
} else if (window.obj10333_onTap_runningActionsCount == 0) {
	obj10333_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10333_onTap_runningActionsCount = window.obj10333_onTap_runningActionsCount - 1;
if (window.obj10333_onTap_runningActionsCount < 0) {
	window.obj10333_onTap_runningActionsCount = 0;
} else if (window.obj10333_onTap_runningActionsCount == 0) {
	obj10333_onTap_actionGroup3();
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
				window.obj10333_onTap_runningActionsCount = window.obj10333_onTap_runningActionsCount - 1;
if (window.obj10333_onTap_runningActionsCount < 0) {
	window.obj10333_onTap_runningActionsCount = 0;
} else if (window.obj10333_onTap_runningActionsCount == 0) {
	obj10333_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10333_onTap_runningActionsCount = window.obj10333_onTap_runningActionsCount - 1;
if (window.obj10333_onTap_runningActionsCount < 0) {
	window.obj10333_onTap_runningActionsCount = 0;
} else if (window.obj10333_onTap_runningActionsCount == 0) {
	obj10333_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10333_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10333_onTap_activeActionGroupIndex = -1;
		$("#obj10333").trigger("obj10333_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10333) {
				console.warn("de-queueing event obj10333." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10333").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10333_onTap_activeActionGroupIndex = 3;
	






















};
obj10324_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10324_onTap_activeActionGroupIndex = -1;
		$("#obj10324").trigger("obj10324_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10324) {
				console.warn("de-queueing event obj10324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10324_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10316
(function(){
	window.obj10324_onTap_runningActionsCount = obj10324_onTap_runningActionsCount + 1;

	var selector = "#obj10316";
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
					window.obj10324_onTap_runningActionsCount = window.obj10324_onTap_runningActionsCount - 1;
if (window.obj10324_onTap_runningActionsCount < 0) {
	window.obj10324_onTap_runningActionsCount = 0;
} else if (window.obj10324_onTap_runningActionsCount == 0) {
	obj10324_onTap_actionGroup1();
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
				window.obj10324_onTap_runningActionsCount = window.obj10324_onTap_runningActionsCount - 1;
if (window.obj10324_onTap_runningActionsCount < 0) {
	window.obj10324_onTap_runningActionsCount = 0;
} else if (window.obj10324_onTap_runningActionsCount == 0) {
	obj10324_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10324_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10324_onTap_activeActionGroupIndex = -1;
		$("#obj10324").trigger("obj10324_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10324) {
				console.warn("de-queueing event obj10324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10324_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_10327();
function playAudioFile_10327() {
	window.obj10324_onTap_runningActionsCount = obj10324_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10327")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10327");
			$("#obj_audio_playSoundFile10327").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10324_onTap_runningActionsCount = window.obj10324_onTap_runningActionsCount - 1;
if (window.obj10324_onTap_runningActionsCount < 0) {
	window.obj10324_onTap_runningActionsCount = 0;
} else if (window.obj10324_onTap_runningActionsCount == 0) {
	obj10324_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10324_onTap_runningActionsCount = window.obj10324_onTap_runningActionsCount - 1;
if (window.obj10324_onTap_runningActionsCount < 0) {
	window.obj10324_onTap_runningActionsCount = 0;
} else if (window.obj10324_onTap_runningActionsCount == 0) {
	obj10324_onTap_actionGroup2();
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
				window.obj10324_onTap_runningActionsCount = window.obj10324_onTap_runningActionsCount - 1;
if (window.obj10324_onTap_runningActionsCount < 0) {
	window.obj10324_onTap_runningActionsCount = 0;
} else if (window.obj10324_onTap_runningActionsCount == 0) {
	obj10324_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj10324_onTap_runningActionsCount = window.obj10324_onTap_runningActionsCount - 1;
if (window.obj10324_onTap_runningActionsCount < 0) {
	window.obj10324_onTap_runningActionsCount = 0;
} else if (window.obj10324_onTap_runningActionsCount == 0) {
	obj10324_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj10324_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10324_onTap_activeActionGroupIndex = -1;
		$("#obj10324").trigger("obj10324_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10324) {
				console.warn("de-queueing event obj10324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10324_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj10314 
hide_10328();
function hide_10328() {
	var selector = "#obj10314";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10324_onTap_runningActionsCount = obj10324_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10324_onTap_runningActionsCount = window.obj10324_onTap_runningActionsCount - 1;
if (window.obj10324_onTap_runningActionsCount < 0) {
	window.obj10324_onTap_runningActionsCount = 0;
} else if (window.obj10324_onTap_runningActionsCount == 0) {
	obj10324_onTap_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10328(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10324_onTap_runningActionsCount = window.obj10324_onTap_runningActionsCount - 1;
if (window.obj10324_onTap_runningActionsCount < 0) {
	window.obj10324_onTap_runningActionsCount = 0;
} else if (window.obj10324_onTap_runningActionsCount == 0) {
	obj10324_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10324_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10324_onTap_activeActionGroupIndex = -1;
		$("#obj10324").trigger("obj10324_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10324) {
				console.warn("de-queueing event obj10324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10324_onTap_activeActionGroupIndex = 3;
	






















};
obj10318_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10318_onTap_activeActionGroupIndex = -1;
		$("#obj10318").trigger("obj10318_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10318) {
				console.warn("de-queueing event obj10318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10318_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10314
(function(){
	window.obj10318_onTap_runningActionsCount = obj10318_onTap_runningActionsCount + 1;

	var selector = "#obj10314";
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
					window.obj10318_onTap_runningActionsCount = window.obj10318_onTap_runningActionsCount - 1;
if (window.obj10318_onTap_runningActionsCount < 0) {
	window.obj10318_onTap_runningActionsCount = 0;
} else if (window.obj10318_onTap_runningActionsCount == 0) {
	obj10318_onTap_actionGroup1();
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
				window.obj10318_onTap_runningActionsCount = window.obj10318_onTap_runningActionsCount - 1;
if (window.obj10318_onTap_runningActionsCount < 0) {
	window.obj10318_onTap_runningActionsCount = 0;
} else if (window.obj10318_onTap_runningActionsCount == 0) {
	obj10318_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10318_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10318_onTap_activeActionGroupIndex = -1;
		$("#obj10318").trigger("obj10318_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10318) {
				console.warn("de-queueing event obj10318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10318_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10316 
hide_10321();
function hide_10321() {
	var selector = "#obj10316";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10318_onTap_runningActionsCount = obj10318_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10318_onTap_runningActionsCount = window.obj10318_onTap_runningActionsCount - 1;
if (window.obj10318_onTap_runningActionsCount < 0) {
	window.obj10318_onTap_runningActionsCount = 0;
} else if (window.obj10318_onTap_runningActionsCount == 0) {
	obj10318_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10321(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10318_onTap_runningActionsCount = window.obj10318_onTap_runningActionsCount - 1;
if (window.obj10318_onTap_runningActionsCount < 0) {
	window.obj10318_onTap_runningActionsCount = 0;
} else if (window.obj10318_onTap_runningActionsCount == 0) {
	obj10318_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10318_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10318_onTap_activeActionGroupIndex = -1;
		$("#obj10318").trigger("obj10318_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10318) {
				console.warn("de-queueing event obj10318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10318_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10322();
function playAudioFile_10322() {
	window.obj10318_onTap_runningActionsCount = obj10318_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10322")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10322");
			$("#obj_audio_playSoundFile10322").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10318_onTap_runningActionsCount = window.obj10318_onTap_runningActionsCount - 1;
if (window.obj10318_onTap_runningActionsCount < 0) {
	window.obj10318_onTap_runningActionsCount = 0;
} else if (window.obj10318_onTap_runningActionsCount == 0) {
	obj10318_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10318_onTap_runningActionsCount = window.obj10318_onTap_runningActionsCount - 1;
if (window.obj10318_onTap_runningActionsCount < 0) {
	window.obj10318_onTap_runningActionsCount = 0;
} else if (window.obj10318_onTap_runningActionsCount == 0) {
	obj10318_onTap_actionGroup3();
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
				window.obj10318_onTap_runningActionsCount = window.obj10318_onTap_runningActionsCount - 1;
if (window.obj10318_onTap_runningActionsCount < 0) {
	window.obj10318_onTap_runningActionsCount = 0;
} else if (window.obj10318_onTap_runningActionsCount == 0) {
	obj10318_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10318_onTap_runningActionsCount = window.obj10318_onTap_runningActionsCount - 1;
if (window.obj10318_onTap_runningActionsCount < 0) {
	window.obj10318_onTap_runningActionsCount = 0;
} else if (window.obj10318_onTap_runningActionsCount == 0) {
	obj10318_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10318_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10318_onTap_activeActionGroupIndex = -1;
		$("#obj10318").trigger("obj10318_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10318) {
				console.warn("de-queueing event obj10318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10318_onTap_activeActionGroupIndex = 3;
	






















};
obj10374_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10374_onTap_activeActionGroupIndex = -1;
		$("#obj10374").trigger("obj10374_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10374) {
				console.warn("de-queueing event obj10374." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10374").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10374_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10387
(function(){
	window.obj10374_onTap_runningActionsCount = obj10374_onTap_runningActionsCount + 1;

	var selector = "#obj10387";
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
					window.obj10374_onTap_runningActionsCount = window.obj10374_onTap_runningActionsCount - 1;
if (window.obj10374_onTap_runningActionsCount < 0) {
	window.obj10374_onTap_runningActionsCount = 0;
} else if (window.obj10374_onTap_runningActionsCount == 0) {
	obj10374_onTap_actionGroup1();
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
				window.obj10374_onTap_runningActionsCount = window.obj10374_onTap_runningActionsCount - 1;
if (window.obj10374_onTap_runningActionsCount < 0) {
	window.obj10374_onTap_runningActionsCount = 0;
} else if (window.obj10374_onTap_runningActionsCount == 0) {
	obj10374_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10374_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10374_onTap_activeActionGroupIndex = -1;
		$("#obj10374").trigger("obj10374_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10374) {
				console.warn("de-queueing event obj10374." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10374").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10374_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_10377();
function playAudioFile_10377() {
	window.obj10374_onTap_runningActionsCount = obj10374_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10377")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10377");
			$("#obj_audio_playSoundFile10377").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10374_onTap_runningActionsCount = window.obj10374_onTap_runningActionsCount - 1;
if (window.obj10374_onTap_runningActionsCount < 0) {
	window.obj10374_onTap_runningActionsCount = 0;
} else if (window.obj10374_onTap_runningActionsCount == 0) {
	obj10374_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10374_onTap_runningActionsCount = window.obj10374_onTap_runningActionsCount - 1;
if (window.obj10374_onTap_runningActionsCount < 0) {
	window.obj10374_onTap_runningActionsCount = 0;
} else if (window.obj10374_onTap_runningActionsCount == 0) {
	obj10374_onTap_actionGroup2();
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
				window.obj10374_onTap_runningActionsCount = window.obj10374_onTap_runningActionsCount - 1;
if (window.obj10374_onTap_runningActionsCount < 0) {
	window.obj10374_onTap_runningActionsCount = 0;
} else if (window.obj10374_onTap_runningActionsCount == 0) {
	obj10374_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj10374_onTap_runningActionsCount = window.obj10374_onTap_runningActionsCount - 1;
if (window.obj10374_onTap_runningActionsCount < 0) {
	window.obj10374_onTap_runningActionsCount = 0;
} else if (window.obj10374_onTap_runningActionsCount == 0) {
	obj10374_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj10374_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10374_onTap_activeActionGroupIndex = -1;
		$("#obj10374").trigger("obj10374_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10374) {
				console.warn("de-queueing event obj10374." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10374").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10374_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj10385 
hide_10378();
function hide_10378() {
	var selector = "#obj10385";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10374_onTap_runningActionsCount = obj10374_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10374_onTap_runningActionsCount = window.obj10374_onTap_runningActionsCount - 1;
if (window.obj10374_onTap_runningActionsCount < 0) {
	window.obj10374_onTap_runningActionsCount = 0;
} else if (window.obj10374_onTap_runningActionsCount == 0) {
	obj10374_onTap_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10378(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10374_onTap_runningActionsCount = window.obj10374_onTap_runningActionsCount - 1;
if (window.obj10374_onTap_runningActionsCount < 0) {
	window.obj10374_onTap_runningActionsCount = 0;
} else if (window.obj10374_onTap_runningActionsCount == 0) {
	obj10374_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10374_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10374_onTap_activeActionGroupIndex = -1;
		$("#obj10374").trigger("obj10374_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10374) {
				console.warn("de-queueing event obj10374." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10374").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10374_onTap_activeActionGroupIndex = 3;
	






















};
obj10379_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10379_onTap_activeActionGroupIndex = -1;
		$("#obj10379").trigger("obj10379_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10379) {
				console.warn("de-queueing event obj10379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10379_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10385
(function(){
	window.obj10379_onTap_runningActionsCount = obj10379_onTap_runningActionsCount + 1;

	var selector = "#obj10385";
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
					window.obj10379_onTap_runningActionsCount = window.obj10379_onTap_runningActionsCount - 1;
if (window.obj10379_onTap_runningActionsCount < 0) {
	window.obj10379_onTap_runningActionsCount = 0;
} else if (window.obj10379_onTap_runningActionsCount == 0) {
	obj10379_onTap_actionGroup1();
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
				window.obj10379_onTap_runningActionsCount = window.obj10379_onTap_runningActionsCount - 1;
if (window.obj10379_onTap_runningActionsCount < 0) {
	window.obj10379_onTap_runningActionsCount = 0;
} else if (window.obj10379_onTap_runningActionsCount == 0) {
	obj10379_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10379_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10379_onTap_activeActionGroupIndex = -1;
		$("#obj10379").trigger("obj10379_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10379) {
				console.warn("de-queueing event obj10379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10379_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10387 
hide_10382();
function hide_10382() {
	var selector = "#obj10387";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10379_onTap_runningActionsCount = obj10379_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10379_onTap_runningActionsCount = window.obj10379_onTap_runningActionsCount - 1;
if (window.obj10379_onTap_runningActionsCount < 0) {
	window.obj10379_onTap_runningActionsCount = 0;
} else if (window.obj10379_onTap_runningActionsCount == 0) {
	obj10379_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10382(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10379_onTap_runningActionsCount = window.obj10379_onTap_runningActionsCount - 1;
if (window.obj10379_onTap_runningActionsCount < 0) {
	window.obj10379_onTap_runningActionsCount = 0;
} else if (window.obj10379_onTap_runningActionsCount == 0) {
	obj10379_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10379_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10379_onTap_activeActionGroupIndex = -1;
		$("#obj10379").trigger("obj10379_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10379) {
				console.warn("de-queueing event obj10379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10379_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10383();
function playAudioFile_10383() {
	window.obj10379_onTap_runningActionsCount = obj10379_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10383")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10383");
			$("#obj_audio_playSoundFile10383").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10379_onTap_runningActionsCount = window.obj10379_onTap_runningActionsCount - 1;
if (window.obj10379_onTap_runningActionsCount < 0) {
	window.obj10379_onTap_runningActionsCount = 0;
} else if (window.obj10379_onTap_runningActionsCount == 0) {
	obj10379_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10379_onTap_runningActionsCount = window.obj10379_onTap_runningActionsCount - 1;
if (window.obj10379_onTap_runningActionsCount < 0) {
	window.obj10379_onTap_runningActionsCount = 0;
} else if (window.obj10379_onTap_runningActionsCount == 0) {
	obj10379_onTap_actionGroup3();
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
				window.obj10379_onTap_runningActionsCount = window.obj10379_onTap_runningActionsCount - 1;
if (window.obj10379_onTap_runningActionsCount < 0) {
	window.obj10379_onTap_runningActionsCount = 0;
} else if (window.obj10379_onTap_runningActionsCount == 0) {
	obj10379_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10379_onTap_runningActionsCount = window.obj10379_onTap_runningActionsCount - 1;
if (window.obj10379_onTap_runningActionsCount < 0) {
	window.obj10379_onTap_runningActionsCount = 0;
} else if (window.obj10379_onTap_runningActionsCount == 0) {
	obj10379_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10379_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10379_onTap_activeActionGroupIndex = -1;
		$("#obj10379").trigger("obj10379_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10379) {
				console.warn("de-queueing event obj10379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10379_onTap_activeActionGroupIndex = 3;
	






















};
obj10299_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10299_onTap_activeActionGroupIndex = -1;
		$("#obj10299").trigger("obj10299_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10299) {
				console.warn("de-queueing event obj10299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10299_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10312
(function(){
	window.obj10299_onTap_runningActionsCount = obj10299_onTap_runningActionsCount + 1;

	var selector = "#obj10312";
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
					window.obj10299_onTap_runningActionsCount = window.obj10299_onTap_runningActionsCount - 1;
if (window.obj10299_onTap_runningActionsCount < 0) {
	window.obj10299_onTap_runningActionsCount = 0;
} else if (window.obj10299_onTap_runningActionsCount == 0) {
	obj10299_onTap_actionGroup1();
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
				window.obj10299_onTap_runningActionsCount = window.obj10299_onTap_runningActionsCount - 1;
if (window.obj10299_onTap_runningActionsCount < 0) {
	window.obj10299_onTap_runningActionsCount = 0;
} else if (window.obj10299_onTap_runningActionsCount == 0) {
	obj10299_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10299_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10299_onTap_activeActionGroupIndex = -1;
		$("#obj10299").trigger("obj10299_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10299) {
				console.warn("de-queueing event obj10299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10299_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_10302();
function playAudioFile_10302() {
	window.obj10299_onTap_runningActionsCount = obj10299_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10302")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10302");
			$("#obj_audio_playSoundFile10302").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10299_onTap_runningActionsCount = window.obj10299_onTap_runningActionsCount - 1;
if (window.obj10299_onTap_runningActionsCount < 0) {
	window.obj10299_onTap_runningActionsCount = 0;
} else if (window.obj10299_onTap_runningActionsCount == 0) {
	obj10299_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10299_onTap_runningActionsCount = window.obj10299_onTap_runningActionsCount - 1;
if (window.obj10299_onTap_runningActionsCount < 0) {
	window.obj10299_onTap_runningActionsCount = 0;
} else if (window.obj10299_onTap_runningActionsCount == 0) {
	obj10299_onTap_actionGroup2();
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
				window.obj10299_onTap_runningActionsCount = window.obj10299_onTap_runningActionsCount - 1;
if (window.obj10299_onTap_runningActionsCount < 0) {
	window.obj10299_onTap_runningActionsCount = 0;
} else if (window.obj10299_onTap_runningActionsCount == 0) {
	obj10299_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj10299_onTap_runningActionsCount = window.obj10299_onTap_runningActionsCount - 1;
if (window.obj10299_onTap_runningActionsCount < 0) {
	window.obj10299_onTap_runningActionsCount = 0;
} else if (window.obj10299_onTap_runningActionsCount == 0) {
	obj10299_onTap_actionGroup2();
}
		}
	}
	
	
	
}



















};
obj10299_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10299_onTap_activeActionGroupIndex = -1;
		$("#obj10299").trigger("obj10299_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10299) {
				console.warn("de-queueing event obj10299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10299_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj10310 
hide_10303();
function hide_10303() {
	var selector = "#obj10310";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10299_onTap_runningActionsCount = obj10299_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10299_onTap_runningActionsCount = window.obj10299_onTap_runningActionsCount - 1;
if (window.obj10299_onTap_runningActionsCount < 0) {
	window.obj10299_onTap_runningActionsCount = 0;
} else if (window.obj10299_onTap_runningActionsCount == 0) {
	obj10299_onTap_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10303(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10299_onTap_runningActionsCount = window.obj10299_onTap_runningActionsCount - 1;
if (window.obj10299_onTap_runningActionsCount < 0) {
	window.obj10299_onTap_runningActionsCount = 0;
} else if (window.obj10299_onTap_runningActionsCount == 0) {
	obj10299_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10299_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10299_onTap_activeActionGroupIndex = -1;
		$("#obj10299").trigger("obj10299_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10299) {
				console.warn("de-queueing event obj10299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10299_onTap_activeActionGroupIndex = 3;
	






















};
obj10304_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10304_onTap_activeActionGroupIndex = -1;
		$("#obj10304").trigger("obj10304_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10304) {
				console.warn("de-queueing event obj10304." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10304").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10304_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj10310
(function(){
	window.obj10304_onTap_runningActionsCount = obj10304_onTap_runningActionsCount + 1;

	var selector = "#obj10310";
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
					window.obj10304_onTap_runningActionsCount = window.obj10304_onTap_runningActionsCount - 1;
if (window.obj10304_onTap_runningActionsCount < 0) {
	window.obj10304_onTap_runningActionsCount = 0;
} else if (window.obj10304_onTap_runningActionsCount == 0) {
	obj10304_onTap_actionGroup1();
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
				window.obj10304_onTap_runningActionsCount = window.obj10304_onTap_runningActionsCount - 1;
if (window.obj10304_onTap_runningActionsCount < 0) {
	window.obj10304_onTap_runningActionsCount = 0;
} else if (window.obj10304_onTap_runningActionsCount == 0) {
	obj10304_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj10304_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10304_onTap_activeActionGroupIndex = -1;
		$("#obj10304").trigger("obj10304_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10304) {
				console.warn("de-queueing event obj10304." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10304").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10304_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj10312 
hide_10307();
function hide_10307() {
	var selector = "#obj10312";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj10304_onTap_runningActionsCount = obj10304_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj10304_onTap_runningActionsCount = window.obj10304_onTap_runningActionsCount - 1;
if (window.obj10304_onTap_runningActionsCount < 0) {
	window.obj10304_onTap_runningActionsCount = 0;
} else if (window.obj10304_onTap_runningActionsCount == 0) {
	obj10304_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_10307(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj10304_onTap_runningActionsCount = window.obj10304_onTap_runningActionsCount - 1;
if (window.obj10304_onTap_runningActionsCount < 0) {
	window.obj10304_onTap_runningActionsCount = 0;
} else if (window.obj10304_onTap_runningActionsCount == 0) {
	obj10304_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}





















};
obj10304_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10304_onTap_activeActionGroupIndex = -1;
		$("#obj10304").trigger("obj10304_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10304) {
				console.warn("de-queueing event obj10304." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10304").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10304_onTap_activeActionGroupIndex = 2;
	






//	action: playAudioFile
playAudioFile_10308();
function playAudioFile_10308() {
	window.obj10304_onTap_runningActionsCount = obj10304_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile10308")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile10308");
			$("#obj_audio_playSoundFile10308").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj10304_onTap_runningActionsCount = window.obj10304_onTap_runningActionsCount - 1;
if (window.obj10304_onTap_runningActionsCount < 0) {
	window.obj10304_onTap_runningActionsCount = 0;
} else if (window.obj10304_onTap_runningActionsCount == 0) {
	obj10304_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj10304_onTap_runningActionsCount = window.obj10304_onTap_runningActionsCount - 1;
if (window.obj10304_onTap_runningActionsCount < 0) {
	window.obj10304_onTap_runningActionsCount = 0;
} else if (window.obj10304_onTap_runningActionsCount == 0) {
	obj10304_onTap_actionGroup3();
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
				window.obj10304_onTap_runningActionsCount = window.obj10304_onTap_runningActionsCount - 1;
if (window.obj10304_onTap_runningActionsCount < 0) {
	window.obj10304_onTap_runningActionsCount = 0;
} else if (window.obj10304_onTap_runningActionsCount == 0) {
	obj10304_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj10304_onTap_runningActionsCount = window.obj10304_onTap_runningActionsCount - 1;
if (window.obj10304_onTap_runningActionsCount < 0) {
	window.obj10304_onTap_runningActionsCount = 0;
} else if (window.obj10304_onTap_runningActionsCount == 0) {
	obj10304_onTap_actionGroup3();
}
		}
	}
	
	
	
}



















};
obj10304_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10304_onTap_activeActionGroupIndex = -1;
		$("#obj10304").trigger("obj10304_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10304) {
				console.warn("de-queueing event obj10304." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10304").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10304_onTap_activeActionGroupIndex = 3;
	






















};
obj10252_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10252_onTap_activeActionGroupIndex = -1;
		$("#obj10252").trigger("obj10252_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10252) {
				console.warn("de-queueing event obj10252." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10252").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10252_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_10256();
function runjs_10256() {
	window.obj10252_onTap_runningActionsCount = obj10252_onTap_runningActionsCount + 1;

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
		window.obj10252_onTap_runningActionsCount = window.obj10252_onTap_runningActionsCount - 1;
if (window.obj10252_onTap_runningActionsCount < 0) {
	window.obj10252_onTap_runningActionsCount = 0;
} else if (window.obj10252_onTap_runningActionsCount == 0) {
	obj10252_onTap_actionGroup1();
}
	}, 1);
}







};
obj10252_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10252_onTap_activeActionGroupIndex = -1;
		$("#obj10252").trigger("obj10252_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10252) {
				console.warn("de-queueing event obj10252." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10252").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10252_onTap_activeActionGroupIndex = 1;
	






















};
obj10271_SCEventReadAloudStarted_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10271_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj10271").trigger("obj10271_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10271) {
				console.warn("de-queueing event obj10271." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10271").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10271_SCEventReadAloudStarted_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj10271 
switchImage_10275();
function switchImage_10275() {
	window.obj10271_SCEventReadAloudStarted_runningActionsCount = obj10271_SCEventReadAloudStarted_runningActionsCount + 1;

	var targetObjectId = "#obj10271";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj10271_img";
	var fromImagePath = "../images/obj10271_image.png";
	var toImagePath = "../images/switch35_to.png";
	var switchHelperId = "switchHelper335"
	var switchHelperRef = "#switchHelper335"
	var switchId = "335";
	var toSwitchId = "335";
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
				window.obj10271_SCEventReadAloudStarted_runningActionsCount = window.obj10271_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj10271_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj10271_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj10271_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj10271_SCEventReadAloudStarted_actionGroup1();
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
obj10271_SCEventReadAloudStarted_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10271_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj10271").trigger("obj10271_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10271) {
				console.warn("de-queueing event obj10271." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10271").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10271_SCEventReadAloudStarted_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_10276();
function runjs_10276() {
	window.obj10271_SCEventReadAloudStarted_runningActionsCount = obj10271_SCEventReadAloudStarted_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over Pressed');
}
	
	setTimeout(function() {
		window.obj10271_SCEventReadAloudStarted_runningActionsCount = window.obj10271_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj10271_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj10271_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj10271_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj10271_SCEventReadAloudStarted_actionGroup2();
}
	}, 1);
}







};
obj10271_SCEventReadAloudStarted_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10271_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj10271").trigger("obj10271_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10271) {
				console.warn("de-queueing event obj10271." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10271").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10271_SCEventReadAloudStarted_activeActionGroupIndex = 2;
	






















};
obj10271_SCEventReadAloudStopped_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10271_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj10271").trigger("obj10271_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10271) {
				console.warn("de-queueing event obj10271." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10271").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10271_SCEventReadAloudStopped_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj10271 
switchImage_10281();
function switchImage_10281() {
	window.obj10271_SCEventReadAloudStopped_runningActionsCount = obj10271_SCEventReadAloudStopped_runningActionsCount + 1;

	var targetObjectId = "#obj10271";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj10271_img";
	var fromImagePath = "../images/obj10271_image.png";
	var toImagePath = "../images/obj10271_image.png";
	var switchHelperId = "switchHelper336"
	var switchHelperRef = "#switchHelper336"
	var switchId = "336";
	var toSwitchId = "336";
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
				window.obj10271_SCEventReadAloudStopped_runningActionsCount = window.obj10271_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj10271_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj10271_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj10271_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj10271_SCEventReadAloudStopped_actionGroup1();
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
obj10271_SCEventReadAloudStopped_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10271_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj10271").trigger("obj10271_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10271) {
				console.warn("de-queueing event obj10271." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10271").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10271_SCEventReadAloudStopped_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_10282();
function runjs_10282() {
	window.obj10271_SCEventReadAloudStopped_runningActionsCount = obj10271_SCEventReadAloudStopped_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over');
}
	
	setTimeout(function() {
		window.obj10271_SCEventReadAloudStopped_runningActionsCount = window.obj10271_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj10271_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj10271_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj10271_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj10271_SCEventReadAloudStopped_actionGroup2();
}
	}, 1);
}







};
obj10271_SCEventReadAloudStopped_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10271_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj10271").trigger("obj10271_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10271) {
				console.warn("de-queueing event obj10271." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10271").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10271_SCEventReadAloudStopped_activeActionGroupIndex = 2;
	






















};
obj10242_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10242_onTap_activeActionGroupIndex = -1;
		$("#obj10242").trigger("obj10242_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10242) {
				console.warn("de-queueing event obj10242." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10242").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10242_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_10244();
function runjs_10244() {
	window.obj10242_onTap_runningActionsCount = obj10242_onTap_runningActionsCount + 1;

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
		window.obj10242_onTap_runningActionsCount = window.obj10242_onTap_runningActionsCount - 1;
if (window.obj10242_onTap_runningActionsCount < 0) {
	window.obj10242_onTap_runningActionsCount = 0;
} else if (window.obj10242_onTap_runningActionsCount == 0) {
	obj10242_onTap_actionGroup1();
}
	}, 1);
}







};
obj10242_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10242_onTap_activeActionGroupIndex = -1;
		$("#obj10242").trigger("obj10242_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10242) {
				console.warn("de-queueing event obj10242." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10242").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10242_onTap_activeActionGroupIndex = 1;
	






















};
obj10267_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10267_onTap_activeActionGroupIndex = -1;
		$("#obj10267").trigger("obj10267_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10267) {
				console.warn("de-queueing event obj10267." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10267").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10267_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj10267 
switchImage_10269();
function switchImage_10269() {
	window.obj10267_onTap_runningActionsCount = obj10267_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj10267";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj10267_img";
	var fromImagePath = "../images/obj10267_image.png";
	var toImagePath = "../images/switch37_to.png";
	var switchHelperId = "switchHelper337"
	var switchHelperRef = "#switchHelper337"
	var switchId = "337";
	var toSwitchId = "337";
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
				window.obj10267_onTap_runningActionsCount = window.obj10267_onTap_runningActionsCount - 1;
if (window.obj10267_onTap_runningActionsCount < 0) {
	window.obj10267_onTap_runningActionsCount = 0;
} else if (window.obj10267_onTap_runningActionsCount == 0) {
	obj10267_onTap_actionGroup1();
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
obj10267_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10267_onTap_activeActionGroupIndex = -1;
		$("#obj10267").trigger("obj10267_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10267) {
				console.warn("de-queueing event obj10267." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10267").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10267_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_10270();
function runjs_10270() {
	window.obj10267_onTap_runningActionsCount = obj10267_onTap_runningActionsCount + 1;

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
		window.obj10267_onTap_runningActionsCount = window.obj10267_onTap_runningActionsCount - 1;
if (window.obj10267_onTap_runningActionsCount < 0) {
	window.obj10267_onTap_runningActionsCount = 0;
} else if (window.obj10267_onTap_runningActionsCount == 0) {
	obj10267_onTap_actionGroup2();
}
	}, 1);
}







};
obj10267_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10267_onTap_activeActionGroupIndex = -1;
		$("#obj10267").trigger("obj10267_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10267) {
				console.warn("de-queueing event obj10267." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10267").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10267_onTap_activeActionGroupIndex = 2;
	






















};
obj10264_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10264_onTap_activeActionGroupIndex = -1;
		$("#obj10264").trigger("obj10264_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10264) {
				console.warn("de-queueing event obj10264." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10264").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10264_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_10266();
function goToPage_10266() {
	window.obj10264_onTap_runningActionsCount = obj10264_onTap_runningActionsCount + 1;
	$("#anchor338")[0].click();
	window.obj10264_onTap_runningActionsCount = window.obj10264_onTap_runningActionsCount - 1;
if (window.obj10264_onTap_runningActionsCount < 0) {
	window.obj10264_onTap_runningActionsCount = 0;
} else if (window.obj10264_onTap_runningActionsCount == 0) {
	obj10264_onTap_actionGroup1();
}
}





















};
obj10264_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10264_onTap_activeActionGroupIndex = -1;
		$("#obj10264").trigger("obj10264_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10264) {
				console.warn("de-queueing event obj10264." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10264").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10264_onTap_activeActionGroupIndex = 1;
	






















};
obj10249_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10249_onTap_activeActionGroupIndex = -1;
		$("#obj10249").trigger("obj10249_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10249) {
				console.warn("de-queueing event obj10249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10249_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_10251();
function goToPage_10251() {
	window.obj10249_onTap_runningActionsCount = obj10249_onTap_runningActionsCount + 1;
	$("#anchor339")[0].click();
	window.obj10249_onTap_runningActionsCount = window.obj10249_onTap_runningActionsCount - 1;
if (window.obj10249_onTap_runningActionsCount < 0) {
	window.obj10249_onTap_runningActionsCount = 0;
} else if (window.obj10249_onTap_runningActionsCount == 0) {
	obj10249_onTap_actionGroup1();
}
}





















};
obj10249_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10249_onTap_activeActionGroupIndex = -1;
		$("#obj10249").trigger("obj10249_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10249) {
				console.warn("de-queueing event obj10249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10249_onTap_activeActionGroupIndex = 1;
	






















};
obj10233_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10233_onTap_activeActionGroupIndex = -1;
		$("#obj10233").trigger("obj10233_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10233) {
				console.warn("de-queueing event obj10233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10233_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_10236();
function runjs_10236() {
	window.obj10233_onTap_runningActionsCount = obj10233_onTap_runningActionsCount + 1;

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
		window.obj10233_onTap_runningActionsCount = window.obj10233_onTap_runningActionsCount - 1;
if (window.obj10233_onTap_runningActionsCount < 0) {
	window.obj10233_onTap_runningActionsCount = 0;
} else if (window.obj10233_onTap_runningActionsCount == 0) {
	obj10233_onTap_actionGroup1();
}
	}, 1);
}







};
obj10233_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10233_onTap_activeActionGroupIndex = -1;
		$("#obj10233").trigger("obj10233_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10233) {
				console.warn("de-queueing event obj10233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10233_onTap_activeActionGroupIndex = 1;
	






















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



























































































































/*
 *
 *   obj10359: Event Touch Down
 *
 */
$("#obj10359").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10359_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10359_onTap is still running");
	return;
}
var obj10359_onTap_runningActionsCount = 0;
var obj10359_onTap_loopCount = 0;
obj10359_onTap_actionGroup0();
});










/*
 *
 *   obj10364: Event Touch Down
 *
 */
$("#obj10364").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10364_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10364_onTap is still running");
	return;
}
var obj10364_onTap_runningActionsCount = 0;
var obj10364_onTap_loopCount = 0;
obj10364_onTap_actionGroup0();
});










/*
 *
 *   obj10354: Event Touch Down
 *
 */
$("#obj10354").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10354_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10354_onTap is still running");
	return;
}
var obj10354_onTap_runningActionsCount = 0;
var obj10354_onTap_loopCount = 0;
obj10354_onTap_actionGroup0();
});










/*
 *
 *   obj10348: Event Touch Down
 *
 */
$("#obj10348").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10348_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10348_onTap is still running");
	return;
}
var obj10348_onTap_runningActionsCount = 0;
var obj10348_onTap_loopCount = 0;
obj10348_onTap_actionGroup0();
});










/*
 *
 *   obj10339: Event Touch Down
 *
 */
$("#obj10339").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10339_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10339_onTap is still running");
	return;
}
var obj10339_onTap_runningActionsCount = 0;
var obj10339_onTap_loopCount = 0;
obj10339_onTap_actionGroup0();
});










/*
 *
 *   obj10333: Event Touch Down
 *
 */
$("#obj10333").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10333_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10333_onTap is still running");
	return;
}
var obj10333_onTap_runningActionsCount = 0;
var obj10333_onTap_loopCount = 0;
obj10333_onTap_actionGroup0();
});




































































































/*
 *
 *   obj10324: Event Touch Down
 *
 */
$("#obj10324").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10324_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10324_onTap is still running");
	return;
}
var obj10324_onTap_runningActionsCount = 0;
var obj10324_onTap_loopCount = 0;
obj10324_onTap_actionGroup0();
});










/*
 *
 *   obj10318: Event Touch Down
 *
 */
$("#obj10318").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10318_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10318_onTap is still running");
	return;
}
var obj10318_onTap_runningActionsCount = 0;
var obj10318_onTap_loopCount = 0;
obj10318_onTap_actionGroup0();
});










/*
 *
 *   obj10374: Event Touch Down
 *
 */
$("#obj10374").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10374_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10374_onTap is still running");
	return;
}
var obj10374_onTap_runningActionsCount = 0;
var obj10374_onTap_loopCount = 0;
obj10374_onTap_actionGroup0();
});










/*
 *
 *   obj10379: Event Touch Down
 *
 */
$("#obj10379").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10379_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10379_onTap is still running");
	return;
}
var obj10379_onTap_runningActionsCount = 0;
var obj10379_onTap_loopCount = 0;
obj10379_onTap_actionGroup0();
});










/*
 *
 *   obj10299: Event Touch Down
 *
 */
$("#obj10299").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10299_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10299_onTap is still running");
	return;
}
var obj10299_onTap_runningActionsCount = 0;
var obj10299_onTap_loopCount = 0;
obj10299_onTap_actionGroup0();
});










/*
 *
 *   obj10304: Event Touch Down
 *
 */
$("#obj10304").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10304_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10304_onTap is still running");
	return;
}
var obj10304_onTap_runningActionsCount = 0;
var obj10304_onTap_loopCount = 0;
obj10304_onTap_actionGroup0();
});


















































/*
 *
 *   obj10252: Event Touch Down
 *
 */
$("#obj10252").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10252_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10252_onTap is still running");
	return;
}
var obj10252_onTap_runningActionsCount = 0;
var obj10252_onTap_loopCount = 0;
obj10252_onTap_actionGroup0();
});
























/*
 *
 *   obj10271: Event SCEventReadAloudStarted
 *
 */
$("#obj10271").bind("SCEventReadAloudStarted", function(event) {
	if (window.obj10271_SCEventReadAloudStarted_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10271_SCEventReadAloudStarted is still running");
	return;
}
var obj10271_SCEventReadAloudStarted_runningActionsCount = 0;
var obj10271_SCEventReadAloudStarted_loopCount = 0;
obj10271_SCEventReadAloudStarted_actionGroup0();
});
/*
 *
 *   obj10271: Event SCEventReadAloudStopped
 *
 */
$("#obj10271").bind("SCEventReadAloudStopped", function(event) {
	if (window.obj10271_SCEventReadAloudStopped_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10271_SCEventReadAloudStopped is still running");
	return;
}
var obj10271_SCEventReadAloudStopped_runningActionsCount = 0;
var obj10271_SCEventReadAloudStopped_loopCount = 0;
obj10271_SCEventReadAloudStopped_actionGroup0();
});





/*
 *
 *   obj10242: Event Touch Down
 *
 */
$("#obj10242").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10242_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10242_onTap is still running");
	return;
}
var obj10242_onTap_runningActionsCount = 0;
var obj10242_onTap_loopCount = 0;
obj10242_onTap_actionGroup0();
});










/*
 *
 *   obj10267: Event Touch Down
 *
 */
$("#obj10267").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10267_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10267_onTap is still running");
	return;
}
var obj10267_onTap_runningActionsCount = 0;
var obj10267_onTap_loopCount = 0;
obj10267_onTap_actionGroup0();
});










/*
 *
 *   obj10264: Event Touch Down
 *
 */
$("#obj10264").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10264_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10264_onTap is still running");
	return;
}
var obj10264_onTap_runningActionsCount = 0;
var obj10264_onTap_loopCount = 0;
obj10264_onTap_actionGroup0();
});










/*
 *
 *   obj10249: Event Touch Down
 *
 */
$("#obj10249").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10249_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10249_onTap is still running");
	return;
}
var obj10249_onTap_runningActionsCount = 0;
var obj10249_onTap_loopCount = 0;
obj10249_onTap_actionGroup0();
});










/*
 *
 *   obj10233: Event Touch Down
 *
 */
$("#obj10233").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10233_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10233_onTap is still running");
	return;
}
var obj10233_onTap_runningActionsCount = 0;
var obj10233_onTap_loopCount = 0;
obj10233_onTap_actionGroup0();
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
	
$("#obj9409").trigger('SCEventShow');
$("#obj4348").trigger('SCEventShow');
$("#obj4602").trigger('SCEventShow');
$("#obj4600").trigger('SCEventShow');
$("#obj4598").trigger('SCEventShow');
$("#obj10359").trigger('SCEventShow');
$("#obj10364").trigger('SCEventShow');
$("#obj10354").trigger('SCEventShow');
$("#obj10348").trigger('SCEventShow');
$("#obj10339").trigger('SCEventShow');
$("#obj10333").trigger('SCEventShow');
$("#obj4604").trigger('SCEventShow');
$("#obj4608").trigger('SCEventShow');
$("#obj4606").trigger('SCEventShow');
$("#obj10324").trigger('SCEventShow');
$("#obj10318").trigger('SCEventShow');
$("#obj10374").trigger('SCEventShow');
$("#obj10379").trigger('SCEventShow');
$("#obj10299").trigger('SCEventShow');
$("#obj10304").trigger('SCEventShow');
$("#obj4996").trigger('SCEventShow');
$("#obj5131").trigger('SCEventShow');
$("#obj10271").trigger('SCEventShow');
$("#obj10242").trigger('SCEventShow');
$("#obj10264").trigger('SCEventShow');
$("#obj10249").trigger('SCEventShow');
$("#obj10233").trigger('SCEventShow');
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