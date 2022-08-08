export const priceByCource = (price, currency) => {
  const ratesByRUB = {
    RUB: { rate: 1, symbol: "₽" },
    USD: { rate: 0.0166, symbol: "$" },
    EUR: { rate: 0.0164, symbol: "€" }
  };

  const courseTranslation = (price) => {
    const { rate, symbol } = ratesByRUB[currency];
    const priceByCource = (price * rate).toFixed(0);
    return priceByCource + symbol;
  };

  return courseTranslation(price);
};
