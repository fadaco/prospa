import React from 'react';

interface formType {
    placeholder: string
    type: string
    label: string
    labelStyle?: any
    inputClass?: any
    value?: any
}

const TextInput = ({type, placeholder, label, labelStyle, inputClass, value}: formType) => {
    const [labelStatus, setLabelStatus] = React.useState<boolean>(false);
    return (
        <label style={{width: inputClass ? inputClass : ''}} className={`relative ${labelStyle}`}>
           {(labelStatus || value) && <p className='absolute labelText mb-5'>{label}</p>}
        <input value={value} type={type} onChange={() => {}} style={{width: inputClass ? '100%' : ''}} placeholder={!labelStatus ? placeholder : ''} className={` ${labelStatus ? ' formLabel-2' : ' formLabel'}  px-5 `}  onBlur={() => setLabelStatus(false)} onFocus={() => setLabelStatus(true)}/>
        </label>
    )
}

export default TextInput