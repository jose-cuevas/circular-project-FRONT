import axios from "axios";

const urlPurchases = "http://localhost:8000/api/purchases/";

const getAllPurchases = async (urlPath, setPurchases, setSearchResults, setIsLoading) => {
  try {
    const response = await fetch(urlPath);
    const data = await response.json();
    setPurchases(data);
    setSearchResults(data)
    setIsLoading(false)
  } catch (error) {
    console.log(error);
  }
};

const createPurchase = async (newPurchase) => {  
  axios
    .post(urlPurchases, newPurchase)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const deletePurchase = async (purchaseId) => {
  axios
    .delete(`http://localhost:8000/api/purchases/${purchaseId}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  setTimeout(function () {
    window.location.reload();
  }, 3000);
};

const modifyPurchase = async (purchaseId, data) => {  
  axios
    .put(`http://localhost:8000/api/purchases/${purchaseId}`, data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export { getAllPurchases, deletePurchase, createPurchase, modifyPurchase };
