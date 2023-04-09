import { useEffect, useState } from 'react';
import { auth } from './services/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch } from 'react-router-dom';
import PublicRoute from './components/global/PublicRoute'
import PrivateRoute from './components/global/PrivateRoute'
import routes from './routes'
import Authentication from './pages/Authentication/Authentication';

const App = () => {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)
    });

    return () => unsubscribe(); //clean up effect
  }, []);
  
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
