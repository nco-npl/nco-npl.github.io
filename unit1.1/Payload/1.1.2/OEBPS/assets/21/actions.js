pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Unit 1";
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
var obj1978_onTap_activeActionGroupIndex = -1;
var obj1978_onTap_runningActionsCount = 0;
var obj1978_onTap_loopCount = 0;
var obj1981_onTap_activeActionGroupIndex = -1;
var obj1981_onTap_runningActionsCount = 0;
var obj1981_onTap_loopCount = 0;
var obj1984_onTap_activeActionGroupIndex = -1;
var obj1984_onTap_runningActionsCount = 0;
var obj1984_onTap_loopCount = 0;
var obj1987_onTap_activeActionGroupIndex = -1;
var obj1987_onTap_runningActionsCount = 0;
var obj1987_onTap_loopCount = 0;
var obj1990_onTap_activeActionGroupIndex = -1;
var obj1990_onTap_runningActionsCount = 0;
var obj1990_onTap_loopCount = 0;
var obj1993_onTap_activeActionGroupIndex = -1;
var obj1993_onTap_runningActionsCount = 0;
var obj1993_onTap_loopCount = 0;
var obj1996_onTap_activeActionGroupIndex = -1;
var obj1996_onTap_runningActionsCount = 0;
var obj1996_onTap_loopCount = 0;
var obj1999_onTap_activeActionGroupIndex = -1;
var obj1999_onTap_runningActionsCount = 0;
var obj1999_onTap_loopCount = 0;
var obj2002_onTap_activeActionGroupIndex = -1;
var obj2002_onTap_runningActionsCount = 0;
var obj2002_onTap_loopCount = 0;
var obj2005_onTap_activeActionGroupIndex = -1;
var obj2005_onTap_runningActionsCount = 0;
var obj2005_onTap_loopCount = 0;
var obj2008_onTap_activeActionGroupIndex = -1;
var obj2008_onTap_runningActionsCount = 0;
var obj2008_onTap_loopCount = 0;
var obj2011_onTap_activeActionGroupIndex = -1;
var obj2011_onTap_runningActionsCount = 0;
var obj2011_onTap_loopCount = 0;
var obj2935_SCEventReadAloudStarted_activeActionGroupIndex = -1;
var obj2935_SCEventReadAloudStarted_runningActionsCount = 0;
var obj2935_SCEventReadAloudStarted_loopCount = 0;
var obj2935_onTouchUp_activeActionGroupIndex = -1;
var obj2935_onTouchUp_runningActionsCount = 0;
var obj2935_onTouchUp_loopCount = 0;
var obj2935_SCEventReadAloudStopped_activeActionGroupIndex = -1;
var obj2935_SCEventReadAloudStopped_runningActionsCount = 0;
var obj2935_SCEventReadAloudStopped_loopCount = 0;
var obj2928_onTap_activeActionGroupIndex = -1;
var obj2928_onTap_runningActionsCount = 0;
var obj2928_onTap_loopCount = 0;
var obj2924_onTap_activeActionGroupIndex = -1;
var obj2924_onTap_runningActionsCount = 0;
var obj2924_onTap_loopCount = 0;
var obj2921_onTap_activeActionGroupIndex = -1;
var obj2921_onTap_runningActionsCount = 0;
var obj2921_onTap_loopCount = 0;
var obj2918_onTap_activeActionGroupIndex = -1;
var obj2918_onTap_runningActionsCount = 0;
var obj2918_onTap_loopCount = 0;
var obj2907_onTouchUp_activeActionGroupIndex = -1;
var obj2907_onTouchUp_runningActionsCount = 0;
var obj2907_onTouchUp_loopCount = 0;
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
		
obj1978_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1978_onTap_activeActionGroupIndex = -1;
		$("#obj1978").trigger("obj1978_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1978) {
				console.warn("de-queueing event obj1978." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1978").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1978_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1978 
switchImage_1980();
function switchImage_1980() {
	window.obj1978_onTap_runningActionsCount = obj1978_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1978";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1978_img";
	var fromImagePath = "../images/obj1898_image.png";
	var toImagePath = "../images/switch224_to.png";
	var switchHelperId = "switchHelper249"
	var switchHelperRef = "#switchHelper249"
	var switchId = "249";
	var toSwitchId = "249";
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
				window.obj1978_onTap_runningActionsCount = window.obj1978_onTap_runningActionsCount - 1;
if (window.obj1978_onTap_runningActionsCount < 0) {
	window.obj1978_onTap_runningActionsCount = 0;
} else if (window.obj1978_onTap_runningActionsCount == 0) {
	obj1978_onTap_actionGroup1();
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
obj1978_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1978_onTap_activeActionGroupIndex = -1;
		$("#obj1978").trigger("obj1978_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1978) {
				console.warn("de-queueing event obj1978." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1978").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1978_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4691();
function playAudioFile_4691() {
	window.obj1978_onTap_runningActionsCount = obj1978_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4691")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4691");
			$("#obj_audio_playSoundFile4691").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1978_onTap_runningActionsCount = window.obj1978_onTap_runningActionsCount - 1;
if (window.obj1978_onTap_runningActionsCount < 0) {
	window.obj1978_onTap_runningActionsCount = 0;
} else if (window.obj1978_onTap_runningActionsCount == 0) {
	obj1978_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1978_onTap_runningActionsCount = window.obj1978_onTap_runningActionsCount - 1;
if (window.obj1978_onTap_runningActionsCount < 0) {
	window.obj1978_onTap_runningActionsCount = 0;
} else if (window.obj1978_onTap_runningActionsCount == 0) {
	obj1978_onTap_actionGroup2();
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
				window.obj1978_onTap_runningActionsCount = window.obj1978_onTap_runningActionsCount - 1;
if (window.obj1978_onTap_runningActionsCount < 0) {
	window.obj1978_onTap_runningActionsCount = 0;
} else if (window.obj1978_onTap_runningActionsCount == 0) {
	obj1978_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj1978_onTap_runningActionsCount = window.obj1978_onTap_runningActionsCount - 1;
if (window.obj1978_onTap_runningActionsCount < 0) {
	window.obj1978_onTap_runningActionsCount = 0;
} else if (window.obj1978_onTap_runningActionsCount == 0) {
	obj1978_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj1978_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1978_onTap_activeActionGroupIndex = -1;
		$("#obj1978").trigger("obj1978_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1978) {
				console.warn("de-queueing event obj1978." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1978").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1978_onTap_activeActionGroupIndex = 2;
	





















};
obj1981_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1981_onTap_activeActionGroupIndex = -1;
		$("#obj1981").trigger("obj1981_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1981) {
				console.warn("de-queueing event obj1981." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1981").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1981_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1981 
switchImage_1983();
function switchImage_1983() {
	window.obj1981_onTap_runningActionsCount = obj1981_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1981";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1981_img";
	var fromImagePath = "../images/obj1898_image.png";
	var toImagePath = "../images/switch224_to.png";
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
				window.obj1981_onTap_runningActionsCount = window.obj1981_onTap_runningActionsCount - 1;
if (window.obj1981_onTap_runningActionsCount < 0) {
	window.obj1981_onTap_runningActionsCount = 0;
} else if (window.obj1981_onTap_runningActionsCount == 0) {
	obj1981_onTap_actionGroup1();
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
obj1981_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1981_onTap_activeActionGroupIndex = -1;
		$("#obj1981").trigger("obj1981_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1981) {
				console.warn("de-queueing event obj1981." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1981").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1981_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4692();
function playAudioFile_4692() {
	window.obj1981_onTap_runningActionsCount = obj1981_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4692")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4692");
			$("#obj_audio_playSoundFile4692").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1981_onTap_runningActionsCount = window.obj1981_onTap_runningActionsCount - 1;
if (window.obj1981_onTap_runningActionsCount < 0) {
	window.obj1981_onTap_runningActionsCount = 0;
} else if (window.obj1981_onTap_runningActionsCount == 0) {
	obj1981_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1981_onTap_runningActionsCount = window.obj1981_onTap_runningActionsCount - 1;
if (window.obj1981_onTap_runningActionsCount < 0) {
	window.obj1981_onTap_runningActionsCount = 0;
} else if (window.obj1981_onTap_runningActionsCount == 0) {
	obj1981_onTap_actionGroup2();
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
				window.obj1981_onTap_runningActionsCount = window.obj1981_onTap_runningActionsCount - 1;
if (window.obj1981_onTap_runningActionsCount < 0) {
	window.obj1981_onTap_runningActionsCount = 0;
} else if (window.obj1981_onTap_runningActionsCount == 0) {
	obj1981_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj1981_onTap_runningActionsCount = window.obj1981_onTap_runningActionsCount - 1;
if (window.obj1981_onTap_runningActionsCount < 0) {
	window.obj1981_onTap_runningActionsCount = 0;
} else if (window.obj1981_onTap_runningActionsCount == 0) {
	obj1981_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj1981_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1981_onTap_activeActionGroupIndex = -1;
		$("#obj1981").trigger("obj1981_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1981) {
				console.warn("de-queueing event obj1981." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1981").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1981_onTap_activeActionGroupIndex = 2;
	





















};
obj1984_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1984_onTap_activeActionGroupIndex = -1;
		$("#obj1984").trigger("obj1984_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1984) {
				console.warn("de-queueing event obj1984." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1984").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1984_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1984 
switchImage_1986();
function switchImage_1986() {
	window.obj1984_onTap_runningActionsCount = obj1984_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1984";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1984_img";
	var fromImagePath = "../images/obj1898_image.png";
	var toImagePath = "../images/switch224_to.png";
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
				window.obj1984_onTap_runningActionsCount = window.obj1984_onTap_runningActionsCount - 1;
if (window.obj1984_onTap_runningActionsCount < 0) {
	window.obj1984_onTap_runningActionsCount = 0;
} else if (window.obj1984_onTap_runningActionsCount == 0) {
	obj1984_onTap_actionGroup1();
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
obj1984_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1984_onTap_activeActionGroupIndex = -1;
		$("#obj1984").trigger("obj1984_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1984) {
				console.warn("de-queueing event obj1984." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1984").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1984_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4693();
function playAudioFile_4693() {
	window.obj1984_onTap_runningActionsCount = obj1984_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4693")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4693");
			$("#obj_audio_playSoundFile4693").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1984_onTap_runningActionsCount = window.obj1984_onTap_runningActionsCount - 1;
if (window.obj1984_onTap_runningActionsCount < 0) {
	window.obj1984_onTap_runningActionsCount = 0;
} else if (window.obj1984_onTap_runningActionsCount == 0) {
	obj1984_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1984_onTap_runningActionsCount = window.obj1984_onTap_runningActionsCount - 1;
if (window.obj1984_onTap_runningActionsCount < 0) {
	window.obj1984_onTap_runningActionsCount = 0;
} else if (window.obj1984_onTap_runningActionsCount == 0) {
	obj1984_onTap_actionGroup2();
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
				window.obj1984_onTap_runningActionsCount = window.obj1984_onTap_runningActionsCount - 1;
if (window.obj1984_onTap_runningActionsCount < 0) {
	window.obj1984_onTap_runningActionsCount = 0;
} else if (window.obj1984_onTap_runningActionsCount == 0) {
	obj1984_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj1984_onTap_runningActionsCount = window.obj1984_onTap_runningActionsCount - 1;
if (window.obj1984_onTap_runningActionsCount < 0) {
	window.obj1984_onTap_runningActionsCount = 0;
} else if (window.obj1984_onTap_runningActionsCount == 0) {
	obj1984_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj1984_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1984_onTap_activeActionGroupIndex = -1;
		$("#obj1984").trigger("obj1984_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1984) {
				console.warn("de-queueing event obj1984." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1984").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1984_onTap_activeActionGroupIndex = 2;
	





















};
obj1987_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1987_onTap_activeActionGroupIndex = -1;
		$("#obj1987").trigger("obj1987_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1987) {
				console.warn("de-queueing event obj1987." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1987").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1987_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1987 
switchImage_1989();
function switchImage_1989() {
	window.obj1987_onTap_runningActionsCount = obj1987_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1987";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1987_img";
	var fromImagePath = "../images/obj1898_image.png";
	var toImagePath = "../images/switch224_to.png";
	var switchHelperId = "switchHelper255"
	var switchHelperRef = "#switchHelper255"
	var switchId = "255";
	var toSwitchId = "255";
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
				window.obj1987_onTap_runningActionsCount = window.obj1987_onTap_runningActionsCount - 1;
if (window.obj1987_onTap_runningActionsCount < 0) {
	window.obj1987_onTap_runningActionsCount = 0;
} else if (window.obj1987_onTap_runningActionsCount == 0) {
	obj1987_onTap_actionGroup1();
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
obj1987_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1987_onTap_activeActionGroupIndex = -1;
		$("#obj1987").trigger("obj1987_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1987) {
				console.warn("de-queueing event obj1987." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1987").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1987_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4694();
function playAudioFile_4694() {
	window.obj1987_onTap_runningActionsCount = obj1987_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4694")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4694");
			$("#obj_audio_playSoundFile4694").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1987_onTap_runningActionsCount = window.obj1987_onTap_runningActionsCount - 1;
if (window.obj1987_onTap_runningActionsCount < 0) {
	window.obj1987_onTap_runningActionsCount = 0;
} else if (window.obj1987_onTap_runningActionsCount == 0) {
	obj1987_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1987_onTap_runningActionsCount = window.obj1987_onTap_runningActionsCount - 1;
if (window.obj1987_onTap_runningActionsCount < 0) {
	window.obj1987_onTap_runningActionsCount = 0;
} else if (window.obj1987_onTap_runningActionsCount == 0) {
	obj1987_onTap_actionGroup2();
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
				window.obj1987_onTap_runningActionsCount = window.obj1987_onTap_runningActionsCount - 1;
if (window.obj1987_onTap_runningActionsCount < 0) {
	window.obj1987_onTap_runningActionsCount = 0;
} else if (window.obj1987_onTap_runningActionsCount == 0) {
	obj1987_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj1987_onTap_runningActionsCount = window.obj1987_onTap_runningActionsCount - 1;
if (window.obj1987_onTap_runningActionsCount < 0) {
	window.obj1987_onTap_runningActionsCount = 0;
} else if (window.obj1987_onTap_runningActionsCount == 0) {
	obj1987_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj1987_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1987_onTap_activeActionGroupIndex = -1;
		$("#obj1987").trigger("obj1987_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1987) {
				console.warn("de-queueing event obj1987." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1987").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1987_onTap_activeActionGroupIndex = 2;
	





















};
obj1990_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1990_onTap_activeActionGroupIndex = -1;
		$("#obj1990").trigger("obj1990_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1990) {
				console.warn("de-queueing event obj1990." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1990").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1990_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1990 
switchImage_1992();
function switchImage_1992() {
	window.obj1990_onTap_runningActionsCount = obj1990_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1990";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1990_img";
	var fromImagePath = "../images/obj1898_image.png";
	var toImagePath = "../images/switch224_to.png";
	var switchHelperId = "switchHelper257"
	var switchHelperRef = "#switchHelper257"
	var switchId = "257";
	var toSwitchId = "257";
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
				window.obj1990_onTap_runningActionsCount = window.obj1990_onTap_runningActionsCount - 1;
if (window.obj1990_onTap_runningActionsCount < 0) {
	window.obj1990_onTap_runningActionsCount = 0;
} else if (window.obj1990_onTap_runningActionsCount == 0) {
	obj1990_onTap_actionGroup1();
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
obj1990_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1990_onTap_activeActionGroupIndex = -1;
		$("#obj1990").trigger("obj1990_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1990) {
				console.warn("de-queueing event obj1990." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1990").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1990_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4695();
function playAudioFile_4695() {
	window.obj1990_onTap_runningActionsCount = obj1990_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4695")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4695");
			$("#obj_audio_playSoundFile4695").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1990_onTap_runningActionsCount = window.obj1990_onTap_runningActionsCount - 1;
if (window.obj1990_onTap_runningActionsCount < 0) {
	window.obj1990_onTap_runningActionsCount = 0;
} else if (window.obj1990_onTap_runningActionsCount == 0) {
	obj1990_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1990_onTap_runningActionsCount = window.obj1990_onTap_runningActionsCount - 1;
if (window.obj1990_onTap_runningActionsCount < 0) {
	window.obj1990_onTap_runningActionsCount = 0;
} else if (window.obj1990_onTap_runningActionsCount == 0) {
	obj1990_onTap_actionGroup2();
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
				window.obj1990_onTap_runningActionsCount = window.obj1990_onTap_runningActionsCount - 1;
if (window.obj1990_onTap_runningActionsCount < 0) {
	window.obj1990_onTap_runningActionsCount = 0;
} else if (window.obj1990_onTap_runningActionsCount == 0) {
	obj1990_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj1990_onTap_runningActionsCount = window.obj1990_onTap_runningActionsCount - 1;
if (window.obj1990_onTap_runningActionsCount < 0) {
	window.obj1990_onTap_runningActionsCount = 0;
} else if (window.obj1990_onTap_runningActionsCount == 0) {
	obj1990_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj1990_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1990_onTap_activeActionGroupIndex = -1;
		$("#obj1990").trigger("obj1990_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1990) {
				console.warn("de-queueing event obj1990." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1990").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1990_onTap_activeActionGroupIndex = 2;
	





















};
obj1993_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1993_onTap_activeActionGroupIndex = -1;
		$("#obj1993").trigger("obj1993_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1993) {
				console.warn("de-queueing event obj1993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1993_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1993 
switchImage_1995();
function switchImage_1995() {
	window.obj1993_onTap_runningActionsCount = obj1993_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1993";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1993_img";
	var fromImagePath = "../images/obj1898_image.png";
	var toImagePath = "../images/switch224_to.png";
	var switchHelperId = "switchHelper259"
	var switchHelperRef = "#switchHelper259"
	var switchId = "259";
	var toSwitchId = "259";
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
				window.obj1993_onTap_runningActionsCount = window.obj1993_onTap_runningActionsCount - 1;
if (window.obj1993_onTap_runningActionsCount < 0) {
	window.obj1993_onTap_runningActionsCount = 0;
} else if (window.obj1993_onTap_runningActionsCount == 0) {
	obj1993_onTap_actionGroup1();
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
obj1993_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1993_onTap_activeActionGroupIndex = -1;
		$("#obj1993").trigger("obj1993_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1993) {
				console.warn("de-queueing event obj1993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1993_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4696();
function playAudioFile_4696() {
	window.obj1993_onTap_runningActionsCount = obj1993_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4696")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4696");
			$("#obj_audio_playSoundFile4696").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1993_onTap_runningActionsCount = window.obj1993_onTap_runningActionsCount - 1;
if (window.obj1993_onTap_runningActionsCount < 0) {
	window.obj1993_onTap_runningActionsCount = 0;
} else if (window.obj1993_onTap_runningActionsCount == 0) {
	obj1993_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1993_onTap_runningActionsCount = window.obj1993_onTap_runningActionsCount - 1;
if (window.obj1993_onTap_runningActionsCount < 0) {
	window.obj1993_onTap_runningActionsCount = 0;
} else if (window.obj1993_onTap_runningActionsCount == 0) {
	obj1993_onTap_actionGroup2();
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
				window.obj1993_onTap_runningActionsCount = window.obj1993_onTap_runningActionsCount - 1;
if (window.obj1993_onTap_runningActionsCount < 0) {
	window.obj1993_onTap_runningActionsCount = 0;
} else if (window.obj1993_onTap_runningActionsCount == 0) {
	obj1993_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj1993_onTap_runningActionsCount = window.obj1993_onTap_runningActionsCount - 1;
if (window.obj1993_onTap_runningActionsCount < 0) {
	window.obj1993_onTap_runningActionsCount = 0;
} else if (window.obj1993_onTap_runningActionsCount == 0) {
	obj1993_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj1993_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1993_onTap_activeActionGroupIndex = -1;
		$("#obj1993").trigger("obj1993_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1993) {
				console.warn("de-queueing event obj1993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1993_onTap_activeActionGroupIndex = 2;
	





















};
obj1996_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1996_onTap_activeActionGroupIndex = -1;
		$("#obj1996").trigger("obj1996_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1996) {
				console.warn("de-queueing event obj1996." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1996").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1996_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1996 
switchImage_1998();
function switchImage_1998() {
	window.obj1996_onTap_runningActionsCount = obj1996_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1996";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1996_img";
	var fromImagePath = "../images/obj1898_image.png";
	var toImagePath = "../images/switch224_to.png";
	var switchHelperId = "switchHelper261"
	var switchHelperRef = "#switchHelper261"
	var switchId = "261";
	var toSwitchId = "261";
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
				window.obj1996_onTap_runningActionsCount = window.obj1996_onTap_runningActionsCount - 1;
if (window.obj1996_onTap_runningActionsCount < 0) {
	window.obj1996_onTap_runningActionsCount = 0;
} else if (window.obj1996_onTap_runningActionsCount == 0) {
	obj1996_onTap_actionGroup1();
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
obj1996_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1996_onTap_activeActionGroupIndex = -1;
		$("#obj1996").trigger("obj1996_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1996) {
				console.warn("de-queueing event obj1996." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1996").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1996_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4697();
function playAudioFile_4697() {
	window.obj1996_onTap_runningActionsCount = obj1996_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4697")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4697");
			$("#obj_audio_playSoundFile4697").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1996_onTap_runningActionsCount = window.obj1996_onTap_runningActionsCount - 1;
if (window.obj1996_onTap_runningActionsCount < 0) {
	window.obj1996_onTap_runningActionsCount = 0;
} else if (window.obj1996_onTap_runningActionsCount == 0) {
	obj1996_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1996_onTap_runningActionsCount = window.obj1996_onTap_runningActionsCount - 1;
if (window.obj1996_onTap_runningActionsCount < 0) {
	window.obj1996_onTap_runningActionsCount = 0;
} else if (window.obj1996_onTap_runningActionsCount == 0) {
	obj1996_onTap_actionGroup2();
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
				window.obj1996_onTap_runningActionsCount = window.obj1996_onTap_runningActionsCount - 1;
if (window.obj1996_onTap_runningActionsCount < 0) {
	window.obj1996_onTap_runningActionsCount = 0;
} else if (window.obj1996_onTap_runningActionsCount == 0) {
	obj1996_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj1996_onTap_runningActionsCount = window.obj1996_onTap_runningActionsCount - 1;
if (window.obj1996_onTap_runningActionsCount < 0) {
	window.obj1996_onTap_runningActionsCount = 0;
} else if (window.obj1996_onTap_runningActionsCount == 0) {
	obj1996_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj1996_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1996_onTap_activeActionGroupIndex = -1;
		$("#obj1996").trigger("obj1996_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1996) {
				console.warn("de-queueing event obj1996." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1996").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1996_onTap_activeActionGroupIndex = 2;
	





















};
obj1999_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1999_onTap_activeActionGroupIndex = -1;
		$("#obj1999").trigger("obj1999_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1999) {
				console.warn("de-queueing event obj1999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1999_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1999 
switchImage_2001();
function switchImage_2001() {
	window.obj1999_onTap_runningActionsCount = obj1999_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1999";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1999_img";
	var fromImagePath = "../images/obj1898_image.png";
	var toImagePath = "../images/switch224_to.png";
	var switchHelperId = "switchHelper263"
	var switchHelperRef = "#switchHelper263"
	var switchId = "263";
	var toSwitchId = "263";
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
				window.obj1999_onTap_runningActionsCount = window.obj1999_onTap_runningActionsCount - 1;
if (window.obj1999_onTap_runningActionsCount < 0) {
	window.obj1999_onTap_runningActionsCount = 0;
} else if (window.obj1999_onTap_runningActionsCount == 0) {
	obj1999_onTap_actionGroup1();
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
obj1999_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1999_onTap_activeActionGroupIndex = -1;
		$("#obj1999").trigger("obj1999_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1999) {
				console.warn("de-queueing event obj1999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1999_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4701();
function playAudioFile_4701() {
	window.obj1999_onTap_runningActionsCount = obj1999_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4701")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4701");
			$("#obj_audio_playSoundFile4701").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1999_onTap_runningActionsCount = window.obj1999_onTap_runningActionsCount - 1;
if (window.obj1999_onTap_runningActionsCount < 0) {
	window.obj1999_onTap_runningActionsCount = 0;
} else if (window.obj1999_onTap_runningActionsCount == 0) {
	obj1999_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1999_onTap_runningActionsCount = window.obj1999_onTap_runningActionsCount - 1;
if (window.obj1999_onTap_runningActionsCount < 0) {
	window.obj1999_onTap_runningActionsCount = 0;
} else if (window.obj1999_onTap_runningActionsCount == 0) {
	obj1999_onTap_actionGroup2();
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
				window.obj1999_onTap_runningActionsCount = window.obj1999_onTap_runningActionsCount - 1;
if (window.obj1999_onTap_runningActionsCount < 0) {
	window.obj1999_onTap_runningActionsCount = 0;
} else if (window.obj1999_onTap_runningActionsCount == 0) {
	obj1999_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj1999_onTap_runningActionsCount = window.obj1999_onTap_runningActionsCount - 1;
if (window.obj1999_onTap_runningActionsCount < 0) {
	window.obj1999_onTap_runningActionsCount = 0;
} else if (window.obj1999_onTap_runningActionsCount == 0) {
	obj1999_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj1999_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1999_onTap_activeActionGroupIndex = -1;
		$("#obj1999").trigger("obj1999_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1999) {
				console.warn("de-queueing event obj1999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1999_onTap_activeActionGroupIndex = 2;
	





















};
obj2002_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2002_onTap_activeActionGroupIndex = -1;
		$("#obj2002").trigger("obj2002_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2002) {
				console.warn("de-queueing event obj2002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2002_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj2002 
switchImage_2004();
function switchImage_2004() {
	window.obj2002_onTap_runningActionsCount = obj2002_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj2002";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj2002_img";
	var fromImagePath = "../images/obj1898_image.png";
	var toImagePath = "../images/switch224_to.png";
	var switchHelperId = "switchHelper265"
	var switchHelperRef = "#switchHelper265"
	var switchId = "265";
	var toSwitchId = "265";
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
				window.obj2002_onTap_runningActionsCount = window.obj2002_onTap_runningActionsCount - 1;
if (window.obj2002_onTap_runningActionsCount < 0) {
	window.obj2002_onTap_runningActionsCount = 0;
} else if (window.obj2002_onTap_runningActionsCount == 0) {
	obj2002_onTap_actionGroup1();
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
obj2002_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2002_onTap_activeActionGroupIndex = -1;
		$("#obj2002").trigger("obj2002_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2002) {
				console.warn("de-queueing event obj2002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2002_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4698();
function playAudioFile_4698() {
	window.obj2002_onTap_runningActionsCount = obj2002_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4698")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4698");
			$("#obj_audio_playSoundFile4698").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2002_onTap_runningActionsCount = window.obj2002_onTap_runningActionsCount - 1;
if (window.obj2002_onTap_runningActionsCount < 0) {
	window.obj2002_onTap_runningActionsCount = 0;
} else if (window.obj2002_onTap_runningActionsCount == 0) {
	obj2002_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2002_onTap_runningActionsCount = window.obj2002_onTap_runningActionsCount - 1;
if (window.obj2002_onTap_runningActionsCount < 0) {
	window.obj2002_onTap_runningActionsCount = 0;
} else if (window.obj2002_onTap_runningActionsCount == 0) {
	obj2002_onTap_actionGroup2();
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
				window.obj2002_onTap_runningActionsCount = window.obj2002_onTap_runningActionsCount - 1;
if (window.obj2002_onTap_runningActionsCount < 0) {
	window.obj2002_onTap_runningActionsCount = 0;
} else if (window.obj2002_onTap_runningActionsCount == 0) {
	obj2002_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2002_onTap_runningActionsCount = window.obj2002_onTap_runningActionsCount - 1;
if (window.obj2002_onTap_runningActionsCount < 0) {
	window.obj2002_onTap_runningActionsCount = 0;
} else if (window.obj2002_onTap_runningActionsCount == 0) {
	obj2002_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2002_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2002_onTap_activeActionGroupIndex = -1;
		$("#obj2002").trigger("obj2002_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2002) {
				console.warn("de-queueing event obj2002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2002_onTap_activeActionGroupIndex = 2;
	





















};
obj2005_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2005_onTap_activeActionGroupIndex = -1;
		$("#obj2005").trigger("obj2005_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2005) {
				console.warn("de-queueing event obj2005." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2005").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2005_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj2005 
switchImage_2007();
function switchImage_2007() {
	window.obj2005_onTap_runningActionsCount = obj2005_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj2005";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj2005_img";
	var fromImagePath = "../images/obj1898_image.png";
	var toImagePath = "../images/switch224_to.png";
	var switchHelperId = "switchHelper267"
	var switchHelperRef = "#switchHelper267"
	var switchId = "267";
	var toSwitchId = "267";
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
				window.obj2005_onTap_runningActionsCount = window.obj2005_onTap_runningActionsCount - 1;
if (window.obj2005_onTap_runningActionsCount < 0) {
	window.obj2005_onTap_runningActionsCount = 0;
} else if (window.obj2005_onTap_runningActionsCount == 0) {
	obj2005_onTap_actionGroup1();
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
obj2005_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2005_onTap_activeActionGroupIndex = -1;
		$("#obj2005").trigger("obj2005_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2005) {
				console.warn("de-queueing event obj2005." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2005").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2005_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4699();
function playAudioFile_4699() {
	window.obj2005_onTap_runningActionsCount = obj2005_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4699")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4699");
			$("#obj_audio_playSoundFile4699").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2005_onTap_runningActionsCount = window.obj2005_onTap_runningActionsCount - 1;
if (window.obj2005_onTap_runningActionsCount < 0) {
	window.obj2005_onTap_runningActionsCount = 0;
} else if (window.obj2005_onTap_runningActionsCount == 0) {
	obj2005_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2005_onTap_runningActionsCount = window.obj2005_onTap_runningActionsCount - 1;
if (window.obj2005_onTap_runningActionsCount < 0) {
	window.obj2005_onTap_runningActionsCount = 0;
} else if (window.obj2005_onTap_runningActionsCount == 0) {
	obj2005_onTap_actionGroup2();
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
				window.obj2005_onTap_runningActionsCount = window.obj2005_onTap_runningActionsCount - 1;
if (window.obj2005_onTap_runningActionsCount < 0) {
	window.obj2005_onTap_runningActionsCount = 0;
} else if (window.obj2005_onTap_runningActionsCount == 0) {
	obj2005_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2005_onTap_runningActionsCount = window.obj2005_onTap_runningActionsCount - 1;
if (window.obj2005_onTap_runningActionsCount < 0) {
	window.obj2005_onTap_runningActionsCount = 0;
} else if (window.obj2005_onTap_runningActionsCount == 0) {
	obj2005_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2005_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2005_onTap_activeActionGroupIndex = -1;
		$("#obj2005").trigger("obj2005_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2005) {
				console.warn("de-queueing event obj2005." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2005").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2005_onTap_activeActionGroupIndex = 2;
	





















};
obj2008_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2008_onTap_activeActionGroupIndex = -1;
		$("#obj2008").trigger("obj2008_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2008) {
				console.warn("de-queueing event obj2008." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2008").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2008_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj2008 
switchImage_2010();
function switchImage_2010() {
	window.obj2008_onTap_runningActionsCount = obj2008_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj2008";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj2008_img";
	var fromImagePath = "../images/obj2008_image.png";
	var toImagePath = "../images/switch269_to.png";
	var switchHelperId = "switchHelper269"
	var switchHelperRef = "#switchHelper269"
	var switchId = "269";
	var toSwitchId = "269";
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
				window.obj2008_onTap_runningActionsCount = window.obj2008_onTap_runningActionsCount - 1;
if (window.obj2008_onTap_runningActionsCount < 0) {
	window.obj2008_onTap_runningActionsCount = 0;
} else if (window.obj2008_onTap_runningActionsCount == 0) {
	obj2008_onTap_actionGroup1();
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
obj2008_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2008_onTap_activeActionGroupIndex = -1;
		$("#obj2008").trigger("obj2008_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2008) {
				console.warn("de-queueing event obj2008." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2008").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2008_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4700();
function playAudioFile_4700() {
	window.obj2008_onTap_runningActionsCount = obj2008_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4700")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4700");
			$("#obj_audio_playSoundFile4700").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2008_onTap_runningActionsCount = window.obj2008_onTap_runningActionsCount - 1;
if (window.obj2008_onTap_runningActionsCount < 0) {
	window.obj2008_onTap_runningActionsCount = 0;
} else if (window.obj2008_onTap_runningActionsCount == 0) {
	obj2008_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2008_onTap_runningActionsCount = window.obj2008_onTap_runningActionsCount - 1;
if (window.obj2008_onTap_runningActionsCount < 0) {
	window.obj2008_onTap_runningActionsCount = 0;
} else if (window.obj2008_onTap_runningActionsCount == 0) {
	obj2008_onTap_actionGroup2();
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
				window.obj2008_onTap_runningActionsCount = window.obj2008_onTap_runningActionsCount - 1;
if (window.obj2008_onTap_runningActionsCount < 0) {
	window.obj2008_onTap_runningActionsCount = 0;
} else if (window.obj2008_onTap_runningActionsCount == 0) {
	obj2008_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2008_onTap_runningActionsCount = window.obj2008_onTap_runningActionsCount - 1;
if (window.obj2008_onTap_runningActionsCount < 0) {
	window.obj2008_onTap_runningActionsCount = 0;
} else if (window.obj2008_onTap_runningActionsCount == 0) {
	obj2008_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2008_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2008_onTap_activeActionGroupIndex = -1;
		$("#obj2008").trigger("obj2008_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2008) {
				console.warn("de-queueing event obj2008." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2008").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2008_onTap_activeActionGroupIndex = 2;
	





















};
obj2011_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2011_onTap_activeActionGroupIndex = -1;
		$("#obj2011").trigger("obj2011_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2011) {
				console.warn("de-queueing event obj2011." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2011").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2011_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj2011 
switchImage_2013();
function switchImage_2013() {
	window.obj2011_onTap_runningActionsCount = obj2011_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj2011";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj2011_img";
	var fromImagePath = "../images/obj1898_image.png";
	var toImagePath = "../images/switch224_to.png";
	var switchHelperId = "switchHelper271"
	var switchHelperRef = "#switchHelper271"
	var switchId = "271";
	var toSwitchId = "271";
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
				window.obj2011_onTap_runningActionsCount = window.obj2011_onTap_runningActionsCount - 1;
if (window.obj2011_onTap_runningActionsCount < 0) {
	window.obj2011_onTap_runningActionsCount = 0;
} else if (window.obj2011_onTap_runningActionsCount == 0) {
	obj2011_onTap_actionGroup1();
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
obj2011_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2011_onTap_activeActionGroupIndex = -1;
		$("#obj2011").trigger("obj2011_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2011) {
				console.warn("de-queueing event obj2011." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2011").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2011_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4702();
function playAudioFile_4702() {
	window.obj2011_onTap_runningActionsCount = obj2011_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4702")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4702");
			$("#obj_audio_playSoundFile4702").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2011_onTap_runningActionsCount = window.obj2011_onTap_runningActionsCount - 1;
if (window.obj2011_onTap_runningActionsCount < 0) {
	window.obj2011_onTap_runningActionsCount = 0;
} else if (window.obj2011_onTap_runningActionsCount == 0) {
	obj2011_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2011_onTap_runningActionsCount = window.obj2011_onTap_runningActionsCount - 1;
if (window.obj2011_onTap_runningActionsCount < 0) {
	window.obj2011_onTap_runningActionsCount = 0;
} else if (window.obj2011_onTap_runningActionsCount == 0) {
	obj2011_onTap_actionGroup2();
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
				window.obj2011_onTap_runningActionsCount = window.obj2011_onTap_runningActionsCount - 1;
if (window.obj2011_onTap_runningActionsCount < 0) {
	window.obj2011_onTap_runningActionsCount = 0;
} else if (window.obj2011_onTap_runningActionsCount == 0) {
	obj2011_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2011_onTap_runningActionsCount = window.obj2011_onTap_runningActionsCount - 1;
if (window.obj2011_onTap_runningActionsCount < 0) {
	window.obj2011_onTap_runningActionsCount = 0;
} else if (window.obj2011_onTap_runningActionsCount == 0) {
	obj2011_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj2011_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2011_onTap_activeActionGroupIndex = -1;
		$("#obj2011").trigger("obj2011_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2011) {
				console.warn("de-queueing event obj2011." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2011").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2011_onTap_activeActionGroupIndex = 2;
	





















};
obj2935_SCEventReadAloudStarted_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2935_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj2935").trigger("obj2935_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2935) {
				console.warn("de-queueing event obj2935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2935_SCEventReadAloudStarted_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj2935 
switchImage_2939();
function switchImage_2939() {
	window.obj2935_SCEventReadAloudStarted_runningActionsCount = obj2935_SCEventReadAloudStarted_runningActionsCount + 1;

	var targetObjectId = "#obj2935";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj2935_img";
	var fromImagePath = "../images/obj2935_image.png";
	var toImagePath = "../images/switch36_to.png";
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
				window.obj2935_SCEventReadAloudStarted_runningActionsCount = window.obj2935_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj2935_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj2935_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj2935_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj2935_SCEventReadAloudStarted_actionGroup1();
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
obj2935_SCEventReadAloudStarted_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2935_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj2935").trigger("obj2935_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2935) {
				console.warn("de-queueing event obj2935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2935_SCEventReadAloudStarted_activeActionGroupIndex = 1;
	





















};
obj2935_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2935_onTouchUp_activeActionGroupIndex = -1;
		$("#obj2935").trigger("obj2935_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2935) {
				console.warn("de-queueing event obj2935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2935_onTouchUp_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2943();
function runjs_2943() {
	window.obj2935_onTouchUp_runningActionsCount = obj2935_onTouchUp_runningActionsCount + 1;

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
    
    var videos = document.querySelectorAll("video");
    videos.forEach((video, index) => {
        video.load();
        video.play();
        if (currentState) {
            console.log("Toggle Button: Showing and playing video #" + (index + 1));
            // video.style.display = "block"; // Adjust as needed for your layout
            video.load();
            video.play();
        } else {
            console.log("Toggle Button: Hiding and pausing video #" + (index + 1));
            video.pause();
            // video.style.display = "none";
        }
    });
   
    
})();
	
	setTimeout(function() {
		window.obj2935_onTouchUp_runningActionsCount = window.obj2935_onTouchUp_runningActionsCount - 1;
if (window.obj2935_onTouchUp_runningActionsCount < 0) {
	window.obj2935_onTouchUp_runningActionsCount = 0;
} else if (window.obj2935_onTouchUp_runningActionsCount == 0) {
	obj2935_onTouchUp_actionGroup1();
}
	}, 1);
}







};
obj2935_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2935_onTouchUp_activeActionGroupIndex = -1;
		$("#obj2935").trigger("obj2935_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2935) {
				console.warn("de-queueing event obj2935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2935_onTouchUp_activeActionGroupIndex = 1;
	





















};
obj2935_SCEventReadAloudStopped_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2935_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj2935").trigger("obj2935_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2935) {
				console.warn("de-queueing event obj2935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2935_SCEventReadAloudStopped_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj2935 
switchImage_2945();
function switchImage_2945() {
	window.obj2935_SCEventReadAloudStopped_runningActionsCount = obj2935_SCEventReadAloudStopped_runningActionsCount + 1;

	var targetObjectId = "#obj2935";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj2935_img";
	var fromImagePath = "../images/obj2935_image.png";
	var toImagePath = "../images/obj2935_image.png";
	var switchHelperId = "switchHelper275"
	var switchHelperRef = "#switchHelper275"
	var switchId = "275";
	var toSwitchId = "275";
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
				window.obj2935_SCEventReadAloudStopped_runningActionsCount = window.obj2935_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj2935_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj2935_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj2935_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj2935_SCEventReadAloudStopped_actionGroup1();
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
obj2935_SCEventReadAloudStopped_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2935_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj2935").trigger("obj2935_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2935) {
				console.warn("de-queueing event obj2935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2935_SCEventReadAloudStopped_activeActionGroupIndex = 1;
	





















};
obj2928_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2928_onTap_activeActionGroupIndex = -1;
		$("#obj2928").trigger("obj2928_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2928) {
				console.warn("de-queueing event obj2928." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2928").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2928_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2930();
function runjs_2930() {
	window.obj2928_onTap_runningActionsCount = obj2928_onTap_runningActionsCount + 1;

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
    videos.forEach((video, index) => {
        if (newState) {
            console.log("Toggle Button: Showing and playing video #" + (index + 1));
            video.style.display = "block"; // Adjust as needed for your layout
            // video.play();
        } else {
            console.log("Toggle Button: Hiding and pausing video #" + (index + 1));
            // video.pause();
            video.style.display = "none";
        }
    });
   
    
})();
	
	setTimeout(function() {
		window.obj2928_onTap_runningActionsCount = window.obj2928_onTap_runningActionsCount - 1;
if (window.obj2928_onTap_runningActionsCount < 0) {
	window.obj2928_onTap_runningActionsCount = 0;
} else if (window.obj2928_onTap_runningActionsCount == 0) {
	obj2928_onTap_actionGroup1();
}
	}, 1);
}







};
obj2928_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2928_onTap_activeActionGroupIndex = -1;
		$("#obj2928").trigger("obj2928_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2928) {
				console.warn("de-queueing event obj2928." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2928").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2928_onTap_activeActionGroupIndex = 1;
	



//	action: switchImage 
//	target: obj2928 
switchImage_2931();
function switchImage_2931() {
	window.obj2928_onTap_runningActionsCount = obj2928_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj2928";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj2928_img";
	var fromImagePath = "../images/obj2928_image.png";
	var toImagePath = "../images/switch38_to.png";
	var switchHelperId = "switchHelper276"
	var switchHelperRef = "#switchHelper276"
	var switchId = "276";
	var toSwitchId = "276";
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
				window.obj2928_onTap_runningActionsCount = window.obj2928_onTap_runningActionsCount - 1;
if (window.obj2928_onTap_runningActionsCount < 0) {
	window.obj2928_onTap_runningActionsCount = 0;
} else if (window.obj2928_onTap_runningActionsCount == 0) {
	obj2928_onTap_actionGroup2();
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
obj2928_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2928_onTap_activeActionGroupIndex = -1;
		$("#obj2928").trigger("obj2928_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2928) {
				console.warn("de-queueing event obj2928." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2928").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2928_onTap_activeActionGroupIndex = 2;
	





















};
obj2924_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2924_onTap_activeActionGroupIndex = -1;
		$("#obj2924").trigger("obj2924_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2924) {
				console.warn("de-queueing event obj2924." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2924").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2924_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj2924 
switchImage_2926();
function switchImage_2926() {
	window.obj2924_onTap_runningActionsCount = obj2924_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj2924";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj2924_img";
	var fromImagePath = "../images/obj2924_image.png";
	var toImagePath = "../images/switch39_to.png";
	var switchHelperId = "switchHelper277"
	var switchHelperRef = "#switchHelper277"
	var switchId = "277";
	var toSwitchId = "277";
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
				window.obj2924_onTap_runningActionsCount = window.obj2924_onTap_runningActionsCount - 1;
if (window.obj2924_onTap_runningActionsCount < 0) {
	window.obj2924_onTap_runningActionsCount = 0;
} else if (window.obj2924_onTap_runningActionsCount == 0) {
	obj2924_onTap_actionGroup1();
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
obj2924_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2924_onTap_activeActionGroupIndex = -1;
		$("#obj2924").trigger("obj2924_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2924) {
				console.warn("de-queueing event obj2924." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2924").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2924_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2927();
function runjs_2927() {
	window.obj2924_onTap_runningActionsCount = obj2924_onTap_runningActionsCount + 1;

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
		window.obj2924_onTap_runningActionsCount = window.obj2924_onTap_runningActionsCount - 1;
if (window.obj2924_onTap_runningActionsCount < 0) {
	window.obj2924_onTap_runningActionsCount = 0;
} else if (window.obj2924_onTap_runningActionsCount == 0) {
	obj2924_onTap_actionGroup2();
}
	}, 1);
}







};
obj2924_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2924_onTap_activeActionGroupIndex = -1;
		$("#obj2924").trigger("obj2924_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2924) {
				console.warn("de-queueing event obj2924." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2924").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2924_onTap_activeActionGroupIndex = 2;
	





















};
obj2921_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2921_onTap_activeActionGroupIndex = -1;
		$("#obj2921").trigger("obj2921_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2921) {
				console.warn("de-queueing event obj2921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2921_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2923();
function goToPage_2923() {
	window.obj2921_onTap_runningActionsCount = obj2921_onTap_runningActionsCount + 1;
	$("#anchor278")[0].click();
	window.obj2921_onTap_runningActionsCount = window.obj2921_onTap_runningActionsCount - 1;
if (window.obj2921_onTap_runningActionsCount < 0) {
	window.obj2921_onTap_runningActionsCount = 0;
} else if (window.obj2921_onTap_runningActionsCount == 0) {
	obj2921_onTap_actionGroup1();
}
}





















};
obj2921_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2921_onTap_activeActionGroupIndex = -1;
		$("#obj2921").trigger("obj2921_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2921) {
				console.warn("de-queueing event obj2921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2921_onTap_activeActionGroupIndex = 1;
	





















};
obj2918_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2918_onTap_activeActionGroupIndex = -1;
		$("#obj2918").trigger("obj2918_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2918) {
				console.warn("de-queueing event obj2918." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2918").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2918_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2920();
function goToPage_2920() {
	window.obj2918_onTap_runningActionsCount = obj2918_onTap_runningActionsCount + 1;
	$("#anchor279")[0].click();
	window.obj2918_onTap_runningActionsCount = window.obj2918_onTap_runningActionsCount - 1;
if (window.obj2918_onTap_runningActionsCount < 0) {
	window.obj2918_onTap_runningActionsCount = 0;
} else if (window.obj2918_onTap_runningActionsCount == 0) {
	obj2918_onTap_actionGroup1();
}
}





















};
obj2918_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2918_onTap_activeActionGroupIndex = -1;
		$("#obj2918").trigger("obj2918_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2918) {
				console.warn("de-queueing event obj2918." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2918").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2918_onTap_activeActionGroupIndex = 1;
	





















};
obj2907_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2907_onTouchUp_activeActionGroupIndex = -1;
		$("#obj2907").trigger("obj2907_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2907) {
				console.warn("de-queueing event obj2907." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2907").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2907_onTouchUp_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2914();
function runjs_2914() {
	window.obj2907_onTouchUp_runningActionsCount = obj2907_onTouchUp_runningActionsCount + 1;

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
    
    var videos = document.querySelectorAll("video");
    videos.forEach((video, index) => {
        video.load();
        video.play();
        if (currentState) {
            console.log("Toggle Button: Showing and playing video #" + (index + 1));
            // video.style.display = "block"; // Adjust as needed for your layout
            video.load();
            video.play();
        } else {
            console.log("Toggle Button: Hiding and pausing video #" + (index + 1));
            video.pause();
            // video.style.display = "none";
        }
    });
   
    
})();
	
	setTimeout(function() {
		window.obj2907_onTouchUp_runningActionsCount = window.obj2907_onTouchUp_runningActionsCount - 1;
if (window.obj2907_onTouchUp_runningActionsCount < 0) {
	window.obj2907_onTouchUp_runningActionsCount = 0;
} else if (window.obj2907_onTouchUp_runningActionsCount == 0) {
	obj2907_onTouchUp_actionGroup1();
}
	}, 1);
}







};
obj2907_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2907_onTouchUp_activeActionGroupIndex = -1;
		$("#obj2907").trigger("obj2907_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2907) {
				console.warn("de-queueing event obj2907." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2907").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2907_onTouchUp_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





























































































/*
 *
 *   obj1978: Event Touch Down
 *
 */
$("#obj1978").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1978_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1978_onTap is still running");
	return;
}
var obj1978_onTap_runningActionsCount = 0;
var obj1978_onTap_loopCount = 0;
obj1978_onTap_actionGroup0();
});










/*
 *
 *   obj1981: Event Touch Down
 *
 */
$("#obj1981").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1981_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1981_onTap is still running");
	return;
}
var obj1981_onTap_runningActionsCount = 0;
var obj1981_onTap_loopCount = 0;
obj1981_onTap_actionGroup0();
});










/*
 *
 *   obj1984: Event Touch Down
 *
 */
$("#obj1984").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1984_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1984_onTap is still running");
	return;
}
var obj1984_onTap_runningActionsCount = 0;
var obj1984_onTap_loopCount = 0;
obj1984_onTap_actionGroup0();
});










/*
 *
 *   obj1987: Event Touch Down
 *
 */
$("#obj1987").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1987_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1987_onTap is still running");
	return;
}
var obj1987_onTap_runningActionsCount = 0;
var obj1987_onTap_loopCount = 0;
obj1987_onTap_actionGroup0();
});










/*
 *
 *   obj1990: Event Touch Down
 *
 */
$("#obj1990").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1990_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1990_onTap is still running");
	return;
}
var obj1990_onTap_runningActionsCount = 0;
var obj1990_onTap_loopCount = 0;
obj1990_onTap_actionGroup0();
});










/*
 *
 *   obj1993: Event Touch Down
 *
 */
$("#obj1993").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1993_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1993_onTap is still running");
	return;
}
var obj1993_onTap_runningActionsCount = 0;
var obj1993_onTap_loopCount = 0;
obj1993_onTap_actionGroup0();
});










/*
 *
 *   obj1996: Event Touch Down
 *
 */
$("#obj1996").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1996_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1996_onTap is still running");
	return;
}
var obj1996_onTap_runningActionsCount = 0;
var obj1996_onTap_loopCount = 0;
obj1996_onTap_actionGroup0();
});










/*
 *
 *   obj1999: Event Touch Down
 *
 */
$("#obj1999").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1999_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1999_onTap is still running");
	return;
}
var obj1999_onTap_runningActionsCount = 0;
var obj1999_onTap_loopCount = 0;
obj1999_onTap_actionGroup0();
});










/*
 *
 *   obj2002: Event Touch Down
 *
 */
$("#obj2002").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2002_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2002_onTap is still running");
	return;
}
var obj2002_onTap_runningActionsCount = 0;
var obj2002_onTap_loopCount = 0;
obj2002_onTap_actionGroup0();
});










/*
 *
 *   obj2005: Event Touch Down
 *
 */
$("#obj2005").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2005_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2005_onTap is still running");
	return;
}
var obj2005_onTap_runningActionsCount = 0;
var obj2005_onTap_loopCount = 0;
obj2005_onTap_actionGroup0();
});










/*
 *
 *   obj2008: Event Touch Down
 *
 */
$("#obj2008").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2008_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2008_onTap is still running");
	return;
}
var obj2008_onTap_runningActionsCount = 0;
var obj2008_onTap_loopCount = 0;
obj2008_onTap_actionGroup0();
});










/*
 *
 *   obj2011: Event Touch Down
 *
 */
$("#obj2011").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2011_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2011_onTap is still running");
	return;
}
var obj2011_onTap_runningActionsCount = 0;
var obj2011_onTap_loopCount = 0;
obj2011_onTap_actionGroup0();
});




















/*
 *
 *   obj2935: Event Touch Up
 *
 */
$("#obj2935").bind("touchdown touchmove", function(event) {
	event.preventDefault(); // prevent readers from starting a page swipe on this element
})
$("#obj2935").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj2935").unbind("obj2935_onTouchDown_ended", startActionList);
	    if (window.obj2935_onTouchUp_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2935_onTouchUp is still running");
	return;
}
var obj2935_onTouchUp_runningActionsCount = 0;
var obj2935_onTouchUp_loopCount = 0;
obj2935_onTouchUp_actionGroup0();
	};
	if ((window['obj2935_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj2935_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj2935").bind("obj2935_onTouchDown_ended", startActionList);
	}
});




/*
 *
 *   obj2935: Event SCEventReadAloudStarted
 *
 */
$("#obj2935").bind("SCEventReadAloudStarted", function(event) {
	if (window.obj2935_SCEventReadAloudStarted_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2935_SCEventReadAloudStarted is still running");
	return;
}
var obj2935_SCEventReadAloudStarted_runningActionsCount = 0;
var obj2935_SCEventReadAloudStarted_loopCount = 0;
obj2935_SCEventReadAloudStarted_actionGroup0();
});
/*
 *
 *   obj2935: Event SCEventReadAloudStopped
 *
 */
$("#obj2935").bind("SCEventReadAloudStopped", function(event) {
	if (window.obj2935_SCEventReadAloudStopped_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2935_SCEventReadAloudStopped is still running");
	return;
}
var obj2935_SCEventReadAloudStopped_runningActionsCount = 0;
var obj2935_SCEventReadAloudStopped_loopCount = 0;
obj2935_SCEventReadAloudStopped_actionGroup0();
});





/*
 *
 *   obj2928: Event Touch Down
 *
 */
$("#obj2928").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2928_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2928_onTap is still running");
	return;
}
var obj2928_onTap_runningActionsCount = 0;
var obj2928_onTap_loopCount = 0;
obj2928_onTap_actionGroup0();
});










/*
 *
 *   obj2924: Event Touch Down
 *
 */
$("#obj2924").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2924_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2924_onTap is still running");
	return;
}
var obj2924_onTap_runningActionsCount = 0;
var obj2924_onTap_loopCount = 0;
obj2924_onTap_actionGroup0();
});










/*
 *
 *   obj2921: Event Touch Down
 *
 */
$("#obj2921").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2921_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2921_onTap is still running");
	return;
}
var obj2921_onTap_runningActionsCount = 0;
var obj2921_onTap_loopCount = 0;
obj2921_onTap_actionGroup0();
});










/*
 *
 *   obj2918: Event Touch Down
 *
 */
$("#obj2918").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2918_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2918_onTap is still running");
	return;
}
var obj2918_onTap_runningActionsCount = 0;
var obj2918_onTap_loopCount = 0;
obj2918_onTap_actionGroup0();
});




















/*
 *
 *   obj2907: Event Touch Up
 *
 */
$("#obj2907").bind("touchdown touchmove", function(event) {
	event.preventDefault(); // prevent readers from starting a page swipe on this element
})
$("#obj2907").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj2907").unbind("obj2907_onTouchDown_ended", startActionList);
	    if (window.obj2907_onTouchUp_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2907_onTouchUp is still running");
	return;
}
var obj2907_onTouchUp_runningActionsCount = 0;
var obj2907_onTouchUp_loopCount = 0;
obj2907_onTouchUp_actionGroup0();
	};
	if ((window['obj2907_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj2907_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj2907").bind("obj2907_onTouchDown_ended", startActionList);
	}
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
$("#obj4502").trigger('SCEventShow');
$("#obj1796").trigger('SCEventShow');
$("#obj1955").trigger('SCEventShow');
$("#obj1957").trigger('SCEventShow');
$("#obj1961").trigger('SCEventShow');
$("#obj1959").trigger('SCEventShow');
$("#obj1963").trigger('SCEventShow');
$("#obj1965").trigger('SCEventShow');
$("#obj1978").trigger('SCEventShow');
$("#obj1981").trigger('SCEventShow');
$("#obj1984").trigger('SCEventShow');
$("#obj1987").trigger('SCEventShow');
$("#obj1990").trigger('SCEventShow');
$("#obj1993").trigger('SCEventShow');
$("#obj1996").trigger('SCEventShow');
$("#obj1999").trigger('SCEventShow');
$("#obj2002").trigger('SCEventShow');
$("#obj2005").trigger('SCEventShow');
$("#obj2008").trigger('SCEventShow');
$("#obj2011").trigger('SCEventShow');
$("#obj2935").trigger('SCEventShow');
$("#obj2928").trigger('SCEventShow');
$("#obj2921").trigger('SCEventShow');
$("#obj2918").trigger('SCEventShow');
$("#obj2907").trigger('SCEventShow');
$("#obj2900").trigger('SCEventShow');
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
    
});