import React from 'react'
import { forwardRef,useId } from 'react'
function Select({
    options,
    className = "",
    label,
    ...props
},ref = null) {
    const id = useId();
    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <select name="" id={id} className={`${className} ml-5`} ref={ref} {...props}>
                {options?.map((elem)=>(
                    <option key= {elem} value={elem}>{elem}</option>
                ))}
            </select>
        </div>
    )
}

export default forwardRef(Select);