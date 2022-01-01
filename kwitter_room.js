//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyBDfrxk1YTMSQlLYPpq9AQFce0T6cRkYeI",
  authDomain: "kwitter-f9974.firebaseapp.com",
  databaseURL: "https://kwitter-f9974-default-rtdb.firebaseio.com",
  projectId: "kwitter-f9974",
  storageBucket: "kwitter-f9974.appspot.com",
  messagingSenderId: "740748896645",
  appId: "1:740748896645:web:7c7c207e9fb00b908a7cec",
  measurementId: "G-T2Z2FP9WJS",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name",
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row =
          "<div class='room_name' id=" +
          Room_names +
          " onclick='redirectToRoomName(this.id)' >#" +
          Room_names +
          "</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
