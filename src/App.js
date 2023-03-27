import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BookDetails from "./Components/BookDetails";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bood-details/:id" element={<BookDetails />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
