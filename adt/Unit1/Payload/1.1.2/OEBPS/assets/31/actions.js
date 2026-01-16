pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "Hamro Serofero : Unit 1";
pubcoder.page.id = pubcoder.page.id || 1495;
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
var obj6758_onTap_activeActionGroupIndex = -1;
var obj6758_onTap_runningActionsCount = 0;
var obj6758_onTap_loopCount = 0;
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
	
$("#obj2246-wdgt").SCWidget().init();  
    
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
		
obj6758_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6758_onTap_activeActionGroupIndex = -1;
		$("#obj6758").trigger("obj6758_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6758) {
				console.warn("de-queueing event obj6758." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6758").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6758_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6762();
function runjs_6762() {
	window.obj6758_onTap_runningActionsCount = obj6758_onTap_runningActionsCount + 1;

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
		window.obj6758_onTap_runningActionsCount = window.obj6758_onTap_runningActionsCount - 1;
if (window.obj6758_onTap_runningActionsCount < 0) {
	window.obj6758_onTap_runningActionsCount = 0;
} else if (window.obj6758_onTap_runningActionsCount == 0) {
	obj6758_onTap_actionGroup1();
}
	}, 1);
}







};
obj6758_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6758_onTap_activeActionGroupIndex = -1;
		$("#obj6758").trigger("obj6758_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6758) {
				console.warn("de-queueing event obj6758." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6758").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6758_onTap_activeActionGroupIndex = 1;
	






















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
	var switchHelperId = "switchHelper404"
	var switchHelperRef = "#switchHelper404"
	var switchId = "404";
	var toSwitchId = "404";
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
	var switchHelperId = "switchHelper405"
	var switchHelperRef = "#switchHelper405"
	var switchId = "405";
	var toSwitchId = "405";
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
	var switchHelperId = "switchHelper406"
	var switchHelperRef = "#switchHelper406"
	var switchId = "406";
	var toSwitchId = "406";
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
	$("#anchor407")[0].click();
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
	$("#anchor408")[0].click();
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
 *   obj6758: Event Touch Down
 *
 */
$("#obj6758").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj6758_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6758_onTap is still running");
	return;
}
var obj6758_onTap_runningActionsCount = 0;
var obj6758_onTap_loopCount = 0;
obj6758_onTap_actionGroup0();
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
	
$("#obj2263").trigger('SCEventShow');
$("#obj2539").trigger('SCEventShow');
$("#obj2246").trigger('SCEventShow');
$("#obj2260").trigger('SCEventShow');
$("#obj2255").trigger('SCEventShow');
$("#obj4522").trigger('SCEventShow');
$("#obj6758").trigger('SCEventShow');
$("#obj4778").trigger('SCEventShow');
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