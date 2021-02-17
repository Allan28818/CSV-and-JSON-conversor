import ConvertToJson from '../services/ConversorsFiles/ConvertToJson';
import ConvertToCsv from '../services/ConversorsFiles/ConvertToCsv';

import activateCleaner from "./activeCleaner";

function FilterTheConversorValidateTheInputs(FormData, TypeOfTheConversor) {
  activateCleaner();
  if(FormData === null || FormData === "") {
    return;
  } else {
    TypeOfTheConversor 
    ?
    ConvertToCsv(FormData) 
    : 
    ConvertToJson(FormData);
  }
}

export default FilterTheConversorValidateTheInputs;