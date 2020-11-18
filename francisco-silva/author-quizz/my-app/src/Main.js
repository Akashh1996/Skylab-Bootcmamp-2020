import React from 'react';
import './Header.css';
function MainSection(){
    const books=["The Shinning","The adventures of Huckleberry Finn","IT","Macbeth"];
    return(
        <div className="authors" id="authors">
            <img alt="author" src="https://www.biografiasyvidas.com/biografia/t/fotos/twain_mark.jpg"></img>
            <ul className="list-authors">
                {books.map((titles)=>{
                   return <li className="titles" onClick={function changeColor(){
                    let mainDiv=document.getElementById('authors');
                       if(titles==="The adventures of Huckleberry Finn"){
                        mainDiv.style.backgroundColor="#42a527";
                    
                       }else{
                        mainDiv.style.backgroundColor="#a52727";
                       }
                   }}>{titles}</li>
                })}
            </ul>
        </div>
    )
}
export default MainSection;