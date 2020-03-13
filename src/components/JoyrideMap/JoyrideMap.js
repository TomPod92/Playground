import React, { useState } from "react";
import ReactJoyride from "react-joyride";
import './joyrideMap.scss';
import Docs from '../Docs/Docs.js';
import steps from './steps.js';

const Links = [ {link: 'https://docs.react-joyride.com/', text:' for Joyride'} ];
const Commands = ['npm i react-joyride'];
const Tutorials = ['https://medium.com/@sooyshim/the-basics-of-react-joyride-1a9e16213ee6', 'https://codesandbox.io/s/2zpjporp4p'];

const JoyrideMap = () => {
  const [ run, setRun ] = useState(false);
  
  const handleClickStart = () => setRun(true);

  const handleJoyrideCallback = data => {
    if(data.status === 'ready') setRun(false)
  };

  return (
    <div className="joyrideMap container">
      <ReactJoyride
        continuous
        // scrollToFirstStep
        showProgress
        showSkipButton
        run={run}
        steps={steps}
        callback={handleJoyrideCallback}
      />

      <div className="section">
          <h1 className="joyrideMap__header">React Joyride</h1>
          <button className="joyrideMap__button" onClick={handleClickStart}>Let's Go!</button>
      </div>

      <div className="section section--one demo__projects">
        <h2 className="section__header">Section 1</h2>
      </div>

      <div className="section section--two">
        <h2 className="section__header">Section 2</h2>
      </div>

      <div className="section section--three demo__about">
        <h2 className="section__header">Section 3</h2>
      </div>

      <div className="section section--four  demo__rumba">
        <h2 className="section__header">Section 4</h2>
        <div className="sectionFeature"></div>
        <Docs links={Links} commands={Commands} tutorials={Tutorials}/>
      </div>

    </div>
  );
  
}

export default JoyrideMap;