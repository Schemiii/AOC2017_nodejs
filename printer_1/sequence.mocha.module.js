"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-env mocha */
var sequence_1 = require("./sequence");
var assert = require("assert");
describe('printer.sequencer seq', function () {
    var assert = require('assert');
    var input;
    it('1122 produces a sum of 3', function () {
        input = '1122'.split('');
        assert(sequence_1.seq(input) === 3, '1122 does produce a sum of 3');
    });
    it('1234 produces a sum of 0', function () {
        input = '1234'.split('');
        assert(sequence_1.seq(input) === 0, '1234 does produce a sum of 0');
    });
    it('91212129 produces a sum of 9', function () {
        input = '91212129'.split('');
        assert(sequence_1.seq(input) === 9, '91212129 does produce a sum of 9');
    });
});
describe('printer.sequencer circle', function () {
    var input;
    it('1212 produces 6', function () {
        input = '1212'.split('');
        assert(sequence_1.circle(input) === 6, '1212 produces 6');
    });
    it('1221 produces 0 ', function () {
        input = '1221'.split('');
        assert(sequence_1.circle(input) === 0, '1221 produces 0');
    });
    it('123425 produces 4', function () {
        input = '123425'.split('');
        assert(sequence_1.circle(input) === 4, '123425 produces 4');
    });
    it('123123 produces 12', function () {
        input = '123123'.split('');
        assert(sequence_1.circle(input) === 12, '123123 produces 12');
    });
    it('12131415 produces 4', function () {
        input = '12131415'.split('');
        assert(sequence_1.circle(input) === 4, '12131415 produces 4');
    });
});
