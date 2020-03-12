$(document).ready(function () {

    //set date and time, then update clock to run dynamically
    var currentDate = "";
    var currentTime = "";
    var currentHour = moment().format('HH');

    var update = function() {
        currentTime = moment(new Date())
        currentDate.html(currentTime.format('dddd, MMMM Do YYYY, h:mm:ss a'));
    };

    $(document).ready(function() {
        currentDate = $('#currentDay')
        update();
        setInterval(update, 1000);
    })


    // variable setup for rows

    var timeArr = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    var timeArr24 = ["0800", "0900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700"];
    var numArr = ["eight", "nine", "ten", "eleven", "twelve", "one", "two", "three", "four", "five"];

    
  //for loop to create new rows
    for (var i = 0; i < timeArr24.length; i++) {
        var newRow = $("<row>");

        $(".container").append(newRow);
        var newCol1 = $("<col>");
        var newCol2 = $("<col>");
        newRow.append(newCol1, newCol2);

        newCol1.attr("class", "col-2 hour");
        newCol2.attr("class", "col-9 input");
        newCol2.attr("id", numArr[i]);
        newCol2.html("<textarea rows='3'style='width: 100%; height: 100%'></textarea>");
        newRow.addClass("time-block row");
        newRow.attr("id", timeArr[i]);
        
        var newButt = $("<button>");
        newButt.attr("id", timeArr24[i]);
        newButt.attr("class", "saveBtn far fa-save col-1");
        newRow.append(newButt);
        if (timeArr24[i] >= 0800) {
           newCol1.text(timeArr24[i]);
        
        } 
    };

    // function to set times as past or future
    $("row").each(function () {
        var getId = parseInt($(this).attr("id"));
        console.log("id= " + getId);

        if (parseInt(currentHour) < 7 || parseInt(currentHour) > 18) {
            $(this).addClass("past");
        } if (getId < parseInt(currentHour)) {
            $(this).addClass("past");
        } if (getId > parseInt(currentHour)) {
            $(this).addClass("future");
        } if (getId === parseInt(currentHour)) {
            $(this).addClass("present");

        }

    })
    
   