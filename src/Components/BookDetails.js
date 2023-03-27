import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useParams, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../utils/api/books";

function BookDetails() {
  const { id: book_id } = useParams();
  console.log(book_id);

  const { data, isFetching } = useQuery(["book"], () => api.list());
  const book = data?.data.find((book) => book.id === Number(book_id));

  console.log(book);

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Image src={book.image} fluid />
        </Col>
        <Col md={6}>
          <h1>{book.name}</h1>
          <p>{book.description}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default BookDetails;
