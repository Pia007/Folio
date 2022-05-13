import React from 'react';
import Main from "./components/Main";
import { BrowserRouter } from 'react-router-dom';
import { SEO } from './components/SEO';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';


function App() {
    return (
        <BrowserRouter>
            <HelmetProvider>
                <div className="App">
                    <SEO title={'Pia Torain'} description={'description'} content={'Fullstack Web Developer'} />
                    <Main style={{maxWidth: '100vw', paddingX: '10'}} />
                </div>
            </HelmetProvider>
        </BrowserRouter>
    );
}

export default App;
