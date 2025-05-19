import React from 'react'
import "./Row.css"
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { useState } from 'react';
import { useEffect } from 'react';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    let [movies, setMovies] = useState([]);
    let [trailerUrl, settrailerUrl] = useState("")
    let base_url = "https://image.tmdb.org/t/p/original";

    useEffect(()=>{
    (
        async () => {
            try{
                let request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results)
            } catch(error){
                console.log("Error " , error);
            }
        }
    )()
    }, [fetchUrl])

    let handleClick = (movie) => {
        if(trailerUrl){
            settrailerUrl("")
        }
        else{
            movieTrailer(movie?.title || movie?.name || movie?.original_name).then((url) => {
                let urlParams = new URLSearchParams(new URL(url).search);
                console.log(urlParams);
                console.log(urlParams.get("v"));
                settrailerUrl(urlParams.get("v"))
            })
            .catch((error) => console.log("Error fetching trailer:", error));
        }
    }

      let opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  return (
    <>
        <div className="row">
            <h1>{title}</h1>
            <div className="row_posters">
                {movies?.map((movie,index) => (
                    <img
                     onClick={()=> handleClick(movie)}
                     key={index}
                     src={`${base_url}${isLargeRow? movie.poster_path : movie.backdrop_path}`} 
                     alt={title}
                     className={`row_poster ${isLargeRow && "row_posterLarge"}`} />
                ))}
            </div>
            <div style={{padding: "40px"}}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
    </>
  )
}

export default Row