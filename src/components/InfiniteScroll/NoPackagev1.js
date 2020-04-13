import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const NoPackagev1 = () => {

    const [ photos, setPhotos ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ page, setPage ] = useState(0);
    const [ prevY, setPrevY ] = useState(0);

    const loadingRef = React.createRef();

    let observer;

    const handleObserver = (entities, observer) => {
        const y = entities[0].boundingClientRect.y;

        if(prevY > y) {
            const lastPhoto = photos[photos.length - 1];
            const currentPage = lastPhoto.albumId;

            fetchPhotos(currentPage);

            setPage(currentPage);
        }

        setPrevY(y);
    }

    const fetchPhotos = async (page) => {
        setLoading(false);
        const res = await Axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
        setPhotos([...photos, ...res.data]);
        setLoading(false);
    }

    useEffect(() => {
        fetchPhotos(page);

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        };

        observer = new IntersectionObserver(handleObserver, options);

        observer.observe(loadingRef)


    });

    return (
        <div className="infiniteScroll centered">
            {/* <Link to="/infiniteScroll">Go back</Link>
            <a className="button" href="https://www.pluralsight.com/guides/how-to-implement-infinite-scrolling-with-reactjs" rel="noopener noreferrer" target="_blank">Tutoral</a> */}

<div className="container">
        <div style={{ minHeight: "800px" }}>
          {photos.map(user => (
            <img src={user.url} height="100px" width="200px" />
          ))}
        </div>
        <div
          ref={loadingRef}
        >
          <span>Loading...</span>
        </div>
      </div>
            
        </div>
    );
}
 
export default NoPackagev1;