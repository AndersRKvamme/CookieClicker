// console.log ("Hello log.js!")
let amountCookies   = 0;
let increaseCookies = 1
let clickCost       = 4
let cookieTimer     = 0
let grandmaCost     = 10
let grandmaAmount   = 0
// let grandmaIncrease = 1
let grandmaIncrease = 1
let grandmaUpgradeCost = 150
let minersAmount    = 0
let minersCost      = 50
let minersIncrease   = 5

function makeDonuts(){
    amountCookies = amountCookies+increaseCookies;
    document.getElementById("Cookies").textContent = `Cookies: ${amountCookies}`
    console.log(amountCookies)
}

function cookieIncreaseFunction(){
    if(amountCookies >= clickCost) {
        increaseCookies = increaseCookies +1;
        amountCookies = amountCookies - clickCost;
        console.log(increaseCookies);
            document.getElementById("Cookies").textContent = `Cookies: ${amountCookies}`
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

function grandmaTimerFunction(){
    if (amountCookies >= grandmaCost){
        amountCookies = amountCookies - grandmaCost
        grandmaAmount = grandmaAmount +1
        grandmaCost = grandmaCost*2
        console.log(grandmaCost);
        console.log(`You have ${grandmaAmount} grandmas.`);
            document.getElementById("cookieButton").textContent = (`Click for ${increaseCookies} cookies!`)
            document.getElementById("grandmaTimer").textContent = (`You have ${grandmaAmount} grandmas! ${grandmaCost} Cs.`)
            document.getElementById("Cookies").textContent = `Cookies: ${amountCookies}`
            grandmaCooking()

       } 
       else {
        console.log(`Need ${grandmaCost}`)
       }
       
}

function minerTimerFunction(){
    if (amountCookies >= minersCost){
        amountCookies = amountCookies - minersCost
        minersAmount = minersAmount +1
        minersCost = minersCost*2
        console.log(minersCost);
        console.log(`You have ${minersAmount} miners.`);
            document.getElementById("cookieButton").textContent = (`Click for ${increaseCookies} cookies!`)
            document.getElementById("minerTimer").textContent = (`You have ${minersAmount} miners! ${minersCost} Cs.`)
            document.getElementById("Cookies").textContent = (`Cookies: ${amountCookies}`)
            minerCooking()

       } 
       else {
        console.log(`Need ${minersCost}`)
       }
       
}

function grandmaCooking(){
    amountCookies = amountCookies + (grandmaAmount*grandmaIncrease)
    document.getElementById("Cookies").textContent = `Cookies: ${amountCookies}`
setInterval(function(){
    amountCookies = amountCookies + (grandmaAmount*grandmaIncrease)   
    document.getElementById("Cookies").textContent = `Cookies: ${amountCookies}`
}, 1000)
}

function minerCooking(){
    amountCookies = amountCookies + (minersAmount*minersIncrease)
    document.getElementById("Cookies").textContent = `Cookies: ${amountCookies}`
setInterval(function(){
    amountCookies = amountCookies + (minersAmount*minersIncrease)   
    document.getElementById("Cookies").textContent = `Cookies: ${amountCookies}`
}, 1000)
}

function upgradeGrandma(){
    if (amountCookies   >= grandmaUpgradeCost){
        amountCookies   = amountCookies-grandmaUpgradeCost
        grandmaIncrease = grandmaIncrease+1
        document.getElementById("upgradeGrandma").textContent= (`Grandmas make ${grandmaIncrease} cookies. Price is ${grandmaUpgradeCost}.`)
        console.log(`Each Grandma produces ${grandmaIncrease}`);
        
    }
else {
    console.log("Not enough cookies.");
}
    }
