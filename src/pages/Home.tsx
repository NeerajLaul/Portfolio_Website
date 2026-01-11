import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { About } from '../components/About';

export function Home() {
  return (
    <>
      <section id="home" className="min-h-screen">
        <Hero />
      </section>
      
      <section id="about" className="py-20 bg-white dark:bg-neutral-950">
        <About />
      </section>
      
      <section id="projects" className="py-20">
        <Projects />
      </section>
    </>
  );
}
