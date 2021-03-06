import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';



export default function Input ({ name, placeholder = "" }) {
    const { fieldName, registerField } = useField(name);
    const inputRef = useRef(null);
    
   
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]);

    
    return(
        <div>
            <textarea 
            ref={inputRef}
            required           
            className = "entry-value"            
            placeholder={placeholder}></textarea>
        </div>        
    )
}