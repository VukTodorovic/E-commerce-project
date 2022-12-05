import {API_URL} from '../../data';

const getProducts = async (options) => {
    let requestURL = API_URL + '/products'; //?name="Product"&company=Huawei&price=<1500
    let urlParameters = '';
    const {search, company, price, sort} = options;

    

    if(search) {
        urlParameters += `name=${search}`;
    }

    if(company) {
        let companyString="";
    
        const companiesEnum = ["apple", "honor", "huawei", "nokia", "samsung", "xiaomi"];
        companiesEnum.forEach(companyName => {
            if(company[companyName] === true){
                const bigFirstLetter = companyName.charAt(0).toUpperCase() + companyName.substring(1);
                companyString += "+" + bigFirstLetter;
            }
        });

        companyString = companyString.substring(1); // Uklanja '+' viska sa pocetka
        urlParameters += '&company=' + companyString;
    }

    if(price) {
        urlParameters += '&price=' + '<' + price;
    }
      
    if(sort) {
        urlParameters += '&sort=' + sort;
    }

    urlParameters = urlParameters.substring(1);  // Uklanja '&' viska sa pocetka
    requestURL += '?' + urlParameters;
    console.log("Request URL:", requestURL);

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