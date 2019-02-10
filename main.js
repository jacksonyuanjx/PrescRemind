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

var prescriptionsRef = firebase.database().ref('prescriptions');

// Listen for add prescription button submit
var drugSubmitBtn = document.getElementsByClassName('drugSubmitBtn');
drugSubmitBtn[0].addEventListener('click', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('drugNameInput');
  var email = getInputVal('alertEmailInput');
  var time = getInputVal('intakeTimeInput');
  var days = getInputVal('intakeDaysInput');

  // Save message
  saveMessage(name, email, time, days);

  // Show alert
//  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
//  setTimeout(function(){
//    document.querySelector('.alert').style.display = 'none';
//  },3000);

  // Clear form
  document.getElementById('addDrugForm').reset();

    alert('button press complete');
}


// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, time, days) {
  var newPrescriptionsRef = prescriptionsRef.push();  // push() will return a reference to the new data path, which you can use to get the key or set data to it.
//    alert(name);
//    alert(email);
//    alert(time);
//    alert(days);

  newPrescriptionsRef.set({
    name: name,
    email: email,
    time: time,
    days: days
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


