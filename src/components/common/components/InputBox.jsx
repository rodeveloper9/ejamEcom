import React from 'react';

const InputBox = (props) => {
    const { type = '', wraprClass = '', placeholder = '', value = '', id = '', handleInputChange } = props;
    return (
        <div className={`inputWrap ${wraprClass}`}>
            <input
                type={type}
                placeholder={placeholder}
                className='inputWrap_input'
                value={value[id]}
                onChange={(e) => handleInputChange(e, id)}
            />
        </div>
    )
}

export default InputBox
