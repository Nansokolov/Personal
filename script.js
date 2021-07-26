let submitButton = document.querySelector('#submit-button');
console.log(submitButton);

//For topnav
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topnav").style.top = "0";
  } else {
    document.getElementById("topnav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


function clickListener(event){
	event.preventDefault();
	let nameInput = document.querySelector('#name');
	let emailInput = document.querySelector('#email');
	let messageInput = document.querySelector('#textarea');

	let nameText = nameInput.value;
	let emailText = emailInput.value;
	let messageText = messageInput.value;
	let counter = 0;

	document.getElementById('error-email-message').style.color = "#dae1e7";
	document.getElementById('error-msg-message').style.color = "#dae1e7";
	document.getElementById('error-name-message').style.color = "#dae1e7";

	if(validateEmail(emailText) !== true) {
		document.getElementById('error-email-message').style.color = "red";
    	document.getElementById('error-email-message').innerHTML = "Please enter correct email.";
    	counter++;
    }
    if (messageText.trim() == '' || messageText.length <=20) {
    	document.getElementById('error-msg-message').style.color = "red";
    	document.getElementById('error-msg-message').innerHTML = "Please enter at least 20 symbols.";
    	counter++
    }
    if (nameText.trim() == '') {
    	document.getElementById('error-name-message').style.color = "red";
    	document.getElementById('error-name-message').innerHTML = "Please enter your name."
    	counter++
    }
    if (counter!=0) {return false}
  
  console.log('Thanks for your message');
}

function myFunction() {
  document.getElementById("error-email-message").style.color = "#ff0000";
  document.getElementById("error-msg-message").style.color = "magenta";
  document.getElementById("myP2").style.color = "blue";
  document.getElementById("myDiv").style.color = "lightblue";
}

function validateEmail(email) {
    const eml = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return eml.test(String(email).toLowerCase());
}

submitButton.addEventListener('click', clickListener);

String.prototype.trim = function() {
      return this.replace(/^\s+|\s+$/g,"");
    }

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function openTopNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeTopNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function submitfunc(){
  alert("Unfortunatelly, form doesnot work currently (due to hosting on GitHub). Please try to reach me by phone or email.");
}


