import { Header } from "./components/header";
import { Nav } from "./components/nav";
import { Router } from "./routes/index.routes";

export const App = () => {
  
  return (
    <>
      <Header/>
      <Nav/>
      <Router/>
    </>
  );
};
