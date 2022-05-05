import React, { Component } from 'react';
import Home from '../pages/LandingPage';
import SideLinks from './SideLinks';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Header from './Header';
import Projects from '../pages/Portfolio';
import { Routes, Route } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div style={{ height: "calc(1024 - 100 )" }}>
                <Header />
                <div className='d-flex' style={{width: "calc(100vw 15vw"}}>
                    <SideLinks />
                    <Routes>
                        <Route path='/' element={<Home />}  />
                        <Route path='/about' element={<About />} />
                        <Route path='/projects' element={<Projects />}/>
                        <Route path='/contact' element={<Contact />} />
                        {/* <Redirect to='/' /> */}
                    </Routes>
                    {/* <EmailLink /> */}
                </div>
            </div>
        );
    }
}

export default Main;