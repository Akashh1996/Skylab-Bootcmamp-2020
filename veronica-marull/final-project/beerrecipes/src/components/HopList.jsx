import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { beersByHop } from '../redux/actions/beerActions';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function HopList ({ listByHop, dispatch }) {
  const { hopName } = useParams();

  useEffect(() => {
    dispatch(beersByHop(hopName));
  }, []);

  return (
      <>
        <a name="top-list"></a>
        <ul className="list-beers-hop">
        {listByHop && listByHop.map((beer) => {
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

HopList.propTypes = {
  listByHop: PropTypes.array,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps ({ beerReducer }) {
  return {
    listByHop: beerReducer.listByHop
  };
}

export default connect(mapStateToProps)(HopList);
