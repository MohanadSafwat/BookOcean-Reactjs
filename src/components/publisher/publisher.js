import "./publisher.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Card from "../card/card";
import host from "../../host";

const Publisher = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [publisher, setPublisher] = useState({});

  useEffect(() => {
    axios
      .get(host + `/publisher/${searchParams.get("id")}`)
      .then((res) => {
        setPublisher(res.data);
      });
  }, []);
  return (
    <div className="publisher-wrapper">
     
      <div className="publisher-books">
        <h1>Books of {publisher.name}</h1>
       {publisher.books && publisher.books.map((b)=>{
        return <Card key={b.id} data={b} />
       })}
      </div>
    </div>
  );
};

export default Publisher;
