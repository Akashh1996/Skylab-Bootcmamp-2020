import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { beersByMalt } from '../redux/actions/beerActions';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function MaltList ({ listByMalt, dispatch }) {
  const { maltName } = useParams();

  useEffect(() => {
    dispatch(beersByMalt(maltName));
  }, []);

  return (
      <>
        <a name="top-list"></a>
        <ul className="list-beers-malt">
        {listByMalt && listByMalt.map((beer) => {
          return (
            <li key = { beer.id }>
              <Link to={`/beers/${beer.id}`}>{beer.name}</Link>
            </li>
          );
        })}
        </ul>
      </>
  );
}

MaltList.propTypes = {
  listByMalt: PropTypes.array,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps ({ beerReducer }) {
  return {
    listByMalt: beerReducer.listByMalt
  };
}

export default connect(mapStateToProps)(MaltList);
