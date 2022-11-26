import {API_URL} from '../../data'

const getProducts = async () => {
    //const requestURL = API_URL + '/products';
    const requestURL = API_URL + '/products?company=Huawei&price=<1500';

    let response = await fetch(requestURL);
    let data = await response.json();
    return data;
}

const getSingleProduct = async (productId) => {
    const requestURL = API_URL + '/products/' + productId;

    let response = await fetch(requestURL);
    let data = await response.json();
    return data;
}




export {getProducts, getSingleProduct};