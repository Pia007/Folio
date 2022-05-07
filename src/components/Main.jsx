import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/LandingPage';
import { SocialColumn } from './Socials';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Header from './Header';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import Footer from './Footer';

const Main = () => {
    const RenderFooter = () => {
        const location = useLocation();
        return location.pathname === '/' ? <Footer /> : null;
    }

    return (
        <div style={{ height: 'calc(1024 - 110 )' }}>
            <Header/>
            <div className='d-flex' style={{width: 'calc(100vw 15vw'}}>
                <SocialColumn/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/resume' element={<Resume/>}/>
                </Routes>
            </div>
            <RenderFooter/>
        </div>
    );
    
}

export default Main;