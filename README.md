# Mini-project

- Create a wireframe for the project in 30 minutes using Figma.
- Identify the components required for the project and create a separate file for each one.
- Install any necessary libraries required for the project to run smoothly.
- Create the navbar using a CSS framework like Bootstrap.
- Build the pages according to the wireframe using the previously created components.
- Create a books.js file to handle data retrieval from the backend using APIs.

## here are all the APIs

| Title           | Method   | Endpoint                                                     | Data required                           |
| --------------- | -------- | ------------------------------------------------------------ | --------------------------------------- |
| Fetch all books | `GET`    | `https://mini-project-react-books.herokuapp.com/books`       |                                         |
| Fetch one book  | `GET`    | `https://mini-project-react-books.herokuapp.com/book/${id}`  |                                         |
| Create a book   | `POST`   | `https://mini-project-react-books.herokuapp.com/books`       | `name`, `image`, `details`, `available` |
| Update a book   | `PUT`    | `https://mini-project-react-books.herokuapp.com/book/${id}`  | `available`                             |
| Delete a book   | `DELETE` | `https://mini-project-react-books.herokuapp.com/books/${id}` |                                         |
