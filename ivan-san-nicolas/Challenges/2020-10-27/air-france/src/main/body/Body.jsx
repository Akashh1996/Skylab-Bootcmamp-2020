import React from 'react';
import './body.css';
import SelectDiv from './select-div/SelectDiv';
import InputDiv from './input-div/InputDiv';
import CalendarDiv from './calendar-div/CalendarDiv';
import SearchButtonDiv from './search-button-div/SearchButtonDiv';

function Body() {

    return (
        <div class="body">
            <SelectDiv />
            <InputDiv />
            <CalendarDiv />
            <SearchButtonDiv />
        </div>
    )
}

export default Body;