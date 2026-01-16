pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serofero : Unit2";
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
var obj3726_onTap_activeActionGroupIndex = -1;
var obj3726_onTap_runningActionsCount = 0;
var obj3726_onTap_loopCount = 0;
var obj3718_onTap_activeActionGroupIndex = -1;
var obj3718_onTap_runningActionsCount = 0;
var obj3718_onTap_loopCount = 0;
var obj3722_onTap_activeActionGroupIndex = -1;
var obj3722_onTap_runningActionsCount = 0;
var obj3722_onTap_loopCount = 0;
var obj3716_onTap_activeActionGroupIndex = -1;
var obj3716_onTap_runningActionsCount = 0;
var obj3716_onTap_loopCount = 0;
var obj3728_onTap_activeActionGroupIndex = -1;
var obj3728_onTap_runningActionsCount = 0;
var obj3728_onTap_loopCount = 0;
var obj3714_onTap_activeActionGroupIndex = -1;
var obj3714_onTap_runningActionsCount = 0;
var obj3714_onTap_loopCount = 0;
var obj3720_onTap_activeActionGroupIndex = -1;
var obj3720_onTap_runningActionsCount = 0;
var obj3720_onTap_loopCount = 0;
var obj3724_onTap_activeActionGroupIndex = -1;
var obj3724_onTap_runningActionsCount = 0;
var obj3724_onTap_loopCount = 0;
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
	var toImagePath = "../images/switch430_to.png";
	var switchHelperId = "switchHelper430"
	var switchHelperRef = "#switchHelper430"
	var switchId = "430";
	var toSwitchId = "430";
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
	var toImagePath = "../images/switch430_to.png";
	var switchHelperId = "switchHelper433"
	var switchHelperRef = "#switchHelper433"
	var switchId = "433";
	var toSwitchId = "433";
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
	var toImagePath = "../images/switch436_to.png";
	var switchHelperId = "switchHelper436"
	var switchHelperRef = "#switchHelper436"
	var switchId = "436";
	var toSwitchId = "436";
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
	var toImagePath = "../images/switch436_to.png";
	var switchHelperId = "switchHelper439"
	var switchHelperRef = "#switchHelper439"
	var switchId = "439";
	var toSwitchId = "439";
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
	var toImagePath = "../images/switch436_to.png";
	var switchHelperId = "switchHelper443"
	var switchHelperRef = "#switchHelper443"
	var switchId = "443";
	var toSwitchId = "443";
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
	var toImagePath = "../images/switch436_to.png";
	var switchHelperId = "switchHelper446"
	var switchHelperRef = "#switchHelper446"
	var switchId = "446";
	var toSwitchId = "446";
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
	var toImagePath = "../images/switch436_to.png";
	var switchHelperId = "switchHelper449"
	var switchHelperRef = "#switchHelper449"
	var switchId = "449";
	var toSwitchId = "449";
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
	var toImagePath = "../images/switch430_to.png";
	var switchHelperId = "switchHelper452"
	var switchHelperRef = "#switchHelper452"
	var switchId = "452";
	var toSwitchId = "452";
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
	var switchHelperId = "switchHelper455"
	var switchHelperRef = "#switchHelper455"
	var switchId = "455";
	var toSwitchId = "455";
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
	var switchHelperId = "switchHelper456"
	var switchHelperRef = "#switchHelper456"
	var switchId = "456";
	var toSwitchId = "456";
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
	var switchHelperId = "switchHelper457"
	var switchHelperRef = "#switchHelper457"
	var switchId = "457";
	var toSwitchId = "457";
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
	$("#anchor458")[0].click();
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
	$("#anchor459")[0].click();
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
 *   obj3726: Event Touch Down
 *
 */
$("#obj3726").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
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
 *   obj3718: Event Touch Down
 *
 */
$("#obj3718").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
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
 *   obj3722: Event Touch Down
 *
 */
$("#obj3722").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
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
 *   obj3716: Event Touch Down
 *
 */
$("#obj3716").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
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
 *   obj3728: Event Touch Down
 *
 */
$("#obj3728").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
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
 *   obj3714: Event Touch Down
 *
 */
$("#obj3714").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
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
 *   obj3720: Event Touch Down
 *
 */
$("#obj3720").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
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
 *   obj3724: Event Touch Down
 *
 */
$("#obj3724").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
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
	
$("#obj3131").trigger('SCEventShow');
$("#obj3382").trigger('SCEventShow');
$("#obj3726").trigger('SCEventShow');
$("#obj3718").trigger('SCEventShow');
$("#obj3722").trigger('SCEventShow');
$("#obj3716").trigger('SCEventShow');
$("#obj6932").trigger('SCEventShow');
$("#obj6953").trigger('SCEventShow');
$("#obj6956").trigger('SCEventShow');
$("#obj6929").trigger('SCEventShow');
$("#obj3728").trigger('SCEventShow');
$("#obj3714").trigger('SCEventShow');
$("#obj3720").trigger('SCEventShow');
$("#obj3724").trigger('SCEventShow');
$("#obj6962").trigger('SCEventShow');
$("#obj6959").trigger('SCEventShow');
$("#obj6968").trigger('SCEventShow');
$("#obj6965").trigger('SCEventShow');
$("#obj4080").trigger('SCEventShow');
$("#obj4188").trigger('SCEventShow');
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
    
});