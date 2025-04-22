import React from 'react'
import PixabayContext from './PixabayContext'
import { useEffect,useState } from 'react'
// import { useEffect } from 'react' // Optional: only if needed

const PixabayState = (props) => {
    const [imageData, setImageData] = useState([]);
    const [query, setQuery] = useState("London");
    const apiKey="49866263-44a8751df4da3de8a8e664356"
    useEffect(() => {
      const fetchData=async()=>{
        const api=await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&pretty=true&per_page=100`);
        const data=await api.json();
        setImageData(data.hits)
      }
      fetchData();
    }, [query])
    
    const fetchImageByCategory=async(cat)=>{
        const api=await fetch(`https://pixabay.com/api/?key=${apiKey}&q=category=${cat}&image_type=photo&pretty=true&per_page=100`);
        const data=await api.json();
        console.log(data);
        setImageData(data.hits)
    }

    return (
        <PixabayContext.Provider value={{ imageData,fetchImageByCategory, setQuery}}>
            {props.children}
        </PixabayContext.Provider>
    )
}

export default PixabayState
