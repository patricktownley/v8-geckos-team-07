import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import About from '../components/About';
import withAuthentication from '../containers/withAuthentication';
import NewHabit from '../components/newhabit/NewHabit';

import Header from '../components/header'
import './App.css';

class App extends Component {
  render() {
    return (
     
      <Router>

        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={withAuthentication(Dashboard)} />
          <Route path="/about" component={About} />
          <Route path="/newhabit" component={NewHabit} />
          <main>
            <h2>Test Heading Level 2</h2>
            <h3>This is a Heading Level 3</h3>
            <p>Paragraphs of text look like this.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus id elit ut ultrices. Nunc pretium lacus quis aliquam tempus. Nullam non fermentum tellus, eu semper massa. Nunc at libero augue. Curabitur est nunc, auctor viverra interdum a, fringilla vel ex. Aliquam tellus urna, accumsan sed ex ac, rhoncus aliquet turpis. Morbi at sapien vel ipsum malesuada luctus. Proin efficitur iaculis ipsum, eget blandit nulla commodo ut. Proin at elit sit amet enim mollis semper eget quis nisl. Suspendisse sed metus ante. Ut venenatis nibh sit amet leo sollicitudin rutrum. In hac habitasse platea dictumst. Nullam ac nisi et lorem accumsan vestibulum eu sed erat.</p>
          </main >
        </Switch>
      </Router>

      
    );
  }
}

export default App;