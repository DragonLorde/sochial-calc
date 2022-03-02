let serv = document.querySelector('.service__column');

var block_show = false;
 
function scrollTracking(){
	if (block_show) {
		return false;
	}
 
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.service').offset().top;
	var eh = $('.service').outerHeight();
	var dh = $(document).height();   
 
	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
		block_show = true;
		
		serv.classList.add('serv_show')
	}
}
 
$(window).scroll(function(){
	scrollTracking();
});
	
$(document).ready(function(){ 
	scrollTracking();
});

let navHide = document.querySelector('.header__nav ol')
let navBtn = document.querySelector('.bar__menu')

window.addEventListener('scroll' , (e) => {
    if(window.pageYOffset > 200) {
        navHide.classList.add('nav__hide')
        navBtn.classList.remove('nav__hide')

    } else {
        navHide.classList.remove('nav__hide')
        navBtn.classList.add('nav__hide')

    }
})