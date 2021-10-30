import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseItem, decreaseItem, removeItem } from '../../../actions/cartAction';

const CartItem = ({ data }) => {
    const { cartReducer = {} } = useSelector((state) => state);
    const { cartSum = 0 } = cartReducer;
    const dispatch = useDispatch();

    const increaseItemHandler = (payload) => {
        dispatch(increaseItem(payload));
    }

    const decreaseItemHandler = (payload) => {
        dispatch(decreaseItem(payload));
    }

    const removeItemHandler = (payload) => {
        dispatch(removeItem(payload));
    }
    const { name = '', imageUrl = '', price = 0, quantity = 0 } = data;

    return (
        <Fragment>
            <div className="cartItem">
                <img src={imageUrl} className="cartItem_img" alt={name} />
                <div className="cartItem_detail">
                    <p className="cartItem_text">{name}</p>
                    <p className="cartItem_text">
                        {quantity < 10 && <button className="cartItem_btn" name="Increase Quantity" onClick={() => increaseItemHandler(data)}>+</button>}
                        <span className="cartItem_qty">{quantity}</span>
                        {quantity > 1 && <button className="cartItem_btn" name="Decrease Quantity" onClick={() => decreaseItemHandler(data)}>-</button>}
                    </p>
                </div>
                <p className="cartItem_price">&#36; {(price * quantity).toFixed(2)}</p>
                <button className="cartItem_btn remove" name="Remove Product" onClick={() => removeItemHandler(data)}>x</button>
            </div>
            <div className="cartDetail_top amount">
                <span className="cartDetail_head">Total Amount</span>
                <span className="cartDetail_head">&#36; {cartSum}</span>
            </div>
        </Fragment>
    )
}

export default CartItem
