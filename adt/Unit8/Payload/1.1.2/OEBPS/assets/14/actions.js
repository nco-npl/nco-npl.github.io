pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serofero - Unit 8";
pubcoder.page.id = pubcoder.page.id || 3809;
pubcoder.page.title = pubcoder.page.title || "14";
pubcoder.page.number = pubcoder.page.number || 14;
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
var obj12411_onTap_activeActionGroupIndex = -1;
var obj12411_onTap_runningActionsCount = 0;
var obj12411_onTap_loopCount = 0;
var obj12430_SCEventReadAloudStarted_activeActionGroupIndex = -1;
var obj12430_SCEventReadAloudStarted_runningActionsCount = 0;
var obj12430_SCEventReadAloudStarted_loopCount = 0;
var obj12430_SCEventReadAloudStopped_activeActionGroupIndex = -1;
var obj12430_SCEventReadAloudStopped_runningActionsCount = 0;
var obj12430_SCEventReadAloudStopped_loopCount = 0;
var obj12401_onTap_activeActionGroupIndex = -1;
var obj12401_onTap_runningActionsCount = 0;
var obj12401_onTap_loopCount = 0;
var obj12426_onTap_activeActionGroupIndex = -1;
var obj12426_onTap_runningActionsCount = 0;
var obj12426_onTap_loopCount = 0;
var obj12423_onTap_activeActionGroupIndex = -1;
var obj12423_onTap_runningActionsCount = 0;
var obj12423_onTap_loopCount = 0;
var obj12408_onTap_activeActionGroupIndex = -1;
var obj12408_onTap_runningActionsCount = 0;
var obj12408_onTap_loopCount = 0;
var obj12392_onTap_activeActionGroupIndex = -1;
var obj12392_onTap_runningActionsCount = 0;
var obj12392_onTap_loopCount = 0;
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
		
obj12411_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12411_onTap_activeActionGroupIndex = -1;
		$("#obj12411").trigger("obj12411_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12411) {
				console.warn("de-queueing event obj12411." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12411").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12411_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_12415();
function runjs_12415() {
	window.obj12411_onTap_runningActionsCount = obj12411_onTap_runningActionsCount + 1;

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
		window.obj12411_onTap_runningActionsCount = window.obj12411_onTap_runningActionsCount - 1;
if (window.obj12411_onTap_runningActionsCount < 0) {
	window.obj12411_onTap_runningActionsCount = 0;
} else if (window.obj12411_onTap_runningActionsCount == 0) {
	obj12411_onTap_actionGroup1();
}
	}, 1);
}







};
obj12411_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12411_onTap_activeActionGroupIndex = -1;
		$("#obj12411").trigger("obj12411_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12411) {
				console.warn("de-queueing event obj12411." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12411").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12411_onTap_activeActionGroupIndex = 1;
	






















};
obj12430_SCEventReadAloudStarted_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12430_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj12430").trigger("obj12430_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12430) {
				console.warn("de-queueing event obj12430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12430_SCEventReadAloudStarted_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj12430 
switchImage_12434();
function switchImage_12434() {
	window.obj12430_SCEventReadAloudStarted_runningActionsCount = obj12430_SCEventReadAloudStarted_runningActionsCount + 1;

	var targetObjectId = "#obj12430";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj12430_img";
	var fromImagePath = "../images/obj12430_image.png";
	var toImagePath = "../images/switch24_to.png";
	var switchHelperId = "switchHelper141"
	var switchHelperRef = "#switchHelper141"
	var switchId = "141";
	var toSwitchId = "141";
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
				window.obj12430_SCEventReadAloudStarted_runningActionsCount = window.obj12430_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj12430_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj12430_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj12430_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj12430_SCEventReadAloudStarted_actionGroup1();
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
obj12430_SCEventReadAloudStarted_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12430_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj12430").trigger("obj12430_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12430) {
				console.warn("de-queueing event obj12430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12430_SCEventReadAloudStarted_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_12435();
function runjs_12435() {
	window.obj12430_SCEventReadAloudStarted_runningActionsCount = obj12430_SCEventReadAloudStarted_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over Pressed');
}
	
	setTimeout(function() {
		window.obj12430_SCEventReadAloudStarted_runningActionsCount = window.obj12430_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj12430_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj12430_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj12430_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj12430_SCEventReadAloudStarted_actionGroup2();
}
	}, 1);
}







};
obj12430_SCEventReadAloudStarted_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12430_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj12430").trigger("obj12430_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12430) {
				console.warn("de-queueing event obj12430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12430_SCEventReadAloudStarted_activeActionGroupIndex = 2;
	






















};
obj12430_SCEventReadAloudStopped_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12430_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj12430").trigger("obj12430_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12430) {
				console.warn("de-queueing event obj12430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12430_SCEventReadAloudStopped_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj12430 
switchImage_12440();
function switchImage_12440() {
	window.obj12430_SCEventReadAloudStopped_runningActionsCount = obj12430_SCEventReadAloudStopped_runningActionsCount + 1;

	var targetObjectId = "#obj12430";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj12430_img";
	var fromImagePath = "../images/obj12430_image.png";
	var toImagePath = "../images/obj12430_image.png";
	var switchHelperId = "switchHelper142"
	var switchHelperRef = "#switchHelper142"
	var switchId = "142";
	var toSwitchId = "142";
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
				window.obj12430_SCEventReadAloudStopped_runningActionsCount = window.obj12430_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj12430_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj12430_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj12430_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj12430_SCEventReadAloudStopped_actionGroup1();
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
obj12430_SCEventReadAloudStopped_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12430_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj12430").trigger("obj12430_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12430) {
				console.warn("de-queueing event obj12430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12430_SCEventReadAloudStopped_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_12441();
function runjs_12441() {
	window.obj12430_SCEventReadAloudStopped_runningActionsCount = obj12430_SCEventReadAloudStopped_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over');
}
	
	setTimeout(function() {
		window.obj12430_SCEventReadAloudStopped_runningActionsCount = window.obj12430_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj12430_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj12430_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj12430_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj12430_SCEventReadAloudStopped_actionGroup2();
}
	}, 1);
}







};
obj12430_SCEventReadAloudStopped_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12430_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj12430").trigger("obj12430_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12430) {
				console.warn("de-queueing event obj12430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12430_SCEventReadAloudStopped_activeActionGroupIndex = 2;
	






















};
obj12401_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12401_onTap_activeActionGroupIndex = -1;
		$("#obj12401").trigger("obj12401_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12401) {
				console.warn("de-queueing event obj12401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12401_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_12403();
function runjs_12403() {
	window.obj12401_onTap_runningActionsCount = obj12401_onTap_runningActionsCount + 1;

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
		window.obj12401_onTap_runningActionsCount = window.obj12401_onTap_runningActionsCount - 1;
if (window.obj12401_onTap_runningActionsCount < 0) {
	window.obj12401_onTap_runningActionsCount = 0;
} else if (window.obj12401_onTap_runningActionsCount == 0) {
	obj12401_onTap_actionGroup1();
}
	}, 1);
}







};
obj12401_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12401_onTap_activeActionGroupIndex = -1;
		$("#obj12401").trigger("obj12401_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12401) {
				console.warn("de-queueing event obj12401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12401_onTap_activeActionGroupIndex = 1;
	






















};
obj12426_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12426_onTap_activeActionGroupIndex = -1;
		$("#obj12426").trigger("obj12426_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12426) {
				console.warn("de-queueing event obj12426." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12426").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12426_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj12426 
switchImage_12428();
function switchImage_12428() {
	window.obj12426_onTap_runningActionsCount = obj12426_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj12426";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj12426_img";
	var fromImagePath = "../images/obj12426_image.png";
	var toImagePath = "../images/switch26_to.png";
	var switchHelperId = "switchHelper143"
	var switchHelperRef = "#switchHelper143"
	var switchId = "143";
	var toSwitchId = "143";
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
				window.obj12426_onTap_runningActionsCount = window.obj12426_onTap_runningActionsCount - 1;
if (window.obj12426_onTap_runningActionsCount < 0) {
	window.obj12426_onTap_runningActionsCount = 0;
} else if (window.obj12426_onTap_runningActionsCount == 0) {
	obj12426_onTap_actionGroup1();
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
obj12426_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12426_onTap_activeActionGroupIndex = -1;
		$("#obj12426").trigger("obj12426_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12426) {
				console.warn("de-queueing event obj12426." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12426").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12426_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_12429();
function runjs_12429() {
	window.obj12426_onTap_runningActionsCount = obj12426_onTap_runningActionsCount + 1;

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
		window.obj12426_onTap_runningActionsCount = window.obj12426_onTap_runningActionsCount - 1;
if (window.obj12426_onTap_runningActionsCount < 0) {
	window.obj12426_onTap_runningActionsCount = 0;
} else if (window.obj12426_onTap_runningActionsCount == 0) {
	obj12426_onTap_actionGroup2();
}
	}, 1);
}







};
obj12426_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12426_onTap_activeActionGroupIndex = -1;
		$("#obj12426").trigger("obj12426_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12426) {
				console.warn("de-queueing event obj12426." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12426").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12426_onTap_activeActionGroupIndex = 2;
	






















};
obj12423_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12423_onTap_activeActionGroupIndex = -1;
		$("#obj12423").trigger("obj12423_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12423) {
				console.warn("de-queueing event obj12423." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12423").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12423_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_12425();
function goToPage_12425() {
	window.obj12423_onTap_runningActionsCount = obj12423_onTap_runningActionsCount + 1;
	$("#anchor144")[0].click();
	window.obj12423_onTap_runningActionsCount = window.obj12423_onTap_runningActionsCount - 1;
if (window.obj12423_onTap_runningActionsCount < 0) {
	window.obj12423_onTap_runningActionsCount = 0;
} else if (window.obj12423_onTap_runningActionsCount == 0) {
	obj12423_onTap_actionGroup1();
}
}





















};
obj12423_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12423_onTap_activeActionGroupIndex = -1;
		$("#obj12423").trigger("obj12423_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12423) {
				console.warn("de-queueing event obj12423." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12423").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12423_onTap_activeActionGroupIndex = 1;
	






















};
obj12408_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12408_onTap_activeActionGroupIndex = -1;
		$("#obj12408").trigger("obj12408_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12408) {
				console.warn("de-queueing event obj12408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12408_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_12410();
function goToPage_12410() {
	window.obj12408_onTap_runningActionsCount = obj12408_onTap_runningActionsCount + 1;
	$("#anchor145")[0].click();
	window.obj12408_onTap_runningActionsCount = window.obj12408_onTap_runningActionsCount - 1;
if (window.obj12408_onTap_runningActionsCount < 0) {
	window.obj12408_onTap_runningActionsCount = 0;
} else if (window.obj12408_onTap_runningActionsCount == 0) {
	obj12408_onTap_actionGroup1();
}
}





















};
obj12408_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12408_onTap_activeActionGroupIndex = -1;
		$("#obj12408").trigger("obj12408_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12408) {
				console.warn("de-queueing event obj12408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12408_onTap_activeActionGroupIndex = 1;
	






















};
obj12392_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12392_onTap_activeActionGroupIndex = -1;
		$("#obj12392").trigger("obj12392_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12392) {
				console.warn("de-queueing event obj12392." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12392").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12392_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_12395();
function runjs_12395() {
	window.obj12392_onTap_runningActionsCount = obj12392_onTap_runningActionsCount + 1;

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
		window.obj12392_onTap_runningActionsCount = window.obj12392_onTap_runningActionsCount - 1;
if (window.obj12392_onTap_runningActionsCount < 0) {
	window.obj12392_onTap_runningActionsCount = 0;
} else if (window.obj12392_onTap_runningActionsCount == 0) {
	obj12392_onTap_actionGroup1();
}
	}, 1);
}







};
obj12392_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12392_onTap_activeActionGroupIndex = -1;
		$("#obj12392").trigger("obj12392_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12392) {
				console.warn("de-queueing event obj12392." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12392").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12392_onTap_activeActionGroupIndex = 1;
	






















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		







































































































/*
 *
 *   obj12411: Event Touch Down
 *
 */
$("#obj12411").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj12411_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12411_onTap is still running");
	return;
}
var obj12411_onTap_runningActionsCount = 0;
var obj12411_onTap_loopCount = 0;
obj12411_onTap_actionGroup0();
});
























/*
 *
 *   obj12430: Event SCEventReadAloudStarted
 *
 */
$("#obj12430").bind("SCEventReadAloudStarted", function(event) {
	if (window.obj12430_SCEventReadAloudStarted_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12430_SCEventReadAloudStarted is still running");
	return;
}
var obj12430_SCEventReadAloudStarted_runningActionsCount = 0;
var obj12430_SCEventReadAloudStarted_loopCount = 0;
obj12430_SCEventReadAloudStarted_actionGroup0();
});
/*
 *
 *   obj12430: Event SCEventReadAloudStopped
 *
 */
$("#obj12430").bind("SCEventReadAloudStopped", function(event) {
	if (window.obj12430_SCEventReadAloudStopped_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12430_SCEventReadAloudStopped is still running");
	return;
}
var obj12430_SCEventReadAloudStopped_runningActionsCount = 0;
var obj12430_SCEventReadAloudStopped_loopCount = 0;
obj12430_SCEventReadAloudStopped_actionGroup0();
});





/*
 *
 *   obj12401: Event Touch Down
 *
 */
$("#obj12401").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj12401_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12401_onTap is still running");
	return;
}
var obj12401_onTap_runningActionsCount = 0;
var obj12401_onTap_loopCount = 0;
obj12401_onTap_actionGroup0();
});










/*
 *
 *   obj12426: Event Touch Down
 *
 */
$("#obj12426").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj12426_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12426_onTap is still running");
	return;
}
var obj12426_onTap_runningActionsCount = 0;
var obj12426_onTap_loopCount = 0;
obj12426_onTap_actionGroup0();
});










/*
 *
 *   obj12423: Event Touch Down
 *
 */
$("#obj12423").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj12423_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12423_onTap is still running");
	return;
}
var obj12423_onTap_runningActionsCount = 0;
var obj12423_onTap_loopCount = 0;
obj12423_onTap_actionGroup0();
});










/*
 *
 *   obj12408: Event Touch Down
 *
 */
$("#obj12408").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj12408_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12408_onTap is still running");
	return;
}
var obj12408_onTap_runningActionsCount = 0;
var obj12408_onTap_loopCount = 0;
obj12408_onTap_actionGroup0();
});










/*
 *
 *   obj12392: Event Touch Down
 *
 */
$("#obj12392").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj12392_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12392_onTap is still running");
	return;
}
var obj12392_onTap_runningActionsCount = 0;
var obj12392_onTap_loopCount = 0;
obj12392_onTap_actionGroup0();
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
	
$("#obj4021").trigger('SCEventShow');
$("#obj4376").trigger('SCEventShow');
$("#obj4374").trigger('SCEventShow');
$("#obj4380").trigger('SCEventShow');
$("#obj4382").trigger('SCEventShow');
$("#obj4486").trigger('SCEventShow');
$("#obj4512").trigger('SCEventShow');
$("#obj12430").trigger('SCEventShow');
$("#obj12401").trigger('SCEventShow');
$("#obj12423").trigger('SCEventShow');
$("#obj12408").trigger('SCEventShow');
$("#obj12392").trigger('SCEventShow');
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