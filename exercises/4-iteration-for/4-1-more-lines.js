"use strict";

import context from "../../scripts/context.js";
import * as utils from "../../scripts/utils.js";

let horizontalLines = 60;
let verticalLines = 30;

let width = 600;
let height= 300;
let step = 10;
      
context.beginPath();
context.fillStyle = 'orange';
context.rect(0,0,width,height);
context.fill();

drawlines();

function drawlines(){
      
    context.strokeStyle = "white";

    
    for(let i = 0; i < horizontalLines ;i++){
        utils.drawLine(0 + (step * i),0,width - (step * i),height);
    }
    for(let i = 0; i <= verticalLines ;i++){
        utils.drawLine(0,0 + (step * i), width,height - (step * i));
    }
    
}