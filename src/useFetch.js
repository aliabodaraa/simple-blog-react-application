import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            console.log("call when render the page in case we reload or any reactive value change")
            fetch(url)
                .then((res) => {
                    if (!res.ok)
                        throw Error('could not fetxh the data for that resource');
                    setError(null);
                    return res.json();
                })
                .then((data) => {
                    setData(data)
                    setIsPending(false);
                }).catch((err) => {
                    //catch the error when occurs(throws)
                    setError(err.message);
                    setIsPending(false);
                    console.log(err.message);
                });
        }, 1000);
    }, []);
    return {
        data,
        isPending,
        error
    }
}
export default useFetch;