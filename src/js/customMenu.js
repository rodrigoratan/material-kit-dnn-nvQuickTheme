/*jshint esversion: 6 */

const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'));

navExpand.forEach(item => {
	const parent = item.querySelector('.nav-link').text;
	const backLink = `<li class="nav-item">
		<a class="nav-link nav-back-link" href="javascript:;">
			<i class="fas fa-chevron-left mr-1"></i>Back to ` + parent + `
		</a>
	</li>`;
	
	item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink);
	item.querySelector('.nav-expand-link').addEventListener('click', () => item.classList.add('active'));
	item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'));
});

// setup and add overlay
let overlay = document.createElement('div');
overlay.setAttribute('id', 'body-overlay');
document.body.appendChild(overlay).classList.add('d-none');

// target hamburger menu
const responsiveMenu = document.getElementById('nav-mobile');
const bodyOverlay = document.getElementById('body-overlay');

responsiveMenu.addEventListener('click', function() {
	// toggle menu
	document.body.classList.toggle('nav-is-toggled');
	bodyOverlay.classList.toggle('d-none');
});

// if overlay is clicked
bodyOverlay.addEventListener('click', function(e) {
	// toggle menu and overlay
	document.body.classList.toggle('nav-is-toggled');
	bodyOverlay.classList.toggle('d-none');
});