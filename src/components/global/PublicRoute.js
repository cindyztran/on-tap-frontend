import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ children, isAuthenticated , ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        !isAuthenticated ? children : 
        <Redirect {...props} to="/signup" />
      )}
    />
  );
};
export default PublicRoute;