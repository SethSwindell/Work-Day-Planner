$(document).ready(function () {
  var currentDate = moment().format("MMMM Do, YYYY");
  var currentTime = moment().format("hh:mm:ss A");
  var currentHour;
  var possibleHours = {
    before: ["12AM", "01AM", "02AM", "03AM", "04AM", "05AM", "06AM", "07AM", "08AM"],
    business: ["09AM", "10AM", "11AM", "12PM", "01PM", "02PM", "03PM", "04PM", "05PM"],
    after: ["06PM", "07PM", "08PM", "09PM", "10PM", "11PM"]
  };

  function init() {
    // Display current date
    $("#date").text(currentDate);
    // Display current time
    $("#time").text(currentTime);
    // Set colors based on current time
    timeColor();
    let currentTimer = setInterval(function () {
      currentDate = moment().format("MMMM Do, YYYY");
      $("#date").text(currentDate);
      currentTime = moment().format("hh:mm:ss A");
      $("#time").text(currentTime);
      timeColor();
    }, 1000);
  }

  function timeColor() {
    currentHour = moment().format("hhA");

    if (possibleHours.before.indexOf(currentHour) !== -1) {
      $(".hourNotes").css("background-color", "#d3d3d3");
    }
    if (possibleHours.after.indexOf(currentHour) !== -1) {
      $(".hourNotes").css("background-color", "#d3d3d3");
    }
    if (possibleHours.business.indexOf(currentHour) !== -1) {
      $("#" + currentHour).css("background-color", "#ff6961");
      for (let i = 0; i < possibleHours.business.indexOf(currentHour); i++) {
        $("#" + possibleHours.business[i]).css("background-color", "#d3d3d3");
      }
      for (
        let i = possibleHours.business.length - 1;
        i > possibleHours.business.indexOf(currentHour);
        i--
      ) {
        $("#" + possibleHours.business[i]).css("background-color", "#77dd77");
      }
    }
  }

  init();
});

$(".saveBtn").on("click", function () {
  var clickID = $(this).attr("id");
  var textID;
  switch (clickID) {
    case "09AMsave":
      textID = $("#09AM").val();
      localStorage.setItem("09AMtext", textID);
      break;
    case "10AMsave":
      textID = $("#10AM").val();
      localStorage.setItem("10AMtext", textID);
      break;
    case "11AMsave":
      textID = $("#11AM").val();
      localStorage.setItem("11AMtext", textID);
      break;
    case "12PMsave":
      textID = $("#12PM").val();
      localStorage.setItem("12PMtext", textID);
      break;
    case "01PMsave":
      textID = $("#01PM").val();
      localStorage.setItem("01PMtext", textID);
      break;
    case "02PMsave":
      textID = $("#02PM").val();
      localStorage.setItem("02PMtext", textID);
      break;
    case "03PMsave":
      textID = $("#03PM").val();
      localStorage.setItem("03PMtext", textID);
      break;
    case "04PMsave":
      textID = $("#04PM").val();
      localStorage.setItem("04PMtext", textID);
      break;
    case "05PMsave":
      textID = $("#05PM").val();
      localStorage.setItem("05PMtext", textID);
  }
});
function loadScheduleData() {
  $("#09AM").text(localStorage.getItem("09AMtext"));
  $("#10AM").text(localStorage.getItem("10AMtext"));
  $("#11AM").text(localStorage.getItem("11AMtext"));
  $("#12PM").text(localStorage.getItem("12PMtext"));
  $("#01PM").text(localStorage.getItem("01PMtext"));
  $("#02PM").text(localStorage.getItem("02PMtext"));
  $("#03PM").text(localStorage.getItem("03PMtext"));
  $("#04PM").text(localStorage.getItem("04PMtext"));
  $("#05PM").text(localStorage.getItem("05PMtext"));
}

loadScheduleData();
