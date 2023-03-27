import axios from "axios";

function list() {
  return axios.get("https://mini-project-react-books.herokuapp.com/books");
}

function create({ book }) {
  return axios.post(
    "https://mini-project-react-books.herokuapp.com/books",
    book
  );
}

export default { list, create };
