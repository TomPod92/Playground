import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Docs from '../Docs/Docs.js';
import Image from './Image.js';
import './infiniteScroll.scss';

const Links = [ {link: 'https://www.npmjs.com/package/react-infinite-scroll-component', text:'for react-infinite-scroller'} ];
const Commands = ['npm install --save react-infinite-scroll-component'];
const Tutorials = ['https://www.youtube.com/watch?v=gk_6BKiy6X4&t=1818s'];

const WithNpm = () => {

    const [ images, setImages ] = useState([]);
    const [ start, setStart ] = useState(1);
    const [ count, setCount ] = useState(20);

    const fetchPhotos = async (initialFetch) => {

        // jeżeli to jest kolejne pobranie danych, zwiększ "start"
        if(!initialFetch) {
            setStart(prevStart => prevStart + count);
        }
        
        const res = await axios.get(`https://api.unsplash.com/photos/random?client_id=lc_XPL91SyJ5FU9uVrEHIDHxKmxPJg5YssRLrzvXgsI&count=${count}&start=${start}`);

        setImages( prevState => [...prevState, ...res.data]);
    }

    useEffect(() => {
        fetchPhotos(true);
    }, []);
   
    return (
        <div className="infiniteScroll centered">
            <Link to="/infiniteScroll" className="infiniteScroll__button">Go back</Link>
            <Docs links={Links} commands={Commands} tutorials={Tutorials}/>

            <InfiniteScroll
                dataLength={images.length}
                next={() => fetchPhotos()}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                <div className="images-container">
                    {images.map( (current, index) => <Image imageUrl={current.urls.thumb} key={`${current.id}_${index}`}/>)}
                </div>
            </InfiniteScroll>
            

            
        </div>
    );
}
 
export default WithNpm;