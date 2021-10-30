import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getLocalStorage } from '../../utils/utils';
import { Link } from 'react-router-dom';
import CartItem from '../common/components/CartItem';

const Header = () => {
    const { cartReducer = {} } = useSelector((state) => state);
    const { cartData = [] } = cartReducer;
    const [cartItems, setCartItems] = useState([]);
    const [showCartDetail, setShowCartDetail] = useState(false);

    useEffect(() => {
        setCartItems(getLocalStorage('cartItem') || []);
    }, [cartData])

    const handleCartPreview = () => {
        setShowCartDetail(!showCartDetail)
    }

    return (
        <header className="ejamHeader">
            <img src="/images/logo.svg" alt="logo" className="ejamHeader_logo" />
            <div className="ejamHeader_content" onClick={() => handleCartPreview()}>
                <img src="/images/cartBag.png" className="ejamHeader_content_icon" alt="cart icon" />
                <span className="ejamHeader_content_count">{cartItems.length ? cartItems.length : 0}</span>
            </div>
            <div className={`cartDetail ${showCartDetail ? 'show' : 'hide'}`}>
                <div className="cartDetail_top">
                    <span className="cartDetail_head">Your Cart</span>
                    <p className="cartDetail_closeBtn" onClick={() => handleCartPreview()}>×</p>
                </div>
                {cartItems.length ?
                    <Fragment>
                        <div className="cartDetail_content">
                            {cartItems.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        <CartItem
                                            data={item}
                                        />
                                    </Fragment>
                                )
                            })
                            }
                        </div>
                        <Link to={`/shipping`} className="ejamBtn">
                            Checkout
                        </Link>
                    </Fragment>
                    : <Fragment>
                        <h4> No item(s) in the cart </h4>
                        <Link to={`/`} className="ejamBtn">
                            Shop Now
                        </Link>
                    </Fragment>
                }

            </div>
        </header>
    )
}

export default Header
