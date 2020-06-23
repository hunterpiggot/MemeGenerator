// Selecting all html
const form = document.getElementById('#myForm');
const h2 = document.querySelector('h2');
const subButton = document.querySelector('#submitButton');
let imgDiv = document.querySelector('#imgBoard');

//preventing default reload
subButton.addEventListener('click', function(e) {
	e.preventDefault();
});

//loading meme
function getInputValue() {
	let topText = document.getElementById('topText').value;
	let bottomText = document.getElementById('bottomText').value;
	let imgInput = document.getElementById('link').value;
	let imageDiv = document.createElement('div');
	let img = document.createElement('IMG');
	let br = document.createElement('br');

	//Adding Image to Page
	imageDiv.classList.add('imageDiv');
	img.setAttribute('src', imgInput);
	img.setAttribute('width', '350');
	img.setAttribute('height', '350');
	imageDiv.appendChild(img);
	imgDiv.appendChild(imageDiv);

	// Adding Text at the Top
	let topImg = document.createElement('div');
	topImg.classList.add('top-text');
	topImg.innerText = topText;
	imageDiv.append(topImg);

	// Adding Bottom Text
	let bottomImg = document.createElement('div');
	bottomImg.classList.add('bottom-text');
	bottomImg.innerText = bottomText;
	imageDiv.append(bottomImg);
	imgDiv.appendChild(br);
}

// https://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2019/08/22210026/Speedhunters_Silvia_S15_Alexander_Turnball_9042.jpg
