import Login from './components/login/login';
import styles from './app.module.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Maker from './components/maker/maker';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
