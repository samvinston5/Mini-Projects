const bodyEl= document.querySelector("body");
bodyEl.addEventListener("mousemove",()=>{
    let xPos =event.offsetX;
    let yPos  = event.offsetY;
    const size = Math.random()*100;
    const spanE = document.createElement("span");
    spanE.style.top = yPos +"px";
    spanE.style.left = xPos+"px";
    spanE.style.width = size+"px";
    spanE.style.height = size+"px";

    bodyEl.appendChild(spanE);


    setTimeout(()=>{
        spanE.remove();
    },3000)
})