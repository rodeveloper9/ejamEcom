import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseItem, decreaseItem } from './../../actions/cartAction';
import { getLocalStorage } from '../../utils/utils';

const Header = () => {
    const { cartReducer = {} } = useSelector((state) => state);
    const { cartData = [], cartSum = 0 } = cartReducer;
    const [cartItems, setCartItems] = useState([]);
    const [cartDetail, setCartDetail] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setCartItems(getLocalStorage('cartItem') || []);
    }, [cartData])

    const handleCartPreview = () => {
        setCartDetail(!cartDetail)
    }

    const increaseItemHandler = (payload) => {
        dispatch(increaseItem(payload));
    }

    const decreaseItemHandler = (payload) => {
        dispatch(decreaseItem(payload));
    }

    return (
        <header className="ejamHeader">
            <img src="/images/logo.svg" alt="logo" className="ejamHeader_logo" />
            <div className="ejamHeader_content" onClick={() => handleCartPreview()}>
                <img src="/images/cartBag.png" className="ejamHeader_content_icon" alt="cart icon" />
                <span className="ejamHeader_content_count">{cartItems.length ? cartItems.length : 0}</span>
            </div>
            <div className={`cartDetail ${cartDetail ? 'show' : 'hide'}`}>
                <div className="cartDetail_top">
                    <span className="cartDetail_head">Your Cart</span>
                    <p className="cartDetail_closeBtn" onClick={() => handleCartPreview()}>×</p>
                </div>
                <div className="cartDetail_content">
                    {cartItems.map((item, index) => {
                        const { title = '', image = '', price = 0, quantity = 0 } = item;
                        return (
                            <div className="cartItem" key={index}>
                                <img src={image} className="cartItem_img" alt={title} />
                                <div className="cartItem_detail">
                                    <p className="cartItem_text">{title}</p>
                                    <p className="cartItem_text">
                                        {quantity < 10 && <button className="cartItem_btn" title="Increase Quantity" onClick={() => increaseItemHandler(item)}>+</button>}
                                        <span className="cartItem_qty">{quantity}</span>
                                        {quantity > 1 && <button className="cartItem_btn" title="Decrease Quantity" onClick={() => decreaseItemHandler(item)}>-</button>}
                                    </p>
                                </div>
                                <p className="cartItem_price">&#36; {(price * quantity).toFixed(2)}</p>
                                <button className="cartItem_btn remove" title="Remove Product">x</button>
                            </div>
                        )
                    })
                    }
                </div>
                <div class="cartDetail_top amount">
                    <span class="cartDetail_head">Total Amount</span>
                    <span class="cartDetail_head">&#36; {cartSum}</span>
                </div>
                <button className="ejamBtn">Checkout</button>
            </div>
        </header>
    )
}

export default Header
