import React from 'react'
import { forwardRef,useId } from 'react'
function Select({
    options = [],
    className = "",
    label,
    ...props
}) {
    const id = useId();
    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <select name="" id={id} className={className} {...props} ref={ref}>
                {options?.map((elem)=>(
                    <option key= {elem} value={elem}>{elem}</option>
                ))}
            </select>
        </div>
    )
}

export default forwardRef(Select);