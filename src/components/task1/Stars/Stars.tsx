// import PropTypes from 'prop-types'
import Star from '../Star/Star'
import './Stars.css'

interface FilmCardCountProps {
  count: number;
}

function Stars(props: FilmCardCountProps) {
  const { count } = props;

  if (!Number.isInteger(count) || count < 1 || count > 5) return null;

  return (
    <ul className="card-body-stars">
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} />
      ))}
    </ul>
  )
}

// Stars.propTypes = {
//   count: PropTypes.number.isRequired,
// }

export default Stars