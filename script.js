let buttons = document.querySelectorAll("button");
let para=document.querySelectorAll(".text-container div");
let image=document.querySelector(".image-container");
buttons[0].classList.add("selectedButton");

buttons.forEach((val,idx)=>{
    val.addEventListener("click", () => {
        addClass(idx);
        removeClass(idx)
    });
})
function addClass(idx) {
  for (let i = 0; i < buttons.length; i++) {
    if (i == idx){
      buttons[i].classList.remove("selectedButton");
      para[i].style.display = "block";
      image.style.left=`-${100*(i)}%`;
      // console.log();
      
    } 
    else{ 
    buttons[i].classList.add("selectedButton");
    para[i].style.display = "none";
  }
}
}
function removeClass(idx) {
  for (let i = 0; i < buttons.length; i++) {
    if (i == idx){
      buttons[i].classList.add("selectedButton");
    }else{
      buttons[i].classList.remove("selectedButton");
    }
     
  }
}


