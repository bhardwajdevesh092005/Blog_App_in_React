import React from 'react'
import { forwardRef, useId } from 'react'
const id = useId();
const Input = forwardRef(({
    label,
    type = "text",
    className = "",
    ...props
},ref)=>{
    return(
    <div>
        {label&&<label htmlFor={id}>{label}</label>}
        <input type={type} name="" className={`text-lg ${className}`} id={id} ref={ref} {...props}/>
    </div>  
    )
});
export default Input;