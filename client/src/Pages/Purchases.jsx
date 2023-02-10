import { useContext } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import uniqid from "uniqid";
import toast, { Toaster } from "react-hot-toast";

import { PurchaseContext } from "../context/PurchaseContext";
import { deletePurchase, modifyPurchase } from "../api/api";
import ModalNewPurchase from "../Components/ModalNewPurchase";
import ModalModifyPurchase from "../Components/ModalModifyPurchase";
import SearchFilter from "../Components/SearchFilter";
import logo from "../img/logo-circular.svg";

const Purchases = () => {
  const { purchases, searchResults, setSearchResults, isLoading } =
    useContext(PurchaseContext);
  const deleteAlert = () => {
    toast.error("Deleted purchase!");
  };

  if (!searchResults) setSearchResults(purchases.data);
  console.log(isLoading);
  return (
    <>      
      <div className="text-center">
        <img src={logo} alt="logo-circular-lab" className="text-center mt-3" />
        <h2 className="text-center my-5 mx-auto">
          Welcome to Circular Dashboard
        </h2>
      </div>

      <ModalNewPurchase />
      <SearchFilter />

      {isLoading && (
          <div className="loading-sppiner">
            {/* <h2 className="text-center mt-5 z-3">Loading...</h2> */}
            <Spinner animation="border" role="status" className="z-3 mt-3 text-center">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}


      <Table striped hover>
        <thead>
          <tr>
            <th className="text-center p-3">Purchase Id</th>
            <th className="text-center p-3">Country</th>
            <th className="text-center p-3">Medicine</th>
            <th className="text-center p-3">Quantity</th>
            <th className="text-center p-3">Price</th>
            <th className="text-center p-3"></th>
          </tr>
        </thead>        
        {searchResults?.map((product) => {
          const {
            id,
            patient_id,
            country,
            purchase_date,
            medicine,
            quantity,
            price,
          } = product;

          return (
            <tbody key={uniqid()}>
              <tr className=" border-bottom border-light">
                <td className="w-auto p-3">{id}</td>
                <td className="w-auto p-3">{country}</td>
                <td className="w-auto p-3">{medicine}</td>
                <td className="w-auto p-3">{quantity}</td>
                <td className="w-auto p-3">{price}</td>
                <td className="w-auto p-3 d-flex justify-content-center">
                  <Button
                    variant="outline-danger"
                    className="me-3"
                    onClick={() => {
                      deleteAlert();
                      deletePurchase(id);
                    }}
                  >
                    Delete
                  </Button>
                  <ModalModifyPurchase
                    id={id}
                    country={country}
                    medicine={medicine}
                    patient_id={patient_id}
                    quantity={quantity}
                    price={price}
                    purchase_date={purchase_date}
                  />
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
      <Toaster />
    </>
  );
};

export default Purchases;
