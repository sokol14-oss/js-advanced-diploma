export class Swordsman extends Character {
    constructor(level,attack,defence,health,type){
        super(level,attack,defence,health,type,attack,defence);
        this.attack = 40;
        this.defence = 10;
    }
}