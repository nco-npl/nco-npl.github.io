pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serofero : Unit 1";
pubcoder.page.id = pubcoder.page.id || 7249;
pubcoder.page.title = pubcoder.page.title || "11";
pubcoder.page.number = pubcoder.page.number || 11;
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
var obj7389_onTap_activeActionGroupIndex = -1;
var obj7389_onTap_runningActionsCount = 0;
var obj7389_onTap_loopCount = 0;
var obj7386_onTap_activeActionGroupIndex = -1;
var obj7386_onTap_runningActionsCount = 0;
var obj7386_onTap_loopCount = 0;
var obj7359_onTap_activeActionGroupIndex = -1;
var obj7359_onTap_runningActionsCount = 0;
var obj7359_onTap_loopCount = 0;
var obj7392_onTap_activeActionGroupIndex = -1;
var obj7392_onTap_runningActionsCount = 0;
var obj7392_onTap_loopCount = 0;
var obj7383_onTap_activeActionGroupIndex = -1;
var obj7383_onTap_runningActionsCount = 0;
var obj7383_onTap_loopCount = 0;
var obj7371_onTap_activeActionGroupIndex = -1;
var obj7371_onTap_runningActionsCount = 0;
var obj7371_onTap_loopCount = 0;
var obj7380_onTap_activeActionGroupIndex = -1;
var obj7380_onTap_runningActionsCount = 0;
var obj7380_onTap_loopCount = 0;
var obj7377_onTap_activeActionGroupIndex = -1;
var obj7377_onTap_runningActionsCount = 0;
var obj7377_onTap_loopCount = 0;
var obj7374_onTap_activeActionGroupIndex = -1;
var obj7374_onTap_runningActionsCount = 0;
var obj7374_onTap_loopCount = 0;
var obj7399_onTap_activeActionGroupIndex = -1;
var obj7399_onTap_runningActionsCount = 0;
var obj7399_onTap_loopCount = 0;
var obj7368_onTap_activeActionGroupIndex = -1;
var obj7368_onTap_runningActionsCount = 0;
var obj7368_onTap_loopCount = 0;
var obj7365_onTap_activeActionGroupIndex = -1;
var obj7365_onTap_runningActionsCount = 0;
var obj7365_onTap_loopCount = 0;
var obj7362_onTap_activeActionGroupIndex = -1;
var obj7362_onTap_runningActionsCount = 0;
var obj7362_onTap_loopCount = 0;
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
		
obj7389_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7389_onTap_activeActionGroupIndex = -1;
		$("#obj7389").trigger("obj7389_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7389) {
				console.warn("de-queueing event obj7389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7389_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj7352 
switchImage_7391();
function switchImage_7391() {
	window.obj7389_onTap_runningActionsCount = obj7389_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj7352";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj7352_img";
	var fromImagePath = "../images/obj7389_image.png";
	var toImagePath = "../images/switch131_to.png";
	var switchHelperId = "switchHelper131"
	var switchHelperRef = "#switchHelper131"
	var switchId = "131";
	var toSwitchId = "131";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7391_from";
	var toSoundObjectId = "#obj_audio_switchImage7391_to";
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
				window.obj7389_onTap_runningActionsCount = window.obj7389_onTap_runningActionsCount - 1;
if (window.obj7389_onTap_runningActionsCount < 0) {
	window.obj7389_onTap_runningActionsCount = 0;
} else if (window.obj7389_onTap_runningActionsCount == 0) {
	obj7389_onTap_actionGroup1();
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
obj7389_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7389_onTap_activeActionGroupIndex = -1;
		$("#obj7389").trigger("obj7389_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7389) {
				console.warn("de-queueing event obj7389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7389_onTap_activeActionGroupIndex = 1;
	






















};
obj7386_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7386_onTap_activeActionGroupIndex = -1;
		$("#obj7386").trigger("obj7386_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7386) {
				console.warn("de-queueing event obj7386." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7386").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7386_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj7350 
switchImage_7388();
function switchImage_7388() {
	window.obj7386_onTap_runningActionsCount = obj7386_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj7350";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj7350_img";
	var fromImagePath = "../images/obj7386_image.png";
	var toImagePath = "../images/switch131_to.png";
	var switchHelperId = "switchHelper134"
	var switchHelperRef = "#switchHelper134"
	var switchId = "134";
	var toSwitchId = "134";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7388_from";
	var toSoundObjectId = "#obj_audio_switchImage7388_to";
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
				window.obj7386_onTap_runningActionsCount = window.obj7386_onTap_runningActionsCount - 1;
if (window.obj7386_onTap_runningActionsCount < 0) {
	window.obj7386_onTap_runningActionsCount = 0;
} else if (window.obj7386_onTap_runningActionsCount == 0) {
	obj7386_onTap_actionGroup1();
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
obj7386_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7386_onTap_activeActionGroupIndex = -1;
		$("#obj7386").trigger("obj7386_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7386) {
				console.warn("de-queueing event obj7386." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7386").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7386_onTap_activeActionGroupIndex = 1;
	






















};
obj7359_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7359_onTap_activeActionGroupIndex = -1;
		$("#obj7359").trigger("obj7359_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7359) {
				console.warn("de-queueing event obj7359." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7359").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7359_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj7348 
switchImage_7361();
function switchImage_7361() {
	window.obj7359_onTap_runningActionsCount = obj7359_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj7348";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj7348_img";
	var fromImagePath = "../images/obj7359_image.png";
	var toImagePath = "../images/switch131_to.png";
	var switchHelperId = "switchHelper137"
	var switchHelperRef = "#switchHelper137"
	var switchId = "137";
	var toSwitchId = "137";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7361_from";
	var toSoundObjectId = "#obj_audio_switchImage7361_to";
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
				window.obj7359_onTap_runningActionsCount = window.obj7359_onTap_runningActionsCount - 1;
if (window.obj7359_onTap_runningActionsCount < 0) {
	window.obj7359_onTap_runningActionsCount = 0;
} else if (window.obj7359_onTap_runningActionsCount == 0) {
	obj7359_onTap_actionGroup1();
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
obj7359_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7359_onTap_activeActionGroupIndex = -1;
		$("#obj7359").trigger("obj7359_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7359) {
				console.warn("de-queueing event obj7359." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7359").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7359_onTap_activeActionGroupIndex = 1;
	






















};
obj7392_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7392_onTap_activeActionGroupIndex = -1;
		$("#obj7392").trigger("obj7392_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7392) {
				console.warn("de-queueing event obj7392." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7392").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7392_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj7356 
switchImage_7394();
function switchImage_7394() {
	window.obj7392_onTap_runningActionsCount = obj7392_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj7356";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj7356_img";
	var fromImagePath = "../images/obj7392_image.png";
	var toImagePath = "../images/switch131_to.png";
	var switchHelperId = "switchHelper140"
	var switchHelperRef = "#switchHelper140"
	var switchId = "140";
	var toSwitchId = "140";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7394_from";
	var toSoundObjectId = "#obj_audio_switchImage7394_to";
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
				window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;
if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup1();
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
obj7392_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7392_onTap_activeActionGroupIndex = -1;
		$("#obj7392").trigger("obj7392_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7392) {
				console.warn("de-queueing event obj7392." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7392").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7392_onTap_activeActionGroupIndex = 1;
	






















};
obj7383_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7383_onTap_activeActionGroupIndex = -1;
		$("#obj7383").trigger("obj7383_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7383) {
				console.warn("de-queueing event obj7383." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7383").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7383_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj7354 
switchImage_7385();
function switchImage_7385() {
	window.obj7383_onTap_runningActionsCount = obj7383_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj7354";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj7354_img";
	var fromImagePath = "../images/obj7383_image.png";
	var toImagePath = "../images/switch131_to.png";
	var switchHelperId = "switchHelper143"
	var switchHelperRef = "#switchHelper143"
	var switchId = "143";
	var toSwitchId = "143";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7385_from";
	var toSoundObjectId = "#obj_audio_switchImage7385_to";
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
				window.obj7383_onTap_runningActionsCount = window.obj7383_onTap_runningActionsCount - 1;
if (window.obj7383_onTap_runningActionsCount < 0) {
	window.obj7383_onTap_runningActionsCount = 0;
} else if (window.obj7383_onTap_runningActionsCount == 0) {
	obj7383_onTap_actionGroup1();
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
obj7383_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7383_onTap_activeActionGroupIndex = -1;
		$("#obj7383").trigger("obj7383_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7383) {
				console.warn("de-queueing event obj7383." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7383").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7383_onTap_activeActionGroupIndex = 1;
	






















};
obj7371_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7371_onTap_activeActionGroupIndex = -1;
		$("#obj7371").trigger("obj7371_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7371) {
				console.warn("de-queueing event obj7371." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7371").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7371_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj7340 
switchImage_7373();
function switchImage_7373() {
	window.obj7371_onTap_runningActionsCount = obj7371_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj7340";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj7340_img";
	var fromImagePath = "../images/obj7371_image.png";
	var toImagePath = "../images/switch131_to.png";
	var switchHelperId = "switchHelper147"
	var switchHelperRef = "#switchHelper147"
	var switchId = "147";
	var toSwitchId = "147";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7373_from";
	var toSoundObjectId = "#obj_audio_switchImage7373_to";
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
				window.obj7371_onTap_runningActionsCount = window.obj7371_onTap_runningActionsCount - 1;
if (window.obj7371_onTap_runningActionsCount < 0) {
	window.obj7371_onTap_runningActionsCount = 0;
} else if (window.obj7371_onTap_runningActionsCount == 0) {
	obj7371_onTap_actionGroup1();
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
obj7371_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7371_onTap_activeActionGroupIndex = -1;
		$("#obj7371").trigger("obj7371_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7371) {
				console.warn("de-queueing event obj7371." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7371").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7371_onTap_activeActionGroupIndex = 1;
	






















};
obj7380_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7380_onTap_activeActionGroupIndex = -1;
		$("#obj7380").trigger("obj7380_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7380) {
				console.warn("de-queueing event obj7380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7380_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj7346 
switchImage_7382();
function switchImage_7382() {
	window.obj7380_onTap_runningActionsCount = obj7380_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj7346";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj7346_img";
	var fromImagePath = "../images/obj7380_image.png";
	var toImagePath = "../images/switch131_to.png";
	var switchHelperId = "switchHelper150"
	var switchHelperRef = "#switchHelper150"
	var switchId = "150";
	var toSwitchId = "150";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7382_from";
	var toSoundObjectId = "#obj_audio_switchImage7382_to";
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
				window.obj7380_onTap_runningActionsCount = window.obj7380_onTap_runningActionsCount - 1;
if (window.obj7380_onTap_runningActionsCount < 0) {
	window.obj7380_onTap_runningActionsCount = 0;
} else if (window.obj7380_onTap_runningActionsCount == 0) {
	obj7380_onTap_actionGroup1();
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
obj7380_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7380_onTap_activeActionGroupIndex = -1;
		$("#obj7380").trigger("obj7380_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7380) {
				console.warn("de-queueing event obj7380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7380_onTap_activeActionGroupIndex = 1;
	






















};
obj7377_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7377_onTap_activeActionGroupIndex = -1;
		$("#obj7377").trigger("obj7377_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7377) {
				console.warn("de-queueing event obj7377." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7377").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7377_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj7342 
switchImage_7379();
function switchImage_7379() {
	window.obj7377_onTap_runningActionsCount = obj7377_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj7342";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj7342_img";
	var fromImagePath = "../images/obj7377_image.png";
	var toImagePath = "../images/switch131_to.png";
	var switchHelperId = "switchHelper153"
	var switchHelperRef = "#switchHelper153"
	var switchId = "153";
	var toSwitchId = "153";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7379_from";
	var toSoundObjectId = "#obj_audio_switchImage7379_to";
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
				window.obj7377_onTap_runningActionsCount = window.obj7377_onTap_runningActionsCount - 1;
if (window.obj7377_onTap_runningActionsCount < 0) {
	window.obj7377_onTap_runningActionsCount = 0;
} else if (window.obj7377_onTap_runningActionsCount == 0) {
	obj7377_onTap_actionGroup1();
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
obj7377_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7377_onTap_activeActionGroupIndex = -1;
		$("#obj7377").trigger("obj7377_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7377) {
				console.warn("de-queueing event obj7377." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7377").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7377_onTap_activeActionGroupIndex = 1;
	






















};
obj7374_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7374_onTap_activeActionGroupIndex = -1;
		$("#obj7374").trigger("obj7374_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7374) {
				console.warn("de-queueing event obj7374." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7374").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7374_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj7344 
switchImage_7376();
function switchImage_7376() {
	window.obj7374_onTap_runningActionsCount = obj7374_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj7344";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj7344_img";
	var fromImagePath = "../images/obj7374_image.png";
	var toImagePath = "../images/switch131_to.png";
	var switchHelperId = "switchHelper156"
	var switchHelperRef = "#switchHelper156"
	var switchId = "156";
	var toSwitchId = "156";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7376_from";
	var toSoundObjectId = "#obj_audio_switchImage7376_to";
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
				window.obj7374_onTap_runningActionsCount = window.obj7374_onTap_runningActionsCount - 1;
if (window.obj7374_onTap_runningActionsCount < 0) {
	window.obj7374_onTap_runningActionsCount = 0;
} else if (window.obj7374_onTap_runningActionsCount == 0) {
	obj7374_onTap_actionGroup1();
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
obj7374_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7374_onTap_activeActionGroupIndex = -1;
		$("#obj7374").trigger("obj7374_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7374) {
				console.warn("de-queueing event obj7374." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7374").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7374_onTap_activeActionGroupIndex = 1;
	






















};
obj7399_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7399_onTap_activeActionGroupIndex = -1;
		$("#obj7399").trigger("obj7399_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7399) {
				console.warn("de-queueing event obj7399." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7399").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7399_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj7338 
switchImage_7401();
function switchImage_7401() {
	window.obj7399_onTap_runningActionsCount = obj7399_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj7338";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj7338_img";
	var fromImagePath = "../images/obj7399_image.png";
	var toImagePath = "../images/switch131_to.png";
	var switchHelperId = "switchHelper159"
	var switchHelperRef = "#switchHelper159"
	var switchId = "159";
	var toSwitchId = "159";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7401_from";
	var toSoundObjectId = "#obj_audio_switchImage7401_to";
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
				window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;
if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup1();
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
obj7399_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7399_onTap_activeActionGroupIndex = -1;
		$("#obj7399").trigger("obj7399_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7399) {
				console.warn("de-queueing event obj7399." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7399").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7399_onTap_activeActionGroupIndex = 1;
	






















};
obj7368_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7368_onTap_activeActionGroupIndex = -1;
		$("#obj7368").trigger("obj7368_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7368) {
				console.warn("de-queueing event obj7368." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7368").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7368_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj7334 
switchImage_7370();
function switchImage_7370() {
	window.obj7368_onTap_runningActionsCount = obj7368_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj7334";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj7334_img";
	var fromImagePath = "../images/obj7368_image.png";
	var toImagePath = "../images/switch131_to.png";
	var switchHelperId = "switchHelper162"
	var switchHelperRef = "#switchHelper162"
	var switchId = "162";
	var toSwitchId = "162";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7370_from";
	var toSoundObjectId = "#obj_audio_switchImage7370_to";
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
				window.obj7368_onTap_runningActionsCount = window.obj7368_onTap_runningActionsCount - 1;
if (window.obj7368_onTap_runningActionsCount < 0) {
	window.obj7368_onTap_runningActionsCount = 0;
} else if (window.obj7368_onTap_runningActionsCount == 0) {
	obj7368_onTap_actionGroup1();
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
obj7368_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7368_onTap_activeActionGroupIndex = -1;
		$("#obj7368").trigger("obj7368_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7368) {
				console.warn("de-queueing event obj7368." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7368").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7368_onTap_activeActionGroupIndex = 1;
	






















};
obj7365_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7365_onTap_activeActionGroupIndex = -1;
		$("#obj7365").trigger("obj7365_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7365) {
				console.warn("de-queueing event obj7365." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7365").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7365_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj7336 
switchImage_7367();
function switchImage_7367() {
	window.obj7365_onTap_runningActionsCount = obj7365_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj7336";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj7336_img";
	var fromImagePath = "../images/obj7365_image.png";
	var toImagePath = "../images/switch131_to.png";
	var switchHelperId = "switchHelper165"
	var switchHelperRef = "#switchHelper165"
	var switchId = "165";
	var toSwitchId = "165";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7367_from";
	var toSoundObjectId = "#obj_audio_switchImage7367_to";
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
				window.obj7365_onTap_runningActionsCount = window.obj7365_onTap_runningActionsCount - 1;
if (window.obj7365_onTap_runningActionsCount < 0) {
	window.obj7365_onTap_runningActionsCount = 0;
} else if (window.obj7365_onTap_runningActionsCount == 0) {
	obj7365_onTap_actionGroup1();
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
obj7365_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7365_onTap_activeActionGroupIndex = -1;
		$("#obj7365").trigger("obj7365_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7365) {
				console.warn("de-queueing event obj7365." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7365").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7365_onTap_activeActionGroupIndex = 1;
	






















};
obj7362_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7362_onTap_activeActionGroupIndex = -1;
		$("#obj7362").trigger("obj7362_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7362) {
				console.warn("de-queueing event obj7362." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7362").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7362_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj7397 
switchImage_7364();
function switchImage_7364() {
	window.obj7362_onTap_runningActionsCount = obj7362_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj7397";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj7397_img";
	var fromImagePath = "../images/obj7399_image.png";
	var toImagePath = "../images/switch131_to.png";
	var switchHelperId = "switchHelper168"
	var switchHelperRef = "#switchHelper168"
	var switchId = "168";
	var toSwitchId = "168";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7364_from";
	var toSoundObjectId = "#obj_audio_switchImage7364_to";
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
				window.obj7362_onTap_runningActionsCount = window.obj7362_onTap_runningActionsCount - 1;
if (window.obj7362_onTap_runningActionsCount < 0) {
	window.obj7362_onTap_runningActionsCount = 0;
} else if (window.obj7362_onTap_runningActionsCount == 0) {
	obj7362_onTap_actionGroup1();
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
obj7362_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7362_onTap_activeActionGroupIndex = -1;
		$("#obj7362").trigger("obj7362_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7362) {
				console.warn("de-queueing event obj7362." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7362").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7362_onTap_activeActionGroupIndex = 1;
	






















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
	var switchHelperId = "switchHelper171"
	var switchHelperRef = "#switchHelper171"
	var switchId = "171";
	var toSwitchId = "171";
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
	var switchHelperId = "switchHelper172"
	var switchHelperRef = "#switchHelper172"
	var switchId = "172";
	var toSwitchId = "172";
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
	var switchHelperId = "switchHelper173"
	var switchHelperRef = "#switchHelper173"
	var switchId = "173";
	var toSwitchId = "173";
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
	$("#anchor174")[0].click();
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
	$("#anchor175")[0].click();
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
 *   obj7389: Event Touch Down
 *
 */
$("#obj7389").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7389_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7389_onTap is still running");
	return;
}
var obj7389_onTap_runningActionsCount = 0;
var obj7389_onTap_loopCount = 0;
obj7389_onTap_actionGroup0();
});










/*
 *
 *   obj7386: Event Touch Down
 *
 */
$("#obj7386").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7386_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7386_onTap is still running");
	return;
}
var obj7386_onTap_runningActionsCount = 0;
var obj7386_onTap_loopCount = 0;
obj7386_onTap_actionGroup0();
});










/*
 *
 *   obj7359: Event Touch Down
 *
 */
$("#obj7359").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7359_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7359_onTap is still running");
	return;
}
var obj7359_onTap_runningActionsCount = 0;
var obj7359_onTap_loopCount = 0;
obj7359_onTap_actionGroup0();
});










/*
 *
 *   obj7392: Event Touch Down
 *
 */
$("#obj7392").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7392_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7392_onTap is still running");
	return;
}
var obj7392_onTap_runningActionsCount = 0;
var obj7392_onTap_loopCount = 0;
obj7392_onTap_actionGroup0();
});










/*
 *
 *   obj7383: Event Touch Down
 *
 */
$("#obj7383").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7383_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7383_onTap is still running");
	return;
}
var obj7383_onTap_runningActionsCount = 0;
var obj7383_onTap_loopCount = 0;
obj7383_onTap_actionGroup0();
});




























































/*
 *
 *   obj7371: Event Touch Down
 *
 */
$("#obj7371").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7371_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7371_onTap is still running");
	return;
}
var obj7371_onTap_runningActionsCount = 0;
var obj7371_onTap_loopCount = 0;
obj7371_onTap_actionGroup0();
});




















/*
 *
 *   obj7380: Event Touch Down
 *
 */
$("#obj7380").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7380_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7380_onTap is still running");
	return;
}
var obj7380_onTap_runningActionsCount = 0;
var obj7380_onTap_loopCount = 0;
obj7380_onTap_actionGroup0();
});










/*
 *
 *   obj7377: Event Touch Down
 *
 */
$("#obj7377").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7377_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7377_onTap is still running");
	return;
}
var obj7377_onTap_runningActionsCount = 0;
var obj7377_onTap_loopCount = 0;
obj7377_onTap_actionGroup0();
});










/*
 *
 *   obj7374: Event Touch Down
 *
 */
$("#obj7374").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7374_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7374_onTap is still running");
	return;
}
var obj7374_onTap_runningActionsCount = 0;
var obj7374_onTap_loopCount = 0;
obj7374_onTap_actionGroup0();
});










/*
 *
 *   obj7399: Event Touch Down
 *
 */
$("#obj7399").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7399_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7399_onTap is still running");
	return;
}
var obj7399_onTap_runningActionsCount = 0;
var obj7399_onTap_loopCount = 0;
obj7399_onTap_actionGroup0();
});




























































/*
 *
 *   obj7368: Event Touch Down
 *
 */
$("#obj7368").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7368_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7368_onTap is still running");
	return;
}
var obj7368_onTap_runningActionsCount = 0;
var obj7368_onTap_loopCount = 0;
obj7368_onTap_actionGroup0();
});










/*
 *
 *   obj7365: Event Touch Down
 *
 */
$("#obj7365").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7365_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7365_onTap is still running");
	return;
}
var obj7365_onTap_runningActionsCount = 0;
var obj7365_onTap_loopCount = 0;
obj7365_onTap_actionGroup0();
});










/*
 *
 *   obj7362: Event Touch Down
 *
 */
$("#obj7362").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj7362_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7362_onTap is still running");
	return;
}
var obj7362_onTap_runningActionsCount = 0;
var obj7362_onTap_loopCount = 0;
obj7362_onTap_actionGroup0();
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
	
$("#obj7328").trigger('SCEventShow');
$("#obj7330").trigger('SCEventShow');
$("#obj7332").trigger('SCEventShow');
$("#obj7389").trigger('SCEventShow');
$("#obj7386").trigger('SCEventShow');
$("#obj7359").trigger('SCEventShow');
$("#obj7392").trigger('SCEventShow');
$("#obj7383").trigger('SCEventShow');
$("#obj7348").trigger('SCEventShow');
$("#obj7350").trigger('SCEventShow');
$("#obj7352").trigger('SCEventShow');
$("#obj7356").trigger('SCEventShow');
$("#obj7371").trigger('SCEventShow');
$("#obj7354").trigger('SCEventShow');
$("#obj7380").trigger('SCEventShow');
$("#obj7377").trigger('SCEventShow');
$("#obj7374").trigger('SCEventShow');
$("#obj7399").trigger('SCEventShow');
$("#obj7340").trigger('SCEventShow');
$("#obj7346").trigger('SCEventShow');
$("#obj7342").trigger('SCEventShow');
$("#obj7344").trigger('SCEventShow');
$("#obj7338").trigger('SCEventShow');
$("#obj7368").trigger('SCEventShow');
$("#obj7365").trigger('SCEventShow');
$("#obj7362").trigger('SCEventShow');
$("#obj7334").trigger('SCEventShow');
$("#obj7336").trigger('SCEventShow');
$("#obj7397").trigger('SCEventShow');
$("#obj7252").trigger('SCEventShow');
$("#obj7395").trigger('SCEventShow');
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