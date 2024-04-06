import axios from 'axios';
import { BASE_URL } from './config';
import { successResponse } from './ApiResponse';
import { USERS } from './API_ENDPOINTS';
import { getToken } from './AuthService';
let service = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': getToken()
    }
});

const getAllUsers = async (data) => {
    try {
        const response = await service.post(USERS, data);
        return successResponse(response);
    } catch (error) {
        const message = {
            message: error?.message
        }
        return { status: false, data: error?.response?.data ?? message };
    }
}

export { getAllUsers }