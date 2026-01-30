pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serofero - Unit 6";
pubcoder.page.id = pubcoder.page.id || 4326;
pubcoder.page.title = pubcoder.page.title || "29";
pubcoder.page.number = pubcoder.page.number || 29;
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
var obj10699_onTap_activeActionGroupIndex = -1;
var obj10699_onTap_runningActionsCount = 0;
var obj10699_onTap_loopCount = 0;
var obj14034_onTap_activeActionGroupIndex = -1;
var obj14034_onTap_runningActionsCount = 0;
var obj14034_onTap_loopCount = 0;
var obj14053_SCEventReadAloudStarted_activeActionGroupIndex = -1;
var obj14053_SCEventReadAloudStarted_runningActionsCount = 0;
var obj14053_SCEventReadAloudStarted_loopCount = 0;
var obj14053_SCEventReadAloudStopped_activeActionGroupIndex = -1;
var obj14053_SCEventReadAloudStopped_runningActionsCount = 0;
var obj14053_SCEventReadAloudStopped_loopCount = 0;
var obj14024_onTap_activeActionGroupIndex = -1;
var obj14024_onTap_runningActionsCount = 0;
var obj14024_onTap_loopCount = 0;
var obj14049_onTap_activeActionGroupIndex = -1;
var obj14049_onTap_runningActionsCount = 0;
var obj14049_onTap_loopCount = 0;
var obj14046_onTap_activeActionGroupIndex = -1;
var obj14046_onTap_runningActionsCount = 0;
var obj14046_onTap_loopCount = 0;
var obj14031_onTap_activeActionGroupIndex = -1;
var obj14031_onTap_runningActionsCount = 0;
var obj14031_onTap_loopCount = 0;
var obj14015_onTap_activeActionGroupIndex = -1;
var obj14015_onTap_runningActionsCount = 0;
var obj14015_onTap_loopCount = 0;
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
		
obj10699_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10699_onTap_activeActionGroupIndex = -1;
		$("#obj10699").trigger("obj10699_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10699) {
				console.warn("de-queueing event obj10699." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10699").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10699_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_10703();
function runjs_10703() {
	window.obj10699_onTap_runningActionsCount = obj10699_onTap_runningActionsCount + 1;

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
		window.obj10699_onTap_runningActionsCount = window.obj10699_onTap_runningActionsCount - 1;
if (window.obj10699_onTap_runningActionsCount < 0) {
	window.obj10699_onTap_runningActionsCount = 0;
} else if (window.obj10699_onTap_runningActionsCount == 0) {
	obj10699_onTap_actionGroup1();
}
	}, 1);
}







};
obj10699_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10699_onTap_activeActionGroupIndex = -1;
		$("#obj10699").trigger("obj10699_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10699) {
				console.warn("de-queueing event obj10699." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10699").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10699_onTap_activeActionGroupIndex = 1;
	






















};
obj14034_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14034_onTap_activeActionGroupIndex = -1;
		$("#obj14034").trigger("obj14034_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14034) {
				console.warn("de-queueing event obj14034." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14034").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14034_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_14038();
function runjs_14038() {
	window.obj14034_onTap_runningActionsCount = obj14034_onTap_runningActionsCount + 1;

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
		window.obj14034_onTap_runningActionsCount = window.obj14034_onTap_runningActionsCount - 1;
if (window.obj14034_onTap_runningActionsCount < 0) {
	window.obj14034_onTap_runningActionsCount = 0;
} else if (window.obj14034_onTap_runningActionsCount == 0) {
	obj14034_onTap_actionGroup1();
}
	}, 1);
}







};
obj14034_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14034_onTap_activeActionGroupIndex = -1;
		$("#obj14034").trigger("obj14034_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14034) {
				console.warn("de-queueing event obj14034." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14034").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14034_onTap_activeActionGroupIndex = 1;
	






















};
obj14053_SCEventReadAloudStarted_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14053_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj14053").trigger("obj14053_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14053) {
				console.warn("de-queueing event obj14053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14053_SCEventReadAloudStarted_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj14053 
switchImage_14057();
function switchImage_14057() {
	window.obj14053_SCEventReadAloudStarted_runningActionsCount = obj14053_SCEventReadAloudStarted_runningActionsCount + 1;

	var targetObjectId = "#obj14053";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj14053_img";
	var fromImagePath = "../images/obj14053_image.png";
	var toImagePath = "../images/switch32_to.png";
	var switchHelperId = "switchHelper311"
	var switchHelperRef = "#switchHelper311"
	var switchId = "311";
	var toSwitchId = "311";
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
				window.obj14053_SCEventReadAloudStarted_runningActionsCount = window.obj14053_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj14053_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj14053_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj14053_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj14053_SCEventReadAloudStarted_actionGroup1();
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
obj14053_SCEventReadAloudStarted_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14053_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj14053").trigger("obj14053_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14053) {
				console.warn("de-queueing event obj14053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14053_SCEventReadAloudStarted_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_14058();
function runjs_14058() {
	window.obj14053_SCEventReadAloudStarted_runningActionsCount = obj14053_SCEventReadAloudStarted_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over Pressed');
}
	
	setTimeout(function() {
		window.obj14053_SCEventReadAloudStarted_runningActionsCount = window.obj14053_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj14053_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj14053_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj14053_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj14053_SCEventReadAloudStarted_actionGroup2();
}
	}, 1);
}







};
obj14053_SCEventReadAloudStarted_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14053_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj14053").trigger("obj14053_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14053) {
				console.warn("de-queueing event obj14053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14053_SCEventReadAloudStarted_activeActionGroupIndex = 2;
	






















};
obj14053_SCEventReadAloudStopped_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14053_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj14053").trigger("obj14053_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14053) {
				console.warn("de-queueing event obj14053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14053_SCEventReadAloudStopped_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj14053 
switchImage_14063();
function switchImage_14063() {
	window.obj14053_SCEventReadAloudStopped_runningActionsCount = obj14053_SCEventReadAloudStopped_runningActionsCount + 1;

	var targetObjectId = "#obj14053";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj14053_img";
	var fromImagePath = "../images/obj14053_image.png";
	var toImagePath = "../images/obj14053_image.png";
	var switchHelperId = "switchHelper312"
	var switchHelperRef = "#switchHelper312"
	var switchId = "312";
	var toSwitchId = "312";
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
				window.obj14053_SCEventReadAloudStopped_runningActionsCount = window.obj14053_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj14053_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj14053_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj14053_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj14053_SCEventReadAloudStopped_actionGroup1();
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
obj14053_SCEventReadAloudStopped_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14053_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj14053").trigger("obj14053_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14053) {
				console.warn("de-queueing event obj14053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14053_SCEventReadAloudStopped_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_14064();
function runjs_14064() {
	window.obj14053_SCEventReadAloudStopped_runningActionsCount = obj14053_SCEventReadAloudStopped_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over');
}
	
	setTimeout(function() {
		window.obj14053_SCEventReadAloudStopped_runningActionsCount = window.obj14053_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj14053_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj14053_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj14053_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj14053_SCEventReadAloudStopped_actionGroup2();
}
	}, 1);
}







};
obj14053_SCEventReadAloudStopped_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14053_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj14053").trigger("obj14053_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14053) {
				console.warn("de-queueing event obj14053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14053_SCEventReadAloudStopped_activeActionGroupIndex = 2;
	






















};
obj14024_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14024_onTap_activeActionGroupIndex = -1;
		$("#obj14024").trigger("obj14024_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14024) {
				console.warn("de-queueing event obj14024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14024_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_14026();
function runjs_14026() {
	window.obj14024_onTap_runningActionsCount = obj14024_onTap_runningActionsCount + 1;

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
		window.obj14024_onTap_runningActionsCount = window.obj14024_onTap_runningActionsCount - 1;
if (window.obj14024_onTap_runningActionsCount < 0) {
	window.obj14024_onTap_runningActionsCount = 0;
} else if (window.obj14024_onTap_runningActionsCount == 0) {
	obj14024_onTap_actionGroup1();
}
	}, 1);
}







};
obj14024_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14024_onTap_activeActionGroupIndex = -1;
		$("#obj14024").trigger("obj14024_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14024) {
				console.warn("de-queueing event obj14024." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14024").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14024_onTap_activeActionGroupIndex = 1;
	






















};
obj14049_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14049_onTap_activeActionGroupIndex = -1;
		$("#obj14049").trigger("obj14049_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14049) {
				console.warn("de-queueing event obj14049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14049_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj14049 
switchImage_14051();
function switchImage_14051() {
	window.obj14049_onTap_runningActionsCount = obj14049_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj14049";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj14049_img";
	var fromImagePath = "../images/obj14049_image.png";
	var toImagePath = "../images/switch34_to.png";
	var switchHelperId = "switchHelper313"
	var switchHelperRef = "#switchHelper313"
	var switchId = "313";
	var toSwitchId = "313";
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
				window.obj14049_onTap_runningActionsCount = window.obj14049_onTap_runningActionsCount - 1;
if (window.obj14049_onTap_runningActionsCount < 0) {
	window.obj14049_onTap_runningActionsCount = 0;
} else if (window.obj14049_onTap_runningActionsCount == 0) {
	obj14049_onTap_actionGroup1();
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
obj14049_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14049_onTap_activeActionGroupIndex = -1;
		$("#obj14049").trigger("obj14049_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14049) {
				console.warn("de-queueing event obj14049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14049_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_14052();
function runjs_14052() {
	window.obj14049_onTap_runningActionsCount = obj14049_onTap_runningActionsCount + 1;

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
		window.obj14049_onTap_runningActionsCount = window.obj14049_onTap_runningActionsCount - 1;
if (window.obj14049_onTap_runningActionsCount < 0) {
	window.obj14049_onTap_runningActionsCount = 0;
} else if (window.obj14049_onTap_runningActionsCount == 0) {
	obj14049_onTap_actionGroup2();
}
	}, 1);
}







};
obj14049_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14049_onTap_activeActionGroupIndex = -1;
		$("#obj14049").trigger("obj14049_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14049) {
				console.warn("de-queueing event obj14049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14049_onTap_activeActionGroupIndex = 2;
	






















};
obj14046_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14046_onTap_activeActionGroupIndex = -1;
		$("#obj14046").trigger("obj14046_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14046) {
				console.warn("de-queueing event obj14046." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14046").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14046_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_14048();
function goToPage_14048() {
	window.obj14046_onTap_runningActionsCount = obj14046_onTap_runningActionsCount + 1;
	$("#anchor314")[0].click();
	window.obj14046_onTap_runningActionsCount = window.obj14046_onTap_runningActionsCount - 1;
if (window.obj14046_onTap_runningActionsCount < 0) {
	window.obj14046_onTap_runningActionsCount = 0;
} else if (window.obj14046_onTap_runningActionsCount == 0) {
	obj14046_onTap_actionGroup1();
}
}





















};
obj14046_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14046_onTap_activeActionGroupIndex = -1;
		$("#obj14046").trigger("obj14046_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14046) {
				console.warn("de-queueing event obj14046." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14046").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14046_onTap_activeActionGroupIndex = 1;
	






















};
obj14031_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14031_onTap_activeActionGroupIndex = -1;
		$("#obj14031").trigger("obj14031_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14031) {
				console.warn("de-queueing event obj14031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14031_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_14033();
function goToPage_14033() {
	window.obj14031_onTap_runningActionsCount = obj14031_onTap_runningActionsCount + 1;
	$("#anchor315")[0].click();
	window.obj14031_onTap_runningActionsCount = window.obj14031_onTap_runningActionsCount - 1;
if (window.obj14031_onTap_runningActionsCount < 0) {
	window.obj14031_onTap_runningActionsCount = 0;
} else if (window.obj14031_onTap_runningActionsCount == 0) {
	obj14031_onTap_actionGroup1();
}
}





















};
obj14031_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14031_onTap_activeActionGroupIndex = -1;
		$("#obj14031").trigger("obj14031_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14031) {
				console.warn("de-queueing event obj14031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14031_onTap_activeActionGroupIndex = 1;
	






















};
obj14015_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj14015_onTap_activeActionGroupIndex = -1;
		$("#obj14015").trigger("obj14015_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14015) {
				console.warn("de-queueing event obj14015." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14015").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14015_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_14018();
function runjs_14018() {
	window.obj14015_onTap_runningActionsCount = obj14015_onTap_runningActionsCount + 1;

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
		window.obj14015_onTap_runningActionsCount = window.obj14015_onTap_runningActionsCount - 1;
if (window.obj14015_onTap_runningActionsCount < 0) {
	window.obj14015_onTap_runningActionsCount = 0;
} else if (window.obj14015_onTap_runningActionsCount == 0) {
	obj14015_onTap_actionGroup1();
}
	}, 1);
}







};
obj14015_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj14015_onTap_activeActionGroupIndex = -1;
		$("#obj14015").trigger("obj14015_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 14015) {
				console.warn("de-queueing event obj14015." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj14015").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj14015_onTap_activeActionGroupIndex = 1;
	






















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



























































































































/*
 *
 *   obj10699: Event Touch Down
 *
 */
$("#obj10699").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10699_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10699_onTap is still running");
	return;
}
var obj10699_onTap_runningActionsCount = 0;
var obj10699_onTap_loopCount = 0;
obj10699_onTap_actionGroup0();
});








































/*
 *
 *   obj14034: Event Touch Down
 *
 */
$("#obj14034").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj14034_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14034_onTap is still running");
	return;
}
var obj14034_onTap_runningActionsCount = 0;
var obj14034_onTap_loopCount = 0;
obj14034_onTap_actionGroup0();
});
























/*
 *
 *   obj14053: Event SCEventReadAloudStarted
 *
 */
$("#obj14053").bind("SCEventReadAloudStarted", function(event) {
	if (window.obj14053_SCEventReadAloudStarted_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14053_SCEventReadAloudStarted is still running");
	return;
}
var obj14053_SCEventReadAloudStarted_runningActionsCount = 0;
var obj14053_SCEventReadAloudStarted_loopCount = 0;
obj14053_SCEventReadAloudStarted_actionGroup0();
});
/*
 *
 *   obj14053: Event SCEventReadAloudStopped
 *
 */
$("#obj14053").bind("SCEventReadAloudStopped", function(event) {
	if (window.obj14053_SCEventReadAloudStopped_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14053_SCEventReadAloudStopped is still running");
	return;
}
var obj14053_SCEventReadAloudStopped_runningActionsCount = 0;
var obj14053_SCEventReadAloudStopped_loopCount = 0;
obj14053_SCEventReadAloudStopped_actionGroup0();
});





/*
 *
 *   obj14024: Event Touch Down
 *
 */
$("#obj14024").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj14024_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14024_onTap is still running");
	return;
}
var obj14024_onTap_runningActionsCount = 0;
var obj14024_onTap_loopCount = 0;
obj14024_onTap_actionGroup0();
});










/*
 *
 *   obj14049: Event Touch Down
 *
 */
$("#obj14049").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj14049_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14049_onTap is still running");
	return;
}
var obj14049_onTap_runningActionsCount = 0;
var obj14049_onTap_loopCount = 0;
obj14049_onTap_actionGroup0();
});










/*
 *
 *   obj14046: Event Touch Down
 *
 */
$("#obj14046").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj14046_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14046_onTap is still running");
	return;
}
var obj14046_onTap_runningActionsCount = 0;
var obj14046_onTap_loopCount = 0;
obj14046_onTap_actionGroup0();
});










/*
 *
 *   obj14031: Event Touch Down
 *
 */
$("#obj14031").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj14031_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14031_onTap is still running");
	return;
}
var obj14031_onTap_runningActionsCount = 0;
var obj14031_onTap_loopCount = 0;
obj14031_onTap_actionGroup0();
});










/*
 *
 *   obj14015: Event Touch Down
 *
 */
$("#obj14015").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj14015_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj14015_onTap is still running");
	return;
}
var obj14015_onTap_runningActionsCount = 0;
var obj14015_onTap_loopCount = 0;
obj14015_onTap_actionGroup0();
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
	
$("#obj4329").trigger('SCEventShow');
$("#obj10562").trigger('SCEventShow');
$("#obj4671").trigger('SCEventShow');
$("#obj4673").trigger('SCEventShow');
$("#obj10057").trigger('SCEventShow');
$("#obj4675").trigger('SCEventShow');
$("#obj10061").trigger('SCEventShow');
$("#obj10059").trigger('SCEventShow');
$("#obj4677").trigger('SCEventShow');
$("#obj4703").trigger('SCEventShow');
$("#obj10699").trigger('SCEventShow');
$("#obj4711").trigger('SCEventShow');
$("#obj14053").trigger('SCEventShow');
$("#obj14024").trigger('SCEventShow');
$("#obj14046").trigger('SCEventShow');
$("#obj14031").trigger('SCEventShow');
$("#obj14015").trigger('SCEventShow');
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