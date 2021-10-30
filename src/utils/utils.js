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

export const validateCard = (payload = {}) => {
    const regex = /^[0-9/()]*$/;
    const { cardNum = '', name = '', expDate = '', cvv = '' } = payload;
    if (!cardNum) {
        return {
            error: true,
            msg: 'Please enter card Detail'
        }
    }
    if (!cardNum.length === 16) {
        return {
            error: true,
            msg: 'Please enter valid card details '
        }
    }
    if (!name) {
        return {
            error: true,
            msg: 'Please enter name on card'
        }
    }
    if (!expDate) {
        return {
            error: true,
            msg: 'Please enter expiry date'
        }
    }
    if (!regex.test(expDate)) {
        return {
            error: true,
            msg: 'Incorrect expiry date format'
        }
    }
    if (!cvv) {
        return {
            error: true,
            msg: 'Please enter CVV'
        }
    }
    else {
        return {
            error: false,
            msg: ''
        }
    }
}