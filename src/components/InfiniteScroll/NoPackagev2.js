import React, { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useBookSearch from './useBookSearch.js';

const NoPackagev2 = () => {
    const [ query, setQuery ] = useState('');
    const [ pageNumber, setpageNumber ] = useState(1);

    const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);

    const observer = useRef();
    const lastBookElementRef = useCallback(node => {
        if(loading) return;
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore) {
                setpageNumber(prevState => prevState + 1);
            }
        });

        if(node) observer.current.observe(node);
    }, [loading, hasMore])



    const handleInputChange = event => {
        setQuery(event.target.value);
        setpageNumber(1);
    }

    return (
        <div className="infiniteScroll">
            
            <div className="nav-container">
                <Link to="/infiniteScroll" className="infiniteScroll__button">Go back</Link>
                <a className="infiniteScroll__button" href="https://www.youtube.com/watch?v=NZKUirTtxcg" rel="noopener noreferrer" target="_blank">Tutoral</a>
            </div>
            
            <div className="input-container">
                <input type="text" className="infiniteScroll__input" onChange={handleInputChange} value={query}/>
            </div>
            
            {books.map( (current, index) => {
                if(books.length === index + 1) return <div className="book" ref={lastBookElementRef} key={current}>{current}</div>
                else return <div className="book" key={current}>{current}</div>
            })}

            {loading && <div className="infiniteScroll__loading">Loading...</div>}

            {error && <div className="error">Error :(</div>}
            
        </div>
    );
}
 
export default NoPackagev2;