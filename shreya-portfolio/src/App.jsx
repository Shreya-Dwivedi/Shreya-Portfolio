import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Outreach from './components/Outreach';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testing from "./pages/Testing";

const App = () => {
  useEffect(() => {
    // Add Salesmate settings object to window
    window.salesmateSettings = {
      workspace_id: "e772f43e-f86b-4917-9925-e7cf9bf0651f",
      app_key: "e85e91a0-3546-11f0-9ccc-6b6448087af8",
      tenant_id: "shreya.salesmate.io"
    };

    // Create the Salesmate widget script tag
    const script = document.createElement('script');
    script.id = 'salesmate-widget-script';
    script.src = "https://shreya.salesmate.io/messenger-platform/messenger-platform-main.js";
    script.async = true;

    // Insert script tag before the first script tag on the page
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(script, firstScriptTag);

    // Once script is loaded, initialize and load widget
    script.onload = () => {
      if (window.loadwidget) {
        window.loadwidget("init", {});
        window.loadwidget("load_widget", "Widget Loading...!");
      }
    };

    // Cleanup script when component unmounts (optional)
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Outreach />
        <Education />
        <Contact />
        <Testing />
      </main>
      <Footer />
    </>
  );
};

export default App;