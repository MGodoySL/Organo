import { AiFillCloseCircle } from "react-icons/ai";
import "./style.css";

export const Cards = (props) => {
    const person = props.person
    const nestoupa = (id) => {
        console.log(id, person.memberId)
        console.log('coco', person)
        if (person.memberId === id) {
            console.log(id)
            // person.shift(i)
        }
    }

    return (
        <div className="card">
            <AiFillCloseCircle className="deleteIcon" size={32} onClick={() => nestoupa(props.id)}></AiFillCloseCircle>

            <div className="cardHeader" style={{ backgroundColor: props.color }}>
                <img src={person.memberImage} alt={person.memberName} className="img" />
            </div>

            <div className="cardBody">
                <p>{person.memberName}</p>
                <p>{person.memberPosition}</p>
            </div>
        </div>
    );
};
