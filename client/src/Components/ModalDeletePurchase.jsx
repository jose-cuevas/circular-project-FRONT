import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import toast, { Toaster } from "react-hot-toast";

import { deletePurchase } from "../api/api";

const ModalDeletePurchase = ({ id }) => {
  const deleteAlert = () => {
    toast.error("Deleted purchase!");
  };

  // Modal states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (id) => {
    deletePurchase(id);
    deleteAlert();
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  };

  return (
    <>
      <Toaster />
      <Button variant="outline-danger" className="me-2"  onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Purchase</Modal.Title>
        </Modal.Header>
        <Modal.Body className="m-auto">
          <p>You are going to delete purchase with id {`${id}`}, Ok?</p>
          <Button variant="outline-danger" className="mt-2 w-100" onClick={()=>handleDelete(id)}>
            Yes, delete
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalDeletePurchase;
