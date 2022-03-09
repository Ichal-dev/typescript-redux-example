import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ProductList } from "./Products/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actioncreators, State } from "./state";

function App() {
  const dispatch = useDispatch();

  const { despositMoney, withdrawMoney, bankruptMoney } = bindActionCreators(
    actioncreators,
    dispatch
  );

  const amount = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button
        onClick={() => {
          despositMoney(10000);
        }}
      >
        Deposit
      </button>
      <button
        onClick={() => {
          withdrawMoney(500);
        }}
      >
        Withdraw
      </button>
      <button
        onClick={() => {
          bankruptMoney();
        }}
      >
        BankRupt
      </button>
    </div>
  );
}

export default App;
