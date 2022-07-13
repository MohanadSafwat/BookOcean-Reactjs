import "./book.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import host from "../../host";
const Book = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    axios
      .get(host + `/books/${searchParams.get("id")}`)
      .then((res) => {
        setBook(res.data);
      });
  }, []);
  return (
    <div className="book-wrapper">
      <div className="book-info">
        <div className="book-image">
          <img
            src={book.photoUrl}
            alt="book"
          ></img>
        </div>
        <div className="book-data">
          <p>
            Book Name: <b>{book.name}</b>
          </p>
          <p>
            ISBN: <b>{book.isbn}</b>
          </p>
          <p>
            Year: <b>{book.year}</b>
          </p>
          <p>
            Category: <b>{book.category}</b>{" "}
          </p>

          <p>
            Author Name: {" "}
            {book.author && (
              <Link to={`/author?id=${book.author.id}`}>
                <b>{book.author.name}</b>
              </Link>
            )}
          </p>

          <p>
            Publisher Name:  {" "}
            {book.publisher && (
              <Link to={`/publisher?id=${book.publisher.id}`}>
                <b>{book.publisher.name}</b>
              </Link>
            )}
          </p>
        </div>
      </div>
      <hr />
      <div className="summary">
        <h1>Summary</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit
          doloribus tenetur fugiat, temporibus enim commodi iusto libero magni
          deleniti quod quam consequuntur! Commodi minima excepturi repudiandae
          velit hic maxime doloremque. Quaerat provident commodi consectetur
          veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates
          pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
          excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
          Voluptatem quaerat non architecto ab laudantium modi minima sunt esse
          temporibus sint culpa, recusandae aliquam numquam totam ratione
          voluptas quod exercitationem fuga. Possimus quis earum veniam quasi
          aliquam eligendi, placeat qui corporis!
        </p>
      </div>
    </div>
  );
};

export default Book;
