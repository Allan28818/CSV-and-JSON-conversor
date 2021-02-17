import FinalClean from "./CommomFunctions/FinalClean";
const findIndexDelimiter = /}/g;
const WithoutExternalElementsData = /[^\s].+(?=\:)/gi;

function getTheCampsInYourFirstFit(FormData) {
 
  const indexOfEndOfDelimiter = findTheDelimiter(FormData);
  const stringBrokenInAnArray = [];

  const concatenatedUntilTheDelimiterData = 
  BrokeValuesOfTheDataInAnArray(
    indexOfEndOfDelimiter, 
    FormData, 
    stringBrokenInAnArray);
 
  
  const BrokenInSentencesWithoutFormatationData = 
  concatenatedUntilTheDelimiterData
  .match(WithoutExternalElementsData);

  const CampsCleanned = BrokenInSentencesWithoutFormatationData
  .map((current) => 
  {
    const withoutTwoPoints = current.replace(":","");
    return FinalClean(withoutTwoPoints);
    
  });

  return CampsCleanned;
}

function findTheDelimiter(FormData) {
  return findIndexDelimiter.exec(FormData).index;
};

function BrokeValuesOfTheDataInAnArray(DelimiterIndex, FormData, Array) {
  for(var i = 0; i < DelimiterIndex; i++) {
    Array.push(FormData[i]);
  }
  return Array.reduce((total, next) => total + next);
};

export default getTheCampsInYourFirstFit;