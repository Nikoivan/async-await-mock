import GameSaving from './gamesaving';
import json from './parser';
import read from './reader';

class GameSavingLoader {
  constructor() {
    this.read = read();
  }

  async load() {
    try {
      const buffer = await this.read;
      const arr = await json(buffer);
      const result = JSON.parse(arr);
      const gameSavingResult = new GameSaving(result);
      return gameSavingResult;
    } catch (e) {
      throw new Error('Ошибка');
    }
  }
}

export default GameSavingLoader;
