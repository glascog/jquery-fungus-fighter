$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let userAP = 100;

function onReady() {
    console.log('Hey jQuery');
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    $('.arcane-scepter').on('click', handleArcane);
    $('.entangle').on('click', handleEntangle); 
    $('.dragon-blade').on('click', handleDragon);
    $('.star-fire').on('click', handleStar);

    render();

    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


function handleArcane(event) {
    event.preventDefault();
    console.log('inside handleArcane');

    // Update state variables
     
    fungusHP -= 14;
    console.log('fungusHP:', fungusHP);
    if (fungusHP <= 0) {
        console.log('fungusHP is negative');
        fungusHP = 0;
        $('.freaky-fungus').removeClass('.walk').addClass('.dead');
    }
    userAP -= 12;
    console.log('userAP:', userAP);
    if (userAP < 0) {
        console.log('userAP is negative');
        userAP = 0;
        $('.walk').replaceWith($('.jump'));
    }

    render();
}
 
function handleEntangle(event) {
    event.preventDefault();
    console.log('inside handleEntangle');

    // Update state variables
    fungusHP -= 9;
    console.log('fungusHP:', fungusHP);
    if (fungusHP < 0) {
        console.log('fungusHP is negative');
        fungusHP = 0;
    }
    userAP -= 23;
    console.log('userAP:', userAP);
    if (userAP < 0) {
        console.log('userAP is negative');
        userAP = 0;
    }

    render();
}

function handleDragon(event) {
    event.preventDefault();
    console.log('inside handleDragon');

    // Update state variables
    fungusHP -= 47;
    console.log('fungusHP:', fungusHP);
    if (fungusHP < 0) {
        console.log('fungusHP is negative');
        fungusHP = 0;
    }
    userAP -= 38;
    console.log('userAP:', userAP);
    if (userAP < 0) {
        console.log('userAP is negative');
        userAP = 0;
    }

    render();
}

function handleStar(event) {
    event.preventDefault();
    console.log('inside handleStar');

    // Update state variables
    fungusHP -= 25;
    console.log('fungusHP:', fungusHP);
    if (fungusHP < 0) {
        console.log('fungusHP is negative');
        fungusHP = 0;
    }
    userAP -= 33;
    console.log('userAP:', userAP);
    if (userAP <= 0) {
        console.log('userAP is negative');
        userAP = 0;

    }

    render();
}

function render() {

// Update the text above the attack buttons 
// Update the text above the enemy fungus 
$('.ap-text').text(`${userAP} AP`);
$('.hp-text').text(`${fungusHP} HP`);

}
