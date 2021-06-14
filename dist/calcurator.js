"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = exports.multiply = exports.sub = exports.sum = void 0;
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
function sub(a, b) {
    return a - b;
}
exports.sub = sub;
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
function divide(a, b) {
    if (b === 0)
        throw new Error("0으로 숫자를 나눌 수 없습니다.");
    return a / b;
}
exports.divide = divide;
