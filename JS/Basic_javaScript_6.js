document.write(Bigger= 5 > 1) ? "Left number is bigger":"RIght number is bigger"

function Ride_Function () {
    var Height, Can_Ride;
    Height= document.getElementById("Height").value;
    Can_Ride = (Height < 58) ? "You are too short": "you are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride";
}

function Age_Function () {
    var Age, Can_Vote;
    Age= document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are too young": "you are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote";
}

function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep","Trail Hawk",2019,"white and Black");
var Erick = new Vehicle("Ford","Pinto", 1971, "Mustard");

function myFunction () {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erick drives a " + Erick.Vehicle_Color + "-colored " + Erick.Vehicle_Model +
    " manufactured in " + Erick.Vehicle_Year;
}
function Hero (Name,Power,) {
this.Hero_Name= Name;
this.Hero_Power= Power;
}

var Midoria = new Hero("Deku","All for One");
var bakugon = new Hero("Explosion man", "Bomb sweat");

function myFunction2 () {
    document.getElementById("New").innerHTML =
    "Midoria's hero name is " +  Midoria.Hero_Name  + " and his power is " + Midoria.Hero_Power; 
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point= 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}