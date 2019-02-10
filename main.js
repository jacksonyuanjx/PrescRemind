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

var currentUser;
var usersRef = firebase.database().ref('users');
//var prescriptionsRef = firebase.database().ref('prescriptions');

// Listen for add prescription button submit
var drugSubmitBtn = document.getElementById('addDrugForm');
if (drugSubmitBtn) {
    drugSubmitBtn.addEventListener('submit', submitForm);
}


// Submit form
function submitForm(e){
//  e.preventDefault();

  // Get values
  var name = getInputVal('drugNameInput');
  var email = getInputVal('alertEmailInput');
  var time = getInputVal('intakeTimeInput');
  var days = getInputVal('intakeDaysInput');

  // Save message
  saveDrug(name, email, time, days);

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
function saveDrug(name, email, time, days) {
    var newUsersRef = usersRef.push();  // push() will return a reference to the new data path, which you can use to get the key or set data to it.
//    var newUsersRef = usersRef.push();
    
    // ATTEMPT: check if drug already added to prevent duplicates
//    prescriptionsRef.child(name).once('value', function(snapshot) {
//        if (snapshot.exists()) {
//            alert('drug EXISTS');
//            document.getElementById('drugExistsMsg').style.visibility = 'visible';
//        } else {
//            alert('drug DNE');
//              newPrescriptionsRef.set({
//                name: name,
//                email: email,
//                time: time,
//                days: days
//              });
//        }
//    });
//    var user = firebase.auth().currentUser
    
      firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                alert(user);
//                var newUsersRef = usersRef.push();
//                newUsersRef.set({
//                    user: user
//                });
                var uid = firebase.auth().currentUser.uid;
                
                // need guard around .set() to check if userID already exists
//                alert(usersRef.child(uid));
                firebase.database().ref().child(uid).child(name).set({
                    email: email,
                    time: time,
                    days: days,
                    taken: false
                });

//                var query = firebase.database().ref("users");
//                query.once("value")
//                .then(function(snapshot) {
        // loop that checks to see if userID already exists
//                    snapshot.forEach(function(usersSnapshot) {    
//                        var userID = usersSnapshot.val();
//                        alert(userID);
//                        if (userID == uid) {
//                           alert('userID already exists!');
//                            firebase.database().ref().child(uid + '/prescriptions').set({
//                                name: name
//                            });
//                            return true;
//                        } else {
//                           alert('userID DNE');
//                        }
//                    });
//                });
//                firebase.database().ref().child('users').child(uid).set({
//                    prescriptions: {}
//                });
                
                // add the userID
//                firebase.database().ref().child('users').set({
//                    userID: uid
////                     name: name,
////                        email: email,
////                        time: time,
////                        days: days
//                });
            } else {
                // failed to sign in
                alert('user NOT signed in');
            }
      });
}
                                         


//function readDrug() {
//    var uid = firebase.auth().currentUser.uid;
//  firebase.database().ref().child(uid).child(name)
//
//}                                         
                                         
                                         
document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
//    var ref = new Firebase("https://xdhacks2019.firebaseio.com/");
//var authData = ref.getAuth();

//if (authData) {
//  console.log("Authenticated user with uid:", authData.uid);
//}
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


function viewPrescriptionsClicked() {
  document.getElementById("addPrescription").style.display = "none";
    var uid = firebase.auth().currentUser.uid;
    var ref = firebase.database().ref();
                                           
    var query = firebase.database().ref(uid);
    query.once("value")
    .then(function(snapshot) {
//        alert(snapshot.numChildren());
        for (var i = 0; i < snapshot.numChildren(); i++) {
            var name = Object.keys(snapshot.val())[i];
            var values = Object.values(snapshot.val())[i];
            var valuesObj = JSON.parse(JSON.stringify(values));
            
            var email = valuesObj.email;
            var days = valuesObj.days;
            var taken = valuesObj.taken;
            var time = valuesObj.time;
            
//            alert(JSON.stringify(snapshot.val()));
           $('ul.prescriptions').append("<li class='box'><center><p style='color:#e32626'><img src=https://i.imgur.com/umxhvkU.png height='30px' width='30px'>" + name + "</p><div class='smallerfont'> Alerts for\xa0" + name + "\xa0are being sent to <b>" + email + "\xa0</b><br><br> Please indicate you have taken this medication: <b>every " + days + " days</b> by <b>" + time + "</b>.<br><br><button class='takenselect'>Taken</button></div</center></li>")
        }
    });                                       
// Object.entries??                                         
}

function addPrescriptionsClicked() {
  document.getElementById("addPrescription").style.display = "";
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


