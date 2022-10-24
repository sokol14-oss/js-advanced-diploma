import Character from "../Character";
export class daemon extends Character {
    constructor(level,attack,defence,health,type){
        super(level,attack,defence,health,type,attack,defence);
        this.attack = 10;
        this.defence = 10;
    }
}