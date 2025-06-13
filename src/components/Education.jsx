import React from 'react';

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Samrat Ashok Technological Institute, Vidisha",
    period: "2021 - 2025 (Expected)",
    description: "Specialization in IoT, Cybersecurity, and Blockchain."
  }
];

const Education = () => {
  return (
    <section id="education" className="container mx-auto p-8 my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {education.map(({ degree, institution, period, description }) => (
          <div key={degree} className="border p-4 rounded-lg bg-gray-50">
            <h3 className="text-xl font-semibold">{degree}</h3>
            <span className="text-gray-600">{institution} | {period}</span>
            <p className="mt-2">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
