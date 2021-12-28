const slider = document.querySelector(".items");

let sliderLength = document.querySelectorAll('.item').length;
let sliderRightBtn = docdument.querySelector('right-btn');
let sliderLeftBtn = document.querySelector('left-btn');
let sliderCount = 0 ;

let firstChild = 

slider.addEventListener("click", function(event){
    alert("click");
})

const handleSlider = () => {
    
    if(sliderCount > sliderLength){
        sliderCount = 0 ;
    }
    else{
        sliderCount++;
    }
}

