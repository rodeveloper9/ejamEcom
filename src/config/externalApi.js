import axios from "axios";
import ApiConfig from "./apiConfig";
/**
 * It will build the Req data for the external API according to GET and POST method
 * @params Options
 * @return JSON
 */
const _buildReqData = options => {
    const { content = '', api = "", urlAppend = "" } = options;
    const apiDetail = ApiConfig[api];
    const { method, url = '' } = apiDetail;
    const apiUrl = `${url}${urlAppend}`;
    let postData = {};
    if (method == "POST") {
        postData = setPostData(content);
    }
    return {
        url: apiUrl,
        method,
        ...postData
    };
};

const setPostData = content => {
    return {
        data: content
    };
};

const ExternalApiRequest = async (options) => {
    const reqData = await _buildReqData(options);
    return axios(reqData)
        .then(responseData => {
            return responseData
        })
        .catch(err => {
            return err;
        });
};

export default ExternalApiRequest;
