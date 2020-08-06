function My_First_function () { // defining a function  and naming it
    var str = "this text is green"; // defing a variable and giving it a string value
    var result = str.fontcolor ("Green");// using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML= result;// putting the value of result into html elemnt with green_text id
    
}

function My_Second_function () {
    document.getElementById("Change").innerHTML= "This changed too see???";
}

function myFunction () {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}