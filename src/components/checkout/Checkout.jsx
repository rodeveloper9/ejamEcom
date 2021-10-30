import React, { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLocalStorage } from '../../utils/utils';
import CartItem from "../common/components/CartItem";
import InputBox from "../common/components/InputBox";
import { validateCard, msgToaster } from "../../utils/utils";
import { confirmOrder } from '../../actions/orderAction';
import { emptyCart } from '../../actions/cartAction';
import FullPageLoader from "../common/loader/FullpageLoader";

const Checkout = () => {
    const { cartReducer = {}, orderReducer = {} } = useSelector((state) => state);
    const { cartData = [], cartSum = 0 } = cartReducer;
    const { orderId = '', isConfirm = false } = orderReducer;
    const [cartItems, setCartItems] = useState([]);
    const [cardData, setCardData] = useState({});
    const [isOrderConfirm, setIsOrderConfirm] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const cartItems = getLocalStorage('cartItem') || [];
        setCartItems(cartItems);
    }, [cartData]);

    const handleInputChange = (event, type) => {
        const value = event.target.value;
        setCardData({
            ...cardData,
            [type]: value
        });
    }

    const handleConfirmOrder = () => {
        if (Object.keys(cardData).length === 0) {
            msgToaster('Please enter card details')
        }
        else {
            const { error = false, msg = '' } = validateCard(cardData);
            if (error) {
                msgToaster(msg)
            }
            else {
                const finalData = {
                    cartData: cartItems,
                    cardDetails: cardData
                }
                dispatch(confirmOrder(finalData));
                setIsOrderConfirm(true)
                setCardData('');
                dispatch(emptyCart());
            }
        }
    }

    return (
        <Fragment>
            <div style={{ textAlign: "left", paddingLeft: '16px' }}>
                <Link to={`/`} className="ejamBtn">
                    Back to shop
                </Link>
            </div>
            <div className="ejamCheckout">
                {isOrderConfirm ?
                    isConfirm ?
                        <h1>Thanks for your Order. Your order Id is {orderId}</h1>
                        : <FullPageLoader />
                    :
                    <div className="ejamCheckout_content">
                        <div className="ejamCheckout_card">
                            <div className="ejamCheckout_card_details">
                                <h2 className="ejamCheckout_card_head">Card Details</h2>
                                <InputBox
                                    type={'number'}
                                    placeholder={'Card Number'}
                                    value={cardData}
                                    handleInputChange={handleInputChange}
                                    id={'cardNum'}
                                />
                                <InputBox
                                    type={'text'}
                                    placeholder={'Name on Card'}
                                    value={cardData}
                                    handleInputChange={handleInputChange}
                                    id={'name'}
                                />
                                <div className="">
                                    <InputBox
                                        type={'text'}
                                        placeholder={'Valid upto (MM/YY)'}
                                        value={cardData}
                                        handleInputChange={handleInputChange}
                                        id={'expDate'}
                                    />
                                    <InputBox
                                        type={'password'}
                                        placeholder={'CVV'}
                                        value={cardData}
                                        handleInputChange={handleInputChange}
                                        id={'cvv'}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="ejamCheckout_detail">
                            {cartItems.length ? cartItems.map((items, index) => {
                                return <Fragment key={index}>
                                    <CartItem
                                        data={items}
                                    />
                                </Fragment>
                            })
                                :
                                <p>No items in the cart</p>
                            }
                        </div>
                    </div>
                }

                {cartItems.length ?
                    <div className="ejamCheckout_btnWrap">
                        <button className="ejamBtn" name="Confirm Order" onClick={() => handleConfirmOrder()}>Confirm Order (USD {cartSum})</button>
                    </div>
                    :
                    <Link to={`/`} className="ejamBtn">
                        Shop Now
                    </Link>
                }
            </div>

        </Fragment>
    )
}

export default Checkout