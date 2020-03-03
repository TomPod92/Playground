import React, { useState } from 'react';
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
import './app.scss';

const App = () => {

  const [ menuOpen, setMenuOpen ] = useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  }

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
      </Switch>
    </BrowserRouter>
  )
}

export default App;
