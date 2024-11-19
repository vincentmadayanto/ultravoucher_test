const sortWord = (word) => {
  const charArr = word.split("");

  for (let i = 0; i < charArr.length; i++) {
    for (let j = 0; j < charArr.length - i - 1; j++) {
      if (charArr[j] > charArr[j + 1]) {
        let temp = charArr[j];
        charArr[j] = charArr[j + 1];
        charArr[j + 1] = temp;
      }
    }
  }

  return charArr.join("");
};

const wordsMap = (wordsArr) => {
  const copyArr = [...wordsArr];
  for (let i = 0; i < copyArr.length; i++) {
    copyArr[i] = sortWord(copyArr[i]);
  }

  return copyArr;
};

const convertToAnagram = (arr) => {
  const mappedArr = wordsMap(arr);
  const resultArr = [];

  for (let i = 0; i < mappedArr.length; i++) {
    let indexArr = [];
    let anagramArr = [];

    for (let j = 0; j < mappedArr.length; j++) {
      if (mappedArr[i] === mappedArr[j] && mappedArr[i] !== null) {
        indexArr.push([j]);
        anagramArr.push(arr[j]);
      }
    }

    if (indexArr.length) resultArr.push(anagramArr);

    for (const index of indexArr) {
      mappedArr[index] = null;
    }
  }

  return resultArr;
};

const wordsArr = ["cook", "save", "taste", "aves", "vase", "state", "map"];
console.log(convertToAnagram(wordsArr));

