
$(document).ready(function(){

  // Your web app's Firebase configuration
   // Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyCSx9YZg3Ml5Curft0RR6NoRrbJNdB0EmQ",
    authDomain: "first-project-ebac4.firebaseapp.com",
    databaseURL: "https://first-project-ebac4.firebaseio.com",
    projectId: "first-project-ebac4",
    storageBucket: "first-project-ebac4.appspot.com",
    messagingSenderId: "456892903814",
    appId: "1:456892903814:web:d8f9c6be25fd9593"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
  


const dataRef = firebase.database();

let trainName = $("#tName").val().trim();
let trainDest = $("#tDest").val().trim();
let trainTime = $("#tTime").val().trim();
let trainFrequency = $("#tFrequency").val().trim();

// let currentTime = moment();
// console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
// let diffTime = moment().diff(moment(trainTime), "minutes");
// console.log("DIFFERENCE IN TIME: " + diffTime);
// let tRemainder = diffTime % trainFrequency;
// console.log(tRemainder);
// let tMinutesTillTrain = trainFrequency - tRemainder;
// console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);





$("#addBtn").on("click", function(){
    console.log("iv been clicked")
    
    let currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
    let diffTime = moment().diff(moment(trainTime), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);
    let tRemainder = diffTime % trainFrequency;
    console.log(tRemainder);
    let tMinutesTillTrain = trainFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);



    dataRef.ref().push({
        trainName: trainName,
        trainDest: trainDest,
        trainTime: trainTime,
        trainFrequency: trainFrequency,
        
    })
})  







});