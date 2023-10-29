import { Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";
import { Repository } from "./pages/Repository";
import { Page1 } from "./pages/info/Page1";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/repository" element={<Repository />} />
        <Route path="/pagina1" element={<Page1 />} />
      </Routes>
    </>
  );
}

export default App;
