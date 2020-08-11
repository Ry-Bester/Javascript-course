function Call_Loop() {
    var Digit = "";
    var Y = 1;
    while (Y<11) {
       Digit += "<br>" + Y;
       Y++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function myFunction1() {
    var X = "Hello World!";
    var Z = X.length;
    document.getElementById("Strlen").innerHTML = Z;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var W;
function for_Loop() {
    for (W = 0; W < Instruments.length; W++) {
      Content += Instruments[W] + "<br>";  
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}

function constant_function() {
    const Cars = {type:"Mazda", version: "6", color:"black", style:"signature"};
    Cars.color = "Gray";
    Cars.price = "$40,000";
    document.getElementById("Constant").innerHTML= "The cost of the" + Cars.type +Cars.version + Cars.style +  "was" + Cars.price;
}

function myFunction3() {
    return Math.PI;
  }
  document.getElementById("PI").innerHTML = myFunction3();

  let car= {
      make:"Mazda 6",
      model: "signature", 
      color:"Gun Metal gray", 
      year:"2018",
      description : function() {
        return "the car is a" + this.year + this.color +this.make + this.model;
    }
};
    document.getElementById("Car_Object").innerHTML= car.description();

var text = "";
var i;
for (i = 0; i < 9; i++) {
  if (i === 5) { break; } 
  text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

var text1 = "";
var h;
for (h = 0; h < 10; h++) {
  if (h === 3) {continue;}
  text1 += "The number is " + h + "<br>";
}
document.getElementById("continue").innerHTML = text1;

  