import React, { Component } from 'react';
import Home from '../pages/LandingPage';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Header from './Header';
// import NavHead from './NavHead';
import Portfolio from '../pages/Portfolio';
import { Routes, Route,} from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div className="">
                <Header/>
                <Routes>
                    <Route path='/' element={<Home />}  />
                    <Route path='/about' element={<About />} />
                    <Route path='/portfolio' element={<Portfolio />}/>
                    <Route path='/contact' element={<Contact />} />
                    {/* <Redirect to='/' /> */}
                </Routes>
            </div>
        );
    }
}

export default Main;