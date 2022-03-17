
import Main from "./components/Main";
import NavHead from "./components/NavHead";
//import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
//import Footer from "./components/Footer";
import './App.css';

import { BrowserRouter, Route, Switch} from 'react-router-dom';

// require('dotenv').config()

function App() {
  return (
    <BrowserRouter>
      <div className="App container-fluid px-0">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
