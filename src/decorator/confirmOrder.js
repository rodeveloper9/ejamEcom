const confirmOrder = (response) => {
    const { status = '', statusText = '', data = {} } = response;
    if (status === 200 && statusText === 'OK') {
        return data
    }
};

export default confirmOrder;