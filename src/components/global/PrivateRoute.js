/* eslint-disable react/jsx-props-no-spreading */
import { Route, Redirect } from 'react-router-dom';
import Layout from '../container/Layout';

const PrivateRoute = ({ children, isAuthenticated, ...rest }) => {

  return (
    <Route
      {...rest}
      render={(props) => (
        isAuthenticated ? <Layout {...props} {...rest} Component={children} /> : <Redirect to="/signup" />
      )}
    />
  );
};

export default PrivateRoute;