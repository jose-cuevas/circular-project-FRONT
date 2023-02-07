import { useEffect, useState, createContext } from "react";

import { getAllPurchases } from "../api/api";

export const PurchaseContext = createContext([]);

const PurchaseProvider = ({ children }) => {
    const [purchases, setPurchases] = useState([]);
    const getPurchasesUrl = "http://localhost:8000/api/purchases";
  
    useEffect(() => {
        getAllPurchases(getPurchasesUrl, setPurchases);
    },[]);
  
    return (
      <PurchaseContext.Provider value={{ purchases, setPurchases }}>
        {children}
      </PurchaseContext.Provider>
    );
  };
  
  export default PurchaseProvider;