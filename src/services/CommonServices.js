import axios from 'axios';
import { BASE_URL } from './config';
import { successResponse } from './ApiResponse';
import { CHECK_USER_NAME_EXISTS, CREATE_POST, POSTS, PROFILE, UPDATE_PROFILE } from './API_ENDPOINTS';
import { getToken } from './AuthService';
let service = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': getToken()
    }
});

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
const getProfile = async () => {
    try {
        const response = await service.post(PROFILE, {});
        return successResponse(response);
    } catch (error) {
        const message = {
            message: error?.message
        }
        return { status: false, data: error?.response?.data ?? message };
    }
}
const updateProfile = async (data) => {
    try {
        const response = await service.post(UPDATE_PROFILE, data);
        return successResponse(response);
    } catch (error) {
        const message = {
            message: error?.message
        }
        return { status: false, data: error?.response?.data ?? message };
    }
}
export {
    checkUsernameExists,
    createPost, getAllPost, getProfile, updateProfile
}