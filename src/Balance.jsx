import React, { useContext } from "react";
import { TransactionContext } from "./TransactionContext";

export const Balance = () => {
  const { transactions } = useContext(TransactionContext);

  const transactionAmounts = transactions.map(
    (transaction) => transaction.transactionAmount
  );
  const balance = transactionAmounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="balance">
      <h4>Current Balance</h4>
      <h1 id="balance">${balance}</h1>
    </div>
  );
};
