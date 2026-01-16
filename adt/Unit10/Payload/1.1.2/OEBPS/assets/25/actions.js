pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serofero - Unit 10";
pubcoder.page.id = pubcoder.page.id || 3822;
pubcoder.page.title = pubcoder.page.title || "25";
pubcoder.page.number = pubcoder.page.number || 25;
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
var obj13868_onTap_activeActionGroupIndex = -1;
var obj13868_onTap_runningActionsCount = 0;
var obj13868_onTap_loopCount = 0;
var obj13887_SCEventReadAloudStarted_activeActionGroupIndex = -1;
var obj13887_SCEventReadAloudStarted_runningActionsCount = 0;
var obj13887_SCEventReadAloudStarted_loopCount = 0;
var obj13887_SCEventReadAloudStopped_activeActionGroupIndex = -1;
var obj13887_SCEventReadAloudStopped_runningActionsCount = 0;
var obj13887_SCEventReadAloudStopped_loopCount = 0;
var obj13858_onTap_activeActionGroupIndex = -1;
var obj13858_onTap_runningActionsCount = 0;
var obj13858_onTap_loopCount = 0;
var obj13883_onTap_activeActionGroupIndex = -1;
var obj13883_onTap_runningActionsCount = 0;
var obj13883_onTap_loopCount = 0;
var obj13880_onTap_activeActionGroupIndex = -1;
var obj13880_onTap_runningActionsCount = 0;
var obj13880_onTap_loopCount = 0;
var obj13865_onTap_activeActionGroupIndex = -1;
var obj13865_onTap_runningActionsCount = 0;
var obj13865_onTap_loopCount = 0;
var obj13849_onTap_activeActionGroupIndex = -1;
var obj13849_onTap_runningActionsCount = 0;
var obj13849_onTap_loopCount = 0;
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
		
obj13868_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13868_onTap_activeActionGroupIndex = -1;
		$("#obj13868").trigger("obj13868_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13868) {
				console.warn("de-queueing event obj13868." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13868").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13868_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_13872();
function runjs_13872() {
	window.obj13868_onTap_runningActionsCount = obj13868_onTap_runningActionsCount + 1;

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
		window.obj13868_onTap_runningActionsCount = window.obj13868_onTap_runningActionsCount - 1;
if (window.obj13868_onTap_runningActionsCount < 0) {
	window.obj13868_onTap_runningActionsCount = 0;
} else if (window.obj13868_onTap_runningActionsCount == 0) {
	obj13868_onTap_actionGroup1();
}
	}, 1);
}







};
obj13868_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13868_onTap_activeActionGroupIndex = -1;
		$("#obj13868").trigger("obj13868_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13868) {
				console.warn("de-queueing event obj13868." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13868").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13868_onTap_activeActionGroupIndex = 1;
	






















};
obj13887_SCEventReadAloudStarted_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13887_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj13887").trigger("obj13887_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13887) {
				console.warn("de-queueing event obj13887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13887_SCEventReadAloudStarted_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj13887 
switchImage_13891();
function switchImage_13891() {
	window.obj13887_SCEventReadAloudStarted_runningActionsCount = obj13887_SCEventReadAloudStarted_runningActionsCount + 1;

	var targetObjectId = "#obj13887";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj13887_img";
	var fromImagePath = "../images/obj13887_image.png";
	var toImagePath = "../images/switch35_to.png";
	var switchHelperId = "switchHelper252"
	var switchHelperRef = "#switchHelper252"
	var switchId = "252";
	var toSwitchId = "252";
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
				window.obj13887_SCEventReadAloudStarted_runningActionsCount = window.obj13887_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj13887_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj13887_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj13887_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj13887_SCEventReadAloudStarted_actionGroup1();
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
obj13887_SCEventReadAloudStarted_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13887_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj13887").trigger("obj13887_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13887) {
				console.warn("de-queueing event obj13887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13887_SCEventReadAloudStarted_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_13892();
function runjs_13892() {
	window.obj13887_SCEventReadAloudStarted_runningActionsCount = obj13887_SCEventReadAloudStarted_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over Pressed');
}
	
	setTimeout(function() {
		window.obj13887_SCEventReadAloudStarted_runningActionsCount = window.obj13887_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj13887_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj13887_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj13887_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj13887_SCEventReadAloudStarted_actionGroup2();
}
	}, 1);
}







};
obj13887_SCEventReadAloudStarted_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13887_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj13887").trigger("obj13887_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13887) {
				console.warn("de-queueing event obj13887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13887_SCEventReadAloudStarted_activeActionGroupIndex = 2;
	






















};
obj13887_SCEventReadAloudStopped_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13887_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj13887").trigger("obj13887_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13887) {
				console.warn("de-queueing event obj13887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13887_SCEventReadAloudStopped_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj13887 
switchImage_13897();
function switchImage_13897() {
	window.obj13887_SCEventReadAloudStopped_runningActionsCount = obj13887_SCEventReadAloudStopped_runningActionsCount + 1;

	var targetObjectId = "#obj13887";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj13887_img";
	var fromImagePath = "../images/obj13887_image.png";
	var toImagePath = "../images/obj13887_image.png";
	var switchHelperId = "switchHelper253"
	var switchHelperRef = "#switchHelper253"
	var switchId = "253";
	var toSwitchId = "253";
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
				window.obj13887_SCEventReadAloudStopped_runningActionsCount = window.obj13887_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj13887_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj13887_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj13887_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj13887_SCEventReadAloudStopped_actionGroup1();
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
obj13887_SCEventReadAloudStopped_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13887_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj13887").trigger("obj13887_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13887) {
				console.warn("de-queueing event obj13887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13887_SCEventReadAloudStopped_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_13898();
function runjs_13898() {
	window.obj13887_SCEventReadAloudStopped_runningActionsCount = obj13887_SCEventReadAloudStopped_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over');
}
	
	setTimeout(function() {
		window.obj13887_SCEventReadAloudStopped_runningActionsCount = window.obj13887_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj13887_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj13887_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj13887_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj13887_SCEventReadAloudStopped_actionGroup2();
}
	}, 1);
}







};
obj13887_SCEventReadAloudStopped_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13887_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj13887").trigger("obj13887_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13887) {
				console.warn("de-queueing event obj13887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13887_SCEventReadAloudStopped_activeActionGroupIndex = 2;
	






















};
obj13858_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13858_onTap_activeActionGroupIndex = -1;
		$("#obj13858").trigger("obj13858_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13858) {
				console.warn("de-queueing event obj13858." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13858").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13858_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_13860();
function runjs_13860() {
	window.obj13858_onTap_runningActionsCount = obj13858_onTap_runningActionsCount + 1;

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
		window.obj13858_onTap_runningActionsCount = window.obj13858_onTap_runningActionsCount - 1;
if (window.obj13858_onTap_runningActionsCount < 0) {
	window.obj13858_onTap_runningActionsCount = 0;
} else if (window.obj13858_onTap_runningActionsCount == 0) {
	obj13858_onTap_actionGroup1();
}
	}, 1);
}







};
obj13858_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13858_onTap_activeActionGroupIndex = -1;
		$("#obj13858").trigger("obj13858_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13858) {
				console.warn("de-queueing event obj13858." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13858").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13858_onTap_activeActionGroupIndex = 1;
	






















};
obj13883_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13883_onTap_activeActionGroupIndex = -1;
		$("#obj13883").trigger("obj13883_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13883) {
				console.warn("de-queueing event obj13883." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13883").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13883_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj13883 
switchImage_13885();
function switchImage_13885() {
	window.obj13883_onTap_runningActionsCount = obj13883_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj13883";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj13883_img";
	var fromImagePath = "../images/obj13883_image.png";
	var toImagePath = "../images/switch37_to.png";
	var switchHelperId = "switchHelper254"
	var switchHelperRef = "#switchHelper254"
	var switchId = "254";
	var toSwitchId = "254";
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
				window.obj13883_onTap_runningActionsCount = window.obj13883_onTap_runningActionsCount - 1;
if (window.obj13883_onTap_runningActionsCount < 0) {
	window.obj13883_onTap_runningActionsCount = 0;
} else if (window.obj13883_onTap_runningActionsCount == 0) {
	obj13883_onTap_actionGroup1();
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
obj13883_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13883_onTap_activeActionGroupIndex = -1;
		$("#obj13883").trigger("obj13883_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13883) {
				console.warn("de-queueing event obj13883." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13883").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13883_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_13886();
function runjs_13886() {
	window.obj13883_onTap_runningActionsCount = obj13883_onTap_runningActionsCount + 1;

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
		window.obj13883_onTap_runningActionsCount = window.obj13883_onTap_runningActionsCount - 1;
if (window.obj13883_onTap_runningActionsCount < 0) {
	window.obj13883_onTap_runningActionsCount = 0;
} else if (window.obj13883_onTap_runningActionsCount == 0) {
	obj13883_onTap_actionGroup2();
}
	}, 1);
}







};
obj13883_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13883_onTap_activeActionGroupIndex = -1;
		$("#obj13883").trigger("obj13883_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13883) {
				console.warn("de-queueing event obj13883." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13883").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13883_onTap_activeActionGroupIndex = 2;
	






















};
obj13880_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13880_onTap_activeActionGroupIndex = -1;
		$("#obj13880").trigger("obj13880_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13880) {
				console.warn("de-queueing event obj13880." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13880").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13880_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13882();
function goToPage_13882() {
	window.obj13880_onTap_runningActionsCount = obj13880_onTap_runningActionsCount + 1;
	$("#anchor255")[0].click();
	window.obj13880_onTap_runningActionsCount = window.obj13880_onTap_runningActionsCount - 1;
if (window.obj13880_onTap_runningActionsCount < 0) {
	window.obj13880_onTap_runningActionsCount = 0;
} else if (window.obj13880_onTap_runningActionsCount == 0) {
	obj13880_onTap_actionGroup1();
}
}





















};
obj13880_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13880_onTap_activeActionGroupIndex = -1;
		$("#obj13880").trigger("obj13880_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13880) {
				console.warn("de-queueing event obj13880." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13880").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13880_onTap_activeActionGroupIndex = 1;
	






















};
obj13865_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13865_onTap_activeActionGroupIndex = -1;
		$("#obj13865").trigger("obj13865_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13865) {
				console.warn("de-queueing event obj13865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13865_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13867();
function goToPage_13867() {
	window.obj13865_onTap_runningActionsCount = obj13865_onTap_runningActionsCount + 1;
	$("#anchor256")[0].click();
	window.obj13865_onTap_runningActionsCount = window.obj13865_onTap_runningActionsCount - 1;
if (window.obj13865_onTap_runningActionsCount < 0) {
	window.obj13865_onTap_runningActionsCount = 0;
} else if (window.obj13865_onTap_runningActionsCount == 0) {
	obj13865_onTap_actionGroup1();
}
}





















};
obj13865_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13865_onTap_activeActionGroupIndex = -1;
		$("#obj13865").trigger("obj13865_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13865) {
				console.warn("de-queueing event obj13865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13865_onTap_activeActionGroupIndex = 1;
	






















};
obj13849_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13849_onTap_activeActionGroupIndex = -1;
		$("#obj13849").trigger("obj13849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13849) {
				console.warn("de-queueing event obj13849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13849_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_13852();
function runjs_13852() {
	window.obj13849_onTap_runningActionsCount = obj13849_onTap_runningActionsCount + 1;

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
		window.obj13849_onTap_runningActionsCount = window.obj13849_onTap_runningActionsCount - 1;
if (window.obj13849_onTap_runningActionsCount < 0) {
	window.obj13849_onTap_runningActionsCount = 0;
} else if (window.obj13849_onTap_runningActionsCount == 0) {
	obj13849_onTap_actionGroup1();
}
	}, 1);
}







};
obj13849_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13849_onTap_activeActionGroupIndex = -1;
		$("#obj13849").trigger("obj13849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13849) {
				console.warn("de-queueing event obj13849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13849_onTap_activeActionGroupIndex = 1;
	






















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





































































































































































































































































































/*
 *
 *   obj13868: Event Touch Down
 *
 */
$("#obj13868").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13868_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13868_onTap is still running");
	return;
}
var obj13868_onTap_runningActionsCount = 0;
var obj13868_onTap_loopCount = 0;
obj13868_onTap_actionGroup0();
});
























/*
 *
 *   obj13887: Event SCEventReadAloudStarted
 *
 */
$("#obj13887").bind("SCEventReadAloudStarted", function(event) {
	if (window.obj13887_SCEventReadAloudStarted_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13887_SCEventReadAloudStarted is still running");
	return;
}
var obj13887_SCEventReadAloudStarted_runningActionsCount = 0;
var obj13887_SCEventReadAloudStarted_loopCount = 0;
obj13887_SCEventReadAloudStarted_actionGroup0();
});
/*
 *
 *   obj13887: Event SCEventReadAloudStopped
 *
 */
$("#obj13887").bind("SCEventReadAloudStopped", function(event) {
	if (window.obj13887_SCEventReadAloudStopped_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13887_SCEventReadAloudStopped is still running");
	return;
}
var obj13887_SCEventReadAloudStopped_runningActionsCount = 0;
var obj13887_SCEventReadAloudStopped_loopCount = 0;
obj13887_SCEventReadAloudStopped_actionGroup0();
});





/*
 *
 *   obj13858: Event Touch Down
 *
 */
$("#obj13858").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13858_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13858_onTap is still running");
	return;
}
var obj13858_onTap_runningActionsCount = 0;
var obj13858_onTap_loopCount = 0;
obj13858_onTap_actionGroup0();
});










/*
 *
 *   obj13883: Event Touch Down
 *
 */
$("#obj13883").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13883_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13883_onTap is still running");
	return;
}
var obj13883_onTap_runningActionsCount = 0;
var obj13883_onTap_loopCount = 0;
obj13883_onTap_actionGroup0();
});










/*
 *
 *   obj13880: Event Touch Down
 *
 */
$("#obj13880").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13880_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13880_onTap is still running");
	return;
}
var obj13880_onTap_runningActionsCount = 0;
var obj13880_onTap_loopCount = 0;
obj13880_onTap_actionGroup0();
});










/*
 *
 *   obj13865: Event Touch Down
 *
 */
$("#obj13865").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13865_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13865_onTap is still running");
	return;
}
var obj13865_onTap_runningActionsCount = 0;
var obj13865_onTap_loopCount = 0;
obj13865_onTap_actionGroup0();
});










/*
 *
 *   obj13849: Event Touch Down
 *
 */
$("#obj13849").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj13849_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13849_onTap is still running");
	return;
}
var obj13849_onTap_runningActionsCount = 0;
var obj13849_onTap_loopCount = 0;
obj13849_onTap_actionGroup0();
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
	
$("#obj4086").trigger('SCEventShow');
$("#obj4312").trigger('SCEventShow');
$("#obj4314").trigger('SCEventShow');
$("#obj4643").trigger('SCEventShow');
$("#obj11702").trigger('SCEventShow');
$("#obj10404").trigger('SCEventShow');
$("#obj10392").trigger('SCEventShow');
$("#obj11706").trigger('SCEventShow');
$("#obj10394").trigger('SCEventShow');
$("#obj10382").trigger('SCEventShow');
$("#obj11708").trigger('SCEventShow');
$("#obj11714").trigger('SCEventShow');
$("#obj10396").trigger('SCEventShow');
$("#obj10384").trigger('SCEventShow');
$("#obj11704").trigger('SCEventShow');
$("#obj11712").trigger('SCEventShow');
$("#obj10386").trigger('SCEventShow');
$("#obj10398").trigger('SCEventShow');
$("#obj11710").trigger('SCEventShow');
$("#obj10400").trigger('SCEventShow');
$("#obj10388").trigger('SCEventShow');
$("#obj11716").trigger('SCEventShow');
$("#obj10402").trigger('SCEventShow');
$("#obj10390").trigger('SCEventShow');
$("#obj10119").trigger('SCEventShow');
$("#obj10195").trigger('SCEventShow');
$("#obj13887").trigger('SCEventShow');
$("#obj13858").trigger('SCEventShow');
$("#obj13880").trigger('SCEventShow');
$("#obj13865").trigger('SCEventShow');
$("#obj13849").trigger('SCEventShow');
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