import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import getListingData from './../../actions/listingAction';
import { addtoCart, increaseItem } from './../../actions/cartAction';
import ListingItem from './ListingItem';
import FullPageLoader from "../common/loader/FullpageLoader";
import Header from '../header/header';

const ProductListing = () => {
    const { listReducer = {} } = useSelector((state) => state);
    const { listingData = {} } = listReducer;
    const { products = [] } = listingData;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListingData());
    }, []);

    const addToCartHandler = (payload) => {
        dispatch(addtoCart(payload));
    }

    const increaseItemHandler = (payload) => {
        dispatch(increaseItem(payload));
    }

    return (
        <Fragment>
            <Header />
            <div className="items_wrap">
                {products.length ? products.map((items, index) => {
                    return <Fragment key={index}>
                        <ListingItem
                            data={items}
                            addToCartHandler={addToCartHandler}
                            increaseItemHandler={increaseItemHandler}
                        />
                    </Fragment>
                })
                    :
                    <FullPageLoader />
                }
            </div>
        </Fragment>
    )
}

export default ProductListing
