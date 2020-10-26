import React from 'react';
import '../Styles/list.css'

function ListItem({heroID, heroName}) {
    return (
        <div className="list-item">
            <div  className="box-position">{heroID}</div>
                <a className="name-position"
                    href="../details/details.html?heroId=${heroID}">{heroName}
                </a>
        </div>
    )
}

export default ListItem;

            