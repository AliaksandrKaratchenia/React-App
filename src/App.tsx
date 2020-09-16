import React from 'react';
import './App.css';
import MiniDrawer from './components/MiniDrawer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/">
          <MiniDrawer />
        </Route>
      </div>
    </Router>
  );
};

export default App;