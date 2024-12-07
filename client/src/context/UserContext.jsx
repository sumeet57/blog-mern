import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    token: '',
});

  return (
    <DataContext.Provider value={{ user, setUser }}>
      {children}
    </DataContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(DataContext);
};