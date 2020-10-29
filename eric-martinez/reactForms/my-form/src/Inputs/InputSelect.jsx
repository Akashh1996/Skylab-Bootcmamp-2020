import React from 'react';
import Options from './Options/Options';

function InputSelect({label, selectOptions}) {

    return (
        <>
            <div>
                <label>{label}</label>
                <select>
                    {selectOptions.map((option) => (
                        <Options option={option}/>
                    ))}
                </select>
            </div>
        </>
    )
}

export default InputSelect;