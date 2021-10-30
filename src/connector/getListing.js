import externalApiRequest from './../config/externalApi';

const listingConnector = (content) => {
    const options = {
        api: 'listing',
        content
    };
    return externalApiRequest(options);
};

export default listingConnector;
