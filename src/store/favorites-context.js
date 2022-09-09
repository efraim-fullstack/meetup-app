import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0
});

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState();

  const context = {
    favorites: userFavorites,
    total: userFavorites.length
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  )
}