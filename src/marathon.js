"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Marathon_winner, _Marathon_date, _Marathon_time;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marathon = void 0;
class Marathon {
    constructor(winner, date, time) {
        _Marathon_winner.set(this, void 0);
        _Marathon_date.set(this, void 0);
        _Marathon_time.set(this, void 0);
        __classPrivateFieldSet(this, _Marathon_winner, winner, "f");
        __classPrivateFieldSet(this, _Marathon_date, date, "f");
        __classPrivateFieldSet(this, _Marathon_time, time, "f");
    }
    get winner() {
        return __classPrivateFieldGet(this, _Marathon_winner, "f");
    }
    get date() {
        return __classPrivateFieldGet(this, _Marathon_date, "f");
    }
    result() {
        return "Marathon: " + Math.floor(__classPrivateFieldGet(this, _Marathon_time, "f") / 60) + " min - " + __classPrivateFieldGet(this, _Marathon_time, "f") % 60 + " s";
    }
}
exports.Marathon = Marathon;
_Marathon_winner = new WeakMap(), _Marathon_date = new WeakMap(), _Marathon_time = new WeakMap();
