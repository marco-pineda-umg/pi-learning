import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Subjects from "./components/Subjects";
import Card from "./components/Card";
import { temas } from "./data/temas";
import { Testimonials } from "./components/Testimonials";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <section className="bg-white" id="hero">
          <div className="mx-auto max-w-7xl px-6 py-20 mt-5 sm:mt-10 md:mt-16">
            <Hero />
          </div>
        </section>
        <section className="bg-white" id="subjects">
          <div className="mx-auto max-w-6xl px-6 py-20 mt-10">
            <Subjects />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols2 md:grid-cols-4">
              {temas.map((t) => (
                <Card key={t.titulo} image={t.imagen} title={t.titulo} />
              ))}
            </div>
          </div>
        </section>
        <Testimonials />
      </main>
    </>
  );
};

export default App;
