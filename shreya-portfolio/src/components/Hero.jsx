export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-indigo-50 to-white" id="hero">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm <span className="text-indigo-600">Shreya</span></h2>
      <p className="text-lg md:text-xl max-w-xl">
        Final Year Computer Science Engineering Student | IoT, Cybersecurity & Blockchain Enthusiast | Open Source Contributor
      </p>
      <a href="#projects" className="mt-6 inline-block px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
        See My Work
      </a>
    </section>
  );
}
