import React, {useState} from 'react';
import Docs from '../Docs/Docs.js';
import './spinner.scss';

// więcej loader'ów mozna zobaczyć na podstronie w dokumentacji
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import BeatLoader from "react-spinners/BeatLoader";

// można nadpisać CSS'a
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const spinnerCommands = ['npm install --save react-spinners'];
const spinnerLinks = [ {link: 'https://www.npmjs.com/package/react-spinners', text:'for react spinner'} ];
const spinnerTutorials = ['https://www.youtube.com/watch?v=T0i0zHyryrs'];

const Spinner = () => {
    const [ loading, setLoading ] = useState(false);

    return ( 
        <div className="spinner centered">
            <div className="button spinner__button" onClick={()=> setLoading(!loading)}>{loading ? 'Close' : 'Open'}</div>

            <ClipLoader
                css={override}
                size={150}
                color={"#123abc"}
                loading={loading}
            />

            <BeatLoader loading={!loading}/>

            <Docs links={spinnerLinks} commands={spinnerCommands} tutorials={spinnerTutorials}/>
        </div>
     );
}
 
export default Spinner;