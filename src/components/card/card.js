import "./card.css";
import {Link} from 'react-router-dom'
const Card = (props) => {
  const data = props.data;
  return (
    <div className="card">
      <Link to={`/book?id=${data.id}`}><img className="card-image" src={data.photoUrl} alt='book'></img></Link>
      <div className="info">
        <Link to={`/book?id=${data.id}`}><p className="book-name">{data.name}</p></Link>
        <Link to={`/author?id=${data.author.id}`}> <p className="author">{data.author.name}</p></Link>
        <Link to={`/publisher?id=${data.publisher.id}`}> <p className="publisher">{data.publisher.name}</p></Link>
      </div>
    </div>
  );
};
export default Card;
