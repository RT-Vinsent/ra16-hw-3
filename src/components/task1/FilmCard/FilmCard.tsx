/* eslint-disable jsx-a11y/anchor-is-valid */
// import PropTypes from 'prop-types';
import Stars from '../Stars/Stars';
import './FilmCard.css';

interface FilmCardProps {
  film: {
    id: string;
    title: string;
    img: string;
    price: number;
    currency: string;
    count: number;
  };
}

function FilmCard(props: FilmCardProps) {
  const { film } = props;
  return (
    <div className="film" id={film.id}>
      <div className="film-image-container">
        <img className="film-image" src={film.img} alt={film.title} />
      </div>
      
      <div className="film-content">
        <h3>{film.title}</h3>
        <div className="link-wrapper">
          <a href="#"><span className="material-icons">favorite</span></a>
          <a href="#"><span className="material-icons">share</span></a>
        </div>
        <Stars count={film.count} />
        <div className="btn-wrapper">
          <button className="btn film-price">Купить {film.price}{film.currency}</button>
          <button className="btn film-details">Подробнее →</button>
        </div>
      </div>
    </div>
  )
}

// FilmCard.propTypes = {
//   film: PropTypes.shape({
//     id: PropTypes.string,
//     title: PropTypes.string,
//     img: PropTypes.string,
//     price: PropTypes.number,
//     count: PropTypes.number,
//   }).isRequired,
// }

export default FilmCard;
