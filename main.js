
function navClick(text) {
    window.location.href = (window.location.href).split("#")[0] + '#' + text;
}

function replaceLink(link) {
    window.open(link, '_blank');
}

const donateBtn = document.getElementById('donateBtn');

donateBtn.addEventListener('click', function () {
    donateBtn.style.backgroundColor = 'white';
    donateBtn.style.color = 'black'
    donateBtn.innerText = 'People for Animals donation link';
    donateBtn.removeEventListener('click', this);
    donateBtn.addEventListener('click', function () {
        window.location.href = "https://www.peopleforanimalsindia.org/donate";
    });
});

/*const mainTitle = document.getElementById('mainTitle');
var nextIndex = 0;
var convoArr = ['YOU!', 'Yeah, YOU!', "We'd like to make a difference.", "Wouldn't you?", "Well, what're you waiting for?", "Click 'KNOW MORE'.", 'The Umesh Group'];

var interval = setInterval(function () {
    mainTitle.innerText = convoArr[nextIndex];
    nextIndex++;
    if (nextIndex == convoArr.length) {
        clearInterval(interval);
    }
}, 1000);*/
