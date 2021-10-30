import Constants from './../constant/index';

const initialState = {
    orderId: '',
    isConfirm: false
};

const ListingReducer = (state = initialState, action) => {
    const { response = {} } = action;
    switch (action.type) {
        case Constants.ORDER.CONFIRM_ORDER:
            return {
                ...state,
                orderId: response.id
            };
        case Constants.ORDER.CONFIRMING:
            return {
                ...state,
                isConfirm: true
            };
        default:
            return state;
    }
}

export default ListingReducer;