function myFunction() {
    var add = 2 + 2;
    document.getElementById("Math"). innerHTML= "2 + 2 = " + add;
}

function myFunction2() {
    var sub = 5 - 2;
    document.getElementById("Math2"). innerHTML= "5 - 2 = " + sub;
}

function myFunction3() {
    var mul = 5 * 2;
    document.getElementById("Math3"). innerHTML= "5 * 2 = " + mul;
}
function myFunction4() {
    var div = 10 / 2;
    document.getElementById("Math4"). innerHTML= "10 / 2 = " + div;
}

function myFunction5() {
    var simple_math = (5 + 10) * 6 / 3;
    document.getElementById("Math5"). innerHTML= "five plus 10 times 6 ,divided by 3 = " + simple_math;
}

function myFunction6() {
    var remain = 40 % 6 ;
    document.getElementById("Math6"). innerHTML= "when you divide 40 by 6 you hvae a remainder of: " + remain;
}
function myFunction7() {
    var y = 25 ;
    document.getElementById("Math7"). innerHTML= -y ;
}

var z = 10;
z++;
document.write(z);

var z = 15.5;
z--;
document.write(z);

window.alert(Math.random() * 150);


