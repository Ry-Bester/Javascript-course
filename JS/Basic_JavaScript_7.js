var x = 10;
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}

function Add_numbers_2 () {
    document.write(x + 100+ "<br>");
}

Add_numbers_1();
Add_numbers_2();

function Add_numbers_3 () {
    var y = 10;
    document.write(20 + y + "<br>");
}
function Add_numbers_4() {
    var z = 15;
    document.write(z + 100);
}

Add_numbers_3();
Add_numbers_4();

function get_Date () {
    if (new Date().getHours() <18){
        document.getElementById("Greeting").innerHTML= "How are you today?";
    }
}

function Age_Function() {
    Age= document.getElementById("Age").value;
    if (Age >= 25) {
        Drive = "You are old enough to rent a car!";
    }
    else {
        Drive = "You are not old enough to rent a car";
    }
    document.getElementById("How_old").innerHTML = Drive;
}

function Time_function() {
    var Time= new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time.";
    }
    else if (Time > 12 ==Time < 18) {
        Reply = "It is the afternoon.";
    }
    else{
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply
}