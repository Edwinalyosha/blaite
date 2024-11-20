// for the existence of one element with an id ="demo"which will house the cointdown. 

var countDownDate= new Date("Dec 25,2024 00:00:00").getTime();// the date that the countdown is supposed to end. 

//update the countdown every second. 
 var count=function(idd, idh, idm,ids){
    //Get today's date and time
    var now=new Date().getTime();

    // find the time interval between the two. 
    var interval=countDownDate-now;

    // convert these into usable units of days, hours minutes and seconds
    var in_s=1000, in_m=1000*60, in_h=in_m*60, in_d=in_h*24;

    var seconds=Math.floor((interval%in_m)/in_s);
    var minutes=Math.floor((interval%in_h)/in_m);
    var hours=Math.floor((interval%in_d)/in_h);
    var days=Math.floor(interval/in_d);

    document.getElementById(idd).innerText=days;
    document.getElementById(idh).innerText=hours;
    document.getElementById(idm).innerText=minutes;
    document.getElementById(ids).innerText=seconds;

    // if the countdown is finished Write some text.
    if (interval<0){
        clearInterval(x);
        document.getElementById(id).innerHTML="EXPIRED";
    }
}
setInterval("count('dd','hh', 'mm', 'ss')",1000);