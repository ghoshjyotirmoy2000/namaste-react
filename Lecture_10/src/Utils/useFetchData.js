import React, { useEffect, useState } from 'react'

const useFetchData = (url , enabled = true) => {
    
    const [data , setData] = useState(null);
    const [loading , setLoading] = useState(enabled);
    const [error , setError] = useState(null)
  
    useEffect (() => {
        if (!enabled || !url) return;
        fetchData();
    },[url , enabled])

    const fetchData = async() => {
        setLoading(true);
        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error ("Something went wriing while fetching data")
            }
            const json = await response.json();
            setData(json);
            setError(null);
        } catch (error) {
            setError(error);
            setData(null)
        } finally {
            setLoading(false);
        }
    }

    return {data , error , loading};
}

export default useFetchData;