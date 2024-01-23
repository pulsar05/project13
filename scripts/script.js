


let num=0;
let a=0;
let x=0;
function letter_d(){
    if (a == 0){
        document.getElementById("letter_d").innerHTML = "D"
        a=a+1
    }
    
    else{
        document.getElementById("letter_d1").innerHTML = "D"
    }
    console.log(a)
}
function letter_i(){
    document.getElementById("letter_i").innerHTML = "I"
}
function letter_a(){
    document.getElementById("letter_a").innerHTML = "A"
}
function letter_m(){
    document.getElementById("letter_m").innerHTML = "M"
}
function letter_o(){
    document.getElementById("letter_o").innerHTML = "O"
}
function letter_n(){
    document.getElementById("letter_n").innerHTML = "N"
}
function wrong(){
    if (x == 0){
        document.getElementById("level_1").style.display = "block";
        
        x=x+1
        document.getElementById("num").innerHTML = x
    }
    else if (x == 1){
        document.getElementById("level_2").style.display = "block";
        x=x+1
        document.getElementById("num").innerHTML = x
    }
    else if (x == 2){
        document.getElementById("level_3").style.display = "block";
        x=x+1
        document.getElementById("num").innerHTML = x
    }
    else if (x == 3){
        document.getElementById("level_4").style.display = "block";
        x=x+1
        document.getElementById("num").innerHTML = x
    }
    else if (x == 4){
        document.getElementById("level_5").style.display = "block";
        x=x+1
        document.getElementById("num").innerHTML = x
    }
    else if (x == 5){
        document.getElementById("level_6").style.display = "block";
        document.getElementById("sad").style.display = "block";
        
    }
    
    console.log(x);
}


function refreshPage(){
    window.location.reload();
} 
