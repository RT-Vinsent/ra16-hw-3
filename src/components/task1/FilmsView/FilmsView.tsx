// import PropTypes from 'prop-types'
import films from '../films';
import FilmCard from '../FilmCard/FilmCard';

function FilmsView() {
  return (
    <div className="container">
      <h2>Films</h2>
      {films.map(film => <FilmCard key={film.id} film={film} />)}
    </div>
  )
}

// FilmsRating.propTypes = {}

export default FilmsView;