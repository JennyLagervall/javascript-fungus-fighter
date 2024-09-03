// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// add event listner to each button 
// Setting base Ap and HP as variables
let fungusHP = 100;
let attackPoints = 100;

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
// create objects for each attack type to hold cost and damage for use in functions 
const arcaneScepter = {
    apCost: 12,
    hpDamage: 14,
    
}

const entangle = {
    apCost: 23,
    hpDamage: 9,
    
}

const dragonBlade = {
    apCost: 38,
    hpDamage: 47,
    
}

const starFire = {
    apCost: 33,
    hpDamage: 25,
    
}


// function to happend when aarcaneScepter button is clicked
function arcaneScepterClick(event){
    fungusHP = Math.max(fungusHP - arcaneScepter.hpDamage, 0);
    // WHhen clicked aracanescepter damage (see object) is removed from OG fungus HP value
    // and placed back into OG fungus HP variable
    // Math.max and ,0 sets minimum HP can be to '0'
    attackPoints = Math.max(attackPoints - arcaneScepter.apCost, 0);
    // see above but for attack points and apCOst 
    const hpText1 = document.querySelector('.hp-text');
    hpText1.innerText =`${fungusHP} HP`;
    // select hp-text class and replace value with new fungus HP value as calculated above in function
    const apText1 = document.querySelector('.ap-text');
    apText1.innerText =`${attackPoints} AP`;

    hpValues();
    apValues();
    // calls ap and hp value functions to run them for their selected scenarios (e.g. if hp === 0). See below
}


function entangleClick(event){
    fungusHP = Math.max(fungusHP - entangle.hpDamage, 0);
    attackPoints = Math.max(attackPoints - entangle.apCost, 0);

    const hpText2 = document.querySelector('.hp-text');
    hpText2.innerText =`${fungusHP} HP`;

    const apText2 = document.querySelector('.ap-text');
    apText2.innerText =`${attackPoints} AP`;

    hpValues();
    apValues();
}

function dragonBladeClick(event){
    fungusHP = Math.max(fungusHP - dragonBlade.hpDamage, 0);
    attackPoints = Math.max(attackPoints - dragonBlade.apCost, 0);

    const hpText3 = document.querySelector('.hp-text');
    hpText3.innerText =`${fungusHP} HP`;

    const apText3 = document.querySelector('.ap-text');
    apText3.innerText =`${attackPoints} AP`;

    hpValues();
    apValues();
    
}    

function starFireClick(event){
    fungusHP = Math.max(fungusHP - starFire.hpDamage, 0);
    attackPoints = Math.max(attackPoints - starFire.apCost, 0);

    const hpText4 = document.querySelector('.hp-text');
    hpText4.innerText =`${fungusHP} HP`;

    const apText4 = document.querySelector('.ap-text');
    apText4.innerText =`${attackPoints} AP`;
    
    hpValues();
    apValues();
    
}
onReady()

function hpValues(){
if (fungusHP === 0){
    document.querySelector('.freaky-fungus').classList.remove('walk');
    document.querySelector('.freaky-fungus').classList.add('dead');  
}
}
// if fungus HP value hits '0', change second part of class (first part of  class is "freaky-fungus") from walk to dead
function apValues(){
    if (attackPoints === 0){
        document.querySelector('.freaky-fungus').classList.remove('walk');
        document.querySelector('.freaky-fungus').classList.add('jump');  

        const buttons = document.querySelectorAll('.attack-btn');
        for (let i = 0; i < buttons.length; i++) {
            let buttonsLoop = buttons[i]
            buttonsLoop.disabled = true; 
        
    }
}
}
 // if attack HP hits '0' change second part of class (first part of  class is "freaky-fungus") from walk to jump
 // second part: select all buttons (all have a first class of attack-btn), loop through all buttons (because there are multiple), grab each button at [i], diable buttons via .disable by setting to true (disable = true)

