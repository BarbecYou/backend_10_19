import {Results} from './results';

export class Calvinball implements Results{
    #winner: string = '';
    #date: Date;
    #result: number;

    constructor (winner: string, date: Date) {
        this.winner = winner;
        this.#date = date;
        this.#result = Math.floor(Math.random() * 90 + 11);
    }

    get winner (){
        return this.#winner;
    }
    set winner(winner: string) {
        if (winner == "Calvin" || winner == "Hobbes"){
            this.#winner = winner;
        }else {
            throw new Error("Hibás név!");
        }
    }
    get date(){
        return this.#date;
    }

    result(): string {
        return "Calvinball: " + this.#result + " points"
    }

}