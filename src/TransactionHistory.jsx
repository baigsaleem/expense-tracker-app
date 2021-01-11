import React, { useContext } from "react";
import { TransactionContext } from "./TransactionContext";
import Transaction from "./Transaction";

const TransactionHistory = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div>
      <h4> TransactionHistory</h4>
      <hr />
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
