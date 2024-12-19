import apiClient from "./apiClient";

export const addPayoutMethod = async (type: string, details: string) => {
  return await apiClient.post("/payments/add", { type, details });
};

export const removePayoutMethod = async (id: number) => {
  return await apiClient.delete(`/payments/remove/${id}`);
};
