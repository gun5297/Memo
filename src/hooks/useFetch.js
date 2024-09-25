import { useEffect, useState } from 'react';

export const useFetch = (url = []) => {
    // const [data, setData] = useState(url);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const res = await fetch(url);
            const json = await res.json();
            setData(json);
            setLoading(true);
            setError(null);
            // if( !res.status !== 200  ) throw new Error('에러발생')
            if (!res.ok) throw new Error('에러발생');
        } catch (error) {
            setError(error);
            setData([]);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getData();
    }, [url]);

    return { data, loading, error };
};
