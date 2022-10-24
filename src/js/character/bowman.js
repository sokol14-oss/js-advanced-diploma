import Character from "../Character";
export class Bowman extends Character {
    constructor(level,attack,defence,health,type){
        super(level,attack,defence,health,type);
        this.attack = 25;
        this.defence = 25;
    }
}