var boxes = document.getElementsByClassName('boxes');
var box = document.getElementsByClassName('box');
var popUp = document.getElementsByClassName('messages');

function highlight () {
    for(i = 0; i < box.length; i++) {
        box[i].classList.toggle('hover');
    }
}

for(i = 0; i < box.length; i++) {
    box[i].addEventListener('mouseenter', highlight);
    box[i].addEventListener('mouseleave', highlight);
}