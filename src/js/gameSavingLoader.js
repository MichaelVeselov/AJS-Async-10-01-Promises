import json from './parser.js';
import read from './reader.js';
import GameSaving from './gameSaving.js';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((response) => new GameSaving(JSON.parse(response)));
  }
}
