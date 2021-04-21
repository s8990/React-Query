import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000/api",
});

const getAllProducts = async () => {
  const { data } = await client.get(`/product`);
  return data;
  // const response = await client.get(`/product`);
  // console.log({ response });
  // const data = response.data;
  // return data;
};

const getProduct = async (id) => {
  const { data } = await client.get(`/product/${id}`);
  return data;
};

const createProduct = async ({ name, description, amount }) => {
  const product = { name, description, amount };
  const { data } = await client.post(`/product`, product);
  return data;
};

const updateProduct = async ({ id, ...product }) => {
  const { data } = await client.put(`/product/${id}`, product);
  return data;
};

const deleteProduct = async (id) => {
  const { data } = await client.delete(`/product/${id}`);
  return data;
};

export {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
