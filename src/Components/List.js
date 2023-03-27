import React from "react";
import api from "../utils/api/books";
import { useQuery } from "@tanstack/react-query";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function List() {
  const { data, isFetching } = useQuery(["books"], () => api.list());
  const booksList = data?.data.map((book) => (
    <Card className="book-card">
      <Card.Img
        className="book-card-img"
        variant="top"
        src={book.image}
        alt={book.title}
      />
      <Card.Body className="book-card-body">
        <Card.Title>{book.name}</Card.Title>
        <Link to={`/bood-details/${book.id}`}>
          <Button variant="primary" href="/book-details">
            Details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  ));

  return (
    <section id="books-list">
      <div className="container">
        <h2 className="section-title">Our Books</h2>
        <CardGroup className="card-group">
          {isFetching ? <p>Loading...</p> : booksList}
        </CardGroup>
      </div>
    </section>
  );
}

export default List;
