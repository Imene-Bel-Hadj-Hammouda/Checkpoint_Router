import React from 'react'
import { useState, useEffect } from "react";
function Description(props) {

    const [movie,setMovie]=useState(null)
    useEffect( ()=> {setMovie(props.movies.filter(el=> el.id===props.match.params.id)[0])})

    return (
        <div>
            
           { movie && <h1>{movie.description}</h1> }
        </div>
    )
}

export default Description
