import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import host from "../../host";

const AddAuthor = () => {
  const navigate = useNavigate();
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
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(host + "/author/create", {
        name: e.target.formName.value,
        surname: e.target.formSurname.value,
        birthdate: e.target.formBirth.value,
        photoUrl: e.target.formPhoto.value,
      })
      .then(() => {
        navigate("/");
      });
  };
  return (
    <Form onSubmit={submitHandler} encType="multipart/form-data">
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formSurname">
        <Form.Label>Surname</Form.Label>
        <Form.Control type="text" placeholder="Surname" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBirth">
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Control type="text" placeholder="Date of Birth" />
        <Form.Text className="text-muted">
          It should be in yyyy-mm-dd format
        </Form.Text>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formPhoto">
        <Form.Label>Photo</Form.Label>
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
        <Form.Label>Photo</Form.Label>
        <Form.Control type="Url" placeholder="Photo Url" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddAuthor;
