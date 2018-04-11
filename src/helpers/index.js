const titleize = require('titleize');

export const toUpperCase = (sentence) => {
  return sentence ? titleize(sentence) : '';
}

export const resolveType = (isShared) => {
  return isShared ? 'shared' : 'whole';
}
