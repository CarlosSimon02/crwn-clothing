import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.components";

function Shop() {
  return <div>This is a shop</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="shop" element={<Shop />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
