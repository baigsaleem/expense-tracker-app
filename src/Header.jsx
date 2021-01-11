import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  return (
    <AppBar position="relative" className="appbar">
      <Typography variant="h4">Expense Tracker</Typography>
    </AppBar>
  );
};

export default Header;
