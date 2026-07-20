// This is a working file I use to make things easier for me, if you want to read my thought process
// it might be interesting, but it will older versions of code that will probably be heavily 
// edited in the main.


//Show and Hide test

// function hideTest (hideTest2){
//     let hider = document.getElementById(hideTest2);
//     Element.style.display ='button'    
// }





// First iteration of actual upgrade - Already implemented (without CPS)
// Intenion for the future is to copy paste this with better upgrades.
// function clickPower1(){ 
//     if (amountCookies >= clickPower1Cost & amountCookies > 100) {
//         increaseCookies = increaseCookies +1
//         amountCookies = amountCookies - clickPower1Cost
//             document.getElementById("Cookies").textContent = `Cookies: ${amountCookies.toFixed(2)}`
//             console.log(amountCookies)
//         document.getElementById("clickPower1").remove();
//     }
//     else {
//         console.log("Cost is 10, req 100 cookies");
        
//     }
// }

// setinterval check cookies per second test

// function cookiePerSecond(){
//     cookiesPerSecond = setInterval(function(){
//         cookiesPerSecond = amountCookies
//     }, 1000)
//         document.getElementById("cookiesPerSecond").textContent=`Cookies per second: ${cookiePerSecond.toFixed(2)}`
// }

// HUSK Å GJØRE SET TO TRUE OG KJØR HVIS FALSE PÅ CPS

// function cookiePerSecond(){ // how the fuck
//     cookiesPerSecondNow = amountCookies
//     cookiesPerSecondCPS = setInterval(function(){
        
//     }, 1000)
//         cookiesPerSecondCPS = cookiesPerSecondCPS / cookiesPerSecondNow
//             document.getElementById("cps").textContent= `Cookies per second: ${cookiesPerSecondCPS.toFixed(2)}`

// }


// Make a list of two numbers - add a static cookieAmount as 0 (0 is 1st in list)
// Add in cookieAmount after interval ass 1 (2nd)
// Divide the two -> set cookiesPerSecondNow as 0 / 1?
// function cookiePerSecond(){ // how the fuck ????
//     cookiesPerSecondNow = amountCookies
//         setInterval(function(){
//                 cookiesPerSecondCPS = cookiesPerSecondNow / amountCookies 
//                     document.getElementById("cps").textContent= `Cookies per second: ${cookiesPerSecondCPS.toFixed(2)}`

//     }, 1000)

// }

// function cookiePerSecond(){ // how the fuck ???? // TEMP 134!!
//     cookiesPerSecondNow = amountCookies
//         setInterval(function(){
//                 cookiesPerSecondCPS = (cookiesPerSecondNow) 
//                     document.getElementById("cps").textContent= `Cookies per second: ${cookiesPerSecondCPS.toFixed(2)}`

//     }, 1000)

// }

// function grandmaPower1(){ // First PROPER upgrade. Cost 10. Req Cookies 100. Temp before C per second
//     if (amountCookies >= grandmaPower1Cost & amountCookies > 100) {
//         increaseCookies = increaseCookies +1.1
//         amountCookies = amountCookies - grandmaPower1Cost
//             document.getElementById("Cookies").textContent = `Cookies: ${amountCookies.toFixed(2)}`
//             console.log(amountCookies)
//         document.getElementById("grandmaPower1").remove();
//     }
//     else {
//         console.log("Cost is 10, req 100 cookies");
        
//     }
// }

// Moved from main.js 
// former iteration of it, cba going through to see which version to keep so commentating it out just in casze
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