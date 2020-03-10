import React, { useState } from 'react';
import Docs from '../Docs/Docs.js';
import './loaderSpinner.scss';

// więcej grafik dostępne w dokumentacji
import Loader from 'react-loader-spinner'

const loaderSpinnerCommands = ['npm install react-loader-spinner --save'];
const loaderSpinnerLinks = [ {link: 'https://www.npmjs.com/package/react-loader-spinner', text:'for loader spinner'} ];

const LoaderSpinner = () => {
    const [ loading, setLoading ] = useState(false);

    return ( 
        <div className="loader container">

        <div className="button loaderSpinner__button" onClick={()=> setLoading(!loading)}>{loading ? 'Close' : 'Open'}</div>

        <Loader
            visible={loading}
            type="Oval"
            color="#00BFFF"
            height={100}
            width={100}
            // timeout={3000} //3 secs
        />
            
            <Docs links={loaderSpinnerLinks} commands={loaderSpinnerCommands} />
        </div>
     );
}
 
export default LoaderSpinner;