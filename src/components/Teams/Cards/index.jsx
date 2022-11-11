import './style.css'

export const Cards = (props) => {
    return (
        <div className="card">
            <div className="cardHeader" style={{ backgroundColor: props.primaryColor }}>
                <img src={props.person.memberImage} alt={props.person.memberName} className="img" />
            </div>
            <div className="cardBody">
                <p>{props.person.memberName}</p>
                <p>{props.person.memberPosition}</p>
            </div>
        </div>
    );
};
