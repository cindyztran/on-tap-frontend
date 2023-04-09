import { useEffect, useState } from 'react';
import { auth } from './services/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, useHistory, useLocation } from 'react-router-dom';
import PublicRoute from './components/global/PublicRoute'
import PrivateRoute from './components/global/PrivateRoute'
import routes from './routes'
import Authentication from './pages/Authentication/Authentication';

const App = () => {
  const [ user, setUser ] = useState(null);
  const location = useLocation();
  const history = useHistory()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)
    });

    if (location.pathname === '/') history.push('/home')

    return () => unsubscribe(); //clean up effect
  }, [history, location.pathname]);
  
  const ProtectedRoutes = () => {
    return routes.map(({component: Component, path }, idx) => {
      return (
        <PrivateRoute
          user={user}
          path={path}
          key={idx}
          exact
          component={Component}
        />

      )
      })
  }

  return (
    <Switch>
      <PublicRoute 
        user={user}
        path="/signup"
        exact
        component={(props) => <Authentication {...props} user={user} />}
      />
        {ProtectedRoutes()}
    </Switch>
  );
}

export default App;
