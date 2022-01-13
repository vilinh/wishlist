import React, { createContext, useContext, useReducer, useEffect } from "react";


// initial state
const initialState = {
  user: null,
  fetchingUser: true,
  wishList: [],
  boughtWishlist: [],
};

// reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// create context
export const GlobalContext = createContext(initialState);

// provider
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(globalReducer, initialState);

    // action: get current user

    const value = {
        ...state,
    }

    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export function useGlobalContext() {
    return useContext(GlobalContext);
}