import Character from "../Character";
export class Vampire extends Character {
    constructor(level,attack,defence,health,type){
        super(level,attack,defence,health,type,attack,defence);
        this.attack = 25;
        this.defence = 25;
    }
}