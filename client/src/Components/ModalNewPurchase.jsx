import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import { createPurchase } from "../api/api";

const ModalNewPurchase = () => {
  const createPurchaseAlert = () => toast.success("Purchase created!");

  // Modal states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Form states
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(typeof data.quantity)
    


    // createPurchase(data);
    // createPurchaseAlert();
    // window.location.reload();
  };

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow} className="mb-4">
        New Purchase
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Insert new purchase</Modal.Title>
        </Modal.Header>

        <Modal.Body className="m-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <label for="country">Country:</label>
              <br />
              <input
                type="text"
                name="country"
                id="country"                               
                {...register("country", { required: true })}
              />       
            </div>
            <div className="mb-2">
              <label for="medicine">Medicine:</label>
              <br />
              <input
                type="text"
                name="medicine"
                id="medicine"                             
                {...register("medicine", { required: true })}
              />       
            </div>
            <div className="mb-2">
              <label for="quantity">Quantity:</label>
              <br />
              <input
                type="number"
                name="quantity"
                id="quantity"                              
                {...register("quantity", { required: true })}
              />       
            </div>
            <div className="mb-2">
              <label for="price">Price:</label>
              <br />
              <input
                type="number"
                name="price"
                id="price"                            
                {...register("price", { required: true })}
              />       
            </div>
            <div className="mb-2">
              <label for="price">Date:</label>
              <br />
              <input
                type="date"
                name="purchase_date"
                id="purchase_date"                            
                {...register("purchase_date", { required: true })}
              />       
            </div>
            <div>
            <Button type="submit" variant="outline-primary" className="mt-4 w-100">
              Save
            </Button>
            </div> 


          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalNewPurchase;
