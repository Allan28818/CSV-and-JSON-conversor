import React, { useState } from 'react';
import { Form } from "@unform/web";

import Input from '../components/Form/Input';
import Textarea from '../components/ShowTheResult';

import Conductor from '../controllers/ConductorOfTheValues';

import '../styles/index.css';
import '../styles/buttons.css';

import ButtonSelector from "../images/buttonselector.png";

const Index = () => {
    const [MatchConvesorFilter, setMatchConvesorFilter] = useState(false);
    const [classOfTheButtonTyper, setClassOfTheButtonTyper] = useState("toggle-btn");
    const [jsonSubtitle, setJsonSubtitle] = useState("json-subtitle active");
    const [csvSubtitle, setCsvSubtitle] = useState("csv-subtitle");
    
    
    function getDataAtTheFormAndInitializeConductor 
    (contentToConvert) 
    {
        Conductor(contentToConvert, MatchConvesorFilter);
    }

    function receiveTheMatchOfConversorAndChangeTheClasses() {
        if (MatchConvesorFilter) {            
            setMatchConvesorFilter(false);
            setClassOfTheButtonTyper("toggle-btn");
            setJsonSubtitle("json-subtitle active");
            setCsvSubtitle("csv-subtitle");
            
        } else if (!MatchConvesorFilter) {
            setMatchConvesorFilter(true);
            setClassOfTheButtonTyper("toggle-btn active");
            setJsonSubtitle("json-subtitle");
            setCsvSubtitle("csv-subtitle active");
        }
    }
    

    return (
        <>
          
            <h3 className = "basic-informer">Convert to:</h3>          
            <div className = "subtitles">
              <p className = {jsonSubtitle}>JSON</p>
              <p className = {csvSubtitle}>CSV</p>
            </div>
          
              <div className="container">
                  <div
                      className={classOfTheButtonTyper}
                      onClick={receiveTheMatchOfConversorAndChangeTheClasses}

                  >
                    
                    <img 
                    className = "inner-circle"
                    src={ButtonSelector}/>                
                  </div>
            </div>  
          

          

            <Form
                onSubmit=
                {getDataAtTheFormAndInitializeConductor}
            >

              <label 
                htmlFor = "content"  
                className = "entry-input-label"          
                >The content goes here:</label>
              <div className = "inputs-div">
            
                <Input
                    name = "content"                    
                    placeholder = "Put here your content"
                />
                <br />

                <Textarea 
                className = "result"/>
                <br />                
                <br />
              </div>
              
                
                <button
                  id="convert"
                  type="submit"
                  className = "convert-button"
                >CONVERT</button>
            </Form>      
           <p className = "copy-text">
             &copy; copyright Allan Julie Fontes de Oliveira - 2021
           </p>
           <p className = "github-text">
             Look this project in my 	&#10140;<a
             href = "https://github.com/Allan28818/CSV-and-JSON-conversor.git"
             > GitHub</a>. &#128568;
           </p>
        </>
    );
}

export default Index; 