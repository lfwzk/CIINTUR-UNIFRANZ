import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import { Publish } from "./Publish";
import { Alliance } from "./Alliance";

import Footer from "./Footer";

export const Landing = () => {
  return (
    <>
      <Header />

      <main className="bg-white  text white">
        <Hero />
      </main>
      <Publish />
      <Alliance />

      <Footer />
    </>
  );
};
