import { useEffect, useState, createContext } from "react";

import { getAllPurchases } from "../api/api";

export const PurchaseContext = createContext([]);

const PurchaseProvider = ({ children }) => {
  const [purchases, setPurchases] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPurchasesUrl = "http://localhost:8000/api/purchases";

  useEffect(() => {
    getAllPurchases(getPurchasesUrl, setPurchases, setSearchResults, setIsLoading);    
  }, []);

  return (
    <PurchaseContext.Provider
      value={{ purchases, setPurchases, searchResults, setSearchResults, isLoading, setIsLoading }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};

export default PurchaseProvider;
