import React from 'react';
import background from './background.png';
import './laptop.scss';

const Laptop = () => {

    return (
        <div className="centered">
            <div className="outerScreen">
                <div className="innerScreen">
                    <img src={background} alt="wallpaper"/>
                </div>

                <div className="bottomStrip">
                    <span>Macbook Pro</span>
                </div>
            </div>

            <div className="keyboard">
                <div className="touchpad"></div>
            </div>

            <div className="base"></div>



            <a className="button laptopButton" href="https://www.youtube.com/watch?v=282I7vNIqo8&t=1s" target="_blank" rel="noopener noreferrer">Tutorial</a>
        </div>
    );
}
 
export default Laptop;