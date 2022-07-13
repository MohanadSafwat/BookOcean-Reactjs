import "./add.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import AddAuthor from "./addAuthor";
import AddPublisher from "./addPublisher";
import AddBook from "./addBook";

const Add = () => {
  return (
    <div className="add-wrapper">
      <Tabs
        defaultActiveKey="addAuthor"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="addAuthor" title="Add Author">
         <AddAuthor />
        </Tab>
        <Tab eventKey="addPublisher" title="Add Publisher">
          <AddPublisher />
        </Tab>
        <Tab eventKey="addBook" title="Add Book">
          <AddBook />
        </Tab>
      </Tabs>
    </div>
  );
};
export default Add;
