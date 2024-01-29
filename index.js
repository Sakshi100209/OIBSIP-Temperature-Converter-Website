console.log("script working....");
let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
let result = document.getElementById('result');
let novalue = document.getElementById('novalue');
let nounit = document.getElementById('nounit');
let button = document.getElementById('convert');

function toCelsius(temp){
    return (temp-32)*(5/9);
}
function toFahrenheit(temp){
    return temp*9/5+32;
}

button.onclick= function(){
    let val= document.getElementById('value').value;
    let ans;

    val=Number(val);

    if(celsius.checked){
        ans=toCelsius(val).toLocaleString(undefined, {style: 'unit',unit:'celsius'})
    }
    else if(fahrenheit.checked){
        ans=toFahrenheit(val).toLocaleString(undefined, {style: 'unit',unit:'fahrenheit'})
    }
    else{}

    if(ans==undefined){
        result.innerHTML="";
    } else{
        result.innerHTML=ans;
    }
}