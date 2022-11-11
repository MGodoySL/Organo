import "./style.css";

export const Input = (props) => {
    return props.type === "text" ? (
        <>
            {" "}
            <label htmlFor={props.memberName} className="label">
                {props.label}
            </label>
            <input value={props.value} type={props.inpuType} onChange={props.alterarCampo} name={props.memberName} required={props.required} className="input" placeholder={props.placeholder} />
        </>
    ) : (
        <>
            {" "}
            <label htmlFor={props.memberName} className="label">
                {props.label}
            </label>
            <select name={props.memberName} className="input" value={props.value} onChange={props.alterarCampo}>
                <option value={""} required={props.required} key={-1}>
                    Selecione
                </option>
                {props.options.map((item, i) => {
                    return (
                        <option value={item.name} required={props.required} key={i}>
                            {item.name}
                        </option>
                    );
                })}
            </select>{" "}
        </>
    );
};
