import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume'
import Navbar from './Components/Navbar';
import {Helmet} from 'react-helmet';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useState} from 'react';
import { Style } from "react-style-tag";
import './App.scss';

function App() {

  // function routeChange(data) {
  //   setHeight(document.getElementById('content').clientHeight);
  //   console.log(document.getElementById('content').clientHeight)
  // };

  // const refHeight = 1427

  // const [height, setHeight] = useState(document.getElementById('content').clientHeight)

  const blocks = [1, 2, 3, 4, 5, 6]

  return (
    <Router>
      <div className='App'>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Brandon Marks</title>
            <link rel="canonical" href="http://mysite.com/example" />
            <meta name="description" content="Brandon's personal website" />
        </Helmet>
        <Navbar/>

        <div className="content" id='content'>
          <Switch>

            <Route exact path='/site' component = {Home}/>

            <Route exact path='/site/experience' component={Experience}/>

            <Route exact path='/site/projects' component={Projects}/>

            <Route exact path='/site/resume' component={Resume}/>

            <Route exact path='/site/contact' component={Contact}/>

          </Switch>

        </div>

        <div className="App__footer">
          <span className="App__footer__creator">Made by Brandon Marks in the Greater Toronto Area</span>
          <a target='_blank' rel="noreferrer" href="https://docs.google.com/document/d/13vTMaYb8GCLGCE24XaVIGey2td3SIJCOsGZ3s3C3IsU/edit?usp=sharing" className="App__footer__sources">Sources</a>
        </div>

        {
          blocks.map((value, index) => {
            return <span className='App__block' id={'block' + value}></span>
          })
        }

        <Style>{`
          .App__block{
            width: 100px;
            height: 100px;
            color: red;
          }
        `}</Style>

      </div>
    </Router>
  );
}

export default App;
