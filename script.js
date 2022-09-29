let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");
let saturation = document.querySelector('#saturation');
camera_button.addEventListener('click', async function() {
   	let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
	video.srcObject = stream;
});

click_button.addEventListener('click', function() {
   	let ctx = saturation.getContext('2d');
	ctx.drawImage(video, 0, 0, saturation.width, saturation.height);
	ctx.globalCompositeOperation = 'saturation';
	ctx.fillStyle = 'hsl(100%, 150%, 100%)';
	saturation.style.filter = 'contrast(1000000%)';
	ctx.fillRect(0, 0, saturation.width, saturation.height);
	ctx.globalCompositeOperation = "source-over";
	console.trace(ctx)
	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
});

