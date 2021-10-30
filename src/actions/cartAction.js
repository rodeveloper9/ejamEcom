import Constants from './../constant/index';

const addtoCart = (data) => {
    return (dispatch) => {
        dispatch({
            type: Constants.CART.ADD_CART,
            payload: data
        });
        dispatch(cartSum());
    };
}

const increaseItem = (data) => {
    return (dispatch) => {
        dispatch({
            type: Constants.CART.INCREASE_ITEM,
            payload: data
        });
        dispatch(cartSum());
    };
}

const decreaseItem = (data) => {
    return (dispatch) => {
        dispatch({
            type: Constants.CART.DECREASE_ITEM,
            payload: data
        });
        dispatch(cartSum());
    };
}

const cartSum = () => {
    return (dispatch) => {
        dispatch({
            type: Constants.CART.SUM_ITEM
        });
    };
}


export {
    addtoCart, increaseItem, decreaseItem, cartSum
}
