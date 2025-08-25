pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Unit2";
pubcoder.page.id = pubcoder.page.id || 2945;
pubcoder.page.title = pubcoder.page.title || "49";
pubcoder.page.number = pubcoder.page.number || 49;
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
var obj3716_onTap_activeActionGroupIndex = -1;
var obj3716_onTap_runningActionsCount = 0;
var obj3716_onTap_loopCount = 0;
var obj3714_onTap_activeActionGroupIndex = -1;
var obj3714_onTap_runningActionsCount = 0;
var obj3714_onTap_loopCount = 0;
var obj3718_onTap_activeActionGroupIndex = -1;
var obj3718_onTap_runningActionsCount = 0;
var obj3718_onTap_loopCount = 0;
var obj3720_onTap_activeActionGroupIndex = -1;
var obj3720_onTap_runningActionsCount = 0;
var obj3720_onTap_loopCount = 0;
var obj3722_onTap_activeActionGroupIndex = -1;
var obj3722_onTap_runningActionsCount = 0;
var obj3722_onTap_loopCount = 0;
var obj3724_onTap_activeActionGroupIndex = -1;
var obj3724_onTap_runningActionsCount = 0;
var obj3724_onTap_loopCount = 0;
var obj3726_onTap_activeActionGroupIndex = -1;
var obj3726_onTap_runningActionsCount = 0;
var obj3726_onTap_loopCount = 0;
var obj3728_onTap_activeActionGroupIndex = -1;
var obj3728_onTap_runningActionsCount = 0;
var obj3728_onTap_loopCount = 0;
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
		
obj3716_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_onTap_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6929 
switchImage_7149();
function switchImage_7149() {
	window.obj3716_onTap_runningActionsCount = obj3716_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6929";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6929_img";
	var fromImagePath = "../images/obj3716_image.png";
	var toImagePath = "../images/switch473_to.png";
	var switchHelperId = "switchHelper473"
	var switchHelperRef = "#switchHelper473"
	var switchId = "473";
	var toSwitchId = "473";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7149_from";
	var toSoundObjectId = "#obj_audio_switchImage7149_to";
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
				window.obj3716_onTap_runningActionsCount = window.obj3716_onTap_runningActionsCount - 1;
if (window.obj3716_onTap_runningActionsCount < 0) {
	window.obj3716_onTap_runningActionsCount = 0;
} else if (window.obj3716_onTap_runningActionsCount == 0) {
	obj3716_onTap_actionGroup1();
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
obj3716_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3716_onTap_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_onTap_activeActionGroupIndex = 1;
	





















};
obj3714_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3714_onTap_activeActionGroupIndex = -1;
		$("#obj3714").trigger("obj3714_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3714) {
				console.warn("de-queueing event obj3714." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3714").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3714_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6962 
switchImage_7156();
function switchImage_7156() {
	window.obj3714_onTap_runningActionsCount = obj3714_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6962";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6962_img";
	var fromImagePath = "../images/obj3716_image.png";
	var toImagePath = "../images/switch473_to.png";
	var switchHelperId = "switchHelper476"
	var switchHelperRef = "#switchHelper476"
	var switchId = "476";
	var toSwitchId = "476";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7156_from";
	var toSoundObjectId = "#obj_audio_switchImage7156_to";
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
				window.obj3714_onTap_runningActionsCount = window.obj3714_onTap_runningActionsCount - 1;
if (window.obj3714_onTap_runningActionsCount < 0) {
	window.obj3714_onTap_runningActionsCount = 0;
} else if (window.obj3714_onTap_runningActionsCount == 0) {
	obj3714_onTap_actionGroup1();
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
obj3714_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3714_onTap_activeActionGroupIndex = -1;
		$("#obj3714").trigger("obj3714_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3714) {
				console.warn("de-queueing event obj3714." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3714").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3714_onTap_activeActionGroupIndex = 1;
	





















};
obj3718_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3718_onTap_activeActionGroupIndex = -1;
		$("#obj3718").trigger("obj3718_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3718) {
				console.warn("de-queueing event obj3718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3718_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6932 
switchImage_7150();
function switchImage_7150() {
	window.obj3718_onTap_runningActionsCount = obj3718_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6932";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6932_img";
	var fromImagePath = "../images/obj3718_image.png";
	var toImagePath = "../images/switch473_to.png";
	var switchHelperId = "switchHelper479"
	var switchHelperRef = "#switchHelper479"
	var switchId = "479";
	var toSwitchId = "479";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7150_from";
	var toSoundObjectId = "#obj_audio_switchImage7150_to";
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
				window.obj3718_onTap_runningActionsCount = window.obj3718_onTap_runningActionsCount - 1;
if (window.obj3718_onTap_runningActionsCount < 0) {
	window.obj3718_onTap_runningActionsCount = 0;
} else if (window.obj3718_onTap_runningActionsCount == 0) {
	obj3718_onTap_actionGroup1();
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
obj3718_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3718_onTap_activeActionGroupIndex = -1;
		$("#obj3718").trigger("obj3718_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3718) {
				console.warn("de-queueing event obj3718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3718_onTap_activeActionGroupIndex = 1;
	





















};
obj3720_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3720_onTap_activeActionGroupIndex = -1;
		$("#obj3720").trigger("obj3720_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3720) {
				console.warn("de-queueing event obj3720." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3720").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3720_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6965 
switchImage_7155();
function switchImage_7155() {
	window.obj3720_onTap_runningActionsCount = obj3720_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6965";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6965_img";
	var fromImagePath = "../images/obj3720_image.png";
	var toImagePath = "../images/switch473_to.png";
	var switchHelperId = "switchHelper482"
	var switchHelperRef = "#switchHelper482"
	var switchId = "482";
	var toSwitchId = "482";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7155_from";
	var toSoundObjectId = "#obj_audio_switchImage7155_to";
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
				window.obj3720_onTap_runningActionsCount = window.obj3720_onTap_runningActionsCount - 1;
if (window.obj3720_onTap_runningActionsCount < 0) {
	window.obj3720_onTap_runningActionsCount = 0;
} else if (window.obj3720_onTap_runningActionsCount == 0) {
	obj3720_onTap_actionGroup1();
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
obj3720_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3720_onTap_activeActionGroupIndex = -1;
		$("#obj3720").trigger("obj3720_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3720) {
				console.warn("de-queueing event obj3720." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3720").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3720_onTap_activeActionGroupIndex = 1;
	





















};
obj3722_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3722_onTap_activeActionGroupIndex = -1;
		$("#obj3722").trigger("obj3722_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3722) {
				console.warn("de-queueing event obj3722." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3722").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3722_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6953 
switchImage_7151();
function switchImage_7151() {
	window.obj3722_onTap_runningActionsCount = obj3722_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6953";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6953_img";
	var fromImagePath = "../images/obj3722_image.png";
	var toImagePath = "../images/switch473_to.png";
	var switchHelperId = "switchHelper485"
	var switchHelperRef = "#switchHelper485"
	var switchId = "485";
	var toSwitchId = "485";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7151_from";
	var toSoundObjectId = "#obj_audio_switchImage7151_to";
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
				window.obj3722_onTap_runningActionsCount = window.obj3722_onTap_runningActionsCount - 1;
if (window.obj3722_onTap_runningActionsCount < 0) {
	window.obj3722_onTap_runningActionsCount = 0;
} else if (window.obj3722_onTap_runningActionsCount == 0) {
	obj3722_onTap_actionGroup1();
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
obj3722_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3722_onTap_activeActionGroupIndex = -1;
		$("#obj3722").trigger("obj3722_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3722) {
				console.warn("de-queueing event obj3722." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3722").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3722_onTap_activeActionGroupIndex = 1;
	





















};
obj3724_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3724_onTap_activeActionGroupIndex = -1;
		$("#obj3724").trigger("obj3724_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3724) {
				console.warn("de-queueing event obj3724." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3724").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3724_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6959 
switchImage_7154();
function switchImage_7154() {
	window.obj3724_onTap_runningActionsCount = obj3724_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6959";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6959_img";
	var fromImagePath = "../images/obj3724_image.png";
	var toImagePath = "../images/switch473_to.png";
	var switchHelperId = "switchHelper488"
	var switchHelperRef = "#switchHelper488"
	var switchId = "488";
	var toSwitchId = "488";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7154_from";
	var toSoundObjectId = "#obj_audio_switchImage7154_to";
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
				window.obj3724_onTap_runningActionsCount = window.obj3724_onTap_runningActionsCount - 1;
if (window.obj3724_onTap_runningActionsCount < 0) {
	window.obj3724_onTap_runningActionsCount = 0;
} else if (window.obj3724_onTap_runningActionsCount == 0) {
	obj3724_onTap_actionGroup1();
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
obj3724_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3724_onTap_activeActionGroupIndex = -1;
		$("#obj3724").trigger("obj3724_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3724) {
				console.warn("de-queueing event obj3724." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3724").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3724_onTap_activeActionGroupIndex = 1;
	





















};
obj3726_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3726_onTap_activeActionGroupIndex = -1;
		$("#obj3726").trigger("obj3726_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3726) {
				console.warn("de-queueing event obj3726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3726_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6956 
switchImage_7152();
function switchImage_7152() {
	window.obj3726_onTap_runningActionsCount = obj3726_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6956";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6956_img";
	var fromImagePath = "../images/obj3726_image.png";
	var toImagePath = "../images/switch473_to.png";
	var switchHelperId = "switchHelper491"
	var switchHelperRef = "#switchHelper491"
	var switchId = "491";
	var toSwitchId = "491";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7152_from";
	var toSoundObjectId = "#obj_audio_switchImage7152_to";
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
				window.obj3726_onTap_runningActionsCount = window.obj3726_onTap_runningActionsCount - 1;
if (window.obj3726_onTap_runningActionsCount < 0) {
	window.obj3726_onTap_runningActionsCount = 0;
} else if (window.obj3726_onTap_runningActionsCount == 0) {
	obj3726_onTap_actionGroup1();
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
obj3726_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3726_onTap_activeActionGroupIndex = -1;
		$("#obj3726").trigger("obj3726_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3726) {
				console.warn("de-queueing event obj3726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3726_onTap_activeActionGroupIndex = 1;
	





















};
obj3728_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3728_onTap_activeActionGroupIndex = -1;
		$("#obj3728").trigger("obj3728_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3728) {
				console.warn("de-queueing event obj3728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3728_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj6968 
switchImage_7153();
function switchImage_7153() {
	window.obj3728_onTap_runningActionsCount = obj3728_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj6968";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj6968_img";
	var fromImagePath = "../images/obj3728_image.png";
	var toImagePath = "../images/switch473_to.png";
	var switchHelperId = "switchHelper494"
	var switchHelperRef = "#switchHelper494"
	var switchId = "494";
	var toSwitchId = "494";
	var fadeDuration = "0s";
	var fromSoundObjectId = "#obj_audio_switchImage7153_from";
	var toSoundObjectId = "#obj_audio_switchImage7153_to";
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
				window.obj3728_onTap_runningActionsCount = window.obj3728_onTap_runningActionsCount - 1;
if (window.obj3728_onTap_runningActionsCount < 0) {
	window.obj3728_onTap_runningActionsCount = 0;
} else if (window.obj3728_onTap_runningActionsCount == 0) {
	obj3728_onTap_actionGroup1();
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
obj3728_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3728_onTap_activeActionGroupIndex = -1;
		$("#obj3728").trigger("obj3728_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3728) {
				console.warn("de-queueing event obj3728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3728_onTap_activeActionGroupIndex = 1;
	





















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
	var switchHelperId = "switchHelper498"
	var switchHelperRef = "#switchHelper498"
	var switchId = "498";
	var toSwitchId = "498";
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
	var switchHelperId = "switchHelper499"
	var switchHelperRef = "#switchHelper499"
	var switchId = "499";
	var toSwitchId = "499";
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
	var switchHelperId = "switchHelper500"
	var switchHelperRef = "#switchHelper500"
	var switchId = "500";
	var toSwitchId = "500";
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
	var switchHelperId = "switchHelper501"
	var switchHelperRef = "#switchHelper501"
	var switchId = "501";
	var toSwitchId = "501";
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
	$("#anchor502")[0].click();
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
	$("#anchor503")[0].click();
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
 *   obj3716: Event Touch Down
 *
 */
$("#obj3716").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3716_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3716_onTap is still running");
	return;
}
var obj3716_onTap_runningActionsCount = 0;
var obj3716_onTap_loopCount = 0;
obj3716_onTap_actionGroup0();
});










/*
 *
 *   obj3714: Event Touch Down
 *
 */
$("#obj3714").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3714_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3714_onTap is still running");
	return;
}
var obj3714_onTap_runningActionsCount = 0;
var obj3714_onTap_loopCount = 0;
obj3714_onTap_actionGroup0();
});










/*
 *
 *   obj3718: Event Touch Down
 *
 */
$("#obj3718").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3718_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3718_onTap is still running");
	return;
}
var obj3718_onTap_runningActionsCount = 0;
var obj3718_onTap_loopCount = 0;
obj3718_onTap_actionGroup0();
});










/*
 *
 *   obj3720: Event Touch Down
 *
 */
$("#obj3720").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3720_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3720_onTap is still running");
	return;
}
var obj3720_onTap_runningActionsCount = 0;
var obj3720_onTap_loopCount = 0;
obj3720_onTap_actionGroup0();
});










/*
 *
 *   obj3722: Event Touch Down
 *
 */
$("#obj3722").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3722_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3722_onTap is still running");
	return;
}
var obj3722_onTap_runningActionsCount = 0;
var obj3722_onTap_loopCount = 0;
obj3722_onTap_actionGroup0();
});










/*
 *
 *   obj3724: Event Touch Down
 *
 */
$("#obj3724").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3724_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3724_onTap is still running");
	return;
}
var obj3724_onTap_runningActionsCount = 0;
var obj3724_onTap_loopCount = 0;
obj3724_onTap_actionGroup0();
});










/*
 *
 *   obj3726: Event Touch Down
 *
 */
$("#obj3726").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3726_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3726_onTap is still running");
	return;
}
var obj3726_onTap_runningActionsCount = 0;
var obj3726_onTap_loopCount = 0;
obj3726_onTap_actionGroup0();
});










/*
 *
 *   obj3728: Event Touch Down
 *
 */
$("#obj3728").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3728_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3728_onTap is still running");
	return;
}
var obj3728_onTap_runningActionsCount = 0;
var obj3728_onTap_loopCount = 0;
obj3728_onTap_actionGroup0();
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
	
$("#obj3131").trigger('SCEventShow');
$("#obj4080").trigger('SCEventShow');
$("#obj3382").trigger('SCEventShow');
$("#obj3716").trigger('SCEventShow');
$("#obj3714").trigger('SCEventShow');
$("#obj3718").trigger('SCEventShow');
$("#obj3720").trigger('SCEventShow');
$("#obj3722").trigger('SCEventShow');
$("#obj3724").trigger('SCEventShow');
$("#obj3726").trigger('SCEventShow');
$("#obj3728").trigger('SCEventShow');
$("#obj4188").trigger('SCEventShow');
$("#obj6929").trigger('SCEventShow');
$("#obj6932").trigger('SCEventShow');
$("#obj6953").trigger('SCEventShow');
$("#obj6956").trigger('SCEventShow');
$("#obj6959").trigger('SCEventShow');
$("#obj6962").trigger('SCEventShow');
$("#obj6965").trigger('SCEventShow');
$("#obj6968").trigger('SCEventShow');
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