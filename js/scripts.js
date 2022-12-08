/*!
* Start Bootstrap - New Age v6.0.6 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

let image = document.querySelector("#parts");
let text = document.querySelectorAll(".parts-text");
let textArr = Array.from(text)
var opacity = 0;
var intervalID = 0;
let pNav = document.querySelector('#p-nav');

function fade(element) {
    setInterval(show, 200)
    function show () {
        opacity = Number(window.getComputedStyle(element)
        .getPropertyValue("opacity"));
        if (opacity < 1) {
        opacity = opacity + 0.1;
        element.style.opacity = opacity
        } else {
        clearInterval(intervalID);
        }
    }
    
}

document.addEventListener("wheel", () => {
   
        textArr.forEach(element => {
            fade(element);
        });
    
})

// pNav.addEventListener ('click', () => {
    
    
  
// }
// )
// for (const el of textArr) {
    //     el.style.display = "block"
    // }
     
    // text.style.display = "block";