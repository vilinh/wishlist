import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";


// initial state
const initialState = {
  itemlist: localStorage.getItem("itemlist")
    ? JSON.parse(localStorage.getItem("itemlist"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("itemlist", JSON.stringify(state.itemlist));
  }, [state]);

  // actions
  const addItemtoItemList = (item) => {
    dispatch({ type: "ADD_ITEM_TO_ITEMLIST", payload: item });
  };

  return (
    <GlobalContext.Provider
      value={{ itemlist: state.itemlist, addItemtoItemList }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
