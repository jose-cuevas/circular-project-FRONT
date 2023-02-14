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
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const dataToSend = {
      country: data.country,
      medicine: data.medicine,
      quantity: Number(data.quantity),
      purchase_date: data.purchase_date,
      price: Number(data.price),
    };
    createPurchase(dataToSend);
    createPurchaseAlert();

    setTimeout(function () {
      window.location.reload();
    }, 3000);
  };

  return (
    <>
      <Toaster />
      <div className="d-flex justify-content-center">
        <Button
          variant="outline-primary"
          onClick={handleShow}
          className="mb-4 p-2 w-25"
        >
          New Purchase
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Insert new purchase</Modal.Title>
        </Modal.Header>

        <Modal.Body className="m-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <label htmlFor="country">Country:</label>
              <br />
              <input
                type="text"
                name="country"
                id="country"
                required
                pattern="[a-zA-Z ]{2,}"
                {...register("country", { required: true })}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="medicine">Medicine:</label>
              <br />
              <input
                type="text"
                name="medicine"
                id="medicine"
                required
                pattern="[a-zA-Z ]{2,}"
                {...register("medicine", { required: true })}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="quantity">Quantity:</label>
              <br />
              <input
                type="number"
                min="1"
                name="quantity"
                id="quantity"
                required
                {...register("quantity", { required: true })}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="price">Price:</label>
              <br />
              <input
                type="number"
                min="1"
                name="price"
                id="price"
                required
                {...register("price", { required: true })}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="price">Date:</label>
              <br />
              <input
                type="date"
                name="purchase_date"
                id="purchase_date"
                required
                {...register("purchase_date", { required: true })}
              />
            </div>
            <div>
              <Button
                type="submit"
                variant="outline-primary"
                className="mt-4 w-100"
              >
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
