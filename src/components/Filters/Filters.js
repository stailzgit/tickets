import React, { useState } from "react";
import "./Filters.css";
import Сurrencies from "./Сurrencies/Сurrencies";
import Transfers from "./Transfers/Transfers";

const Filters = (props) => {
  const {
    activeCurrency,
    setActiveCurrency,
    isAllStops,
    setIsAllStops,
    stopsChecks,
    setStopsChecks,
    stopsOnly,
    isOpenFilters
  } = props;

  const styleFilters = `filters ${isOpenFilters ? "filters--open" : "filters--close"}`;
  return (
    <div className={styleFilters}>
      <div className="filters__inner">
        <Сurrencies {...{ activeCurrency, setActiveCurrency }} />
        <Transfers
          {...{ isAllStops, setIsAllStops, stopsChecks, setStopsChecks, stopsOnly }}
        />
      </div>
    </div>
  );
};

export default Filters;
