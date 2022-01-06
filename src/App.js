import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume'
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>

        <div className="content">
          <Switch>

            <Route exact path='/site'>
              <Home/>
            </Route>

            <Route exact path='/site/experience'>
              <Experience/>
            </Route>

            <Route exact path='/site/other'>
              <Projects/>
            </Route>

            <Route exact path='/site/resume'>
              <Resume/>
            </Route>

            <Route exact path='/site/contact'>
              <Contact/>
            </Route>

          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
