import React from "react";
import ReactDOM from "react-dom/client";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import "../styles/index.css";

// components
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Jumboton from './components/Home';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<div className="App d-flex flex-column min-vh-100 justify-content-between">
    <div className="">
      <NavBar />
    </div>
    <Jumboton />
    <div className="container my-2">
      <div className="row">
        <div className="col-md-3">
          <Card
            img="https://placehold.co/300x200"
            title="Card Title 1"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </div>
        <div className="col-md-3">
          <Card
            img="https://placehold.co/300x200"
            title="Card Title 2"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </div>
        <div className="col-md-3">
          <Card
            img="https://placehold.co/300x200"
            title="Card Title 3"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </div>
        <div className="col-md-3">
          <Card
            img="https://placehold.co/300x200"
            title="Card Title 4"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </div>
      </div>
    </div>
    <div>
      <Footer />
    </div>
</div>
  </React.StrictMode>,
);
