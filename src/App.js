
import './App.css';
import { Upperbody } from './components/Upperbody';
import { Upperbody1 } from './components/Upperbody1';
import { Upperbody2 } from './components/Upperbody2';
import { Upperbody3 } from './components/Upperbody3';
import { Upperbody4 } from './components/Upperbody4';
import { Upperbody5 } from './components/Upperbody5';
import { Upperbody6 } from './components/Upperbody6';
import { Upperbody7 } from './components/Upperbody7';
import { Upperbody8 } from './components/Upperbody8';
import { Footer } from './components/Footer';
import {Header} from './components/Header';
import { Fragment } from 'react';
function App() {
  return ( <Fragment className="FullBody">
     <div className="rec1">
    <div className="App">
      <div className="rectangle1">
      <Header/>
      <Upperbody/>
      <Upperbody1
      name="Welcome to Nature"
      />
      <Upperbody2/>
      <div className="rectangle2">
    <Upperbody3/>
    <Upperbody4/>
    </div>
    <Upperbody5/>
    <Upperbody6/>
    <Upperbody7/>
    <Upperbody8/>
  
    <Footer/>
    </div>
   
    </div>
    
    </div>
    </Fragment>
  );
}

export default App;
