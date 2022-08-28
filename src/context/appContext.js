import { createContext, useContext } from 'react';
import { useState } from 'react';

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('Appcontext must be within appContextProvider!');
  }

  return context;
};

const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = dog => {
    const oldFavorites = [...favorites];

    const newFavorites = oldFavorites.concat(dog);
    setFavorites(newFavorites);
  };

  const removeFromFavorites = id => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.filter((dog) => dog.fileSizeBytes !== id);

    setFavorites(newFavorites);
  };

  return (
    <AppContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
