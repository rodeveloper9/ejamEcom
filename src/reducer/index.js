import listReducer from './listingReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    listReducer, cartReducer, orderReducer
})

export default rootReducer