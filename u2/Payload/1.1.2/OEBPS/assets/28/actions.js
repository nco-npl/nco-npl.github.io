pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Unit2";
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
var obj3612_onTap_activeActionGroupIndex = -1;
var obj3612_onTap_runningActionsCount = 0;
var obj3612_onTap_loopCount = 0;
var obj3614_onTap_activeActionGroupIndex = -1;
var obj3614_onTap_runningActionsCount = 0;
var obj3614_onTap_loopCount = 0;
var obj3616_onTap_activeActionGroupIndex = -1;
var obj3616_onTap_runningActionsCount = 0;
var obj3616_onTap_loopCount = 0;
var obj3618_onTap_activeActionGroupIndex = -1;
var obj3618_onTap_runningActionsCount = 0;
var obj3618_onTap_loopCount = 0;
var obj3620_onTap_activeActionGroupIndex = -1;
var obj3620_onTap_runningActionsCount = 0;
var obj3620_onTap_loopCount = 0;
var obj3930_SCEventReadAloudStarted_activeActionGroupIndex = -1;
var obj3930_SCEventReadAloudStarted_runningActionsCount = 0;
var obj3930_SCEventReadAloudStarted_loopCount = 0;
var obj3930_SCEventReadAloudStopped_activeActionGroupIndex = -1;
var obj3930_SCEventReadAloudStopped_runningActionsCount = 0;
var obj3930_SCEventReadAloudStopped_loopCount = 0;
var obj3923_onTap_activeActionGroupIndex = -1;
var obj3923_onTap_runningActionsCount = 0;
var obj3923_onTap_loopCount = 0;
var obj3919_onTap_activeActionGroupIndex = -1;
var obj3919_onTap_runningActionsCount = 0;
var obj3919_onTap_loopCount = 0;
var obj3916_onTap_activeActionGroupIndex = -1;
var obj3916_onTap_runningActionsCount = 0;
var obj3916_onTap_loopCount = 0;
var obj3913_onTap_activeActionGroupIndex = -1;
var obj3913_onTap_runningActionsCount = 0;
var obj3913_onTap_loopCount = 0;
var obj3904_onTouchUp_activeActionGroupIndex = -1;
var obj3904_onTouchUp_runningActionsCount = 0;
var obj3904_onTouchUp_loopCount = 0;
var obj6978_onTap_activeActionGroupIndex = -1;
var obj6978_onTap_runningActionsCount = 0;
var obj6978_onTap_loopCount = 0;
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
	var toImagePath = "../images/switch253_to.png";
	var switchHelperId = "switchHelper271"
	var switchHelperRef = "#switchHelper271"
	var switchId = "271";
	var toSwitchId = "271";
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
	var toImagePath = "../images/switch253_to.png";
	var switchHelperId = "switchHelper274"
	var switchHelperRef = "#switchHelper274"
	var switchId = "274";
	var toSwitchId = "274";
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
	var toImagePath = "../images/switch253_to.png";
	var switchHelperId = "switchHelper277"
	var switchHelperRef = "#switchHelper277"
	var switchId = "277";
	var toSwitchId = "277";
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
	var toImagePath = "../images/switch253_to.png";
	var switchHelperId = "switchHelper280"
	var switchHelperRef = "#switchHelper280"
	var switchId = "280";
	var toSwitchId = "280";
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
	var toImagePath = "../images/switch253_to.png";
	var switchHelperId = "switchHelper283"
	var switchHelperRef = "#switchHelper283"
	var switchId = "283";
	var toSwitchId = "283";
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
	var toImagePath = "../images/switch253_to.png";
	var switchHelperId = "switchHelper286"
	var switchHelperRef = "#switchHelper286"
	var switchId = "286";
	var toSwitchId = "286";
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
obj3930_SCEventReadAloudStarted_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3930_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj3930").trigger("obj3930_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3930) {
				console.warn("de-queueing event obj3930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3930_SCEventReadAloudStarted_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj3930 
switchImage_3934();
function switchImage_3934() {
	window.obj3930_SCEventReadAloudStarted_runningActionsCount = obj3930_SCEventReadAloudStarted_runningActionsCount + 1;

	var targetObjectId = "#obj3930";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj3930_img";
	var fromImagePath = "../images/obj3930_image.png";
	var toImagePath = "../images/switch18_to.png";
	var switchHelperId = "switchHelper289"
	var switchHelperRef = "#switchHelper289"
	var switchId = "289";
	var toSwitchId = "289";
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
				window.obj3930_SCEventReadAloudStarted_runningActionsCount = window.obj3930_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj3930_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj3930_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj3930_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj3930_SCEventReadAloudStarted_actionGroup1();
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
obj3930_SCEventReadAloudStarted_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3930_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj3930").trigger("obj3930_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3930) {
				console.warn("de-queueing event obj3930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3930_SCEventReadAloudStarted_activeActionGroupIndex = 1;
	





















};
obj3930_SCEventReadAloudStopped_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3930_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj3930").trigger("obj3930_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3930) {
				console.warn("de-queueing event obj3930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3930_SCEventReadAloudStopped_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj3930 
switchImage_3939();
function switchImage_3939() {
	window.obj3930_SCEventReadAloudStopped_runningActionsCount = obj3930_SCEventReadAloudStopped_runningActionsCount + 1;

	var targetObjectId = "#obj3930";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj3930_img";
	var fromImagePath = "../images/obj3930_image.png";
	var toImagePath = "../images/obj3930_image.png";
	var switchHelperId = "switchHelper290"
	var switchHelperRef = "#switchHelper290"
	var switchId = "290";
	var toSwitchId = "290";
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
				window.obj3930_SCEventReadAloudStopped_runningActionsCount = window.obj3930_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj3930_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj3930_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj3930_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj3930_SCEventReadAloudStopped_actionGroup1();
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
obj3930_SCEventReadAloudStopped_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3930_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj3930").trigger("obj3930_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3930) {
				console.warn("de-queueing event obj3930." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3930").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3930_SCEventReadAloudStopped_activeActionGroupIndex = 1;
	





















};
obj3923_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3923_onTap_activeActionGroupIndex = -1;
		$("#obj3923").trigger("obj3923_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3923) {
				console.warn("de-queueing event obj3923." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3923").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3923_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3925();
function runjs_3925() {
	window.obj3923_onTap_runningActionsCount = obj3923_onTap_runningActionsCount + 1;

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
		window.obj3923_onTap_runningActionsCount = window.obj3923_onTap_runningActionsCount - 1;
if (window.obj3923_onTap_runningActionsCount < 0) {
	window.obj3923_onTap_runningActionsCount = 0;
} else if (window.obj3923_onTap_runningActionsCount == 0) {
	obj3923_onTap_actionGroup1();
}
	}, 1);
}







};
obj3923_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3923_onTap_activeActionGroupIndex = -1;
		$("#obj3923").trigger("obj3923_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3923) {
				console.warn("de-queueing event obj3923." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3923").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3923_onTap_activeActionGroupIndex = 1;
	



//	action: switchImage 
//	target: obj3923 
switchImage_3926();
function switchImage_3926() {
	window.obj3923_onTap_runningActionsCount = obj3923_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj3923";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj3923_img";
	var fromImagePath = "../images/obj3923_image.png";
	var toImagePath = "../images/switch20_to.png";
	var switchHelperId = "switchHelper291"
	var switchHelperRef = "#switchHelper291"
	var switchId = "291";
	var toSwitchId = "291";
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
				window.obj3923_onTap_runningActionsCount = window.obj3923_onTap_runningActionsCount - 1;
if (window.obj3923_onTap_runningActionsCount < 0) {
	window.obj3923_onTap_runningActionsCount = 0;
} else if (window.obj3923_onTap_runningActionsCount == 0) {
	obj3923_onTap_actionGroup2();
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
obj3923_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3923_onTap_activeActionGroupIndex = -1;
		$("#obj3923").trigger("obj3923_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3923) {
				console.warn("de-queueing event obj3923." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3923").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3923_onTap_activeActionGroupIndex = 2;
	





















};
obj3919_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3919_onTap_activeActionGroupIndex = -1;
		$("#obj3919").trigger("obj3919_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3919) {
				console.warn("de-queueing event obj3919." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3919").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3919_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj3919 
switchImage_3921();
function switchImage_3921() {
	window.obj3919_onTap_runningActionsCount = obj3919_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj3919";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj3919_img";
	var fromImagePath = "../images/obj3919_image.png";
	var toImagePath = "../images/switch21_to.png";
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
				window.obj3919_onTap_runningActionsCount = window.obj3919_onTap_runningActionsCount - 1;
if (window.obj3919_onTap_runningActionsCount < 0) {
	window.obj3919_onTap_runningActionsCount = 0;
} else if (window.obj3919_onTap_runningActionsCount == 0) {
	obj3919_onTap_actionGroup1();
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
obj3919_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3919_onTap_activeActionGroupIndex = -1;
		$("#obj3919").trigger("obj3919_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3919) {
				console.warn("de-queueing event obj3919." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3919").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3919_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_3922();
function runjs_3922() {
	window.obj3919_onTap_runningActionsCount = obj3919_onTap_runningActionsCount + 1;

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
		window.obj3919_onTap_runningActionsCount = window.obj3919_onTap_runningActionsCount - 1;
if (window.obj3919_onTap_runningActionsCount < 0) {
	window.obj3919_onTap_runningActionsCount = 0;
} else if (window.obj3919_onTap_runningActionsCount == 0) {
	obj3919_onTap_actionGroup2();
}
	}, 1);
}







};
obj3919_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3919_onTap_activeActionGroupIndex = -1;
		$("#obj3919").trigger("obj3919_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3919) {
				console.warn("de-queueing event obj3919." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3919").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3919_onTap_activeActionGroupIndex = 2;
	





















};
obj3916_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3916_onTap_activeActionGroupIndex = -1;
		$("#obj3916").trigger("obj3916_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3916) {
				console.warn("de-queueing event obj3916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3916_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_3918();
function goToPage_3918() {
	window.obj3916_onTap_runningActionsCount = obj3916_onTap_runningActionsCount + 1;
	$("#anchor293")[0].click();
	window.obj3916_onTap_runningActionsCount = window.obj3916_onTap_runningActionsCount - 1;
if (window.obj3916_onTap_runningActionsCount < 0) {
	window.obj3916_onTap_runningActionsCount = 0;
} else if (window.obj3916_onTap_runningActionsCount == 0) {
	obj3916_onTap_actionGroup1();
}
}





















};
obj3916_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3916_onTap_activeActionGroupIndex = -1;
		$("#obj3916").trigger("obj3916_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3916) {
				console.warn("de-queueing event obj3916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3916_onTap_activeActionGroupIndex = 1;
	





















};
obj3913_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3913_onTap_activeActionGroupIndex = -1;
		$("#obj3913").trigger("obj3913_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3913) {
				console.warn("de-queueing event obj3913." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3913").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3913_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_3915();
function goToPage_3915() {
	window.obj3913_onTap_runningActionsCount = obj3913_onTap_runningActionsCount + 1;
	$("#anchor294")[0].click();
	window.obj3913_onTap_runningActionsCount = window.obj3913_onTap_runningActionsCount - 1;
if (window.obj3913_onTap_runningActionsCount < 0) {
	window.obj3913_onTap_runningActionsCount = 0;
} else if (window.obj3913_onTap_runningActionsCount == 0) {
	obj3913_onTap_actionGroup1();
}
}





















};
obj3913_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3913_onTap_activeActionGroupIndex = -1;
		$("#obj3913").trigger("obj3913_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3913) {
				console.warn("de-queueing event obj3913." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3913").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3913_onTap_activeActionGroupIndex = 1;
	





















};
obj3904_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3904_onTouchUp_activeActionGroupIndex = -1;
		$("#obj3904").trigger("obj3904_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3904) {
				console.warn("de-queueing event obj3904." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3904").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3904_onTouchUp_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3911();
function runjs_3911() {
	window.obj3904_onTouchUp_runningActionsCount = obj3904_onTouchUp_runningActionsCount + 1;

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
		window.obj3904_onTouchUp_runningActionsCount = window.obj3904_onTouchUp_runningActionsCount - 1;
if (window.obj3904_onTouchUp_runningActionsCount < 0) {
	window.obj3904_onTouchUp_runningActionsCount = 0;
} else if (window.obj3904_onTouchUp_runningActionsCount == 0) {
	obj3904_onTouchUp_actionGroup1();
}
	}, 1);
}







};
obj3904_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3904_onTouchUp_activeActionGroupIndex = -1;
		$("#obj3904").trigger("obj3904_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3904) {
				console.warn("de-queueing event obj3904." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3904").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3904_onTouchUp_activeActionGroupIndex = 1;
	





















};
obj6978_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6978_onTap_activeActionGroupIndex = -1;
		$("#obj6978").trigger("obj6978_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6978) {
				console.warn("de-queueing event obj6978." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6978").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6978_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6982();
function runjs_6982() {
	window.obj6978_onTap_runningActionsCount = obj6978_onTap_runningActionsCount + 1;

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
		window.obj6978_onTap_runningActionsCount = window.obj6978_onTap_runningActionsCount - 1;
if (window.obj6978_onTap_runningActionsCount < 0) {
	window.obj6978_onTap_runningActionsCount = 0;
} else if (window.obj6978_onTap_runningActionsCount == 0) {
	obj6978_onTap_actionGroup1();
}
	}, 1);
}







};
obj6978_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6978_onTap_activeActionGroupIndex = -1;
		$("#obj6978").trigger("obj6978_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6978) {
				console.warn("de-queueing event obj6978." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6978").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6978_onTap_activeActionGroupIndex = 1;
	





















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
$("#obj3610").bind(PubCoder.Events.Tap, function(event) {
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
 *   obj3612: Event Touch Down
 *
 */
$("#obj3612").bind(PubCoder.Events.Tap, function(event) {
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
 *   obj3614: Event Touch Down
 *
 */
$("#obj3614").bind(PubCoder.Events.Tap, function(event) {
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
 *   obj3616: Event Touch Down
 *
 */
$("#obj3616").bind(PubCoder.Events.Tap, function(event) {
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
$("#obj3618").bind(PubCoder.Events.Tap, function(event) {
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
$("#obj3620").bind(PubCoder.Events.Tap, function(event) {
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
 *   obj3930: Event SCEventReadAloudStarted
 *
 */
$("#obj3930").bind("SCEventReadAloudStarted", function(event) {
	if (window.obj3930_SCEventReadAloudStarted_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3930_SCEventReadAloudStarted is still running");
	return;
}
var obj3930_SCEventReadAloudStarted_runningActionsCount = 0;
var obj3930_SCEventReadAloudStarted_loopCount = 0;
obj3930_SCEventReadAloudStarted_actionGroup0();
});
/*
 *
 *   obj3930: Event SCEventReadAloudStopped
 *
 */
$("#obj3930").bind("SCEventReadAloudStopped", function(event) {
	if (window.obj3930_SCEventReadAloudStopped_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3930_SCEventReadAloudStopped is still running");
	return;
}
var obj3930_SCEventReadAloudStopped_runningActionsCount = 0;
var obj3930_SCEventReadAloudStopped_loopCount = 0;
obj3930_SCEventReadAloudStopped_actionGroup0();
});





/*
 *
 *   obj3923: Event Touch Down
 *
 */
$("#obj3923").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3923_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3923_onTap is still running");
	return;
}
var obj3923_onTap_runningActionsCount = 0;
var obj3923_onTap_loopCount = 0;
obj3923_onTap_actionGroup0();
});










/*
 *
 *   obj3919: Event Touch Down
 *
 */
$("#obj3919").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3919_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3919_onTap is still running");
	return;
}
var obj3919_onTap_runningActionsCount = 0;
var obj3919_onTap_loopCount = 0;
obj3919_onTap_actionGroup0();
});










/*
 *
 *   obj3916: Event Touch Down
 *
 */
$("#obj3916").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3916_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3916_onTap is still running");
	return;
}
var obj3916_onTap_runningActionsCount = 0;
var obj3916_onTap_loopCount = 0;
obj3916_onTap_actionGroup0();
});










/*
 *
 *   obj3913: Event Touch Down
 *
 */
$("#obj3913").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3913_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3913_onTap is still running");
	return;
}
var obj3913_onTap_runningActionsCount = 0;
var obj3913_onTap_loopCount = 0;
obj3913_onTap_actionGroup0();
});




















/*
 *
 *   obj3904: Event Touch Up
 *
 */
$("#obj3904").bind("touchdown touchmove", function(event) {
	event.preventDefault(); // prevent readers from starting a page swipe on this element
})
$("#obj3904").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj3904").unbind("obj3904_onTouchDown_ended", startActionList);
	    if (window.obj3904_onTouchUp_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3904_onTouchUp is still running");
	return;
}
var obj3904_onTouchUp_runningActionsCount = 0;
var obj3904_onTouchUp_loopCount = 0;
obj3904_onTouchUp_actionGroup0();
	};
	if ((window['obj3904_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj3904_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj3904").bind("obj3904_onTouchDown_ended", startActionList);
	}
});



















/*
 *
 *   obj6978: Event Touch Down
 *
 */
$("#obj6978").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6978_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6978_onTap is still running");
	return;
}
var obj6978_onTap_runningActionsCount = 0;
var obj6978_onTap_loopCount = 0;
obj6978_onTap_actionGroup0();
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
$("#obj4038").trigger('SCEventShow');
$("#obj3610").trigger('SCEventShow');
$("#obj3612").trigger('SCEventShow');
$("#obj3614").trigger('SCEventShow');
$("#obj3616").trigger('SCEventShow');
$("#obj3618").trigger('SCEventShow');
$("#obj3620").trigger('SCEventShow');
$("#obj4146").trigger('SCEventShow');
$("#obj6893").trigger('SCEventShow');
$("#obj6896").trigger('SCEventShow');
$("#obj6899").trigger('SCEventShow');
$("#obj6902").trigger('SCEventShow');
$("#obj6905").trigger('SCEventShow');
$("#obj6908").trigger('SCEventShow');
$("#obj3930").trigger('SCEventShow');
$("#obj3923").trigger('SCEventShow');
$("#obj3916").trigger('SCEventShow');
$("#obj3913").trigger('SCEventShow');
$("#obj3904").trigger('SCEventShow');
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
    
});