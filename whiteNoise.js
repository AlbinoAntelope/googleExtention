var myAudio = new Audio();        // create the audio object
myAudio.src = "noise.mp3"; // assign the audio file to it

var isPlaying = false;

function playMP3 () {
	myAudio.play();
	isPlaying = true;
	chrome.browserAction.setBadgeText({ text: "on"});
	chrome.browserAction.setBadgeBackgroundColor({ color: [0, 255, 0, 255]});
}

function pauseMP3 () {
	myAudio.pause();
	isPlaying = false;
	chrome.browserAction.setBadgeText({ text: "off"});
	chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255]});
}

myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    playMP3();
}, false);

chrome.browserAction.onClicked.addListener(function () { //Fired when User Clicks ICON
	if (isPlaying) {
		pauseMP3();
	} else{
		playMP3();
	};
     
});