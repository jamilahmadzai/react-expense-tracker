import React, { createContext, useReducer, useContext } from "react";
import Reducer from "./Reducer";

const initialState = {
  transaction: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 500 },
    { id: 3, text: "Camera", amount: 220 },
    { id: 4, text: "Phone", amount: -400 },
  ],
};

const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transaction }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContext, GlobalProvider };
