import axios from "axios";

const BASE_URL = "https://ahaan-software-1.onrender.com/api";
// const BASE_URL = "http://localhost:5000/api";

const API = axios.create({ baseURL: BASE_URL });

export const getTeams = async () => {
  try {
    const response = await API.get("/team/all");
    return Array.isArray(response.data) ? response.data : response.data.team || response.data.data || [];
  } catch (error) {
    console.error("❌ Error fetching teams:", error);
    return [];
  }
};
// ➤ Get all web development projects
export const getAllDevelopmentsAPI = async () => {
  try {
    const response = await API.get("/developments/all");
    return response;
  } catch (error) {
    console.error("❌ Error fetching developments:", error);
    throw error;
  }
};
// ➤ Get all UI/UX designs
export const getAllUiUxDesignsAPI = async () => {
  try {
    const response = await API.get("/designs");
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching UI/UX designs:", error);
    return [];
  }
};
