//var messagesRef = new Firebase('https://xdhacks2019.firebaseio.com/');  // creating reference to firebase DB
var config = {
        apiKey: "AIzaSyCjRs7ybcD2lItM9C9T6gEDDTljQE-kbJg",
        authDomain: "xdhacks2019.firebaseapp.com",
        databaseURL: "https://xdhacks2019.firebaseio.com",
        projectId: "xdhacks2019",
        storageBucket: "xdhacks2019.appspot.com",
        messagingSenderId: "430201464103"
};
firebase.initializeApp(config);

//var database = firebase.database();

//function writeUserData(userId, name, email, imageUrl) {
//  firebase.database().ref('users/' + userId).set({
//    username: name,
//    email: email,
//    profile_picture : imageUrl
//  });
//}


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}


document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
});

//var user = firebase.auth().currentUser();

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    
    .then(result => {
        const user = result.user;
        //
        console.log(user);
        window.location.href="homepage.html";
    })
    .catch(console.log);
}


//function onSuccess(googleUser) {
//      console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
//    }
//    function onFailure(error) {
//      console.log(error);
//    }
//    function renderButton() {
//      gapi.signin2.render('my-signin2', {
//        'scope': 'profile email',
//        'width': 240,
//        'height': 50,
//        'longtitle': true,
//        'theme': 'dark',
//        'onsuccess': onSuccess,
//        'onfailure': onFailure
//      });
//}