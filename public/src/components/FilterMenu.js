import '../styles/FilterMenu.css';
import React from 'react'

class FilterMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="FilterMenu"> 
                <p>Filter menu</p>
                <hr />
                <p>filter 1</p>
                <p>filter 2</p>
                <p>filter 3</p>
                <p>filter 4</p>
                <p>filter 5</p>
            </div> 
        );
    }
}

export default FilterMenu;