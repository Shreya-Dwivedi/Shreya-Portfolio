// import React, { useState } from "react";

// const socialLinks = [
//   {
//     name: "Wikimedia",
//     url: "https://meta.wikimedia.org/wiki/User:Shreya.Bhopal", // Replace with your Wikimedia profile URL
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="currentColor"
//         className="w-6 h-6"
//         viewBox="0 0 24 24"
//       >
//         <path d="M12 2C6.486 2 2 6.486 2 12c0 5.512 4.486 10 10 10s10-4.488 10-10c0-5.514-4.486-10-10-10zM7.5 17.5h1.4l2.4-7.34-1.7 1.31v-.01l-1.7-1.4-1.1 6.82zm7-3.72l-1.3-2.7-1 2.8 2.3.9z" />
//       </svg>
//     ),
//   },
//   {
//     name: "LinkedIn",
//     url: "https://www.linkedin.com/in/shreya-dwivedi-363b431a3/",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="currentColor"
//         className="w-6 h-6"
//         viewBox="0 0 24 24"
//       >
//         <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-9 14v-6h-2v6h2zm-1-7a1 1 0 110-2 1 1 0 010 2zm8 7v-3c0-1.5-1-2-1.5-2S14 13.5 14 15v3h2z" />
//       </svg>
//     ),
//   },
//   {
//     name: "GitHub",
//     url: "https://github.com/Shreya-Dwivedi", // Replace with your GitHub profile URL
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="currentColor"
//         className="w-6 h-6"
//         viewBox="0 0 24 24"
//       >
//         <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.5 0-.25-.01-.91-.01-1.79-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.32 1.9-1.3 2.74-1.02 2.74-1.02.56 1.37.21 2.39.1 2.64.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .28.18.6.69.5A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Facebook",
//     url: "https://www.facebook.com/shreya.dwivedi.562262/", // Replace with your Facebook URL
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="currentColor"
//         className="w-6 h-6"
//         viewBox="0 0 24 24"
//       >
//         <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.9h2.54v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.25 0-1.64.78-1.64 1.57v1.86h2.79l-.45 2.9h-2.34v6.99C18.34 21.13 22 17 22 12z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Instagram",
//     url: "https://www.instagram.com/shreyaa_dwivedii_/",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="currentColor"
//         className="w-6 h-6"
//         viewBox="0 0 24 24"
//       >
//         <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4zm3.5-7a1 1 0 110-2 1 1 0 010 2z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Telegram",
//     url: "https://t.me/shreya_0001",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="currentColor"
//         className="w-6 h-6"
//         viewBox="0 0 24 24"
//       >
//         <path d="M9.993 15.237l.006-.005 3.364 2.292c.506.343.91.177 1.05-.456l1.902-8.54c.18-.813-.295-1.15-.952-.945L5.59 11.084c-.81.266-.794.65-.14.823l4.543 1.412 10.565-6.646c.498-.32.953-.14.579.18l-8.77 7.767z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Email",
//     url: "mailto:shreya.connect.in@gmail.com", // Replace with your email address
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="currentColor"
//         className="w-6 h-6"
//         viewBox="0 0 24 24"
//       >
//         <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18v-9.49l8 7.99 8-7.99V18H4z" />
//       </svg>
//     ),
//   },
// ];

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add email logic or API call here
//     setSubmitted(true);
//   };

//   return (
//     <section id="contact" className="bg-gray-900 text-white p-8 my-16">
//       <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>

//       {/* Get in Touch Button */}
//       <div className="text-center mb-8">
//         <a
//           href="https://shreya.salesmate.io/webforms/#/23f57765-50b9-44ce-949d-82d6713e83a1"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded transition"
//         >
//           Get in Touch
//         </a>
//       </div>

//       {/* Uncomment below if you want the contact form visible again */}
//       {/* {!submitted ? (
//         <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full p-3 rounded bg-gray-800 text-white"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-3 rounded bg-gray-800 text-white"
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             rows="5"
//             className="w-full p-3 rounded bg-gray-800 text-white"
//           />
//           <button
//             type="submit"
//             className="w-full bg-yellow-400 text-gray-900 py-3 rounded font-semibold hover:bg-yellow-500 transition"
//           >
//             Send Message
//           </button>
//         </form>
//       ) : ( */}
//         <p className="text-center text-green-400 text-xl">
//           Thank you for reaching out! I'll get back to you soon.
//         </p>
//       {/* )} */}

//       {/* Social Media Links */}
//       <div className="mt-12 flex justify-center space-x-8 text-gray-300">
//         {socialLinks.map(({ name, url, icon }) => (
//           <a
//             key={name}
//             href={url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-indigo-500 transition"
//             aria-label={name}
//           >
//             {icon}
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Contact;
// //testing embeddid code
// {/* Book a Call Button */}
// // {/* <div className="mt-12 text-center">
// //   <button
// //     onClick={() => {
// //       const MEETING_DATA = {
// //         backgroundColor: "#FFFFFF",
// //         textColor: "#505F79",
// //         buttonAndLinkColor: "#1F62FF",
// //         meetingURL: 'https://shreya.salesmate.io/meetings/#/shreya/scheduler/test-round-robin-availability',
// //         initData: {},
// //         divId: '_sm_meetings_'
// //       };
// //       if (typeof window.SM_Meetings === "undefined") {
// //         const script = document.createElement("script");
// //         script.src = "https://shreya.salesmate.io/meetings.js";
// //         script.onload = () => {
// //           window.SM_Meetings.loadMeeting(MEETING_DATA);
// //         };
// //         document.head.appendChild(script);
// //       } else {
// //         window.SM_Meetings.loadMeeting(MEETING_DATA);
// //       }
// //     }}
// //     className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded transition"
// //   >
// //     Book a Call
// //   </button>
// // </div>

// // {/* Salesmate Meetings Container */}
// // <div id="_sm_meetings_" className="mt-6" /> */}


import React, { useState, useEffect, useRef } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showScheduler, setShowScheduler] = useState(false);
  const schedulerRef = useRef(null);

  const handleBookCall = () => {
    setShowScheduler(true);
  };

  useEffect(() => {
    if (showScheduler && schedulerRef.current) {
      const existingScript = document.getElementById("salesmate-meeting-script");

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://shreya.salesmate.io/meetings.js";
        script.id = "salesmate-meeting-script";
        script.onload = () => {
          if (window.SM_Meetings) {
            window.SM_Meetings.loadMeeting({
              backgroundColor: "#FFFFFF",
              textColor: "#505F79",
              buttonAndLinkColor: "#1F62FF",
              meetingURL:
                "https://shreya.salesmate.io/meetings/#/shreya/scheduler/test-round-robin-availability",
              initData: {},
              divId: "_sm_meetings_",
            });
          }
        };
        document.body.appendChild(script);
      } else {
        if (window.SM_Meetings) {
          window.SM_Meetings.loadMeeting({
            backgroundColor: "#FFFFFF",
            textColor: "#505F79",
            buttonAndLinkColor: "#1F62FF",
            meetingURL:
              "https://shreya.salesmate.io/meetings/#/shreya/scheduler/test-round-robin-availability",
            initData: {},
            divId: "_sm_meetings_",
          });
        }
      }
    }
  }, [showScheduler]);

  return (
    <section id="contact" className="bg-gray-900 text-white p-8 my-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>

      <div className="text-center space-y-4 mb-8">
        <a
          href="https://shreya.salesmate.io/webforms/#/23f57765-50b9-44ce-949d-82d6713e83a1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded transition"
        >
          Get in Touch
        </a>

        <button
          onClick={handleBookCall}
          className="block mx-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded transition"
        >
          Book a Call
        </button>
      </div>

      {showScheduler && <div id="_sm_meetings_" ref={schedulerRef} className="mt-8" />}

      <p className="text-center text-green-400 text-xl">
        Thank you for reaching out! I'll get back to you soon.
      </p>

      <div className="mt-12 flex justify-center space-x-8 text-gray-300">
        {socialLinks.map(({ name, url, icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
            aria-label={name}
          >
            {icon}
          </a>
        ))}
      </div>
    </section>
  );
};

// Add this above export if it's not already defined
const socialLinks = [/* your original socialLinks array here */];

export default Contact;
