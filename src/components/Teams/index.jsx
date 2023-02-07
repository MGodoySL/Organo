import { Cards } from "./Cards";
import "./style.css";
import hexToRgba from 'hex-to-rgba';

export const Teams = (props) => {
    const { name, color, id } = props.team;
    const persons = props.persons;
    const changeTeamColor = props.changeTeamColor;
    
    return (
        persons.length > 0 && (
            <section className="teams" style={{ backgroundColor: hexToRgba(color, '0.6') }}>
                <input value={color} onChange={(e) => changeTeamColor(e.target.value, id)} type="color" className="inputColor" />
                <h3 style={{ borderBottom: `2px solid ${color}` }}>{name}</h3>
                <div className="cardsCointaier">
                    {persons.map((personCard, i) => {
                        return <Cards color={color} id={id} person={personCard} key={i} />;
                    })}
                </div>
            </section>
        )
    );
};
