import React, { createContext, useReducer } from "react";
import TransactionReducer from "./TransactionReducer";

//creating intitial state
const initialState = {
  transactions: [],
};

// create the global transaction context
export const TransactionContext = createContext(initialState);

// create a provider for the global transaction context
export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionReducer, initialState);

  // Delete Existing Transaction Action
  function delTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  // Add New Transaction Action
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        delTransaction,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
