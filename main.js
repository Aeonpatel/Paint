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
mouse_event="mousedown"
}
function My_mouseup(e){
    mouse_event="mouseup"
}
function My_mouseleave(e){
    mouse_event="mouseleave"
}
function My_mousemove(e){
    currentmouselocationX=e.clientX-canvas.offsetleft
    currentmouselocationY=e.clientY-canvas.offsettop
}