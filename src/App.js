//import '../node_modules/bootswatch/dist/vapor/bootstrap.min.css'; 
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Html from "./components/Html";
import React from "./components/Rxt";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Route, Switch, useHistory } from 'react-router-dom';

function App() {
  return (
    <div className="App bg-primary">
      
      <Header />
      <Nav />
      <Switch>
        <Route exact path='/' component={Home}  />
        <Route path='/About' component={About} />
        <Route path='/Projects' component={Projects}/>
        <Route path='/Html' component={Html} />
        <Route path='/React' component={React} /> 
        <Route path='/Contact' component={Contact} />
        
      </Switch>
      <Footer />
      
    </div>
  );
}

export default App;
