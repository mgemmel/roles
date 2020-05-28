import React from 'react';
import styles from './App.module.css';
import Navigation from './UI/Navigation/Navigation';
import Rules from './Containers/Rules/Rules';
import Welcome from './Containers/Welcome/Welcome'
import {Switch, Route, BrowserRouter} from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Navigation/>
        <Switch>
          <Route path="/rules" component={Rules}/>
          <Route path="/" component={Welcome}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
