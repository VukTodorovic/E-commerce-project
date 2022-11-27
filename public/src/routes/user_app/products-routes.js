import {API_URL} from '../../data'

const getProducts = async (options) => {
    let requestURL = API_URL + '/products'; //?name="Product"&company=Huawei&price=<1500
    //console.log("Query options object:", options)
    const {search} = options;

    if(search){
        requestURL += `?name=${search}`;
    }

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