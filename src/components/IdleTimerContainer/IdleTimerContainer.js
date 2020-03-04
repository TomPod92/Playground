import React, { useState, useRef } from 'react';
import Docs from '../Docs/Docs.js';
import IdleTimer from 'react-idle-timer';
import Modal from 'react-modal';

const idleTimerCommands = ['npm install react-idle-timer --save'];

Modal.setAppElement('#root');

const IdleTimerContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const idleTimerRef = useRef(null);
  const sessionTimeoutRef = useRef(null);

  const onIdle = () => {
    console.log('User is idle');
    setModalIsOpen(true);
    sessionTimeoutRef.current = setTimeout(logOut, 5000);
  }

  const logOut = () => {
    setModalIsOpen(false);
    setIsLoggedIn(false);
    clearTimeout(sessionTimeoutRef.current);
    console.log('User has been logged out');
  }

  const stayActive = () => {
    setModalIsOpen(false);
    clearTimeout(sessionTimeoutRef.current);
    console.log('User is active');
  }

  return (
    <div className="container">

      {isLoggedIn ? <h2 className="basicHeader">Hello Tomek</h2> : <h2 className="basicHeader">Hello Guest</h2>}
      <Docs link="https://www.npmjs.com/package/react-idle-timer"  commands={idleTimerCommands}/>

      <IdleTimer
        ref={idleTimerRef}
        timeout={1000 * 5}
        onIdle={onIdle}
      />

      <Modal isOpen={modalIsOpen}>
        <h2>You've been idle for a while!</h2>
        <p>You will be logged out soon</p>
        <div>
          <button className="button" onClick={logOut}>Log me out</button>
          <button className="button" onClick={stayActive}>Keep me signed in</button>
        </div>
      </Modal>

    </div>
  )
}

export default IdleTimerContainer