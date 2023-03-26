# Mini-project-idea

- The project involves creating a book website.
- The website will have a home page.
- The website will feature a book list page where all books will be displayed.
- The book list page will have a button to add a new book to the list.
- Users will be able to update the availability of existing books.
- Users will be able to delete books from the list.
- The website will have a details page for each book.
- The details page will provide users with access to all relevant information about the book.

## BooksData

```js
  {
    id: 1,
    name: "The Alchemist",
    details:
      "This international bestseller follows the journey of a shepherd boy named Santiago who travels to Egypt in search of treasure. It's a timeless tale about following your dreams and discovering your true purpose in life. ",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
    available: true,
  },
  {
    id: 2,
    name: "The Hunger Games",
    details:
      "In this dystopian novel, Katniss Everdeen volunteers as tribute for the Hunger Games, a televised competition where teenagers fight to the death. It's a gripping and thought-provoking story about survival, sacrifice, and rebellion.",
    image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41tqzW6kO7S.jpg",
    available: true,
  }
```

## Steps

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
