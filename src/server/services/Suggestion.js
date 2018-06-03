const fs = require('fs');

/**
 * This methods accepts an array of numbers and returns the
 * words matching those numbers.
 */
class SuggestionService {
  
  constructor() {
    console.log('Loading dictionary...')
    this.dictionary = this._loadDictionary();
    console.log('Successfully loaded dictionary.')
  }

  suggest(numbers) {
    return this.dictionary[numbers] || [];
  }

  _loadDictionary() {
    const words = Object.keys(
      JSON.parse(
        fs.readFileSync(`${__dirname}/../data/dictionary.json`, 'utf8')
      )
    );
    
    let dictionary = {};

    for (let i = 0; i < words.length; i++) {
      let key = this._keyForWord(words[i]);
      if (!dictionary[key]) {
        dictionary[key] = [];
      }

      dictionary[key].push(words[i]);
    }

    return dictionary;
  }

  _keyForWord(word) {
    const map = {
      'a': 2,
      'b': 2,
      'c': 2,
      'd': 3,
      'e': 3,
      'f': 3,
      'g': 4,
      'h': 4,
      'i': 4,
      'j': 5,
      'k': 5,
      'l': 5,
      'm': 6,
      'n': 6,
      'o': 6,
      'p': 7,
      'q': 7,
      'r': 7,
      's': 7,
      't': 8,
      'u': 8,
      'v': 8,
      'w': 9,
      'x': 9,
      'y': 9,
      'z': 9
    };

    return `${word}`
      .split('')
      .reduce((key, letter) => `${key}${map[letter]}` , '');
  }
}

module.exports = SuggestionService;