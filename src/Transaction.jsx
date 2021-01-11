import React, { useContext } from "react";
import { TransactionContext } from "./TransactionContext";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const Transaction = ({ transaction }) => {
  const { delTransaction } = useContext(TransactionContext);

  const sign = transaction.transactionAmount > 0 ? "+" : "-";
  const transactionType = transaction.transactionAmount > 0 ? "plus" : "minus";

  return (
    <li className={transactionType}>
      {transaction.description}
      <span>
        {sign}${Math.abs(transaction.transactionAmount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => delTransaction(transaction.id)}
      >
        <DeleteForeverIcon />
      </button>
    </li>
  );
};

export default Transaction;
