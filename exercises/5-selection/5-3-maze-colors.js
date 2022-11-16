"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawMaze();

function drawMaze(){

    context.lineWidth = 5;

    for(let t = 0; t < 100; t++){
        for(let i = 0; i < 180; i++){
            
            let random = Math.round(Math.random());
            let step = 10;
            if (random == 0){
                Utils.drawLine(0 + (step * i) ,0+ (step * t), step + (step * i),step + (step * t));
            } else {
                Utils.drawLine(0 + (step * i),step + (step * t),step + (step * i),0 + (step * t));
            }
        }

}   
}