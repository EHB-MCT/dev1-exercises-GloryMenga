"use strict";

import context from "../../scripts/context.js";
import * as utils from "../../scripts/utils.js";

let width = window.innerWidth;
let height = window.innerHeight;
let amount = 10;
let step = 50;

drawCircles();

function drawCircles(){

    context.fillStyle = 'brown';

    for(let j = 0; j < 6; j++ ){
    for(let i = 0; i < 6; i++ ){
        console.log(j % 2);
        if (j % 2 == 1){
            context.fillRect( 100 + ((100 + 5) * i) ,50 + ((50 + 5) * j) , 100,50 );
        } else {
            context.fillRect(((100 + 5) * i) + 50,((50 + 5) * j) +50, 100,50 );
        }
        
    }
}
}