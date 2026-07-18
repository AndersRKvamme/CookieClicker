// console.log ("Hello log.js!")
let amountCookies   = 0;
let increaseCookies = 1;
let clickCost       = 4;
let cookieTimer     = 0;
let grandmaCost     = 10;
let grandmaAmount   = 0;
// let grandmaIncrease = 1
let grandmaIncrease = 0.3;
let grandmaUpgradeCost = 150;
let minersAmount    = 0;
let minersCost      = 50;
let minersIncrease  = 2;
let roundedCookies  = 0;
let upgradeGraAMinCost  = 800;
let upgradeMinersCost = 200;
let clickPower1Cost = 10

function clickPower1(){ // First PROPER upgrade. Cost 10. Req Cookies 100. Temp before C per second
    if (amountCookies >= clickPower1Cost & amountCookies > 100) {
        increaseCookies = increaseCookies +1
        amountCookies = amountCookies - clickPower1Cost
            document.getElementById("Cookies").textContent = `Cookies: ${amountCookies.toFixed(2)}`
            console.log(amountCookies)
        document.getElementById("clickPower1").remove();
    }
    else {
        console.log("Cost is 10, req 100 cookies");
        
    }
}

function makeDonuts(){ // the default make cookie function
    amountCookies = amountCookies+increaseCookies;
    document.getElementById("Cookies").textContent = `Cookies: ${amountCookies.toFixed(2)}`
    console.log(amountCookies)
}

function cookieIncreaseFunction(){ // Clicking power
    if(amountCookies >= clickCost) {
        increaseCookies = increaseCookies +1;
        amountCookies = amountCookies - clickCost;
        console.log(increaseCookies);
            document.getElementById("Cookies").textContent = `Cookies: ${amountCookies.toFixed(2)}`
            console.log(amountCookies)
        clickCost = clickCost*2
        console.log(clickCost)
        document.getElementById("cookieButton").textContent = (`Click for ${increaseCookies} cookies!`)
        document.getElementById("clickImprove").textContent = (`Pay ${clickCost} to improve!`)
}
else{
    console.log(`Need ${clickCost}.`)
}
}

function grandmaTimerFunction(){ // Click on button function
    if (amountCookies >= grandmaCost){
        amountCookies = amountCookies - grandmaCost
        grandmaAmount = grandmaAmount +1
        grandmaCost = grandmaCost*2
        console.log(grandmaCost);
        console.log(`You have ${grandmaAmount} grandmas.`);
            document.getElementById("cookieButton").textContent = (`Click for ${increaseCookies} cookies!`)
            document.getElementById("grandmaTimer").textContent = (`You have ${grandmaAmount} grandmas! ${grandmaCost} Cs.`)
            document.getElementById("Cookies").textContent = `Cookies: ${amountCookies.toFixed(2)}`
            grandmaCooking()

       } 
       else {
        console.log(`Need ${grandmaCost}`)
       }
       
}

//  former iteration of it, cba going through to see which version to keep so commentating it out just in casze
// function minerTimerFunction(){
//     if (amountCookies >= minersCost){
//         amountCookies = amountCookies - minersCost
//         minersAmount = minersAmount +1
//         minersCost = minersCost*2
//         console.log(minersCost);
//         console.log(`You have ${minersAmount} miners.`);
//             document.getElementById("cookieButton").textContent = (`Click for ${increaseCookies} cookies!`)
//             document.getElementById("minerTimer").textContent = (`You have ${minersAmount} miners! ${minersCost} Cs.`)
//             document.getElementById("Cookies").textContent = (`Cookies: ${amountCookies.toFixed(2)}`)
//        } 
//        else {
//         console.log(`Need ${minersCost}`)
//        }
       
// }

function minerTimerFunction(){ // Click on miner button function
    if (amountCookies >= minersCost){
        amountCookies = amountCookies - minersCost
        minersAmount = minersAmount +1
        minersCost = minersCost*2
        console.log(minersCost);
        console.log(`You have ${minersAmount} miners.`);
            document.getElementById("cookieButton").textContent = (`Click for ${increaseCookies} cookies!`)
            document.getElementById("minerTimer").textContent = (`You have ${minersAmount} miners! ${minersCost} Cs.`)
            document.getElementById("Cookies").textContent = `Cookies: ${amountCookies.toFixed(2)}`  
        minerCooking()    
       }
       else {
        console.log(`Need ${minersCost}`)
       }
       
    }

function grandmaCooking(){ // Timer function, referenced in grandmaTimerFunction() to start the interval and to add more grandmas
    amountCookies = amountCookies + grandmaIncrease // Fixed a bug where I doubled the effectivesness
    document.getElementById("Cookies").textContent = `Cookies: ${amountCookies.toFixed(2)}`
setInterval(function(){
    amountCookies = amountCookies + grandmaIncrease // Because of Increase*Amount instead of + Increase
    document.getElementById("Cookies").textContent = `Cookies: ${amountCookies.toFixed(2)}`
}, 1000)

}

function minerCooking(){ // Timer function, referenced in minerTimerFunction() to start the interval and to add more miners
    amountCookies = amountCookies + minersIncrease // Fixed a bug where I doubled the effectivesness
    document.getElementById("Cookies").textContent = `Cookies: ${amountCookies.toFixed(2)}`
setInterval(function(){
    amountCookies = amountCookies + minersIncrease  // Because of Increase*Amount instead of + Increase
    document.getElementById("Cookies").textContent = `Cookies: ${amountCookies.toFixed(2)}`
}, 1000)
}

function upgradeMiners(){ // Improve miner gain button. It is different from the Grandma version as it didn't work, but I have no idea why
    // FIXED - It checked the cost for ANOTHER miner (minersCost) instead of UPGRADING the miner (upgradeMinersCost)
    if (minersAmount>=1){
    if (amountCookies   >= upgradeMinersCost){
        amountCookies   = amountCookies-upgradeMinersCost
        minersIncrease = minersIncrease+2
        upgradeMinersCost = upgradeMinersCost*2
        document.getElementById("upgradeMiners").textContent= (`Miners make ${minersIncrease.toFixed(2)} cookies. Price is ${upgradeMinersCost}.`)
        console.log(`Each miner produces ${minersIncrease}`);
        
    }
else {
    console.log("Not enough cookies.");
}
    }
else {
    console.log("No miners");
}}


function upgradeGrandma(){ // See upgradeMiners(). Has less function thhan the miner version, but this one somehow works.
    if (amountCookies   >= grandmaUpgradeCost){
        amountCookies   = amountCookies-grandmaUpgradeCost
        grandmaIncrease = grandmaIncrease+0.3
        grandmaUpgradeCost = grandmaUpgradeCost*2
        document.getElementById("upgradeGrandma").textContent= (`Grandmas make ${grandmaIncrease.toFixed(2)} cookies. Price is ${grandmaUpgradeCost}.`)
        console.log(`Each Grandma produces ${grandmaIncrease}`);
        
    }
else {
    console.log("Not enough cookies.");
}
    }

function upgradeGrandmaAndMiners(){ 
    // First attempt of one button upgrade multiple cooks. Simple version could just call the functions to upgrade, but this is x7.
    if (amountCookies >= upgradeGraAMinCost){
        amountCookies   = amountCookies - upgradeGraAMinCost
        upgradeGraAMinCost = upgradeGraAMinCost*2
        grandmaIncrease = grandmaIncrease +2.1
        minersIncrease  = minersIncrease +14
            document.getElementById("upgradeGrandma").textContent= (`Grandmas make ${grandmaIncrease.toFixed(2)} cookies. Price is ${grandmaUpgradeCost}.`)
            document.getElementById("cookieButton").textContent = (`Click for ${increaseCookies} cookies!`)
            document.getElementById("minerTimer").textContent = (`You have ${minersAmount} miners! They make ${minersIncrease} cookies!${minersCost} Cs.`)
            document.getElementById("Cookies").textContent = (`Cookies: ${amountCookies.toFixed(2)}`)
    }
    else {
        console.log("You can't afford to upgrade both.");
        
    }
}