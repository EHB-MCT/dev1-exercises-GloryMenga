"use strict";

import context from "../../scripts/context.js";
import * as utils from "../../scripts/utils.js";

let width = window.innerWidth;
let height = window.innerHeight;
let margin = 200;

function drawcircle(){

    let bubbleAmount = 200;
    context.fillRect(0,0,width,height);

    for(i = 0;i < bubbleAmount ;i++){
        
        let randomX = margin + Math.random() * width - margin * 2;
        let randomy = margin + Math.random() * height - margin * 2;
        let randomHue = math.random() * 360;
        let randomSize = 10 + Math.random() * 40;
        context.fillStyle = utils.hsla(randomHue,50,50,0.5);
        utils.drawcircle(randomX,randomy,randomSize);
    }
}