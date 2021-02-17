var allValuesUntilTheLastInAnArray = "";
var allValuesUntilTheLastInAString = "";
var allValuesAfterTheLastCheckPoint = "";
var finalCSVWithoutTheCamps = "";

export var finalCSVWithTheCamps = "";

function JoinTheCampsAndValues(Camps, ValuesOfTheCamps) {
  const NumberOfLines = ValuesOfTheCamps.length / Camps.length;
  const multiplesToMakeTheCheckPoints = [];
  const multiplesOfPositionsInCheckPoints = [];

 
    makeTheValidMultiplesToRepeatTheMultiplication(
      NumberOfLines, 
      multiplesToMakeTheCheckPoints);
    returnTheCheckPointsFromTheTimesToRepeat(
      Camps,
      multiplesToMakeTheCheckPoints, 
      multiplesOfPositionsInCheckPoints
      );
    makeSentencesGroupsInACSVBlock( 
      Camps,
      ValuesOfTheCamps,
      multiplesOfPositionsInCheckPoints
      );
  
}

function makeTheValidMultiplesToRepeatTheMultiplication(
  NumberOfLines, multiplesToMakeTheCheckPoints) 
{  
  for(var i = 0; i < NumberOfLines; i++) {
    multiplesToMakeTheCheckPoints.push(i);
  }
}


function returnTheCheckPointsFromTheTimesToRepeat(
  Camps,
  multiplesToMakeTheCheckPoints, 
  multiplesOfPositionsInCheckPoints
  ) 
{
  for(
    var i = 0; 
    i < multiplesToMakeTheCheckPoints.length; 
    i++) 
  {
    const calcOfCheckPoints =
    multiplesToMakeTheCheckPoints[i] * Camps.length;

    multiplesOfPositionsInCheckPoints
    .push(calcOfCheckPoints);
  }
}

function makeSentencesGroupsInACSVBlock(
  Camps,
  ValuesOfTheCamps,
  multiplesOfPositionsInCheckPoints
  ) 
{
  
  var lastCheckPoint = ""; 
  const ClonedLinesWithoutTheLastValue = [];
  for(var i = 0; i < ValuesOfTheCamps.length; i++) {
    
    for(var k = 0; k < multiplesOfPositionsInCheckPoints.length; k++) 
    {   
      if(i === multiplesOfPositionsInCheckPoints[k]) {
        lastCheckPoint = multiplesOfPositionsInCheckPoints[k];
      }
    }

    ClonedLinesWithoutTheLastValue.push(
      returnTheValuesInChekPointsBoundaryUntilThePenultimate(
      ValuesOfTheCamps,
      lastCheckPoint,
      Camps));
  }
  getTheLastValues(lastCheckPoint, ValuesOfTheCamps);
  removeTheClonesAndJoinTheLines(ClonedLinesWithoutTheLastValue, Camps);
}


function returnTheValuesInChekPointsBoundaryUntilThePenultimate(
  ValuesOfTheCamps,
  lastCheckPoint,
  Camps
) 
{

  const PreviousCheckPointOrZero = 
  findTheLastCheckPointAndVerifyTheIndex(
    lastCheckPoint, 
    Camps);

  const returnAllTheValuesIntoTheBondaries = [];

  if(PreviousCheckPointOrZero[0]) {
    for(
      var i = PreviousCheckPointOrZero[1];
       i < lastCheckPoint; 
       i++) 
      {
     
        returnAllTheValuesIntoTheBondaries
        .push(ValuesOfTheCamps[i]);
      
    }
  }
  return returnAllTheValuesIntoTheBondaries;
}


function findTheLastCheckPointAndVerifyTheIndex(
  lastCheckPoint, 
  Camps) 
{

  const booleanAndCheckPointArray = [];

  lastCheckPoint - Camps.length < 0
  ? 
  booleanAndCheckPointArray.push(false) 
  : 
  booleanAndCheckPointArray.push(true);
  
  booleanAndCheckPointArray.push(lastCheckPoint - Camps.length);


  return booleanAndCheckPointArray;
}


function getTheLastValues(lastCheckPoint, ValuesOfTheCamps)
{
  var lastValues = "";
  for(var i = lastCheckPoint; i < ValuesOfTheCamps.length; i++) 
  {
    lastValues += " " + ValuesOfTheCamps[i];
  }

  allValuesAfterTheLastCheckPoint = lastValues;
}


function removeTheClonesAndJoinTheLines(ClonedLinesWithoutTheLastValue, Camps) 
{
  const concatenatedLinesMissingLastValues = [];
  console.log("ClonedLinesWithoutTheLastValue", ClonedLinesWithoutTheLastValue)
  for(var i = 0; i < ClonedLinesWithoutTheLastValue.length; i++)
  {
    if(i >= 2)
    {
      const unifiedValuesWithoutClones =  verifyIfThereIsClonedValuesByTheCamps(
        Camps, 
        i,
        ClonedLinesWithoutTheLastValue
        ) 
      
      if(
        concatenateTheLinesAndVerifyUndefinedValues(
        unifiedValuesWithoutClones) === 
        undefined) 
       {
         continue;
       } 
       else 
       {
        concatenatedLinesMissingLastValues
        .push(
        concatenateTheLinesAndVerifyUndefinedValues(
        unifiedValuesWithoutClones        
        ));
       }
    }
  }
  allValuesUntilTheLastInAnArray = concatenatedLinesMissingLastValues
  joinAllTheValuesUtilTheLastValue(allValuesUntilTheLastInAnArray, Camps);
}


function isPair(index) 
{
  const integerOrFloatCalc = index / 2;
  const integerOrFloatCalcInStringForFind = integerOrFloatCalc.toString();
  var pairIndexs = "";

  if(!integerOrFloatCalcInStringForFind.includes(".")) {
    if(index > 0 && integerOrFloatCalc > 0) {
      pairIndexs = index;
      return pairIndexs;
    }  
  }  
}

function concatenateTheLinesAndVerifyUndefinedValues(arrayWithValuesPerLine)
{
  var ValuesWithSpaces = "";
  if(arrayWithValuesPerLine === undefined) {
    return;
  } 
  else {
    
    for(var i = 0; i < arrayWithValuesPerLine.length; i++)
    {   
      ValuesWithSpaces += " " + arrayWithValuesPerLine[i];
    }

    return ValuesWithSpaces;
  }
}


function joinAllTheValuesUtilTheLastValue(allValuesUntilTheLastInAnArrayToJoin, Camps) {
  const CampsInAnUniqueString = putTheCampsInAnUniqueSentence(Camps);
  var joinedValues = "";
  for(var i = 0; i < allValuesUntilTheLastInAnArrayToJoin.length; i++)
  {
    joinedValues += `\n${allValuesUntilTheLastInAnArrayToJoin[i]}`;
  }
  allValuesUntilTheLastInAString = joinedValues;
  deliverAllTheValuesJoined();
  deliverAllCSVIntegratedFinalized(CampsInAnUniqueString);
}


function deliverAllTheValuesJoined()
{
  finalCSVWithoutTheCamps = 
  `${allValuesUntilTheLastInAString}\n${allValuesAfterTheLastCheckPoint}`; 
}


function putTheCampsInAnUniqueSentence(Camps)
{
  var CampsIntegrated = ""
  for(var i = 0; i < Camps.length; i++) {
    CampsIntegrated += " " + Camps[i];
  }
  return CampsIntegrated;
}

function deliverAllCSVIntegratedFinalized(CampsInAnUniqueString)
{
  const finalValuesWithSpacesErrors = `${CampsInAnUniqueString}${finalCSVWithoutTheCamps}`;
  const finalValuesWithoutSpaceErrorsInAnArray = removeUnecessarySpacesOfStrings(finalValuesWithSpacesErrors);
  
  finalCSVWithTheCamps = joinTheValuesOfAnArrayInBrokenLinesFormated(finalValuesWithoutSpaceErrorsInAnArray);
}

function joinTheValuesOfAnArrayInBrokenLinesFormated(arrayToJoin) 
{
  return arrayToJoin.reduce((index, next) => 
  (
    `${index}\n${next}`
  ))
}

export function clearTheCSV()
{
  finalCSVWithTheCamps = "";
}

//POINT

function verifyIfThereIsClonedValuesByTheCamps(
  Camps, 
  indexOfClone,
  arrayToDeliver
  ) 
{
  if(Camps.length === 1)
  {    
    return joinTheValuesOfAnArrayInBrokenLinesFormated(arrayToDeliver);
  }
  else if(Camps.length > 1) 
  {    
    return arrayToDeliver[isPair(indexOfClone)];
  }
  else 
  {
    console.error("Internal error try it later...");
  }
}

function removeUnecessarySpacesOfStrings(StringToRemoveTheSpaces)
{
  const noSpacesRegex = /((?<=^\s).+)|(.+(?<=^\s).+)|(.+[^\s].+[^\s].+)/gm;
  console.log("string to remove the spaces", StringToRemoveTheSpaces);
  return StringToRemoveTheSpaces.match(noSpacesRegex);
}

export default JoinTheCampsAndValues; 