// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
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



function arcaneScepterClick(event){
    fungusHP = Math.max(fungusHP - arcaneScepter.hpDamage, 0);
    attackPoints = Math.max(attackPoints - arcaneScepter.apCost, 0);

    const hpText1 = document.querySelector('.hp-text');
    hpText1.innerText =`${fungusHP} HP`;

    const apText1 = document.querySelector('.ap-text');
    apText1.innerText =`${attackPoints} AP`;

    hpValues();
    apValues();
    
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
    

