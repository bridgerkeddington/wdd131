// Used AI for tutoring and debugging, some code was written with the help of AI, but all code was written by me and I understand how it works.


const level_up_button = document.getElementById("level_up");
const take_damage_button = document.getElementById("take_damage");

const character = {
    level: 1,
    health: 100
}

level_up_button.addEventListener("click", function() {
    if (character.health > 0) {     
        character.level++;
        document.querySelector("#character_level").innerHTML = '<strong>Level:</strong> ' + character.level;
    } else {
        alert("Your character is dead and cannot level up!");
    }
})

take_damage_button.addEventListener("click", function() {
        character.health -= 20;
    if (character.health <= 0) {
        character.health = 0;
        document.querySelector("#character_health").innerHTML = '<strong>Health:</strong> ' + character.health;
        alert("Your character has died!");
    } else {
        document.querySelector("#character_health").innerHTML = '<strong>Health:</strong> ' + character.health;
    }
})