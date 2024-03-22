import axios from 'axios';
import { BASE_URL } from './config';
import { successResponse } from './ApiResponse';
import { ACCEPT_REQUEST, MY_RECEIVED_CONNECTIONS, MY_SEND_CONNECTIONS, SEND_REQUEST } from './API_ENDPOINTS';
import { getToken } from './AuthService';
let service = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: getToken(),
        'Content-Type': 'application/json'
    }
});
const getMyReceivedConnections = async (data) => {
    try {
        const response = await service.post(MY_RECEIVED_CONNECTIONS, data);
        return successResponse(response);
    } catch (error) {
        const message = {
            message: error?.message
        }
        return { status: false, data: error?.response?.data ?? message };
    }
}
const getMySendConnections = async (data) => {
    try {
        const response = await service.post(MY_SEND_CONNECTIONS, data);
        return successResponse(response);
    } catch (error) {
        const message = {
            message: error?.message
        }
        return { status: false, data: error?.response?.data ?? message };
    }
}

const sendRequest = async (data) => {
    try {
        const response = await service.post(SEND_REQUEST, data);
        return successResponse(response);
    } catch (error) {
        const message = {
            message: error?.message
        }
        return { status: false, data: error?.response?.data ?? message };
    }
}
const acceptRequest = async (data) => {
    try {
        const response = await service.post(ACCEPT_REQUEST, data);
        return successResponse(response);
    } catch (error) {
        const message = {
            message: error?.message
        }
        return { status: false, data: error?.response?.data ?? message };
    }
}
export { getMyReceivedConnections, getMySendConnections, sendRequest, acceptRequest }