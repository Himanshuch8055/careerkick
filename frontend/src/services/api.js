import axios from "axios";

const API_URL = "http://localhost:5001/api";

export const getProducts = () => axios.get(`${API_URL}/products`);
export const searchProducts = (category, name) =>
  axios.get(`${API_URL}/products/search`, { params: { category, name } });
export const addProductToCart = (userId, productId) =>
  axios.post(`${API_URL}/cart/${userId}`, { productId });
export const getCart = (userId) => axios.get(`${API_URL}/cart/${userId}`);
export const removeFromCart = (userId, productId) =>
  axios.delete(`${API_URL}/cart/${userId}/${productId}`);
export const placeOrder = (userId, items, totalPrice) =>
  axios.post(`${API_URL}/orders`, { userId, items, totalPrice });
