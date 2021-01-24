import './App.css';
import React from 'react';
import Header from './Header';
import { Balance } from './Balance';
import BalanceSummary from './BalanceSummary';
import AddTransaction from './AddTransaction';
import { TransactionProvider } from './TransactionContext';
import TransactionHistory from './TransactionHistory';
import Footer from './Footer'

const App = () => {
  return (
    <>
      <TransactionProvider >
        <div className="main_div">
          <div className="center_div">
            <Header />
            <div>
              <Balance />
              <BalanceSummary />
              <TransactionHistory />
              <AddTransaction />
              <Footer />
            </div>
          </div>
        </div>
      </TransactionProvider>
    </>
  )
}

export default App;
