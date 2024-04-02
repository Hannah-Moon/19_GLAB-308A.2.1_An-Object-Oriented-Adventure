// ----------------------------- { Code to begin with }

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],

    companion: {
        name: "Leo",
        type: "Cat",

        // Add a “companion” sub-object to “Leo” with the following properties:

        companionOfLeo: {
            name: "Frank",
            type: "Flea",
            belongings: ["smallHat", "sunglasses"],
        }
    },

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}

adventurer.roll() 

adventurer.companion.companionOfLeo = {
    name: "Frank",
    type: "Flea",
    belongings: ["smallHat", "sunglasses"],
}

// // From the adventurer object, we can access Robin’s inventory using a combination of dot notation and square bracket syntax. For example, we could find a sword at adventurer.inventory[0].

// // ----------------------------- { Create Character and Adventurer classes }



// class Character {
//     static MAX_HEALTH = 100;
//     constructor(name) {
//         this.name = name;
//         this.health = Character.MAX_HEALTH;
//         this.inventory = [];
//     }
//     roll(mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`);
//         return result;
//     }
// }

// class Adventurer extends Character {
//     static ROLES = ["Fighter", "Healer", "Wizard"];

//     constructor(name, role) {
//         super(name);
//         if (!Adventurer.ROLES.includes(role)) {
//             throw new Error(`Invalid role: ${role}. Must be one of ${Adventurer.ROLES.join(', ')}`);
//         }
//         this.role = role;
//         this.companion = null;
//         this.skills = [];
//     }

//     fight(enemy) {
//         console.log(`${this.name} engages in combat with ${enemy.name}!`);
//         // Implement combat logic
//     }

//     learnSkill(skill) {
//         this.skills.push(skill);
//         console.log(`${this.name} learned ${skill}!`);
//     }

//     assignCompanion(companion) {
//         this.companion = companion;
//         console.log(`${this.name} is now accompanied by ${companion.name} the ${companion.type}!`);
//     }

//     duel(opponent) {
//         console.log(`${this.name} duels ${opponent.name}!`);
//         while (this.health > 50 && opponent.health > 50) {
//             const roll1 = this.roll();
//             const roll2 = opponent.roll();
//             if (roll1 > roll2) {
//                 opponent.health -= 1;
//             } else if (roll2 > roll1) {
//                 this.health -= 1;
//             }
//             console.log(`${this.name}: ${this.health} health, ${opponent.name}: ${opponent.health} health`);
//         }
//         const winner = this.health > 50 ? this : opponent;
//         console.log(`${winner.name} wins the duel with ${winner.health} health remaining!`);
//     }
// }

// class AdventurerFactory {
//     constructor(role) {
//         this.role = role;
//         this.adventurers = [];
//     }

//     generate(name) {
//         const newAdventurer = new Adventurer(name, this.role);
//         this.adventurers.push(newAdventurer);
//         return newAdventurer;
//     }

//     findByIndex(index) {
//         return this.adventurers[index];
//     }

//     findByName(name) {
//         return this.adventurers.find(a => a.name === name);
//     }
// }

// // Example usage:
// const healerFactory = new AdventurerFactory("Healer");
// const robin = healerFactory.generate("Robin");
// const healer2 = healerFactory.generate("Healer2");

// robin.duel(healer2);