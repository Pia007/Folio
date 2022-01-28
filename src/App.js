
import NavHead from "./components/NavHead";
//import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
//import Footer from "./components/Footer";
import './App.css';

import { Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App container-fluid px-0">
      
      
      <NavHead/>
      
      <Switch>
        <Route exact path='/' component={Home}  />
        <Route path='/About' component={About} />
        <Route path='/Projects' component={Portfolio}/>
        <Route path='/Contact' component={Contact} />
        
      </Switch>
      {/* <Footer /> */}
      
    </div>
  );
}

export default App;
