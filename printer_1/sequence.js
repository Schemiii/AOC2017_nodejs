"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function seq(sequence) {
    sequence.splice(0, 0, sequence[sequence.length - 1]);
    var i, a, b, c;
    c = [];
    for (i = 0; i < sequence.length - 1; i++) {
        a = sequence[i];
        b = sequence[i + 1];
        if (a === b) {
            c.push(a);
        }
    }
    return c.reduce(function (r, v) { return r + parseInt(v); }, 0);
}
exports.seq = seq;
function circle(sequence) {
    var i, a, b, c;
    var sl = sequence.length / 2;
    c = [];
    for (i = 0; i < sequence.length; i++) {
        a = sequence[i];
        b = sequence[(i + sl) % sequence.length];
        if (a === b) {
            c.push(a);
        }
    }
    return c.reduce(function (r, v) { return r + parseInt(v); }, 0);
}
exports.circle = circle;
