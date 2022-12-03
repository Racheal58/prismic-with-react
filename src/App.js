import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./Post";
import Home from "./Home";
import Preview from "./Preview";
import { Header } from "./Header";
import { useSinglePrismicDocument } from "@prismicio/react";

function App() {
  const [menu] = useSinglePrismicDocument("menu");

  return (
    <>
      <BrowserRouter>
        <Header menuDoc={menu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/:uid" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
