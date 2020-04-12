import React from 'react';

// chyba lepiej użyć tagu <img/>
const Image = (props) => {
    return (
        <div className="image--usingImg">
            <img src={props.imageUrl} alt=""/>
        </div>
    );
}

// const Image = (props) => {
//     return (
//         <div className="image--usingBackground" style={{backgroundImage:`url(${props.imageUrl})`}}></div>
//     );
// }
 
export default Image;