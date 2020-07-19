import React from 'react';
import './App.css';
import MoviesListing from './components/movie/MoviesListing.component';
import Menu from './components/menu/Menu.component';
import MovieDetail from './components/movie/MovieDetail.component';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => {
  
  return (
    <Router>
      <div className="App">
      <div className="navigation">
        <Menu></Menu>
      </div>
      <div className="content">
      <Switch>
      <Route exact path='/' component={MoviesListing}/>
      <Route path='/detail/:id' component={MovieDetail}/>
    </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
