document.write(typeof "billy bob");

function myFunction() {
    document.getElementById("Test").innerHTML= 0/0;
}
function myFunction1() {
 document.getElementById("Test2").innerHTML= isNaN('This is a string');
}
function myFunction2() {
 document.getElementById("Test3").innerHTML= isNaN('007');
}

document.write(4E310);
document.write(-3E310);

document.write(10>2);
document.write(10<2);
console.log(2+2);
document.write("10" + 5);
document.write(20<=19);
document.write(10==10);
document.write(10==15);
X= 10;
Y= 10;
document.write(X===Y);

A= 82;
B="82";
document.write(A===B);

C=83;
D=84;
document.write(C===D);

document.write(7>2 && 10>9);
document.write(1>2 && 10>9);
document.write(2>1 || 3>5);
document.write(2>1 || 8>5);

function myFunction3() {
    document.getElementById("not").innerHTML= !(20>10);
   }

function myFunction4() {
    document.getElementById("not2").innerHTML= !(5>10);
   }