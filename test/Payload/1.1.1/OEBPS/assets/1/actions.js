pubcoder.projectID = pubcoder.projectID || "0609BC80612445AD9857FB3F900D3D98";
pubcoder.project.id = pubcoder.project.id || "0609BC80612445AD9857FB3F900D3D98";
pubcoder.project.title = pubcoder.project.title || "Test Project";
pubcoder.page.id = pubcoder.page.id || 4;
pubcoder.page.title = pubcoder.page.title || "9";
pubcoder.page.number = pubcoder.page.number || 1;
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
var obj59_SCEventReadAloudStarted_activeActionGroupIndex = -1;
var obj59_SCEventReadAloudStarted_runningActionsCount = 0;
var obj59_SCEventReadAloudStarted_loopCount = 0;
var obj59_onTouchUp_activeActionGroupIndex = -1;
var obj59_onTouchUp_runningActionsCount = 0;
var obj59_onTouchUp_loopCount = 0;
var obj59_SCEventReadAloudStopped_activeActionGroupIndex = -1;
var obj59_SCEventReadAloudStopped_runningActionsCount = 0;
var obj59_SCEventReadAloudStopped_loopCount = 0;
var obj52_onTap_activeActionGroupIndex = -1;
var obj52_onTap_runningActionsCount = 0;
var obj52_onTap_loopCount = 0;
var obj48_onTap_activeActionGroupIndex = -1;
var obj48_onTap_runningActionsCount = 0;
var obj48_onTap_loopCount = 0;
var obj45_onTap_activeActionGroupIndex = -1;
var obj45_onTap_runningActionsCount = 0;
var obj45_onTap_loopCount = 0;
var obj42_onTap_activeActionGroupIndex = -1;
var obj42_onTap_runningActionsCount = 0;
var obj42_onTap_loopCount = 0;
var obj32_onTouchUp_activeActionGroupIndex = -1;
var obj32_onTouchUp_runningActionsCount = 0;
var obj32_onTouchUp_loopCount = 0;
var obj25_onTap_activeActionGroupIndex = -1;
var obj25_onTap_runningActionsCount = 0;
var obj25_onTap_loopCount = 0;
var obj21_onTap_activeActionGroupIndex = -1;
var obj21_onTap_runningActionsCount = 0;
var obj21_onTap_loopCount = 0;
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
		
obj59_SCEventReadAloudStarted_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj59_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj59").trigger("obj59_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 59) {
				console.warn("de-queueing event obj59." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj59").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj59_SCEventReadAloudStarted_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj59 
switchImage_63();
function switchImage_63() {
	window.obj59_SCEventReadAloudStarted_runningActionsCount = obj59_SCEventReadAloudStarted_runningActionsCount + 1;

	var targetObjectId = "#obj59";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj59_img";
	var fromImagePath = "../images/obj59_image.png";
	var toImagePath = "../images/switch15_to.png";
	var switchHelperId = "switchHelper15"
	var switchHelperRef = "#switchHelper15"
	var switchId = "15";
	var toSwitchId = "15";
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
				window.obj59_SCEventReadAloudStarted_runningActionsCount = window.obj59_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj59_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj59_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj59_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj59_SCEventReadAloudStarted_actionGroup1();
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
obj59_SCEventReadAloudStarted_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj59_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj59").trigger("obj59_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 59) {
				console.warn("de-queueing event obj59." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj59").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj59_SCEventReadAloudStarted_activeActionGroupIndex = 1;
	





















};
obj59_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj59_onTouchUp_activeActionGroupIndex = -1;
		$("#obj59").trigger("obj59_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 59) {
				console.warn("de-queueing event obj59." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj59").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj59_onTouchUp_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_66();
function runjs_66() {
	window.obj59_onTouchUp_runningActionsCount = obj59_onTouchUp_runningActionsCount + 1;

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
		window.obj59_onTouchUp_runningActionsCount = window.obj59_onTouchUp_runningActionsCount - 1;
if (window.obj59_onTouchUp_runningActionsCount < 0) {
	window.obj59_onTouchUp_runningActionsCount = 0;
} else if (window.obj59_onTouchUp_runningActionsCount == 0) {
	obj59_onTouchUp_actionGroup1();
}
	}, 1);
}







};
obj59_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj59_onTouchUp_activeActionGroupIndex = -1;
		$("#obj59").trigger("obj59_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 59) {
				console.warn("de-queueing event obj59." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj59").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj59_onTouchUp_activeActionGroupIndex = 1;
	





















};
obj59_SCEventReadAloudStopped_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj59_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj59").trigger("obj59_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 59) {
				console.warn("de-queueing event obj59." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj59").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj59_SCEventReadAloudStopped_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj59 
switchImage_68();
function switchImage_68() {
	window.obj59_SCEventReadAloudStopped_runningActionsCount = obj59_SCEventReadAloudStopped_runningActionsCount + 1;

	var targetObjectId = "#obj59";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj59_img";
	var fromImagePath = "../images/obj59_image.png";
	var toImagePath = "../images/obj59_image.png";
	var switchHelperId = "switchHelper16"
	var switchHelperRef = "#switchHelper16"
	var switchId = "16";
	var toSwitchId = "16";
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
				window.obj59_SCEventReadAloudStopped_runningActionsCount = window.obj59_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj59_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj59_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj59_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj59_SCEventReadAloudStopped_actionGroup1();
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
obj59_SCEventReadAloudStopped_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj59_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj59").trigger("obj59_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 59) {
				console.warn("de-queueing event obj59." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj59").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj59_SCEventReadAloudStopped_activeActionGroupIndex = 1;
	





















};
obj52_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52_onTap_activeActionGroupIndex = -1;
		$("#obj52").trigger("obj52_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52) {
				console.warn("de-queueing event obj52." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_54();
function runjs_54() {
	window.obj52_onTap_runningActionsCount = obj52_onTap_runningActionsCount + 1;

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
		window.obj52_onTap_runningActionsCount = window.obj52_onTap_runningActionsCount - 1;
if (window.obj52_onTap_runningActionsCount < 0) {
	window.obj52_onTap_runningActionsCount = 0;
} else if (window.obj52_onTap_runningActionsCount == 0) {
	obj52_onTap_actionGroup1();
}
	}, 1);
}







};
obj52_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52_onTap_activeActionGroupIndex = -1;
		$("#obj52").trigger("obj52_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52) {
				console.warn("de-queueing event obj52." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52_onTap_activeActionGroupIndex = 1;
	



//	action: switchImage 
//	target: obj52 
switchImage_55();
function switchImage_55() {
	window.obj52_onTap_runningActionsCount = obj52_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj52";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj52_img";
	var fromImagePath = "../images/obj52_image.png";
	var toImagePath = "../images/switch17_to.png";
	var switchHelperId = "switchHelper17"
	var switchHelperRef = "#switchHelper17"
	var switchId = "17";
	var toSwitchId = "17";
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
				window.obj52_onTap_runningActionsCount = window.obj52_onTap_runningActionsCount - 1;
if (window.obj52_onTap_runningActionsCount < 0) {
	window.obj52_onTap_runningActionsCount = 0;
} else if (window.obj52_onTap_runningActionsCount == 0) {
	obj52_onTap_actionGroup2();
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
obj52_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52_onTap_activeActionGroupIndex = -1;
		$("#obj52").trigger("obj52_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52) {
				console.warn("de-queueing event obj52." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52_onTap_activeActionGroupIndex = 2;
	





















};
obj48_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48_onTap_activeActionGroupIndex = -1;
		$("#obj48").trigger("obj48_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48) {
				console.warn("de-queueing event obj48." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj48 
switchImage_50();
function switchImage_50() {
	window.obj48_onTap_runningActionsCount = obj48_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj48";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj48_img";
	var fromImagePath = "../images/obj48_image.png";
	var toImagePath = "../images/switch18_to.png";
	var switchHelperId = "switchHelper18"
	var switchHelperRef = "#switchHelper18"
	var switchId = "18";
	var toSwitchId = "18";
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
				window.obj48_onTap_runningActionsCount = window.obj48_onTap_runningActionsCount - 1;
if (window.obj48_onTap_runningActionsCount < 0) {
	window.obj48_onTap_runningActionsCount = 0;
} else if (window.obj48_onTap_runningActionsCount == 0) {
	obj48_onTap_actionGroup1();
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
obj48_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48_onTap_activeActionGroupIndex = -1;
		$("#obj48").trigger("obj48_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48) {
				console.warn("de-queueing event obj48." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_51();
function runjs_51() {
	window.obj48_onTap_runningActionsCount = obj48_onTap_runningActionsCount + 1;

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
		window.obj48_onTap_runningActionsCount = window.obj48_onTap_runningActionsCount - 1;
if (window.obj48_onTap_runningActionsCount < 0) {
	window.obj48_onTap_runningActionsCount = 0;
} else if (window.obj48_onTap_runningActionsCount == 0) {
	obj48_onTap_actionGroup2();
}
	}, 1);
}







};
obj48_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48_onTap_activeActionGroupIndex = -1;
		$("#obj48").trigger("obj48_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48) {
				console.warn("de-queueing event obj48." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48_onTap_activeActionGroupIndex = 2;
	





















};
obj45_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45_onTap_activeActionGroupIndex = -1;
		$("#obj45").trigger("obj45_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45) {
				console.warn("de-queueing event obj45." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_47();
function goToPage_47() {
	window.obj45_onTap_runningActionsCount = obj45_onTap_runningActionsCount + 1;
	$("#anchor19")[0].click();
	window.obj45_onTap_runningActionsCount = window.obj45_onTap_runningActionsCount - 1;
if (window.obj45_onTap_runningActionsCount < 0) {
	window.obj45_onTap_runningActionsCount = 0;
} else if (window.obj45_onTap_runningActionsCount == 0) {
	obj45_onTap_actionGroup1();
}
}





















};
obj45_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45_onTap_activeActionGroupIndex = -1;
		$("#obj45").trigger("obj45_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45) {
				console.warn("de-queueing event obj45." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45_onTap_activeActionGroupIndex = 1;
	





















};
obj42_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42_onTap_activeActionGroupIndex = -1;
		$("#obj42").trigger("obj42_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42) {
				console.warn("de-queueing event obj42." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_44();
function goToPage_44() {
	window.obj42_onTap_runningActionsCount = obj42_onTap_runningActionsCount + 1;
	$("#anchor20")[0].click();
	window.obj42_onTap_runningActionsCount = window.obj42_onTap_runningActionsCount - 1;
if (window.obj42_onTap_runningActionsCount < 0) {
	window.obj42_onTap_runningActionsCount = 0;
} else if (window.obj42_onTap_runningActionsCount == 0) {
	obj42_onTap_actionGroup1();
}
}





















};
obj42_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42_onTap_activeActionGroupIndex = -1;
		$("#obj42").trigger("obj42_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42) {
				console.warn("de-queueing event obj42." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42_onTap_activeActionGroupIndex = 1;
	





















};
obj32_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj32_onTouchUp_activeActionGroupIndex = -1;
		$("#obj32").trigger("obj32_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 32) {
				console.warn("de-queueing event obj32." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj32").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj32_onTouchUp_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38();
function runjs_38() {
	window.obj32_onTouchUp_runningActionsCount = obj32_onTouchUp_runningActionsCount + 1;

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
		window.obj32_onTouchUp_runningActionsCount = window.obj32_onTouchUp_runningActionsCount - 1;
if (window.obj32_onTouchUp_runningActionsCount < 0) {
	window.obj32_onTouchUp_runningActionsCount = 0;
} else if (window.obj32_onTouchUp_runningActionsCount == 0) {
	obj32_onTouchUp_actionGroup1();
}
	}, 1);
}







};
obj32_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj32_onTouchUp_activeActionGroupIndex = -1;
		$("#obj32").trigger("obj32_onTouchUp_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 32) {
				console.warn("de-queueing event obj32." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj32").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj32_onTouchUp_activeActionGroupIndex = 1;
	





















};
obj25_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj25_onTap_activeActionGroupIndex = -1;
		$("#obj25").trigger("obj25_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 25) {
				console.warn("de-queueing event obj25." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj25").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj25_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_27();
function runjs_27() {
	window.obj25_onTap_runningActionsCount = obj25_onTap_runningActionsCount + 1;

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
		window.obj25_onTap_runningActionsCount = window.obj25_onTap_runningActionsCount - 1;
if (window.obj25_onTap_runningActionsCount < 0) {
	window.obj25_onTap_runningActionsCount = 0;
} else if (window.obj25_onTap_runningActionsCount == 0) {
	obj25_onTap_actionGroup1();
}
	}, 1);
}







};
obj25_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj25_onTap_activeActionGroupIndex = -1;
		$("#obj25").trigger("obj25_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 25) {
				console.warn("de-queueing event obj25." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj25").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj25_onTap_activeActionGroupIndex = 1;
	



//	action: switchImage 
//	target: obj25 
switchImage_28();
function switchImage_28() {
	window.obj25_onTap_runningActionsCount = obj25_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj25";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj25_img";
	var fromImagePath = "../images/obj25_image.png";
	var toImagePath = "../images/switch17_to.png";
	var switchHelperId = "switchHelper21"
	var switchHelperRef = "#switchHelper21"
	var switchId = "21";
	var toSwitchId = "21";
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
				window.obj25_onTap_runningActionsCount = window.obj25_onTap_runningActionsCount - 1;
if (window.obj25_onTap_runningActionsCount < 0) {
	window.obj25_onTap_runningActionsCount = 0;
} else if (window.obj25_onTap_runningActionsCount == 0) {
	obj25_onTap_actionGroup2();
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
obj25_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj25_onTap_activeActionGroupIndex = -1;
		$("#obj25").trigger("obj25_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 25) {
				console.warn("de-queueing event obj25." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj25").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj25_onTap_activeActionGroupIndex = 2;
	





















};
obj21_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21_onTap_activeActionGroupIndex = -1;
		$("#obj21").trigger("obj21_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21) {
				console.warn("de-queueing event obj21." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj21 
switchImage_23();
function switchImage_23() {
	window.obj21_onTap_runningActionsCount = obj21_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj21";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj21_img";
	var fromImagePath = "../images/obj21_image.png";
	var toImagePath = "../images/switch18_to.png";
	var switchHelperId = "switchHelper22"
	var switchHelperRef = "#switchHelper22"
	var switchId = "22";
	var toSwitchId = "22";
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
				window.obj21_onTap_runningActionsCount = window.obj21_onTap_runningActionsCount - 1;
if (window.obj21_onTap_runningActionsCount < 0) {
	window.obj21_onTap_runningActionsCount = 0;
} else if (window.obj21_onTap_runningActionsCount == 0) {
	obj21_onTap_actionGroup1();
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
obj21_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21_onTap_activeActionGroupIndex = -1;
		$("#obj21").trigger("obj21_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21) {
				console.warn("de-queueing event obj21." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_24();
function runjs_24() {
	window.obj21_onTap_runningActionsCount = obj21_onTap_runningActionsCount + 1;

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
		window.obj21_onTap_runningActionsCount = window.obj21_onTap_runningActionsCount - 1;
if (window.obj21_onTap_runningActionsCount < 0) {
	window.obj21_onTap_runningActionsCount = 0;
} else if (window.obj21_onTap_runningActionsCount == 0) {
	obj21_onTap_actionGroup2();
}
	}, 1);
}







};
obj21_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21_onTap_activeActionGroupIndex = -1;
		$("#obj21").trigger("obj21_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21) {
				console.warn("de-queueing event obj21." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21_onTap_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj59: Event Touch Up
 *
 */
$("#obj59").bind("touchdown touchmove", function(event) {
	event.preventDefault(); // prevent readers from starting a page swipe on this element
})
$("#obj59").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj59").unbind("obj59_onTouchDown_ended", startActionList);
	    if (window.obj59_onTouchUp_activeActionGroupIndex != -1) {
	console.warn("action list window.obj59_onTouchUp is still running");
	return;
}
var obj59_onTouchUp_runningActionsCount = 0;
var obj59_onTouchUp_loopCount = 0;
obj59_onTouchUp_actionGroup0();
	};
	if ((window['obj59_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj59_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj59").bind("obj59_onTouchDown_ended", startActionList);
	}
});




/*
 *
 *   obj59: Event SCEventReadAloudStarted
 *
 */
$("#obj59").bind("SCEventReadAloudStarted", function(event) {
	if (window.obj59_SCEventReadAloudStarted_activeActionGroupIndex != -1) {
	console.warn("action list window.obj59_SCEventReadAloudStarted is still running");
	return;
}
var obj59_SCEventReadAloudStarted_runningActionsCount = 0;
var obj59_SCEventReadAloudStarted_loopCount = 0;
obj59_SCEventReadAloudStarted_actionGroup0();
});
/*
 *
 *   obj59: Event SCEventReadAloudStopped
 *
 */
$("#obj59").bind("SCEventReadAloudStopped", function(event) {
	if (window.obj59_SCEventReadAloudStopped_activeActionGroupIndex != -1) {
	console.warn("action list window.obj59_SCEventReadAloudStopped is still running");
	return;
}
var obj59_SCEventReadAloudStopped_runningActionsCount = 0;
var obj59_SCEventReadAloudStopped_loopCount = 0;
obj59_SCEventReadAloudStopped_actionGroup0();
});





/*
 *
 *   obj52: Event Touch Down
 *
 */
$("#obj52").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj52_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52_onTap is still running");
	return;
}
var obj52_onTap_runningActionsCount = 0;
var obj52_onTap_loopCount = 0;
obj52_onTap_actionGroup0();
});










/*
 *
 *   obj48: Event Touch Down
 *
 */
$("#obj48").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj48_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48_onTap is still running");
	return;
}
var obj48_onTap_runningActionsCount = 0;
var obj48_onTap_loopCount = 0;
obj48_onTap_actionGroup0();
});










/*
 *
 *   obj45: Event Touch Down
 *
 */
$("#obj45").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj45_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45_onTap is still running");
	return;
}
var obj45_onTap_runningActionsCount = 0;
var obj45_onTap_loopCount = 0;
obj45_onTap_actionGroup0();
});










/*
 *
 *   obj42: Event Touch Down
 *
 */
$("#obj42").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj42_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42_onTap is still running");
	return;
}
var obj42_onTap_runningActionsCount = 0;
var obj42_onTap_loopCount = 0;
obj42_onTap_actionGroup0();
});




















/*
 *
 *   obj32: Event Touch Up
 *
 */
$("#obj32").bind("touchdown touchmove", function(event) {
	event.preventDefault(); // prevent readers from starting a page swipe on this element
})
$("#obj32").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj32").unbind("obj32_onTouchDown_ended", startActionList);
	    if (window.obj32_onTouchUp_activeActionGroupIndex != -1) {
	console.warn("action list window.obj32_onTouchUp is still running");
	return;
}
var obj32_onTouchUp_runningActionsCount = 0;
var obj32_onTouchUp_loopCount = 0;
obj32_onTouchUp_actionGroup0();
	};
	if ((window['obj32_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj32_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj32").bind("obj32_onTouchDown_ended", startActionList);
	}
});









/*
 *
 *   obj25: Event Touch Down
 *
 */
$("#obj25").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj25_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj25_onTap is still running");
	return;
}
var obj25_onTap_runningActionsCount = 0;
var obj25_onTap_loopCount = 0;
obj25_onTap_actionGroup0();
});










/*
 *
 *   obj21: Event Touch Down
 *
 */
$("#obj21").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj21_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21_onTap is still running");
	return;
}
var obj21_onTap_runningActionsCount = 0;
var obj21_onTap_loopCount = 0;
obj21_onTap_actionGroup0();
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
	
$("#obj7").trigger('SCEventShow');
$("#obj9").trigger('SCEventShow');
$("#obj17").trigger('SCEventShow');
$("#obj69").trigger('SCEventShow');
$("#obj59").trigger('SCEventShow');
$("#obj52").trigger('SCEventShow');
$("#obj48").trigger('SCEventShow');
$("#obj45").trigger('SCEventShow');
$("#obj42").trigger('SCEventShow');
$("#obj32").trigger('SCEventShow');
$("#obj25").trigger('SCEventShow');
	
});