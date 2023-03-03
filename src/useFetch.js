import { useState, useEffect } from 'react';
const AdvancedFeachDate = async(url) => {
    let response = await fetch(url);
    let AccualData = await response.json();
    console.log(AccualData);
    return AccualData;
}
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        console.log("useEffect");
        setTimeout(() => {
            AdvancedFeachDate(url)
                .then((data) => {
                    setError(null);
                    setData(data)
                    setIsPending(false);
                }).catch((err) => {
                    if (err.name === "AbortError")
                        console.log(err, "fetch aborted");
                    else {
						setError(err.message);
						setIsPending(false);
                     }
                });
        }, 1000);
    }, [url]);
    return {
        data,
        isPending,
        error
    }
}
export default useFetch;