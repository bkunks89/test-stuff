document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box-2").style.height = "250px";
});

document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box-2").style.backgroundColor = "blue"
});

document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box-2").classList.remove("fade-trans")
    document.getElementById("box-2").style.opacity = "50%";
});

document.getElementById("button4").addEventListener("click",function(){

    document.getElementById("box-2").style.height = "150px";
    document.getElementById("box-2").style.backgroundColor = "orange";
    document.getElementById("box-2").style.opacity = "100%";
    document.getElementById("box-2").style.borderStyle = "none"
    document.getElementById("box-2").classList.remove("fade-trans")
    

});

document.getElementById("button5").addEventListener("click", function(){
    
    document.getElementById("box-2").style.borderStyle = "solid"
    document.getElementById("box-2").style.borderWidth = "20px"
    document.getElementById("box-2").style.borderColor = "green"

        

});

document.getElementById("button6").addEventListener("click", function(){

    document.getElementById("box-2").style.boxShadow = "10px 10px 10px white"

});   

document.getElementById("button7").addEventListener("click", function(){
    const box2 = document.getElementById("box-2")
    box2.classList.add("fade-trans")
    box2.style.opacity = "0%"
});    

function testFunction(number){
    if (number === 4) {
        console.log("The number is 4")
    } else if (number === 5){
        console.log("The number is 5")
    } else {
        console.log("The number is not 4")
    }
}

function oddOrEven(number) {
    if (number % 2 === 0) {
        console.log("even")
    } else console.log("odd")

}

const array = [1 ,2, 3, 4, 5, 6, 7, 8]

function forLoop(){
    for (i = 0; i < 8; i++) {
        oddOrEven(array[i])
    }
}

