import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home.js';
import Hamburger from '../Menu/Hamburger.js';
import Menu from '../Menu/Menu.js';
import Overlay from '../Menu/Overlay.js';
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
import ReactClassnames from '../components/ReactClassnames/ReactClassnames.js';
import Sortable from '../components/Sortable/Sortable.js';
import ReactFormik from '../components/ReactFormik/ReactFormik.js';
import CreditCard from '../components/CreditCard/CreditCard.js';
import Spinner from '../components/Spinner/Spinner.js';
import LoaderSpinner from '../components/LoaderSpinner/LoaderSpinner.js';
import CollapsibleDrawer from '../components/CollapsibleDrawer/CollapsibleDrawer.js';
import Roadmap from '../components/Roadmap/Roadmap.js';
import BeautifullDnD from '../components/BeautifullDnD/BeautifullDnD.js';
import JoyrideMap from '../components/JoyrideMap/JoyrideMap.js';
import ReactDnD from '../components/ReactDnD/ReactDnD.js';
import PieChart from '../components/PieChart/PieChart.js';
import ReactDatePicker from '../components/ReactDatePicker/ReactDatePicker.js';
import Presentation from '../components/Presentation/Presentation.js';
import Buttons from '../components/Buttons/Buttons.js';
import MediaPlayer from '../components/MediaPlayer/MediaPlayer.js';
import PageTransition from '../components/PageTransition/PageTransition.js';
import ReactCharts from '../components/ReactChart/ReactChart.js';
import Laptop from '../components/Laptop/Laptop.js';
import InfiniteScrollNavigation from '../components/InfiniteScroll/InfiniteScrollNavigation.js';
import WithPackage from '../components/InfiniteScroll/WithNpm.js'
import NoPackagev1 from '../components/InfiniteScroll/NoPackagev1'
import NoPackagev2 from '../components/InfiniteScroll/NoPackagev2'
import InterSectionObserverNavigation from '../components/IntersectionObserver/IntersectionObserverNavigation.js';
import MyInterSectionObserver from '../components/IntersectionObserver/MyIntersectionObserver.js';
import InterSectionObserverNPM from '../components/IntersectionObserver/InterSectionObserverNPM.js';
import MyOverdrive from '../components/Overdrive/MyOverdrive.js';
import Page_A from '../components/Overdrive/Page_A.js';
import Page_B from '../components/Overdrive/Page_B.js';
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
    // eslint-disable-next-line
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
        <Route path="/reactClassnames" component={ReactClassnames} />
        <Route path="/sortable" component={Sortable} />
        <Route path="/formik" component={ReactFormik} />
        <Route path="/creditcard" component={CreditCard} />
        <Route path="/spinner" component={Spinner} />
        <Route path="/loader" component={LoaderSpinner} />
        <Route path="/collapsibleDrawer" component={CollapsibleDrawer} />
        <Route path="/roadmap" component={Roadmap} />
        <Route path="/beautifulDnd" component={BeautifullDnD} />
        <Route path="/joyride" component={JoyrideMap} />
        <Route path="/reactDnD" component={ReactDnD} />
        <Route path="/piechart" component={PieChart} />
        <Route path="/datepicker" component={ReactDatePicker} />
        <Route path="/presentation" component={Presentation} />
        <Route path="/buttons" component={Buttons} />
        <Route path="/mediaPlayer" component={MediaPlayer} />
        <Route path="/pageTransition" component={PageTransition} />
        <Route path="/reactCharts" component={ReactCharts} />
        <Route path="/laptop" component={Laptop} />
        <Route path="/infiniteScroll" component={InfiniteScrollNavigation} exact/>

        <Route path="/infiniteScroll/npmPackage" component={WithPackage} />
        <Route path="/infiniteScroll/noPackage_1" component={NoPackagev1} />
        <Route path="/infiniteScroll/noPackage_2" component={NoPackagev2} />

        <Route path="/intersectionObserver" component={InterSectionObserverNavigation} exact/>
        <Route path="/intersectionObserver/npmPackage" component={MyInterSectionObserver} />
        <Route path="/intersectionObserver/noPackage" component={InterSectionObserverNPM} />

        <Route path="/overdrive" component={MyOverdrive} exact/>
        <Route path="/overdrive/page_A" component={Page_A} />
        <Route path="/overdrive/page_B" component={Page_B} />
      </Switch>
    </BrowserRouter>
  )
}

export default withLocalize(App);
