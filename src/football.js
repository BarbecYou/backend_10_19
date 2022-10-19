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
var _Football_winner, _Football_date, _Football_winnerGoals, _Football_loserGoals;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Football = void 0;
class Football {
    constructor(winner, date, winnerGoals, loserGoals) {
        _Football_winner.set(this, void 0);
        _Football_date.set(this, void 0);
        _Football_winnerGoals.set(this, void 0);
        _Football_loserGoals.set(this, void 0);
        __classPrivateFieldSet(this, _Football_winner, winner, "f");
        __classPrivateFieldSet(this, _Football_date, date, "f");
        __classPrivateFieldSet(this, _Football_winnerGoals, winnerGoals, "f");
        __classPrivateFieldSet(this, _Football_loserGoals, loserGoals, "f");
    }
    get winner() {
        return __classPrivateFieldGet(this, _Football_winner, "f");
    }
    get date() {
        return __classPrivateFieldGet(this, _Football_date, "f");
    }
    result() {
        return "Football match: " + __classPrivateFieldGet(this, _Football_winnerGoals, "f") + " - " + __classPrivateFieldGet(this, _Football_loserGoals, "f");
    }
}
exports.Football = Football;
_Football_winner = new WeakMap(), _Football_date = new WeakMap(), _Football_winnerGoals = new WeakMap(), _Football_loserGoals = new WeakMap();
