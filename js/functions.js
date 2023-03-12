
const testString = '';
const maxSize = 8;


const checkLength = function(inputLine, sizeLine) {
  if (inputLine.length > sizeLine) {
    return false;
  }

  return true;
};

let checkPolindrom = function(inputLine) {
  let reverseLine = inputLine.split('').reverse('').join('');

  return inputLine.toLowerCase() === reverseLine.toLowerCase() ;
};


let takeNember = function(inputLine) {
  let num = '';

  for (let i = 0; i <= inputLine.length - 1; i++) {
    for (let j = 0; j < 10; j++) {
      if (inputLine[i] == j) {
        num += inputLine[i];
      };
    };
  };

  return Number(num);
};
/*
1. Добавит в новую строку inputLine
2. Взять взять строку по символьно plusSymbol и добовлять пока она не добьется до значения minLenght
*/

/*
1. Выполнить цикл пока длинна новой строки, не ровна указаной длинне строки без учета 1 значения
2.
*/

let createStr = function(inputLine, minLength, plusSymbol) {
  let newString = '';
  let counter = 0;

  while (newString.length !== minLength - inputLine.length) {
    if (counter === plusSymbol.length) {
      counter = 0;
    }

    newString += plusSymbol[counter];

    counter++;
  }

  newString = newString + inputLine;
  return newString;
};
