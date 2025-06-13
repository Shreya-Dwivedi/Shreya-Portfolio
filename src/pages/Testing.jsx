import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

const meetingsConfig = [
  {
    id: 'roundRobin',
    title: 'Round-Robin Meeting',
    divId: '_sm_meetings_1',
    meetingURL: 'https://shreya.salesmate.io/meetings/#/shreya/scheduler/test-round-robin-availability',
    theme: {
      backgroundColor: "#FFFFFF",
      textColor: "#505F79",
      buttonAndLinkColor: "#1F62FF",
    }
  },
  {
    id: 'oneToOne',
    title: 'One-to-One Meeting',
    divId: '_sm_meetings_2',
    meetingURL: 'https://shreya.salesmate.io/meetings/#/shreya/scheduler/ger',
    theme: {
      backgroundColor: "#FFFFFF",
      textColor: "#505F79",
      buttonAndLinkColor: "#1F62FF",
    }
  },
  {
    id: 'groupMeeting',
    title: 'Group Meeting',
    divId: '_sm_meetings_3',
    meetingURL: 'https://shreya.salesmate.io/meetings/#/shreya/scheduler/kashmiri-pandit',
    theme: {
      backgroundColor: "#FFFFFF",
      textColor: "#505F79",
      buttonAndLinkColor: "#1F62FF",
    }
  },
  {
    id: 'teamMeeting',
    title: 'With Team Meeting',
    divId: '_sm_meetings_4',
    meetingURL: 'https://shreya.salesmate.io/meetings/#/shreya/scheduler/meeting-with-team',
    theme: {
      backgroundColor: "#f0ccccff",
      textColor: "#15191eff",
      buttonAndLinkColor: "#47f454ff",
    }
  }
];

export default function Testing() {
  const [visibleMeeting, setVisibleMeeting] = useState(null);

  const handleShowMeeting = useCallback((id, config) => {
    setVisibleMeeting(id);
    const loadMeeting = () => {
      window.SM_Meetings.loadMeeting({
        ...config.theme,
        meetingURL: config.meetingURL,
        initData: {},
        divId: config.divId,
      });
    };

    if (typeof window.SM_Meetings === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://shreya.salesmate.io/meetings.js';
      script.onload = loadMeeting;
      document.head.appendChild(script);
    } else {
      loadMeeting();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      {/* Back Button */}
      <div className="absolute top-4 left-4">
        <Link
          to="/"
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Page Header */}
      <div className="mt-20 text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Testing Page</h1>
        <p className="text-gray-700 mb-12">Click on a button to load the meeting scheduler.</p>
      </div>

      {/* Meeting Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {meetingsConfig.map(({ id, title, divId, ...rest }) => (
          <div key={id} className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">{title}</h2>
            <button
              onClick={() => handleShowMeeting(id, { divId, ...rest })}
              className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
            >
              Open Scheduler
            </button>
            {visibleMeeting === id && <div id={divId} className="mt-6 min-h-[250px]" />}
          </div>
        ))}
      </div>
    </div>
  );
}
