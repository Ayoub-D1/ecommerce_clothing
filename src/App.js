import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home";
import Shop from "./routes/Shop/shop";
import SignIn from "./routes/sign-in/sign-in";
import Navigation from "./routes/Navigation/navigation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
    // <Routes>
    //   <Route path="/" element={<Home />}>
    //     <Route path="test" element={<Test />} />
    //   </Route>
    // </Routes>
  );
}

export default App;
