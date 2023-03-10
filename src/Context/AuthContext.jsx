import React, { useState } from 'react';
import { createContext } from 'react';

import useGetAuthState from '../hooks/useGetAuthState';

export const UserContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const { user, userLoading, getAuthState } = useGetAuthState();

  React.useEffect(() => {
    const unsubscribeUser = getAuthState();

    return () => {
      unsubscribeUser();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        userLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthContextProvider;
