
document.write("this is a string" + " and a concatenation");

var B = "Power" + " Rangers"
document.write(B)

var C = " Cat", D = "Dog", E = "Elephant";

document.write(E);

var red = "I am seeing Red.";
var red = red.fontcolor("red");
document.write(red);

document.write(5 * 5);

function My_First_function () { // defining a function  and naming it
    var str = "this text is green"; // defing a variable and giving it a string value
    var result = str.fontcolor ("Green");// using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML= result;// putting the value of result into html elemnt with green_text id
}