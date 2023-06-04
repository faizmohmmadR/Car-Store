import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "Content-type": "application/json",
  },
});

export const getAllCars = async () => {
  const { data } = await Api.get("/car/");
  return data;
};

export const getcar = async (id) => {
  const { data } = await Api.get(`/car/${id}/`, id);
  return data;
};

export const addCar = async (car) => {
  return await Api.post("/car/", car);
};

export const updateCar = async (car) => {
  return await Api.patch(`/car/${car.id}/`, car);
};

export const deleteCar = async ({ id }) => {
  return await Api.delete(`/carDelete/${id}`, id);
};

export const getUsers = async () => {
  const { data } = await Api.get("/user/");
  return data;
};

export const addUser = async (user) => {
  return await Api.post("/auth/register/", user);
};
export const getAddress = async () => {
  const { data } = await Api.get("/address/");
  return data;
};

export default Api;
