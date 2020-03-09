import React from 'react';

const FormInfo = ({ touched, message }) => {
    let info = null;
    if(!touched) info = ''
    else if(message) info = message
    else info = 'Correct!'

    return ( 
        <div className={message ? "formInfo formInfo--error" : "formInfo formInfo--correct"}>
            {info}
        </div> 
    )
}
export default FormInfo;