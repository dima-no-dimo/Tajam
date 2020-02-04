'use strict'

const SLIDE = document.getElementById('slide');
const HEADER = document.getElementById('header'); 

SLIDE.addEventListener('click', (e) => {
	if(!e.target.getAttribute('respectiveClassName')) return
	let inp = SLIDE.querySelectorAll('input');

	HEADER.className = e.target.getAttribute('respectiveClassName');
	inp.forEach(elem => {
		elem.className = 'dot';
	})
	e.target.className = 'activeDot';
});