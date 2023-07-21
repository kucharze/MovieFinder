import React from 'react'

function MovieDisplay(props) {

    const loading = () =>{
        return (
            <>
                <h1>{props.movie.Title}</h1>
                <h1>{props.movie.Year}</h1>
                <h1>{props.movie.Rating}</h1>
                <hr />
                <img src={props.movie.Poster} />
                <h3>Starring: {props.movie.Actors}</h3>
                <hr />
                <h1>{props.movie.Plot}</h1>
                <h2>{props.movie.Awards}</h2>
            </>
        )
    }

    const loaded = () =>{
        return (
            <div>
            <h2>No movie to display</h2>
            </div>
        )
    }
  return props.movie ? loading() : loaded()
}

export default MovieDisplay
