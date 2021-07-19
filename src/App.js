import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <Router>
    <div>
     <Navbar/>
    <Switch>
      <Route exact path="/">
     <Hero/>
     </Route>
     <Route exact path="/aboutMe">
     <AboutMe/>
     </Route>
     <Route exact path="/projects">
     <Projects/>
     </Route>
     <Route exact path="/contact">
     <Contact/>
     </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
