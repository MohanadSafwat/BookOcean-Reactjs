import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import host from "../../host";

const AddPublisher = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(host + "/publisher/create", {
        name: e.target.formName.value,
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

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddPublisher;
