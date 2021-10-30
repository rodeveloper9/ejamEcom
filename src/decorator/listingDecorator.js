const listing = (response) => {
    const { data = [] } = response;
    return {
        data
    };
};

export default listing;