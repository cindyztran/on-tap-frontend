import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ children, user , ...rest }) => {
  
  return (
    <Route
      {...rest}
      render={(props) => (
        user ? children : 
        <Redirect {...props} to="/signup" />
      )}
    />
  );
};
export default PublicRoute;