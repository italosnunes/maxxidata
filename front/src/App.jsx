import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';
import Menu from './components/Menu';

const App = () => (
    <>
        <Router>
            <Header/>
            <Menu/>
            <GlobalStyle/>
            <Routes/>
        </Router>
    </>
)

export default App;