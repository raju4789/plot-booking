import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import LoginComponent from './components/LoginComponent';
import SignUpComponent from './components/SignUpComponent';
import DashboardComponent from './components/DashboardComponent';
import RegistrationSuccess from './components/RegistrationSuccess';

const App = () => {
  const headerRef = React.useRef(null);

  return (
    <div >
      <Router>
        <HeaderComponent ref={headerRef}/>
        <div>
          <Switch>
            <Route path="/login" exact component={LoginComponent}></Route>
            <Route path="/" exact component={LoginComponent}></Route>
            <Route path="/signup" exact component={SignUpComponent}></Route>
            <Route path="/dashboard" exact component={DashboardComponent}></Route>
            <Route path="/reg-success" exact component={RegistrationSuccess}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
