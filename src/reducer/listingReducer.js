import Constants from './../constant/index';

const initialState = {
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
        default:
            return state;
    }
}

export default ListingReducer;