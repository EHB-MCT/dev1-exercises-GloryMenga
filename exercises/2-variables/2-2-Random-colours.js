"use strict";



   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");


   let r = math.floor(math.random() * 255);
   let g = math.floor(math.random() * 255);
   let b = math.floor(math.random() * 255);

   let color = "rgb(" + r + "," + g + "," + b + ")";

   drawsquares();

   function drawsquares(){
     context.lineWidth = 2;
     context.fill();
     context.beginPath();
     context.rect(50,50,200,200);
     context.stroke();

   }
