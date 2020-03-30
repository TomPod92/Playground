import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import Docs from '../Docs/Docs.js';
import './mediaPlayer.scss';

const Links = [ {link: 'https://www.npmjs.com/package/react-player', text:'for react-player'} ];
const Commands = ['npm install react-player --save'];
const Tutorials = ['https://www.youtube.com/watch?v=7sDY4m8KNLc'];

const MediaPlayer = () => {
    const [message, setMessage] = useState('');
    return (
        <div className="mediaPlayer centered">
            <ReactPlayer 
                url="https://www.youtube.com/watch?v=7sDY4m8KNLc"
                light={false} // ustawiony na "true" załaduje tylko thumnail video, po jego kliknięciu film zostanie pobrany
                width='48rem'
                height='24rem'
                controls={true}
                onReady={() => setMessage('On ready')}
                onStart={() => setMessage('On start')}
                onPause={() => setMessage('On pause')}
                onPlay={() => setMessage("On play")}
                onEnded={() => setMessage('On ended')}
                onError={() => setMessage('On error')}
                onDuration={(duration) => console.log(duration)}
                className="mediaPlayer__player"
            />

            <p className="mediaPlayer__text">{message}</p>

            <Docs links={Links} commands={Commands} tutorials={Tutorials}/> 
        </div>
    );
}
 
export default MediaPlayer;