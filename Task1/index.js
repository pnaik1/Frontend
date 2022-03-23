
let slidePosition=0;
const slides=document.getElementsByClassName("carousel_slide");
const totalSlides=slides.length;
document.getElementById("next").addEventListener("click",function(){
moveToNextSilde();
});
document.getElementById("prev").addEventListener("click",function(){
 moveToPrevSilde();
});

function updateSlidePosition(){
for(let slide of slides){
    slide.classList.remove('current-carousel'); 
}
slides[slidePosition].classList.add("current-carousel");

for(nav of NavSlider)
{
    nav.classList.remove("current_slide");
}
NavSlider[slidePosition].classList.add("current_slide")
}

function moveToNextSilde(){

    if(slidePosition==totalSlides-1){
        slidePosition=0;
    }
    else{
        slidePosition++;
    }
    updateSlidePosition();
}

function moveToPrevSilde(){
    if(slidePosition==0){
        slidePosition=totalSlides-1;
    }
    else{
        slidePosition--;
    }
    updateSlidePosition();
}


const NavSlider=document.getElementsByClassName("carousel_indicator");
for(let i=0;i<4;i++){
    
    NavSlider[i].addEventListener('click',function(){
        for(let slide of slides){
            slide.classList.remove('current-carousel');      
        }
        slides[i].classList.add("current-carousel");
    
        for(nav of NavSlider)
        {
            nav.classList.remove("current_slide");
        }
        NavSlider[i].classList.add("current_slide")
    
    })   
    
}


let left=1;
let right=5;

function show(){
    for(let i=left;i<=right;i++){
 
document.getElementById("c"+i).style.display="inline";
  }
  }
  function goright()
  {
     if(left<=1&&right<=6){
      document.getElementById("c"+left).style.display="none";
      left+=1;
      right+=1;

for(let i=left;i<=right;i++){
document.getElementById("c"+i).style.display="inline";
  }
}
else
return;
  }
  function goleft()
  {
     if(left>=2&&right>=6){
      document.getElementById("c"+right).style.display="none";
      left-=1;
      right-=1;

for(let i=left;i<=right;i++){
document.getElementById("c"+i).style.display="inline";
  }
}
else
return;
  }

