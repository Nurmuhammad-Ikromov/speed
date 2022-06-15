// Piyoda -3.6km/soat 
// Velosiped - 20.1 km/soat 
// Mashina -70km/soat 
// Samolyot - 800km/soat 

var elInput = document.querySelector(".time__form__input");
var elForm = document.querySelector(".time__form");
var elSpan1 = document.querySelector(".time__span1")
var elSpan2 = document.querySelector(".time__span2")
var elSpan3 = document.querySelector(".time__span3")
var elSpan4 = document.querySelector(".time__span4")
var elSpan11 = document.querySelector(".time__span11")
var elSpan12 = document.querySelector(".time__span12")
var elSpan13 = document.querySelector(".time__span13")
var elSpan14 = document.querySelector(".time__span14")
var elTxt = document.querySelector(".time__txt")

function time(len) {
    return len/3.6;
    
}

function time2(len) {
    return len/20.1;
    
}

function time3(len) {
    return len/70;
    
}

function time4(len) {
    return len/800;
    
}

elForm.addEventListener("submit", function(e){
    e.preventDefault;
    var inputVal = elInput.value ;
    if(inputVal>=0 && isNaN()){
    
    elSpan1.textContent = Math.floor(time(inputVal));
    elSpan2.textContent =  Math.floor(time2(inputVal));
    elSpan3.textContent =  Math.floor(time3(inputVal));
    elSpan4.textContent =  Math.floor(time4(inputVal));
    elSpan11.textContent =((time(inputVal)- Math.floor(time(inputVal)))*60).toFixed()+" daqiqa";
    elSpan12.textContent =((time2(inputVal)- Math.floor(time2(inputVal)))*60).toFixed()+" daqiqa";
    elSpan13.textContent =((time3(inputVal)- Math.floor(time3(inputVal)))*60).toFixed()+" daqiqa";
    elSpan14.textContent =((time4(inputVal)- Math.floor(time4(inputVal)))*60).toFixed()+" daqiqa";
    elTxt.textContent = ""
    elInput.classList.remove("is-invalid")
    elInput.classList.add("is-valid")



    return;
    }
    
    if (inputVal<0)
    {
        elTxt.textContent = " Iltimos, musbat son kiriting"
        elSpan1.textContent = "N"
        elSpan2.textContent = "N"
        elSpan3.textContent = "N"
        elSpan4.textContent = "N"
        elInput.classList.add("is-invalid")
        elSpan11.textContent = ""
        elSpan12.textContent = ""
        elSpan13.textContent = ""
        elSpan14.textContent = ""
        return;
    }
    else{
        elTxt.textContent = " Iltimos, son kiriting"
        elSpan1.textContent = "N"
        elSpan2.textContent = "N"
        elSpan3.textContent = "N"
        elSpan4.textContent = "N"
        elInput.classList.add("is-invalid")
        elSpan11.textContent = ""
        elSpan12.textContent = ""
        elSpan13.textContent = ""
        elSpan14.textContent = ""
        return;
    }

   

})
