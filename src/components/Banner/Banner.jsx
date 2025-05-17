import { useState, useEffect } from "react";
import requests from "../../utils/requests.js";
import axios from "../../utils/axios.js";
import "./Banner.css";

import React from 'react'

const Banner = () => {
    let truncate = (text, maxLength) =>{
        return text?.length > maxLength ? text.slice(0, maxLength) + "..." : text; 
    };
    let [movie, setMovie] = useState({});
    useEffect(()=>{
        (async () => {
            try{
                let request = await axios.get(requests.fetchNetflixOriginals);
                console.log(request);
                setMovie(
                    request.data.results[Math.floor(Math.random()*request.data.results.length)]
                )
            } catch(error){
                console.log("Error", error);
            }

        })() //- The async function is wrapped in parentheses () because it's an anonymous function. The () at the end immediately calls    the function after defining it

    },[])
  return (
    <>
        <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `URL("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button play">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fadebottom" />
    </div>
    </>
  )
}

export default Banner