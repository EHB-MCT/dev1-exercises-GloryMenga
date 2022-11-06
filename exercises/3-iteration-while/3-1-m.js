"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawWormhole();
}

function drawWormhole() {
    let i = 0;
    let step = 10;
    while (i < 30) {
        Utils.drawLine(50 + step * i,50,350 - step * i,350);
        Utils.drawLine(350,50 + step * i,50,350 - step * i);
        i++;
    }
}