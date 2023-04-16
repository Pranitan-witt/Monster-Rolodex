import { Component } from "react";

class CardList extends Component {
    render(){
        // console.log('From props:', this.props)
        const { monsters } = this.props;
        return (
            <div className="card-list"> 
                {monsters.map((monster) => (
                    <h1 key={monster.id}>{monster.name}</h1>
                ))}
            </div>
        )
        
    }
}

export default CardList;