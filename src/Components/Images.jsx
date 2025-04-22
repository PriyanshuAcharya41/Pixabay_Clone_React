import React from 'react'
import { useContext } from 'react'
import PixabayContext from '../context/PixabayContext'
const Images = () => {
    // const data=useContext(PixabayContext)
    const {imageData}=useContext(PixabayContext);
  return (
    <div className="container my-5">
    <div className='flex'>
        {imageData.map((image)=><div key={image.id}>
            <div className="item">
                <img src={image.largeImageURL} alt="JAI" />
            </div>
        </div>)}
    </div>
    </div>
        
  )
}

export default Images