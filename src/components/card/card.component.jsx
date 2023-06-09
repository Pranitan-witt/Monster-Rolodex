import './card.style.css';

const Card = ({monster}) => {
// const Card = ({monster: {id, name, email} }) => { // remove top and bottom line of this line to use this syntax
    const {id, name, email} = monster;
    return (
        <div className="card-container" key={id}>
        <img 
            alt={`monster ${name}`} 
            src={`https://robohash.org/${id}?set=set2&size=180x180`} 
        />
        <h2>{name}</h2>
        <p>{email}</p>
        </div> 
    );

}

export default Card;