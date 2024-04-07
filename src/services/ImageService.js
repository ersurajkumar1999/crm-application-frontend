import axios from 'axios';
import { getToken } from "./AuthService";
import { BASE_URL } from "./config";
import { IMAGE_UPLOAD } from "./API_ENDPOINTS";
import { successResponse } from "./ApiResponse";

let service = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': getToken(),
  },
});
const imageUpload = async (data) => {
  console.log("data", data);
  try {
    const response = await service.post(IMAGE_UPLOAD, data);
    return successResponse(response);
  } catch (error) {
    const message = {
      message: error?.message
    }
    return { status: false, data: error?.response?.data ?? message };
  }
}

export { imageUpload };
