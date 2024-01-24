import { useState, useEffect } from 'react';
import axios from 'axios';

const useConverter = (endpoint, query) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://currency-converter18.p.rapidapi.com/api/v1/${endpoint}`,
        params: {
            ...query
        },
        headers: {
            'X-RapidAPI-Key': 'c2638369abmsh2db093f8aa73f3dp1b0094jsnc7e77407bf0a',
            'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            if (endpoint === 'convert')
                setData(response.data.result);
            else
                setData(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    

    useEffect(() => {
        fetchData()
    }, [query.from, query.to]);

    return { data, isLoading, error ,fetchData};
}

export default useConverter

