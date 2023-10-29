import "./Select.css"

type SelectProps= {
    label: string,
    defaultValue: string,
    options: string[],
    onChange: ()=>{}

}
const Select = (props:SelectProps)=>{

    return(
       <div className="campoSelect">
        <label>{props.label}</label>
        <select onChange={props.onChange}>
            <option disabled value={props.defaultValue} selected>{props.defaultValue}</option>
            {props.options.map((name)=>{
                return(
                    <option value={name}>{name}</option>
                )
            })}
        </select>
       </div>
    )
}
export default Select