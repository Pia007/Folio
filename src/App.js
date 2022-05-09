import React from 'react';
import Main from "./components/Main";
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter } from 'react-router-dom';
import { SEO } from './components/SEO';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';


function App() {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <HelmetProvider>
                    <div className="App">
                        <SEO title={'Pia Torain'} description={'description'} content={'Fullstack Web Developer'} />
                        <Main style={{maxWidth: '100vw', paddingX: '10'}} />
                    </div>
                </HelmetProvider>
            </ScrollToTop>
        </BrowserRouter>
    );
}

export default App;
