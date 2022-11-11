import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { useState } from "react";
import { Teams } from "./components/Teams";
import { Footer } from "./components/Footer";

function App() {
    const teams = [
        {
            name: "eSports Gamers",
            primaryColor: "#57C278",
            secondaryColor: "#D9F7E9",
        },
        {
            name: "Soccer Squad",
            primaryColor: "#82CFFA",
            secondaryColor: "#E8F8FF",
        },
        {
            name: "Band Members",
            primaryColor: "#E06B69",
            secondaryColor: "#FDE7E8",
        },
        {
            name: "Old Times Friends",
            primaryColor: "#DB6EBF",
            secondaryColor: "#FAE9F5",
        },
        {
            name: "Godoy's & Leite's Family",
            primaryColor: "#FFBA05",
            secondaryColor: "#FFEEDF",
        },
    ];

    const [persons, setPersons] = useState([]);

    const onSubmit = (person) => {
        setPersons([...persons, person]);
    };
    return (
        <div className="App">
            <Banner />
            <Form teams={teams} onSave={(person) => onSubmit(person)} />
            {teams.map((team, i) => (
                <Teams team={team} persons={persons.filter((person) => person.memberTeam === team.name)} key={i} />
            ))}
            <Footer />
        </div>
    );
}

export default App;
