const numberRegex = /^[0-9]+$/;
const lettersRegex = /^([a-zA-Z])+$/;
const lettersBlankSpacesRegex = /^([a-zA-Z ])+$/;
const numberLettersBlankSpacesRegex = /^([0-9a-zA-Z ])+$/;

const isNumber = string => {
  return numberRegex.test(string);
};

const isOnlyLetters = string => {
  return lettersRegex.test(string);
};

const isLettersWithBlankSpaces = string => {
  return lettersBlankSpacesRegex.test(string);
};

const isNumberAndLettersWithWhiteSpaces = string => {
  return numberLettersBlankSpacesRegex.test(string);
};

module.exports = {
  isNumber,
  isOnlyLetters,
  isLettersWithBlankSpaces,
  isNumberAndLettersWithWhiteSpaces
};
