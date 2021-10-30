import { curry, pipe } from 'rambda';
import confirmOrderConnect from '../connector/confirmOrder';
import Constants from '../constant/index';
import setConfirmOrder from '../decorator/confirmOrder';

const then = curry((f, p) => p.then(f)),
    confirmOrder = (payload) => {
        return async (dispatch) => {
            const response = await pipe(confirmOrderConnect, then(setConfirmOrder))(payload);
            dispatch(orderConfirmed());
            dispatch({
                type: Constants.ORDER.CONFIRM_ORDER,
                response
            });
        };
    }

const orderConfirmed = () => {
    return (dispatch) => {
        dispatch({
            type: Constants.ORDER.CONFIRMING
        });
    };
}

export {
    confirmOrder, orderConfirmed
}