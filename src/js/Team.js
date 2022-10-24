import Character from "./Character";

/**
 * Класс, представляющий персонажей команды
 *
 * @todo Самостоятельно продумайте хранение персонажей в классе
 * Например
 * @example
 * ```js
 * const characters = [new Swordsman(2), new Bowman(1)]
 * const team = new Team(characters);
 *
 * team.characters // [swordsman, bowman]
 * ```
 * */
export default class Team {
  constructor() {
    this.members = new Set();
    if(!(this.members instanceof Character)) {
      throw new Error("Ошибка");
    }
}
add(user){
    this.members.add(user);
    if(this.members.has(user)) {
        throw new Error("Ошибка");
    }

}
addAll(...user){
    user.forEach(item => user.team.add(item));
}
toArray(){
return Array.from(this.members);
}
}
  // TODO: write your logic here

