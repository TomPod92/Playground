import React from 'react';
import CountUp, { useCountUp } from 'react-countup';
import Docs from '../Docs/Docs.js';
import './countup.scss';

const countupCommands = ['npm install react-countup'];
const countupLinks = [{ link: "https://www.npmjs.com/package/react-countup", text: 'for countup' }];
const countupTutorials = ['https://www.youtube.com/watch?v=zttrshYjHHQ&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=6'];

const Countup = () => {

    const { countUp, start, pauseResume, reset, update } = useCountUp({
        duration: 5,
        end: 10000,
        startOnMount: false
    })

    return ( 
    <div className="countup centered">
        <h2 className="countup__header header">Default:</h2>
        <div className="countup__number">
            <CountUp end={200}/>
        </div>

        <h2 className="countup__header header">Different duration:</h2>
        <div className="countup__number">
            <CountUp end={200} duration={4}/>
        </div>

        <h2 className="countup__header header">Different start:</h2>
        <div className="countup__number">
            <CountUp start={300} end={1000} duration={4}/>
        </div>

        <h2 className="countup__header header">Different prefix/suffix:</h2>
        <div className="countup__number">
            <CountUp end={1000} duration={4} prefix='$' decimals={2} />
            {/* <CountUp end={1000} duration={4} suffix='$' decimals={2} /> */}
        </div>

        <h2 className="countup__header header">Additional functions:</h2>
        <div className="countup__number">
            { countUp }
        </div>

        <div className="countup__button-container">
            <button className="button" onClick={start}>Start</button>
            <button className="button" onClick={reset}>Reset</button>
            <button className="button" onClick={pauseResume}>Pause/Resume</button>
            <button className="button" onClick={() => update(2000)}>Update to 2000</button>
        </div>

        <Docs links={countupLinks} commands={countupCommands} tutorials={countupTutorials} />
    </div> 
    );
}
 
export default Countup;