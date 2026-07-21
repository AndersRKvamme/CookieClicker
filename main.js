// console.log ("Hello log.js!")
let amountBrann         = 0;        // Amount of Brann stickers you have
let increaseBrann       = 1;        // Brann stickers gained when clicked
let clickCost           = 4;        // Cost of upgrading (to be deprecated)
let brannTimer          = 0;        // Not used?
let grandmaCost         = 10;       // Cost to purchase a grandma
let grandmaAmount       = 0;        // Amount of grandma you have
let grandmaIncrease     = 0.3;      // Amount of Brann stickers grandma's create
let grandmaUpgradeCost  = 150;      // Cost of upgrading grandmas
let minersAmount        = 0;        // Amount of miners you have
let minersCost          = 50;       // Cost to purchase miners
let minersIncrease      = 2;        // Amount of Brann stickers make
let roundedBrann        = 0;        // Not used?
let upgradeGraAMinCost  = 800;      // Upgrade both miners and Grandma cost tester
let upgradeMinersCost   = 200;      // Upgrade miners cost
let clickPower1Cost     = 10        // 1st clicking power cost
let brannsPerSecondNow  = 0         // Delete? 
let brannPerSecondCPS   = 0         // Delete?
let grandmaPower1Cost   = 350       // 1st grandma upgrade cost

// TODO: Rework miners and grandmas
// TODO: Get cps/StickersPerSecond working
// TODO: Upgrades
// TODO: Actual CSS work

function grandmaPower1(){ // Grandma upgrade. Cost 350, req 400. 
    if (amountBrann >= grandmaPower1Cost & amountBrann > 400) {
        grandmaIncrease = grandmaIncrease +1.1
        amountBrann = amountBrann - grandmaPower1Cost
            document.getElementById("BrannStickers").textContent = `Brann Stickers: ${amountBrann.toFixed(2)}`
            console.log(amountBrann)
        document.getElementById("grandmaPower1").remove();
    }
    else {
        console.log("Cost is 350, req 400 Brann stickers");
        
    }
}

function clickPower1(){ // First PROPER upgrade. Cost 10. Req Brann stickers 100. Temp before C per second
    if (amountBrann >= clickPower1Cost & amountBrann > 100) {
        increaseBrann = increaseBrann +1
        amountBrann = amountBrann - clickPower1Cost
        document.getElementById("BrannStickers").textContent = `Brann: ${amountBrann.toFixed(2)}`
            console.log(amountBrann)
        document.getElementById("clickPower1").remove();
    }
    else {
        console.log("Cost is 10, req 100 Brann stickers");
        
    }
}

function makeBrann(){ // the default make Brann function
    amountBrann = amountBrann+increaseBrann;
    document.getElementById("BrannStickers").textContent = (`Brann stickers: ${amountBrann.toFixed(2)}`)
    console.log(amountBrann)
}

function brannIncreaseFunction(){ // Clicking power
    if(amountBrann >= clickCost) {
        increaseBrann = increaseBrann +1;
        amountBrann = amountBrann - clickCost;
        console.log(increaseBrann);
            document.getElementById("BrannStickers").textContent = `Brann Stickers: ${amountBrann.toFixed(2)}`
            console.log(amountBrann)
        clickCost = clickCost*2
        console.log(clickCost)
        document.getElementById("Brann").textContent = (`Click for ${increaseBrann} Brann stickers!`)
        document.getElementById("clickImprove").textContent = (`Pay ${clickCost} to improve!`)
}
else{
    console.log(`Need ${clickCost}.`)
}
}

function grandmaTimerFunction(){ // Click on button function
    if (amountBrann >= grandmaCost){
        amountBrann = amountBrann - grandmaCost
        grandmaAmount = grandmaAmount +1
        grandmaCost = grandmaCost*2
        console.log(grandmaCost);
        console.log(`You have ${grandmaAmount} grandmas.`);
            document.getElementById("Brann").textContent = (`Click for ${increaseBrann} Brann stickers!`)
            document.getElementById("grandmaTimer").textContent = (`You have ${grandmaAmount} grandmas! ${grandmaCost} Cs.`)
            document.getElementById("BrannStickers").textContent = `Brann stickers: ${amountBrann.toFixed(2)}`
            grandmaCooking()

       } 
       else {
        console.log(`Need ${grandmaCost}`)
       }
       
}


function minerTimerFunction(){ // Click on miner button function
    if (amountBrann >= minersCost){
        amountBrann = amountBrann - minersCost
        minersAmount = minersAmount +1
        minersCost = minersCost*2
        console.log(minersCost);
        console.log(`You have ${minersAmount} miners.`);
            document.getElementById("Brann").textContent = (`Click for ${increaseBrann} Brann stickers!`)
            document.getElementById("minerTimer").textContent = (`You have ${minersAmount} miners! ${minersCost} Cs.`)
            document.getElementById("BrannStickers").textContent = `Brann stickers: ${amountBrann.toFixed(2)}`  
        minerCooking()    
       }
       else {
        console.log(`Need ${minersCost}`)
       }
       
    }

function grandmaCooking(){ // Timer function, referenced in grandmaTimerFunction() to start the interval and to add more grandmas
    amountBrann = amountBrann + grandmaIncrease // Fixed a bug where I doubled the effectivesness
    document.getElementById("BrannStickers").textContent = `Brann stickers: ${amountBrann.toFixed(2)}`
setInterval(function(){
    amountBrann = amountBrann + grandmaIncrease // Because of +Increase*Amount instead of + Increase
    
    document.getElementById("BrannStickers").textContent = `Brann stickers: ${amountBrann.toFixed(2)}`
}, 1000)
// BrannPerSecond() // TEMP 134!!
}

function minerCooking(){ // Timer function, referenced in minerTimerFunction() to start the interval and to add more miners
    amountBrann = amountBrann + minersIncrease // Fixed a bug where I doubled the effectivesness
    document.getElementById("BrannStickers").textContent = `Brann stickers: ${amountBrann.toFixed(2)}`
setInterval(function(){
    amountBrann = amountBrann + minersIncrease  // Because of +Increase*Amount instead of + Increase
    document.getElementById("BrannStickers").textContent = `Brann stickers: ${amountBrann.toFixed(2)}`
}, 1000)
}

function upgradeMiners(){ // Improve miner gain button. It is different from the Grandma version as it didn't work, but I have no idea why
    // FIXED - It checked the cost for ANOTHER miner (minersCost) instead of UPGRADING the miner (upgradeMinersCost)
    if (minersAmount>=1){
    if (amountBrann   >= upgradeMinersCost){
        amountBrann   = amountBrann-upgradeMinersCost
        minersIncrease = minersIncrease+2
        upgradeMinersCost = upgradeMinersCost*2
        document.getElementById("upgradeMiners").textContent= (`Miners make ${minersIncrease.toFixed(2)} Brann stickers. Price is ${upgradeMinersCost}.`)
        console.log(`Each miner produces ${minersIncrease}`);
        
    }
else {
    console.log("Not enough Brann stickers.");
}
    }
else {
    console.log("No miners");
}}


function upgradeGrandma(){ // See upgradeMiners(). Has less function thhan the miner version, but this one somehow works.
    if (amountBrann   >= grandmaUpgradeCost){
        amountBrann   = amountBrann-grandmaUpgradeCost
        grandmaIncrease = grandmaIncrease+0.3
        grandmaUpgradeCost = grandmaUpgradeCost*2
        document.getElementById("upgradeGrandma").textContent= (`Grandmas make ${grandmaIncrease.toFixed(2)} Brann stickers. Price is ${grandmaUpgradeCost}.`)
        console.log(`Each Grandma produces ${grandmaIncrease}`);
        
    }
else {
    console.log("Not enough Brann stickers.");
}
    }

function upgradeGrandmaAndMiners(){ 
    // First attempt of one button upgrade multiple cooks. Simple version could just call the functions to upgrade, but this is x7.
    if (amountBrann >= upgradeGraAMinCost){
        amountBrann   = amountBrann - upgradeGraAMinCost
        upgradeGraAMinCost = upgradeGraAMinCost*2
        grandmaIncrease = grandmaIncrease +2.1
        minersIncrease  = minersIncrease +14
            document.getElementById("upgradeGrandma").textContent= (`Grandmas make ${grandmaIncrease.toFixed(2)} Brann stickers. Price is ${grandmaUpgradeCost}.`)
            document.getElementById("Brann").textContent = (`Click for ${increaseBrann} Brann stickers!`)
            document.getElementById("minerTimer").textContent = (`You have ${minersAmount} miners! They make ${minersIncrease} Brann stickers!${minersCost} Cs.`)
            document.getElementById("BrannStickers").textContent = (`Brann stickers: ${amountBrann.toFixed(2)}`)
    }
    else {
        console.log("You can't afford to upgrade both.");
        
    }
}