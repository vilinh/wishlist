import React, { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

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
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        fetchingUser: false,
      };
    case "SET_WISHLIST":
      return {
        ...state,
        wishList: action.payload,
      };
    case "RESET_USER":
      return {
        ...state,
        user: null,
        wishList: [],
        boughtWishlist: [],
        fetchingUser: false,
      };
    default:
      return state;
  }
};

// create context
export const GlobalContext = createContext(initialState);

// provider
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    getCurrentUser();
  }, []);

  // action: get current user
  const getCurrentUser = async () => {
    try {
      const res = await axios.get("/auth/current");

      if (res.data) {
        const itemRes = await axios.get("/items");

        if (itemRes.data) {
          dispatch({ type: "SET_USER", payload: res.data });
          dispatch({ type: "SET_WISHLIST", payload: itemRes.data.items });
        }
      } else {
        dispatch({ type: "RESET_USER" });
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: "RESET_USER" });
    }
  };

  const value = {
    ...state,
    getCurrentUser,
  };

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(GlobalContext);
}
