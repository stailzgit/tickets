import { useEffect, useState } from "react";

export const useTicketsFilter = (tickets) => {
  const [filteredTickets, setFilteredTickets] = useState(tickets);
  const [isAllStops, setIsAllStops] = useState(true);
  const [stopsChecks, setStopsChecks] = useState([1, 0, 0, 0]);

  const stopsOnly = (indexStops) => {
    const tmpStopsChecks = stopsChecks.map((stopsCheck, index) => index === indexStops);
    setStopsChecks(tmpStopsChecks);
  };

  useEffect(() => {
    if (isAllStops) {
      setFilteredTickets(tickets);
      return;
    }

    const indexListStops = [];
    stopsChecks.forEach((stopsCheck, index) => {
      if (stopsCheck) indexListStops.push(index);
    });
    const tmpTickets = tickets.filter((ticket) =>
      indexListStops.some((indexListStop) => indexListStop === ticket.stops)
    );
    setFilteredTickets(tmpTickets);
  }, [stopsChecks, isAllStops]);

  return {
    filteredTickets,
    isAllStops,
    setIsAllStops,
    stopsChecks,
    setStopsChecks,
    stopsOnly
  };
};
