import '../styles/MainContent.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import SingleProduct from './SingleProduct';

class MainContent extends React.Component {
    constructor(props) {
        super(props);   
    }

    componentDidMount() {
        // const mainContent = ReactDOM.createRoot(MainContent);
        // mainContent.render(
        //     <React.StrictMode>
        //         <SingleProduct />
        //     </React.StrictMode>
        // );
    }

    render() {
        return (
            <div className="MainContent">
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                
            </div> 
        );
    }
}

export default MainContent;