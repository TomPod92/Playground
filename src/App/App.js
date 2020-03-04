import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home.js';
import Hamburger from '../components/Menu/Hamburger.js';
import Menu from '../components/Menu/Menu.js';
import Overlay from '../components/Menu/Overlay.js';
import Main from '../components/Main/Main.js';
import DrawerContainer from '../components/DrawerContainer/DrawerContainer.js';
import AnimationContainer from '../components/AnimationContainer/AnimationContainer.js';
import DragAndDrop from '../components/DragAndDrop/DragAndDrop.js';
import Toasts from '../components/Toasts/Toast.js';
import Icons from '../components/Icons/Icons.js';
import MyModal from '../components/Modal/Modal.js';
import Tooltip from '../components/Tooltip/Tooltip.js';
import Countup from '../components/Countup/Countup.js';
import IdleTimerContainer from '../components/IdleTimerContainer/IdleTimerContainer.js';
import ReactColorPicker from '../components/ReactColorPicker/ReactColorPicker.js';
import Translations from '../components/Translations/Translations.js';
import CSSTransitions from '../components/CSSTransitions/CSSTransitions.js';
import './app.scss';

//----------------------------------------------------------------
// importy dla "transaltions"
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
// zaimportowac pliki z tłumaczeniami
import eng from './eng.json';
import pl from './pl.json';
// stworzyc obiekt z tłumaczeniami
const translations = {
  eng: eng,
  pl: pl,
};
// opakować eksport <App> w "withLocalize"
//----------------------------------------------------------------

const App = (props) => {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const openMenu = () => setMenuOpen(!menuOpen);

  // jak tylko komponent sie wyrenderuje zainicjalizowac tłumaczenia
  useEffect( () => {
    props.initialize({
        languages: [
            { name: "English", code: "eng" },
            { name: "Polski", code: "pl" }
        ],
        options: { renderToStaticMarkup }
    });

    Object.keys(translations).forEach( key =>props.addTranslationForLanguage(translations[key], key) );
    
    // props.setActiveLanguage('eng');
  }, []);
  //----------------------------------------------------------------

  return (
    <BrowserRouter>
      <Hamburger openMenu={openMenu} open={menuOpen} />
      <Menu openMenu={openMenu} open={menuOpen} />
      <Overlay openMenu={openMenu} open={menuOpen}/>
      <Home />
      <Switch>
        <Route path="/" component={Main} exact/>
        <Route path="/animation" component={AnimationContainer} />
        <Route path="/drawer" component={DrawerContainer} />
        <Route path="/draganddrop" component={DragAndDrop} />
        <Route path="/toasts" component={Toasts} />
        <Route path="/icons" component={Icons} />
        <Route path="/modal" component={MyModal} />
        <Route path="/tooltip" component={Tooltip} />
        <Route path="/countup" component={Countup} />
        <Route path="/idletimer" component={IdleTimerContainer} />
        <Route path="/colorpicker" component={ReactColorPicker} />
        <Route path="/translations" component={Translations} />
        <Route path="/csstransitions" component={CSSTransitions} />
      </Switch>
    </BrowserRouter>
  )
}

export default withLocalize(App);
