import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Standard } from './demos/Standard';
import { Multiple } from './demos/Multiple';

const App = () => (
  <div>
    <h1>{document.title}</h1>
    <h2>Available Demos</h2>
    <BrowserRouter>
      <>
        <ul>
          <li>
            <Link to="/standard">Standard</Link>
          </li>
          <li>
            <Link to="/multiple">Multiple</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/standard" exact component={Standard} />
          <Route path="/multiple" exact component={Multiple} />
          <Redirect to="/standard" />
        </Switch>
      </>
    </BrowserRouter>
  </div>
);

render(<App />, document.querySelector('#app'));
