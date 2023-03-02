import { useContext, useEffect } from 'react';
import { UserContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  console.log('inside protected routr', user);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  });

  return <>{children}</>;
};

export default ProtectedRoute;
