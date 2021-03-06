const icon = document.querySelector(".icon");
const dropDownBg = document.querySelector(".mobile-dropdown");
const dropDown = document.querySelector(".mobile-links");
const body = document.querySelector('body');
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.head').classList.remove('hide');
    isClicked = false;
    icon.onclick = ()=>{
        dropDown.classList.toggle("show");
        dropDownBg.classList.toggle("black");
        if(!isClicked){
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
            isClicked = true;
            body.style.overflowY = "hidden";
        }else{
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
            isClicked = false;
            body.style.overflowY = "auto";
        }
    }
    checkSlides();
});
function checkSlides(){
    const triggerPoint = window.innerHeight/5 * 4;
    document.querySelectorAll('.image-grid .img').forEach(submain =>{
        const boxTop = submain.getBoundingClientRect().top;
        if(boxTop < triggerPoint){
            submain.classList.remove('hide');
        }
    });
}