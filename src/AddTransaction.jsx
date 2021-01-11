import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { TransactionContext } from "./TransactionContext";

const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [transactionAmount, settransactionAmount] = useState(0);

  const { addTransaction } = useContext(TransactionContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: new Date().getTime(),
      description,
      transactionAmount: +transactionAmount,
    };

    addTransaction(newTransaction);
    setDescription("");
    settransactionAmount("");
  };
  return (
    <div>
      <h4>Add New Transaction</h4>
      <hr />
      <p className="paragraph">
        (Note: Enter +amount for income or -amount for expense)
      </p>
      <form onSubmit={onSubmit}>
        <TextField
          type="text"
          id="description"
          label="Add Description"
          variant="outlined"
          margin="dense"
          className="form"
          required={true}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          type="number"
          id="amount"
          label="Add Amount"
          variant="outlined"
          margin="dense"
          className="form"
          required={true}
          value={transactionAmount}
          onChange={(e) => settransactionAmount(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          className="button"
          onClick={onSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddTransaction;
