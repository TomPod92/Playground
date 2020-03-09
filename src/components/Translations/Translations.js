import React, { useEffect, useState } from 'react';
import { withLocalize, Translate } from "react-localize-redux";
import Docs from '../Docs/Docs.js';
import InnerComponent from './InnerComponent.js';
import './translations.scss';

const translationsCommands = ['npm install react-localize-redux --save'];
const translationsLinks = [{link: 'https://ryandrewjohnson.github.io/react-localize-redux-docs/#getting-started', text:'for transations'}];

// dodatkowy kod w pliku index.js i App.js 
// komponent który chce zmieniać język (czuli korzystać z props.setActiveLanguage()) musi byc opakowany w withLocalize()
// komponent który chce tylko korzystać z tłumaczeń ( wykorzystywać <Translation /> ) nie msui być w nich opakowany

const Translations = (props) => {

    const [ language, setLanguage ] = useState('eng');

    useEffect( () => {
        props.setActiveLanguage(language);
    }, [language])

    const handleLanguageChange = () => {
        if(language === 'eng') setLanguage('pl');
        else if(language === 'pl') setLanguage('eng');  
    }

    return (
        <div className="translations container">
            <p className="translations__paragraph"><Translate id="greeting" /></p>
            <p className="translations__paragraph"><Translate id="common.name" /></p>
            <p className="translations__paragraph"><InnerComponent /></p>

            <button className="button" onClick={ handleLanguageChange }>Zmien jezyk</button>

            <Docs links={translationsLinks} commands={translationsCommands}/>
        </div>
     );
}
 
export default withLocalize(Translations);