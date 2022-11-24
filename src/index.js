import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import App from './Components/App';
import About from './Pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/about" exact component={About} />
      </Switch>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

// Testing Git Clone & Fork
