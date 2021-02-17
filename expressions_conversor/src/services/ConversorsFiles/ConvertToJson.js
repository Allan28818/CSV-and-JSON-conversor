import CSVToArray from "./CSV/CsvToArray";
export var FinalJSON = "";

function ConvertToJson(FormData) {
    var convertedToArrayFromFunction = CSVToArray(FormData.content);
    var finalConversionToJson = [];

    ReceiveTheCSVInArrayAndPushTheSentences(
      convertedToArrayFromFunction, 
      finalConversionToJson);

    var json = JSON.stringify(finalConversionToJson);
    var conversionToJsonInString = json.replace(/},/g, "},\r\n");

    setTheJSON(conversionToJsonInString);
}


function ReceiveTheCSVInArrayAndPushTheSentences 
(convertedToArrayFromFunction, finalConversionToJson) 
{
  for (var i = 1; i < convertedToArrayFromFunction.length; i++) 
  {
    finalConversionToJson[i - 1] = {};
    for(var k = 0; 
      k < convertedToArrayFromFunction[0].length &&
      k < convertedToArrayFromFunction[i].length;  
      k++) 
      {
        var key = 
        convertedToArrayFromFunction[0][k];

        finalConversionToJson[i - 1][key] = 
        convertedToArrayFromFunction[i][k];
      }
  }

}

function setTheJSON (conversionToJsonInString) {
   return FinalJSON = conversionToJsonInString;
}

export function clearTheJSON()
{
  return FinalJSON = "";
}

export default ConvertToJson;