let xp=0;
let gold=10;
let food=50;
 
let inventory=[];
const xpval=document.querySelector("XPtext");
const goldval=document.querySelector("goldtext");
foodval=document.getElementById("foodtext");
// document.getElementById("XPText").innerHTML=xp;
// document.getElementById("gold").innerHTML=gold;
// document.getElementById("food").innerHTML=food;
function addFood(){
    food=food+10;
    foodval.innerText=food;
}
function addGold(){
    gold=gold+3
    goldval.innerText=gold;
}