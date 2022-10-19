import {Results} from './results';

export class Marathon implements Results{
    #winner: string;
    #date: Date;
    #time: number;

    constructor(winner: string, date: Date, time: number) {
        this.#winner = winner;
        this.#date = date;
        this.#time = time;
    }

    get winner(){
        return this.#winner;
    }
    get date(){
        return this.#date
    }

    result(): string {
        return "Marathon: " + Math.floor(this.#time / 60) + " min - " + this.#time % 60 + " s";
    }
}