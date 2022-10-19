import {Results} from './results';

export class Football implements Results{
    #winner: string;
    #date: Date;
    #winnerGoals: number;
    #loserGoals: number;

    constructor (winner: string, date: Date, winnerGoals: number, loserGoals: number) {
        this.#winner = winner;
        this.#date = date;
        this.#winnerGoals = winnerGoals;
        this.#loserGoals = loserGoals;
    }

    get winner(){
        return this.#winner;
    }
    get date(){
        return this.#date;
    }


    result(): string {
        return "Football match: " + this.#winnerGoals + " - " + this.#loserGoals;
    }

}