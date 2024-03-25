import { Alert } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { setClearMessage } from '../../store/slices/alertMessageSlice';

export const ErrorMessage = () => {
    const dispatch = useDispatch();

    const { error } = useSelector((state) => state.alert);
    return (
        <Alert fullWidth severity="error" onClose={() => dispatch(setClearMessage())}>
            {error}
        </Alert>
    )
}
export const SuccessMessage = () => {
    const { success } = useSelector((state) => state.alert);
    const dispatch = useDispatch();
    return (
        <Alert severity="success" onClose={() => dispatch(setClearMessage())}>
            {success}
        </Alert>
    )
}