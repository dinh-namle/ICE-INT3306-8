import apiClient from "./apiClient";

export const getUserList = async () => {
  return await apiClient.get("/users/get-list");
};

export const getUserInfo = async (id: number) => {
  return await apiClient.get(`/users/get-info/${id}`);
};

export const updateUser = async (id: number, data: any) => {
  return await apiClient.put(`/users/update/${id}`, data);
};

export const createUser = async (data: any) => {
  return await apiClient.post("/users/create", data);
};

export const deleteUser = async (id: number) => {
  return await apiClient.delete(`/users/delete/${id}`);
};

export const changeUserPassword = async (id: number, data: any) => {
  return await apiClient.post(`/users/change-password/${id}`, data);
};