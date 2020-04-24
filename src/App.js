import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import AddGenre from './components/genre/AddGenre';
import GenreList from './components/genre/GenreList';
import GenreDetails from './components/genre/GenreDetails';
import Navbar from './components/layout/Navbar';
import AddSong from './components/songs/AddSong';
import SongDetails from './components/songs/SongDetails';
import EditSong from './components/songs/EditSong';
import NoMatch from './components/layout/NoMatch';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/song/:id' component={SongDetails} />
        <Route path='/songs/add-song' component={AddSong} />
        <Route path='/songs/:id/edit-song' component={EditSong} />
        <Route exact path='/genre' component={GenreList} />
        <Route path='/genre/add-genre' component={AddGenre} />
        <Route path='/genre/:id' component={GenreDetails} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};

export default App;
