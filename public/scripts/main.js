const myHeading = document.querySelector('h1');
myHeading.textContent = 'Verse For The Season';

let myImage = document.querySelector('img');
let myAltText = document.getElementById("verse");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/psalms-105-37.jpg') {
        myImage.setAttribute ('src','images/psalms-91-7.jpg');
        myAltText.innerHTML = "A thousand may fall at your side, ten thousand at your right hand, but it will not come near you. - " +
            "<a " +
            "href=\"https://www.biblegateway.com/passage/?search=Psalm+91%3A7&version=ESV\" " +
            "title='Bible Gateway Online Bible' " +
            "target='_blank'>" +
            "Psalms 91:7 (ESV)" +
            "</a>";
    } else {
        myImage.setAttribute ('src','images/psalms-105-37.jpg');
        myAltText.innerHTML = "He brought them forth also with silver and gold and there was not one feeble person among their tribes. - " +
            "<a " +
            "href=\"https://www.biblegateway.com/passage/?search=Psalm+105%3A37&version=KJV\" " +
            "title='Bible Gateway Online Bible' " +
            "target='_blank'>" +
            "Psalms 105:37 (KJV)" +
            "</a>";
    }
}