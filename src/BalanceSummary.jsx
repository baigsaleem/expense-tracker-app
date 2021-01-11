import React, { useContext } from "react";
import { TransactionContext } from "./TransactionContext";

const BalanceSummary = () => {
  const { transactions } = useContext(TransactionContext);

  const transactionAmounts = transactions.map(
    (transaction) => transaction.transactionAmount
  );

  const income = transactionAmounts
    .filter((transaction) => transaction > 0)
    .reduce((acc, transaction) => (acc += transaction), 0)

  const expense = transactionAmounts
    .filter((transaction) => transaction < 0)
    .reduce((acc, transaction) => (acc += transaction), 0)

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>

      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expense}</p>
      </div>
    </div>
  );
};

export default BalanceSummary;
