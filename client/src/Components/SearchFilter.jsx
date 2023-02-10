import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";

import { PurchaseContext } from "../context/PurchaseContext";

const SearchFilter = () => {
  const { purchases, setPurchases, searchResults, setSearchResults } =
    useContext(PurchaseContext);

  // console.log(purchases);
  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(purchases);

    const resultsArray = purchases?.filter(
      (purchase) => 
        purchase.country.includes(e.target.value) ||
        purchase.medicine.includes(e.target.value)
      
    );
    setSearchResults(resultsArray);   
    
  };
  

  return (
    <>
      {/* <input type="text" id="search" onChange={handleSearchChange} /> */}
      <Form.Control
          placeholder="Search..."
          aria-label="Username"
          aria-describedby="basic-addon1"
          className="search-filter"
          onChange={handleSearchChange}
        />
    </>
  );
};

export default SearchFilter;
