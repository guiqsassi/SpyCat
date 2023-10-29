import "./Select.css"

type SelectProps= {
    label: string,
    defaultValue: string,
    options: string[]

}
const Select = (props:SelectProps)=>{

    return(
       <div className="campoSelect">
        <label>{props.label}</label>
        <select>
            <option value={props.defaultValue}>{props.defaultValue}</option>
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