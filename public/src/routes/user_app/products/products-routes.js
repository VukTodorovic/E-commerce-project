import {API_URL} from '../../../data'

const getProducts = async () => {
    const requestURL = API_URL + '/products';

    let response = await fetch(requestURL);
    let data = await response.json();
    return data;
}

const getSingleProduct = (productId) => {
    return API_URL + '/products/' + productId;
}




export {getProducts, getSingleProduct};