import React, { useState } from 'react';
import SkeltonLoader from '../common/loader/SkeltonLoader';
import { getLocalStorage } from '../../utils/utils';

const ListingItem = ({ data = {}, addToCartHandler, increaseItemHandler }) => {
    const [showImgLoader, setImgLoader] = useState(true);
    const cartData = getLocalStorage('cartItem') || [];
    const isInCart = (product) => {
        return !!cartData.find((item) => item.id === product.id);
    };
    const { title = '', image = '', price = '', id = '', quantity = 0 } = data;
    if (showImgLoader) {
        const objImg = new Image();
        objImg.src = image;
        objImg.onload = () => {
            setImgLoader(false);
        };
    }

    return (
        <div className="items_list" key={`list_${id}`}>
            {showImgLoader ? <SkeltonLoader width={'100%'} height={'10rem'} /> : <img className="items_img" src={image} alt="" />}
            <h3 className="items_name">{title}</h3>
            <h4 className="items_price"><span>&#36;</span> {price}</h4>
            {isInCart(data) ?
                <button onClick={() => increaseItemHandler(data)} className="ejamBtn" disabled={quantity === 10 ? true : false}>Add More</button>
                :
                <button onClick={() => addToCartHandler(data)} className="ejamBtn">Add to Cart</button>
            }
        </div>
    )
}

export default ListingItem
