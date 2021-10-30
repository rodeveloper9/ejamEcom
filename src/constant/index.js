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
            SUM_ITEM: 'SUM_ITEM'
        }
    };
})();

export default actions;
