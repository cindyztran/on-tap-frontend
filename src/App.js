import { useEffect, useState } from 'react';
import { auth } from './services/firebase';
import './App.css';

//import components
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import PublicRoute from './components/global/PublicRoute'
import PrivateRoute from './components/global/PrivateRoute'
import routes from './routes'


const ProtectedRoutes = () => {
  <Switch>
    {routes.map(({component: Component, path, exact }) => (
      <Route
        path
        key={path}
        exact={exact}
        component={Component}
      />
    ))}
  </Switch>
}

const App = () => {
  //user state
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)
    });
    
    return () => unsubscribe(); //clean up effect
  }, []);

  return (
    <Router>
      <Switch>
        <PublicRoute 
          path="/login"
          exact
          component={(props) => <Login {...props} />}
        />
        <PublicRoute 
          path="/signup"
          exact
          component={(props) => <Signup {...props} />}
        />
        <PrivateRoute
          isAuthenticated={user}
        >
          {ProtectedRoutes}
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
