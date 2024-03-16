import axios from 'axios';
import { BASE_URL } from './config';
import { successResponse } from './ApiResponse';
import { AUTH_LOGIN, AUTH_SIGNUP, CHECK_USER_NAME_EXISTS, CREATE_POST, POSTS } from './API_ENDPOINTS';
let service = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

const userLogin = async (data) => {
  try {
    const response = await service.post(AUTH_LOGIN, data);
    return successResponse(response);
  } catch (error) {
    const message = {
      message: error?.message
    }
    return { status: false, data: error?.response?.data ?? message };
  }
}
const userSignUp = async (data) => {
  try {
    const response = await service.post(AUTH_SIGNUP, data);
    return successResponse(response);
  } catch (error) {
    const message = {
      message: error?.message
    }
    return { status: false, data: error?.response?.data ?? message };
  }
}
const checkUsernameExists = async (data) => {
  try {
    const response = await service.post(CHECK_USER_NAME_EXISTS, data);
    return successResponse(response);
  } catch (error) {
    const message = {
      message: error?.message
    }
    return { status: false, data: error?.response?.data ?? message };
  }
}
const createPost = async (data) => {
  try {
    const response = await service.post(CREATE_POST, data);
    return successResponse(response);
  } catch (error) {
    const message = {
      message: error?.message
    }
    return { status: false, data: error?.response?.data ?? message };
  }
}
const getAllPost = async (data) => {
  try {
    const response = await service.post(POSTS, data);
    return successResponse(response);
  } catch (error) {
    const message = {
      message: error?.message
    }
    return { status: false, data: error?.response?.data ?? message };
  }
}

export {
  userLogin, userSignUp, checkUsernameExists,
  createPost, getAllPost
}