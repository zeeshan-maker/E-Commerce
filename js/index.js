// special Countdown 
let daysItem =document.querySelector("#days");
let hoursItem =document.querySelector("#hours");
let minItem =document.querySelector("#min");
let secItem =document.querySelector("#sec");

let Countdown = ()=>{
    let futureDate=new Date("10 Febuary 2023");
    let currentDate = new Date();
    let myDate=futureDate-currentDate;

    let days=Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours=Math.floor(myDate / 1000 / 60 / 60) % 24;
    let min=Math.floor(myDate / 1000 / 60) % 60;
    let sec=Math.floor(myDate / 1000 ) % 60;

    daysItem.innerHTML=days;
    hoursItem.innerHTML=hours;
    minItem.innerHTML=min;
    secItem.innerHTML=sec;
    

}
Countdown();
setInterval(Countdown,1000);



//nav hide
let navBar=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})
