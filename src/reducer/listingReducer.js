import Constants from './../constant/index';

const initialState = {
    counter: 0,
    listingData: {}
};

const ListingReducer = (state = initialState, action) => {
    const { response = {} } = action;
    switch (action.type) {
        case Constants.LIST.GET_LIST:
            return {
                ...state,
                listingData: response.data
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}

export default ListingReducer;