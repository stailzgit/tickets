import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

export const useCurrency = () => {
  const [activeCurrency, setActiveCurrency] = useState("RUB");
  // const debouncedActiveCurrency = useDebounce(activeCurrency);

  return {
    activeCurrency: activeCurrency,
    setActiveCurrency
  };
};
