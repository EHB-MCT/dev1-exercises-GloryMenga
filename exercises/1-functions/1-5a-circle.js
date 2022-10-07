"use strict";



   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   drawcircle();

   function drawcircle(){

      context.strokeStyle = 'orange';
      context.beginPath();
      context.fillStyle = 'orange';
      context.rect(50,50,300,200);
      context.fill();
      context.stroke();

      context.strokeStyle = 'yellow';
      context.beginPath();
      context.fillStyle = 'yellow';
      context.arc(200,250,100,0,2 * Math.PI);
      context.fill();
      context.stroke();

      context.strokeStyle = 'blue';
      context.beginPath();
      context.fillStyle = 'blue';
      context.rect(50,250,300,100);
      context.fill();
      context.stroke();

   }