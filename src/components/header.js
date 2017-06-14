import React from 'react';
import Contenders from './contenders';
import Houses from '../houses';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        
        this.getHouseMembers = this.getHouseMembers.bind(this);
        this.hideContenders = this.hideContenders.bind(this);

        this.state = {
            showTree: false, 
            houseArray: []
            
        };
    }
    
     getHouseMembers(house) {
        let houseArray = Houses[house];
        this.setState({houseArray: houseArray})
        this.setState({showTree:true})
    }

    hideContenders() {
        this.setState({showTree:false});
    }
    
     render() {

        const houses = Object.keys(Houses).map((house, index) => (
            <li key={index} className='house-name' value={house} id={house} onClick={() => this.getHouseMembers(house)}>
                    {house}
            </li>
             
        ))
        
        if(!this.state.showTree) {
            return (
              <div className="house">
                <h2>Houses of Game of Thrones</h2>
                <div className="houses">
                  {houses}
                </div>
              </div>
            );
        }
        return (
            <Contenders houseArray={this.state.houseArray} hideContenders={this.hideContenders}/>
        )
        
    }
}