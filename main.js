var boxes = document.getElementsByClassName('boxes');
var box = document.getElementsByClassName('box');
var popUpOne = document.getElementsByClassName('one');
var popUpTwo = document.getElementsByClassName('two');
var popUpThree = document.getElementsByClassName('three');
var answers = document.getElementsByClassName('messages');
var restart = document.getElementsByClassName('button');

function highlight () {
    for(i = 0; i < box.length; i++) {
        box[i].classList.toggle('hover');
    }
}

for(i = 0; i < box.length; i++) {
    box[i].addEventListener('mouseenter', highlight);
    box[i].addEventListener('mouseleave', highlight);
}

//Answer #1
function answer1 () {
    answers[0].classList.remove('hide');
}

popUpOne[0].addEventListener("click", answer1);

//Answer #2
function answer2 () {
    answers[1].classList.remove('hide');
}

popUpTwo[0].addEventListener("click", answer2);

//Answer #3
function answer3 () {
    answers[2].classList.remove('hide');
}

popUpThree[0].addEventListener("click", answer3);

//Start over button
function startOver () {
    restart[0].classList.remove('start-over');
}

for(i = 0; i < box.length; i++) {
    box[i].addEventListener("click", startOver);
}
