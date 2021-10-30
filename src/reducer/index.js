import listReducer from './listingReducer';
import cartReducer from './cartReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    listReducer, cartReducer
})

export default rootReducer