import React from 'react'
import RegularInput from './RegularInput'
import SelectionInput from './SelectionInput'
import SelectionInputClass from './SelectionInputClass'

function FirstInputSection () {

    return (
        <section className='first-input__section'>
            <SelectionInput/>
            <RegularInput/>
            <SelectionInputClass/>
        </section>
    )
}

export default FirstInputSection;