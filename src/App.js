import "./App.css";
import MoviesData from './Components/MoviesData'
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import AddMovie from "./Components/AddMovie";
import { BrowserRouter, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from './Components/Navbar'
// import logo from "./Components/logo.jpg"
import Description from "./Components/Description"

function App() {
  const [ftext,setFtext] = useState("")
  const [frate,setFrate] = useState(1)
  const [movies, SetMovies] = useState(MoviesData)
  const addMovie = (newMovie) => SetMovies([...movies, newMovie]);
  const deleteMovie = (id) => SetMovies(movies.filter((el) => el.id !== id));
  return (
    

    <div className="App">
      
       {/* <header className="App-header">  */}
     {/* <div className="navbar"> 
    <img src={logo} alt="logo" width= "200px" height="90px"></img>
    
        
        </div>  */}
        <Navbar className="col"/>
        <BrowserRouter>
        <Filter setftext={setFtext} setfrate={setFrate}/>
        <MovieList
           deleteMovie={deleteMovie} 
          movies={movies.filter((el) => el.title.toLowerCase().trim().includes(ftext.toLowerCase().trim()) && el.rate >= frate)}
        />
        <AddMovie addMovie={addMovie} />
        <Route path="/description/id" render={(props) =><Description {...props} movies={movies}/> }/>
        </BrowserRouter>
       {/* </header>  */}
    </div>
  );
}

export default App;
