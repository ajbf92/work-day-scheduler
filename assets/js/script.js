// current date and time to change every second 
const dateTime = new Date();
document.getElementById("currentDay").innerHTML = dateTime;

// function to make the date and time update every second
setInterval(function(){
    document.getElementById("currentDay").innerHTML = new Date()}, 1000)

// adding/editing text area
$(".description").on("click", "textarea", function () {
    var textInput = $("<textarea>").addClass("form-control").val(text);
    textInput.trigger("focus");
  });