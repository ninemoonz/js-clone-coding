const age = parseInt(prompt("How old are you?"));

if(isNaN(age)){
    console.log("That's not a number. Enter your age again");
}
else if(age <= 18){
    console.log("You are underage to buy liquors");
}
else if(age >= 18 && age <= 50){
    console.log("You are okay to buy liquors");
}
else {
    console.log("You can drink, but you should be careful");
}
