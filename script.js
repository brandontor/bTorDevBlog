const aboutMeBTN = document.getElementById('aboutMeBTN')
const interestContainer = document.querySelector('.interestcontainer')

console.log(interestContainer)
//Object selector 


aboutMeBTN.addEventListener('click', showMeInterests )
//Event Listener


function showMeInterests(e) {
    aboutMeBTN.style.opacity = 0;
    interestContainer.style.opacity = 100;

    e.preventDefault();
}
//Change opacity function 

//To-do
//Function to set display on btn 0
//set timeout function to change opacity on picture container
//change styling on interest container to have the hover state more noticeable