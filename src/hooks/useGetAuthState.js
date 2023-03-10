import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const useGetAuthState = () => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(null);

  const getAuthState = () => {
    setUserLoading(true);
    return onAuthStateChanged(auth, (user) => {
      setUser(user);
      setUserLoading(null);
    });
  };

  return { user, userLoading, getAuthState };
};

export default useGetAuthState;
