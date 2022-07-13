import Navbar from "./components/navbar/navbar";
import "./App.css";
import CardList from "./components/cardList/cardList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Book from "./components/book/book";
import Publisher from "./components/publisher/publisher";
import Author from "./components/author/author";
import Add from "./components/add/add";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="recent">Recent Books</h1>
                <CardList />
              </>
            }
          ></Route>
          <Route path="/author" element={<Author />}></Route>
          <Route path="/publisher" element={<Publisher />}></Route>
          <Route path="/book" element={<Book />}></Route>
          <Route path="/add" element={<Add />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
