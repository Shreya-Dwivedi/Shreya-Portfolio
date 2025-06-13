const skills = ['JavaScript', 'React', 'Node.js', 'Tailwind CSS', 'Blockchain', 'IoT', 'Cybersecurity'];

export default function Skills() {
  return (
    <section className="py-16 bg-gray-50" id="skills">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-semibold text-indigo-600 mb-6">Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map(skill => (
            <span key={skill} className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
