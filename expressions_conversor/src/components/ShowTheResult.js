import React, { useState } from 'react';

import { FinalJSON } from "../services/ConversorsFiles/ConvertToJson";
import { finalCSVWithTheCamps } from "../services/ConversorsFiles/JSON/JoinTheCampsAndValues";

function ShowTheResults() {
  const [contentOfTheResult, setContentOfTheResult] = useState ("Carregando...")
  
  verifyAndChangeTheInputValue(setContentOfTheResult, contentOfTheResult);
  
  return(
        <>
          <textarea          
          className = "output-values"
          value = {contentOfTheResult}
          id = "result"
          >
          </textarea>
        </>
    );
}

function verifyAndChangeTheInputValue(setContentOfTheResult, contentOfTheResult) 
{
  setInterval(
    () => {
    if(
      FinalJSON === "" 
      && 
      finalCSVWithTheCamps === "") 
    {
      setContentOfTheResult("The content will appear here.")
    } 
    else if(finalCSVWithTheCamps !== "") 
    {
      setContentOfTheResult(finalCSVWithTheCamps);
    }
    else if(FinalJSON !== "") 
    {
      setContentOfTheResult(FinalJSON);
    }
    else if(contentOfTheResult === "")
    {
      setContentOfTheResult("There's a internal error try it later :(")
    }
}, 1000); 
}

function returnTheResponseContent(responseContent) 
{
  return responseContent;
}

export default ShowTheResults; 