import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Todos</Navbar.Brand>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
