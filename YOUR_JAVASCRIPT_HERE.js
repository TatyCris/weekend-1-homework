// Hero object ----------
let hero = {
    name: "taty",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "punch",
        damage: 2
    },
}

// Game logic functions ----------
function rest (object) {    
    if (object.health === 10) {
        alert('Health already 10!');
    } else {
        object.health = 10;
    }
    return object
}

function pickUpItem (hero, weapon) {
    hero.inventory.push(weapon);
}

function equipWeapon (hero) {
    if (hero.inventory.length > 0) {
        // hero.weapon = hero.inventory[0];
        hero.weapon = hero.inventory.shift();
    } 
}

// UI ----------
const inn = document.getElementById('inn');
inn.onclick = () => {    
    rest(hero);
}

const dagger = document.getElementById('dagger');
dagger.onclick = () => {
    pickUpItem(hero, {
        type: 'dagger',
        damage: 2
    });
}

const bag = document.getElementById('bag');
bag.onclick = () => {
    equipWeapon(hero);
}
