import React from 'react';
import CountUp, { useCountUp } from 'react-countup';
import Docs from '../Docs/Docs.js';
import './countup.scss';

const countupCommands = ['npm install react-countup'];

const Countup = () => {

    const { countUp, start, pauseResume, reset, update } = useCountUp({
        duration: 5,
        end: 10000,
        startOnMount: false
    })

    return ( 
    <div className="countup container">
        <h2 className="countup__header basicHeader">Default:</h2>
        <div className="countup__number">
            <CountUp end={200}/>
        </div>

        <h2 className="countup__header basicHeader">Different duration:</h2>
        <div className="countup__number">
            <CountUp end={200} duration={4}/>
        </div>

        <h2 className="countup__header basicHeader">Different start:</h2>
        <div className="countup__number">
            <CountUp start={300} end={1000} duration={4}/>
        </div>

        <h2 className="countup__header basicHeader">Different prefix/suffix:</h2>
        <div className="countup__number">
            <CountUp end={1000} duration={4} prefix='$' decimals={2} />
            {/* <CountUp end={1000} duration={4} suffix='$' decimals={2} /> */}
        </div>

        <h2 className="countup__header basicHeader">Additional functions:</h2>
        <div className="countup__number">
            { countUp }
        </div>

        <div className="countup__button-container">
            <button onClick={start}>Start</button>
            <button onClick={reset}>Reset</button>
            <button onClick={pauseResume}>Pause/Resume</button>
            <button onClick={() => update(2000)}>Update to 2000</button>
        </div>

        <Docs link="https://www.npmjs.com/package/react-countup" commands={countupCommands} />
    </div> 
    );
}
 
export default Countup;