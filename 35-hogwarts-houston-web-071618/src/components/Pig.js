

import React, { Component } from 'react';

class Pig extends Component {

    state = {
        showDetails: false
    }

    toggleDetails = () => {
        this.setState( { showDetails: !this.state.showDetails })
    }

    render(){
        let cleanName = this.props.name
            .toLowerCase()
            .split(' ').join('_')
        let imageSrc = require('../hog-imgs/'+cleanName + '.jpg')
        
        return (
            <div className="pigTile" onClick={this.toggleDetails}>
                <h1>{this.props.name}</h1>
                <img src={imageSrc}></img>
                { this.state.showDetails ?
                    <div>
                        <p>Specialty: {this.props.specialty}</p>
                        <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
                        <p>highest medal achieved: {this.props['highest medal achieved']}</p>
                        <p>Greased: {this.props.greased ? 'true' : 'false'}</p>
                    </div>
                : null}
            </div>
        )
    }
}

export default Pig