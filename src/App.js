import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Experience from './Pages/Experience/Experience';
import Projects from './Pages/Projects/Projects';
import Resume from './Pages/Resume/Resume'
import Navbar from './Components/Navbar/Navbar';
import {Route, Switch, Redirect}  from 'react-router-dom';
import ParticleBackground from './Components/ParticleBackground/ParticleBackground';
import Footer from './Components/Footer/Footer';
import { isMobile } from 'react-device-detect'
import Aos from 'aos'
import "aos/dist/aos.css"
import './App.scss';

function App() {

  Aos.init({duration: 1300,
            once: true})

  document.addEventListener("DOMContentLoaded", function() {
    Aos.refresh()
  });

  window.scroll(0, 0);

  const data = localStorage.getItem('stateObj')
  let route = '/'

  if(data){
    const currentPage = JSON.parse(data).selectedOption
  
    if(currentPage === 'contact'){
      route = '/contact'
    } else if(currentPage === 'experience'){
      route = '/experience'
    } else if(currentPage === 'projects'){
      route = '/projects'
    } else if(currentPage === 'resume'){
      route = '/resume'
    }
  }

  return (
      <div className='App'>

        {!isMobile && 
        <ParticleBackground />
        }

        <Navbar className='App__navbar'/>

        <div className="App__content" id='content'>
          <Redirect to={route}/>

          <Switch>

            <Route exact path='/' component={Home}/>

            <Route exact path='/experience' component={Experience}/>

            <Route exact path='/projects' component={Projects}/>

            <Route exact path='/resume' component={Resume}/>

            <Route exact path='/contact' component={Contact}/>

          </Switch>

        </div>

        <Footer className='App__footer'/>

      </div>
  );
}

export default App;
