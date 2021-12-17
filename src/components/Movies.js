import { Component, useEffect, useState  } from "react";

const Movies=()=>{
    const [ movies, setMovies ] = useState([]);
    const [ selectedMovie, setSelectedMovie ] = useState({});

    useEffect(()=>{
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res=>res.json())
            .then(data=>{
                setMovies(data);
            })
    }, []);

    const handleSelectChange=(e)=>{
        let foundMovie = movies.find((movie)=>{
            return movie.title === e.target.value;
        })
        
        setSelectedMovie(foundMovie || {});
    }

    let optionElArr = movies.map((movie)=>{
        return <option value={movie.title}>{ movie.title }</option>
    })

    return(
        <div className="movies">
            <h1>Select a Movie</h1>
            <select onChange={handleSelectChange}>
                <option value=""></option>
                { optionElArr }
            </select>
            { selectedMovie.title &&
                <div>
                    <h3>Title: {selectedMovie.title}</h3> 
                    <h3>Release Date: {selectedMovie.release_date}</h3>
                    <h3>Description: {selectedMovie.description}</h3>
                </div>
            }

        </div>
    )
}

export default Movies;