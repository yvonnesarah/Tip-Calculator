// save button variable
var saveBtn = $(".saveBtn");

//current date shown on screen at the top
$("#currentDay").text(moment().format("dddd Do MMMM YYYY"));

// color-coded to indicate whether it is in the past, present, or future on a certain time block
function ColorTimeBlock() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// Click the save button for that time block to save
saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var description = $(this).siblings(".description").val();

    // the text for each daily planner that is schedule at a time is saved using local storage
    localStorage.setItem(time, description);
});

// If you refresh the page the saved daily planner schedule persist
function DailyPlannerApp() {

    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentDescription = localStorage.getItem(currentHour);

        if(currentDescription !== null) {
            $(this).siblings(".description").val(currentDescription);
        }
    });
}

// Call Functions to run the program of the daily planner app and to see the colour coded on the time blocks  

ColorTimeBlock();
DailyPlannerApp();
