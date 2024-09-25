var WordDictionary = function () {
  this.storage = new Map();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  if (this.storage.has(word.length)) {
    const existWords = this.storage.get(word.length);
    if (!existWords.includes(word)) {
      this.storage.set(word.length, [...existWords, word]);
    }
  } else {
    this.storage.set(word.length, [word]);
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  if (!this.storage.has(word.length)) return false;
  const wordArr = this.storage.get(word.length);
  let judgingFunction;
  if (word.includes(".")) {
    judgingFunction = function (str = "", search = "") {
      for (let i = 0; i < str.length; i++) {
        if (search[i] === ".") continue;
        if (str[i] !== search[i]) {
          return false;
        }
      }
      return true;
    };
  } else {
    judgingFunction = function (str = "", search = "") {
      return str === search;
    };
  }

  for (let i = 0; i < wordArr.length; i++) {
    if (judgingFunction(wordArr[i], word)) return true;
  }
  return false;
};

const s1 = new WordDictionary();
s1.addWord("aaa");
s1.addWord("ccc");
s1.addWord("bbbb");

console.log(s1.search("bbb."));
console.log(s1.search("aa"));
console.log(s1.search("aaa"));