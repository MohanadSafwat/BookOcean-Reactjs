import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import host from "../../host";

const AddBook = () => {
  const navigate = useNavigate();
  const [authors, setAuthors] = useState([]);
  const [publishers, setPublisher] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const uploadImageHandler = (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);

    fetch(host + "/author/uploadPhoto", {
      method: "POST",
      body: formData,
    }).then((res) => {
      res.json().then((data) => {
        setImageUrl(host + data.path);
      });
    });
  };

  useEffect(() => {
    axios.get(host + "/author").then((res) => {
      setAuthors(res.data);
    });
    axios.get(host + "/publisher").then((res) => {
      setPublisher(res.data);
    });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(host + "/books/create", {
        name: e.target.formName.value,
        isbn: e.target.formIsbn.value,
        year: e.target.formYear.value,
        category: e.target.formCategory.value,
        photoUrl: e.target.formPhoto.value,
        authorId: e.target.formAuthor.value,
        publisherId: e.target.formPublisher.value,
      })
      .then(() => {
        navigate("/");
      });
  };
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formIsbn">
        <Form.Label>ISBN</Form.Label>
        <Form.Control type="text" placeholder="ISBN" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formYear">
        <Form.Label>Year</Form.Label>
        <Form.Control type="text" placeholder="Year" />
        <Form.Text className="text-muted">
          It should be in yyyy format
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Category" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formPhoto">
        <Form.Label>Photo Url </Form.Label>
        <Form.Control
          type="file"
          placeholder="Photo"
          onChange={(event) => {
            setSelectedImage(event.target.files[0]);
            uploadImageHandler(event);
          }}
        />
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="formPhoto">
        <Form.Label>Photo Url </Form.Label>
        <Form.Control type="url" placeholder="Photo Url" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Select aria-label="Default select example">
          <option>Select Author</option>
          {authors.map((e) => {
            return <option value={e.id}>{e.name}</option>;
          })}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPublisher">
        <Form.Select aria-label="Default select example">
          <option>Select Publisher</option>
          {publishers.map((e) => {
            return <option value={e.id}>{e.name}</option>;
          })}
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddBook;
