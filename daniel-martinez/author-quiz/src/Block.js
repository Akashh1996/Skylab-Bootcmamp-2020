import React from 'react';
import './Block.css';
import List from './List'


function Block(){
    return <div id="block">
        <img src="https://www.laphamsquarterly.org/sites/default/files/styles/tall_rectangle_custom_user_small_2x/public/images/contributor/twain_360x450new2.jpg?itok=o4Trb5Um&timestamp=1408145131" alt="mark-twain-img" id="block__author-image"/>
        <List key="list"/>
    </div>
}

export default Block;