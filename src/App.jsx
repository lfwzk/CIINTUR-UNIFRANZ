import { Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";
import { Repository } from "./pages/Repository";
import { Page1 } from "./pages/info/Page1";
//_______________________________
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Information } from "./pages/Information";

import { Post } from "./pages/Post";
import { Proposal } from "./pages/Proposal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/repository" element={<Repository />} />
        <Route path="/pagina1" element={<Page1 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="/information" element={<Information />} />

        <Route path="/posts" element={<Post />} />
        <Route path="/proposal" element={<Proposal />} />
      </Routes>
    </>
  );
}

export default App;
