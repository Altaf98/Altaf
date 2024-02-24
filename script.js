let nav = document.querySelector("header");

window.addEventListener("scroll", function () {
       nav.classList.toggle("scrolled", window.scrollY > 20)
});

function validate_name() {
       let name = document.getElementById('name');

       if (name.value == "") {
              document.getElementById('res-name').innerText = "Please Enter Name";
       } else {
              document.getElementById('res-name').innerText = "";
       }
}
function validate_email() {
       let email = document.getElementById('email');

       if (email.value == "") {
              document.getElementById('res-email').innerText = "Please enter Email";
       } else {
              document.getElementById('res-email').innerText = "";
       }
}
function validate_subject() {
       let sub = document.getElementById('subject');

       if (sub.value == "") {
              document.getElementById('res-subject').innerText = "Please enter Subject";
       } else {
              document.getElementById('res-subject').innerText = "";
       }
}
function validate_message() {
       let mess = document.getElementById('message');

       if (mess.value == "") {
              document.getElementById('res-message').innerText = "Please enter Message";
       } else {
              document.getElementById('res-message').innerText = "";
       }
}

function submitForm() {
       console.log('submitted')
}