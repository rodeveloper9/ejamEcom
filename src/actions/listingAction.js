import { curry, pipe } from 'rambda';
import listingConnector from './../connector/getListing';
import Constants from './../constant/index';
import setListingData from './../decorator/listingDecorator';

const then = curry((f, p) => p.then(f)),
    getListingData = (reqQuery) => {
        return async (dispatch) => {
            const response = await pipe(listingConnector, then(setListingData))(reqQuery);
            dispatch({
                type: Constants.LIST.GET_LIST,
                response
            });
        };
    }

export default getListingData