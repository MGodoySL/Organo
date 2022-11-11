import { Cards } from "./Cards";
import "./style.css";

export const Teams = (props) => {
    const { name, primaryColor, secondaryColor } = props.team;
    const persons = props.persons;
    return (
        persons.length > 0 && <section className="teams" style={{ backgroundColor: secondaryColor }}>
            <h3 style={{ borderBottom: `2px solid ${primaryColor}` }}>{name}</h3>
            <div className="cardsCointaier">
            {persons.map((personCard, i) => {
                return (
                    <Cards primaryColor={primaryColor} secondaryColor={secondaryColor} person={personCard} key={i} />
                )
            })}
            </div>
        </section>
    );
};
