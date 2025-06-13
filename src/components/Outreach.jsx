// --- Outreach.jsx ---
import { useRef } from "react";

export default function Outreach() {
  const conferences = [
    {
      date: "01/2025",
      event: "Wikipedia & Library conference",
      place: "Mexico City, Mexico",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/de/Wikimedia%2BLibraries_International_Convention_2025_-034.jpg",
    },
    {
      date: "08/2024",
      event: "Wikimania 2024",
      place: "Katowice, Poland",
      img: "https://commons.wikimedia.org/wiki/File:Young_Wikimedians_meetup,_Wikimania_2024.jpg#mw-jump-to-license",
    },
    {
      date: "03/2024",
      event: "Wikimedia India Summit",
      place: "Delhi, India",
      img: "https://via.placeholder.com/300x180?text=Conference+3",
    },
    {
      date: "04/2024",
      event: "Wikimedia Summit 2024",
      place: "Berlin, Germany",
      img: "https://via.placeholder.com/300x180?text=Conference+4",
    },
    {
      date: "06/2024",
      event: "Post India Summit",
      place: "Chandigarh, India",
      img: "https://via.placeholder.com/300x180?text=Conference+5",
    },
    {
      date: "10/2023",
      event: "Wiki Women Camp",
      place: "New Delhi, India",
      img: "https://via.placeholder.com/300x180?text=Conference+6",
    },
    {
      date: "10/2023",
      event: "Inter-Community Wiki Meetup",
      place: "Rajbiraj, Nepal",
      img: "https://via.placeholder.com/300x180?text=Conference+7",
    },
    {
      date: "04/2023",
      event: "Wiki Conference India",
      place: "Hyderabad, India",
      img: "https://via.placeholder.com/300x180?text=Conference+8",
    },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 px-6 bg-white text-gray-800" id="outreach">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-500 mb-12">
          Outreach Activities (Full Scholarship)
        </h2>

        <div className="relative flex items-center">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 bg-indigo-600 text-white p-3 rounded-full shadow hover:bg-indigo-700 transition"
          >
            &#8592;
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide space-x-6 px-12 py-4"
          >
            {conferences.map(({ date, event, place, img }, idx) => (
              <div
                key={idx}
                className="min-w-[300px] bg-gray-50 rounded-xl shadow-md flex-shrink-0 border hover:shadow-lg transition"
              >
                <img
                  src={img}
                  alt={`${event} picture`}
                  className="w-full h-44 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <p className="text-indigo-700 font-semibold">{date}</p>
                  <h5 className="font-bold text-lg text-gray-900">{event}</h5>
                  <p className="text-sm text-gray-600 italic">{place}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 bg-indigo-600 text-white p-3 rounded-full shadow hover:bg-indigo-700 transition"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
