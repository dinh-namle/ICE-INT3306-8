import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // URL của backend

export const getPartnerProfile = async () => {
  return await axios.get(`${API_BASE_URL}/partner/profile`);
};

export const updatePartnerProfile = async (profileData: any) => {
  return await axios.post(`${API_BASE_URL}/partner/profile`, profileData);
};

export const changePartnerPassword = async (passwordData: any) => {
  return await axios.post(`${API_BASE_URL}/partner/change-password`, passwordData);
};
