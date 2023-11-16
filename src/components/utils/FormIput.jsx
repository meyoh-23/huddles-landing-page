import React, { useState } from 'react'

function FormIput(props) {
    const [focused, setFocused] = useState(false);

    const handleFocused = () => {
        setFocused((prev) => !prev)
    }

    const {id, onChange,errorMessage, ...inputPrps} = props;
  return (
    <div className='form-imput'>
        <input 
        {...inputPrps}
        onChange={onChange}
        onBlur={handleFocused}
        focused = {focused.toString()}
        />
        <h3>{errorMessage}</h3>
    </div>
  )
}

export default FormIput;