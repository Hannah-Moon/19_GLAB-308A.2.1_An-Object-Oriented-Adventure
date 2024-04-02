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
    }
}

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

adventurer.roll() 

// adventurer.companion.companionOfLeo = {
//     name: "Frank",
//     type: "Flea",
//     belongings: ["smallHat", "sunglasses"],
// }

// From the adventurer object, we can access Robin’s inventory using a combination of dot notation and square bracket syntax. For example, we could find a sword at adventurer.inventory[0].


