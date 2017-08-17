    var counter = 25;
    var t;
    var isTimerOn = false;
function countdown () {
    document.getElementById("txt").value = counter;
    counter --;
    t = setTimeout ("countdown();", 1000);
}
function stopMe () {
    isTimerOn = false;
    clearTimeout (t);
}
function time () {  
    if (!isTimerOn) {
        isTimeOn = true;
        countdown ();
    }
}

function check () {
    var correct = 0;
    var wrong = 0;
    var question1 = document.forms["quiz"]["q1"].value;
    var question2 = document.forms["quiz"]["q2"].value;
    var question3 = document.forms["quiz"]["q3"].value;
    if (question1 == "a") {
        correct++;
        $("#correct-answers").html("Correct:" + correct);
    }else{
        wrong++;
        $("#wrong-answers").html("Wrong:" + wrong);
    }
    if (question2 == "c") {
        correct++;
        $("#correct-answers").html("Correct:" + correct);
    }else{
        wrong++;
        $("#wrong-answers").html("Wrong:" + wrong);
    }
    if (question3 == "c") {
        correct++;
        $("#correct-answers").html("Correct:" + correct);
    }else{
        wrong++;
        $("#wrong-answers").html("Wrong:" + wrong);
    }
}