import { notify } from 'react-notify-toast';

export const setLocalStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

export const deleteLocalStorage = (key) => {
    localStorage.removeItem(key);
}

export const msgToaster = (msg, timePeriod, msgType) => {
    if (msgType)
        notify.show(msg, msgType, timePeriod ? timePeriod : 4000);
    else
        notify.show(msg, "error", timePeriod ? timePeriod : 4000);
}

// export const isInCart = (product = {}, data = []) => {
//     return !!data.find((item) => item.id === product.id);
// };
