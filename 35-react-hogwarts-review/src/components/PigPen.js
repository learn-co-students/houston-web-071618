import React, { Component } from 'react';
import Pig from './Pig'
import Filters from './Filters'
import Sorters from '../Sorters'

class PigPen extends Component {

    state = {
        sortBy: 'Name',
        filterBy: 'None'
    }

    onSortChange = (sortBy) => {
        this.setState({ sortBy })
    }

    onFilterChange = (filterBy) => {
        this.setState({ filterBy })
    }

    pigs = () => {
        let resultingPigs = [ ...this.props.hogs ]
        if(this.state.filterBy == 'Greased'){
            resultingPigs = resultingPigs.filter( pig => pig.greased ? true : false)
        }
        if(this.state.sortBy == 'Name'){
            resultingPigs = resultingPigs.sort(Sorters.byName)
        } 
        if(this.state.sortBy == 'Weight'){
            resultingPigs = resultingPigs.sort(Sorters.byWeight)
        }
        return resultingPigs
    }

    render(){
        let resultingPigs = this.pigs()
        return (
            <div>
                <Filters onSortChange={this.onSortChange} onFilterChange={this.onFilterChange} />
                {resultingPigs.length ? this.renderPigs(resultingPigs) : <h1>No Pigs to Show</h1>}
            </div>
        )
    }

    renderPigs(resultingPigs){
        
        return resultingPigs.map( hog => ( 
            <Pig key={hog.name} {...hog} />
        ))
    }

}

export default PigPen