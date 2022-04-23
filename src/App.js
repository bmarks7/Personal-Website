import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume'
import Navbar from './Components/Navbar';
import {Route, Switch, Redirect}  from 'react-router-dom';
import ParticleBackground from './Components/ParticleBackground';
import Footer from './Components/Footer';
import './App.scss';

function App() {

  const data = localStorage.getItem('navbar-sel')
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

        <ParticleBackground />

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
