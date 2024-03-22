import axios from 'axios';
import { BASE_URL } from './config';
import { successResponse } from './ApiResponse';
import { FETCH_ALL_CHATS, SEARCH_USER } from './API_ENDPOINTS';
import { getToken } from './AuthService';
let service = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: getToken(),
    'Content-Type': 'application/json'
  }
});

const searchUsers = async (data) => {
  try {
    const response = await service.post(SEARCH_USER, data);
    return successResponse(response);
  } catch (error) {
    const message = {
      message: error?.message
    }
    return { status: false, data: error?.response?.data ?? message };
  }
}
const fetchAllChats = async (data) => {   
  try {
    const response = await service.post(FETCH_ALL_CHATS, data);
    return successResponse(response);
  } catch (error) {
    const message = {
      message: error?.message
    }
    return { status: false, data: error?.response?.data ?? message };
  }
}
export { searchUsers, fetchAllChats }