pubcoder.projectID = pubcoder.projectID || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.id = pubcoder.project.id || "12E58D21CC5A4AEEB6229895ABF2FF22";
pubcoder.project.title = pubcoder.project.title || "हाम्रो सेरोफेरो - विषयक्षेत्र ४";
pubcoder.page.id = pubcoder.page.id || 3815;
pubcoder.page.title = pubcoder.page.title || "18";
pubcoder.page.number = pubcoder.page.number || 18;
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
var obj9322_onTap_activeActionGroupIndex = -1;
var obj9322_onTap_runningActionsCount = 0;
var obj9322_onTap_loopCount = 0;
var obj10252_onTap_activeActionGroupIndex = -1;
var obj10252_onTap_runningActionsCount = 0;
var obj10252_onTap_loopCount = 0;
var obj10271_SCEventReadAloudStarted_activeActionGroupIndex = -1;
var obj10271_SCEventReadAloudStarted_runningActionsCount = 0;
var obj10271_SCEventReadAloudStarted_loopCount = 0;
var obj10271_SCEventReadAloudStopped_activeActionGroupIndex = -1;
var obj10271_SCEventReadAloudStopped_runningActionsCount = 0;
var obj10271_SCEventReadAloudStopped_loopCount = 0;
var obj10242_onTap_activeActionGroupIndex = -1;
var obj10242_onTap_runningActionsCount = 0;
var obj10242_onTap_loopCount = 0;
var obj10267_onTap_activeActionGroupIndex = -1;
var obj10267_onTap_runningActionsCount = 0;
var obj10267_onTap_loopCount = 0;
var obj10394_onTap_activeActionGroupIndex = -1;
var obj10394_onTap_runningActionsCount = 0;
var obj10394_onTap_loopCount = 0;
var obj10397_onTap_activeActionGroupIndex = -1;
var obj10397_onTap_runningActionsCount = 0;
var obj10397_onTap_loopCount = 0;
var obj10233_onTap_activeActionGroupIndex = -1;
var obj10233_onTap_runningActionsCount = 0;
var obj10233_onTap_loopCount = 0;
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
		
obj9322_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9322_onTap_activeActionGroupIndex = -1;
		$("#obj9322").trigger("obj9322_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9322) {
				console.warn("de-queueing event obj9322." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9322").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9322_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_9326();
function runjs_9326() {
	window.obj9322_onTap_runningActionsCount = obj9322_onTap_runningActionsCount + 1;

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
		window.obj9322_onTap_runningActionsCount = window.obj9322_onTap_runningActionsCount - 1;
if (window.obj9322_onTap_runningActionsCount < 0) {
	window.obj9322_onTap_runningActionsCount = 0;
} else if (window.obj9322_onTap_runningActionsCount == 0) {
	obj9322_onTap_actionGroup1();
}
	}, 1);
}







};
obj9322_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9322_onTap_activeActionGroupIndex = -1;
		$("#obj9322").trigger("obj9322_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9322) {
				console.warn("de-queueing event obj9322." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9322").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9322_onTap_activeActionGroupIndex = 1;
	






















};
obj10252_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10252_onTap_activeActionGroupIndex = -1;
		$("#obj10252").trigger("obj10252_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10252) {
				console.warn("de-queueing event obj10252." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10252").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10252_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_10256();
function runjs_10256() {
	window.obj10252_onTap_runningActionsCount = obj10252_onTap_runningActionsCount + 1;

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
		window.obj10252_onTap_runningActionsCount = window.obj10252_onTap_runningActionsCount - 1;
if (window.obj10252_onTap_runningActionsCount < 0) {
	window.obj10252_onTap_runningActionsCount = 0;
} else if (window.obj10252_onTap_runningActionsCount == 0) {
	obj10252_onTap_actionGroup1();
}
	}, 1);
}







};
obj10252_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10252_onTap_activeActionGroupIndex = -1;
		$("#obj10252").trigger("obj10252_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10252) {
				console.warn("de-queueing event obj10252." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10252").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10252_onTap_activeActionGroupIndex = 1;
	






















};
obj10271_SCEventReadAloudStarted_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10271_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj10271").trigger("obj10271_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10271) {
				console.warn("de-queueing event obj10271." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10271").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10271_SCEventReadAloudStarted_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj10271 
switchImage_10275();
function switchImage_10275() {
	window.obj10271_SCEventReadAloudStarted_runningActionsCount = obj10271_SCEventReadAloudStarted_runningActionsCount + 1;

	var targetObjectId = "#obj10271";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj10271_img";
	var fromImagePath = "../images/obj10271_image.png";
	var toImagePath = "../images/switch37_to.png";
	var switchHelperId = "switchHelper174"
	var switchHelperRef = "#switchHelper174"
	var switchId = "174";
	var toSwitchId = "174";
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
				window.obj10271_SCEventReadAloudStarted_runningActionsCount = window.obj10271_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj10271_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj10271_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj10271_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj10271_SCEventReadAloudStarted_actionGroup1();
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
obj10271_SCEventReadAloudStarted_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10271_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj10271").trigger("obj10271_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10271) {
				console.warn("de-queueing event obj10271." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10271").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10271_SCEventReadAloudStarted_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_10276();
function runjs_10276() {
	window.obj10271_SCEventReadAloudStarted_runningActionsCount = obj10271_SCEventReadAloudStarted_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over Pressed');
}
	
	setTimeout(function() {
		window.obj10271_SCEventReadAloudStarted_runningActionsCount = window.obj10271_SCEventReadAloudStarted_runningActionsCount - 1;
if (window.obj10271_SCEventReadAloudStarted_runningActionsCount < 0) {
	window.obj10271_SCEventReadAloudStarted_runningActionsCount = 0;
} else if (window.obj10271_SCEventReadAloudStarted_runningActionsCount == 0) {
	obj10271_SCEventReadAloudStarted_actionGroup2();
}
	}, 1);
}







};
obj10271_SCEventReadAloudStarted_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10271_SCEventReadAloudStarted_activeActionGroupIndex = -1;
		$("#obj10271").trigger("obj10271_SCEventReadAloudStarted_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10271) {
				console.warn("de-queueing event obj10271." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10271").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10271_SCEventReadAloudStarted_activeActionGroupIndex = 2;
	






















};
obj10271_SCEventReadAloudStopped_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10271_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj10271").trigger("obj10271_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10271) {
				console.warn("de-queueing event obj10271." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10271").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10271_SCEventReadAloudStopped_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj10271 
switchImage_10281();
function switchImage_10281() {
	window.obj10271_SCEventReadAloudStopped_runningActionsCount = obj10271_SCEventReadAloudStopped_runningActionsCount + 1;

	var targetObjectId = "#obj10271";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = false;
	var imgObjId = "#obj10271_img";
	var fromImagePath = "../images/obj10271_image.png";
	var toImagePath = "../images/obj10271_image.png";
	var switchHelperId = "switchHelper175"
	var switchHelperRef = "#switchHelper175"
	var switchId = "175";
	var toSwitchId = "175";
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
				window.obj10271_SCEventReadAloudStopped_runningActionsCount = window.obj10271_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj10271_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj10271_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj10271_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj10271_SCEventReadAloudStopped_actionGroup1();
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
obj10271_SCEventReadAloudStopped_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10271_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj10271").trigger("obj10271_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10271) {
				console.warn("de-queueing event obj10271." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10271").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10271_SCEventReadAloudStopped_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_10282();
function runjs_10282() {
	window.obj10271_SCEventReadAloudStopped_runningActionsCount = obj10271_SCEventReadAloudStopped_runningActionsCount + 1;

	const button = document.querySelector('.vo-btn');
if (button) {
    button.setAttribute('aria-label', 'Voice Over');
}
	
	setTimeout(function() {
		window.obj10271_SCEventReadAloudStopped_runningActionsCount = window.obj10271_SCEventReadAloudStopped_runningActionsCount - 1;
if (window.obj10271_SCEventReadAloudStopped_runningActionsCount < 0) {
	window.obj10271_SCEventReadAloudStopped_runningActionsCount = 0;
} else if (window.obj10271_SCEventReadAloudStopped_runningActionsCount == 0) {
	obj10271_SCEventReadAloudStopped_actionGroup2();
}
	}, 1);
}







};
obj10271_SCEventReadAloudStopped_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10271_SCEventReadAloudStopped_activeActionGroupIndex = -1;
		$("#obj10271").trigger("obj10271_SCEventReadAloudStopped_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10271) {
				console.warn("de-queueing event obj10271." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10271").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10271_SCEventReadAloudStopped_activeActionGroupIndex = 2;
	






















};
obj10242_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10242_onTap_activeActionGroupIndex = -1;
		$("#obj10242").trigger("obj10242_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10242) {
				console.warn("de-queueing event obj10242." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10242").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10242_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_10244();
function runjs_10244() {
	window.obj10242_onTap_runningActionsCount = obj10242_onTap_runningActionsCount + 1;

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
		window.obj10242_onTap_runningActionsCount = window.obj10242_onTap_runningActionsCount - 1;
if (window.obj10242_onTap_runningActionsCount < 0) {
	window.obj10242_onTap_runningActionsCount = 0;
} else if (window.obj10242_onTap_runningActionsCount == 0) {
	obj10242_onTap_actionGroup1();
}
	}, 1);
}







};
obj10242_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10242_onTap_activeActionGroupIndex = -1;
		$("#obj10242").trigger("obj10242_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10242) {
				console.warn("de-queueing event obj10242." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10242").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10242_onTap_activeActionGroupIndex = 1;
	






















};
obj10267_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10267_onTap_activeActionGroupIndex = -1;
		$("#obj10267").trigger("obj10267_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10267) {
				console.warn("de-queueing event obj10267." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10267").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10267_onTap_activeActionGroupIndex = 0;
	



//	action: switchImage 
//	target: obj10267 
switchImage_10269();
function switchImage_10269() {
	window.obj10267_onTap_runningActionsCount = obj10267_onTap_runningActionsCount + 1;

	var targetObjectId = "#obj10267";
	var targetObject = $(targetObjectId)[0];
	var allowBackAndForth = true;
	var imgObjId = "#obj10267_img";
	var fromImagePath = "../images/obj10267_image.png";
	var toImagePath = "../images/switch39_to.png";
	var switchHelperId = "switchHelper176"
	var switchHelperRef = "#switchHelper176"
	var switchId = "176";
	var toSwitchId = "176";
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
				window.obj10267_onTap_runningActionsCount = window.obj10267_onTap_runningActionsCount - 1;
if (window.obj10267_onTap_runningActionsCount < 0) {
	window.obj10267_onTap_runningActionsCount = 0;
} else if (window.obj10267_onTap_runningActionsCount == 0) {
	obj10267_onTap_actionGroup1();
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
obj10267_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10267_onTap_activeActionGroupIndex = -1;
		$("#obj10267").trigger("obj10267_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10267) {
				console.warn("de-queueing event obj10267." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10267").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10267_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_10270();
function runjs_10270() {
	window.obj10267_onTap_runningActionsCount = obj10267_onTap_runningActionsCount + 1;

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
		window.obj10267_onTap_runningActionsCount = window.obj10267_onTap_runningActionsCount - 1;
if (window.obj10267_onTap_runningActionsCount < 0) {
	window.obj10267_onTap_runningActionsCount = 0;
} else if (window.obj10267_onTap_runningActionsCount == 0) {
	obj10267_onTap_actionGroup2();
}
	}, 1);
}







};
obj10267_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10267_onTap_activeActionGroupIndex = -1;
		$("#obj10267").trigger("obj10267_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10267) {
				console.warn("de-queueing event obj10267." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10267").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10267_onTap_activeActionGroupIndex = 2;
	






















};
obj10394_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10394_onTap_activeActionGroupIndex = -1;
		$("#obj10394").trigger("obj10394_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10394) {
				console.warn("de-queueing event obj10394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10394_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_10396();
function goToPage_10396() {
	window.obj10394_onTap_runningActionsCount = obj10394_onTap_runningActionsCount + 1;
	$("#anchor177")[0].click();
	window.obj10394_onTap_runningActionsCount = window.obj10394_onTap_runningActionsCount - 1;
if (window.obj10394_onTap_runningActionsCount < 0) {
	window.obj10394_onTap_runningActionsCount = 0;
} else if (window.obj10394_onTap_runningActionsCount == 0) {
	obj10394_onTap_actionGroup1();
}
}





















};
obj10394_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10394_onTap_activeActionGroupIndex = -1;
		$("#obj10394").trigger("obj10394_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10394) {
				console.warn("de-queueing event obj10394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10394_onTap_activeActionGroupIndex = 1;
	






















};
obj10397_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10397_onTap_activeActionGroupIndex = -1;
		$("#obj10397").trigger("obj10397_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10397) {
				console.warn("de-queueing event obj10397." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10397").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10397_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_10399();
function goToPage_10399() {
	window.obj10397_onTap_runningActionsCount = obj10397_onTap_runningActionsCount + 1;
	$("#anchor178")[0].click();
	window.obj10397_onTap_runningActionsCount = window.obj10397_onTap_runningActionsCount - 1;
if (window.obj10397_onTap_runningActionsCount < 0) {
	window.obj10397_onTap_runningActionsCount = 0;
} else if (window.obj10397_onTap_runningActionsCount == 0) {
	obj10397_onTap_actionGroup1();
}
}





















};
obj10397_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10397_onTap_activeActionGroupIndex = -1;
		$("#obj10397").trigger("obj10397_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10397) {
				console.warn("de-queueing event obj10397." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10397").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10397_onTap_activeActionGroupIndex = 1;
	






















};
obj10233_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj10233_onTap_activeActionGroupIndex = -1;
		$("#obj10233").trigger("obj10233_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10233) {
				console.warn("de-queueing event obj10233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10233_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_10236();
function runjs_10236() {
	window.obj10233_onTap_runningActionsCount = obj10233_onTap_runningActionsCount + 1;

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
		window.obj10233_onTap_runningActionsCount = window.obj10233_onTap_runningActionsCount - 1;
if (window.obj10233_onTap_runningActionsCount < 0) {
	window.obj10233_onTap_runningActionsCount = 0;
} else if (window.obj10233_onTap_runningActionsCount == 0) {
	obj10233_onTap_actionGroup1();
}
	}, 1);
}







};
obj10233_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj10233_onTap_activeActionGroupIndex = -1;
		$("#obj10233").trigger("obj10233_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 10233) {
				console.warn("de-queueing event obj10233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj10233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj10233_onTap_activeActionGroupIndex = 1;
	






















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





























































































/*
 *
 *   obj9322: Event Touch Down
 *
 */
$("#obj9322").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj9322_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9322_onTap is still running");
	return;
}
var obj9322_onTap_runningActionsCount = 0;
var obj9322_onTap_loopCount = 0;
obj9322_onTap_actionGroup0();
});








































/*
 *
 *   obj10252: Event Touch Down
 *
 */
$("#obj10252").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10252_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10252_onTap is still running");
	return;
}
var obj10252_onTap_runningActionsCount = 0;
var obj10252_onTap_loopCount = 0;
obj10252_onTap_actionGroup0();
});
























/*
 *
 *   obj10271: Event SCEventReadAloudStarted
 *
 */
$("#obj10271").bind("SCEventReadAloudStarted", function(event) {
	if (window.obj10271_SCEventReadAloudStarted_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10271_SCEventReadAloudStarted is still running");
	return;
}
var obj10271_SCEventReadAloudStarted_runningActionsCount = 0;
var obj10271_SCEventReadAloudStarted_loopCount = 0;
obj10271_SCEventReadAloudStarted_actionGroup0();
});
/*
 *
 *   obj10271: Event SCEventReadAloudStopped
 *
 */
$("#obj10271").bind("SCEventReadAloudStopped", function(event) {
	if (window.obj10271_SCEventReadAloudStopped_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10271_SCEventReadAloudStopped is still running");
	return;
}
var obj10271_SCEventReadAloudStopped_runningActionsCount = 0;
var obj10271_SCEventReadAloudStopped_loopCount = 0;
obj10271_SCEventReadAloudStopped_actionGroup0();
});





/*
 *
 *   obj10242: Event Touch Down
 *
 */
$("#obj10242").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10242_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10242_onTap is still running");
	return;
}
var obj10242_onTap_runningActionsCount = 0;
var obj10242_onTap_loopCount = 0;
obj10242_onTap_actionGroup0();
});










/*
 *
 *   obj10267: Event Touch Down
 *
 */
$("#obj10267").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10267_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10267_onTap is still running");
	return;
}
var obj10267_onTap_runningActionsCount = 0;
var obj10267_onTap_loopCount = 0;
obj10267_onTap_actionGroup0();
});










/*
 *
 *   obj10394: Event Touch Down
 *
 */
$("#obj10394").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10394_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10394_onTap is still running");
	return;
}
var obj10394_onTap_runningActionsCount = 0;
var obj10394_onTap_loopCount = 0;
obj10394_onTap_actionGroup0();
});










/*
 *
 *   obj10397: Event Touch Down
 *
 */
$("#obj10397").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10397_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10397_onTap is still running");
	return;
}
var obj10397_onTap_runningActionsCount = 0;
var obj10397_onTap_loopCount = 0;
obj10397_onTap_actionGroup0();
});










/*
 *
 *   obj10233: Event Touch Down
 *
 */
$("#obj10233").bind(PubCoder.Events.Tap + " keydown", function(event) {
	if (event.type === "keydown" && event.key !== "Enter") return;
	event.preventDefault();
	if (window.obj10233_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj10233_onTap is still running");
	return;
}
var obj10233_onTap_runningActionsCount = 0;
var obj10233_onTap_loopCount = 0;
obj10233_onTap_actionGroup0();
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
	
$("#obj3920").trigger('SCEventShow');
$("#obj4552").trigger('SCEventShow');
$("#obj4550").trigger('SCEventShow');
$("#obj4554").trigger('SCEventShow');
$("#obj4324").trigger('SCEventShow');
$("#obj4410").trigger('SCEventShow');
$("#obj4960").trigger('SCEventShow');
$("#obj9322").trigger('SCEventShow');
$("#obj5060").trigger('SCEventShow');
$("#obj10271").trigger('SCEventShow');
$("#obj10242").trigger('SCEventShow');
$("#obj10394").trigger('SCEventShow');
$("#obj10397").trigger('SCEventShow');
$("#obj10233").trigger('SCEventShow');
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
})()


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
const nextPageBtn = document.querySelector('.next-page-btn');
const prevPageBtn = document.querySelector('.prev-page-btn');
const isLastPage =
  pubcoder.page.number === Object.keys(pubcoder.pages).length;
if (isLastPage) {
  console.log('Last page');
  nextPageBtn.classList.add('disabled');
  nextPageBtn.setAttribute('aria-disabled', 'true');
  nextPageBtn.setAttribute('aria-label', 'Next Page : End of Chapter');
  nextPageBtn.style.pointerEvents = 'none';
} else {
  console.log('not last page');
  nextPageBtn.classList.remove('disabled');
  nextPageBtn.removeAttribute('aria-disabled');
  nextPageBtn.setAttribute('aria-label', 'Next Page');
  nextPageBtn.style.pointerEvents = '';
}
if(pubcoder.page.number==1){
console.log('First page');
  prevPageBtn.classList.add('disabled');
  prevPageBtn.setAttribute('aria-disabled', 'true');
  prevPageBtn.setAttribute('aria-label', 'Previous Page : First page');
  prevPageBtn.style.pointerEvents = 'none';
} else {
  console.log('not last page');
  prevPageBtn.classList.remove('disabled');
  prevPageBtn.removeAttribute('aria-disabled');
  prevPageBtn.setAttribute('aria-label', 'Previous Page');
  prevPageBtn.style.pointerEvents = '';
}

});