////////// navIcon toggle //////////
const toggleBtn = document.getElementsByClassName('toggleBtn')[0];
const whereToLinks = document.getElementsByClassName('whereTo')[0];

function toggleLinks() { whereToLinks.classList.toggle('active'); }
toggleBtn.addEventListener('click', toggleLinks);
whereToLinks.addEventListener('click', toggleLinks);


////////// Building a rainbow "Guitar For Kids!" header //////////

const rainbow = ['red', 'orange', 'yellow', 'blue', 'indigo', 'violet'];
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

