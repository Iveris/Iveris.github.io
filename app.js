////////// navIcon //////////
const toggleBtn = document.getElementsByClassName('toggleBtn')[0];
const whereToLinks = document.getElementsByClassName('whereTo')[0];

function toggleLinks() { whereToLinks.classList.toggle('active'); }
toggleBtn.addEventListener('click', toggleLinks);
whereToLinks.addEventListener('click', toggleLinks);


////////// Guitar For Kids //////////

const rainbow = ['red', 'orange', 'rgb(1, 147, 30)', 'blue', 'indigo', '#d0d'];
const kidsHeader = "Guitar For Kids!";
const guitar4kids = document.querySelector('#g4k');

// creating spans for each letter
for (let letter in kidsHeader) {
    let span = document.createElement('span');
    span.innerText = kidsHeader[letter];
    guitar4kids.appendChild(span);
}

// changing the color of each letter
const guitar4kidsHeader = document.querySelectorAll('#g4k span');
let count = 0;
for (let i = 0; i < guitar4kidsHeader.length; i++) {
    let temp = guitar4kidsHeader[i];
    if (temp.innerText === ' ') { continue; }
    else { temp.style.color = rainbow[count]; }
    if (count + 1 === rainbow.length) { count = 0; }
    else { count++; }
}

////////// TESTIMONIALS //////////

let testimonials = document.querySelector('#testimonialText');
// testimonials.scrollIntoView(true);
let shuffledTestimonials = [...testimonialTxt];

// Fischer-Yates Randomize Algorithm
function shuffleArr(arrayx) {
    let currentIndex = arrayx.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = arrayx[currentIndex];
        arrayx[currentIndex] = arrayx[randomIndex];
        arrayx[randomIndex] = temporaryValue;
    }
}

shuffleArr(shuffledTestimonials);
let currentTestimonial = 0;

function displayTestimonial() {
    testimonials.innerText = shuffledTestimonials[currentTestimonial];
}
displayTestimonial();

function testBack() {
    currentTestimonial -= 1;
    if (currentTestimonial < 0) { currentTestimonial = shuffledTestimonials.length - 1 };
    displayTestimonial();
}

function testForward() {
    currentTestimonial += 1;
    if (currentTestimonial >= shuffledTestimonials.length) { currentTestimonial = 0 };
    displayTestimonial();
}

const testBackBtn = document.querySelector('#testBack');
const testForwardBtn = document.querySelector('#testForward');
testBackBtn.addEventListener('click', () => { testBack() });
testForwardBtn.addEventListener('click', () => testForward());


let studentPictures = ["img/students/image1.jpeg", "img/students/IMG_8605.jpg", "img/students/MomAndMe.jpg", "img/students/image01.jpg"]
shuffleArr(studentPictures);
const tPix = document.querySelector('.testimonialPix');


for (i = 0; i < studentPictures.length; i++) {
    let newDiv = document.createElement("div");
    let newPic = document.createElement("img");
    newPic.src = studentPictures[i];
    newDiv.append(newPic);
    newDiv.id = `pic${i}`;
    tPix.append(newDiv);
};

const tPixImg = document.querySelectorAll('.testimonialPix img');
const mq920 = window.matchMedia('(min-width: 920px)');

function adjustWindow() {
    if (mq920.matches != true) {
        for (i = 1; i < tPix.childElementCount; i++) {
            tPix.children[i].style.display = "none";
        }
        tPixImg[0].style.maxWidth = "40vw";
        tPixImg[0].style.maxHeight = "40vh";
        testBackBtn.style.display = "none";
        testForwardBtn.style.display = "none";
    }
    else {
        for (i = 1; i < tPix.childElementCount; i++) {
            tPix.children[i].style.display = "";
        }
        tPixImg[0].style.maxWidth = "";
        tPixImg[0].style.maxHeight = "";
        testBackBtn.style.display = "";
        testForwardBtn.style.display = "";
    }
}

mq920.addEventListener('change', adjustWindow);
adjustWindow();
