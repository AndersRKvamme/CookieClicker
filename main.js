// console.log ("Hello log.js!")
let amountCookies   = 0;
let increaseCookies = 1
let clickCost       = 4
let cookieTimer     = 0
let grandmaCost     = 10
let grandmaAmount   = 0
let grandmaIncrease = 1
let areWorkers      = false

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

function cookieTimerFunction(){
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

function grandmaCooking(){
    amountCookies = amountCookies + (grandmaAmount*grandmaIncrease)
    document.getElementById("Cookies").textContent = `Cookies: ${amountCookies}`
setInterval(function(){
    amountCookies = amountCookies + (grandmaAmount*grandmaIncrease)   
    document.getElementById("Cookies").textContent = `Cookies: ${amountCookies}`
}, 1000)
}
