import GetTheCamps from "./JSON/GetTheCamps";
import GetTheValuesOfTheCamps from "./JSON/GetTheValuesOfTheCamps";
import JoinTheCampsAndValues, { finalCSVWithTheCamps } from "./JSON/JoinTheCampsAndValues"; 

function ConvertToCsv (FormData) {
  const allCamps = GetTheCamps(FormData.content);
  const allValues = GetTheValuesOfTheCamps(FormData.content);

  JoinTheCampsAndValues(allCamps, allValues);


}

export default ConvertToCsv;