import { useContext } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import uniqid from "uniqid";

import { PurchaseContext } from "../context/PurchaseContext";
import { deletePurchase, modifyPurchase } from "../api/api";
import ModalNewPurchase from "../Components/ModalNewPurchase";

const Purchases = () => {
  const { purchases } = useContext(PurchaseContext);
  const deleteAlert = () => {
    toast.error("Deleted purchase!", { duration: 6000 });
  };

  const products = purchases.data;
  // console.log(products);

  return (
    <>
      <h1 className="text-center mt-3 mb-5 mx-auto">Purchases</h1>
      <ModalNewPurchase />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center p-3">Country</th>
            <th className="text-center  p-3">Medicine</th>
            <th className="text-center  p-3">Quantity</th>
            <th className="text-center  p-3">Price</th>
          </tr>
        </thead>
        {products?.map((product) => {
          // console.log(product)

          const {
            priceId,
            purchaseId,
            patient_id,
            country,
            purchase_date,
            medicine,
            quantity,
            price,
          } = product;
          return (
            <tbody key={uniqid()}>
              <tr>
                <td className="w-auto p-3">{country}</td>
                <td className="w-auto p-3">{medicine}</td>
                <td className="w-auto p-3">{quantity}</td>
                <td className="w-auto p-3">{price}</td>
              </tr>
            </tbody>
          );
        })}
      </Table>
      {/* <Toaster /> */}
    </>
  );
};

export default Purchases;
