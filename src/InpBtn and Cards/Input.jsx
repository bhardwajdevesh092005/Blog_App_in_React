import React from 'react'
import { forwardRef, useId } from 'react'
const Input = forwardRef(({
    label,
    type = "text",
    className = "",
    ...props
},ref)=>{
    const id = useId();
    return(
    <div>
        {label&&<label htmlFor={id}>{label}</label>}
        <input type={type} name="" className={`text-lg ml-2 ${className}`} id={id} ref={ref} {...props}/>
    </div>  
    )
});
export default Input;