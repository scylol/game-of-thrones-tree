import React from 'react';
import FamilyTree from './family-tree';
import Houses from '../houses'
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
    //
    render() {

        const houses = Object.keys(Houses).map((house, index) => (
            <li key={index} className='house-name' value={house} id={house} onClick={() => this.getHouseMembers(house)}>
                    {house}
            </li>
             
        ))

        const contenders = this.state.houseArray.map((person, index) => {
            let nameArray = person.name.split(' ');
            let firstName = nameArray[0];
            return <li key={index} className='contender-name' id={firstName}>
                {this.state.houseArray[index].name}
            </li>    
        })
        
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
            <div className="house">
                <h2>Houses of Game of Thrones</h2>
                <div className="close">
                  <button onClick={this.hideContenders}>Hide Contenders</button>
                </div>
                {contenders}
              </div>
              
        )
        
    }
}