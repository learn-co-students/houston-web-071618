import React from 'react';

function Filters(props){
    return (
        <div>
            <div>
                <label>Sort By: </label>
                <select onChange={ e => {
                    props.onSortChange(e.target.value)
                }}>
                    <option>Name</option>
                    <option>Weight</option>
                </select>
            </div>
            <div>
                <label>Filter By: </label>
                <select onChange={ e => {
                    props.onFilterChange(e.target.value)
                }}>
                    <option>None</option>
                    <option>Greased</option>
                </select>
            </div>
        </div>
    )
}

export default Filters