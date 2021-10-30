import Constants from './../constant/index';
import { getLocalStorage, setLocalStorage, msgToaster, deleteLocalStorage } from '../utils/utils';

const initialState = {
    cartData: getLocalStorage('cartItem') || [],
    cartSum: getLocalStorage('total') || 0
};

const CartReducer = (state = initialState, action) => {
    let _cartData = []
    switch (action.type) {
        case Constants.CART.ADD_CART:
            if (!state.cartData.find((item) => item.id === action.payload.id)) {
                action.payload.quantity = 1;
                _cartData = [...state.cartData, action.payload];
                setLocalStorage('cartItem', _cartData)
                msgToaster('Item Added in cart', 3000, 'success')
            }
            return {
                ...state,
                cartData: _cartData
            };
        case Constants.CART.INCREASE_ITEM:
            state.cartData[
                state.cartData.findIndex(
                    (item) => item.id === action.payload.id
                )
            ].quantity++
            setLocalStorage('cartItem', [...state.cartData])
            return {
                ...state,
                cartData: [...state.cartData]
            };
        case Constants.CART.DECREASE_ITEM:
            state.cartData[
                state.cartData.findIndex(
                    (item) => item.id === action.payload.id
                )
            ].quantity--
            setLocalStorage('cartItem', [...state.cartData])
            return {
                ...state,
                cartData: [...state.cartData]
            };
        case Constants.CART.SUM_ITEM:
            const totalSum = state.cartData
                .reduce((total, product) => total + product.price * product.quantity, 0)
                .toFixed(2);
            setLocalStorage('total', totalSum)
            return {
                ...state,
                cartSum: totalSum
            };
        case Constants.CART.REMOVE_ITEM:
            _cartData = [
                ...state.cartData.filter(
                    (item) => item.id !== action.payload.id
                ),
            ]
            msgToaster('Item removed from cart', 3000, 'success')
            setLocalStorage('cartItem', _cartData);
            return {
                ...state,
                cartData: _cartData
            };
        case Constants.CART.EMPTY_CART:
            deleteLocalStorage('cartItem');
            return {
                ...state,
                cartData: []
            };
        default:
            return state;
    }
}

export default CartReducer;