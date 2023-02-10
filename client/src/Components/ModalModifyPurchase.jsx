import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import { modifyPurchase } from "../api/api";

const ModalModifyPurchase = ({
  id,
  country,
  purchase_date,
  patient_id,
  medicine,
  quantity,
  price,
}) => {  

  const modifyPurchaseAlert = () => toast.success("Purchase edited!");

  // Modal states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Form states
  const {
    register,
    handleSubmit    
  } = useForm();

  const onSubmit = (data) => {
    const dataFormat = {
      country: data.country,
      medicine: data.medicine,
      patient_id: patient_id,
      quantity: Number(data.quantity),
      purchase_date: data.purchase_date,
      price: Number(data.price),
    };

    modifyPurchase(id, dataFormat);
    modifyPurchaseAlert();
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  };

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Edit
      </Button>      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Purchase</Modal.Title>
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
                placeholder={country}
                required
                pattern="[a-zA-Z ]{2,}"
                {...register("country")}
              />
            </div>
            <div className="mb-2">
              <label for="medicine">Medicine:</label>
              <br />
              <input
                type="text"
                name="medicine"
                id="medicine"
                placeholder={medicine}
                required
                pattern="[a-zA-Z ]{2,}"
                {...register("medicine")}
              />
            </div>
            <div className="mb-2">
              <label for="quantity">Quantity:</label>
              <br />
              <input
                type="number"
                min="1"
                name="quantity"
                id="quantity"
                required
                placeholder={quantity}
                {...register("quantity")}
              />
            </div>
            <div className="mb-2">
              <label for="price">Price:</label>
              <br />
              <input
                type="number"
                min="1"
                name="price"
                id="price"
                required
                placeholder={price}
                {...register("price")}
              />
            </div>
            <div className="mb-2">
              <label for="price">Date:</label>
              <br />
              <input
                type="date"
                name="purchase_date"
                id="purchase_date"
                required
                placeholder={purchase_date}
                {...register("purchase_date")}
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

export default ModalModifyPurchase;
