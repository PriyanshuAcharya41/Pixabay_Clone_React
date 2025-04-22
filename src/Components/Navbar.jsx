import React, { useContext } from 'react'
import PixabayContext from '../context/PixabayContext'
const Navbar = () => {
    const {fetchImageByCategory,setQuery}=useContext(PixabayContext)
    return (
        
        <>
        <div className='container text-center'>
            <button type="button" onClick={()=>fetchImageByCategory("nature")} className="btn btn-outline-primary mx-2  my-3">Nature</button>
            <button type="button" onClick={()=>fetchImageByCategory("science")} className="btn btn-outline-secondary mx-2  my-3">Science</button>
            <button type="button" onClick={()=>fetchImageByCategory("education")} className="btn btn-outline-success mx-2  my-3">Education</button>
            <button type="button" onClick={()=>fetchImageByCategory("buildings")} className="btn btn-outline-danger mx-2  my-3">Buildings</button>
            <button type="button" onClick={()=>fetchImageByCategory("industry")} className="btn btn-outline-warning mx-2  my-3">Industry</button>
            <button type="button" onClick={()=>fetchImageByCategory("sports")} className="btn btn-outline-info mx-2  my-3">Sports</button>
            <button type="button" onClick={()=>fetchImageByCategory("transportation")} className="btn btn-outline-light mx-2  my-3">Transportation</button>
            <button type="button" onClick={()=>fetchImageByCategory("travel")} className="btn btn-outline-warning  mx-2 my-3">Travel</button>
            <button type="button" onClick={()=>fetchImageByCategory("food")} className="btn btn-outline-success  mx-2 my-3">Food</button>
        </div>
        <div className="container" style={{width:"600px",}}>
            <input type="text" onChange={(e)=>setQuery(e.target.value)} className="form-control bg-dark text-light"/>
        </div>
        </>
    )
}

export default Navbar