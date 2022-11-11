import './style.css'
import { Input } from '../Input';
import { useState } from "react";


export const Form = (props) => {

    const [memberName, setmemberName] = useState("");
    const [memberPosition, setmemberPosition] = useState("");
    const [memberImage, setmemberImage] = useState("");
    const [memberTeam, setmemberTeam] = useState("");
    const salvar = (e) => {
        e.preventDefault();
        props.onSave({
            memberName,
            memberPosition,
            memberImage,
            memberTeam,
        });
        setmemberName("");
        setmemberPosition("");
        setmemberImage("");
        setmemberTeam("");
    };
    return (
        <section className='section'>
            <form action="submit" className="CardForm" onSubmit={salvar}>
                <h2 className="title">Preencha os dados para criar o card do colaborador</h2>
                <Input type="text" label="Nome" value={memberName} alterarCampo={(e) => setmemberName(e.target.value)} memberName="memberNameUsuario" inpuType="text" placeholder="Digite seu nome" required={true}></Input>
                <Input type="text" label="Cargo" value={memberPosition} alterarCampo={(e) => setmemberPosition(e.target.value)} memberName="memberPositionUsuario" inpuType="text" placeholder="Digite seu cargo" required={true}></Input>
                <Input type="text" label="Url da Imagem" value={memberImage} alterarCampo={(e) => setmemberImage(e.target.value)} memberName="memberImageUsuario" inpuType="text" placeholder="Informe o endereço de image" required={false}></Input>
                <Input type="select" label="Time" value={memberTeam} alterarCampo={(e) => setmemberTeam(e.target.value)} memberName="memberTeamUsuario" options={props.teams} required={true}></Input>
                <button className='button'>Criar Card</button>
            </form>
        </section>
    )
}