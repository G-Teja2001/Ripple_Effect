  const btnE1=document.querySelector(".btn");
  btnE1.addEventListener("mouseover",(event)=>{
    const x=event.pageX - btnE1.offsetLeft;
    const Y=event.pageY - btnE1.offsetTop;
    const a=event.pageA - btnE1.offsetRight;
    const b=event.pageB - btnE1.offsetBottom;


    btnE1.style.setProperty("--xpos",x + "px");
    btnE1.style.setProperty("--ypos",y + "px");
    btnE1.style.setProperty("--xpos",a + "px");
    btnE1.style.setProperty("--ypos",b + "px");
  })