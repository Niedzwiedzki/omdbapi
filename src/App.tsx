import React, {useState} from 'react';
import Header from './components/layout/header/Header';
import Body from './components/layout/body/Body';
import Footer from './components/layout/footer/Footer';


const App: React.FC = () => {

  const [value, setValue] = useState("")

function inputHandler (e: React.ChangeEvent<HTMLInputElement>){
  setValue(e.target.value)
}

  return (
    <React.Fragment>
      <Header value={value} inputHandler={inputHandler}/>
      <Body/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
