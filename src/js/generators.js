import { Bowman } from "./character/bowman";
import { Swordsman } from "./character/swordsman";
import { Magician } from "./character/magician";
import  {Vampire} from "./character/vampire";
import  {Undead} from "./character/undead";
import  {Daemon} from "./character/daemon";

/**
 * Формирует экземпляр персонажа из массива allowedTypes со
 * случайным уровнем от 1 до maxLevel
 *
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @returns генератор, который при каждом вызове
 * возвращает новый экземпляр класса персонажа
 *
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  for(let i = 0; i < allowedTypes.length; yield i) {
    allowedTypes[i] = Math.floor((Math.random() * allowedTypes.length));
    maxLevel = Math.floor((Math.random() * allowedTypes.length));
    const playGenerator = characterGenerator(allowedTypes, maxLevel);
    if(maxLevel > 2) {
      return;
    }
    return playGenerator;
  }
  // TODO: write logic here
}

/**
 * Формирует массив персонажей на основе characterGenerator
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @param characterCount количество персонажей, которое нужно сформировать
 * @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount
 * */
export function generateTeam(allowedTypes, maxLevel, characterCount) {
  const character = playGenerator;
  const team = [];
  characterCount++;
  team.push(character.next().value);
  return team;

  // TODO: write logic here
  }
