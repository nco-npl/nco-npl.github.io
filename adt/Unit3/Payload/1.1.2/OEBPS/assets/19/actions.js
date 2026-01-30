pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serophero - Unit 3";
pubcoder.page.id = pubcoder.page.id || 3819;
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
var obj4439_onTap_activeActionGroupIndex = -1;
var obj4439_onTap_runningActionsCount = 0;
var obj4439_onTap_loopCount = 0;
var obj4441_onTap_activeActionGroupIndex = -1;
var obj4441_onTap_runningActionsCount = 0;
var obj4441_onTap_loopCount = 0;
var obj4437_onTap_activeActionGroupIndex = -1;
var obj4437_onTap_runningActionsCount = 0;
var obj4437_onTap_loopCount = 0;
var obj4449_onTap_activeActionGroupIndex = -1;
var obj4449_onTap_runningActionsCount = 0;
var obj4449_onTap_loopCount = 0;
var obj4443_onTap_activeActionGroupIndex = -1;
var obj4443_onTap_runningActionsCount = 0;
var obj4443_onTap_loopCount = 0;
var obj4445_onTap_activeActionGroupIndex = -1;
var obj4445_onTap_runningActionsCount = 0;
var obj4445_onTap_loopCount = 0;
var obj4447_onTap_activeActionGroupIndex = -1;
var obj4447_onTap_runningActionsCount = 0;
var obj4447_onTap_loopCount = 0;
var obj4451_onTap_activeActionGroupIndex = -1;
var obj4451_onTap_runningActionsCount = 0;
var obj4451_onTap_loopCount = 0;
var obj4455_onTap_activeActionGroupIndex = -1;
var obj4455_onTap_runningActionsCount = 0;
var obj4455_onTap_loopCount = 0;
var obj4453_onTap_activeActionGroupIndex = -1;
var obj4453_onTap_runningActionsCount = 0;
var obj4453_onTap_loopCount = 0;
var obj9876_onTap_activeActionGroupIndex = -1;
var obj9876_onTap_runningActionsCount = 0;
var obj9876_onTap_loopCount = 0;
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
		
obj4439_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4439_onTap_activeActionGroupIndex = -1;
		$("#obj4439").trigger("obj4439_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4439) {
				console.warn("de-queueing event obj4439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4439_onTap_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_5147();
function playAudioFile_5147() {
	window.obj4439_onTap_runningActionsCount = obj4439_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5147")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5147");
			$("#obj_audio_playSoundFile5147").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4439_onTap_runningActionsCount = window.obj4439_onTap_runningActionsCount - 1;
if (window.obj4439_onTap_runningActionsCount < 0) {
	window.obj4439_onTap_runningActionsCount = 0;
} else if (window.obj4439_onTap_runningActionsCount == 0) {
	obj4439_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4439_onTap_runningActionsCount = window.obj4439_onTap_runningActionsCount - 1;
if (window.obj4439_onTap_runningActionsCount < 0) {
	window.obj4439_onTap_runningActionsCount = 0;
} else if (window.obj4439_onTap_runningActionsCount == 0) {
	obj4439_onTap_actionGroup1();
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
				window.obj4439_onTap_runningActionsCount = window.obj4439_onTap_runningActionsCount - 1;
if (window.obj4439_onTap_runningActionsCount < 0) {
	window.obj4439_onTap_runningActionsCount = 0;
} else if (window.obj4439_onTap_runningActionsCount == 0) {
	obj4439_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj4439_onTap_runningActionsCount = window.obj4439_onTap_runningActionsCount - 1;
if (window.obj4439_onTap_runningActionsCount < 0) {
	window.obj4439_onTap_runningActionsCount = 0;
} else if (window.obj4439_onTap_runningActionsCount == 0) {
	obj4439_onTap_actionGroup1();
}
		}
	}
	
	
	
}



















};
obj4439_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4439_onTap_activeActionGroupIndex = -1;
		$("#obj4439").trigger("obj4439_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4439) {
				console.warn("de-queueing event obj4439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4439_onTap_activeActionGroupIndex = 1;
	






















};
obj4441_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4441_onTap_activeActionGroupIndex = -1;
		$("#obj4441").trigger("obj4441_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4441) {
				console.warn("de-queueing event obj4441." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4441").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4441_onTap_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_5148();
function playAudioFile_5148() {
	window.obj4441_onTap_runningActionsCount = obj4441_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5148")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5148");
			$("#obj_audio_playSoundFile5148").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4441_onTap_runningActionsCount = window.obj4441_onTap_runningActionsCount - 1;
if (window.obj4441_onTap_runningActionsCount < 0) {
	window.obj4441_onTap_runningActionsCount = 0;
} else if (window.obj4441_onTap_runningActionsCount == 0) {
	obj4441_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4441_onTap_runningActionsCount = window.obj4441_onTap_runningActionsCount - 1;
if (window.obj4441_onTap_runningActionsCount < 0) {
	window.obj4441_onTap_runningActionsCount = 0;
} else if (window.obj4441_onTap_runningActionsCount == 0) {
	obj4441_onTap_actionGroup1();
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
				window.obj4441_onTap_runningActionsCount = window.obj4441_onTap_runningActionsCount - 1;
if (window.obj4441_onTap_runningActionsCount < 0) {
	window.obj4441_onTap_runningActionsCount = 0;
} else if (window.obj4441_onTap_runningActionsCount == 0) {
	obj4441_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj4441_onTap_runningActionsCount = window.obj4441_onTap_runningActionsCount - 1;
if (window.obj4441_onTap_runningActionsCount < 0) {
	window.obj4441_onTap_runningActionsCount = 0;
} else if (window.obj4441_onTap_runningActionsCount == 0) {
	obj4441_onTap_actionGroup1();
}
		}
	}
	
	
	
}



















};
obj4441_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4441_onTap_activeActionGroupIndex = -1;
		$("#obj4441").trigger("obj4441_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4441) {
				console.warn("de-queueing event obj4441." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4441").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4441_onTap_activeActionGroupIndex = 1;
	






















};
obj4437_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4437_onTap_activeActionGroupIndex = -1;
		$("#obj4437").trigger("obj4437_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4437) {
				console.warn("de-queueing event obj4437." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4437").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4437_onTap_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_5146();
function playAudioFile_5146() {
	window.obj4437_onTap_runningActionsCount = obj4437_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5146")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5146");
			$("#obj_audio_playSoundFile5146").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4437_onTap_runningActionsCount = window.obj4437_onTap_runningActionsCount - 1;
if (window.obj4437_onTap_runningActionsCount < 0) {
	window.obj4437_onTap_runningActionsCount = 0;
} else if (window.obj4437_onTap_runningActionsCount == 0) {
	obj4437_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4437_onTap_runningActionsCount = window.obj4437_onTap_runningActionsCount - 1;
if (window.obj4437_onTap_runningActionsCount < 0) {
	window.obj4437_onTap_runningActionsCount = 0;
} else if (window.obj4437_onTap_runningActionsCount == 0) {
	obj4437_onTap_actionGroup1();
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
				window.obj4437_onTap_runningActionsCount = window.obj4437_onTap_runningActionsCount - 1;
if (window.obj4437_onTap_runningActionsCount < 0) {
	window.obj4437_onTap_runningActionsCount = 0;
} else if (window.obj4437_onTap_runningActionsCount == 0) {
	obj4437_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj4437_onTap_runningActionsCount = window.obj4437_onTap_runningActionsCount - 1;
if (window.obj4437_onTap_runningActionsCount < 0) {
	window.obj4437_onTap_runningActionsCount = 0;
} else if (window.obj4437_onTap_runningActionsCount == 0) {
	obj4437_onTap_actionGroup1();
}
		}
	}
	
	
	
}



















};
obj4437_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4437_onTap_activeActionGroupIndex = -1;
		$("#obj4437").trigger("obj4437_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4437) {
				console.warn("de-queueing event obj4437." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4437").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4437_onTap_activeActionGroupIndex = 1;
	






















};
obj4449_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4449_onTap_activeActionGroupIndex = -1;
		$("#obj4449").trigger("obj4449_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4449) {
				console.warn("de-queueing event obj4449." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4449").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4449_onTap_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_5149();
function playAudioFile_5149() {
	window.obj4449_onTap_runningActionsCount = obj4449_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5149")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5149");
			$("#obj_audio_playSoundFile5149").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4449_onTap_runningActionsCount = window.obj4449_onTap_runningActionsCount - 1;
if (window.obj4449_onTap_runningActionsCount < 0) {
	window.obj4449_onTap_runningActionsCount = 0;
} else if (window.obj4449_onTap_runningActionsCount == 0) {
	obj4449_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4449_onTap_runningActionsCount = window.obj4449_onTap_runningActionsCount - 1;
if (window.obj4449_onTap_runningActionsCount < 0) {
	window.obj4449_onTap_runningActionsCount = 0;
} else if (window.obj4449_onTap_runningActionsCount == 0) {
	obj4449_onTap_actionGroup1();
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
				window.obj4449_onTap_runningActionsCount = window.obj4449_onTap_runningActionsCount - 1;
if (window.obj4449_onTap_runningActionsCount < 0) {
	window.obj4449_onTap_runningActionsCount = 0;
} else if (window.obj4449_onTap_runningActionsCount == 0) {
	obj4449_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj4449_onTap_runningActionsCount = window.obj4449_onTap_runningActionsCount - 1;
if (window.obj4449_onTap_runningActionsCount < 0) {
	window.obj4449_onTap_runningActionsCount = 0;
} else if (window.obj4449_onTap_runningActionsCount == 0) {
	obj4449_onTap_actionGroup1();
}
		}
	}
	
	
	
}



















};
obj4449_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4449_onTap_activeActionGroupIndex = -1;
		$("#obj4449").trigger("obj4449_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4449) {
				console.warn("de-queueing event obj4449." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4449").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4449_onTap_activeActionGroupIndex = 1;
	






















};
obj4443_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4443_onTap_activeActionGroupIndex = -1;
		$("#obj4443").trigger("obj4443_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4443) {
				console.warn("de-queueing event obj4443." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4443").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4443_onTap_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_5150();
function playAudioFile_5150() {
	window.obj4443_onTap_runningActionsCount = obj4443_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5150")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5150");
			$("#obj_audio_playSoundFile5150").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4443_onTap_runningActionsCount = window.obj4443_onTap_runningActionsCount - 1;
if (window.obj4443_onTap_runningActionsCount < 0) {
	window.obj4443_onTap_runningActionsCount = 0;
} else if (window.obj4443_onTap_runningActionsCount == 0) {
	obj4443_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4443_onTap_runningActionsCount = window.obj4443_onTap_runningActionsCount - 1;
if (window.obj4443_onTap_runningActionsCount < 0) {
	window.obj4443_onTap_runningActionsCount = 0;
} else if (window.obj4443_onTap_runningActionsCount == 0) {
	obj4443_onTap_actionGroup1();
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
				window.obj4443_onTap_runningActionsCount = window.obj4443_onTap_runningActionsCount - 1;
if (window.obj4443_onTap_runningActionsCount < 0) {
	window.obj4443_onTap_runningActionsCount = 0;
} else if (window.obj4443_onTap_runningActionsCount == 0) {
	obj4443_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj4443_onTap_runningActionsCount = window.obj4443_onTap_runningActionsCount - 1;
if (window.obj4443_onTap_runningActionsCount < 0) {
	window.obj4443_onTap_runningActionsCount = 0;
} else if (window.obj4443_onTap_runningActionsCount == 0) {
	obj4443_onTap_actionGroup1();
}
		}
	}
	
	
	
}



















};
obj4443_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4443_onTap_activeActionGroupIndex = -1;
		$("#obj4443").trigger("obj4443_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4443) {
				console.warn("de-queueing event obj4443." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4443").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4443_onTap_activeActionGroupIndex = 1;
	






















};
obj4445_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4445_onTap_activeActionGroupIndex = -1;
		$("#obj4445").trigger("obj4445_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4445) {
				console.warn("de-queueing event obj4445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4445_onTap_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_5155();
function playAudioFile_5155() {
	window.obj4445_onTap_runningActionsCount = obj4445_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5155")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5155");
			$("#obj_audio_playSoundFile5155").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4445_onTap_runningActionsCount = window.obj4445_onTap_runningActionsCount - 1;
if (window.obj4445_onTap_runningActionsCount < 0) {
	window.obj4445_onTap_runningActionsCount = 0;
} else if (window.obj4445_onTap_runningActionsCount == 0) {
	obj4445_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4445_onTap_runningActionsCount = window.obj4445_onTap_runningActionsCount - 1;
if (window.obj4445_onTap_runningActionsCount < 0) {
	window.obj4445_onTap_runningActionsCount = 0;
} else if (window.obj4445_onTap_runningActionsCount == 0) {
	obj4445_onTap_actionGroup1();
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
				window.obj4445_onTap_runningActionsCount = window.obj4445_onTap_runningActionsCount - 1;
if (window.obj4445_onTap_runningActionsCount < 0) {
	window.obj4445_onTap_runningActionsCount = 0;
} else if (window.obj4445_onTap_runningActionsCount == 0) {
	obj4445_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj4445_onTap_runningActionsCount = window.obj4445_onTap_runningActionsCount - 1;
if (window.obj4445_onTap_runningActionsCount < 0) {
	window.obj4445_onTap_runningActionsCount = 0;
} else if (window.obj4445_onTap_runningActionsCount == 0) {
	obj4445_onTap_actionGroup1();
}
		}
	}
	
	
	
}



















};
obj4445_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4445_onTap_activeActionGroupIndex = -1;
		$("#obj4445").trigger("obj4445_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4445) {
				console.warn("de-queueing event obj4445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4445_onTap_activeActionGroupIndex = 1;
	






















};
obj4447_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4447_onTap_activeActionGroupIndex = -1;
		$("#obj4447").trigger("obj4447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4447) {
				console.warn("de-queueing event obj4447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4447_onTap_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_5151();
function playAudioFile_5151() {
	window.obj4447_onTap_runningActionsCount = obj4447_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5151")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5151");
			$("#obj_audio_playSoundFile5151").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4447_onTap_runningActionsCount = window.obj4447_onTap_runningActionsCount - 1;
if (window.obj4447_onTap_runningActionsCount < 0) {
	window.obj4447_onTap_runningActionsCount = 0;
} else if (window.obj4447_onTap_runningActionsCount == 0) {
	obj4447_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4447_onTap_runningActionsCount = window.obj4447_onTap_runningActionsCount - 1;
if (window.obj4447_onTap_runningActionsCount < 0) {
	window.obj4447_onTap_runningActionsCount = 0;
} else if (window.obj4447_onTap_runningActionsCount == 0) {
	obj4447_onTap_actionGroup1();
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
				window.obj4447_onTap_runningActionsCount = window.obj4447_onTap_runningActionsCount - 1;
if (window.obj4447_onTap_runningActionsCount < 0) {
	window.obj4447_onTap_runningActionsCount = 0;
} else if (window.obj4447_onTap_runningActionsCount == 0) {
	obj4447_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj4447_onTap_runningActionsCount = window.obj4447_onTap_runningActionsCount - 1;
if (window.obj4447_onTap_runningActionsCount < 0) {
	window.obj4447_onTap_runningActionsCount = 0;
} else if (window.obj4447_onTap_runningActionsCount == 0) {
	obj4447_onTap_actionGroup1();
}
		}
	}
	
	
	
}



















};
obj4447_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4447_onTap_activeActionGroupIndex = -1;
		$("#obj4447").trigger("obj4447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4447) {
				console.warn("de-queueing event obj4447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4447_onTap_activeActionGroupIndex = 1;
	






















};
obj4451_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4451_onTap_activeActionGroupIndex = -1;
		$("#obj4451").trigger("obj4451_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4451) {
				console.warn("de-queueing event obj4451." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4451").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4451_onTap_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_5154();
function playAudioFile_5154() {
	window.obj4451_onTap_runningActionsCount = obj4451_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5154")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5154");
			$("#obj_audio_playSoundFile5154").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4451_onTap_runningActionsCount = window.obj4451_onTap_runningActionsCount - 1;
if (window.obj4451_onTap_runningActionsCount < 0) {
	window.obj4451_onTap_runningActionsCount = 0;
} else if (window.obj4451_onTap_runningActionsCount == 0) {
	obj4451_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4451_onTap_runningActionsCount = window.obj4451_onTap_runningActionsCount - 1;
if (window.obj4451_onTap_runningActionsCount < 0) {
	window.obj4451_onTap_runningActionsCount = 0;
} else if (window.obj4451_onTap_runningActionsCount == 0) {
	obj4451_onTap_actionGroup1();
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
				window.obj4451_onTap_runningActionsCount = window.obj4451_onTap_runningActionsCount - 1;
if (window.obj4451_onTap_runningActionsCount < 0) {
	window.obj4451_onTap_runningActionsCount = 0;
} else if (window.obj4451_onTap_runningActionsCount == 0) {
	obj4451_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj4451_onTap_runningActionsCount = window.obj4451_onTap_runningActionsCount - 1;
if (window.obj4451_onTap_runningActionsCount < 0) {
	window.obj4451_onTap_runningActionsCount = 0;
} else if (window.obj4451_onTap_runningActionsCount == 0) {
	obj4451_onTap_actionGroup1();
}
		}
	}
	
	
	
}



















};
obj4451_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4451_onTap_activeActionGroupIndex = -1;
		$("#obj4451").trigger("obj4451_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4451) {
				console.warn("de-queueing event obj4451." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4451").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4451_onTap_activeActionGroupIndex = 1;
	






















};
obj4455_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4455_onTap_activeActionGroupIndex = -1;
		$("#obj4455").trigger("obj4455_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4455) {
				console.warn("de-queueing event obj4455." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4455").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4455_onTap_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_5152();
function playAudioFile_5152() {
	window.obj4455_onTap_runningActionsCount = obj4455_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5152")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5152");
			$("#obj_audio_playSoundFile5152").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4455_onTap_runningActionsCount = window.obj4455_onTap_runningActionsCount - 1;
if (window.obj4455_onTap_runningActionsCount < 0) {
	window.obj4455_onTap_runningActionsCount = 0;
} else if (window.obj4455_onTap_runningActionsCount == 0) {
	obj4455_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4455_onTap_runningActionsCount = window.obj4455_onTap_runningActionsCount - 1;
if (window.obj4455_onTap_runningActionsCount < 0) {
	window.obj4455_onTap_runningActionsCount = 0;
} else if (window.obj4455_onTap_runningActionsCount == 0) {
	obj4455_onTap_actionGroup1();
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
				window.obj4455_onTap_runningActionsCount = window.obj4455_onTap_runningActionsCount - 1;
if (window.obj4455_onTap_runningActionsCount < 0) {
	window.obj4455_onTap_runningActionsCount = 0;
} else if (window.obj4455_onTap_runningActionsCount == 0) {
	obj4455_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj4455_onTap_runningActionsCount = window.obj4455_onTap_runningActionsCount - 1;
if (window.obj4455_onTap_runningActionsCount < 0) {
	window.obj4455_onTap_runningActionsCount = 0;
} else if (window.obj4455_onTap_runningActionsCount == 0) {
	obj4455_onTap_actionGroup1();
}
		}
	}
	
	
	
}



















};
obj4455_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4455_onTap_activeActionGroupIndex = -1;
		$("#obj4455").trigger("obj4455_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4455) {
				console.warn("de-queueing event obj4455." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4455").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4455_onTap_activeActionGroupIndex = 1;
	






















};
obj4453_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4453_onTap_activeActionGroupIndex = -1;
		$("#obj4453").trigger("obj4453_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4453) {
				console.warn("de-queueing event obj4453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4453_onTap_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_5153();
function playAudioFile_5153() {
	window.obj4453_onTap_runningActionsCount = obj4453_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile5153")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile5153");
			$("#obj_audio_playSoundFile5153").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4453_onTap_runningActionsCount = window.obj4453_onTap_runningActionsCount - 1;
if (window.obj4453_onTap_runningActionsCount < 0) {
	window.obj4453_onTap_runningActionsCount = 0;
} else if (window.obj4453_onTap_runningActionsCount == 0) {
	obj4453_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4453_onTap_runningActionsCount = window.obj4453_onTap_runningActionsCount - 1;
if (window.obj4453_onTap_runningActionsCount < 0) {
	window.obj4453_onTap_runningActionsCount = 0;
} else if (window.obj4453_onTap_runningActionsCount == 0) {
	obj4453_onTap_actionGroup1();
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
				window.obj4453_onTap_runningActionsCount = window.obj4453_onTap_runningActionsCount - 1;
if (window.obj4453_onTap_runningActionsCount < 0) {
	window.obj4453_onTap_runningActionsCount = 0;
} else if (window.obj4453_onTap_runningActionsCount == 0) {
	obj4453_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj4453_onTap_runningActionsCount = window.obj4453_onTap_runningActionsCount - 1;
if (window.obj4453_onTap_runningActionsCount < 0) {
	window.obj4453_onTap_runningActionsCount = 0;
} else if (window.obj4453_onTap_runningActionsCount == 0) {
	obj4453_onTap_actionGroup1();
}
		}
	}
	
	
	
}



















};
obj4453_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4453_onTap_activeActionGroupIndex = -1;
		$("#obj4453").trigger("obj4453_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4453) {
				console.warn("de-queueing event obj4453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4453_onTap_activeActionGroupIndex = 1;
	






















};
obj9876_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9876_onTap_activeActionGroupIndex = -1;
		$("#obj9876").trigger("obj9876_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9876) {
				console.warn("de-queueing event obj9876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9876_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_9880();
function runjs_9880() {
	window.obj9876_onTap_runningActionsCount = obj9876_onTap_runningActionsCount + 1;

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
		window.obj9876_onTap_runningActionsCount = window.obj9876_onTap_runningActionsCount - 1;
if (window.obj9876_onTap_runningActionsCount < 0) {
	window.obj9876_onTap_runningActionsCount = 0;
} else if (window.obj9876_onTap_runningActionsCount == 0) {
	obj9876_onTap_actionGroup1();
}
	}, 1);
}







};
obj9876_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9876_onTap_activeActionGroupIndex = -1;
		$("#obj9876").trigger("obj9876_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9876) {
				console.warn("de-queueing event obj9876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9876_onTap_activeActionGroupIndex = 1;
	






















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
	var switchHelperId = "switchHelper251"
	var switchHelperRef = "#switchHelper251"
	var switchId = "251";
	var toSwitchId = "251";
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
	var switchHelperId = "switchHelper252"
	var switchHelperRef = "#switchHelper252"
	var switchId = "252";
	var toSwitchId = "252";
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
	var switchHelperId = "switchHelper253"
	var switchHelperRef = "#switchHelper253"
	var switchId = "253";
	var toSwitchId = "253";
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
	$("#anchor254")[0].click();
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
	$("#anchor255")[0].click();
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
 *   obj4439: Event Touch Down
 *
 */
$("#obj4439").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4439_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4439_onTap is still running");
	return;
}
var obj4439_onTap_runningActionsCount = 0;
var obj4439_onTap_loopCount = 0;
obj4439_onTap_actionGroup0();
});










/*
 *
 *   obj4441: Event Touch Down
 *
 */
$("#obj4441").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4441_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4441_onTap is still running");
	return;
}
var obj4441_onTap_runningActionsCount = 0;
var obj4441_onTap_loopCount = 0;
obj4441_onTap_actionGroup0();
});










/*
 *
 *   obj4437: Event Touch Down
 *
 */
$("#obj4437").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4437_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4437_onTap is still running");
	return;
}
var obj4437_onTap_runningActionsCount = 0;
var obj4437_onTap_loopCount = 0;
obj4437_onTap_actionGroup0();
});










/*
 *
 *   obj4449: Event Touch Down
 *
 */
$("#obj4449").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4449_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4449_onTap is still running");
	return;
}
var obj4449_onTap_runningActionsCount = 0;
var obj4449_onTap_loopCount = 0;
obj4449_onTap_actionGroup0();
});




















/*
 *
 *   obj4443: Event Touch Down
 *
 */
$("#obj4443").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4443_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4443_onTap is still running");
	return;
}
var obj4443_onTap_runningActionsCount = 0;
var obj4443_onTap_loopCount = 0;
obj4443_onTap_actionGroup0();
});










/*
 *
 *   obj4445: Event Touch Down
 *
 */
$("#obj4445").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4445_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4445_onTap is still running");
	return;
}
var obj4445_onTap_runningActionsCount = 0;
var obj4445_onTap_loopCount = 0;
obj4445_onTap_actionGroup0();
});




















/*
 *
 *   obj4447: Event Touch Down
 *
 */
$("#obj4447").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4447_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4447_onTap is still running");
	return;
}
var obj4447_onTap_runningActionsCount = 0;
var obj4447_onTap_loopCount = 0;
obj4447_onTap_actionGroup0();
});










/*
 *
 *   obj4451: Event Touch Down
 *
 */
$("#obj4451").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4451_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4451_onTap is still running");
	return;
}
var obj4451_onTap_runningActionsCount = 0;
var obj4451_onTap_loopCount = 0;
obj4451_onTap_actionGroup0();
});










/*
 *
 *   obj4455: Event Touch Down
 *
 */
$("#obj4455").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4455_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4455_onTap is still running");
	return;
}
var obj4455_onTap_runningActionsCount = 0;
var obj4455_onTap_loopCount = 0;
obj4455_onTap_actionGroup0();
});










/*
 *
 *   obj4453: Event Touch Down
 *
 */
$("#obj4453").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj4453_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4453_onTap is still running");
	return;
}
var obj4453_onTap_runningActionsCount = 0;
var obj4453_onTap_loopCount = 0;
obj4453_onTap_actionGroup0();
});




















/*
 *
 *   obj9876: Event Touch Down
 *
 */
$("#obj9876").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9876_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9876_onTap is still running");
	return;
}
var obj9876_onTap_runningActionsCount = 0;
var obj9876_onTap_loopCount = 0;
obj9876_onTap_actionGroup0();
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
	
$("#obj3925").trigger('SCEventShow');
$("#obj4189").trigger('SCEventShow');
$("#obj4439").trigger('SCEventShow');
$("#obj4441").trigger('SCEventShow');
$("#obj4437").trigger('SCEventShow');
$("#obj4449").trigger('SCEventShow');
$("#obj4443").trigger('SCEventShow');
$("#obj4445").trigger('SCEventShow');
$("#obj4447").trigger('SCEventShow');
$("#obj4451").trigger('SCEventShow');
$("#obj4455").trigger('SCEventShow');
$("#obj4453").trigger('SCEventShow');
$("#obj4700").trigger('SCEventShow');
$("#obj9876").trigger('SCEventShow');
$("#obj4796").trigger('SCEventShow');
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