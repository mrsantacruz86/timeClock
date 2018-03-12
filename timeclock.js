var config = {
  apiKey: "AIzaSyCpbiT0CCGENNNqZ7CLlN3bdY-7lkyjlu0",
  authDomain: "time-tracking-app-835f2.firebaseapp.com",
  databaseURL: "https://time-tracking-app-835f2.firebaseio.com",
  projectId: "time-tracking-app-835f2",
  storageBucket: "time-tracking-app-835f2.appspot.com",
  messagingSenderId: "10151088161"
};
firebase.initializeApp(config);

var database = firebase.database();


function createNewEmployee(name, role, startDate, monthlyRate) {
  var employee = {
    name: name,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate,
  };
    
  database.ref('people').push(employee);
}

function addRecordToTable(key, name, role, startDate, rate) {
  var $record = $('tr');
  var $cell = $('td');
  $record.attr('key', key);
  $cell.html(name).appendTo($record);
  $cell.html(role).appendTo($record);
  $cell.html(startDate).appendTo($record);
  $cell.html(rate).appendTo($record);
  $record.appendTo()
}
$(document).ready(function(){


  $("#submitBtn").click(function (event) {
    event.preventDefault();
    var empName = $('#emName').val();
    var startD = $('#startDate').val();
    var role = $('#role').val();
    var rate = $('#monthlyRate').val();
    $('#dataEntry input').val("");
    createNewEmployee(empName, startD, role, rate);
  })
});
  
var ref = database.ref('people');
ref.on("child_added", function (snapshot) {
  var k = snapshot.key;
  
  console.log(k + snapshot.val().name);
  
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});