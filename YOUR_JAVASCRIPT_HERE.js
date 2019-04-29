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
    displayStats();
}

const dagger = document.getElementById('dagger');
dagger.onclick = () => {
    pickUpItem(hero, {
        type: 'dagger',
        damage: 2
    });
    displayStats();
}

const bag = document.getElementById('bag');
bag.onclick = () => {
    equipWeapon(hero);
    displayStats();
}

// Update Hero name ----------
const form = document.getElementById('nameForm');
form.onsubmit = () => {
    const inputName = form.getElementsByTagName('input')[0];    
    hero.name = inputName.value;
    displayStats();
    inputName.value = '';
    
    return false;   
}

// Display Status ----------
const heroStats = document.getElementById('hero');
const healthStats = document.getElementById('health');
const weaponTypeStats = document.getElementById('weapon-type');
const weaponDamageStats = document.getElementById('weapon-damage');
const inventoryList = document.getElementById('inventory-list');
function displayStats () {
    heroStats.innerHTML = hero.name;
    healthStats.innerHTML = hero.health;
    weaponTypeStats.innerHTML = hero.weapon.type;
    weaponDamageStats.innerHTML = hero.weapon.damage;
    inventoryList.innerHTML = '';
    hero.inventory.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item.type;
        inventoryList.appendChild(li);       
    });
}

displayStats();

