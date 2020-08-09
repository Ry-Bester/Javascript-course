function full_Sentence () {
    var part_1 ="I have";
    var part_2 =" made this";
    var part_3 =" into a complete";
    var part_4 =" sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML= whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function upper_Method() {
    var str = "all work and no play makes johnny a dull boy.";
    var Upper = str.toUpperCase();
    document.getElementById("Up").innerHTML = Upper;
}
function myFunction() {
    var str = "Welcome to my Hero Academia"; 
    var n = str.search("Hero");
    document.getElementById("Search").innerHTML = n;
  }

  function myFunction1() {
    var X = 382; 
    document.getElementById("Number_to_string").innerHTML = X.toString();
  }

  function precision_Method() {
      var Y= 12435.5674534534563;
      document.getElementById(Precision).innerHTML= Y.toPrecision(10);
  }
  function myFunction2() {
    var num = 5.86789;
    var f = num.toFixed(2);
    document.getElementById("fix").innerHTML = f;
  }

  function myFunction3() {
    var vo = "Hello World!";
    var of = vo.valueOf();
    document.getElementById("value").innerHTML = of;
  }