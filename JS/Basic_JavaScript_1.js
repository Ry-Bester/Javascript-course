
document.write("this is a string" + " and a concatenation");

var B = "Power" + " Rangers" // this section concatinates code
document.write(B)

var C = " Cat", D = "Dog", E = "Elephant"; //this is assigning multipl ids in one string

document.write(E); //this tells the doc to print the e element

var red = "I am seeing Red."; // this section of code makes a sentence appear in red text
var red = red.fontcolor("red");
document.write(red); //

document.write(5 * 5);// this tells it to display 5 multiplie dby 5

function My_First_function () { // defining a function  and naming it
    var str = "this text is green"; // defing a variable and giving it a string value
    var result = str.fontcolor ("Green");// using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML= result;// putting the value of result into html elemnt with green_text id
}

window.alert("Hello World!") ;