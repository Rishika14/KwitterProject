  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCwX7nYWw0fMxOc7umsN6VDE-ccbZ7elsg",
    authDomain: "kwitter-cfadd.firebaseapp.com",
    databaseURL: "https://kwitter-cfadd.firebaseio.com",
    projectId: "kwitter-cfadd",
    storageBucket: "kwitter-cfadd.appspot.com",
    messagingSenderId: "83084616004",
    appId: "1:83084616004:web:de0151884e4750fa75b711",
    measurementId: "G-EMYG4LPFKT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    // Initialize Firebase
    
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}