"use strict";

import context from "../../scripts/context.js";
import * as utils from "../../scripts/utils.js";

let width = window.innerWidth;
let height = window.innerHeight;
let amount = 10;
let step = width / amount;

drawcircle();

function drawcircle(){

    

    for(let j = 0;j < 10 ; j++){
        for(let i = 0;i < 10 ; i++){

            if (j % 2 == 1){
            context.fillStyle = utils.hsla(200,50,50,70);
            utils.fillCircle(i * 100,i*100,50);
           } else {
            context.fillStyle = utils.hsla(0,50,50,70);
            utils.fillCircle(j * 100,j*100,50);
            }

        }
}
}