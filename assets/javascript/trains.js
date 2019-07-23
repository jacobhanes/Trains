

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAf46_BcHQ4iK1nnVbLdQ_3p0lmmkCbT4w",
    authDomain: "trains-d421f.firebaseapp.com",
    databaseURL: "https://trains-d421f.firebaseio.com",
    projectId: "trains-d421f",
    storageBucket: "trains-d421f.appspot.com",
    messagingSenderId: "30434606015",
    appId: "1:30434606015:web:9be4eb6f0945bc30"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const dataRef = firebase();

  let trainName = $("#tName").val().trim();
  let trainDest = $("#tDest").val().trim();
  let trainTime = $("#tTime").val().trim();
  let trainFrequency = $("#tFrequency").val().trim();

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
      trainFrequency: trainFrequency
  })