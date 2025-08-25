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
var obj6943_onTap_activeActionGroupIndex = -1;
var obj6943_onTap_runningActionsCount = 0;
var obj6943_onTap_loopCount = 0;
var obj6932_onTap_activeActionGroupIndex = -1;
var obj6932_onTap_runningActionsCount = 0;
var obj6932_onTap_loopCount = 0;
var obj6939_onTap_activeActionGroupIndex = -1;
var obj6939_onTap_runningActionsCount = 0;
var obj6939_onTap_loopCount = 0;
var obj6958_onTap_activeActionGroupIndex = -1;
var obj6958_onTap_runningActionsCount = 0;
var obj6958_onTap_loopCount = 0;
var obj6947_onTap_activeActionGroupIndex = -1;
var obj6947_onTap_runningActionsCount = 0;
var obj6947_onTap_loopCount = 0;
var obj6954_onTap_activeActionGroupIndex = -1;
var obj6954_onTap_runningActionsCount = 0;
var obj6954_onTap_loopCount = 0;
var obj6962_onTap_activeActionGroupIndex = -1;
var obj6962_onTap_runningActionsCount = 0;
var obj6962_onTap_loopCount = 0;
var obj6969_onTap_activeActionGroupIndex = -1;
var obj6969_onTap_runningActionsCount = 0;
var obj6969_onTap_loopCount = 0;
var obj6973_onTap_activeActionGroupIndex = -1;
var obj6973_onTap_runningActionsCount = 0;
var obj6973_onTap_loopCount = 0;
var obj6977_onTap_activeActionGroupIndex = -1;
var obj6977_onTap_runningActionsCount = 0;
var obj6977_onTap_loopCount = 0;
var obj6984_onTap_activeActionGroupIndex = -1;
var obj6984_onTap_runningActionsCount = 0;
var obj6984_onTap_loopCount = 0;
var obj6988_onTap_activeActionGroupIndex = -1;
var obj6988_onTap_runningActionsCount = 0;
var obj6988_onTap_loopCount = 0;
var obj6992_onTap_activeActionGroupIndex = -1;
var obj6992_onTap_runningActionsCount = 0;
var obj6992_onTap_loopCount = 0;
var obj6999_onTap_activeActionGroupIndex = -1;
var obj6999_onTap_runningActionsCount = 0;
var obj6999_onTap_loopCount = 0;
var obj7003_onTap_activeActionGroupIndex = -1;
var obj7003_onTap_runningActionsCount = 0;
var obj7003_onTap_loopCount = 0;
var obj7007_onTap_activeActionGroupIndex = -1;
var obj7007_onTap_runningActionsCount = 0;
var obj7007_onTap_loopCount = 0;
var obj7014_onTap_activeActionGroupIndex = -1;
var obj7014_onTap_runningActionsCount = 0;
var obj7014_onTap_loopCount = 0;
var obj7018_onTap_activeActionGroupIndex = -1;
var obj7018_onTap_runningActionsCount = 0;
var obj7018_onTap_loopCount = 0;
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
		
obj6943_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6943_onTap_activeActionGroupIndex = -1;
		$("#obj6943").trigger("obj6943_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6943) {
				console.warn("de-queueing event obj6943." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6943").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6943_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6943 
switchImage_6945();
function switchImage_6945() {
	window.obj6943_onTap_runningActionsCount = obj6943_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6943";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6943_img";
	var fromImagePath = "../images/obj6943_image.png";
	var toImagePath = "../images/switch308_to.png";
	var switchHelperId = "switchHelper308"
	var switchHelperRef = "#switchHelper308"
	var switchId = "308";
	var toSwitchId = "308";
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
				window.obj6943_onTap_runningActionsCount = window.obj6943_onTap_runningActionsCount - 1;
if (window.obj6943_onTap_runningActionsCount < 0) {
	window.obj6943_onTap_runningActionsCount = 0;
} else if (window.obj6943_onTap_runningActionsCount == 0) {
	obj6943_onTap_actionGroup1();
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
obj6943_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6943_onTap_activeActionGroupIndex = -1;
		$("#obj6943").trigger("obj6943_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6943) {
				console.warn("de-queueing event obj6943." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6943").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6943_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_6946();
function playAudioFile_6946() {
	window.obj6943_onTap_runningActionsCount = obj6943_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile6946")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile6946");
			$("#obj_audio_playSoundFile6946").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj6943_onTap_runningActionsCount = window.obj6943_onTap_runningActionsCount - 1;
if (window.obj6943_onTap_runningActionsCount < 0) {
	window.obj6943_onTap_runningActionsCount = 0;
} else if (window.obj6943_onTap_runningActionsCount == 0) {
	obj6943_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj6943_onTap_runningActionsCount = window.obj6943_onTap_runningActionsCount - 1;
if (window.obj6943_onTap_runningActionsCount < 0) {
	window.obj6943_onTap_runningActionsCount = 0;
} else if (window.obj6943_onTap_runningActionsCount == 0) {
	obj6943_onTap_actionGroup2();
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
				window.obj6943_onTap_runningActionsCount = window.obj6943_onTap_runningActionsCount - 1;
if (window.obj6943_onTap_runningActionsCount < 0) {
	window.obj6943_onTap_runningActionsCount = 0;
} else if (window.obj6943_onTap_runningActionsCount == 0) {
	obj6943_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj6943_onTap_runningActionsCount = window.obj6943_onTap_runningActionsCount - 1;
if (window.obj6943_onTap_runningActionsCount < 0) {
	window.obj6943_onTap_runningActionsCount = 0;
} else if (window.obj6943_onTap_runningActionsCount == 0) {
	obj6943_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj6943_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6943_onTap_activeActionGroupIndex = -1;
		$("#obj6943").trigger("obj6943_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6943) {
				console.warn("de-queueing event obj6943." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6943").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6943_onTap_activeActionGroupIndex = 2;
	





















};
obj6932_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6932_onTap_activeActionGroupIndex = -1;
		$("#obj6932").trigger("obj6932_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6932) {
				console.warn("de-queueing event obj6932." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6932").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6932_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6936 
switchImage_6934();
function switchImage_6934() {
	window.obj6932_onTap_runningActionsCount = obj6932_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6936";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6936_img";
	var fromImagePath = "../images/obj6932_image.png";
	var toImagePath = "../images/switch310_to.png";
	var switchHelperId = "switchHelper310"
	var switchHelperRef = "#switchHelper310"
	var switchId = "310";
	var toSwitchId = "310";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage6934_from";
	var toSoundObjectId = "#obj_audio_switchImage6934_to";
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
				window.obj6932_onTap_runningActionsCount = window.obj6932_onTap_runningActionsCount - 1;
if (window.obj6932_onTap_runningActionsCount < 0) {
	window.obj6932_onTap_runningActionsCount = 0;
} else if (window.obj6932_onTap_runningActionsCount == 0) {
	obj6932_onTap_actionGroup1();
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
obj6932_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6932_onTap_activeActionGroupIndex = -1;
		$("#obj6932").trigger("obj6932_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6932) {
				console.warn("de-queueing event obj6932." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6932").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6932_onTap_activeActionGroupIndex = 1;
	





















};
obj6939_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6939_onTap_activeActionGroupIndex = -1;
		$("#obj6939").trigger("obj6939_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6939) {
				console.warn("de-queueing event obj6939." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6939").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6939_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6943 
switchImage_6941();
function switchImage_6941() {
	window.obj6939_onTap_runningActionsCount = obj6939_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6943";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6943_img";
	var fromImagePath = "../images/obj6939_image.png";
	var toImagePath = "../images/switch308_to.png";
	var switchHelperId = "switchHelper313"
	var switchHelperRef = "#switchHelper313"
	var switchId = "313";
	var toSwitchId = "313";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage6941_from";
	var toSoundObjectId = "#obj_audio_switchImage6941_to";
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
				window.obj6939_onTap_runningActionsCount = window.obj6939_onTap_runningActionsCount - 1;
if (window.obj6939_onTap_runningActionsCount < 0) {
	window.obj6939_onTap_runningActionsCount = 0;
} else if (window.obj6939_onTap_runningActionsCount == 0) {
	obj6939_onTap_actionGroup1();
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
obj6939_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6939_onTap_activeActionGroupIndex = -1;
		$("#obj6939").trigger("obj6939_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6939) {
				console.warn("de-queueing event obj6939." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6939").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6939_onTap_activeActionGroupIndex = 1;
	





















};
obj6958_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6958_onTap_activeActionGroupIndex = -1;
		$("#obj6958").trigger("obj6958_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6958) {
				console.warn("de-queueing event obj6958." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6958").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6958_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6958 
switchImage_6960();
function switchImage_6960() {
	window.obj6958_onTap_runningActionsCount = obj6958_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6958";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6958_img";
	var fromImagePath = "../images/obj6943_image.png";
	var toImagePath = "../images/switch308_to.png";
	var switchHelperId = "switchHelper316"
	var switchHelperRef = "#switchHelper316"
	var switchId = "316";
	var toSwitchId = "316";
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
				window.obj6958_onTap_runningActionsCount = window.obj6958_onTap_runningActionsCount - 1;
if (window.obj6958_onTap_runningActionsCount < 0) {
	window.obj6958_onTap_runningActionsCount = 0;
} else if (window.obj6958_onTap_runningActionsCount == 0) {
	obj6958_onTap_actionGroup1();
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
obj6958_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6958_onTap_activeActionGroupIndex = -1;
		$("#obj6958").trigger("obj6958_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6958) {
				console.warn("de-queueing event obj6958." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6958").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6958_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_6961();
function playAudioFile_6961() {
	window.obj6958_onTap_runningActionsCount = obj6958_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile6961")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile6961");
			$("#obj_audio_playSoundFile6961").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj6958_onTap_runningActionsCount = window.obj6958_onTap_runningActionsCount - 1;
if (window.obj6958_onTap_runningActionsCount < 0) {
	window.obj6958_onTap_runningActionsCount = 0;
} else if (window.obj6958_onTap_runningActionsCount == 0) {
	obj6958_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj6958_onTap_runningActionsCount = window.obj6958_onTap_runningActionsCount - 1;
if (window.obj6958_onTap_runningActionsCount < 0) {
	window.obj6958_onTap_runningActionsCount = 0;
} else if (window.obj6958_onTap_runningActionsCount == 0) {
	obj6958_onTap_actionGroup2();
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
				window.obj6958_onTap_runningActionsCount = window.obj6958_onTap_runningActionsCount - 1;
if (window.obj6958_onTap_runningActionsCount < 0) {
	window.obj6958_onTap_runningActionsCount = 0;
} else if (window.obj6958_onTap_runningActionsCount == 0) {
	obj6958_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj6958_onTap_runningActionsCount = window.obj6958_onTap_runningActionsCount - 1;
if (window.obj6958_onTap_runningActionsCount < 0) {
	window.obj6958_onTap_runningActionsCount = 0;
} else if (window.obj6958_onTap_runningActionsCount == 0) {
	obj6958_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj6958_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6958_onTap_activeActionGroupIndex = -1;
		$("#obj6958").trigger("obj6958_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6958) {
				console.warn("de-queueing event obj6958." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6958").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6958_onTap_activeActionGroupIndex = 2;
	





















};
obj6947_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6947_onTap_activeActionGroupIndex = -1;
		$("#obj6947").trigger("obj6947_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6947) {
				console.warn("de-queueing event obj6947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6947_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6951 
switchImage_6949();
function switchImage_6949() {
	window.obj6947_onTap_runningActionsCount = obj6947_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6951";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6951_img";
	var fromImagePath = "../images/obj6932_image.png";
	var toImagePath = "../images/switch310_to.png";
	var switchHelperId = "switchHelper318"
	var switchHelperRef = "#switchHelper318"
	var switchId = "318";
	var toSwitchId = "318";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage6949_from";
	var toSoundObjectId = "#obj_audio_switchImage6949_to";
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
				window.obj6947_onTap_runningActionsCount = window.obj6947_onTap_runningActionsCount - 1;
if (window.obj6947_onTap_runningActionsCount < 0) {
	window.obj6947_onTap_runningActionsCount = 0;
} else if (window.obj6947_onTap_runningActionsCount == 0) {
	obj6947_onTap_actionGroup1();
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
obj6947_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6947_onTap_activeActionGroupIndex = -1;
		$("#obj6947").trigger("obj6947_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6947) {
				console.warn("de-queueing event obj6947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6947_onTap_activeActionGroupIndex = 1;
	





















};
obj6954_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6954_onTap_activeActionGroupIndex = -1;
		$("#obj6954").trigger("obj6954_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6954) {
				console.warn("de-queueing event obj6954." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6954").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6954_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6958 
switchImage_6956();
function switchImage_6956() {
	window.obj6954_onTap_runningActionsCount = obj6954_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6958";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6958_img";
	var fromImagePath = "../images/obj6954_image.png";
	var toImagePath = "../images/switch308_to.png";
	var switchHelperId = "switchHelper321"
	var switchHelperRef = "#switchHelper321"
	var switchId = "321";
	var toSwitchId = "321";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage6956_from";
	var toSoundObjectId = "#obj_audio_switchImage6956_to";
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
				window.obj6954_onTap_runningActionsCount = window.obj6954_onTap_runningActionsCount - 1;
if (window.obj6954_onTap_runningActionsCount < 0) {
	window.obj6954_onTap_runningActionsCount = 0;
} else if (window.obj6954_onTap_runningActionsCount == 0) {
	obj6954_onTap_actionGroup1();
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
obj6954_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6954_onTap_activeActionGroupIndex = -1;
		$("#obj6954").trigger("obj6954_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6954) {
				console.warn("de-queueing event obj6954." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6954").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6954_onTap_activeActionGroupIndex = 1;
	





















};
obj6962_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6962_onTap_activeActionGroupIndex = -1;
		$("#obj6962").trigger("obj6962_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6962) {
				console.warn("de-queueing event obj6962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6962_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6962 
switchImage_6964();
function switchImage_6964() {
	window.obj6962_onTap_runningActionsCount = obj6962_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6962";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6962_img";
	var fromImagePath = "../images/obj6943_image.png";
	var toImagePath = "../images/switch308_to.png";
	var switchHelperId = "switchHelper324"
	var switchHelperRef = "#switchHelper324"
	var switchId = "324";
	var toSwitchId = "324";
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
				window.obj6962_onTap_runningActionsCount = window.obj6962_onTap_runningActionsCount - 1;
if (window.obj6962_onTap_runningActionsCount < 0) {
	window.obj6962_onTap_runningActionsCount = 0;
} else if (window.obj6962_onTap_runningActionsCount == 0) {
	obj6962_onTap_actionGroup1();
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
obj6962_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6962_onTap_activeActionGroupIndex = -1;
		$("#obj6962").trigger("obj6962_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6962) {
				console.warn("de-queueing event obj6962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6962_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_6965();
function playAudioFile_6965() {
	window.obj6962_onTap_runningActionsCount = obj6962_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile6965")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile6965");
			$("#obj_audio_playSoundFile6965").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj6962_onTap_runningActionsCount = window.obj6962_onTap_runningActionsCount - 1;
if (window.obj6962_onTap_runningActionsCount < 0) {
	window.obj6962_onTap_runningActionsCount = 0;
} else if (window.obj6962_onTap_runningActionsCount == 0) {
	obj6962_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj6962_onTap_runningActionsCount = window.obj6962_onTap_runningActionsCount - 1;
if (window.obj6962_onTap_runningActionsCount < 0) {
	window.obj6962_onTap_runningActionsCount = 0;
} else if (window.obj6962_onTap_runningActionsCount == 0) {
	obj6962_onTap_actionGroup2();
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
				window.obj6962_onTap_runningActionsCount = window.obj6962_onTap_runningActionsCount - 1;
if (window.obj6962_onTap_runningActionsCount < 0) {
	window.obj6962_onTap_runningActionsCount = 0;
} else if (window.obj6962_onTap_runningActionsCount == 0) {
	obj6962_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj6962_onTap_runningActionsCount = window.obj6962_onTap_runningActionsCount - 1;
if (window.obj6962_onTap_runningActionsCount < 0) {
	window.obj6962_onTap_runningActionsCount = 0;
} else if (window.obj6962_onTap_runningActionsCount == 0) {
	obj6962_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj6962_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6962_onTap_activeActionGroupIndex = -1;
		$("#obj6962").trigger("obj6962_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6962) {
				console.warn("de-queueing event obj6962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6962_onTap_activeActionGroupIndex = 2;
	





















};
obj6969_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6969_onTap_activeActionGroupIndex = -1;
		$("#obj6969").trigger("obj6969_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6969) {
				console.warn("de-queueing event obj6969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6969_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6966 
switchImage_6971();
function switchImage_6971() {
	window.obj6969_onTap_runningActionsCount = obj6969_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6966";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6966_img";
	var fromImagePath = "../images/obj6932_image.png";
	var toImagePath = "../images/switch310_to.png";
	var switchHelperId = "switchHelper326"
	var switchHelperRef = "#switchHelper326"
	var switchId = "326";
	var toSwitchId = "326";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage6971_from";
	var toSoundObjectId = "#obj_audio_switchImage6971_to";
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
				window.obj6969_onTap_runningActionsCount = window.obj6969_onTap_runningActionsCount - 1;
if (window.obj6969_onTap_runningActionsCount < 0) {
	window.obj6969_onTap_runningActionsCount = 0;
} else if (window.obj6969_onTap_runningActionsCount == 0) {
	obj6969_onTap_actionGroup1();
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
obj6969_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6969_onTap_activeActionGroupIndex = -1;
		$("#obj6969").trigger("obj6969_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6969) {
				console.warn("de-queueing event obj6969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6969_onTap_activeActionGroupIndex = 1;
	





















};
obj6973_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6973_onTap_activeActionGroupIndex = -1;
		$("#obj6973").trigger("obj6973_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6973) {
				console.warn("de-queueing event obj6973." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6973").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6973_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6962 
switchImage_6975();
function switchImage_6975() {
	window.obj6973_onTap_runningActionsCount = obj6973_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6962";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6962_img";
	var fromImagePath = "../images/obj6939_image.png";
	var toImagePath = "../images/switch308_to.png";
	var switchHelperId = "switchHelper329"
	var switchHelperRef = "#switchHelper329"
	var switchId = "329";
	var toSwitchId = "329";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage6975_from";
	var toSoundObjectId = "#obj_audio_switchImage6975_to";
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
				window.obj6973_onTap_runningActionsCount = window.obj6973_onTap_runningActionsCount - 1;
if (window.obj6973_onTap_runningActionsCount < 0) {
	window.obj6973_onTap_runningActionsCount = 0;
} else if (window.obj6973_onTap_runningActionsCount == 0) {
	obj6973_onTap_actionGroup1();
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
obj6973_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6973_onTap_activeActionGroupIndex = -1;
		$("#obj6973").trigger("obj6973_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6973) {
				console.warn("de-queueing event obj6973." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6973").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6973_onTap_activeActionGroupIndex = 1;
	





















};
obj6977_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6977_onTap_activeActionGroupIndex = -1;
		$("#obj6977").trigger("obj6977_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6977) {
				console.warn("de-queueing event obj6977." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6977").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6977_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6977 
switchImage_6979();
function switchImage_6979() {
	window.obj6977_onTap_runningActionsCount = obj6977_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6977";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6977_img";
	var fromImagePath = "../images/obj6943_image.png";
	var toImagePath = "../images/switch308_to.png";
	var switchHelperId = "switchHelper332"
	var switchHelperRef = "#switchHelper332"
	var switchId = "332";
	var toSwitchId = "332";
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
				window.obj6977_onTap_runningActionsCount = window.obj6977_onTap_runningActionsCount - 1;
if (window.obj6977_onTap_runningActionsCount < 0) {
	window.obj6977_onTap_runningActionsCount = 0;
} else if (window.obj6977_onTap_runningActionsCount == 0) {
	obj6977_onTap_actionGroup1();
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
obj6977_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6977_onTap_activeActionGroupIndex = -1;
		$("#obj6977").trigger("obj6977_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6977) {
				console.warn("de-queueing event obj6977." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6977").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6977_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_6980();
function playAudioFile_6980() {
	window.obj6977_onTap_runningActionsCount = obj6977_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile6980")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile6980");
			$("#obj_audio_playSoundFile6980").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj6977_onTap_runningActionsCount = window.obj6977_onTap_runningActionsCount - 1;
if (window.obj6977_onTap_runningActionsCount < 0) {
	window.obj6977_onTap_runningActionsCount = 0;
} else if (window.obj6977_onTap_runningActionsCount == 0) {
	obj6977_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj6977_onTap_runningActionsCount = window.obj6977_onTap_runningActionsCount - 1;
if (window.obj6977_onTap_runningActionsCount < 0) {
	window.obj6977_onTap_runningActionsCount = 0;
} else if (window.obj6977_onTap_runningActionsCount == 0) {
	obj6977_onTap_actionGroup2();
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
				window.obj6977_onTap_runningActionsCount = window.obj6977_onTap_runningActionsCount - 1;
if (window.obj6977_onTap_runningActionsCount < 0) {
	window.obj6977_onTap_runningActionsCount = 0;
} else if (window.obj6977_onTap_runningActionsCount == 0) {
	obj6977_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj6977_onTap_runningActionsCount = window.obj6977_onTap_runningActionsCount - 1;
if (window.obj6977_onTap_runningActionsCount < 0) {
	window.obj6977_onTap_runningActionsCount = 0;
} else if (window.obj6977_onTap_runningActionsCount == 0) {
	obj6977_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj6977_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6977_onTap_activeActionGroupIndex = -1;
		$("#obj6977").trigger("obj6977_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6977) {
				console.warn("de-queueing event obj6977." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6977").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6977_onTap_activeActionGroupIndex = 2;
	





















};
obj6984_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6984_onTap_activeActionGroupIndex = -1;
		$("#obj6984").trigger("obj6984_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6984) {
				console.warn("de-queueing event obj6984." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6984").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6984_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6981 
switchImage_6986();
function switchImage_6986() {
	window.obj6984_onTap_runningActionsCount = obj6984_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6981";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6981_img";
	var fromImagePath = "../images/obj6932_image.png";
	var toImagePath = "../images/switch310_to.png";
	var switchHelperId = "switchHelper334"
	var switchHelperRef = "#switchHelper334"
	var switchId = "334";
	var toSwitchId = "334";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage6986_from";
	var toSoundObjectId = "#obj_audio_switchImage6986_to";
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
				window.obj6984_onTap_runningActionsCount = window.obj6984_onTap_runningActionsCount - 1;
if (window.obj6984_onTap_runningActionsCount < 0) {
	window.obj6984_onTap_runningActionsCount = 0;
} else if (window.obj6984_onTap_runningActionsCount == 0) {
	obj6984_onTap_actionGroup1();
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
obj6984_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6984_onTap_activeActionGroupIndex = -1;
		$("#obj6984").trigger("obj6984_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6984) {
				console.warn("de-queueing event obj6984." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6984").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6984_onTap_activeActionGroupIndex = 1;
	





















};
obj6988_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6988_onTap_activeActionGroupIndex = -1;
		$("#obj6988").trigger("obj6988_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6988) {
				console.warn("de-queueing event obj6988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6988_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6977 
switchImage_6990();
function switchImage_6990() {
	window.obj6988_onTap_runningActionsCount = obj6988_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6977";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6977_img";
	var fromImagePath = "../images/obj6939_image.png";
	var toImagePath = "../images/switch308_to.png";
	var switchHelperId = "switchHelper337"
	var switchHelperRef = "#switchHelper337"
	var switchId = "337";
	var toSwitchId = "337";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage6990_from";
	var toSoundObjectId = "#obj_audio_switchImage6990_to";
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
				window.obj6988_onTap_runningActionsCount = window.obj6988_onTap_runningActionsCount - 1;
if (window.obj6988_onTap_runningActionsCount < 0) {
	window.obj6988_onTap_runningActionsCount = 0;
} else if (window.obj6988_onTap_runningActionsCount == 0) {
	obj6988_onTap_actionGroup1();
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
obj6988_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6988_onTap_activeActionGroupIndex = -1;
		$("#obj6988").trigger("obj6988_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6988) {
				console.warn("de-queueing event obj6988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6988_onTap_activeActionGroupIndex = 1;
	





















};
obj6992_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6992_onTap_activeActionGroupIndex = -1;
		$("#obj6992").trigger("obj6992_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6992) {
				console.warn("de-queueing event obj6992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6992_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6992 
switchImage_6994();
function switchImage_6994() {
	window.obj6992_onTap_runningActionsCount = obj6992_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6992";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6992_img";
	var fromImagePath = "../images/obj6943_image.png";
	var toImagePath = "../images/switch308_to.png";
	var switchHelperId = "switchHelper340"
	var switchHelperRef = "#switchHelper340"
	var switchId = "340";
	var toSwitchId = "340";
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
				window.obj6992_onTap_runningActionsCount = window.obj6992_onTap_runningActionsCount - 1;
if (window.obj6992_onTap_runningActionsCount < 0) {
	window.obj6992_onTap_runningActionsCount = 0;
} else if (window.obj6992_onTap_runningActionsCount == 0) {
	obj6992_onTap_actionGroup1();
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
obj6992_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6992_onTap_activeActionGroupIndex = -1;
		$("#obj6992").trigger("obj6992_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6992) {
				console.warn("de-queueing event obj6992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6992_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_6995();
function playAudioFile_6995() {
	window.obj6992_onTap_runningActionsCount = obj6992_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile6995")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile6995");
			$("#obj_audio_playSoundFile6995").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj6992_onTap_runningActionsCount = window.obj6992_onTap_runningActionsCount - 1;
if (window.obj6992_onTap_runningActionsCount < 0) {
	window.obj6992_onTap_runningActionsCount = 0;
} else if (window.obj6992_onTap_runningActionsCount == 0) {
	obj6992_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj6992_onTap_runningActionsCount = window.obj6992_onTap_runningActionsCount - 1;
if (window.obj6992_onTap_runningActionsCount < 0) {
	window.obj6992_onTap_runningActionsCount = 0;
} else if (window.obj6992_onTap_runningActionsCount == 0) {
	obj6992_onTap_actionGroup2();
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
				window.obj6992_onTap_runningActionsCount = window.obj6992_onTap_runningActionsCount - 1;
if (window.obj6992_onTap_runningActionsCount < 0) {
	window.obj6992_onTap_runningActionsCount = 0;
} else if (window.obj6992_onTap_runningActionsCount == 0) {
	obj6992_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj6992_onTap_runningActionsCount = window.obj6992_onTap_runningActionsCount - 1;
if (window.obj6992_onTap_runningActionsCount < 0) {
	window.obj6992_onTap_runningActionsCount = 0;
} else if (window.obj6992_onTap_runningActionsCount == 0) {
	obj6992_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj6992_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6992_onTap_activeActionGroupIndex = -1;
		$("#obj6992").trigger("obj6992_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6992) {
				console.warn("de-queueing event obj6992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6992_onTap_activeActionGroupIndex = 2;
	





















};
obj6999_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6999_onTap_activeActionGroupIndex = -1;
		$("#obj6999").trigger("obj6999_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6999) {
				console.warn("de-queueing event obj6999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6999_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6996 
switchImage_7001();
function switchImage_7001() {
	window.obj6999_onTap_runningActionsCount = obj6999_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6996";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6996_img";
	var fromImagePath = "../images/obj6932_image.png";
	var toImagePath = "../images/switch310_to.png";
	var switchHelperId = "switchHelper342"
	var switchHelperRef = "#switchHelper342"
	var switchId = "342";
	var toSwitchId = "342";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7001_from";
	var toSoundObjectId = "#obj_audio_switchImage7001_to";
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
				window.obj6999_onTap_runningActionsCount = window.obj6999_onTap_runningActionsCount - 1;
if (window.obj6999_onTap_runningActionsCount < 0) {
	window.obj6999_onTap_runningActionsCount = 0;
} else if (window.obj6999_onTap_runningActionsCount == 0) {
	obj6999_onTap_actionGroup1();
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
obj6999_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6999_onTap_activeActionGroupIndex = -1;
		$("#obj6999").trigger("obj6999_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6999) {
				console.warn("de-queueing event obj6999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6999_onTap_activeActionGroupIndex = 1;
	





















};
obj7003_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7003_onTap_activeActionGroupIndex = -1;
		$("#obj7003").trigger("obj7003_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7003) {
				console.warn("de-queueing event obj7003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7003_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6992 
switchImage_7005();
function switchImage_7005() {
	window.obj7003_onTap_runningActionsCount = obj7003_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6992";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6992_img";
	var fromImagePath = "../images/obj6939_image.png";
	var toImagePath = "../images/switch308_to.png";
	var switchHelperId = "switchHelper345"
	var switchHelperRef = "#switchHelper345"
	var switchId = "345";
	var toSwitchId = "345";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7005_from";
	var toSoundObjectId = "#obj_audio_switchImage7005_to";
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
				window.obj7003_onTap_runningActionsCount = window.obj7003_onTap_runningActionsCount - 1;
if (window.obj7003_onTap_runningActionsCount < 0) {
	window.obj7003_onTap_runningActionsCount = 0;
} else if (window.obj7003_onTap_runningActionsCount == 0) {
	obj7003_onTap_actionGroup1();
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
obj7003_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7003_onTap_activeActionGroupIndex = -1;
		$("#obj7003").trigger("obj7003_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7003) {
				console.warn("de-queueing event obj7003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7003_onTap_activeActionGroupIndex = 1;
	





















};
obj7007_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7007_onTap_activeActionGroupIndex = -1;
		$("#obj7007").trigger("obj7007_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7007) {
				console.warn("de-queueing event obj7007." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7007").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7007_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj7007 
switchImage_7009();
function switchImage_7009() {
	window.obj7007_onTap_runningActionsCount = obj7007_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj7007";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj7007_img";
	var fromImagePath = "../images/obj6943_image.png";
	var toImagePath = "../images/switch308_to.png";
	var switchHelperId = "switchHelper348"
	var switchHelperRef = "#switchHelper348"
	var switchId = "348";
	var toSwitchId = "348";
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
				window.obj7007_onTap_runningActionsCount = window.obj7007_onTap_runningActionsCount - 1;
if (window.obj7007_onTap_runningActionsCount < 0) {
	window.obj7007_onTap_runningActionsCount = 0;
} else if (window.obj7007_onTap_runningActionsCount == 0) {
	obj7007_onTap_actionGroup1();
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
obj7007_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7007_onTap_activeActionGroupIndex = -1;
		$("#obj7007").trigger("obj7007_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7007) {
				console.warn("de-queueing event obj7007." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7007").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7007_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_7010();
function playAudioFile_7010() {
	window.obj7007_onTap_runningActionsCount = obj7007_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile7010")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7010");
			$("#obj_audio_playSoundFile7010").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7007_onTap_runningActionsCount = window.obj7007_onTap_runningActionsCount - 1;
if (window.obj7007_onTap_runningActionsCount < 0) {
	window.obj7007_onTap_runningActionsCount = 0;
} else if (window.obj7007_onTap_runningActionsCount == 0) {
	obj7007_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7007_onTap_runningActionsCount = window.obj7007_onTap_runningActionsCount - 1;
if (window.obj7007_onTap_runningActionsCount < 0) {
	window.obj7007_onTap_runningActionsCount = 0;
} else if (window.obj7007_onTap_runningActionsCount == 0) {
	obj7007_onTap_actionGroup2();
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
				window.obj7007_onTap_runningActionsCount = window.obj7007_onTap_runningActionsCount - 1;
if (window.obj7007_onTap_runningActionsCount < 0) {
	window.obj7007_onTap_runningActionsCount = 0;
} else if (window.obj7007_onTap_runningActionsCount == 0) {
	obj7007_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj7007_onTap_runningActionsCount = window.obj7007_onTap_runningActionsCount - 1;
if (window.obj7007_onTap_runningActionsCount < 0) {
	window.obj7007_onTap_runningActionsCount = 0;
} else if (window.obj7007_onTap_runningActionsCount == 0) {
	obj7007_onTap_actionGroup2();
}
		}
	}
	
	
	
}


















};
obj7007_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7007_onTap_activeActionGroupIndex = -1;
		$("#obj7007").trigger("obj7007_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7007) {
				console.warn("de-queueing event obj7007." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7007").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7007_onTap_activeActionGroupIndex = 2;
	





















};
obj7014_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7014_onTap_activeActionGroupIndex = -1;
		$("#obj7014").trigger("obj7014_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7014) {
				console.warn("de-queueing event obj7014." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7014").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7014_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj7011 
switchImage_7016();
function switchImage_7016() {
	window.obj7014_onTap_runningActionsCount = obj7014_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj7011";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj7011_img";
	var fromImagePath = "../images/obj6932_image.png";
	var toImagePath = "../images/switch310_to.png";
	var switchHelperId = "switchHelper350"
	var switchHelperRef = "#switchHelper350"
	var switchId = "350";
	var toSwitchId = "350";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7016_from";
	var toSoundObjectId = "#obj_audio_switchImage7016_to";
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
				window.obj7014_onTap_runningActionsCount = window.obj7014_onTap_runningActionsCount - 1;
if (window.obj7014_onTap_runningActionsCount < 0) {
	window.obj7014_onTap_runningActionsCount = 0;
} else if (window.obj7014_onTap_runningActionsCount == 0) {
	obj7014_onTap_actionGroup1();
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
obj7014_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7014_onTap_activeActionGroupIndex = -1;
		$("#obj7014").trigger("obj7014_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7014) {
				console.warn("de-queueing event obj7014." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7014").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7014_onTap_activeActionGroupIndex = 1;
	





















};
obj7018_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7018_onTap_activeActionGroupIndex = -1;
		$("#obj7018").trigger("obj7018_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7018) {
				console.warn("de-queueing event obj7018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7018_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj7007 
switchImage_7020();
function switchImage_7020() {
	window.obj7018_onTap_runningActionsCount = obj7018_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj7007";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj7007_img";
	var fromImagePath = "../images/obj6939_image.png";
	var toImagePath = "../images/switch308_to.png";
	var switchHelperId = "switchHelper353"
	var switchHelperRef = "#switchHelper353"
	var switchId = "353";
	var toSwitchId = "353";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7020_from";
	var toSoundObjectId = "#obj_audio_switchImage7020_to";
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
				window.obj7018_onTap_runningActionsCount = window.obj7018_onTap_runningActionsCount - 1;
if (window.obj7018_onTap_runningActionsCount < 0) {
	window.obj7018_onTap_runningActionsCount = 0;
} else if (window.obj7018_onTap_runningActionsCount == 0) {
	obj7018_onTap_actionGroup1();
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
obj7018_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7018_onTap_activeActionGroupIndex = -1;
		$("#obj7018").trigger("obj7018_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7018) {
				console.warn("de-queueing event obj7018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7018_onTap_activeActionGroupIndex = 1;
	





















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
	var switchHelperId = "switchHelper356"
	var switchHelperRef = "#switchHelper356"
	var switchId = "356";
	var toSwitchId = "356";
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
	var switchHelperId = "switchHelper357"
	var switchHelperRef = "#switchHelper357"
	var switchId = "357";
	var toSwitchId = "357";
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
	var switchHelperId = "switchHelper358"
	var switchHelperRef = "#switchHelper358"
	var switchId = "358";
	var toSwitchId = "358";
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
	var switchHelperId = "switchHelper359"
	var switchHelperRef = "#switchHelper359"
	var switchId = "359";
	var toSwitchId = "359";
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
	$("#anchor360")[0].click();
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
	$("#anchor361")[0].click();
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
 *   obj6943: Event Touch Down
 *
 */
$("#obj6943").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6943_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6943_onTap is still running");
	return;
}
var obj6943_onTap_runningActionsCount = 0;
var obj6943_onTap_loopCount = 0;
obj6943_onTap_actionGroup0();
});




















/*
 *
 *   obj6932: Event Touch Down
 *
 */
$("#obj6932").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6932_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6932_onTap is still running");
	return;
}
var obj6932_onTap_runningActionsCount = 0;
var obj6932_onTap_loopCount = 0;
obj6932_onTap_actionGroup0();
});










/*
 *
 *   obj6939: Event Touch Down
 *
 */
$("#obj6939").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6939_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6939_onTap is still running");
	return;
}
var obj6939_onTap_runningActionsCount = 0;
var obj6939_onTap_loopCount = 0;
obj6939_onTap_actionGroup0();
});










/*
 *
 *   obj6958: Event Touch Down
 *
 */
$("#obj6958").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6958_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6958_onTap is still running");
	return;
}
var obj6958_onTap_runningActionsCount = 0;
var obj6958_onTap_loopCount = 0;
obj6958_onTap_actionGroup0();
});




















/*
 *
 *   obj6947: Event Touch Down
 *
 */
$("#obj6947").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6947_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6947_onTap is still running");
	return;
}
var obj6947_onTap_runningActionsCount = 0;
var obj6947_onTap_loopCount = 0;
obj6947_onTap_actionGroup0();
});










/*
 *
 *   obj6954: Event Touch Down
 *
 */
$("#obj6954").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6954_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6954_onTap is still running");
	return;
}
var obj6954_onTap_runningActionsCount = 0;
var obj6954_onTap_loopCount = 0;
obj6954_onTap_actionGroup0();
});










/*
 *
 *   obj6962: Event Touch Down
 *
 */
$("#obj6962").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6962_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6962_onTap is still running");
	return;
}
var obj6962_onTap_runningActionsCount = 0;
var obj6962_onTap_loopCount = 0;
obj6962_onTap_actionGroup0();
});




















/*
 *
 *   obj6969: Event Touch Down
 *
 */
$("#obj6969").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6969_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6969_onTap is still running");
	return;
}
var obj6969_onTap_runningActionsCount = 0;
var obj6969_onTap_loopCount = 0;
obj6969_onTap_actionGroup0();
});










/*
 *
 *   obj6973: Event Touch Down
 *
 */
$("#obj6973").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6973_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6973_onTap is still running");
	return;
}
var obj6973_onTap_runningActionsCount = 0;
var obj6973_onTap_loopCount = 0;
obj6973_onTap_actionGroup0();
});










/*
 *
 *   obj6977: Event Touch Down
 *
 */
$("#obj6977").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6977_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6977_onTap is still running");
	return;
}
var obj6977_onTap_runningActionsCount = 0;
var obj6977_onTap_loopCount = 0;
obj6977_onTap_actionGroup0();
});




















/*
 *
 *   obj6984: Event Touch Down
 *
 */
$("#obj6984").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6984_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6984_onTap is still running");
	return;
}
var obj6984_onTap_runningActionsCount = 0;
var obj6984_onTap_loopCount = 0;
obj6984_onTap_actionGroup0();
});










/*
 *
 *   obj6988: Event Touch Down
 *
 */
$("#obj6988").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6988_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6988_onTap is still running");
	return;
}
var obj6988_onTap_runningActionsCount = 0;
var obj6988_onTap_loopCount = 0;
obj6988_onTap_actionGroup0();
});










/*
 *
 *   obj6992: Event Touch Down
 *
 */
$("#obj6992").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6992_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6992_onTap is still running");
	return;
}
var obj6992_onTap_runningActionsCount = 0;
var obj6992_onTap_loopCount = 0;
obj6992_onTap_actionGroup0();
});




















/*
 *
 *   obj6999: Event Touch Down
 *
 */
$("#obj6999").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6999_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6999_onTap is still running");
	return;
}
var obj6999_onTap_runningActionsCount = 0;
var obj6999_onTap_loopCount = 0;
obj6999_onTap_actionGroup0();
});










/*
 *
 *   obj7003: Event Touch Down
 *
 */
$("#obj7003").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7003_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7003_onTap is still running");
	return;
}
var obj7003_onTap_runningActionsCount = 0;
var obj7003_onTap_loopCount = 0;
obj7003_onTap_actionGroup0();
});










/*
 *
 *   obj7007: Event Touch Down
 *
 */
$("#obj7007").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7007_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7007_onTap is still running");
	return;
}
var obj7007_onTap_runningActionsCount = 0;
var obj7007_onTap_loopCount = 0;
obj7007_onTap_actionGroup0();
});




















/*
 *
 *   obj7014: Event Touch Down
 *
 */
$("#obj7014").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7014_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7014_onTap is still running");
	return;
}
var obj7014_onTap_runningActionsCount = 0;
var obj7014_onTap_loopCount = 0;
obj7014_onTap_actionGroup0();
});










/*
 *
 *   obj7018: Event Touch Down
 *
 */
$("#obj7018").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7018_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7018_onTap is still running");
	return;
}
var obj7018_onTap_runningActionsCount = 0;
var obj7018_onTap_loopCount = 0;
obj7018_onTap_actionGroup0();
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
	
$("#obj1560").trigger('SCEventShow');
$("#obj4502").trigger('SCEventShow');
$("#obj1796").trigger('SCEventShow');
$("#obj1955").trigger('SCEventShow');
$("#obj1957").trigger('SCEventShow');
$("#obj1961").trigger('SCEventShow');
$("#obj1959").trigger('SCEventShow');
$("#obj1963").trigger('SCEventShow');
$("#obj1965").trigger('SCEventShow');
$("#obj6943").trigger('SCEventShow');
$("#obj6936").trigger('SCEventShow');
$("#obj6932").trigger('SCEventShow');
$("#obj6939").trigger('SCEventShow');
$("#obj6958").trigger('SCEventShow');
$("#obj6951").trigger('SCEventShow');
$("#obj6947").trigger('SCEventShow');
$("#obj6954").trigger('SCEventShow');
$("#obj6962").trigger('SCEventShow');
$("#obj6966").trigger('SCEventShow');
$("#obj6969").trigger('SCEventShow');
$("#obj6973").trigger('SCEventShow');
$("#obj6977").trigger('SCEventShow');
$("#obj6981").trigger('SCEventShow');
$("#obj6984").trigger('SCEventShow');
$("#obj6988").trigger('SCEventShow');
$("#obj6992").trigger('SCEventShow');
$("#obj6996").trigger('SCEventShow');
$("#obj6999").trigger('SCEventShow');
$("#obj7003").trigger('SCEventShow');
$("#obj7007").trigger('SCEventShow');
$("#obj7011").trigger('SCEventShow');
$("#obj7014").trigger('SCEventShow');
$("#obj7018").trigger('SCEventShow');
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