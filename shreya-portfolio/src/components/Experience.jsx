// --- Experience.jsx ---
import React from "react";

export default function Experience() {
  const experienceData = [
    {
      date: "02/2025 – 07/2025",
      title: "Customer Success Intern",
      org: "Rapidops",
      location: "Ahmedabad, India",
      description:
        "Currently exploring CRM and client engagement at Rapidops as a Customer Success Intern, where I bridge the gap between product and people."
    },
    {
      date: "01/2024 – Present",
      title: "Regional Ambassador for South Asia",
      org: "Wiki Loves Folklore",
      description:
        "Supporting cultural documentation efforts across South Asia. Helped boost submissions by 25% through community engagement and social media coordination."
    },
    {
      date: "11/2023 – Present",
      title: "Founder & President",
      org: "Wiki Club SATI",
      location: "Vidisha",
      description:
        "Founded a student-run Wiki Club at SATI, leading 20+ edit-a-thons and increasing student involvement in open knowledge by 30%."
    },
    {
      date: "01/2022 – Present",
      title: "Event Coordinator",
      org: "Commons Photographers User Group (Wikimedia)",
      description:
        "Coordinate local and virtual events with international photographers to promote cultural preservation through imagery."
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-800" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
          My Journey
        </h2>

        <div className="space-y-12">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow p-6 border-l-8 border-indigo-400 hover:shadow-lg transition"
            >
              <p className="text-sm text-indigo-700 font-semibold mb-2">
                {exp.date}
              </p>
              <h3 className="text-xl font-bold text-gray-900">
                {exp.title}, <span className="text-indigo-600">{exp.org}</span>
              </h3>
              {exp.location && (
                <p className="text-sm text-gray-500 italic mb-2">{exp.location}</p>
              )}
              <p className="text-gray-700 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}