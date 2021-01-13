import React, { useState } from 'react';
import { connect } from 'react-redux';
import { requestBeers, filterBeers } from '../redux/actions/beerActions';
import PropTypes from 'prop-types';
import './beerList.css';
import { Link } from 'react-router-dom';

const imageError = 'https://thumbs.dreamstime.com/t/vidrio-de-cerveza-agrietado-49628741.jpg';
function BeerList ({ displayBeers, dispatch }) {
  const [searchTerm, setSearchTerm] = useState();

  if (!displayBeers) {
    dispatch(requestBeers());
  }

  return (
        <>
        {displayBeers && <>
        <div className="search">
                    <input type="text" placeholder="Search.." value={searchTerm} className="input-search" onChange={(event) => setSearchTerm(event.target.value)}/>
                      <button type="submit" className="search-btn" onClick={() => { dispatch(filterBeers(searchTerm)); }} ><i className="fa fa-search"></i></button>
                    </div>
                    </>
        }
        <ul className="list-beers">

          {displayBeers && displayBeers.map((beer) => {
            return (
                  <li key={ beer.id}>
                  <Link to={`/beers/${beer.id}`}>{beer.name}</Link>
              </li>
            );
          })}
          {!displayBeers && <img src={imageError} alt="image-error"/>}

        </ul>
        <a href="#top"><span className="material-icons back-top-list">expand_less</span></a>
      </>
  );
}

BeerList.propTypes = {
  displayBeers: PropTypes.array,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps ({ beerReducer }) {
  return {
    displayBeers: beerReducer.displayBeers
  };
}

export default connect(mapStateToProps)(BeerList);
