"use strict";



   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   drawname();

   function drawname(){

    context.lineWidth = 1;
    context.strokeStyle = 'red'
    context.beginPath();
    context.moveTo(250, 50);
    context.lineTo(50,50);
    context.lineTo(30,200);
    context.lineTo(50,350);
    context.lineTo(250,350);
    context.lineTo(250,200);
    context.lineTo(150,200);
    context.stroke();

    context.lineWidth = 4;
    context.strokeStyle = 'green'
    context.beginPath();
    context.moveTo(300, 50);
    context.lineTo(300,350);
    context.lineTo(500,350);
    context.stroke();

    context.lineWidth = 8;
    context.strokeStyle = 'blue'
    context.fillStyle = 'purple'
    context.beginPath();
    context.moveTo(540, 50);
    context.lineTo(700,50);
    context.lineTo(700,350);
    context.lineTo(540,350);
    context.lineTo(540,50);
    context.fill();
    context.stroke();

    context.lineWidth = 6;
    context.strokeStyle = 'yellow'
    context.beginPath();
    context.moveTo(750, 350);
    context.lineTo(750,50);
    context.lineTo(900,50);
    context.lineTo(900,180);
    context.lineTo(750,180);
    context.lineTo(900,350);

    context.lineWidth = 6;
    context.strokeStyle = 'yellow'
    context.beginPath();
    context.moveTo(750, 350);
    context.lineTo(750,50);
    context.lineTo(900,50);
    context.lineTo(900,180);
    context.lineTo(750,180);
    context.lineTo(900,350);
    context.stroke();

    context.lineWidth = 15;
    context.strokeStyle = 'purple'
    context.beginPath();
    context.moveTo(950,350);
    context.lineTo(1100,50);
    context.lineTo(1020,210);
    context.lineTo(950,50);
    context.stroke();

   }