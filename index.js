window.onload= function start(){
    let data, result,button;
    button = document.querySelector('.btn');
//const text = document.querySelector(".text");

let euros = document.getElementById('euros');
let dollar = document.getElementById('dollar');
let ponds = document.getElementById('pond');
async function getData(){
     const x = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    console.log(x);
     data = await x.json();
    result =  await (data.bpi);
    console.log(result);
    euros.insertAdjacentHTML("afterbegin",`${result.EUR.rate}`);
    dollar.insertAdjacentHTML("afterbegin",`${result.USD.rate}`);
    ponds.insertAdjacentHTML("afterbegin",`${result.GBP.rate}`);
    euros.style.animation=" sideright 0.5s ease";
    dollar.style.animation=" sideright 0.5s ease";
    
    ponds.style.animation=" sideright 0.5s ease";
    
    
    //return result;
    
    


}
 getData();
 button.addEventListener("click", ()=>{
     location.reload();

 });
$(".btn").addClass("jump");
 
}
