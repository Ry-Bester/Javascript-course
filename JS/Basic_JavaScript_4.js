function my_Dictionary () {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Lab",
        Age:5,
        Sound:"Bark",
    };
    delete Animal.Age;
    document.getElementById("Dictionary").innerHTML= Animal.Age;
}