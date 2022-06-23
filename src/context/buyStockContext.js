import React, { createContext, useEffect } from "react";
import { useCounter } from "../hooks/useCounter";
import { useLoading } from "../hooks/useLoading";
import { getInitStockInfo } from "../api/stock.api";

const BuyStockContext = createContext({
  isLoading: false,
  handleAdd: () => {},
  handleSub: () => {},
  stockAmount: 0,
  showLoad: () => {},
  startLoading: () => {},
  endLoading: () => {},
  setStockOption: () => {}
});

export const BuyStockContextProvider = (props) => {
  const [isLoading, startLoading, endLoading, showLoading] = useLoading(false);
  const [stockAmount, buyStock, sellStock, setStockOption] = useCounter();

  useEffect(() => {
    startLoading();
    getInitStockInfo().then((option) => {
      //console.log(option)
      setStockOption(option);
      endLoading();
    });
  }, []);

  return (
    <BuyStockContext.Provider
      value={{
        isLoading: isLoading,
        handleAdd: buyStock,
        handleSub: sellStock,
        stockAmount: stockAmount,
        showLoad: showLoading,
        startLoading: startLoading,
        endLoading: endLoading,
        setStockOption: setStockOption
      }}
    >
      {props.children}
    </BuyStockContext.Provider>
  );
};

export default BuyStockContext;
