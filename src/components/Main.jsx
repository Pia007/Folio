import { Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from '../pages/LandingPage';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Header from './Header';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import Footer from './Footer';
import { SocialColumn } from './Socials';
import { DesignColumn } from './Footer';

const Main = () => {
    const RenderFooter = () => {
        const location = useLocation();
        return location.pathname === '/' ? <Footer /> : null;
    }

    return (
        <div style={{ height: 'calc(1024 - 110 )' }}>
            <Header/>
            <div className='d-flex main' style={{width: 'calc(100%-10%'}}>
                <SocialColumn/>
                    <ScrollToTop>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/about' element={<About />}/>
                            <Route path='/projects' element={<Projects/>}/>
                            <Route path='/contact' element={<Contact/>}/>
                            <Route path='/resume' element={<Resume/>}/>
                        </Routes>
                    </ScrollToTop>
                <DesignColumn/>
            </div>
            <RenderFooter/>
        </div>
    );
    
}

export default Main;