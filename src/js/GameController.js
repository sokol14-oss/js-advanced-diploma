import Character from "./Character";
import PositionedCharacter from "./PositionedCharacter";
import {redrawPositions} from "./GamePlay";

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    drawUi(theme);
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
  getPositions() {
    const positionedCharacter = [this.character, this.position];
    this.redrawPositions(positionedCharacter);
    if(positionedCharacter.includes(...this.character)) {
      return false;
    }

    
  }
}
