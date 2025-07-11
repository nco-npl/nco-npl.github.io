pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Unit 1";
pubcoder.page.id = pubcoder.page.id || 1502;
pubcoder.page.title = pubcoder.page.title || "38";
pubcoder.page.number = pubcoder.page.number || 38;
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
var obj4709_onTap_activeActionGroupIndex = -1;
var obj4709_onTap_runningActionsCount = 0;
var obj4709_onTap_loopCount = 0;
var obj4713_onTap_activeActionGroupIndex = -1;
var obj4713_onTap_runningActionsCount = 0;
var obj4713_onTap_loopCount = 0;
var obj4717_onTap_activeActionGroupIndex = -1;
var obj4717_onTap_runningActionsCount = 0;
var obj4717_onTap_loopCount = 0;
var obj4721_onTap_activeActionGroupIndex = -1;
var obj4721_onTap_runningActionsCount = 0;
var obj4721_onTap_loopCount = 0;
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
		
obj4709_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4709_onTap_activeActionGroupIndex = -1;
		$("#obj4709").trigger("obj4709_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4709) {
				console.warn("de-queueing event obj4709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4709_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj4709 
switchImage_4711();
function switchImage_4711() {
	window.obj4709_onTap_runningActionsCount = obj4709_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj4709";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj4709_img";
	var fromImagePath = "../images/obj2014_image.png";
	var toImagePath = "../images/switch290_to.png";
	var switchHelperId = "switchHelper442"
	var switchHelperRef = "#switchHelper442"
	var switchId = "442";
	var toSwitchId = "442";
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
				window.obj4709_onTap_runningActionsCount = window.obj4709_onTap_runningActionsCount - 1;
if (window.obj4709_onTap_runningActionsCount < 0) {
	window.obj4709_onTap_runningActionsCount = 0;
} else if (window.obj4709_onTap_runningActionsCount == 0) {
	obj4709_onTap_actionGroup1();
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
obj4709_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4709_onTap_activeActionGroupIndex = -1;
		$("#obj4709").trigger("obj4709_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4709) {
				console.warn("de-queueing event obj4709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4709_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4712();
function playAudioFile_4712() {
	window.obj4709_onTap_runningActionsCount = obj4709_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4712")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4712");
			$("#obj_audio_playSoundFile4712").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4709_onTap_runningActionsCount = window.obj4709_onTap_runningActionsCount - 1;
if (window.obj4709_onTap_runningActionsCount < 0) {
	window.obj4709_onTap_runningActionsCount = 0;
} else if (window.obj4709_onTap_runningActionsCount == 0) {
	obj4709_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4709_onTap_runningActionsCount = window.obj4709_onTap_runningActionsCount - 1;
if (window.obj4709_onTap_runningActionsCount < 0) {
	window.obj4709_onTap_runningActionsCount = 0;
} else if (window.obj4709_onTap_runningActionsCount == 0) {
	obj4709_onTap_actionGroup2();
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
				window.obj4709_onTap_runningActionsCount = window.obj4709_onTap_runningActionsCount - 1;
if (window.obj4709_onTap_runningActionsCount < 0) {
	window.obj4709_onTap_runningActionsCount = 0;
} else if (window.obj4709_onTap_runningActionsCount == 0) {
	obj4709_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4709_onTap_runningActionsCount = window.obj4709_onTap_runningActionsCount - 1;
if (window.obj4709_onTap_runningActionsCount < 0) {
	window.obj4709_onTap_runningActionsCount = 0;
} else if (window.obj4709_onTap_runningActionsCount == 0) {
	obj4709_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj4709_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4709_onTap_activeActionGroupIndex = -1;
		$("#obj4709").trigger("obj4709_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4709) {
				console.warn("de-queueing event obj4709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4709_onTap_activeActionGroupIndex = 2;
	





















};
obj4713_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4713_onTap_activeActionGroupIndex = -1;
		$("#obj4713").trigger("obj4713_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4713) {
				console.warn("de-queueing event obj4713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4713_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj4713 
switchImage_4715();
function switchImage_4715() {
	window.obj4713_onTap_runningActionsCount = obj4713_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj4713";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj4713_img";
	var fromImagePath = "../images/obj2014_image.png";
	var toImagePath = "../images/switch290_to.png";
	var switchHelperId = "switchHelper444"
	var switchHelperRef = "#switchHelper444"
	var switchId = "444";
	var toSwitchId = "444";
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
				window.obj4713_onTap_runningActionsCount = window.obj4713_onTap_runningActionsCount - 1;
if (window.obj4713_onTap_runningActionsCount < 0) {
	window.obj4713_onTap_runningActionsCount = 0;
} else if (window.obj4713_onTap_runningActionsCount == 0) {
	obj4713_onTap_actionGroup1();
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
obj4713_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4713_onTap_activeActionGroupIndex = -1;
		$("#obj4713").trigger("obj4713_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4713) {
				console.warn("de-queueing event obj4713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4713_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4716();
function playAudioFile_4716() {
	window.obj4713_onTap_runningActionsCount = obj4713_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4716")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4716");
			$("#obj_audio_playSoundFile4716").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4713_onTap_runningActionsCount = window.obj4713_onTap_runningActionsCount - 1;
if (window.obj4713_onTap_runningActionsCount < 0) {
	window.obj4713_onTap_runningActionsCount = 0;
} else if (window.obj4713_onTap_runningActionsCount == 0) {
	obj4713_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4713_onTap_runningActionsCount = window.obj4713_onTap_runningActionsCount - 1;
if (window.obj4713_onTap_runningActionsCount < 0) {
	window.obj4713_onTap_runningActionsCount = 0;
} else if (window.obj4713_onTap_runningActionsCount == 0) {
	obj4713_onTap_actionGroup2();
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
				window.obj4713_onTap_runningActionsCount = window.obj4713_onTap_runningActionsCount - 1;
if (window.obj4713_onTap_runningActionsCount < 0) {
	window.obj4713_onTap_runningActionsCount = 0;
} else if (window.obj4713_onTap_runningActionsCount == 0) {
	obj4713_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4713_onTap_runningActionsCount = window.obj4713_onTap_runningActionsCount - 1;
if (window.obj4713_onTap_runningActionsCount < 0) {
	window.obj4713_onTap_runningActionsCount = 0;
} else if (window.obj4713_onTap_runningActionsCount == 0) {
	obj4713_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj4713_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4713_onTap_activeActionGroupIndex = -1;
		$("#obj4713").trigger("obj4713_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4713) {
				console.warn("de-queueing event obj4713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4713_onTap_activeActionGroupIndex = 2;
	





















};
obj4717_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4717_onTap_activeActionGroupIndex = -1;
		$("#obj4717").trigger("obj4717_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4717) {
				console.warn("de-queueing event obj4717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4717_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj4717 
switchImage_4719();
function switchImage_4719() {
	window.obj4717_onTap_runningActionsCount = obj4717_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj4717";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj4717_img";
	var fromImagePath = "../images/obj2014_image.png";
	var toImagePath = "../images/switch290_to.png";
	var switchHelperId = "switchHelper446"
	var switchHelperRef = "#switchHelper446"
	var switchId = "446";
	var toSwitchId = "446";
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
				window.obj4717_onTap_runningActionsCount = window.obj4717_onTap_runningActionsCount - 1;
if (window.obj4717_onTap_runningActionsCount < 0) {
	window.obj4717_onTap_runningActionsCount = 0;
} else if (window.obj4717_onTap_runningActionsCount == 0) {
	obj4717_onTap_actionGroup1();
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
obj4717_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4717_onTap_activeActionGroupIndex = -1;
		$("#obj4717").trigger("obj4717_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4717) {
				console.warn("de-queueing event obj4717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4717_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4720();
function playAudioFile_4720() {
	window.obj4717_onTap_runningActionsCount = obj4717_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4720")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4720");
			$("#obj_audio_playSoundFile4720").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4717_onTap_runningActionsCount = window.obj4717_onTap_runningActionsCount - 1;
if (window.obj4717_onTap_runningActionsCount < 0) {
	window.obj4717_onTap_runningActionsCount = 0;
} else if (window.obj4717_onTap_runningActionsCount == 0) {
	obj4717_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4717_onTap_runningActionsCount = window.obj4717_onTap_runningActionsCount - 1;
if (window.obj4717_onTap_runningActionsCount < 0) {
	window.obj4717_onTap_runningActionsCount = 0;
} else if (window.obj4717_onTap_runningActionsCount == 0) {
	obj4717_onTap_actionGroup2();
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
				window.obj4717_onTap_runningActionsCount = window.obj4717_onTap_runningActionsCount - 1;
if (window.obj4717_onTap_runningActionsCount < 0) {
	window.obj4717_onTap_runningActionsCount = 0;
} else if (window.obj4717_onTap_runningActionsCount == 0) {
	obj4717_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4717_onTap_runningActionsCount = window.obj4717_onTap_runningActionsCount - 1;
if (window.obj4717_onTap_runningActionsCount < 0) {
	window.obj4717_onTap_runningActionsCount = 0;
} else if (window.obj4717_onTap_runningActionsCount == 0) {
	obj4717_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj4717_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4717_onTap_activeActionGroupIndex = -1;
		$("#obj4717").trigger("obj4717_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4717) {
				console.warn("de-queueing event obj4717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4717_onTap_activeActionGroupIndex = 2;
	





















};
obj4721_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4721_onTap_activeActionGroupIndex = -1;
		$("#obj4721").trigger("obj4721_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4721) {
				console.warn("de-queueing event obj4721." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4721").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4721_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj4721 
switchImage_4723();
function switchImage_4723() {
	window.obj4721_onTap_runningActionsCount = obj4721_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj4721";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj4721_img";
	var fromImagePath = "../images/obj2014_image.png";
	var toImagePath = "../images/switch290_to.png";
	var switchHelperId = "switchHelper448"
	var switchHelperRef = "#switchHelper448"
	var switchId = "448";
	var toSwitchId = "448";
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
				window.obj4721_onTap_runningActionsCount = window.obj4721_onTap_runningActionsCount - 1;
if (window.obj4721_onTap_runningActionsCount < 0) {
	window.obj4721_onTap_runningActionsCount = 0;
} else if (window.obj4721_onTap_runningActionsCount == 0) {
	obj4721_onTap_actionGroup1();
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
obj4721_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4721_onTap_activeActionGroupIndex = -1;
		$("#obj4721").trigger("obj4721_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4721) {
				console.warn("de-queueing event obj4721." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4721").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4721_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_4724();
function playAudioFile_4724() {
	window.obj4721_onTap_runningActionsCount = obj4721_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile4724")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4724");
			$("#obj_audio_playSoundFile4724").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4721_onTap_runningActionsCount = window.obj4721_onTap_runningActionsCount - 1;
if (window.obj4721_onTap_runningActionsCount < 0) {
	window.obj4721_onTap_runningActionsCount = 0;
} else if (window.obj4721_onTap_runningActionsCount == 0) {
	obj4721_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4721_onTap_runningActionsCount = window.obj4721_onTap_runningActionsCount - 1;
if (window.obj4721_onTap_runningActionsCount < 0) {
	window.obj4721_onTap_runningActionsCount = 0;
} else if (window.obj4721_onTap_runningActionsCount == 0) {
	obj4721_onTap_actionGroup2();
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
				window.obj4721_onTap_runningActionsCount = window.obj4721_onTap_runningActionsCount - 1;
if (window.obj4721_onTap_runningActionsCount < 0) {
	window.obj4721_onTap_runningActionsCount = 0;
} else if (window.obj4721_onTap_runningActionsCount == 0) {
	obj4721_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4721_onTap_runningActionsCount = window.obj4721_onTap_runningActionsCount - 1;
if (window.obj4721_onTap_runningActionsCount < 0) {
	window.obj4721_onTap_runningActionsCount = 0;
} else if (window.obj4721_onTap_runningActionsCount == 0) {
	obj4721_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj4721_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4721_onTap_activeActionGroupIndex = -1;
		$("#obj4721").trigger("obj4721_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4721) {
				console.warn("de-queueing event obj4721." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4721").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4721_onTap_activeActionGroupIndex = 2;
	





















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
	var switchHelperId = "switchHelper450"
	var switchHelperRef = "#switchHelper450"
	var switchId = "450";
	var toSwitchId = "450";
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
	var switchHelperId = "switchHelper451"
	var switchHelperRef = "#switchHelper451"
	var switchId = "451";
	var toSwitchId = "451";
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
	var switchHelperId = "switchHelper452"
	var switchHelperRef = "#switchHelper452"
	var switchId = "452";
	var toSwitchId = "452";
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
	var switchHelperId = "switchHelper453"
	var switchHelperRef = "#switchHelper453"
	var switchId = "453";
	var toSwitchId = "453";
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
	$("#anchor454")[0].click();
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
	$("#anchor455")[0].click();
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
 *   obj4709: Event Touch Down
 *
 */
$("#obj4709").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4709_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4709_onTap is still running");
	return;
}
var obj4709_onTap_runningActionsCount = 0;
var obj4709_onTap_loopCount = 0;
obj4709_onTap_actionGroup0();
});










/*
 *
 *   obj4713: Event Touch Down
 *
 */
$("#obj4713").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4713_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4713_onTap is still running");
	return;
}
var obj4713_onTap_runningActionsCount = 0;
var obj4713_onTap_loopCount = 0;
obj4713_onTap_actionGroup0();
});










/*
 *
 *   obj4717: Event Touch Down
 *
 */
$("#obj4717").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4717_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4717_onTap is still running");
	return;
}
var obj4717_onTap_runningActionsCount = 0;
var obj4717_onTap_loopCount = 0;
obj4717_onTap_actionGroup0();
});










/*
 *
 *   obj4721: Event Touch Down
 *
 */
$("#obj4721").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4721_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4721_onTap is still running");
	return;
}
var obj4721_onTap_runningActionsCount = 0;
var obj4721_onTap_loopCount = 0;
obj4721_onTap_actionGroup0();
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
	
$("#obj1617").trigger('SCEventShow');
$("#obj4536").trigger('SCEventShow');
$("#obj1830").trigger('SCEventShow');
$("#obj2287").trigger('SCEventShow');
$("#obj2289").trigger('SCEventShow');
$("#obj2291").trigger('SCEventShow');
$("#obj2293").trigger('SCEventShow');
$("#obj2569").trigger('SCEventShow');
$("#obj4709").trigger('SCEventShow');
$("#obj4713").trigger('SCEventShow');
$("#obj4717").trigger('SCEventShow');
$("#obj4721").trigger('SCEventShow');
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