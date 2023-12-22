import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.components";
import NavigationBar from "./routes/navigation-bar/navigation-bar.component";

function Shop() {
  return <div>This is a shop</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
