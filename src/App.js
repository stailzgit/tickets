import { useState } from "react";
import "./App.css";
//Components
import Filters from "./components/Filters/Filters";
import Ticket from "./components/Ticket/Ticket";
//Assets
import AIRPLANE from "./assets/airplane.svg";
import ICON_FILTER from "./assets/filter.png";
//Hooks
import { useTicketsFilter } from "./hooks/useTicketsFilter";
import { useCurrency } from "./hooks/useCarrency";

import TICKETS from "./tickets.json";

function App() {
  const { tickets } = JSON.parse(JSON.stringify(TICKETS));
  const ticketsSorted = tickets.sort((a, b) => a.price - b.price);

  const {
    filteredTickets,
    isAllStops,
    setIsAllStops,
    stopsChecks,
    setStopsChecks,
    stopsOnly
  } = useTicketsFilter(ticketsSorted);
  const { activeCurrency, setActiveCurrency } = useCurrency();

  const [isOpenFilters, setIsOpenFilters] = useState(false);

  const propsForFilters = {
    activeCurrency,
    setActiveCurrency,
    isAllStops,
    setIsAllStops,
    stopsChecks,
    setStopsChecks,
    stopsOnly,
    isOpenFilters,
    setIsOpenFilters
  };

  return (
    <div className="app__wrap">
      <div className="header">
        <img src={AIRPLANE} alt="logo" />
      </div>

      <div className="container">
        <div className="app">
          <Filters {...propsForFilters} />

          {!filteredTickets.length && (
            <div className="no-tickets">Билеты не найдены </div>
          )}

          <div className="tickets">
            {filteredTickets.map((ticket, index) => (
              <Ticket key={index} ticket={ticket} currency={activeCurrency} />
            ))}
          </div>
        </div>
      </div>

      <div className="filters__btn" onClick={() => setIsOpenFilters((prev) => !prev)}>
        <img src={ICON_FILTER} alt="icon-filter" />
      </div>
    </div>
  );
}

export default App;
