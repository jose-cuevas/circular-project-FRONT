import { useContext } from "react";
import Form from "react-bootstrap/Form";

import { PurchaseContext } from "../context/PurchaseContext";

const SearchFilter = () => {
  const { purchases, setSearchResults } =
    useContext(PurchaseContext);

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(purchases);

    const resultsArray = purchases?.filter(
      (purchase) => 
        purchase.country.includes(e.target.value) ||
        purchase.medicine.includes(e.target.value) ||
        purchase.purchase_date.includes(e.target.value)
      
    );
    setSearchResults(resultsArray);  
  };  

  return (
    <>      
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
