import React, { Component } from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Header from './Header';
import NavHead from './NavHead';
import Footer from './Footer';
import Portfolio from '../pages/Portfolio';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div className="App container-fluid px-0">
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home}  />
                    <Route path='/about' component={About} />
                    <Route path='/portfolio' component={Portfolio}/>
                    <Route path='/contact' component={Contact} />
                    <Redirect to='/' />
                </Switch>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default Main;