pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serofero : Unit2";
pubcoder.page.id = pubcoder.page.id || 2925;
pubcoder.page.title = pubcoder.page.title || "28";
pubcoder.page.number = pubcoder.page.number || 28;
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
var obj3610_onTap_activeActionGroupIndex = -1;
var obj3610_onTap_runningActionsCount = 0;
var obj3610_onTap_loopCount = 0;
var obj3614_onTap_activeActionGroupIndex = -1;
var obj3614_onTap_runningActionsCount = 0;
var obj3614_onTap_loopCount = 0;
var obj3612_onTap_activeActionGroupIndex = -1;
var obj3612_onTap_runningActionsCount = 0;
var obj3612_onTap_loopCount = 0;
var obj3616_onTap_activeActionGroupIndex = -1;
var obj3616_onTap_runningActionsCount = 0;
var obj3616_onTap_loopCount = 0;
var obj3618_onTap_activeActionGroupIndex = -1;
var obj3618_onTap_runningActionsCount = 0;
var obj3618_onTap_loopCount = 0;
var obj3620_onTap_activeActionGroupIndex = -1;
var obj3620_onTap_runningActionsCount = 0;
var obj3620_onTap_loopCount = 0;
var obj7811_onTap_activeActionGroupIndex = -1;
var obj7811_onTap_runningActionsCount = 0;
var obj7811_onTap_loopCount = 0;
var obj7830_SCEventReadAloudStarted_activeActionGroupIndex = -1;
var obj7830_SCEventReadAloudStarted_runningActionsCount = 0;
var obj7830_SCEventReadAloudStarted_loopCount = 0;
var obj7830_SCEventReadAloudStopped_activeActionGroupIndex = -1;
var obj7830_SCEventReadAloudStopped_runningActionsCount = 0;
var obj7830_SCEventReadAloudStopped_loopCount = 0;
var obj7801_onTap_activeActionGroupIndex = -1;
var obj7801_onTap_runningActionsCount = 0;
var obj7801_onTap_loopCount = 0;
var obj7826_onTap_activeActionGroupIndex = -1;
var obj7826_onTap_runningActionsCount = 0;
var obj7826_onTap_loopCount = 0;
var obj7823_onTap_activeActionGroupIndex = -1;
var obj7823_onTap_runningActionsCount = 0;
var obj7823_onTap_loopCount = 0;
var obj7808_onTap_activeActionGroupIndex = -1;
var obj7808_onTap_runningActionsCount = 0;
var obj7808_onTap_loopCount = 0;
var obj7792_onTap_activeActionGroupIndex = -1;
var obj7792_onTap_runningActionsCount = 0;
var obj7792_onTap_loopCount = 0;
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
		
obj3610_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3610_onTap_activeActionGroupIndex = -1;
		$("#obj3610").trigger("obj3610_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3610) {
				console.warn("de-queueing event obj3610." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3610").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3610_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6893 
switchImage_7143();
function switchImage_7143() {
	window.obj3610_onTap_runningActionsCount = obj3610_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6893";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6893_img";
	var fromImagePath = "../images/obj3610_image.png";
	var toImagePath = "../images/switch247_to.png";
	var switchHelperId = "switchHelper247"
	var switchHelperRef = "#switchHelper247"
	var switchId = "247";
	var toSwitchId = "247";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7143_from";
	var toSoundObjectId = "#obj_audio_switchImage7143_to";
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
				window.obj3610_onTap_runningActionsCount = window.obj3610_onTap_runningActionsCount - 1;
if (window.obj3610_onTap_runningActionsCount < 0) {
	window.obj3610_onTap_runningActionsCount = 0;
} else if (window.obj3610_onTap_runningActionsCount == 0) {
	obj3610_onTap_actionGroup1();
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
obj3610_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3610_onTap_activeActionGroupIndex = -1;
		$("#obj3610").trigger("obj3610_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3610) {
				console.warn("de-queueing event obj3610." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3610").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3610_onTap_activeActionGroupIndex = 1;
	






















};
obj3614_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3614_onTap_activeActionGroupIndex = -1;
		$("#obj3614").trigger("obj3614_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3614) {
				console.warn("de-queueing event obj3614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3614_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6899 
switchImage_7145();
function switchImage_7145() {
	window.obj3614_onTap_runningActionsCount = obj3614_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6899";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6899_img";
	var fromImagePath = "../images/obj3614_image.png";
	var toImagePath = "../images/switch230_to.png";
	var switchHelperId = "switchHelper250"
	var switchHelperRef = "#switchHelper250"
	var switchId = "250";
	var toSwitchId = "250";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7145_from";
	var toSoundObjectId = "#obj_audio_switchImage7145_to";
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
				window.obj3614_onTap_runningActionsCount = window.obj3614_onTap_runningActionsCount - 1;
if (window.obj3614_onTap_runningActionsCount < 0) {
	window.obj3614_onTap_runningActionsCount = 0;
} else if (window.obj3614_onTap_runningActionsCount == 0) {
	obj3614_onTap_actionGroup1();
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
obj3614_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3614_onTap_activeActionGroupIndex = -1;
		$("#obj3614").trigger("obj3614_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3614) {
				console.warn("de-queueing event obj3614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3614_onTap_activeActionGroupIndex = 1;
	






















};
obj3612_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3612_onTap_activeActionGroupIndex = -1;
		$("#obj3612").trigger("obj3612_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3612) {
				console.warn("de-queueing event obj3612." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3612").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3612_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6896 
switchImage_7144();
function switchImage_7144() {
	window.obj3612_onTap_runningActionsCount = obj3612_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6896";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6896_img";
	var fromImagePath = "../images/obj3612_image.png";
	var toImagePath = "../images/switch230_to.png";
	var switchHelperId = "switchHelper253"
	var switchHelperRef = "#switchHelper253"
	var switchId = "253";
	var toSwitchId = "253";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7144_from";
	var toSoundObjectId = "#obj_audio_switchImage7144_to";
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
				window.obj3612_onTap_runningActionsCount = window.obj3612_onTap_runningActionsCount - 1;
if (window.obj3612_onTap_runningActionsCount < 0) {
	window.obj3612_onTap_runningActionsCount = 0;
} else if (window.obj3612_onTap_runningActionsCount == 0) {
	obj3612_onTap_actionGroup1();
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
obj3612_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3612_onTap_activeActionGroupIndex = -1;
		$("#obj3612").trigger("obj3612_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3612) {
				console.warn("de-queueing event obj3612." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3612").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3612_onTap_activeActionGroupIndex = 1;
	






















};
obj3616_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3616_onTap_activeActionGroupIndex = -1;
		$("#obj3616").trigger("obj3616_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3616) {
				console.warn("de-queueing event obj3616." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3616").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3616_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6902 
switchImage_7146();
function switchImage_7146() {
	window.obj3616_onTap_runningActionsCount = obj3616_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6902";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6902_img";
	var fromImagePath = "../images/obj3616_image.png";
	var toImagePath = "../images/switch247_to.png";
	var switchHelperId = "switchHelper256"
	var switchHelperRef = "#switchHelper256"
	var switchId = "256";
	var toSwitchId = "256";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7146_from";
	var toSoundObjectId = "#obj_audio_switchImage7146_to";
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
				window.obj3616_onTap_runningActionsCount = window.obj3616_onTap_runningActionsCount - 1;
if (window.obj3616_onTap_runningActionsCount < 0) {
	window.obj3616_onTap_runningActionsCount = 0;
} else if (window.obj3616_onTap_runningActionsCount == 0) {
	obj3616_onTap_actionGroup1();
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
obj3616_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3616_onTap_activeActionGroupIndex = -1;
		$("#obj3616").trigger("obj3616_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3616) {
				console.warn("de-queueing event obj3616." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3616").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3616_onTap_activeActionGroupIndex = 1;
	






















};
obj3618_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3618_onTap_activeActionGroupIndex = -1;
		$("#obj3618").trigger("obj3618_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3618) {
				console.warn("de-queueing event obj3618." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3618").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3618_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6905 
switchImage_7147();
function switchImage_7147() {
	window.obj3618_onTap_runningActionsCount = obj3618_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6905";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6905_img";
	var fromImagePath = "../images/obj3618_image.png";
	var toImagePath = "../images/switch230_to.png";
	var switchHelperId = "switchHelper259"
	var switchHelperRef = "#switchHelper259"
	var switchId = "259";
	var toSwitchId = "259";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7147_from";
	var toSoundObjectId = "#obj_audio_switchImage7147_to";
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
				window.obj3618_onTap_runningActionsCount = window.obj3618_onTap_runningActionsCount - 1;
if (window.obj3618_onTap_runningActionsCount < 0) {
	window.obj3618_onTap_runningActionsCount = 0;
} else if (window.obj3618_onTap_runningActionsCount == 0) {
	obj3618_onTap_actionGroup1();
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
obj3618_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3618_onTap_activeActionGroupIndex = -1;
		$("#obj3618").trigger("obj3618_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3618) {
				console.warn("de-queueing event obj3618." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3618").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3618_onTap_activeActionGroupIndex = 1;
	






















};
obj3620_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3620_onTap_activeActionGroupIndex = -1;
		$("#obj3620").trigger("obj3620_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3620) {
				console.warn("de-queueing event obj3620." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3620").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3620_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6908 
switchImage_7148();
function switchImage_7148() {
	window.obj3620_onTap_runningActionsCount = obj3620_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6908";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6908_img";
	var fromImagePath = "../images/obj3620_image.png";
	var toImagePath = "../images/switch230_to.png";
	var switchHelperId = "switchHelper262"
	var switchHelperRef = "#switchHelper262"
	var switchId = "262";
	var toSwitchId = "262";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7148_from";
	var toSoundObjectId = "#obj_audio_switchImage7148_to";
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
				window.obj3620_onTap_runningActionsCount = window.obj3620_onTap_runningActionsCount - 1;
if (window.obj3620_onTap_runningActionsCount < 0) {
	window.obj3620_onTap_runningActionsCount = 0;
} else if (window.obj3620_onTap_runningActionsCount == 0) {
	obj3620_onTap_actionGroup1();
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
obj3620_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3620_onTap_activeActionGroupIndex = -1;
		$("#obj3620").trigger("obj3620_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3620) {
				console.warn("de-queueing event obj3620." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3620").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3620_onTap_activeActionGroupIndex = 1;
	






















};
obj7811_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7811_onTap_activeActionGroupIndex = -1;
		$("#obj7811").trigger("obj7811_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7811) {
				console.warn("de-queueing event obj7811." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7811").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7811_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_7815();
function runjs_7815() {
	window.obj7811_onTap_runningActionsCount = obj7811_onTap_runningActionsCount + 1;

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
		window.obj7811_onTap_runningActionsCount = window.obj7811_onTap_runningActionsCount - 1;
if (window.obj7811_onTap_runningActionsCount < 0) {
	window.obj7811_onTap_runningActionsCount = 0;
} else if (window.obj7811_onTap_runningActionsCount == 0) {
	obj7811_onTap_actionGroup1();
}
	}, 1);
}







};
obj7811_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7811_onTap_activeActionGroupIndex = -1;
		$("#obj7811").trigger("obj7811_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7811) {
				console.warn("de-queueing event obj7811." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7811").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7811_onTap_activeActionGroupIndex = 1;
	






















};
obj7830_SCEventReadAloudStarted_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7830_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj7830").trigger("obj7830_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7830) {
				console.warn("de-queueing event obj7830." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7830").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7830_SCEventReadAloudStarted_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj7830 
switchImage_7834();
function switchImage_7834() {
	window.obj7830_SCEventReadAloudStarted_runningActionsCount = obj7830_SCEventReadAloudStarted_runningActionsCount + 1;

	var targetObjectId = "#obj7830";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj7830_img";
	var fromImagePath = "../images/obj7830_image.png";
	var toImagePath = "../images/switch21_to.png";
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
				window.obj7830_SCEventReadAloudStarted_runningActionsCount = window.obj7830_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj7830_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj7830_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj7830_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj7830_SCEventReadAloudStarted_actionGroup1();
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
obj7830_SCEventReadAloudStarted_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7830_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj7830").trigger("obj7830_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7830) {
				console.warn("de-queueing event obj7830." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7830").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7830_SCEventReadAloudStarted_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_7835();
function runjs_7835() {
	window.obj7830_SCEventReadAloudStarted_runningActionsCount = obj7830_SCEventReadAloudStarted_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over Pressed');
}
	
	setTimeout(function() {
		window.obj7830_SCEventReadAloudStarted_runningActionsCount = window.obj7830_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj7830_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj7830_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj7830_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj7830_SCEventReadAloudStarted_actionGroup2();
}
	}, 1);
}







};
obj7830_SCEventReadAloudStarted_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7830_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj7830").trigger("obj7830_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7830) {
				console.warn("de-queueing event obj7830." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7830").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7830_SCEventReadAloudStarted_activeActionGroupIndex = 2;
	






















};
obj7830_SCEventReadAloudStopped_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7830_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj7830").trigger("obj7830_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7830) {
				console.warn("de-queueing event obj7830." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7830").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7830_SCEventReadAloudStopped_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj7830 
switchImage_7840();
function switchImage_7840() {
	window.obj7830_SCEventReadAloudStopped_runningActionsCount = obj7830_SCEventReadAloudStopped_runningActionsCount + 1;

	var targetObjectId = "#obj7830";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj7830_img";
	var fromImagePath = "../images/obj7830_image.png";
	var toImagePath = "../images/obj7830_image.png";
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
				window.obj7830_SCEventReadAloudStopped_runningActionsCount = window.obj7830_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj7830_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj7830_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj7830_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj7830_SCEventReadAloudStopped_actionGroup1();
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
obj7830_SCEventReadAloudStopped_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7830_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj7830").trigger("obj7830_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7830) {
				console.warn("de-queueing event obj7830." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7830").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7830_SCEventReadAloudStopped_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_7841();
function runjs_7841() {
	window.obj7830_SCEventReadAloudStopped_runningActionsCount = obj7830_SCEventReadAloudStopped_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over');
}
	
	setTimeout(function() {
		window.obj7830_SCEventReadAloudStopped_runningActionsCount = window.obj7830_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj7830_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj7830_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj7830_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj7830_SCEventReadAloudStopped_actionGroup2();
}
	}, 1);
}







};
obj7830_SCEventReadAloudStopped_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7830_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj7830").trigger("obj7830_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7830) {
				console.warn("de-queueing event obj7830." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7830").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7830_SCEventReadAloudStopped_activeActionGroupIndex = 2;
	






















};
obj7801_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7801_onTap_activeActionGroupIndex = -1;
		$("#obj7801").trigger("obj7801_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7801) {
				console.warn("de-queueing event obj7801." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7801").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7801_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_7803();
function runjs_7803() {
	window.obj7801_onTap_runningActionsCount = obj7801_onTap_runningActionsCount + 1;

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
		window.obj7801_onTap_runningActionsCount = window.obj7801_onTap_runningActionsCount - 1;
if (window.obj7801_onTap_runningActionsCount < 0) {
	window.obj7801_onTap_runningActionsCount = 0;
} else if (window.obj7801_onTap_runningActionsCount == 0) {
	obj7801_onTap_actionGroup1();
}
	}, 1);
}







};
obj7801_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7801_onTap_activeActionGroupIndex = -1;
		$("#obj7801").trigger("obj7801_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7801) {
				console.warn("de-queueing event obj7801." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7801").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7801_onTap_activeActionGroupIndex = 1;
	






















};
obj7826_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7826_onTap_activeActionGroupIndex = -1;
		$("#obj7826").trigger("obj7826_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7826) {
				console.warn("de-queueing event obj7826." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7826").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7826_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj7826 
switchImage_7828();
function switchImage_7828() {
	window.obj7826_onTap_runningActionsCount = obj7826_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj7826";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj7826_img";
	var fromImagePath = "../images/obj7826_image.png";
	var toImagePath = "../images/switch23_to.png";
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
				window.obj7826_onTap_runningActionsCount = window.obj7826_onTap_runningActionsCount - 1;
if (window.obj7826_onTap_runningActionsCount < 0) {
	window.obj7826_onTap_runningActionsCount = 0;
} else if (window.obj7826_onTap_runningActionsCount == 0) {
	obj7826_onTap_actionGroup1();
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
obj7826_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7826_onTap_activeActionGroupIndex = -1;
		$("#obj7826").trigger("obj7826_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7826) {
				console.warn("de-queueing event obj7826." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7826").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7826_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_7829();
function runjs_7829() {
	window.obj7826_onTap_runningActionsCount = obj7826_onTap_runningActionsCount + 1;

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
		window.obj7826_onTap_runningActionsCount = window.obj7826_onTap_runningActionsCount - 1;
if (window.obj7826_onTap_runningActionsCount < 0) {
	window.obj7826_onTap_runningActionsCount = 0;
} else if (window.obj7826_onTap_runningActionsCount == 0) {
	obj7826_onTap_actionGroup2();
}
	}, 1);
}







};
obj7826_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7826_onTap_activeActionGroupIndex = -1;
		$("#obj7826").trigger("obj7826_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7826) {
				console.warn("de-queueing event obj7826." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7826").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7826_onTap_activeActionGroupIndex = 2;
	






















};
obj7823_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7823_onTap_activeActionGroupIndex = -1;
		$("#obj7823").trigger("obj7823_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7823) {
				console.warn("de-queueing event obj7823." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7823").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7823_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_7825();
function goToPage_7825() {
	window.obj7823_onTap_runningActionsCount = obj7823_onTap_runningActionsCount + 1;
	$("#anchor268")[0].click();
	window.obj7823_onTap_runningActionsCount = window.obj7823_onTap_runningActionsCount - 1;
if (window.obj7823_onTap_runningActionsCount < 0) {
	window.obj7823_onTap_runningActionsCount = 0;
} else if (window.obj7823_onTap_runningActionsCount == 0) {
	obj7823_onTap_actionGroup1();
}
}





















};
obj7823_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7823_onTap_activeActionGroupIndex = -1;
		$("#obj7823").trigger("obj7823_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7823) {
				console.warn("de-queueing event obj7823." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7823").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7823_onTap_activeActionGroupIndex = 1;
	






















};
obj7808_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7808_onTap_activeActionGroupIndex = -1;
		$("#obj7808").trigger("obj7808_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7808) {
				console.warn("de-queueing event obj7808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7808_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_7810();
function goToPage_7810() {
	window.obj7808_onTap_runningActionsCount = obj7808_onTap_runningActionsCount + 1;
	$("#anchor269")[0].click();
	window.obj7808_onTap_runningActionsCount = window.obj7808_onTap_runningActionsCount - 1;
if (window.obj7808_onTap_runningActionsCount < 0) {
	window.obj7808_onTap_runningActionsCount = 0;
} else if (window.obj7808_onTap_runningActionsCount == 0) {
	obj7808_onTap_actionGroup1();
}
}





















};
obj7808_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7808_onTap_activeActionGroupIndex = -1;
		$("#obj7808").trigger("obj7808_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7808) {
				console.warn("de-queueing event obj7808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7808_onTap_activeActionGroupIndex = 1;
	






















};
obj7792_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7792_onTap_activeActionGroupIndex = -1;
		$("#obj7792").trigger("obj7792_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7792) {
				console.warn("de-queueing event obj7792." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7792").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7792_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_7795();
function runjs_7795() {
	window.obj7792_onTap_runningActionsCount = obj7792_onTap_runningActionsCount + 1;

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
		window.obj7792_onTap_runningActionsCount = window.obj7792_onTap_runningActionsCount - 1;
if (window.obj7792_onTap_runningActionsCount < 0) {
	window.obj7792_onTap_runningActionsCount = 0;
} else if (window.obj7792_onTap_runningActionsCount == 0) {
	obj7792_onTap_actionGroup1();
}
	}, 1);
}







};
obj7792_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7792_onTap_activeActionGroupIndex = -1;
		$("#obj7792").trigger("obj7792_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7792) {
				console.warn("de-queueing event obj7792." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7792").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7792_onTap_activeActionGroupIndex = 1;
	






















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj3610: Event Touch Down
 *
 */
$("#obj3610").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj3610_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3610_onTap is still running");
	return;
}
var obj3610_onTap_runningActionsCount = 0;
var obj3610_onTap_loopCount = 0;
obj3610_onTap_actionGroup0();
});










/*
 *
 *   obj3614: Event Touch Down
 *
 */
$("#obj3614").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj3614_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3614_onTap is still running");
	return;
}
var obj3614_onTap_runningActionsCount = 0;
var obj3614_onTap_loopCount = 0;
obj3614_onTap_actionGroup0();
});










/*
 *
 *   obj3612: Event Touch Down
 *
 */
$("#obj3612").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj3612_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3612_onTap is still running");
	return;
}
var obj3612_onTap_runningActionsCount = 0;
var obj3612_onTap_loopCount = 0;
obj3612_onTap_actionGroup0();
});








































/*
 *
 *   obj3616: Event Touch Down
 *
 */
$("#obj3616").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj3616_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3616_onTap is still running");
	return;
}
var obj3616_onTap_runningActionsCount = 0;
var obj3616_onTap_loopCount = 0;
obj3616_onTap_actionGroup0();
});










/*
 *
 *   obj3618: Event Touch Down
 *
 */
$("#obj3618").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj3618_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3618_onTap is still running");
	return;
}
var obj3618_onTap_runningActionsCount = 0;
var obj3618_onTap_loopCount = 0;
obj3618_onTap_actionGroup0();
});










/*
 *
 *   obj3620: Event Touch Down
 *
 */
$("#obj3620").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj3620_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3620_onTap is still running");
	return;
}
var obj3620_onTap_runningActionsCount = 0;
var obj3620_onTap_loopCount = 0;
obj3620_onTap_actionGroup0();
});
















































































/*
 *
 *   obj7811: Event Touch Down
 *
 */
$("#obj7811").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7811_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7811_onTap is still running");
	return;
}
var obj7811_onTap_runningActionsCount = 0;
var obj7811_onTap_loopCount = 0;
obj7811_onTap_actionGroup0();
});
























/*
 *
 *   obj7830: Event SCEventReadAloudStarted
 *
 */
$("#obj7830").bind("SCEventReadAloudStarted", function(event) {
	if (window.obj7830_SCEventReadAloudStarted_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7830_SCEventReadAloudStarted is still running");
	return;
}
var obj7830_SCEventReadAloudStarted_runningActionsCount = 0;
var obj7830_SCEventReadAloudStarted_loopCount = 0;
obj7830_SCEventReadAloudStarted_actionGroup0();
});
/*
 *
 *   obj7830: Event SCEventReadAloudStopped
 *
 */
$("#obj7830").bind("SCEventReadAloudStopped", function(event) {
	if (window.obj7830_SCEventReadAloudStopped_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7830_SCEventReadAloudStopped is still running");
	return;
}
var obj7830_SCEventReadAloudStopped_runningActionsCount = 0;
var obj7830_SCEventReadAloudStopped_loopCount = 0;
obj7830_SCEventReadAloudStopped_actionGroup0();
});





/*
 *
 *   obj7801: Event Touch Down
 *
 */
$("#obj7801").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7801_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7801_onTap is still running");
	return;
}
var obj7801_onTap_runningActionsCount = 0;
var obj7801_onTap_loopCount = 0;
obj7801_onTap_actionGroup0();
});










/*
 *
 *   obj7826: Event Touch Down
 *
 */
$("#obj7826").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7826_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7826_onTap is still running");
	return;
}
var obj7826_onTap_runningActionsCount = 0;
var obj7826_onTap_loopCount = 0;
obj7826_onTap_actionGroup0();
});










/*
 *
 *   obj7823: Event Touch Down
 *
 */
$("#obj7823").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7823_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7823_onTap is still running");
	return;
}
var obj7823_onTap_runningActionsCount = 0;
var obj7823_onTap_loopCount = 0;
obj7823_onTap_actionGroup0();
});










/*
 *
 *   obj7808: Event Touch Down
 *
 */
$("#obj7808").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7808_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7808_onTap is still running");
	return;
}
var obj7808_onTap_runningActionsCount = 0;
var obj7808_onTap_loopCount = 0;
obj7808_onTap_actionGroup0();
});










/*
 *
 *   obj7792: Event Touch Down
 *
 */
$("#obj7792").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7792_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7792_onTap is still running");
	return;
}
var obj7792_onTap_runningActionsCount = 0;
var obj7792_onTap_loopCount = 0;
obj7792_onTap_actionGroup0();
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
	
$("#obj3047").trigger('SCEventShow');
$("#obj3610").trigger('SCEventShow');
$("#obj3614").trigger('SCEventShow');
$("#obj3612").trigger('SCEventShow');
$("#obj6896").trigger('SCEventShow');
$("#obj6893").trigger('SCEventShow');
$("#obj6899").trigger('SCEventShow');
$("#obj3616").trigger('SCEventShow');
$("#obj3618").trigger('SCEventShow');
$("#obj3620").trigger('SCEventShow');
$("#obj6908").trigger('SCEventShow');
$("#obj6902").trigger('SCEventShow');
$("#obj6905").trigger('SCEventShow');
$("#obj4038").trigger('SCEventShow');
$("#obj4146").trigger('SCEventShow');
$("#obj7830").trigger('SCEventShow');
$("#obj7801").trigger('SCEventShow');
$("#obj7823").trigger('SCEventShow');
$("#obj7808").trigger('SCEventShow');
$("#obj7792").trigger('SCEventShow');
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
// Select all elements with a class starting with "t" followed by a number
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