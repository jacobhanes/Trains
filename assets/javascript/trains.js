
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

let trainName = "";
let trainDest = "";
let trainTime = "";
let trainFrequency = 0;

 trainName = $("#tName").val();
 trainDest = $("#tDest").val();
 trainTime = $("#tTime").val();
 trainFrequency = parseInt($("#tFrequency").val());


 // let currentTime = moment();
 // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
 // let diffTime = moment().diff(moment(trainTime), "minutes");
 // console.log("DIFFERENCE IN TIME: " + diffTime);
 // let tRemainder = diffTime % trainFrequency;
 // console.log(tRemainder);
 // let tMinutesTillTrain = trainFrequency - tRemainder;
 // console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
 
 
 
 
 
 $("#addBtn").on("click", function(event){
     console.log("iv been clicked")
     event.preventDefault();
     trainName = $("#tName").val();
     trainDest = $("#tDest").val();
     trainTime = $("#tTime").val();
     trainFrequency = parseInt($("#tFrequency").val());
     console.log(trainFrequency);
     
     let firstTimeConverted = moment(trainTime, "HH:mm").subtract(1, "years");
     console.log(firstTimeConverted);
     
     // Current Time
     let currentTime = moment();
     console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
     
     // Difference between the times
     let diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    let tRemainder = diffTime % trainFrequency;
    console.log(tRemainder);

    // Minute Until Train
    let tMinutesTillTrain = trainFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    let nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    

    dataRef.ref().push({
        trainName: trainName,
        trainDest: trainDest,
        trainFrequency: trainFrequency,
        nextTrain: nextTrain,
        minsAway: tMinutesTillTrain
        
    })
})  







});