import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import { Publish } from "./Publish";

import Footer from "./Footer";

export const Home = () => {
  return (
    <>
      <Header />

      <main className="bg-white  text white">
        <Hero />
      </main>
      <Publish />

      <Footer />
    </>
  );
};
