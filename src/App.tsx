import React, {useState} from 'react';
import axios from 'axios';
import Header from './components/layout/header/Header';
import Body from './components/layout/body/Body';
import Footer from './components/layout/footer/Footer';


let delayedFetch: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000)

const App: React.FC = () => {

  const [value, setValue] = useState("")
  const [movies, setMovies] = useState([])
 

  function inputHandler (e: React.ChangeEvent<HTMLInputElement>){
    setValue(e.target.value);
    clearTimeout(delayedFetch);
    
    function fetch () {
      axios.get(`http://www.omdbapi.com/?s=${value}&apikey=3a542246`)
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
    
    delayedFetch = setTimeout(fetch, 1000)
    
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
