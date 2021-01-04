import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { getHeroesSuccess } from "../redux/heroDucks";

const Heroes = () => {
  const dispatch = useDispatch();

  const heroes = useSelector((store) => store.heroes.array);

  return (
    <div className="container m-5">
      <div className="text-white bg-dark p-5">LISTA DE HEROES</div>
      <div className="btn-group m-2">
        <button className="btn btn-primary" onClick={() => dispatch(getHeroesSuccess())}>
          Get Heroes
        </button>
      </div>
      <dl list-style="none">
        {heroes.map((item) => (
          <dd key={item.name}>
            {item.id}-{item.name}
          </dd>
        ))}
      </dl>
    </div>
  );
};

export default Heroes;
