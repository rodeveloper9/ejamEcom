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

const removeItem = (data) => {
    return (dispatch) => {
        dispatch({
            type: Constants.CART.REMOVE_ITEM,
            payload: data
        });
        dispatch(cartSum());
    };
}

const emptyCart = () => {
    return (dispatch) => {
        dispatch({
            type: Constants.CART.EMPTY_CART
        });
        dispatch(cartSum());
    };
}


export {
    addtoCart, increaseItem, decreaseItem, cartSum, removeItem, emptyCart
}
