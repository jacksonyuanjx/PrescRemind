// var now = new Date();
// var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0, 0) - now;

var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes();

var hour = 1; // Get hour set that patient must take medicine by
var minutes = 40; //Get minute set that patient must take medicine by

var interval = setInterval(notification, 50);

function notification(){
  if (today.getHours() > hour){
    alert("Jackson did not take his medication");
  }

  if (today.getMinutes() > minutes){
      alert("Jackson did not take his medication");
  }

}
notification();
