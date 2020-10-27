import React from 'react';
import './App.css';
import Home from './components/home';
import { Route } from 'react-router-dom';
import Seminars from './components/seminars';
import sem1 from './components/seminarsItem/sem1';
import sem2 from './components/seminarsItem/sem2';
import sem3 from './components/seminarsItem/sem3';
import kontakt from './components/seminarsItem/kontakt';
import omoss from './components/seminarsItem/omoss';
function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home}/>
      <Route exact path='/seminars' component={Seminars}/>
      <Route exact path='/seminars/sem1' component={sem1}/>
      <Route exact path='/seminars/sem2' component={sem2}/>
      <Route path='/seminars/sem3' component={sem3}/>¨
      <Route path='/kontakt' component={kontakt}/>
      <Route path='/omoss' component={omoss}/>
    </div>
  );
}

export default App;
