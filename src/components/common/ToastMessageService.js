import { toast } from 'react-toastify';

export const ToastSuccessMessage = (message = 'This is a success message!') => {
    toast.success(message, {
        position: 'top-right',
        autoClose: 5000, // Close the toast after 3000 milliseconds (3 seconds)
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export const ToastErrorMessage = (message = 'Something went wrong!') => {
    toast.error(message, {
        position: 'top-right',
        autoClose: 5000, // Close the toast after 3000 milliseconds (3 seconds)
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}