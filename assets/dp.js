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

    
    
    
    
    
    var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    var currentTime = moment().format('HH');

    var time = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];


})