
//

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCor3jn1XIEVPGnWvF76usBd7hdxY1_QG4",
    authDomain: "time-clock-eecd3.firebaseapp.com",
    databaseURL: "https://time-clock-eecd3.firebaseio.com",
    projectId: "time-clock-eecd3",
    storageBucket: "time-clock-eecd3.appspot.com",
    messagingSenderId: "444204466941"
  };
  firebase.initializeApp(config);


function createNewEmployee (name, role, startDate, monthlyRate) {
    var employee = {
        name: name,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
    };

    var newEmployee = firebase.database().ref().child('employeeInfo').push.key;
}