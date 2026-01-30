pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serophero - Unit 3";
pubcoder.page.id = pubcoder.page.id || 3818;
pubcoder.page.title = pubcoder.page.title || "18";
pubcoder.page.number = pubcoder.page.number || 18;
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
var obj4417_onTap_activeActionGroupIndex = -1;
var obj4417_onTap_runningActionsCount = 0;
var obj4417_onTap_loopCount = 0;
var obj4419_onTap_activeActionGroupIndex = -1;
var obj4419_onTap_runningActionsCount = 0;
var obj4419_onTap_loopCount = 0;
var obj4413_onTap_activeActionGroupIndex = -1;
var obj4413_onTap_runningActionsCount = 0;
var obj4413_onTap_loopCount = 0;
var obj4415_onTap_activeActionGroupIndex = -1;
var obj4415_onTap_runningActionsCount = 0;
var obj4415_onTap_loopCount = 0;
var obj4427_onTap_activeActionGroupIndex = -1;
var obj4427_onTap_runningActionsCount = 0;
var obj4427_onTap_loopCount = 0;
var obj4425_onTap_activeActionGroupIndex = -1;
var obj4425_onTap_runningActionsCount = 0;
var obj4425_onTap_loopCount = 0;
var obj4421_onTap_activeActionGroupIndex = -1;
var obj4421_onTap_runningActionsCount = 0;
var obj4421_onTap_loopCount = 0;
var obj4423_onTap_activeActionGroupIndex = -1;
var obj4423_onTap_runningActionsCount = 0;
var obj4423_onTap_loopCount = 0;
var obj4435_onTap_activeActionGroupIndex = -1;
var obj4435_onTap_runningActionsCount = 0;
var obj4435_onTap_loopCount = 0;
var obj4429_onTap_activeActionGroupIndex = -1;
var obj4429_onTap_runningActionsCount = 0;
var obj4429_onTap_loopCount = 0;
var obj4431_onTap_activeActionGroupIndex = -1;
var obj4431_onTap_runningActionsCount = 0;
var obj4431_onTap_loopCount = 0;
var obj4433_onTap_activeActionGroupIndex = -1;
var obj4433_onTap_runningActionsCount = 0;
var obj4433_onTap_loopCount = 0;
var obj9869_onTap_activeActionGroupIndex = -1;
var obj9869_onTap_runningActionsCount = 0;
var obj9869_onTap_loopCount = 0;
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
		
obj4417_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4417_onTap_activeActionGroupIndex = -1;
		$("#obj4417").trigger("obj4417_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4417) {
				console.warn("de-queueing event obj4417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4417_onTap_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_5136();
function playAudioFile_5136() {
	window.obj4417_onTap_runningActionsCount = obj4417_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5136")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5136");
			$("#obj_audio_playSoundFile5136").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4417_onTap_runningActionsCount = window.obj4417_onTap_runningActionsCount - 1;
if (window.obj4417_onTap_runningActionsCount < 0) {
	window.obj4417_onTap_runningActionsCount = 0;
} else if (window.obj4417_onTap_runningActionsCount == 0) {
	obj4417_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4417_onTap_runningActionsCount = window.obj4417_onTap_runningActionsCount - 1;
if (window.obj4417_onTap_runningActionsCount < 0) {
	window.obj4417_onTap_runningActionsCount = 0;
} else if (window.obj4417_onTap_runningActionsCount == 0) {
	obj4417_onTap_actionGroup1();
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
				window.obj4417_onTap_runningActionsCount = window.obj4417_onTap_runningActionsCount - 1;
if (window.obj4417_onTap_runningActionsCount < 0) {
	window.obj4417_onTap_runningActionsCount = 0;
} else if (window.obj4417_onTap_runningActionsCount == 0) {
	obj4417_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj4417_onTap_runningActionsCount = window.obj4417_onTap_runningActionsCount - 1;
if (window.obj4417_onTap_runningActionsCount < 0) {
	window.obj4417_onTap_runningActionsCount = 0;
} else if (window.obj4417_onTap_runningActionsCount == 0) {
	obj4417_onTap_actionGroup1();
}
		}
	}
	
	
	
}



















};
obj4417_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4417_onTap_activeActionGroupIndex = -1;
		$("#obj4417").trigger("obj4417_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4417) {
				console.warn("de-queueing event obj4417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4417_onTap_activeActionGroupIndex = 1;
	






















};
obj4419_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4419_onTap_activeActionGroupIndex = -1;
		$("#obj4419").trigger("obj4419_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4419) {
				console.warn("de-queueing event obj4419." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4419").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4419_onTap_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_5137();
function playAudioFile_5137() {
	window.obj4419_onTap_runningActionsCount = obj4419_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5137")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5137");
			$("#obj_audio_playSoundFile5137").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4419_onTap_runningActionsCount = window.obj4419_onTap_runningActionsCount - 1;
if (window.obj4419_onTap_runningActionsCount < 0) {
	window.obj4419_onTap_runningActionsCount = 0;
} else if (window.obj4419_onTap_runningActionsCount == 0) {
	obj4419_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4419_onTap_runningActionsCount = window.obj4419_onTap_runningActionsCount - 1;
if (window.obj4419_onTap_runningActionsCount < 0) {
	window.obj4419_onTap_runningActionsCount = 0;
} else if (window.obj4419_onTap_runningActionsCount == 0) {
	obj4419_onTap_actionGroup1();
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
				window.obj4419_onTap_runningActionsCount = window.obj4419_onTap_runningActionsCount - 1;
if (window.obj4419_onTap_runningActionsCount < 0) {
	window.obj4419_onTap_runningActionsCount = 0;
} else if (window.obj4419_onTap_runningActionsCount == 0) {
	obj4419_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj4419_onTap_runningActionsCount = window.obj4419_onTap_runningActionsCount - 1;
if (window.obj4419_onTap_runningActionsCount < 0) {
	window.obj4419_onTap_runningActionsCount = 0;
} else if (window.obj4419_onTap_runningActionsCount == 0) {
	obj4419_onTap_actionGroup1();
}
		}
	}
	
	
	
}



















};
obj4419_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4419_onTap_activeActionGroupIndex = -1;
		$("#obj4419").trigger("obj4419_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4419) {
				console.warn("de-queueing event obj4419." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4419").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4419_onTap_activeActionGroupIndex = 1;
	






















};
obj4413_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4413_onTap_activeActionGroupIndex = -1;
		$("#obj4413").trigger("obj4413_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4413) {
				console.warn("de-queueing event obj4413." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4413").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4413_onTap_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_5134();
function playAudioFile_5134() {
	window.obj4413_onTap_runningActionsCount = obj4413_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5134")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5134");
			$("#obj_audio_playSoundFile5134").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4413_onTap_runningActionsCount = window.obj4413_onTap_runningActionsCount - 1;
if (window.obj4413_onTap_runningActionsCount < 0) {
	window.obj4413_onTap_runningActionsCount = 0;
} else if (window.obj4413_onTap_runningActionsCount == 0) {
	obj4413_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4413_onTap_runningActionsCount = window.obj4413_onTap_runningActionsCount - 1;
if (window.obj4413_onTap_runningActionsCount < 0) {
	window.obj4413_onTap_runningActionsCount = 0;
} else if (window.obj4413_onTap_runningActionsCount == 0) {
	obj4413_onTap_actionGroup1();
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
				window.obj4413_onTap_runningActionsCount = window.obj4413_onTap_runningActionsCount - 1;
if (window.obj4413_onTap_runningActionsCount < 0) {
	window.obj4413_onTap_runningActionsCount = 0;
} else if (window.obj4413_onTap_runningActionsCount == 0) {
	obj4413_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj4413_onTap_runningActionsCount = window.obj4413_onTap_runningActionsCount - 1;
if (window.obj4413_onTap_runningActionsCount < 0) {
	window.obj4413_onTap_runningActionsCount = 0;
} else if (window.obj4413_onTap_runningActionsCount == 0) {
	obj4413_onTap_actionGroup1();
}
		}
	}
	
	
	
}



















};
obj4413_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4413_onTap_activeActionGroupIndex = -1;
		$("#obj4413").trigger("obj4413_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4413) {
				console.warn("de-queueing event obj4413." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4413").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4413_onTap_activeActionGroupIndex = 1;
	






















};
obj4415_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4415_onTap_activeActionGroupIndex = -1;
		$("#obj4415").trigger("obj4415_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4415) {
				console.warn("de-queueing event obj4415." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4415").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4415_onTap_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_5135();
function playAudioFile_5135() {
	window.obj4415_onTap_runningActionsCount = obj4415_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5135")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5135");
			$("#obj_audio_playSoundFile5135").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4415_onTap_runningActionsCount = window.obj4415_onTap_runningActionsCount - 1;
if (window.obj4415_onTap_runningActionsCount < 0) {
	window.obj4415_onTap_runningActionsCount = 0;
} else if (window.obj4415_onTap_runningActionsCount == 0) {
	obj4415_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4415_onTap_runningActionsCount = window.obj4415_onTap_runningActionsCount - 1;
if (window.obj4415_onTap_runningActionsCount < 0) {
	window.obj4415_onTap_runningActionsCount = 0;
} else if (window.obj4415_onTap_runningActionsCount == 0) {
	obj4415_onTap_actionGroup1();
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
				window.obj4415_onTap_runningActionsCount = window.obj4415_onTap_runningActionsCount - 1;
if (window.obj4415_onTap_runningActionsCount < 0) {
	window.obj4415_onTap_runningActionsCount = 0;
} else if (window.obj4415_onTap_runningActionsCount == 0) {
	obj4415_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj4415_onTap_runningActionsCount = window.obj4415_onTap_runningActionsCount - 1;
if (window.obj4415_onTap_runningActionsCount < 0) {
	window.obj4415_onTap_runningActionsCount = 0;
} else if (window.obj4415_onTap_runningActionsCount == 0) {
	obj4415_onTap_actionGroup1();
}
		}
	}
	
	
	
}



















};
obj4415_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4415_onTap_activeActionGroupIndex = -1;
		$("#obj4415").trigger("obj4415_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4415) {
				console.warn("de-queueing event obj4415." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4415").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4415_onTap_activeActionGroupIndex = 1;
	






















};
obj4427_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4427_onTap_activeActionGroupIndex = -1;
		$("#obj4427").trigger("obj4427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4427) {
				console.warn("de-queueing event obj4427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4427_onTap_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_5141();
function playAudioFile_5141() {
	window.obj4427_onTap_runningActionsCount = obj4427_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5141")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5141");
			$("#obj_audio_playSoundFile5141").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4427_onTap_runningActionsCount = window.obj4427_onTap_runningActionsCount - 1;
if (window.obj4427_onTap_runningActionsCount < 0) {
	window.obj4427_onTap_runningActionsCount = 0;
} else if (window.obj4427_onTap_runningActionsCount == 0) {
	obj4427_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4427_onTap_runningActionsCount = window.obj4427_onTap_runningActionsCount - 1;
if (window.obj4427_onTap_runningActionsCount < 0) {
	window.obj4427_onTap_runningActionsCount = 0;
} else if (window.obj4427_onTap_runningActionsCount == 0) {
	obj4427_onTap_actionGroup1();
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
				window.obj4427_onTap_runningActionsCount = window.obj4427_onTap_runningActionsCount - 1;
if (window.obj4427_onTap_runningActionsCount < 0) {
	window.obj4427_onTap_runningActionsCount = 0;
} else if (window.obj4427_onTap_runningActionsCount == 0) {
	obj4427_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj4427_onTap_runningActionsCount = window.obj4427_onTap_runningActionsCount - 1;
if (window.obj4427_onTap_runningActionsCount < 0) {
	window.obj4427_onTap_runningActionsCount = 0;
} else if (window.obj4427_onTap_runningActionsCount == 0) {
	obj4427_onTap_actionGroup1();
}
		}
	}
	
	
	
}



















};
obj4427_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4427_onTap_activeActionGroupIndex = -1;
		$("#obj4427").trigger("obj4427_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4427) {
				console.warn("de-queueing event obj4427." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4427").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4427_onTap_activeActionGroupIndex = 1;
	






















};
obj4425_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4425_onTap_activeActionGroupIndex = -1;
		$("#obj4425").trigger("obj4425_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4425) {
				console.warn("de-queueing event obj4425." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4425").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4425_onTap_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_5140();
function playAudioFile_5140() {
	window.obj4425_onTap_runningActionsCount = obj4425_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5140")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5140");
			$("#obj_audio_playSoundFile5140").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4425_onTap_runningActionsCount = window.obj4425_onTap_runningActionsCount - 1;
if (window.obj4425_onTap_runningActionsCount < 0) {
	window.obj4425_onTap_runningActionsCount = 0;
} else if (window.obj4425_onTap_runningActionsCount == 0) {
	obj4425_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4425_onTap_runningActionsCount = window.obj4425_onTap_runningActionsCount - 1;
if (window.obj4425_onTap_runningActionsCount < 0) {
	window.obj4425_onTap_runningActionsCount = 0;
} else if (window.obj4425_onTap_runningActionsCount == 0) {
	obj4425_onTap_actionGroup1();
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
				window.obj4425_onTap_runningActionsCount = window.obj4425_onTap_runningActionsCount - 1;
if (window.obj4425_onTap_runningActionsCount < 0) {
	window.obj4425_onTap_runningActionsCount = 0;
} else if (window.obj4425_onTap_runningActionsCount == 0) {
	obj4425_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj4425_onTap_runningActionsCount = window.obj4425_onTap_runningActionsCount - 1;
if (window.obj4425_onTap_runningActionsCount < 0) {
	window.obj4425_onTap_runningActionsCount = 0;
} else if (window.obj4425_onTap_runningActionsCount == 0) {
	obj4425_onTap_actionGroup1();
}
		}
	}
	
	
	
}



















};
obj4425_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4425_onTap_activeActionGroupIndex = -1;
		$("#obj4425").trigger("obj4425_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4425) {
				console.warn("de-queueing event obj4425." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4425").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4425_onTap_activeActionGroupIndex = 1;
	






















};
obj4421_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4421_onTap_activeActionGroupIndex = -1;
		$("#obj4421").trigger("obj4421_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4421) {
				console.warn("de-queueing event obj4421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4421_onTap_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_5138();
function playAudioFile_5138() {
	window.obj4421_onTap_runningActionsCount = obj4421_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5138")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5138");
			$("#obj_audio_playSoundFile5138").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4421_onTap_runningActionsCount = window.obj4421_onTap_runningActionsCount - 1;
if (window.obj4421_onTap_runningActionsCount < 0) {
	window.obj4421_onTap_runningActionsCount = 0;
} else if (window.obj4421_onTap_runningActionsCount == 0) {
	obj4421_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4421_onTap_runningActionsCount = window.obj4421_onTap_runningActionsCount - 1;
if (window.obj4421_onTap_runningActionsCount < 0) {
	window.obj4421_onTap_runningActionsCount = 0;
} else if (window.obj4421_onTap_runningActionsCount == 0) {
	obj4421_onTap_actionGroup1();
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
				window.obj4421_onTap_runningActionsCount = window.obj4421_onTap_runningActionsCount - 1;
if (window.obj4421_onTap_runningActionsCount < 0) {
	window.obj4421_onTap_runningActionsCount = 0;
} else if (window.obj4421_onTap_runningActionsCount == 0) {
	obj4421_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj4421_onTap_runningActionsCount = window.obj4421_onTap_runningActionsCount - 1;
if (window.obj4421_onTap_runningActionsCount < 0) {
	window.obj4421_onTap_runningActionsCount = 0;
} else if (window.obj4421_onTap_runningActionsCount == 0) {
	obj4421_onTap_actionGroup1();
}
		}
	}
	
	
	
}



















};
obj4421_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4421_onTap_activeActionGroupIndex = -1;
		$("#obj4421").trigger("obj4421_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4421) {
				console.warn("de-queueing event obj4421." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4421").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4421_onTap_activeActionGroupIndex = 1;
	






















};
obj4423_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4423_onTap_activeActionGroupIndex = -1;
		$("#obj4423").trigger("obj4423_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4423) {
				console.warn("de-queueing event obj4423." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4423").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4423_onTap_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_5139();
function playAudioFile_5139() {
	window.obj4423_onTap_runningActionsCount = obj4423_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5139")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5139");
			$("#obj_audio_playSoundFile5139").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4423_onTap_runningActionsCount = window.obj4423_onTap_runningActionsCount - 1;
if (window.obj4423_onTap_runningActionsCount < 0) {
	window.obj4423_onTap_runningActionsCount = 0;
} else if (window.obj4423_onTap_runningActionsCount == 0) {
	obj4423_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4423_onTap_runningActionsCount = window.obj4423_onTap_runningActionsCount - 1;
if (window.obj4423_onTap_runningActionsCount < 0) {
	window.obj4423_onTap_runningActionsCount = 0;
} else if (window.obj4423_onTap_runningActionsCount == 0) {
	obj4423_onTap_actionGroup1();
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
				window.obj4423_onTap_runningActionsCount = window.obj4423_onTap_runningActionsCount - 1;
if (window.obj4423_onTap_runningActionsCount < 0) {
	window.obj4423_onTap_runningActionsCount = 0;
} else if (window.obj4423_onTap_runningActionsCount == 0) {
	obj4423_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj4423_onTap_runningActionsCount = window.obj4423_onTap_runningActionsCount - 1;
if (window.obj4423_onTap_runningActionsCount < 0) {
	window.obj4423_onTap_runningActionsCount = 0;
} else if (window.obj4423_onTap_runningActionsCount == 0) {
	obj4423_onTap_actionGroup1();
}
		}
	}
	
	
	
}



















};
obj4423_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4423_onTap_activeActionGroupIndex = -1;
		$("#obj4423").trigger("obj4423_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4423) {
				console.warn("de-queueing event obj4423." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4423").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4423_onTap_activeActionGroupIndex = 1;
	






















};
obj4435_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4435_onTap_activeActionGroupIndex = -1;
		$("#obj4435").trigger("obj4435_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4435) {
				console.warn("de-queueing event obj4435." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4435").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4435_onTap_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_5145();
function playAudioFile_5145() {
	window.obj4435_onTap_runningActionsCount = obj4435_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5145")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5145");
			$("#obj_audio_playSoundFile5145").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4435_onTap_runningActionsCount = window.obj4435_onTap_runningActionsCount - 1;
if (window.obj4435_onTap_runningActionsCount < 0) {
	window.obj4435_onTap_runningActionsCount = 0;
} else if (window.obj4435_onTap_runningActionsCount == 0) {
	obj4435_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4435_onTap_runningActionsCount = window.obj4435_onTap_runningActionsCount - 1;
if (window.obj4435_onTap_runningActionsCount < 0) {
	window.obj4435_onTap_runningActionsCount = 0;
} else if (window.obj4435_onTap_runningActionsCount == 0) {
	obj4435_onTap_actionGroup1();
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
				window.obj4435_onTap_runningActionsCount = window.obj4435_onTap_runningActionsCount - 1;
if (window.obj4435_onTap_runningActionsCount < 0) {
	window.obj4435_onTap_runningActionsCount = 0;
} else if (window.obj4435_onTap_runningActionsCount == 0) {
	obj4435_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj4435_onTap_runningActionsCount = window.obj4435_onTap_runningActionsCount - 1;
if (window.obj4435_onTap_runningActionsCount < 0) {
	window.obj4435_onTap_runningActionsCount = 0;
} else if (window.obj4435_onTap_runningActionsCount == 0) {
	obj4435_onTap_actionGroup1();
}
		}
	}
	
	
	
}



















};
obj4435_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4435_onTap_activeActionGroupIndex = -1;
		$("#obj4435").trigger("obj4435_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4435) {
				console.warn("de-queueing event obj4435." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4435").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4435_onTap_activeActionGroupIndex = 1;
	






















};
obj4429_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4429_onTap_activeActionGroupIndex = -1;
		$("#obj4429").trigger("obj4429_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4429) {
				console.warn("de-queueing event obj4429." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4429").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4429_onTap_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_5142();
function playAudioFile_5142() {
	window.obj4429_onTap_runningActionsCount = obj4429_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5142")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5142");
			$("#obj_audio_playSoundFile5142").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4429_onTap_runningActionsCount = window.obj4429_onTap_runningActionsCount - 1;
if (window.obj4429_onTap_runningActionsCount < 0) {
	window.obj4429_onTap_runningActionsCount = 0;
} else if (window.obj4429_onTap_runningActionsCount == 0) {
	obj4429_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4429_onTap_runningActionsCount = window.obj4429_onTap_runningActionsCount - 1;
if (window.obj4429_onTap_runningActionsCount < 0) {
	window.obj4429_onTap_runningActionsCount = 0;
} else if (window.obj4429_onTap_runningActionsCount == 0) {
	obj4429_onTap_actionGroup1();
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
				window.obj4429_onTap_runningActionsCount = window.obj4429_onTap_runningActionsCount - 1;
if (window.obj4429_onTap_runningActionsCount < 0) {
	window.obj4429_onTap_runningActionsCount = 0;
} else if (window.obj4429_onTap_runningActionsCount == 0) {
	obj4429_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj4429_onTap_runningActionsCount = window.obj4429_onTap_runningActionsCount - 1;
if (window.obj4429_onTap_runningActionsCount < 0) {
	window.obj4429_onTap_runningActionsCount = 0;
} else if (window.obj4429_onTap_runningActionsCount == 0) {
	obj4429_onTap_actionGroup1();
}
		}
	}
	
	
	
}



















};
obj4429_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4429_onTap_activeActionGroupIndex = -1;
		$("#obj4429").trigger("obj4429_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4429) {
				console.warn("de-queueing event obj4429." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4429").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4429_onTap_activeActionGroupIndex = 1;
	






















};
obj4431_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4431_onTap_activeActionGroupIndex = -1;
		$("#obj4431").trigger("obj4431_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4431) {
				console.warn("de-queueing event obj4431." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4431").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4431_onTap_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_5143();
function playAudioFile_5143() {
	window.obj4431_onTap_runningActionsCount = obj4431_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5143")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5143");
			$("#obj_audio_playSoundFile5143").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4431_onTap_runningActionsCount = window.obj4431_onTap_runningActionsCount - 1;
if (window.obj4431_onTap_runningActionsCount < 0) {
	window.obj4431_onTap_runningActionsCount = 0;
} else if (window.obj4431_onTap_runningActionsCount == 0) {
	obj4431_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4431_onTap_runningActionsCount = window.obj4431_onTap_runningActionsCount - 1;
if (window.obj4431_onTap_runningActionsCount < 0) {
	window.obj4431_onTap_runningActionsCount = 0;
} else if (window.obj4431_onTap_runningActionsCount == 0) {
	obj4431_onTap_actionGroup1();
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
				window.obj4431_onTap_runningActionsCount = window.obj4431_onTap_runningActionsCount - 1;
if (window.obj4431_onTap_runningActionsCount < 0) {
	window.obj4431_onTap_runningActionsCount = 0;
} else if (window.obj4431_onTap_runningActionsCount == 0) {
	obj4431_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj4431_onTap_runningActionsCount = window.obj4431_onTap_runningActionsCount - 1;
if (window.obj4431_onTap_runningActionsCount < 0) {
	window.obj4431_onTap_runningActionsCount = 0;
} else if (window.obj4431_onTap_runningActionsCount == 0) {
	obj4431_onTap_actionGroup1();
}
		}
	}
	
	
	
}



















};
obj4431_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4431_onTap_activeActionGroupIndex = -1;
		$("#obj4431").trigger("obj4431_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4431) {
				console.warn("de-queueing event obj4431." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4431").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4431_onTap_activeActionGroupIndex = 1;
	






















};
obj4433_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4433_onTap_activeActionGroupIndex = -1;
		$("#obj4433").trigger("obj4433_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4433) {
				console.warn("de-queueing event obj4433." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4433").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4433_onTap_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_5144();
function playAudioFile_5144() {
	window.obj4433_onTap_runningActionsCount = obj4433_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5144")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5144");
			$("#obj_audio_playSoundFile5144").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4433_onTap_runningActionsCount = window.obj4433_onTap_runningActionsCount - 1;
if (window.obj4433_onTap_runningActionsCount < 0) {
	window.obj4433_onTap_runningActionsCount = 0;
} else if (window.obj4433_onTap_runningActionsCount == 0) {
	obj4433_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4433_onTap_runningActionsCount = window.obj4433_onTap_runningActionsCount - 1;
if (window.obj4433_onTap_runningActionsCount < 0) {
	window.obj4433_onTap_runningActionsCount = 0;
} else if (window.obj4433_onTap_runningActionsCount == 0) {
	obj4433_onTap_actionGroup1();
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
				window.obj4433_onTap_runningActionsCount = window.obj4433_onTap_runningActionsCount - 1;
if (window.obj4433_onTap_runningActionsCount < 0) {
	window.obj4433_onTap_runningActionsCount = 0;
} else if (window.obj4433_onTap_runningActionsCount == 0) {
	obj4433_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj4433_onTap_runningActionsCount = window.obj4433_onTap_runningActionsCount - 1;
if (window.obj4433_onTap_runningActionsCount < 0) {
	window.obj4433_onTap_runningActionsCount = 0;
} else if (window.obj4433_onTap_runningActionsCount == 0) {
	obj4433_onTap_actionGroup1();
}
		}
	}
	
	
	
}



















};
obj4433_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4433_onTap_activeActionGroupIndex = -1;
		$("#obj4433").trigger("obj4433_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4433) {
				console.warn("de-queueing event obj4433." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4433").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4433_onTap_activeActionGroupIndex = 1;
	






















};
obj9869_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9869_onTap_activeActionGroupIndex = -1;
		$("#obj9869").trigger("obj9869_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9869) {
				console.warn("de-queueing event obj9869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9869_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_9873();
function runjs_9873() {
	window.obj9869_onTap_runningActionsCount = obj9869_onTap_runningActionsCount + 1;

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
		window.obj9869_onTap_runningActionsCount = window.obj9869_onTap_runningActionsCount - 1;
if (window.obj9869_onTap_runningActionsCount < 0) {
	window.obj9869_onTap_runningActionsCount = 0;
} else if (window.obj9869_onTap_runningActionsCount == 0) {
	obj9869_onTap_actionGroup1();
}
	}, 1);
}







};
obj9869_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9869_onTap_activeActionGroupIndex = -1;
		$("#obj9869").trigger("obj9869_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9869) {
				console.warn("de-queueing event obj9869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9869_onTap_activeActionGroupIndex = 1;
	






















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
	var switchHelperId = "switchHelper233"
	var switchHelperRef = "#switchHelper233"
	var switchId = "233";
	var toSwitchId = "233";
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
	var switchHelperId = "switchHelper234"
	var switchHelperRef = "#switchHelper234"
	var switchId = "234";
	var toSwitchId = "234";
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
	var switchHelperId = "switchHelper235"
	var switchHelperRef = "#switchHelper235"
	var switchId = "235";
	var toSwitchId = "235";
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
	$("#anchor236")[0].click();
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
	$("#anchor237")[0].click();
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
 *   obj4417: Event Touch Down
 *
 */
$("#obj4417").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4417_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4417_onTap is still running");
	return;
}
var obj4417_onTap_runningActionsCount = 0;
var obj4417_onTap_loopCount = 0;
obj4417_onTap_actionGroup0();
});










/*
 *
 *   obj4419: Event Touch Down
 *
 */
$("#obj4419").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4419_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4419_onTap is still running");
	return;
}
var obj4419_onTap_runningActionsCount = 0;
var obj4419_onTap_loopCount = 0;
obj4419_onTap_actionGroup0();
});




















/*
 *
 *   obj4413: Event Touch Down
 *
 */
$("#obj4413").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4413_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4413_onTap is still running");
	return;
}
var obj4413_onTap_runningActionsCount = 0;
var obj4413_onTap_loopCount = 0;
obj4413_onTap_actionGroup0();
});










/*
 *
 *   obj4415: Event Touch Down
 *
 */
$("#obj4415").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4415_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4415_onTap is still running");
	return;
}
var obj4415_onTap_runningActionsCount = 0;
var obj4415_onTap_loopCount = 0;
obj4415_onTap_actionGroup0();
});




















/*
 *
 *   obj4427: Event Touch Down
 *
 */
$("#obj4427").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4427_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4427_onTap is still running");
	return;
}
var obj4427_onTap_runningActionsCount = 0;
var obj4427_onTap_loopCount = 0;
obj4427_onTap_actionGroup0();
});










/*
 *
 *   obj4425: Event Touch Down
 *
 */
$("#obj4425").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4425_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4425_onTap is still running");
	return;
}
var obj4425_onTap_runningActionsCount = 0;
var obj4425_onTap_loopCount = 0;
obj4425_onTap_actionGroup0();
});










/*
 *
 *   obj4421: Event Touch Down
 *
 */
$("#obj4421").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4421_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4421_onTap is still running");
	return;
}
var obj4421_onTap_runningActionsCount = 0;
var obj4421_onTap_loopCount = 0;
obj4421_onTap_actionGroup0();
});










/*
 *
 *   obj4423: Event Touch Down
 *
 */
$("#obj4423").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4423_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4423_onTap is still running");
	return;
}
var obj4423_onTap_runningActionsCount = 0;
var obj4423_onTap_loopCount = 0;
obj4423_onTap_actionGroup0();
});










/*
 *
 *   obj4435: Event Touch Down
 *
 */
$("#obj4435").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4435_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4435_onTap is still running");
	return;
}
var obj4435_onTap_runningActionsCount = 0;
var obj4435_onTap_loopCount = 0;
obj4435_onTap_actionGroup0();
});










/*
 *
 *   obj4429: Event Touch Down
 *
 */
$("#obj4429").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4429_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4429_onTap is still running");
	return;
}
var obj4429_onTap_runningActionsCount = 0;
var obj4429_onTap_loopCount = 0;
obj4429_onTap_actionGroup0();
});










/*
 *
 *   obj4431: Event Touch Down
 *
 */
$("#obj4431").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4431_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4431_onTap is still running");
	return;
}
var obj4431_onTap_runningActionsCount = 0;
var obj4431_onTap_loopCount = 0;
obj4431_onTap_actionGroup0();
});










/*
 *
 *   obj4433: Event Touch Down
 *
 */
$("#obj4433").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4433_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4433_onTap is still running");
	return;
}
var obj4433_onTap_runningActionsCount = 0;
var obj4433_onTap_loopCount = 0;
obj4433_onTap_actionGroup0();
});




















/*
 *
 *   obj9869: Event Touch Down
 *
 */
$("#obj9869").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9869_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9869_onTap is still running");
	return;
}
var obj9869_onTap_runningActionsCount = 0;
var obj9869_onTap_loopCount = 0;
obj9869_onTap_actionGroup0();
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
	
$("#obj3922").trigger('SCEventShow');
$("#obj4101").trigger('SCEventShow');
$("#obj4183").trigger('SCEventShow');
$("#obj4187").trigger('SCEventShow');
$("#obj4417").trigger('SCEventShow');
$("#obj4419").trigger('SCEventShow');
$("#obj4413").trigger('SCEventShow');
$("#obj4415").trigger('SCEventShow');
$("#obj4427").trigger('SCEventShow');
$("#obj4425").trigger('SCEventShow');
$("#obj4421").trigger('SCEventShow');
$("#obj4423").trigger('SCEventShow');
$("#obj4435").trigger('SCEventShow');
$("#obj4429").trigger('SCEventShow');
$("#obj4431").trigger('SCEventShow');
$("#obj4433").trigger('SCEventShow');
$("#obj4698").trigger('SCEventShow');
$("#obj9869").trigger('SCEventShow');
$("#obj4794").trigger('SCEventShow');
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