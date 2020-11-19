import React from 'react';

function SearchInput() {
  return (
    <div className="container m-5">
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search Here" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" id="button-addon2">Buscar</button>
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
