pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serophero - Unit 3";
pubcoder.page.id = pubcoder.page.id || 5572;
pubcoder.page.title = pubcoder.page.title || "7";
pubcoder.page.number = pubcoder.page.number || 7;
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
var obj10372_onTap_activeActionGroupIndex = -1;
var obj10372_onTap_runningActionsCount = 0;
var obj10372_onTap_loopCount = 0;
var obj10391_SCEventReadAloudStarted_activeActionGroupIndex = -1;
var obj10391_SCEventReadAloudStarted_runningActionsCount = 0;
var obj10391_SCEventReadAloudStarted_loopCount = 0;
var obj10391_SCEventReadAloudStopped_activeActionGroupIndex = -1;
var obj10391_SCEventReadAloudStopped_runningActionsCount = 0;
var obj10391_SCEventReadAloudStopped_loopCount = 0;
var obj10362_onTap_activeActionGroupIndex = -1;
var obj10362_onTap_runningActionsCount = 0;
var obj10362_onTap_loopCount = 0;
var obj10387_onTap_activeActionGroupIndex = -1;
var obj10387_onTap_runningActionsCount = 0;
var obj10387_onTap_loopCount = 0;
var obj10384_onTap_activeActionGroupIndex = -1;
var obj10384_onTap_runningActionsCount = 0;
var obj10384_onTap_loopCount = 0;
var obj10369_onTap_activeActionGroupIndex = -1;
var obj10369_onTap_runningActionsCount = 0;
var obj10369_onTap_loopCount = 0;
var obj10353_onTap_activeActionGroupIndex = -1;
var obj10353_onTap_runningActionsCount = 0;
var obj10353_onTap_loopCount = 0;
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
		
obj10372_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10372_onTap_activeActionGroupIndex = -1;
		$("#obj10372").trigger("obj10372_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10372) {
				console.warn("de-queueing event obj10372." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10372").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10372_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_10376();
function runjs_10376() {
	window.obj10372_onTap_runningActionsCount = obj10372_onTap_runningActionsCount + 1;

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
		window.obj10372_onTap_runningActionsCount = window.obj10372_onTap_runningActionsCount - 1;
if (window.obj10372_onTap_runningActionsCount < 0) {
	window.obj10372_onTap_runningActionsCount = 0;
} else if (window.obj10372_onTap_runningActionsCount == 0) {
	obj10372_onTap_actionGroup1();
}
	}, 1);
}







};
obj10372_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10372_onTap_activeActionGroupIndex = -1;
		$("#obj10372").trigger("obj10372_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10372) {
				console.warn("de-queueing event obj10372." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10372").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10372_onTap_activeActionGroupIndex = 1;
	






















};
obj10391_SCEventReadAloudStarted_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10391_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj10391").trigger("obj10391_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10391) {
				console.warn("de-queueing event obj10391." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10391").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10391_SCEventReadAloudStarted_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj10391 
switchImage_10395();
function switchImage_10395() {
	window.obj10391_SCEventReadAloudStarted_runningActionsCount = obj10391_SCEventReadAloudStarted_runningActionsCount + 1;

	var targetObjectId = "#obj10391";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj10391_img";
	var fromImagePath = "../images/obj10391_image.png";
	var toImagePath = "../images/switch69_to.png";
	var switchHelperId = "switchHelper130"
	var switchHelperRef = "#switchHelper130"
	var switchId = "130";
	var toSwitchId = "130";
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
				window.obj10391_SCEventReadAloudStarted_runningActionsCount = window.obj10391_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj10391_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj10391_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj10391_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj10391_SCEventReadAloudStarted_actionGroup1();
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
obj10391_SCEventReadAloudStarted_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10391_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj10391").trigger("obj10391_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10391) {
				console.warn("de-queueing event obj10391." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10391").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10391_SCEventReadAloudStarted_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_10396();
function runjs_10396() {
	window.obj10391_SCEventReadAloudStarted_runningActionsCount = obj10391_SCEventReadAloudStarted_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over Pressed');
}
	
	setTimeout(function() {
		window.obj10391_SCEventReadAloudStarted_runningActionsCount = window.obj10391_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj10391_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj10391_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj10391_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj10391_SCEventReadAloudStarted_actionGroup2();
}
	}, 1);
}







};
obj10391_SCEventReadAloudStarted_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10391_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj10391").trigger("obj10391_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10391) {
				console.warn("de-queueing event obj10391." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10391").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10391_SCEventReadAloudStarted_activeActionGroupIndex = 2;
	






















};
obj10391_SCEventReadAloudStopped_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10391_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj10391").trigger("obj10391_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10391) {
				console.warn("de-queueing event obj10391." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10391").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10391_SCEventReadAloudStopped_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj10391 
switchImage_10401();
function switchImage_10401() {
	window.obj10391_SCEventReadAloudStopped_runningActionsCount = obj10391_SCEventReadAloudStopped_runningActionsCount + 1;

	var targetObjectId = "#obj10391";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj10391_img";
	var fromImagePath = "../images/obj10391_image.png";
	var toImagePath = "../images/obj10391_image.png";
	var switchHelperId = "switchHelper131"
	var switchHelperRef = "#switchHelper131"
	var switchId = "131";
	var toSwitchId = "131";
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
				window.obj10391_SCEventReadAloudStopped_runningActionsCount = window.obj10391_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj10391_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj10391_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj10391_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj10391_SCEventReadAloudStopped_actionGroup1();
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
obj10391_SCEventReadAloudStopped_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10391_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj10391").trigger("obj10391_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10391) {
				console.warn("de-queueing event obj10391." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10391").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10391_SCEventReadAloudStopped_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_10402();
function runjs_10402() {
	window.obj10391_SCEventReadAloudStopped_runningActionsCount = obj10391_SCEventReadAloudStopped_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over');
}
	
	setTimeout(function() {
		window.obj10391_SCEventReadAloudStopped_runningActionsCount = window.obj10391_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj10391_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj10391_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj10391_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj10391_SCEventReadAloudStopped_actionGroup2();
}
	}, 1);
}







};
obj10391_SCEventReadAloudStopped_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10391_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj10391").trigger("obj10391_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10391) {
				console.warn("de-queueing event obj10391." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10391").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10391_SCEventReadAloudStopped_activeActionGroupIndex = 2;
	






















};
obj10362_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10362_onTap_activeActionGroupIndex = -1;
		$("#obj10362").trigger("obj10362_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10362) {
				console.warn("de-queueing event obj10362." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10362").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10362_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_10364();
function runjs_10364() {
	window.obj10362_onTap_runningActionsCount = obj10362_onTap_runningActionsCount + 1;

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
		window.obj10362_onTap_runningActionsCount = window.obj10362_onTap_runningActionsCount - 1;
if (window.obj10362_onTap_runningActionsCount < 0) {
	window.obj10362_onTap_runningActionsCount = 0;
} else if (window.obj10362_onTap_runningActionsCount == 0) {
	obj10362_onTap_actionGroup1();
}
	}, 1);
}







};
obj10362_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10362_onTap_activeActionGroupIndex = -1;
		$("#obj10362").trigger("obj10362_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10362) {
				console.warn("de-queueing event obj10362." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10362").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10362_onTap_activeActionGroupIndex = 1;
	






















};
obj10387_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10387_onTap_activeActionGroupIndex = -1;
		$("#obj10387").trigger("obj10387_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10387) {
				console.warn("de-queueing event obj10387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10387_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj10387 
switchImage_10389();
function switchImage_10389() {
	window.obj10387_onTap_runningActionsCount = obj10387_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj10387";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj10387_img";
	var fromImagePath = "../images/obj10387_image.png";
	var toImagePath = "../images/switch71_to.png";
	var switchHelperId = "switchHelper132"
	var switchHelperRef = "#switchHelper132"
	var switchId = "132";
	var toSwitchId = "132";
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
				window.obj10387_onTap_runningActionsCount = window.obj10387_onTap_runningActionsCount - 1;
if (window.obj10387_onTap_runningActionsCount < 0) {
	window.obj10387_onTap_runningActionsCount = 0;
} else if (window.obj10387_onTap_runningActionsCount == 0) {
	obj10387_onTap_actionGroup1();
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
obj10387_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10387_onTap_activeActionGroupIndex = -1;
		$("#obj10387").trigger("obj10387_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10387) {
				console.warn("de-queueing event obj10387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10387_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_10390();
function runjs_10390() {
	window.obj10387_onTap_runningActionsCount = obj10387_onTap_runningActionsCount + 1;

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
		window.obj10387_onTap_runningActionsCount = window.obj10387_onTap_runningActionsCount - 1;
if (window.obj10387_onTap_runningActionsCount < 0) {
	window.obj10387_onTap_runningActionsCount = 0;
} else if (window.obj10387_onTap_runningActionsCount == 0) {
	obj10387_onTap_actionGroup2();
}
	}, 1);
}







};
obj10387_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10387_onTap_activeActionGroupIndex = -1;
		$("#obj10387").trigger("obj10387_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10387) {
				console.warn("de-queueing event obj10387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10387_onTap_activeActionGroupIndex = 2;
	






















};
obj10384_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10384_onTap_activeActionGroupIndex = -1;
		$("#obj10384").trigger("obj10384_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10384) {
				console.warn("de-queueing event obj10384." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10384").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10384_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_10386();
function goToPage_10386() {
	window.obj10384_onTap_runningActionsCount = obj10384_onTap_runningActionsCount + 1;
	$("#anchor133")[0].click();
	window.obj10384_onTap_runningActionsCount = window.obj10384_onTap_runningActionsCount - 1;
if (window.obj10384_onTap_runningActionsCount < 0) {
	window.obj10384_onTap_runningActionsCount = 0;
} else if (window.obj10384_onTap_runningActionsCount == 0) {
	obj10384_onTap_actionGroup1();
}
}





















};
obj10384_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10384_onTap_activeActionGroupIndex = -1;
		$("#obj10384").trigger("obj10384_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10384) {
				console.warn("de-queueing event obj10384." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10384").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10384_onTap_activeActionGroupIndex = 1;
	






















};
obj10369_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10369_onTap_activeActionGroupIndex = -1;
		$("#obj10369").trigger("obj10369_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10369) {
				console.warn("de-queueing event obj10369." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10369").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10369_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_10371();
function goToPage_10371() {
	window.obj10369_onTap_runningActionsCount = obj10369_onTap_runningActionsCount + 1;
	$("#anchor134")[0].click();
	window.obj10369_onTap_runningActionsCount = window.obj10369_onTap_runningActionsCount - 1;
if (window.obj10369_onTap_runningActionsCount < 0) {
	window.obj10369_onTap_runningActionsCount = 0;
} else if (window.obj10369_onTap_runningActionsCount == 0) {
	obj10369_onTap_actionGroup1();
}
}





















};
obj10369_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10369_onTap_activeActionGroupIndex = -1;
		$("#obj10369").trigger("obj10369_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10369) {
				console.warn("de-queueing event obj10369." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10369").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10369_onTap_activeActionGroupIndex = 1;
	






















};
obj10353_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10353_onTap_activeActionGroupIndex = -1;
		$("#obj10353").trigger("obj10353_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10353) {
				console.warn("de-queueing event obj10353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10353_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_10356();
function runjs_10356() {
	window.obj10353_onTap_runningActionsCount = obj10353_onTap_runningActionsCount + 1;

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
		window.obj10353_onTap_runningActionsCount = window.obj10353_onTap_runningActionsCount - 1;
if (window.obj10353_onTap_runningActionsCount < 0) {
	window.obj10353_onTap_runningActionsCount = 0;
} else if (window.obj10353_onTap_runningActionsCount == 0) {
	obj10353_onTap_actionGroup1();
}
	}, 1);
}







};
obj10353_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10353_onTap_activeActionGroupIndex = -1;
		$("#obj10353").trigger("obj10353_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10353) {
				console.warn("de-queueing event obj10353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10353_onTap_activeActionGroupIndex = 1;
	






















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



















































































/*
 *
 *   obj10372: Event Touch Down
 *
 */
$("#obj10372").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10372_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10372_onTap is still running");
	return;
}
var obj10372_onTap_runningActionsCount = 0;
var obj10372_onTap_loopCount = 0;
obj10372_onTap_actionGroup0();
});
























/*
 *
 *   obj10391: Event SCEventReadAloudStarted
 *
 */
$("#obj10391").bind("SCEventReadAloudStarted", function(event) {
	if (window.obj10391_SCEventReadAloudStarted_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10391_SCEventReadAloudStarted is still running");
	return;
}
var obj10391_SCEventReadAloudStarted_runningActionsCount = 0;
var obj10391_SCEventReadAloudStarted_loopCount = 0;
obj10391_SCEventReadAloudStarted_actionGroup0();
});
/*
 *
 *   obj10391: Event SCEventReadAloudStopped
 *
 */
$("#obj10391").bind("SCEventReadAloudStopped", function(event) {
	if (window.obj10391_SCEventReadAloudStopped_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10391_SCEventReadAloudStopped is still running");
	return;
}
var obj10391_SCEventReadAloudStopped_runningActionsCount = 0;
var obj10391_SCEventReadAloudStopped_loopCount = 0;
obj10391_SCEventReadAloudStopped_actionGroup0();
});





/*
 *
 *   obj10362: Event Touch Down
 *
 */
$("#obj10362").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10362_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10362_onTap is still running");
	return;
}
var obj10362_onTap_runningActionsCount = 0;
var obj10362_onTap_loopCount = 0;
obj10362_onTap_actionGroup0();
});










/*
 *
 *   obj10387: Event Touch Down
 *
 */
$("#obj10387").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10387_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10387_onTap is still running");
	return;
}
var obj10387_onTap_runningActionsCount = 0;
var obj10387_onTap_loopCount = 0;
obj10387_onTap_actionGroup0();
});










/*
 *
 *   obj10384: Event Touch Down
 *
 */
$("#obj10384").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10384_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10384_onTap is still running");
	return;
}
var obj10384_onTap_runningActionsCount = 0;
var obj10384_onTap_loopCount = 0;
obj10384_onTap_actionGroup0();
});










/*
 *
 *   obj10369: Event Touch Down
 *
 */
$("#obj10369").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10369_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10369_onTap is still running");
	return;
}
var obj10369_onTap_runningActionsCount = 0;
var obj10369_onTap_loopCount = 0;
obj10369_onTap_actionGroup0();
});










/*
 *
 *   obj10353: Event Touch Down
 *
 */
$("#obj10353").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10353_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10353_onTap is still running");
	return;
}
var obj10353_onTap_runningActionsCount = 0;
var obj10353_onTap_loopCount = 0;
obj10353_onTap_actionGroup0();
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
	
$("#obj5579").trigger('SCEventShow');
$("#obj5581").trigger('SCEventShow');
$("#obj5573").trigger('SCEventShow');
$("#obj5575").trigger('SCEventShow');
$("#obj5577").trigger('SCEventShow');
$("#obj10391").trigger('SCEventShow');
$("#obj10362").trigger('SCEventShow');
$("#obj10384").trigger('SCEventShow');
$("#obj10369").trigger('SCEventShow');
$("#obj10353").trigger('SCEventShow');
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