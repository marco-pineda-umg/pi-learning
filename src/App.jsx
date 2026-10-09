import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Subjects from "./components/Subjects";
import Card from "./components/Card";
const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <section className="bg-white" id="hero">
          <div className="mx-auto max-w-6xl px-6 py-20 mt-5 sm:mt-10 md:mt-30">
            <Hero />
          </div>
        </section>
        <section className="bg-white" id="subjects">
          <div className="mx-auto max-w-6xl px-6 py-20 mt-30">
            <Subjects />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols2 md:grid-cols-4">
              <Card image={"/image.png"} title={"titulo"} />
              <Card image={"/image.png"} title={"titulo"} />
              <Card image={"/image.png"} title={"titulo"} />
              <Card image={"/image.png"} title={"titulo"} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
