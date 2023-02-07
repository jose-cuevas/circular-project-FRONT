import axios from "axios";

const urlPurchases = 'http://localhost:8000/api/purchases'
const getAllPurchases = async (urlPath, setState) => {
  try {
    const response = await fetch(urlPath);
    const data = await response.json();
    setState(data);
  } catch (error) {
    console.log(error);
  }
};

const createPurchase = async (newPurchase) => {
  console.log(newPurchase)
  axios
    .post(urlPurchases , newPurchase)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};


const deletePurchase = async (userId) => {
  axios
    .delete(`http://localhost:7000/user/${userId}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err)); 
  window.location.reload();   
};



const modifyPurchase = async (userId, data) => {  
 axios
    .patch(`http://localhost:7000/user/${userId}`, data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export { getAllPurchases, deletePurchase, createPurchase, modifyPurchase };