import './index.css';


function List() {

    let heroes = [
        { id: 11, name: 'Dr Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
        
];
   
    return (
        
    <div className="main">
      <div className="title__buttons">
        <h1 className="dashboard_title">Tour of Heroes</h1>
        <button className="dashboard_btn">Dashboard</button>
        <button className="heroes_btn">Heroes</button>
      </div>
      <div className= "list_heroes">
          <h2 className="my_heroes_title">My Heroes</h2>
          <div className="top_heroes_btn_wrapper"></div>
  
          {heroes.map((heroe, list) => {
              heroe = heroes;
          return <button className="my_heroes_btn">{heroes[list].id} - {heroes[list].name}</button>
          })}
          
      </div>
    </div>
    );  

  }

export default List;
