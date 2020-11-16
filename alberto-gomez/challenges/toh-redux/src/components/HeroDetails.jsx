import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import heroStore from '../stores/hero-store';
import { loadHeroById } from '../actions/hero-actions';

function HeroDetails({ match }) {
  const [heroId] = useState(+match.params.heroId);
  const [hero, setHero] = useState(null);

  function handleChange() {
    setHero(heroStore.getHero());
  }

  useEffect(() => {
    heroStore.addEventListener(handleChange);

    if (heroId && !hero) {
      loadHeroById(heroId);
    }

    return () => heroStore.removeEventListener(handleChange);
  }, [heroId, hero]);

  return (
    <>
      {!hero && (
      <h1>
        {`There is no hero with id: ${heroId}`}
      </h1>
      )}
      {hero && <h1>{`Hero details works... (${hero.name})`}</h1>}
    </>
  );
}

HeroDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      heroId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default HeroDetails;
