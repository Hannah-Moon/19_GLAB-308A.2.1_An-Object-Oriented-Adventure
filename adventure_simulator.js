const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Character {
    static MAX_HEALTH = 100;
    constructor(name) {
        this.name = name;
        this.health = Character.MAX_HEALTH;
        this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
        return result;
    }
}

class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];

    constructor(name, role) {
        super(name);
        if (!Adventurer.ROLES.includes(role)) {
            throw new Error(`Invalid role: ${role}. Must be one of ${Adventurer.ROLES.join(', ')}`);
        }
        this.role = role;
        this.companion = null;
        this.skills = [];
    }

    fight(enemy) {
        console.log(`${this.name} engages in combat with ${enemy.name}!`);
        // Implement combat logic
    }

    learnSkill(skill) {
        this.skills.push(skill);
        console.log(`${this.name} learned ${skill}!`);
    }

    assignCompanion(companion) {
        this.companion = companion;
        console.log(`${this.name} is now accompanied by ${companion.name} the ${companion.type}!`);
    }

    duel(opponent) {
        console.log(`${this.name} duels ${opponent.name}!`);
        while (this.health > 50 && opponent.health > 50) {
            const roll1 = this.roll();
            const roll2 = opponent.roll();
            if (roll1 > roll2) {
                opponent.health -= 1;
            } else if (roll2 > roll1) {
                this.health -= 1;
            }
            console.log(`${this.name}: ${this.health} health, ${opponent.name}: ${opponent.health} health`);
        }
        const winner = this.health > 50 ? this : opponent;
        console.log(`${winner.name} wins the duel with ${winner.health} health remaining!`);
    }
}

class AdventurerFactory {
    constructor(role) {
        this.role = role;
        this.adventurers = [];
    }

    generate(name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
        return newAdventurer;
    }

    findByIndex(index) {
        return this.adventurers[index];
    }

    findByName(name) {
        return this.adventurers.find(a => a.name === name);
    }
}

// Function to display menu options
function displayMenu() {
    console.log("\n====== Adventure Simulator ======");
    console.log("1. Create Adventurer");
    console.log("2. Assign Companion");
    console.log("3. Duel");
    console.log("4. Exit");
}

const adventurerFactory = new AdventurerFactory("Fighter");

rl.on('line', (input) => {
    switch (input.trim()) {
        case '1':
            rl.question('Enter adventurer name: ', (name) => {
                const adventurer = adventurerFactory.generate(name.trim());
                console.log(`Adventurer ${adventurer.name} created!`);
                displayMenu();
            });
            break;
        case '2':
            rl.question('Enter adventurer name: ', (adventurerName) => {
                const adventurer = adventurerFactory.findByName(adventurerName.trim());
                if (adventurer) {
                    rl.question('Enter companion name: ', (companionName) => {
                        adventurer.assignCompanion(new Character(companionName.trim()));
                        console.log(`Companion assigned to ${adventurerName.trim()}!`);
                        displayMenu();
                    });
                } else {
                    console.log(`Adventurer ${adventurerName.trim()} not found.`);
                    displayMenu();
                }
            });
            break;
        case '3':
            rl.question('Enter first adventurer name: ', (adventurer1Name) => {
                const adventurer1 = adventurerFactory.findByName(adventurer1Name.trim());
                if (adventurer1) {
                    rl.question('Enter second adventurer name: ', (adventurer2Name) => {
                        const adventurer2 = adventurerFactory.findByName(adventurer2Name.trim());
                        if (adventurer2) {
                            adventurer1.duel(adventurer2);
                        } else {
                            console.log(`Adventurer ${adventurer2Name.trim()} not found.`);
                        }
                        displayMenu();
                    });
                } else {
                    console.log(`Adventurer ${adventurer1Name.trim()} not found.`);
                    displayMenu();
                }
            });
            break;
        case '4':
            console.log("Exiting Adventure Simulator...");
            rl.close();
            break;
        default:
            console.log("Invalid option. Please choose again.");
            displayMenu();
            break;
    }
});

// Display initial menu
displayMenu();

// Person class 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const people = [];

function createPerson(name, age) {
    const person = new Person(name, age);
    people.push(person);
    console.log(`Person ${name} created!`);
}

function displayPeople() {
    console.log("\nPeople Information:");
    people.forEach(person => {
        console.log(`Name: ${person.name}, Age: ${person.age}`);
    });
}

// Example usage:
createPerson("Alice", 30);
createPerson("Bob", 25);
createPerson("Charlie", 35);

displayPeople();