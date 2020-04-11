import { useEffect, useState } from 'react';
import axios from 'axios';


const useBookSearch = (query, pageNumber) => {
    // const fetchData = async () => {
    //     let cancel;
    //     const res = await axios({
    //         method: 'GET',
    //         url: 'http://openlibrary.org/search.json',
    //         params: { q: query, page: pageNumber },
    //         cancelToken: new axios.CancelToken(token => cancel =token)
    //     });

    //     console.log(res.data)
    //     return cancel
    // }
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);
    const [books, setBooks] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setBooks([]);
    }, [query]);

    useEffect(() => {
        // const cancel = fetchData(); // inny sposób, jeszcze nie działa

        setLoading(true);
        setError(false);

        let cancel;

        axios({
            method: 'GET',
            url: 'http://openlibrary.org/search.json',
            params: { q: query, page: pageNumber },
            cancelToken: new axios.CancelToken(token => cancel = token)
        }).then( res => {
            setBooks((prevState) => {
                // return [...prevState, ...res.data.docs.map(current => current.title)];
                return [...new Set([...prevState, ...res.data.docs.map(current => current.title)])]; // jeżeli chcielibyśmy usunąć duplikaty
            })
            setHasMore(res.data.docs.length > 0);
            setLoading(false);
        }).catch(error => {
            if(axios.isCancel(error)) return // nie wyrzucaj błedu jezeli sami przerwalismy fetch'owanie danych
            setError(true);
        })

        return () => cancel()
        
    }, [query, pageNumber]);

    return { loading, error, books, hasMore }
}
 
export default useBookSearch;