let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");
let saturation = document.querySelector('#saturation');
camera_button.addEventListener('click', async function() {
   	let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
	video.srcObject = stream;
});

function updateFrame() {
	let h = '100';
	let s = '100';
	let l = '100';
   	let saturationContext = saturation.getContext('2d');
	saturationContext.drawImage(video, 0, 0, saturation.width, saturation.height);
	saturationContext.globalCompositeOperation = 'saturation';
	saturationContext.fillStyle = `hsl(${h}%, ${s}%, ${l}%)`;
	saturation.style.filter = 'contrast(10000%)';
	saturationContext.fillRect(0, 0, saturation.width, saturation.height);
	saturationContext.globalCompositeOperation = "source-over";
	console.trace(saturationContext);
	let canvasContext = canvas.getContext('2d');
	canvasContext.drawImage(video, 0, 0, canvas.width, canvas.height);
	canvasContext.globalCompositeOperation = 'saturation';
	canvasContext.fillStyle = `hsl(${h}%, ${s}%, ${l}%)`;
	canvasContext.fillRect(0, 0, canvas.width, canvas.height);
	canvasContext.globalCompositeOperation = 'source-over';
}
setInterval(() => {
	window.requestAnimationFrame(() => {
		updateFrame();
	});
});

