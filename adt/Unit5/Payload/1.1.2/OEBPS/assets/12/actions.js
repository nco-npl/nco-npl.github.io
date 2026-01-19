pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serofero - Unit 5";
pubcoder.page.id = pubcoder.page.id || 3810;
pubcoder.page.title = pubcoder.page.title || "12";
pubcoder.page.number = pubcoder.page.number || 12;
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
var obj10345_onTap_activeActionGroupIndex = -1;
var obj10345_onTap_runningActionsCount = 0;
var obj10345_onTap_loopCount = 0;
var obj10364_SCEventReadAloudStarted_activeActionGroupIndex = -1;
var obj10364_SCEventReadAloudStarted_runningActionsCount = 0;
var obj10364_SCEventReadAloudStarted_loopCount = 0;
var obj10364_SCEventReadAloudStopped_activeActionGroupIndex = -1;
var obj10364_SCEventReadAloudStopped_runningActionsCount = 0;
var obj10364_SCEventReadAloudStopped_loopCount = 0;
var obj10335_onTap_activeActionGroupIndex = -1;
var obj10335_onTap_runningActionsCount = 0;
var obj10335_onTap_loopCount = 0;
var obj10360_onTap_activeActionGroupIndex = -1;
var obj10360_onTap_runningActionsCount = 0;
var obj10360_onTap_loopCount = 0;
var obj10357_onTap_activeActionGroupIndex = -1;
var obj10357_onTap_runningActionsCount = 0;
var obj10357_onTap_loopCount = 0;
var obj10342_onTap_activeActionGroupIndex = -1;
var obj10342_onTap_runningActionsCount = 0;
var obj10342_onTap_loopCount = 0;
var obj10326_onTap_activeActionGroupIndex = -1;
var obj10326_onTap_runningActionsCount = 0;
var obj10326_onTap_loopCount = 0;
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
		
obj10345_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10345_onTap_activeActionGroupIndex = -1;
		$("#obj10345").trigger("obj10345_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10345) {
				console.warn("de-queueing event obj10345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10345_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_10349();
function runjs_10349() {
	window.obj10345_onTap_runningActionsCount = obj10345_onTap_runningActionsCount + 1;

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
		window.obj10345_onTap_runningActionsCount = window.obj10345_onTap_runningActionsCount - 1;
if (window.obj10345_onTap_runningActionsCount < 0) {
	window.obj10345_onTap_runningActionsCount = 0;
} else if (window.obj10345_onTap_runningActionsCount == 0) {
	obj10345_onTap_actionGroup1();
}
	}, 1);
}







};
obj10345_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10345_onTap_activeActionGroupIndex = -1;
		$("#obj10345").trigger("obj10345_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10345) {
				console.warn("de-queueing event obj10345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10345_onTap_activeActionGroupIndex = 1;
	






















};
obj10364_SCEventReadAloudStarted_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10364_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj10364").trigger("obj10364_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10364) {
				console.warn("de-queueing event obj10364." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10364").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10364_SCEventReadAloudStarted_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj10364 
switchImage_10368();
function switchImage_10368() {
	window.obj10364_SCEventReadAloudStarted_runningActionsCount = obj10364_SCEventReadAloudStarted_runningActionsCount + 1;

	var targetObjectId = "#obj10364";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj10364_img";
	var fromImagePath = "../images/obj10364_image.png";
	var toImagePath = "../images/switch28_to.png";
	var switchHelperId = "switchHelper116"
	var switchHelperRef = "#switchHelper116"
	var switchId = "116";
	var toSwitchId = "116";
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
				window.obj10364_SCEventReadAloudStarted_runningActionsCount = window.obj10364_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj10364_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj10364_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj10364_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj10364_SCEventReadAloudStarted_actionGroup1();
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
obj10364_SCEventReadAloudStarted_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10364_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj10364").trigger("obj10364_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10364) {
				console.warn("de-queueing event obj10364." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10364").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10364_SCEventReadAloudStarted_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_10369();
function runjs_10369() {
	window.obj10364_SCEventReadAloudStarted_runningActionsCount = obj10364_SCEventReadAloudStarted_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over Pressed');
}
	
	setTimeout(function() {
		window.obj10364_SCEventReadAloudStarted_runningActionsCount = window.obj10364_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj10364_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj10364_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj10364_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj10364_SCEventReadAloudStarted_actionGroup2();
}
	}, 1);
}







};
obj10364_SCEventReadAloudStarted_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10364_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj10364").trigger("obj10364_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10364) {
				console.warn("de-queueing event obj10364." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10364").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10364_SCEventReadAloudStarted_activeActionGroupIndex = 2;
	






















};
obj10364_SCEventReadAloudStopped_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10364_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj10364").trigger("obj10364_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10364) {
				console.warn("de-queueing event obj10364." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10364").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10364_SCEventReadAloudStopped_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj10364 
switchImage_10374();
function switchImage_10374() {
	window.obj10364_SCEventReadAloudStopped_runningActionsCount = obj10364_SCEventReadAloudStopped_runningActionsCount + 1;

	var targetObjectId = "#obj10364";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj10364_img";
	var fromImagePath = "../images/obj10364_image.png";
	var toImagePath = "../images/obj10364_image.png";
	var switchHelperId = "switchHelper117"
	var switchHelperRef = "#switchHelper117"
	var switchId = "117";
	var toSwitchId = "117";
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
				window.obj10364_SCEventReadAloudStopped_runningActionsCount = window.obj10364_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj10364_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj10364_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj10364_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj10364_SCEventReadAloudStopped_actionGroup1();
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
obj10364_SCEventReadAloudStopped_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10364_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj10364").trigger("obj10364_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10364) {
				console.warn("de-queueing event obj10364." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10364").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10364_SCEventReadAloudStopped_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_10375();
function runjs_10375() {
	window.obj10364_SCEventReadAloudStopped_runningActionsCount = obj10364_SCEventReadAloudStopped_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over');
}
	
	setTimeout(function() {
		window.obj10364_SCEventReadAloudStopped_runningActionsCount = window.obj10364_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj10364_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj10364_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj10364_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj10364_SCEventReadAloudStopped_actionGroup2();
}
	}, 1);
}







};
obj10364_SCEventReadAloudStopped_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10364_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj10364").trigger("obj10364_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10364) {
				console.warn("de-queueing event obj10364." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10364").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10364_SCEventReadAloudStopped_activeActionGroupIndex = 2;
	






















};
obj10335_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10335_onTap_activeActionGroupIndex = -1;
		$("#obj10335").trigger("obj10335_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10335) {
				console.warn("de-queueing event obj10335." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10335").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10335_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_10337();
function runjs_10337() {
	window.obj10335_onTap_runningActionsCount = obj10335_onTap_runningActionsCount + 1;

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
		window.obj10335_onTap_runningActionsCount = window.obj10335_onTap_runningActionsCount - 1;
if (window.obj10335_onTap_runningActionsCount < 0) {
	window.obj10335_onTap_runningActionsCount = 0;
} else if (window.obj10335_onTap_runningActionsCount == 0) {
	obj10335_onTap_actionGroup1();
}
	}, 1);
}







};
obj10335_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10335_onTap_activeActionGroupIndex = -1;
		$("#obj10335").trigger("obj10335_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10335) {
				console.warn("de-queueing event obj10335." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10335").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10335_onTap_activeActionGroupIndex = 1;
	






















};
obj10360_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10360_onTap_activeActionGroupIndex = -1;
		$("#obj10360").trigger("obj10360_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10360) {
				console.warn("de-queueing event obj10360." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10360").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10360_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj10360 
switchImage_10362();
function switchImage_10362() {
	window.obj10360_onTap_runningActionsCount = obj10360_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj10360";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj10360_img";
	var fromImagePath = "../images/obj10360_image.png";
	var toImagePath = "../images/switch30_to.png";
	var switchHelperId = "switchHelper118"
	var switchHelperRef = "#switchHelper118"
	var switchId = "118";
	var toSwitchId = "118";
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
				window.obj10360_onTap_runningActionsCount = window.obj10360_onTap_runningActionsCount - 1;
if (window.obj10360_onTap_runningActionsCount < 0) {
	window.obj10360_onTap_runningActionsCount = 0;
} else if (window.obj10360_onTap_runningActionsCount == 0) {
	obj10360_onTap_actionGroup1();
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
obj10360_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10360_onTap_activeActionGroupIndex = -1;
		$("#obj10360").trigger("obj10360_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10360) {
				console.warn("de-queueing event obj10360." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10360").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10360_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_10363();
function runjs_10363() {
	window.obj10360_onTap_runningActionsCount = obj10360_onTap_runningActionsCount + 1;

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
		window.obj10360_onTap_runningActionsCount = window.obj10360_onTap_runningActionsCount - 1;
if (window.obj10360_onTap_runningActionsCount < 0) {
	window.obj10360_onTap_runningActionsCount = 0;
} else if (window.obj10360_onTap_runningActionsCount == 0) {
	obj10360_onTap_actionGroup2();
}
	}, 1);
}







};
obj10360_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10360_onTap_activeActionGroupIndex = -1;
		$("#obj10360").trigger("obj10360_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10360) {
				console.warn("de-queueing event obj10360." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10360").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10360_onTap_activeActionGroupIndex = 2;
	






















};
obj10357_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10357_onTap_activeActionGroupIndex = -1;
		$("#obj10357").trigger("obj10357_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10357) {
				console.warn("de-queueing event obj10357." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10357").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10357_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_10359();
function goToPage_10359() {
	window.obj10357_onTap_runningActionsCount = obj10357_onTap_runningActionsCount + 1;
	$("#anchor119")[0].click();
	window.obj10357_onTap_runningActionsCount = window.obj10357_onTap_runningActionsCount - 1;
if (window.obj10357_onTap_runningActionsCount < 0) {
	window.obj10357_onTap_runningActionsCount = 0;
} else if (window.obj10357_onTap_runningActionsCount == 0) {
	obj10357_onTap_actionGroup1();
}
}





















};
obj10357_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10357_onTap_activeActionGroupIndex = -1;
		$("#obj10357").trigger("obj10357_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10357) {
				console.warn("de-queueing event obj10357." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10357").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10357_onTap_activeActionGroupIndex = 1;
	






















};
obj10342_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10342_onTap_activeActionGroupIndex = -1;
		$("#obj10342").trigger("obj10342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10342) {
				console.warn("de-queueing event obj10342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10342_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_10344();
function goToPage_10344() {
	window.obj10342_onTap_runningActionsCount = obj10342_onTap_runningActionsCount + 1;
	$("#anchor120")[0].click();
	window.obj10342_onTap_runningActionsCount = window.obj10342_onTap_runningActionsCount - 1;
if (window.obj10342_onTap_runningActionsCount < 0) {
	window.obj10342_onTap_runningActionsCount = 0;
} else if (window.obj10342_onTap_runningActionsCount == 0) {
	obj10342_onTap_actionGroup1();
}
}





















};
obj10342_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10342_onTap_activeActionGroupIndex = -1;
		$("#obj10342").trigger("obj10342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10342) {
				console.warn("de-queueing event obj10342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10342_onTap_activeActionGroupIndex = 1;
	






















};
obj10326_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10326_onTap_activeActionGroupIndex = -1;
		$("#obj10326").trigger("obj10326_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10326) {
				console.warn("de-queueing event obj10326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10326_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_10329();
function runjs_10329() {
	window.obj10326_onTap_runningActionsCount = obj10326_onTap_runningActionsCount + 1;

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
		window.obj10326_onTap_runningActionsCount = window.obj10326_onTap_runningActionsCount - 1;
if (window.obj10326_onTap_runningActionsCount < 0) {
	window.obj10326_onTap_runningActionsCount = 0;
} else if (window.obj10326_onTap_runningActionsCount == 0) {
	obj10326_onTap_actionGroup1();
}
	}, 1);
}







};
obj10326_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10326_onTap_activeActionGroupIndex = -1;
		$("#obj10326").trigger("obj10326_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10326) {
				console.warn("de-queueing event obj10326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10326_onTap_activeActionGroupIndex = 1;
	






















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



































































































































































































































































































































/*
 *
 *   obj10345: Event Touch Down
 *
 */
$("#obj10345").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10345_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10345_onTap is still running");
	return;
}
var obj10345_onTap_runningActionsCount = 0;
var obj10345_onTap_loopCount = 0;
obj10345_onTap_actionGroup0();
});
























/*
 *
 *   obj10364: Event SCEventReadAloudStarted
 *
 */
$("#obj10364").bind("SCEventReadAloudStarted", function(event) {
	if (window.obj10364_SCEventReadAloudStarted_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10364_SCEventReadAloudStarted is still running");
	return;
}
var obj10364_SCEventReadAloudStarted_runningActionsCount = 0;
var obj10364_SCEventReadAloudStarted_loopCount = 0;
obj10364_SCEventReadAloudStarted_actionGroup0();
});
/*
 *
 *   obj10364: Event SCEventReadAloudStopped
 *
 */
$("#obj10364").bind("SCEventReadAloudStopped", function(event) {
	if (window.obj10364_SCEventReadAloudStopped_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10364_SCEventReadAloudStopped is still running");
	return;
}
var obj10364_SCEventReadAloudStopped_runningActionsCount = 0;
var obj10364_SCEventReadAloudStopped_loopCount = 0;
obj10364_SCEventReadAloudStopped_actionGroup0();
});





/*
 *
 *   obj10335: Event Touch Down
 *
 */
$("#obj10335").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10335_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10335_onTap is still running");
	return;
}
var obj10335_onTap_runningActionsCount = 0;
var obj10335_onTap_loopCount = 0;
obj10335_onTap_actionGroup0();
});










/*
 *
 *   obj10360: Event Touch Down
 *
 */
$("#obj10360").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10360_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10360_onTap is still running");
	return;
}
var obj10360_onTap_runningActionsCount = 0;
var obj10360_onTap_loopCount = 0;
obj10360_onTap_actionGroup0();
});










/*
 *
 *   obj10357: Event Touch Down
 *
 */
$("#obj10357").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10357_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10357_onTap is still running");
	return;
}
var obj10357_onTap_runningActionsCount = 0;
var obj10357_onTap_loopCount = 0;
obj10357_onTap_actionGroup0();
});










/*
 *
 *   obj10342: Event Touch Down
 *
 */
$("#obj10342").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10342_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10342_onTap is still running");
	return;
}
var obj10342_onTap_runningActionsCount = 0;
var obj10342_onTap_loopCount = 0;
obj10342_onTap_actionGroup0();
});










/*
 *
 *   obj10326: Event Touch Down
 *
 */
$("#obj10326").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10326_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10326_onTap is still running");
	return;
}
var obj10326_onTap_runningActionsCount = 0;
var obj10326_onTap_loopCount = 0;
obj10326_onTap_actionGroup0();
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
	
$("#obj8487").trigger('SCEventShow');
$("#obj4602").trigger('SCEventShow');
$("#obj4544").trigger('SCEventShow');
$("#obj4558").trigger('SCEventShow');
$("#obj4554").trigger('SCEventShow');
$("#obj4556").trigger('SCEventShow');
$("#obj4546").trigger('SCEventShow');
$("#obj8842").trigger('SCEventShow');
$("#obj8840").trigger('SCEventShow');
$("#obj4564").trigger('SCEventShow');
$("#obj4552").trigger('SCEventShow');
$("#obj8567").trigger('SCEventShow');
$("#obj8581").trigger('SCEventShow');
$("#obj8565").trigger('SCEventShow');
$("#obj8579").trigger('SCEventShow');
$("#obj4562").trigger('SCEventShow');
$("#obj4548").trigger('SCEventShow');
$("#obj8563").trigger('SCEventShow');
$("#obj8577").trigger('SCEventShow');
$("#obj8561").trigger('SCEventShow');
$("#obj8575").trigger('SCEventShow');
$("#obj4560").trigger('SCEventShow');
$("#obj8559").trigger('SCEventShow');
$("#obj8573").trigger('SCEventShow');
$("#obj4550").trigger('SCEventShow');
$("#obj8569").trigger('SCEventShow');
$("#obj8571").trigger('SCEventShow');
$("#obj4058").trigger('SCEventShow');
$("#obj4103").trigger('SCEventShow');
$("#obj10364").trigger('SCEventShow');
$("#obj10335").trigger('SCEventShow');
$("#obj10357").trigger('SCEventShow');
$("#obj10342").trigger('SCEventShow');
$("#obj10326").trigger('SCEventShow');
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