let  menuToggle = document.querySelector(".hamburger");
menuToggle.addEventListener('click', event =>{
    
    document.body.classList.toggle('nav-active');
    console.log('clicked');
} );


//hiding submit bttn

//find fields
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let btn = document.querySelector(".button");

//validation
let validation = event => {
    console.log('it worked')
    if (fname.value && lname.value) {
        btn.removeAttribute('disabled');
    } else{
        btn.setAttribute('disabled', 1);
    }
}
//listen to blur event for field name

fname.addEventListener('blur', validation);
fname.addEventListener('keyup', validation);
lname.addEventListener('blur', validation);
lname.addEventListener('keyup', validation);
email.addEventListener('blur', validation);
email.addEventListener('keyup', validation);
phone.addEventListener('blur', validation);
phone.addEventListener('keyup', validation);

