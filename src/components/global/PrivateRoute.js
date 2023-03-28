/* eslint-disable react/jsx-props-no-spreading */
import { Route, Redirect } from 'react-router-dom';
import Layout from '../container/Layout';

const PrivateRoute = ({ component: Component, user, ...rest }) => {

  return (
    <Route
      {...rest}
      render={(props) => (
        user ? <Layout user={user} {...props} {...rest} Component={Component} /> : <Redirect to="/signup" />
      )}
    />
  );
};

export default PrivateRoute;