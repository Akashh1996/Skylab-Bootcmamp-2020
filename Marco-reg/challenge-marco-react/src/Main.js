import React from 'react';

function MainSection(){
    const books=["the Shinning","The adventures of Huckleberry Finn","IT","Macbeth"];
    

    return(
        <div class="authors">
            <img alt="author"></img>
            <ul>
                {books.map((titles)=>{
                   return <li>{titles}</li>

                })}
            </ul>

        </div>
        
    )

}
export default MainSection;