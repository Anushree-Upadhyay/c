canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
 
var me="empty";
var lpx,lpy;
color= "black";
widthl=1;

canvas.addEventListner("mouseup",my_mouseup);
function my_mouseup(e) {
me="mouseUP";
}
canvas.addEventListner("mouseleave",my_mouseleave);
function my_mouseleave(e) {
me="mouseleave";
}
canvas.addEventListner("mousedown",my_mousedown);
function my_mousedown(e) {
me="mouseDown";
}
canvas.addEventListner("mousemove",my_mousemove);
function my_mousemove(e) {
cpx= e.clientX-canvas.offsetLeft;
cpy= e.clientY-canvas.offsetTop;
if (me =="mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthl;
    console.log("last position of x and y cordinates=");
    console.log("x="+lpx+"y="+lpy);
    ctx.moveTo(lpx,lpy);
    console.log("current position of x and y cordinates=");
    console.log("x="+cpx+"y="+cpy);
    ctx.lineTo(ctx,cpy);
    ctx.stroke();
}
lpx=cpx;
lpy=cpy;
}