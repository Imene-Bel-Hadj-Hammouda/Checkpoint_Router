import React from 'react'
import { useState, useEffect } from "react";
function Description(props) {

    const [movie,setMovie]=useState(null)
    useEffect( ()=> {setMovie(props.movies.filter(el=> el.id===props.match.params.id)[0])})

    return (
        <div className="desc">
            
           { movie && <h1>{movie.description} </h1> }
           <iframe width="560" height="315" src={props.movie.thrailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Description
