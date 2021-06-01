const aboutMeBTN = document.getElementById('aboutMeBTN');
const interestContainer = document.querySelector('.interestcontainer');
const socials = document.querySelectorAll('.socialIcon');
const toggle = document.querySelector('.toggle');
const mainPic = document.querySelector('.mainPic');
const enterBTN = document.querySelector('.enterBTN');
const body = document.body;
//Object selector 


body.onload = function() {
    mainPic.style.opacity = 1;
    enterBTN.style.opacity = 1;
}

aboutMeBTN.addEventListener('click', function (e) {
        showMeInterests(e);
        showMyMenu();
})
//Event Listener^


function showMeInterests(e) {
    aboutMeBTN.style.opacity = 0;
    interestContainer.style.opacity = 100;
    e.preventDefault();
}
//Change opacity function 

function showMyMenu() {
    socials.forEach(function(target) {
        target.style.opacity = 1;
    });
    toggle.style.opacity = 1;
}

