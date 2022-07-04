import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Footer from './Components/Footer';
import Header from './Components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
    <Header/>
    <App className="App" />
    <Footer />
    </div>
);

