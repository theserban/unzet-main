"use client";
import React from "react";
import Navbar from "./Components/navbar";
import Competitions from "./Components/competitions";
import Products from "./Components/products";
import Tools from "./Components/tools";
import Donate from "./Components/donate";
import Hero from "./Components/hero";
import Values from "./Components/values";
import How from "./Components/how";
import Stats from "./Components/stats";
import Divider from "./Components/divider";
import Projects from "./Components/projects";
import FAQ from "./Components/faq";
import Footer from "./Components/footer";

export default function Page() {
  return (
    <div className="relative">
      <Navbar />
      <Competitions />
      <Tools />
      <Donate />
      <Stats />
      <Divider />
      <Projects />
      <Products />
      <How />
      <Values />
      <FAQ />
      <Footer />
    </div>
  );
}
