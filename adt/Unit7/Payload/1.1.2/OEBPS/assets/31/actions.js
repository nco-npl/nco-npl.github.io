pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serofero - Unit 7";
pubcoder.page.id = pubcoder.page.id || 3826;
pubcoder.page.title = pubcoder.page.title || "31";
pubcoder.page.number = pubcoder.page.number || 31;
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
var obj13592_onTap_activeActionGroupIndex = -1;
var obj13592_onTap_runningActionsCount = 0;
var obj13592_onTap_loopCount = 0;
var obj13611_SCEventReadAloudStarted_activeActionGroupIndex = -1;
var obj13611_SCEventReadAloudStarted_runningActionsCount = 0;
var obj13611_SCEventReadAloudStarted_loopCount = 0;
var obj13611_SCEventReadAloudStopped_activeActionGroupIndex = -1;
var obj13611_SCEventReadAloudStopped_runningActionsCount = 0;
var obj13611_SCEventReadAloudStopped_loopCount = 0;
var obj13582_onTap_activeActionGroupIndex = -1;
var obj13582_onTap_runningActionsCount = 0;
var obj13582_onTap_loopCount = 0;
var obj13607_onTap_activeActionGroupIndex = -1;
var obj13607_onTap_runningActionsCount = 0;
var obj13607_onTap_loopCount = 0;
var obj13604_onTap_activeActionGroupIndex = -1;
var obj13604_onTap_runningActionsCount = 0;
var obj13604_onTap_loopCount = 0;
var obj13589_onTap_activeActionGroupIndex = -1;
var obj13589_onTap_runningActionsCount = 0;
var obj13589_onTap_loopCount = 0;
var obj13573_onTap_activeActionGroupIndex = -1;
var obj13573_onTap_runningActionsCount = 0;
var obj13573_onTap_loopCount = 0;
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
		
obj13592_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13592_onTap_activeActionGroupIndex = -1;
		$("#obj13592").trigger("obj13592_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13592) {
				console.warn("de-queueing event obj13592." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13592").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13592_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_13596();
function runjs_13596() {
	window.obj13592_onTap_runningActionsCount = obj13592_onTap_runningActionsCount + 1;

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
		window.obj13592_onTap_runningActionsCount = window.obj13592_onTap_runningActionsCount - 1;
if (window.obj13592_onTap_runningActionsCount < 0) {
	window.obj13592_onTap_runningActionsCount = 0;
} else if (window.obj13592_onTap_runningActionsCount == 0) {
	obj13592_onTap_actionGroup1();
}
	}, 1);
}







};
obj13592_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13592_onTap_activeActionGroupIndex = -1;
		$("#obj13592").trigger("obj13592_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13592) {
				console.warn("de-queueing event obj13592." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13592").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13592_onTap_activeActionGroupIndex = 1;
	






















};
obj13611_SCEventReadAloudStarted_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13611_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj13611").trigger("obj13611_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13611) {
				console.warn("de-queueing event obj13611." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13611").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13611_SCEventReadAloudStarted_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj13611 
switchImage_13615();
function switchImage_13615() {
	window.obj13611_SCEventReadAloudStarted_runningActionsCount = obj13611_SCEventReadAloudStarted_runningActionsCount + 1;

	var targetObjectId = "#obj13611";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj13611_img";
	var fromImagePath = "../images/obj13611_image.png";
	var toImagePath = "../images/switch30_to.png";
	var switchHelperId = "switchHelper274"
	var switchHelperRef = "#switchHelper274"
	var switchId = "274";
	var toSwitchId = "274";
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
				window.obj13611_SCEventReadAloudStarted_runningActionsCount = window.obj13611_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj13611_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj13611_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj13611_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj13611_SCEventReadAloudStarted_actionGroup1();
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
obj13611_SCEventReadAloudStarted_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13611_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj13611").trigger("obj13611_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13611) {
				console.warn("de-queueing event obj13611." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13611").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13611_SCEventReadAloudStarted_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_13616();
function runjs_13616() {
	window.obj13611_SCEventReadAloudStarted_runningActionsCount = obj13611_SCEventReadAloudStarted_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over Pressed');
}
	
	setTimeout(function() {
		window.obj13611_SCEventReadAloudStarted_runningActionsCount = window.obj13611_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj13611_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj13611_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj13611_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj13611_SCEventReadAloudStarted_actionGroup2();
}
	}, 1);
}







};
obj13611_SCEventReadAloudStarted_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13611_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj13611").trigger("obj13611_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13611) {
				console.warn("de-queueing event obj13611." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13611").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13611_SCEventReadAloudStarted_activeActionGroupIndex = 2;
	






















};
obj13611_SCEventReadAloudStopped_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13611_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj13611").trigger("obj13611_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13611) {
				console.warn("de-queueing event obj13611." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13611").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13611_SCEventReadAloudStopped_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj13611 
switchImage_13621();
function switchImage_13621() {
	window.obj13611_SCEventReadAloudStopped_runningActionsCount = obj13611_SCEventReadAloudStopped_runningActionsCount + 1;

	var targetObjectId = "#obj13611";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj13611_img";
	var fromImagePath = "../images/obj13611_image.png";
	var toImagePath = "../images/obj13611_image.png";
	var switchHelperId = "switchHelper275"
	var switchHelperRef = "#switchHelper275"
	var switchId = "275";
	var toSwitchId = "275";
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
				window.obj13611_SCEventReadAloudStopped_runningActionsCount = window.obj13611_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj13611_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj13611_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj13611_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj13611_SCEventReadAloudStopped_actionGroup1();
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
obj13611_SCEventReadAloudStopped_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13611_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj13611").trigger("obj13611_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13611) {
				console.warn("de-queueing event obj13611." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13611").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13611_SCEventReadAloudStopped_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_13622();
function runjs_13622() {
	window.obj13611_SCEventReadAloudStopped_runningActionsCount = obj13611_SCEventReadAloudStopped_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over');
}
	
	setTimeout(function() {
		window.obj13611_SCEventReadAloudStopped_runningActionsCount = window.obj13611_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj13611_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj13611_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj13611_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj13611_SCEventReadAloudStopped_actionGroup2();
}
	}, 1);
}







};
obj13611_SCEventReadAloudStopped_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13611_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj13611").trigger("obj13611_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13611) {
				console.warn("de-queueing event obj13611." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13611").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13611_SCEventReadAloudStopped_activeActionGroupIndex = 2;
	






















};
obj13582_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13582_onTap_activeActionGroupIndex = -1;
		$("#obj13582").trigger("obj13582_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13582) {
				console.warn("de-queueing event obj13582." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13582").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13582_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_13584();
function runjs_13584() {
	window.obj13582_onTap_runningActionsCount = obj13582_onTap_runningActionsCount + 1;

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
		window.obj13582_onTap_runningActionsCount = window.obj13582_onTap_runningActionsCount - 1;
if (window.obj13582_onTap_runningActionsCount < 0) {
	window.obj13582_onTap_runningActionsCount = 0;
} else if (window.obj13582_onTap_runningActionsCount == 0) {
	obj13582_onTap_actionGroup1();
}
	}, 1);
}







};
obj13582_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13582_onTap_activeActionGroupIndex = -1;
		$("#obj13582").trigger("obj13582_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13582) {
				console.warn("de-queueing event obj13582." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13582").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13582_onTap_activeActionGroupIndex = 1;
	






















};
obj13607_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13607_onTap_activeActionGroupIndex = -1;
		$("#obj13607").trigger("obj13607_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13607) {
				console.warn("de-queueing event obj13607." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13607").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13607_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj13607 
switchImage_13609();
function switchImage_13609() {
	window.obj13607_onTap_runningActionsCount = obj13607_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj13607";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj13607_img";
	var fromImagePath = "../images/obj13607_image.png";
	var toImagePath = "../images/switch32_to.png";
	var switchHelperId = "switchHelper276"
	var switchHelperRef = "#switchHelper276"
	var switchId = "276";
	var toSwitchId = "276";
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
				window.obj13607_onTap_runningActionsCount = window.obj13607_onTap_runningActionsCount - 1;
if (window.obj13607_onTap_runningActionsCount < 0) {
	window.obj13607_onTap_runningActionsCount = 0;
} else if (window.obj13607_onTap_runningActionsCount == 0) {
	obj13607_onTap_actionGroup1();
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
obj13607_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13607_onTap_activeActionGroupIndex = -1;
		$("#obj13607").trigger("obj13607_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13607) {
				console.warn("de-queueing event obj13607." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13607").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13607_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_13610();
function runjs_13610() {
	window.obj13607_onTap_runningActionsCount = obj13607_onTap_runningActionsCount + 1;

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
		window.obj13607_onTap_runningActionsCount = window.obj13607_onTap_runningActionsCount - 1;
if (window.obj13607_onTap_runningActionsCount < 0) {
	window.obj13607_onTap_runningActionsCount = 0;
} else if (window.obj13607_onTap_runningActionsCount == 0) {
	obj13607_onTap_actionGroup2();
}
	}, 1);
}







};
obj13607_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13607_onTap_activeActionGroupIndex = -1;
		$("#obj13607").trigger("obj13607_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13607) {
				console.warn("de-queueing event obj13607." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13607").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13607_onTap_activeActionGroupIndex = 2;
	






















};
obj13604_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13604_onTap_activeActionGroupIndex = -1;
		$("#obj13604").trigger("obj13604_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13604) {
				console.warn("de-queueing event obj13604." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13604").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13604_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13606();
function goToPage_13606() {
	window.obj13604_onTap_runningActionsCount = obj13604_onTap_runningActionsCount + 1;
	$("#anchor277")[0].click();
	window.obj13604_onTap_runningActionsCount = window.obj13604_onTap_runningActionsCount - 1;
if (window.obj13604_onTap_runningActionsCount < 0) {
	window.obj13604_onTap_runningActionsCount = 0;
} else if (window.obj13604_onTap_runningActionsCount == 0) {
	obj13604_onTap_actionGroup1();
}
}





















};
obj13604_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13604_onTap_activeActionGroupIndex = -1;
		$("#obj13604").trigger("obj13604_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13604) {
				console.warn("de-queueing event obj13604." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13604").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13604_onTap_activeActionGroupIndex = 1;
	






















};
obj13589_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13589_onTap_activeActionGroupIndex = -1;
		$("#obj13589").trigger("obj13589_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13589) {
				console.warn("de-queueing event obj13589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13589_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13591();
function goToPage_13591() {
	window.obj13589_onTap_runningActionsCount = obj13589_onTap_runningActionsCount + 1;
	$("#anchor278")[0].click();
	window.obj13589_onTap_runningActionsCount = window.obj13589_onTap_runningActionsCount - 1;
if (window.obj13589_onTap_runningActionsCount < 0) {
	window.obj13589_onTap_runningActionsCount = 0;
} else if (window.obj13589_onTap_runningActionsCount == 0) {
	obj13589_onTap_actionGroup1();
}
}





















};
obj13589_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13589_onTap_activeActionGroupIndex = -1;
		$("#obj13589").trigger("obj13589_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13589) {
				console.warn("de-queueing event obj13589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13589_onTap_activeActionGroupIndex = 1;
	






















};
obj13573_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13573_onTap_activeActionGroupIndex = -1;
		$("#obj13573").trigger("obj13573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13573) {
				console.warn("de-queueing event obj13573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13573_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_13576();
function runjs_13576() {
	window.obj13573_onTap_runningActionsCount = obj13573_onTap_runningActionsCount + 1;

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
		window.obj13573_onTap_runningActionsCount = window.obj13573_onTap_runningActionsCount - 1;
if (window.obj13573_onTap_runningActionsCount < 0) {
	window.obj13573_onTap_runningActionsCount = 0;
} else if (window.obj13573_onTap_runningActionsCount == 0) {
	obj13573_onTap_actionGroup1();
}
	}, 1);
}







};
obj13573_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13573_onTap_activeActionGroupIndex = -1;
		$("#obj13573").trigger("obj13573_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13573) {
				console.warn("de-queueing event obj13573." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13573").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13573_onTap_activeActionGroupIndex = 1;
	






















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



































































































































































/*
 *
 *   obj13592: Event Touch Down
 *
 */
$("#obj13592").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13592_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13592_onTap is still running");
	return;
}
var obj13592_onTap_runningActionsCount = 0;
var obj13592_onTap_loopCount = 0;
obj13592_onTap_actionGroup0();
});
























/*
 *
 *   obj13611: Event SCEventReadAloudStarted
 *
 */
$("#obj13611").bind("SCEventReadAloudStarted", function(event) {
	if (window.obj13611_SCEventReadAloudStarted_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13611_SCEventReadAloudStarted is still running");
	return;
}
var obj13611_SCEventReadAloudStarted_runningActionsCount = 0;
var obj13611_SCEventReadAloudStarted_loopCount = 0;
obj13611_SCEventReadAloudStarted_actionGroup0();
});
/*
 *
 *   obj13611: Event SCEventReadAloudStopped
 *
 */
$("#obj13611").bind("SCEventReadAloudStopped", function(event) {
	if (window.obj13611_SCEventReadAloudStopped_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13611_SCEventReadAloudStopped is still running");
	return;
}
var obj13611_SCEventReadAloudStopped_runningActionsCount = 0;
var obj13611_SCEventReadAloudStopped_loopCount = 0;
obj13611_SCEventReadAloudStopped_actionGroup0();
});





/*
 *
 *   obj13582: Event Touch Down
 *
 */
$("#obj13582").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13582_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13582_onTap is still running");
	return;
}
var obj13582_onTap_runningActionsCount = 0;
var obj13582_onTap_loopCount = 0;
obj13582_onTap_actionGroup0();
});










/*
 *
 *   obj13607: Event Touch Down
 *
 */
$("#obj13607").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13607_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13607_onTap is still running");
	return;
}
var obj13607_onTap_runningActionsCount = 0;
var obj13607_onTap_loopCount = 0;
obj13607_onTap_actionGroup0();
});










/*
 *
 *   obj13604: Event Touch Down
 *
 */
$("#obj13604").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13604_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13604_onTap is still running");
	return;
}
var obj13604_onTap_runningActionsCount = 0;
var obj13604_onTap_loopCount = 0;
obj13604_onTap_actionGroup0();
});










/*
 *
 *   obj13589: Event Touch Down
 *
 */
$("#obj13589").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13589_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13589_onTap is still running");
	return;
}
var obj13589_onTap_runningActionsCount = 0;
var obj13589_onTap_loopCount = 0;
obj13589_onTap_actionGroup0();
});










/*
 *
 *   obj13573: Event Touch Down
 *
 */
$("#obj13573").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13573_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13573_onTap is still running");
	return;
}
var obj13573_onTap_runningActionsCount = 0;
var obj13573_onTap_loopCount = 0;
obj13573_onTap_actionGroup0();
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
	
$("#obj4121").trigger('SCEventShow');
$("#obj4410").trigger('SCEventShow');
$("#obj4412").trigger('SCEventShow');
$("#obj4424").trigger('SCEventShow');
$("#obj4428").trigger('SCEventShow');
$("#obj4426").trigger('SCEventShow');
$("#obj4422").trigger('SCEventShow');
$("#obj4420").trigger('SCEventShow');
$("#obj4414").trigger('SCEventShow');
$("#obj4416").trigger('SCEventShow');
$("#obj4418").trigger('SCEventShow');
$("#obj4603").trigger('SCEventShow');
$("#obj4659").trigger('SCEventShow');
$("#obj13611").trigger('SCEventShow');
$("#obj13582").trigger('SCEventShow');
$("#obj13604").trigger('SCEventShow');
$("#obj13589").trigger('SCEventShow');
$("#obj13573").trigger('SCEventShow');
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