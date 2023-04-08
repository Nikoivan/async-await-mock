import GameSaving from "./gamesaving";
import json from "./parser";
import read from "./reader";

class GameSavingLoader {
  constructor() {
    this.read = read();
  }

  load() {
    return this.read
      .then((response) => json(response))
      .then((parseResponse) => {
        const result = JSON.parse(parseResponse);
        const gameSavingResult = new GameSaving(result);
        return gameSavingResult;
      })
      .catch((rejected) => {
        console.error(rejected);
      });
  }
}

export default GameSavingLoader;

const test = new GameSavingLoader();
test.load();
