'use strict';

const countries_data = require('./alpha.json'),
alpha2 = require('./alpha2.json'),
wrongInput = "wrong country";

   
exports.allCountriesList = () => {
    return countries_data;
};


exports.getAllAlphaTwoCodes = () => {
  
  return countries_data;
}; 

exports.getCountry = countryCode => {
  countryCode = countryCode ? countryCode.toUpperCase() : null;
  if (isAlphaTwo(countryCode)) {
   return alpha2[countryCode] || wrongInput;
  }

}
function isAlphaTwo(countryCode) {
return countryCode && countryCode.length === 2; 
}