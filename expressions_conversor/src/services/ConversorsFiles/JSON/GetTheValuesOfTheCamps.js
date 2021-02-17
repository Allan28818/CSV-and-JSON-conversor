import FinalClean from "./CommomFunctions/FinalClean";
const findTheValuesRegex = /(?<=\:).+[^\s]/gm;

function getTheValuesOfTheCamps(FormData) {
  const DirtyValuesGotByTheRegex = 
  FormData
  .match(findTheValuesRegex);

  const ValuesCleanned = 
  DirtyValuesGotByTheRegex
  .map(
    current => 
  {
    const withoutTwoPoints = current.replace(":", "");
    return FinalClean(withoutTwoPoints);
  });

  return ValuesCleanned;
}

export default getTheValuesOfTheCamps;