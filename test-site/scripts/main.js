let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1984-toyota-mr2.jpg') {
      myImage.setAttribute ('src','images/mk2-toyota-mr2.jpg');
    } 
    else {
      myImage.setAttribute ('src','images/1984-toyota-mr2.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = '1984 toyota mr2 mk1: the most 80s thing that ever existed in the 80s, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
    } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '1984 toyota mr2 mk1: the most 80s thing that ever existed in the 80s, ' + storedName;
    }

  myButton.onclick = function() {
    setUserName();
  }