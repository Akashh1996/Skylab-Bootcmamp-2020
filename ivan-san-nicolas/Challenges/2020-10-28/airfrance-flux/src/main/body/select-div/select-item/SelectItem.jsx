import React from 'react';
import OptionItem from './option-item/OptionItem';
import './selectItem.css';

function SelectItem({optionList, selectTitle}) {

    return (
        <div class="select">
                <label for="direction" class="label">{selectTitle}</label>
                <select name="direction" class="select">
                    {
                        optionList.map((option) => 
                            <OptionItem optionList={option} />
                        )
                }
                </select>
            </div>
    )
}

export default SelectItem;