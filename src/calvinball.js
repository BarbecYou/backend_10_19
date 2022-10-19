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
var _Calvinball_winner, _Calvinball_date, _Calvinball_result;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calvinball = void 0;
class Calvinball {
    constructor(winner, date) {
        _Calvinball_winner.set(this, '');
        _Calvinball_date.set(this, void 0);
        _Calvinball_result.set(this, void 0);
        this.winner = winner;
        __classPrivateFieldSet(this, _Calvinball_date, date, "f");
        __classPrivateFieldSet(this, _Calvinball_result, Math.floor(Math.random() * 90 + 11), "f");
    }
    get winner() {
        return __classPrivateFieldGet(this, _Calvinball_winner, "f");
    }
    set winner(winner) {
        if (winner == "Calvin" || winner == "Hobbes") {
            __classPrivateFieldSet(this, _Calvinball_winner, winner, "f");
        }
        else {
            throw new Error("Hibás név!");
        }
    }
    get date() {
        return __classPrivateFieldGet(this, _Calvinball_date, "f");
    }
    result() {
        return "Calvinball: " + __classPrivateFieldGet(this, _Calvinball_result, "f") + " points";
    }
}
exports.Calvinball = Calvinball;
_Calvinball_winner = new WeakMap(), _Calvinball_date = new WeakMap(), _Calvinball_result = new WeakMap();
