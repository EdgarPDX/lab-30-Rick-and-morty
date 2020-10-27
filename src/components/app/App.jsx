import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import CharacterContainer from '../../containers/CharacterContainer';
import Header from '../../components/header/Header';
import DetailPage from '../../containers/DetailPage';

export default function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={CharacterContainer}/>
          <Route exact path="/detail/:id" component={DetailPage}/> 
        </Switch>

      </Router>

    </>
  );

}
