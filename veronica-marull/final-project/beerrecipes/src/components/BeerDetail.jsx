import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { beerDetailById } from '../redux/actions/beerActions';
import PropTypes from 'prop-types';
import './beerDetail.css';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const imageError = 'https://thumbs.dreamstime.com/t/vidrio-de-cerveza-agrietado-49628741.jpg';

function BeerDetail ({ beerDetail, dispatch }) {
  const { beerId } = useParams();

  useEffect(() => {
    dispatch(beerDetailById(beerId));
  }, []);
  return (
    <>
      {beerDetail && (
        <>

        <Link to={'/beers/'}><span className="material-icons back-list">arrow_back_ios</span></Link>

        <div className="detail">
          <a name="top"></a>
          <div className="image-and-description">

            <div className="description">
              <h2>{beerDetail.name}</h2>

              <div>
                <span>
                  <b>First Brewed:</b>
                </span>{' '}
                <span>{beerDetail.first_brewed}</span>
                  <p id="beer-description">{beerDetail.description}</p>
              </div>

            </div>
            <div className="beer-image">
              <img src={beerDetail.image_url} id="beer-image" alt="beer-image"/>
            </div>
          </div>

          <div className="charac-vol-method">
            <div className="characteristic">
              <div className="block1">
                <div>
                  <b>abv:</b> <span> </span>
                  {beerDetail.abv}{' '}
                </div>
                <div>
                  <b>ibu:</b> <span> </span> {beerDetail.ibu}{' '}
                </div>
                <div>
                  <b>
                    Target fg: <span> </span>
                  </b>
                  {beerDetail.target_fg}{' '}
                </div>
                <div>
                  <b>
                    Target og: <span> </span>
                  </b>
                  {beerDetail.target_og}{' '}
                </div>
                <span></span>

              </div>
              <div className="block2">
                <div><b>ebc: </b> <span> </span>
                {beerDetail.ebc}{' '}
                </div>
                <div>
                  <b>srm:</b> <span> </span>
                  {beerDetail.srm}{' '}
                </div>
                <div>
                  <b>ph:</b> <span> </span>
                  {beerDetail.ph}{' '}
                </div>
                <div>
                  <b>Attenuation level:</b>
                  <span> </span>
                  {beerDetail.attenuation_level}{' '}
               </div>
             </div>
            </div>
            <div className="volume">
              <div>
                <b>Volume:</b>
              </div>
              <div>
                <span>{beerDetail.volume.value}</span>
                <span> </span>
                <span>{beerDetail.volume.unit}</span>
              </div>
              <div>
                <b>Boil Volume:</b>
              </div>
              <div>
                <span>{beerDetail.boil_volume.value}</span>
                <span> </span>
              <span>{beerDetail.boil_volume.unit}</span>
              </div>
            </div>
            <div className="method">
              <h4>Method:</h4>
              <span>
                <b>Mash Temp</b>
              </span>{' '}
              <span></span>
              <span>{beerDetail.method.mash_temp[0].temp.value}</span>
              <span> {beerDetail.method.mash_temp[0].temp.unit} </span>
              <span></span>
              <br />
              <span>
                <b>Fermentation</b>
              </span>{' '}
              <span></span>
              <span>{beerDetail.method.fermentation.temp.value}</span>{' '}
              <span>{beerDetail.method.fermentation.temp.unit}</span>
            </div>
          </div>
          <div className="ingre-food-tips">
            <div className="ingredients">

              <div className="malt">
                <h4>Maltas:</h4>
                {beerDetail.ingredients.malt.map((malt) => (
                  <>
                    <div className="malts">
                      <div>
                      <Link to={`/beers/malt/${malt.name}`}><p className="malt-name">{malt.name}</p></Link>
                      </div>{' '}
                      <span></span>
                      <div className="malt-amount">
                      <span>{malt.amount.value}</span> <span></span>
                      <span>{malt.amount.unit}</span>
                      <span></span>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <div className="hop">
                <h4>Hops:</h4>
                {beerDetail.ingredients.hops.map((hops) => (
                  <>
                    <div className="hops">
                      <div>
                      <Link to={`/beers/hops/${hops.name}`}><p className="hop-name">
                          {hops.name}
                        </p></Link>{' '}
                        <span></span>
                      </div>
                      <div className="hop-amount">
                        <span>{hops.amount.value}</span> <span></span>
                        <span>{hops.amount.unit}</span>
                        <span></span>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <div className="yeast">
                <h4>Yeast:</h4>
                <div className="yeasts">
                  <p className="yeast-name">{beerDetail.ingredients.yeast}</p>
                </div>
              </div>
            </div>
            <div className="food-tips">
            <div>
              <h4>Food Pairing:</h4>
              {beerDetail.food_pairing.map((food) => (
                <>
                  <div className="food">
                    <div>{food}</div> <br />
                  </div>
                </>
              ))}
            </div>
            <div className="tips">
              <h4>Tips:</h4>
              <p>{beerDetail.brewers_tips}</p>
            </div>
          </div>
          </div>

        </div>
        <a href="#top"><span className="material-icons back-top">expand_less</span></a>
      </>
      )}

      {!beerDetail && <img src={imageError} alt="image-error"/>}
    </>
  );
}

BeerDetail.propTypes = {
  beerDetail: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps ({ beerReducer }) {
  return {
    beerDetail: beerReducer.beerDetail
  };
}

export default connect(mapStateToProps)(BeerDetail);
