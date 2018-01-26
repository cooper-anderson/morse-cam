
let press = false;
let pressedCurrently = false;
let stream;

constraints = {
	aspectRatio: false,
	channelCount: false,
	depthFar: false,
	depthNear: false,
	deviceId: false,
	echoCancellation: false,
	facingMode: false,
	focalLengthX: false,
	focalLengthY: false,
	frameRate: false,
	groupId: false,
	height: false,
	latency: false,
	sampleRate: false,
	sampleSize: false,
	videoKind: false,
	volume: false,
	width: false,
	video: true
}

$(window).on("keydown", function(event) {
	if (event.key == ' ' && !press && !pressedCurrently) {
		pressedCurrently = true;
		// setTimeout(function() {
			press = true;
			pressedCurrently = false;
		// }, 250);
		navigator.mediaDevices.getUserMedia(constraints).then(function(s) {stream = s});
	}
});

$(window).on("keyup", function(event) {
	if (event.key == ' ') {
		press = false;
		stream.getTracks().forEach(track => track.stop());
	}
});

// setInterval(function() {
// 	console.log(press);
// })

