import "./author.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Card from "../card/card";
import host from "../../host";

const Author = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [author, setAuthor] = useState({});

  useEffect(() => {
    axios
      .get(host +`/author/${searchParams.get("id")}`)
      .then((res) => {
        setAuthor(res.data);
      });
  }, []);
  return (
    <div className="author-wrapper">
      <div className="author-info">
        <div className="author-image">
          <img
            src={author.photoUrl}
            alt="author"
          ></img>
        </div>
        <div className="author-data">
          <p>
            Auhtor Name: <b>{author.name}</b>
          </p>
          <p>
            Auhtor Surname: <b>{author.surname}</b>
          </p>
          <p>
            Date of Birth: <b>{author.birthdate}</b>
          </p>
         

        


        </div>
      </div>
      <hr />
      <div className="author-books">
        <h1>Books of {author.name}</h1>
       {author.books && author.books.map((b)=>{
        return <Card key={b.id} data={b} />
       })}
      </div>
    </div>
  );
};

export default Author;
