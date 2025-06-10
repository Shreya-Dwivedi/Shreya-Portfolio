export default function Header() {
  return (
    <header className="w-full py-4 px-6 shadow-md fixed bg-white z-50 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">Shreya</h1>
      <nav>
        <ul className="flex gap-6 text-sm font-medium">
          <li><a href="#about" className="hover:text-indigo-500">About</a></li>
          <li><a href="#skills" className="hover:text-indigo-500">Skills</a></li>
          <li><a href="#experience" className="hover:text-indigo-500">Experience</a></li>
          <li><a href="#education" className="hover:text-indigo-500">Education</a></li>
          <li><a href="#contact" className="hover:text-indigo-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
