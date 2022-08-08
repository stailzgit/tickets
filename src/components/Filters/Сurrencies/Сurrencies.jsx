import React from "react";
import "./Сurrencies.css";

const currencies = ["RUB", "USD", "EUR"];

const Сurrencies = ({ activeCurrency, setActiveCurrency }) => {
  const currencyStyle = (currency) =>
    `currency ${currency === activeCurrency ? "currency--active" : ""}`;

  return (
    <div className="currencies">
      <h2 className="currencies__title">Валюта</h2>
      <div className="currencies__list">
        {currencies.map((currency) => (
          <div
            className={currencyStyle(currency)}
            key={currency}
            onClick={() => setActiveCurrency(currency)}>
            {currency}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Сurrencies;
