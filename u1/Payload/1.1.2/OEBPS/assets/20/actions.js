pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Unit 1";
pubcoder.page.id = pubcoder.page.id || 1488;
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
var obj1900_onTap_activeActionGroupIndex = -1;
var obj1900_onTap_runningActionsCount = 0;
var obj1900_onTap_loopCount = 0;
var obj1902_onTap_activeActionGroupIndex = -1;
var obj1902_onTap_runningActionsCount = 0;
var obj1902_onTap_loopCount = 0;
var obj1904_onTap_activeActionGroupIndex = -1;
var obj1904_onTap_runningActionsCount = 0;
var obj1904_onTap_loopCount = 0;
var obj1912_onTap_activeActionGroupIndex = -1;
var obj1912_onTap_runningActionsCount = 0;
var obj1912_onTap_loopCount = 0;
var obj1910_onTap_activeActionGroupIndex = -1;
var obj1910_onTap_runningActionsCount = 0;
var obj1910_onTap_loopCount = 0;
var obj1908_onTap_activeActionGroupIndex = -1;
var obj1908_onTap_runningActionsCount = 0;
var obj1908_onTap_loopCount = 0;
var obj1906_onTap_activeActionGroupIndex = -1;
var obj1906_onTap_runningActionsCount = 0;
var obj1906_onTap_loopCount = 0;
var obj6898_onTap_activeActionGroupIndex = -1;
var obj6898_onTap_runningActionsCount = 0;
var obj6898_onTap_loopCount = 0;
var obj6901_onTap_activeActionGroupIndex = -1;
var obj6901_onTap_runningActionsCount = 0;
var obj6901_onTap_loopCount = 0;
var obj6906_onTap_activeActionGroupIndex = -1;
var obj6906_onTap_runningActionsCount = 0;
var obj6906_onTap_loopCount = 0;
var obj6910_onTap_activeActionGroupIndex = -1;
var obj6910_onTap_runningActionsCount = 0;
var obj6910_onTap_loopCount = 0;
var obj6914_onTap_activeActionGroupIndex = -1;
var obj6914_onTap_runningActionsCount = 0;
var obj6914_onTap_loopCount = 0;
var obj6918_onTap_activeActionGroupIndex = -1;
var obj6918_onTap_runningActionsCount = 0;
var obj6918_onTap_loopCount = 0;
var obj6922_onTap_activeActionGroupIndex = -1;
var obj6922_onTap_runningActionsCount = 0;
var obj6922_onTap_loopCount = 0;
var obj6926_onTap_activeActionGroupIndex = -1;
var obj6926_onTap_runningActionsCount = 0;
var obj6926_onTap_loopCount = 0;
var obj2935_SCEventReadAloudStarted_activeActionGroupIndex = -1;
var obj2935_SCEventReadAloudStarted_runningActionsCount = 0;
var obj2935_SCEventReadAloudStarted_loopCount = 0;
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
var obj6740_onTap_activeActionGroupIndex = -1;
var obj6740_onTap_runningActionsCount = 0;
var obj6740_onTap_loopCount = 0;
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
		
obj1900_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1900_onTap_activeActionGroupIndex = -1;
		$("#obj1900").trigger("obj1900_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1900) {
				console.warn("de-queueing event obj1900." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1900").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1900_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1900 
switchImage_1971();
function switchImage_1971() {
	window.obj1900_onTap_runningActionsCount = obj1900_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1900";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1900_img";
	var fromImagePath = "../images/obj1900_image.png";
	var toImagePath = "../images/switch260_to.png";
	var switchHelperId = "switchHelper260"
	var switchHelperRef = "#switchHelper260"
	var switchId = "260";
	var toSwitchId = "260";
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
				window.obj1900_onTap_runningActionsCount = window.obj1900_onTap_runningActionsCount - 1;
if (window.obj1900_onTap_runningActionsCount < 0) {
	window.obj1900_onTap_runningActionsCount = 0;
} else if (window.obj1900_onTap_runningActionsCount == 0) {
	obj1900_onTap_actionGroup1();
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
obj1900_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1900_onTap_activeActionGroupIndex = -1;
		$("#obj1900").trigger("obj1900_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1900) {
				console.warn("de-queueing event obj1900." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1900").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1900_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4684();
function playAudioFile_4684() {
	window.obj1900_onTap_runningActionsCount = obj1900_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4684")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4684");
			$("#obj_audio_playSoundFile4684").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1900_onTap_runningActionsCount = window.obj1900_onTap_runningActionsCount - 1;
if (window.obj1900_onTap_runningActionsCount < 0) {
	window.obj1900_onTap_runningActionsCount = 0;
} else if (window.obj1900_onTap_runningActionsCount == 0) {
	obj1900_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1900_onTap_runningActionsCount = window.obj1900_onTap_runningActionsCount - 1;
if (window.obj1900_onTap_runningActionsCount < 0) {
	window.obj1900_onTap_runningActionsCount = 0;
} else if (window.obj1900_onTap_runningActionsCount == 0) {
	obj1900_onTap_actionGroup2();
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
				window.obj1900_onTap_runningActionsCount = window.obj1900_onTap_runningActionsCount - 1;
if (window.obj1900_onTap_runningActionsCount < 0) {
	window.obj1900_onTap_runningActionsCount = 0;
} else if (window.obj1900_onTap_runningActionsCount == 0) {
	obj1900_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj1900_onTap_runningActionsCount = window.obj1900_onTap_runningActionsCount - 1;
if (window.obj1900_onTap_runningActionsCount < 0) {
	window.obj1900_onTap_runningActionsCount = 0;
} else if (window.obj1900_onTap_runningActionsCount == 0) {
	obj1900_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj1900_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1900_onTap_activeActionGroupIndex = -1;
		$("#obj1900").trigger("obj1900_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1900) {
				console.warn("de-queueing event obj1900." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1900").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1900_onTap_activeActionGroupIndex = 2;
	





















};
obj1902_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1902_onTap_activeActionGroupIndex = -1;
		$("#obj1902").trigger("obj1902_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1902) {
				console.warn("de-queueing event obj1902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1902_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1902 
switchImage_1977();
function switchImage_1977() {
	window.obj1902_onTap_runningActionsCount = obj1902_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1902";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1902_img";
	var fromImagePath = "../images/obj1900_image.png";
	var toImagePath = "../images/switch260_to.png";
	var switchHelperId = "switchHelper262"
	var switchHelperRef = "#switchHelper262"
	var switchId = "262";
	var toSwitchId = "262";
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
				window.obj1902_onTap_runningActionsCount = window.obj1902_onTap_runningActionsCount - 1;
if (window.obj1902_onTap_runningActionsCount < 0) {
	window.obj1902_onTap_runningActionsCount = 0;
} else if (window.obj1902_onTap_runningActionsCount == 0) {
	obj1902_onTap_actionGroup1();
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
obj1902_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1902_onTap_activeActionGroupIndex = -1;
		$("#obj1902").trigger("obj1902_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1902) {
				console.warn("de-queueing event obj1902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1902_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4686();
function playAudioFile_4686() {
	window.obj1902_onTap_runningActionsCount = obj1902_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4686")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4686");
			$("#obj_audio_playSoundFile4686").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1902_onTap_runningActionsCount = window.obj1902_onTap_runningActionsCount - 1;
if (window.obj1902_onTap_runningActionsCount < 0) {
	window.obj1902_onTap_runningActionsCount = 0;
} else if (window.obj1902_onTap_runningActionsCount == 0) {
	obj1902_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1902_onTap_runningActionsCount = window.obj1902_onTap_runningActionsCount - 1;
if (window.obj1902_onTap_runningActionsCount < 0) {
	window.obj1902_onTap_runningActionsCount = 0;
} else if (window.obj1902_onTap_runningActionsCount == 0) {
	obj1902_onTap_actionGroup2();
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
				window.obj1902_onTap_runningActionsCount = window.obj1902_onTap_runningActionsCount - 1;
if (window.obj1902_onTap_runningActionsCount < 0) {
	window.obj1902_onTap_runningActionsCount = 0;
} else if (window.obj1902_onTap_runningActionsCount == 0) {
	obj1902_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj1902_onTap_runningActionsCount = window.obj1902_onTap_runningActionsCount - 1;
if (window.obj1902_onTap_runningActionsCount < 0) {
	window.obj1902_onTap_runningActionsCount = 0;
} else if (window.obj1902_onTap_runningActionsCount == 0) {
	obj1902_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj1902_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1902_onTap_activeActionGroupIndex = -1;
		$("#obj1902").trigger("obj1902_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1902) {
				console.warn("de-queueing event obj1902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1902_onTap_activeActionGroupIndex = 2;
	





















};
obj1904_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1904_onTap_activeActionGroupIndex = -1;
		$("#obj1904").trigger("obj1904_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1904) {
				console.warn("de-queueing event obj1904." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1904").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1904_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1904 
switchImage_1976();
function switchImage_1976() {
	window.obj1904_onTap_runningActionsCount = obj1904_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1904";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1904_img";
	var fromImagePath = "../images/obj1900_image.png";
	var toImagePath = "../images/switch260_to.png";
	var switchHelperId = "switchHelper264"
	var switchHelperRef = "#switchHelper264"
	var switchId = "264";
	var toSwitchId = "264";
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
				window.obj1904_onTap_runningActionsCount = window.obj1904_onTap_runningActionsCount - 1;
if (window.obj1904_onTap_runningActionsCount < 0) {
	window.obj1904_onTap_runningActionsCount = 0;
} else if (window.obj1904_onTap_runningActionsCount == 0) {
	obj1904_onTap_actionGroup1();
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
obj1904_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1904_onTap_activeActionGroupIndex = -1;
		$("#obj1904").trigger("obj1904_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1904) {
				console.warn("de-queueing event obj1904." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1904").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1904_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4687();
function playAudioFile_4687() {
	window.obj1904_onTap_runningActionsCount = obj1904_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4687")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4687");
			$("#obj_audio_playSoundFile4687").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1904_onTap_runningActionsCount = window.obj1904_onTap_runningActionsCount - 1;
if (window.obj1904_onTap_runningActionsCount < 0) {
	window.obj1904_onTap_runningActionsCount = 0;
} else if (window.obj1904_onTap_runningActionsCount == 0) {
	obj1904_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1904_onTap_runningActionsCount = window.obj1904_onTap_runningActionsCount - 1;
if (window.obj1904_onTap_runningActionsCount < 0) {
	window.obj1904_onTap_runningActionsCount = 0;
} else if (window.obj1904_onTap_runningActionsCount == 0) {
	obj1904_onTap_actionGroup2();
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
				window.obj1904_onTap_runningActionsCount = window.obj1904_onTap_runningActionsCount - 1;
if (window.obj1904_onTap_runningActionsCount < 0) {
	window.obj1904_onTap_runningActionsCount = 0;
} else if (window.obj1904_onTap_runningActionsCount == 0) {
	obj1904_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj1904_onTap_runningActionsCount = window.obj1904_onTap_runningActionsCount - 1;
if (window.obj1904_onTap_runningActionsCount < 0) {
	window.obj1904_onTap_runningActionsCount = 0;
} else if (window.obj1904_onTap_runningActionsCount == 0) {
	obj1904_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj1904_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1904_onTap_activeActionGroupIndex = -1;
		$("#obj1904").trigger("obj1904_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1904) {
				console.warn("de-queueing event obj1904." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1904").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1904_onTap_activeActionGroupIndex = 2;
	





















};
obj1912_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1912_onTap_activeActionGroupIndex = -1;
		$("#obj1912").trigger("obj1912_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1912) {
				console.warn("de-queueing event obj1912." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1912").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1912_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1912 
switchImage_1972();
function switchImage_1972() {
	window.obj1912_onTap_runningActionsCount = obj1912_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1912";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1912_img";
	var fromImagePath = "../images/obj1900_image.png";
	var toImagePath = "../images/switch260_to.png";
	var switchHelperId = "switchHelper266"
	var switchHelperRef = "#switchHelper266"
	var switchId = "266";
	var toSwitchId = "266";
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
				window.obj1912_onTap_runningActionsCount = window.obj1912_onTap_runningActionsCount - 1;
if (window.obj1912_onTap_runningActionsCount < 0) {
	window.obj1912_onTap_runningActionsCount = 0;
} else if (window.obj1912_onTap_runningActionsCount == 0) {
	obj1912_onTap_actionGroup1();
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
obj1912_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1912_onTap_activeActionGroupIndex = -1;
		$("#obj1912").trigger("obj1912_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1912) {
				console.warn("de-queueing event obj1912." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1912").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1912_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4685();
function playAudioFile_4685() {
	window.obj1912_onTap_runningActionsCount = obj1912_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4685")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4685");
			$("#obj_audio_playSoundFile4685").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1912_onTap_runningActionsCount = window.obj1912_onTap_runningActionsCount - 1;
if (window.obj1912_onTap_runningActionsCount < 0) {
	window.obj1912_onTap_runningActionsCount = 0;
} else if (window.obj1912_onTap_runningActionsCount == 0) {
	obj1912_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1912_onTap_runningActionsCount = window.obj1912_onTap_runningActionsCount - 1;
if (window.obj1912_onTap_runningActionsCount < 0) {
	window.obj1912_onTap_runningActionsCount = 0;
} else if (window.obj1912_onTap_runningActionsCount == 0) {
	obj1912_onTap_actionGroup2();
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
				window.obj1912_onTap_runningActionsCount = window.obj1912_onTap_runningActionsCount - 1;
if (window.obj1912_onTap_runningActionsCount < 0) {
	window.obj1912_onTap_runningActionsCount = 0;
} else if (window.obj1912_onTap_runningActionsCount == 0) {
	obj1912_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj1912_onTap_runningActionsCount = window.obj1912_onTap_runningActionsCount - 1;
if (window.obj1912_onTap_runningActionsCount < 0) {
	window.obj1912_onTap_runningActionsCount = 0;
} else if (window.obj1912_onTap_runningActionsCount == 0) {
	obj1912_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj1912_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1912_onTap_activeActionGroupIndex = -1;
		$("#obj1912").trigger("obj1912_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1912) {
				console.warn("de-queueing event obj1912." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1912").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1912_onTap_activeActionGroupIndex = 2;
	





















};
obj1910_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1910_onTap_activeActionGroupIndex = -1;
		$("#obj1910").trigger("obj1910_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1910) {
				console.warn("de-queueing event obj1910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1910_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1910 
switchImage_1973();
function switchImage_1973() {
	window.obj1910_onTap_runningActionsCount = obj1910_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1910";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1910_img";
	var fromImagePath = "../images/obj1900_image.png";
	var toImagePath = "../images/switch260_to.png";
	var switchHelperId = "switchHelper268"
	var switchHelperRef = "#switchHelper268"
	var switchId = "268";
	var toSwitchId = "268";
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
				window.obj1910_onTap_runningActionsCount = window.obj1910_onTap_runningActionsCount - 1;
if (window.obj1910_onTap_runningActionsCount < 0) {
	window.obj1910_onTap_runningActionsCount = 0;
} else if (window.obj1910_onTap_runningActionsCount == 0) {
	obj1910_onTap_actionGroup1();
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
obj1910_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1910_onTap_activeActionGroupIndex = -1;
		$("#obj1910").trigger("obj1910_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1910) {
				console.warn("de-queueing event obj1910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1910_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4689();
function playAudioFile_4689() {
	window.obj1910_onTap_runningActionsCount = obj1910_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4689")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4689");
			$("#obj_audio_playSoundFile4689").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1910_onTap_runningActionsCount = window.obj1910_onTap_runningActionsCount - 1;
if (window.obj1910_onTap_runningActionsCount < 0) {
	window.obj1910_onTap_runningActionsCount = 0;
} else if (window.obj1910_onTap_runningActionsCount == 0) {
	obj1910_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1910_onTap_runningActionsCount = window.obj1910_onTap_runningActionsCount - 1;
if (window.obj1910_onTap_runningActionsCount < 0) {
	window.obj1910_onTap_runningActionsCount = 0;
} else if (window.obj1910_onTap_runningActionsCount == 0) {
	obj1910_onTap_actionGroup2();
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
				window.obj1910_onTap_runningActionsCount = window.obj1910_onTap_runningActionsCount - 1;
if (window.obj1910_onTap_runningActionsCount < 0) {
	window.obj1910_onTap_runningActionsCount = 0;
} else if (window.obj1910_onTap_runningActionsCount == 0) {
	obj1910_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj1910_onTap_runningActionsCount = window.obj1910_onTap_runningActionsCount - 1;
if (window.obj1910_onTap_runningActionsCount < 0) {
	window.obj1910_onTap_runningActionsCount = 0;
} else if (window.obj1910_onTap_runningActionsCount == 0) {
	obj1910_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj1910_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1910_onTap_activeActionGroupIndex = -1;
		$("#obj1910").trigger("obj1910_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1910) {
				console.warn("de-queueing event obj1910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1910_onTap_activeActionGroupIndex = 2;
	





















};
obj1908_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1908_onTap_activeActionGroupIndex = -1;
		$("#obj1908").trigger("obj1908_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1908) {
				console.warn("de-queueing event obj1908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1908_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1908 
switchImage_1975();
function switchImage_1975() {
	window.obj1908_onTap_runningActionsCount = obj1908_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1908";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1908_img";
	var fromImagePath = "../images/obj1900_image.png";
	var toImagePath = "../images/switch260_to.png";
	var switchHelperId = "switchHelper270"
	var switchHelperRef = "#switchHelper270"
	var switchId = "270";
	var toSwitchId = "270";
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
				window.obj1908_onTap_runningActionsCount = window.obj1908_onTap_runningActionsCount - 1;
if (window.obj1908_onTap_runningActionsCount < 0) {
	window.obj1908_onTap_runningActionsCount = 0;
} else if (window.obj1908_onTap_runningActionsCount == 0) {
	obj1908_onTap_actionGroup1();
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
obj1908_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1908_onTap_activeActionGroupIndex = -1;
		$("#obj1908").trigger("obj1908_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1908) {
				console.warn("de-queueing event obj1908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1908_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4688();
function playAudioFile_4688() {
	window.obj1908_onTap_runningActionsCount = obj1908_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4688")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4688");
			$("#obj_audio_playSoundFile4688").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1908_onTap_runningActionsCount = window.obj1908_onTap_runningActionsCount - 1;
if (window.obj1908_onTap_runningActionsCount < 0) {
	window.obj1908_onTap_runningActionsCount = 0;
} else if (window.obj1908_onTap_runningActionsCount == 0) {
	obj1908_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1908_onTap_runningActionsCount = window.obj1908_onTap_runningActionsCount - 1;
if (window.obj1908_onTap_runningActionsCount < 0) {
	window.obj1908_onTap_runningActionsCount = 0;
} else if (window.obj1908_onTap_runningActionsCount == 0) {
	obj1908_onTap_actionGroup2();
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
				window.obj1908_onTap_runningActionsCount = window.obj1908_onTap_runningActionsCount - 1;
if (window.obj1908_onTap_runningActionsCount < 0) {
	window.obj1908_onTap_runningActionsCount = 0;
} else if (window.obj1908_onTap_runningActionsCount == 0) {
	obj1908_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj1908_onTap_runningActionsCount = window.obj1908_onTap_runningActionsCount - 1;
if (window.obj1908_onTap_runningActionsCount < 0) {
	window.obj1908_onTap_runningActionsCount = 0;
} else if (window.obj1908_onTap_runningActionsCount == 0) {
	obj1908_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj1908_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1908_onTap_activeActionGroupIndex = -1;
		$("#obj1908").trigger("obj1908_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1908) {
				console.warn("de-queueing event obj1908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1908_onTap_activeActionGroupIndex = 2;
	





















};
obj1906_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1906_onTap_activeActionGroupIndex = -1;
		$("#obj1906").trigger("obj1906_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1906) {
				console.warn("de-queueing event obj1906." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1906").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1906_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1906 
switchImage_1974();
function switchImage_1974() {
	window.obj1906_onTap_runningActionsCount = obj1906_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1906";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1906_img";
	var fromImagePath = "../images/obj1900_image.png";
	var toImagePath = "../images/switch260_to.png";
	var switchHelperId = "switchHelper272"
	var switchHelperRef = "#switchHelper272"
	var switchId = "272";
	var toSwitchId = "272";
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
				window.obj1906_onTap_runningActionsCount = window.obj1906_onTap_runningActionsCount - 1;
if (window.obj1906_onTap_runningActionsCount < 0) {
	window.obj1906_onTap_runningActionsCount = 0;
} else if (window.obj1906_onTap_runningActionsCount == 0) {
	obj1906_onTap_actionGroup1();
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
obj1906_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1906_onTap_activeActionGroupIndex = -1;
		$("#obj1906").trigger("obj1906_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1906) {
				console.warn("de-queueing event obj1906." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1906").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1906_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4690();
function playAudioFile_4690() {
	window.obj1906_onTap_runningActionsCount = obj1906_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4690")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4690");
			$("#obj_audio_playSoundFile4690").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1906_onTap_runningActionsCount = window.obj1906_onTap_runningActionsCount - 1;
if (window.obj1906_onTap_runningActionsCount < 0) {
	window.obj1906_onTap_runningActionsCount = 0;
} else if (window.obj1906_onTap_runningActionsCount == 0) {
	obj1906_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1906_onTap_runningActionsCount = window.obj1906_onTap_runningActionsCount - 1;
if (window.obj1906_onTap_runningActionsCount < 0) {
	window.obj1906_onTap_runningActionsCount = 0;
} else if (window.obj1906_onTap_runningActionsCount == 0) {
	obj1906_onTap_actionGroup2();
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
				window.obj1906_onTap_runningActionsCount = window.obj1906_onTap_runningActionsCount - 1;
if (window.obj1906_onTap_runningActionsCount < 0) {
	window.obj1906_onTap_runningActionsCount = 0;
} else if (window.obj1906_onTap_runningActionsCount == 0) {
	obj1906_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj1906_onTap_runningActionsCount = window.obj1906_onTap_runningActionsCount - 1;
if (window.obj1906_onTap_runningActionsCount < 0) {
	window.obj1906_onTap_runningActionsCount = 0;
} else if (window.obj1906_onTap_runningActionsCount == 0) {
	obj1906_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj1906_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1906_onTap_activeActionGroupIndex = -1;
		$("#obj1906").trigger("obj1906_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1906) {
				console.warn("de-queueing event obj1906." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1906").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1906_onTap_activeActionGroupIndex = 2;
	





















};
obj6898_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6898_onTap_activeActionGroupIndex = -1;
		$("#obj6898").trigger("obj6898_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6898) {
				console.warn("de-queueing event obj6898." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6898").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6898_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6893 
switchImage_6904();
function switchImage_6904() {
	window.obj6898_onTap_runningActionsCount = obj6898_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6893";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6893_img";
	var fromImagePath = "../images/obj6898_image.png";
	var toImagePath = "../images/switch127_to.png";
	var switchHelperId = "switchHelper275"
	var switchHelperRef = "#switchHelper275"
	var switchId = "275";
	var toSwitchId = "275";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage6904_from";
	var toSoundObjectId = "#obj_audio_switchImage6904_to";
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
				window.obj6898_onTap_runningActionsCount = window.obj6898_onTap_runningActionsCount - 1;
if (window.obj6898_onTap_runningActionsCount < 0) {
	window.obj6898_onTap_runningActionsCount = 0;
} else if (window.obj6898_onTap_runningActionsCount == 0) {
	obj6898_onTap_actionGroup1();
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
obj6898_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6898_onTap_activeActionGroupIndex = -1;
		$("#obj6898").trigger("obj6898_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6898) {
				console.warn("de-queueing event obj6898." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6898").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6898_onTap_activeActionGroupIndex = 1;
	





















};
obj6901_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6901_onTap_activeActionGroupIndex = -1;
		$("#obj6901").trigger("obj6901_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6901) {
				console.warn("de-queueing event obj6901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6901_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1900 
switchImage_6905();
function switchImage_6905() {
	window.obj6901_onTap_runningActionsCount = obj6901_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1900";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1900_img";
	var fromImagePath = "../images/obj6898_image.png";
	var toImagePath = "../images/switch260_to.png";
	var switchHelperId = "switchHelper278"
	var switchHelperRef = "#switchHelper278"
	var switchId = "278";
	var toSwitchId = "278";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage6905_from";
	var toSoundObjectId = "#obj_audio_switchImage6905_to";
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
				window.obj6901_onTap_runningActionsCount = window.obj6901_onTap_runningActionsCount - 1;
if (window.obj6901_onTap_runningActionsCount < 0) {
	window.obj6901_onTap_runningActionsCount = 0;
} else if (window.obj6901_onTap_runningActionsCount == 0) {
	obj6901_onTap_actionGroup1();
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
obj6901_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6901_onTap_activeActionGroupIndex = -1;
		$("#obj6901").trigger("obj6901_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6901) {
				console.warn("de-queueing event obj6901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6901_onTap_activeActionGroupIndex = 1;
	





















};
obj6906_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6906_onTap_activeActionGroupIndex = -1;
		$("#obj6906").trigger("obj6906_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6906) {
				console.warn("de-queueing event obj6906." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6906").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6906_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1912 
switchImage_6908();
function switchImage_6908() {
	window.obj6906_onTap_runningActionsCount = obj6906_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1912";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1912_img";
	var fromImagePath = "../images/obj6898_image.png";
	var toImagePath = "../images/switch260_to.png";
	var switchHelperId = "switchHelper281"
	var switchHelperRef = "#switchHelper281"
	var switchId = "281";
	var toSwitchId = "281";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage6908_from";
	var toSoundObjectId = "#obj_audio_switchImage6908_to";
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
				window.obj6906_onTap_runningActionsCount = window.obj6906_onTap_runningActionsCount - 1;
if (window.obj6906_onTap_runningActionsCount < 0) {
	window.obj6906_onTap_runningActionsCount = 0;
} else if (window.obj6906_onTap_runningActionsCount == 0) {
	obj6906_onTap_actionGroup1();
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
obj6906_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6906_onTap_activeActionGroupIndex = -1;
		$("#obj6906").trigger("obj6906_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6906) {
				console.warn("de-queueing event obj6906." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6906").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6906_onTap_activeActionGroupIndex = 1;
	





















};
obj6910_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6910_onTap_activeActionGroupIndex = -1;
		$("#obj6910").trigger("obj6910_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6910) {
				console.warn("de-queueing event obj6910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6910_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1910 
switchImage_6912();
function switchImage_6912() {
	window.obj6910_onTap_runningActionsCount = obj6910_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1910";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1910_img";
	var fromImagePath = "../images/obj6898_image.png";
	var toImagePath = "../images/switch260_to.png";
	var switchHelperId = "switchHelper284"
	var switchHelperRef = "#switchHelper284"
	var switchId = "284";
	var toSwitchId = "284";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage6912_from";
	var toSoundObjectId = "#obj_audio_switchImage6912_to";
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
				window.obj6910_onTap_runningActionsCount = window.obj6910_onTap_runningActionsCount - 1;
if (window.obj6910_onTap_runningActionsCount < 0) {
	window.obj6910_onTap_runningActionsCount = 0;
} else if (window.obj6910_onTap_runningActionsCount == 0) {
	obj6910_onTap_actionGroup1();
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
obj6910_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6910_onTap_activeActionGroupIndex = -1;
		$("#obj6910").trigger("obj6910_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6910) {
				console.warn("de-queueing event obj6910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6910_onTap_activeActionGroupIndex = 1;
	





















};
obj6914_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6914_onTap_activeActionGroupIndex = -1;
		$("#obj6914").trigger("obj6914_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6914) {
				console.warn("de-queueing event obj6914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6914_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1902 
switchImage_6916();
function switchImage_6916() {
	window.obj6914_onTap_runningActionsCount = obj6914_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1902";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1902_img";
	var fromImagePath = "../images/obj6898_image.png";
	var toImagePath = "../images/switch260_to.png";
	var switchHelperId = "switchHelper287"
	var switchHelperRef = "#switchHelper287"
	var switchId = "287";
	var toSwitchId = "287";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage6916_from";
	var toSoundObjectId = "#obj_audio_switchImage6916_to";
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
				window.obj6914_onTap_runningActionsCount = window.obj6914_onTap_runningActionsCount - 1;
if (window.obj6914_onTap_runningActionsCount < 0) {
	window.obj6914_onTap_runningActionsCount = 0;
} else if (window.obj6914_onTap_runningActionsCount == 0) {
	obj6914_onTap_actionGroup1();
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
obj6914_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6914_onTap_activeActionGroupIndex = -1;
		$("#obj6914").trigger("obj6914_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6914) {
				console.warn("de-queueing event obj6914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6914_onTap_activeActionGroupIndex = 1;
	





















};
obj6918_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6918_onTap_activeActionGroupIndex = -1;
		$("#obj6918").trigger("obj6918_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6918) {
				console.warn("de-queueing event obj6918." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6918").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6918_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1904 
switchImage_6920();
function switchImage_6920() {
	window.obj6918_onTap_runningActionsCount = obj6918_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1904";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1904_img";
	var fromImagePath = "../images/obj6898_image.png";
	var toImagePath = "../images/switch260_to.png";
	var switchHelperId = "switchHelper290"
	var switchHelperRef = "#switchHelper290"
	var switchId = "290";
	var toSwitchId = "290";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage6920_from";
	var toSoundObjectId = "#obj_audio_switchImage6920_to";
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
				window.obj6918_onTap_runningActionsCount = window.obj6918_onTap_runningActionsCount - 1;
if (window.obj6918_onTap_runningActionsCount < 0) {
	window.obj6918_onTap_runningActionsCount = 0;
} else if (window.obj6918_onTap_runningActionsCount == 0) {
	obj6918_onTap_actionGroup1();
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
obj6918_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6918_onTap_activeActionGroupIndex = -1;
		$("#obj6918").trigger("obj6918_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6918) {
				console.warn("de-queueing event obj6918." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6918").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6918_onTap_activeActionGroupIndex = 1;
	





















};
obj6922_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6922_onTap_activeActionGroupIndex = -1;
		$("#obj6922").trigger("obj6922_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6922) {
				console.warn("de-queueing event obj6922." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6922").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6922_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1908 
switchImage_6924();
function switchImage_6924() {
	window.obj6922_onTap_runningActionsCount = obj6922_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1908";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1908_img";
	var fromImagePath = "../images/obj6898_image.png";
	var toImagePath = "../images/switch260_to.png";
	var switchHelperId = "switchHelper293"
	var switchHelperRef = "#switchHelper293"
	var switchId = "293";
	var toSwitchId = "293";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage6924_from";
	var toSoundObjectId = "#obj_audio_switchImage6924_to";
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
				window.obj6922_onTap_runningActionsCount = window.obj6922_onTap_runningActionsCount - 1;
if (window.obj6922_onTap_runningActionsCount < 0) {
	window.obj6922_onTap_runningActionsCount = 0;
} else if (window.obj6922_onTap_runningActionsCount == 0) {
	obj6922_onTap_actionGroup1();
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
obj6922_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6922_onTap_activeActionGroupIndex = -1;
		$("#obj6922").trigger("obj6922_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6922) {
				console.warn("de-queueing event obj6922." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6922").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6922_onTap_activeActionGroupIndex = 1;
	





















};
obj6926_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6926_onTap_activeActionGroupIndex = -1;
		$("#obj6926").trigger("obj6926_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6926) {
				console.warn("de-queueing event obj6926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6926_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj1906 
switchImage_6928();
function switchImage_6928() {
	window.obj6926_onTap_runningActionsCount = obj6926_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj1906";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj1906_img";
	var fromImagePath = "../images/obj6898_image.png";
	var toImagePath = "../images/switch260_to.png";
	var switchHelperId = "switchHelper296"
	var switchHelperRef = "#switchHelper296"
	var switchId = "296";
	var toSwitchId = "296";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage6928_from";
	var toSoundObjectId = "#obj_audio_switchImage6928_to";
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
				window.obj6926_onTap_runningActionsCount = window.obj6926_onTap_runningActionsCount - 1;
if (window.obj6926_onTap_runningActionsCount < 0) {
	window.obj6926_onTap_runningActionsCount = 0;
} else if (window.obj6926_onTap_runningActionsCount == 0) {
	obj6926_onTap_actionGroup1();
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
obj6926_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6926_onTap_activeActionGroupIndex = -1;
		$("#obj6926").trigger("obj6926_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6926) {
				console.warn("de-queueing event obj6926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6926_onTap_activeActionGroupIndex = 1;
	





















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
	var switchHelperId = "switchHelper299"
	var switchHelperRef = "#switchHelper299"
	var switchId = "299";
	var toSwitchId = "299";
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
	var switchHelperId = "switchHelper300"
	var switchHelperRef = "#switchHelper300"
	var switchId = "300";
	var toSwitchId = "300";
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
	var switchHelperId = "switchHelper301"
	var switchHelperRef = "#switchHelper301"
	var switchId = "301";
	var toSwitchId = "301";
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
	var switchHelperId = "switchHelper302"
	var switchHelperRef = "#switchHelper302"
	var switchId = "302";
	var toSwitchId = "302";
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
	$("#anchor303")[0].click();
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
	$("#anchor304")[0].click();
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
obj6740_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6740_onTap_activeActionGroupIndex = -1;
		$("#obj6740").trigger("obj6740_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6740) {
				console.warn("de-queueing event obj6740." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6740").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6740_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6744();
function runjs_6744() {
	window.obj6740_onTap_runningActionsCount = obj6740_onTap_runningActionsCount + 1;

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
		window.obj6740_onTap_runningActionsCount = window.obj6740_onTap_runningActionsCount - 1;
if (window.obj6740_onTap_runningActionsCount < 0) {
	window.obj6740_onTap_runningActionsCount = 0;
} else if (window.obj6740_onTap_runningActionsCount == 0) {
	obj6740_onTap_actionGroup1();
}
	}, 1);
}







};
obj6740_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6740_onTap_activeActionGroupIndex = -1;
		$("#obj6740").trigger("obj6740_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6740) {
				console.warn("de-queueing event obj6740." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6740").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6740_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

































/*
 *
 *   obj1900: Event Touch Down
 *
 */
$("#obj1900").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1900_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1900_onTap is still running");
	return;
}
var obj1900_onTap_runningActionsCount = 0;
var obj1900_onTap_loopCount = 0;
obj1900_onTap_actionGroup0();
});










/*
 *
 *   obj1902: Event Touch Down
 *
 */
$("#obj1902").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1902_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1902_onTap is still running");
	return;
}
var obj1902_onTap_runningActionsCount = 0;
var obj1902_onTap_loopCount = 0;
obj1902_onTap_actionGroup0();
});










/*
 *
 *   obj1904: Event Touch Down
 *
 */
$("#obj1904").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1904_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1904_onTap is still running");
	return;
}
var obj1904_onTap_runningActionsCount = 0;
var obj1904_onTap_loopCount = 0;
obj1904_onTap_actionGroup0();
});










/*
 *
 *   obj1912: Event Touch Down
 *
 */
$("#obj1912").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1912_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1912_onTap is still running");
	return;
}
var obj1912_onTap_runningActionsCount = 0;
var obj1912_onTap_loopCount = 0;
obj1912_onTap_actionGroup0();
});










/*
 *
 *   obj1910: Event Touch Down
 *
 */
$("#obj1910").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1910_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1910_onTap is still running");
	return;
}
var obj1910_onTap_runningActionsCount = 0;
var obj1910_onTap_loopCount = 0;
obj1910_onTap_actionGroup0();
});










/*
 *
 *   obj1908: Event Touch Down
 *
 */
$("#obj1908").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1908_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1908_onTap is still running");
	return;
}
var obj1908_onTap_runningActionsCount = 0;
var obj1908_onTap_loopCount = 0;
obj1908_onTap_actionGroup0();
});










/*
 *
 *   obj1906: Event Touch Down
 *
 */
$("#obj1906").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1906_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1906_onTap is still running");
	return;
}
var obj1906_onTap_runningActionsCount = 0;
var obj1906_onTap_loopCount = 0;
obj1906_onTap_actionGroup0();
});




































































































/*
 *
 *   obj6898: Event Touch Down
 *
 */
$("#obj6898").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6898_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6898_onTap is still running");
	return;
}
var obj6898_onTap_runningActionsCount = 0;
var obj6898_onTap_loopCount = 0;
obj6898_onTap_actionGroup0();
});










/*
 *
 *   obj6901: Event Touch Down
 *
 */
$("#obj6901").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6901_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6901_onTap is still running");
	return;
}
var obj6901_onTap_runningActionsCount = 0;
var obj6901_onTap_loopCount = 0;
obj6901_onTap_actionGroup0();
});










/*
 *
 *   obj6906: Event Touch Down
 *
 */
$("#obj6906").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6906_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6906_onTap is still running");
	return;
}
var obj6906_onTap_runningActionsCount = 0;
var obj6906_onTap_loopCount = 0;
obj6906_onTap_actionGroup0();
});










/*
 *
 *   obj6910: Event Touch Down
 *
 */
$("#obj6910").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6910_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6910_onTap is still running");
	return;
}
var obj6910_onTap_runningActionsCount = 0;
var obj6910_onTap_loopCount = 0;
obj6910_onTap_actionGroup0();
});










/*
 *
 *   obj6914: Event Touch Down
 *
 */
$("#obj6914").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6914_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6914_onTap is still running");
	return;
}
var obj6914_onTap_runningActionsCount = 0;
var obj6914_onTap_loopCount = 0;
obj6914_onTap_actionGroup0();
});










/*
 *
 *   obj6918: Event Touch Down
 *
 */
$("#obj6918").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6918_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6918_onTap is still running");
	return;
}
var obj6918_onTap_runningActionsCount = 0;
var obj6918_onTap_loopCount = 0;
obj6918_onTap_actionGroup0();
});










/*
 *
 *   obj6922: Event Touch Down
 *
 */
$("#obj6922").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6922_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6922_onTap is still running");
	return;
}
var obj6922_onTap_runningActionsCount = 0;
var obj6922_onTap_loopCount = 0;
obj6922_onTap_actionGroup0();
});










/*
 *
 *   obj6926: Event Touch Down
 *
 */
$("#obj6926").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6926_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6926_onTap is still running");
	return;
}
var obj6926_onTap_runningActionsCount = 0;
var obj6926_onTap_loopCount = 0;
obj6926_onTap_actionGroup0();
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
 *   obj6740: Event Touch Down
 *
 */
$("#obj6740").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6740_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6740_onTap is still running");
	return;
}
var obj6740_onTap_runningActionsCount = 0;
var obj6740_onTap_loopCount = 0;
obj6740_onTap_actionGroup0();
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
	
$("#obj1557").trigger('SCEventShow');
$("#obj4500").trigger('SCEventShow');
$("#obj1794").trigger('SCEventShow');
$("#obj1900").trigger('SCEventShow');
$("#obj1902").trigger('SCEventShow');
$("#obj1904").trigger('SCEventShow');
$("#obj1912").trigger('SCEventShow');
$("#obj1910").trigger('SCEventShow');
$("#obj1908").trigger('SCEventShow');
$("#obj1906").trigger('SCEventShow');
$("#obj1946").trigger('SCEventShow');
$("#obj1949").trigger('SCEventShow');
$("#obj1953").trigger('SCEventShow');
$("#obj1951").trigger('SCEventShow');
$("#obj2499").trigger('SCEventShow');
$("#obj4276").trigger('SCEventShow');
$("#obj6678").trigger('SCEventShow');
$("#obj6893").trigger('SCEventShow');
$("#obj6898").trigger('SCEventShow');
$("#obj6901").trigger('SCEventShow');
$("#obj6906").trigger('SCEventShow');
$("#obj6910").trigger('SCEventShow');
$("#obj6914").trigger('SCEventShow');
$("#obj6918").trigger('SCEventShow');
$("#obj6922").trigger('SCEventShow');
$("#obj6926").trigger('SCEventShow');
$("#obj2935").trigger('SCEventShow');
$("#obj2928").trigger('SCEventShow');
$("#obj2921").trigger('SCEventShow');
$("#obj2918").trigger('SCEventShow');
$("#obj2907").trigger('SCEventShow');
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
    
});