canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
var mouse_event=""
var lastpositionX=0
var lastpositionY=0

canvas.addEventListener("mousedown",My_mousedown)
canvas.addEventListener("mousemove",My_mousemove)
canvas.addEventListener("mouseup",My_mouseup)
canvas.addEventListener("mouseleave",My_mouseleave)
function My_mousedown(e){
    console.log("down")
mouse_event="mousedown"
}
function My_mouseup(e){
    console.log("up")
    mouse_event="mouseup"
}
function My_mouseleave(e){
    console.log("leave")
    mouse_event="mouseleave"
}
function My_mousemove(e){
    console.log("move")
    currentmouselocationX=e.clientX-canvas.offsetLeft
    currentmouselocationY=e.clientY-canvas.offsetTop

    if(mouse_event=="mousedown"){
        console.log("EVENT")
    ctx.beginPath()
    ctx.strokeStyle="red"
    ctx.arc(currentmouselocationX,currentmouselocationY,35,0,2*Math.PI)
    ctx.stroke();
    }
}