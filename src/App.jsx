import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Repository } from "./pages/Repository";
import { Page1 } from "./pages/info/Page1";

//_______________________________
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Information } from "./pages/Information";

import { Post } from "./pages/Post";
import { Proposal } from "./pages/Proposal";
import { Page2 } from "./pages/info/Page2";
import { Page3 } from "./pages/info/Page3";
import { Page4 } from "./pages/info/Page4";
import { Blog } from "./pages/Blog";
import { Metaverso } from "./pages/info/Metaverso";
import { Interactive } from "./pages/info/Interactive";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/repository" element={<Repository />} />
        <Route path="/pagina1" element={<Page1 />} />
        <Route path="/pagina2" element={<Page2 />} />
        <Route path="/pagina3" element={<Page3 />} />
        <Route path="/pagina4" element={<Page4 />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="/information" element={<Information />} />

        <Route path="/posts" element={<Post />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/metaverso" element={<Metaverso />} />
        <Route path="/elalto-interactivo" element={<Interactive />} />
      </Routes>
    </>
  );
}

export default App;
