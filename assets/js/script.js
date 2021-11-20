eventsArr = [];
// current date and time to change every second 
const dateTime = new Date();
document.getElementById("currentDay").innerHTML = dateTime;

// function to make the date and time update every second
setInterval(function(){
    document.getElementById("currentDay").innerHTML = new Date()
}, 1000);

// adding/editing text area
$(".description").on("click", "textarea", function () {
    var textInput = $("<textarea>").addClass("form-control").val(text);
    textInput.trigger("focus");
});

// loading events if any from local storage
var loadEvents = function () {
    eventsArr = JSON.parse(localStorage.getItem("Event Data"));
  
    let localStorageData = localStorage.getItem("Event Data");
    if (localStorageData !== null) {
      localStorageData = JSON.parse(localStorageData);
      for (i = 0; i < localStorageData.length; i++) {
        document.getElementById(localStorageData[i].id).value =
          localStorageData[i].description;
      }
    }
};

// saving the data to local storage
var saveEvent = function (event) {
    // targeting the area to get the id
    const textareaId = "x-" + event.target.id;

    // extracting the value of the area selected
    const eventDescription = document.getElementById(textareaId).value;

    let descriptionExist = false;
    // loop running through the events array 
    for (i = 0; i < eventsArr.length; i++)
    // checking if the id exist already if so update with new description
    if (eventsArr[i].id === textareaId) {
        eventsArr[i].description = eventDescription;
        descriptionExist = true;
        break;
    }
    // if the id does not exist in the array add the id with the description
    if (!descriptionExist) {
        eventsArr.push({ id: textareaId, description: eventDescription });
    }
    // send the information collected into local storage
    localStorage.setItem("Event Data", JSON.stringify(eventsArr));
};
  
// Event listener to be able to save
$(".saveBtn").on("click", saveEvent);
loadEvents();