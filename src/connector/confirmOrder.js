import externalApiRequest from './../config/externalApi';

const confirmOrderConnect = (content) => {
    const options = {
        api: 'confirmOrder',
        content: {
            ...content
        }
    };
    return externalApiRequest(options);
};

export default confirmOrderConnect;
