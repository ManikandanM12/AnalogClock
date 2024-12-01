var seconds=document.querySelector(".seconds")
var minutes=document.querySelector(".minutes")
var hours=document.querySelector(".hours")


 setInterval(runClock,1000) 
 function runClock(){
const currentDate=new Date()
    seconds.style.cssText=`--rotatin:${(currentDate.getSeconds()/60)*360};`
    minutes.style.cssText=`--rotatin:${(((currentDate.getSeconds()/60)+(currentDate.getMinutes()))/60)*360};`
    hours.style.cssText=`--rotatin:${(((((currentDate.getSeconds()/60)+(currentDate.getMinutes()))/60)+(currentDate.getHours()))/12)*360};`
    
 } 
 runClock()

