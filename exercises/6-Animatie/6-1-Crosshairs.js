"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let colorAngle = 0;

window.onmousemove = move;


/**
* 
* @param {MouseEvent} eventData
*/

context.strokeStyle = 'red';
context.lineWidth = 5;
function move(eventData) {

    context.fillRect(0,0,width,height);
    context.fillStyle = 'white';

    let x = eventData.pageX;
    let y = eventData.pageY;

    
    Utils.drawLine(0,y,width,y);
    Utils.drawLine(x,0,x,height);

    
     
}