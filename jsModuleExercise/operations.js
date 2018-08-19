var Clem = {
    firstname: "Clempson",
    lastname: "Rico",
    age: 34,
    birthYear: 1984,
    family: ["Joan", "Quinn", "Denali"],
    job: "Web Developer",
    calcAge: function(currentYear){
    this.age =  currentYear - this.birthYear;
    }
};


Clem.calcAge(2021);
