/**
 * Actions for Redux used across application.
 */
const actions = (() => {
    return {
        LIST: {
            GET_LIST: 'GET_LIST',
        },
        CART: {
            ADD_CART: 'ADD_CART',
            INCREASE_ITEM: 'INCREASE_ITEM',
            DECREASE_ITEM: 'DECREASE_ITEM',
            SUM_ITEM: 'SUM_ITEM',
            REMOVE_ITEM: 'REMOVE_ITEM',
            EMPTY_CART: 'EMPTY_CART'
        },
        ORDER: {
            CONFIRM_ORDER: 'CONFIRM_ORDER',
            CONFIRMING: 'CONFIRMING'
        }
    };
})();

export default actions;
