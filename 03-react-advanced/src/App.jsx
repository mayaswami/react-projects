import UserContext from "./context/UserContext";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContextDemo from "./pages/ContextDemo";
import CustomHooksDemo from "./pages/CustomHooksDemo";
import ReactMemoDemo from "./pages/ReactMemoDemo";
import UseCallbackDemo from "./pages/UseCallbackDemo";
import UseMemoDemo from "./pages/UseMemoDemo";
import UseRefDemo from "./pages/UseRefDemo";

function App() {

  const user = {
    name: "Maya",
    age: 22,
    city: "Jaipur",
  };
  
  return (
    <>
      <Navbar />
      <UserContext.Provider value={user}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/context-api" element={<ContextDemo />} />
        <Route path="/custom-hooks" element={<CustomHooksDemo />} />
        <Route path="/react-memo" element={<ReactMemoDemo />} />
        <Route path="/use-callback" element={<UseCallbackDemo />} />
        <Route path="/use-memo" element={<UseMemoDemo />} />
        <Route path="/use-ref" element={<UseRefDemo />} />
      </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
