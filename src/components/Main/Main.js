import React from 'react';
import './main.scss';

const Main = () => {
    return ( 
    <div className="centered">
        <h1 className="app__header">Playground</h1>
        <p className="app__paragraph">1. Stworzyć nowy folder, a w nim nowy plik JS i SCSS</p>
        <p className="app__paragraph">2. W pliku App/App.js dodać nowy -Route- i zaimportowac nowy komponent</p>
        <p className="app__paragraph">3. W pliku Menu/Menu.js dodać nowy -NavLink-</p>
        <p className="app__paragraph">4. Pamiętać o dodatku -Docs-:</p>
        <p className="app__paragraph">------------------------------------</p>
        <p className="app__paragraph">import Docs from '../Docs/Docs.js';</p>
        <p className="app__paragraph">{`const Links = [ {link: '', text:''} ];`}</p>
        <p className="app__paragraph">const Commands = [''];</p>
        <p className="app__paragraph">const Tutorials = [''];</p>
        <p className="app__paragraph">{ `<Docs links={Links} commands={Commands} tutorials={Tutorials}/>` }</p>
    </div> 
    );
}
 
export default Main;