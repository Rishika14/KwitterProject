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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");
window.location = "index.html";
}

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

