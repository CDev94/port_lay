import React from 'react';
import Home from './Home';
import Services from './Services';
import Portfolio from './Portfolio';
import './App.scss';

const App = () => {
  
    return (
      <div className="App">
        <Home author="Curdarious Keon Bell" />
        <Services />
       <Portfolio />
      </div>
    );
  
}

export default App;
