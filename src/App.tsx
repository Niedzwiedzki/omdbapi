import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/layout/header/Header';
import Body from './components/layout/body/Body';
import Footer from './components/layout/footer/Footer';


let delayedFetch: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000)

const App: React.FC = () => {

  const [value, setValue] = useState("matrix")
  const [movies, setMovies] = useState([])
 
  function fetch (search: string) {
    axios.get(`http://www.omdbapi.com/?s=${search}&apikey=3a542246`)
    .then(function (response) {
      if(response.data.Response === "True"){
        setMovies(response.data.Search)
      } else {
        setMovies([])
      }
      
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

useEffect(() => {
    clearTimeout(delayedFetch);
    delayedFetch = setTimeout(() => fetch(value), 1000)
  }, [value]);

  useEffect(() => {
    fetch(value)
  }, []);



  function inputHandler (e: React.ChangeEvent<HTMLInputElement>){
    setValue(e.target.value);
  }

    return (
      <React.Fragment>
        <Header value={value} inputHandler={inputHandler}/>
        <Body movies={movies}/>
        <Footer />
      </React.Fragment>
    );
  }

export default App;
