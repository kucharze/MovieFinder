import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";

function App() {
  //---{api key data}
  const apiKey = "80c4ff07";

  ///{State}
  const [movie, setMovie] = useState("");

  //Function that uses async-awa to fetch movie data
  //Do something and wait for a response to continue
  const getMovie = async (searchTerm) => {
    //Go to site and search for title
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );

    //Turn info into JSON format
    const data = await response.json();

    //Take retrieved data and set it as current Movie
    setMovie(data);
  };

  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
