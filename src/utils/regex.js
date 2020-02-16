const isStringNumberRegex = /^[0-9]+$/;
const isStringRegex = /^([a-zA-Z])+$/;
const isStringWithBlankSpacesRegex = /^([a-zA-Z ])+$/;

const isNumber = (string) => {
  return isStringNumberRegex.test(string);
}

const isString = (string) => {
  return isStringRegex.test(string);
}

const isStringWithBlankSpaces = (string) => {
  return isStringWithBlankSpacesRegex.test(string);
}