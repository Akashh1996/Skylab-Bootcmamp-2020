/* eslint-disable react/button-has-type */
import React from 'react';
import data from '../data';

const MoviesList = () => (

  data.movies.map((movie) => (
    <ul key={movie.id} className="list">
      <li className="item-list">
        <div className="item-position">{movie.id}</div>
        <div className="item-title">{movie.title}</div>
        <button className="btn btn-primary">Modificar</button>
        <button className="btn btn-danger">Eliminar</button>
      </li>

    </ul>
  ))
);

export default MoviesList;
