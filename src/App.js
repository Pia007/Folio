
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Route, Switch, useHistory } from 'react-router-dom';

function App() {
  return (
    <div className="App container-fluid px-0">
      
      
      <Navbar/>
      
      <Switch>
        <Route exact path='/' component={Home}  />
        <Route path='/About' component={About} />
        <Route path='/Projects' component={Projects}/>
        <Route path='/Contact' component={Contact} />
        
      </Switch>
      {/* <Footer /> */}
      
    </div>
  );
}

export default App;
