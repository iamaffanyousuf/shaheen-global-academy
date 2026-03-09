import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ComingSoonModal from "../components/ComingSoonModal";

export default function Academics() {
  const [showModal, setShowModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");
  const navigate = useNavigate();

  const sections = [
    {
      title: "Prospectus",
      desc: "Comprehensive guide to our academic offerings, policies and campus life.",
      link: "/documents/Prospectus-2025.pdf",
      type: "pdf"
    },
    {
      title: "Scholarships",
      desc: "Merit-based, need-based and talent scholarships for deserving students.",
      link: "/academics/scholarships",
      comingSoon: true
    },
    {
      title: "Admission Forms",
      desc: "Download and submit admission forms for various programs.",
      link: "/academics/admission-forms",
      comingSoon: true
    },
    {
      title: "Syllabus",
      desc: "Structured syllabus for NEET, JEE, Foundation & other academic streams.",
      link: "/academics/syllabus",
      comingSoon: true
    },
    {
      title: "E-Library",
      desc: "Access digital books, notes, question banks and study material.",
      link: "/academics/e-library",
      comingSoon: true
    },
    {
      title: "Programs Offered",
      desc: "Explore the diverse academic programs we offer.",
      link: "/academics/programs",
      comingSoon: true
    },
    {
      title: "Academic Calendar",
      desc: "View schedules, examination timelines and important academic dates.",
      link: "/academics/calendar",
      comingSoon: true
    },
  ];

  const handleSectionClick = (sec: any) => {
    if (sec.comingSoon) {
      setSelectedSection(sec.title);
      setShowModal(true);
      return
    }

    if (sec.type === "pdf") {
      window.open(sec.link, "_blank");
    } else {
      navigate(sec.link);
    }
  };

  return (
    <div className="py-24 px-6 container mx-auto">
      {/* Title */}
      <div className="text-center mt-16 mb-16">
        <h1 className="text-gray-800 mb-4">Academics</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore academic resources, programs, forms, and digital learning
          tools.
        </p>

        <div className="mt-4 flex justify-center">
          <span className="w-20 h-[3px] bg-[#9AE600] rounded-full"></span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mt-16 mb-16">
        {sections.map((sec, i) => (
          <a
            key={i}
            onClick={() => handleSectionClick(sec)}
            className="group block p-8 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#9AE600] transition-all duration-300"
          >
            <h3 className="text-gray-800 text-xl mb-2 group-hover:text-[#9AE600]">
              {sec.title}
            </h3>
            <p className="text-gray-600 text-sm">{sec.desc}</p>

            <div className="mt-4 h-[3px] w-0 group-hover:w-20 bg-[#9AE600] transition-all duration-300"></div>
          </a>
        ))}
      </div>

      {/* comming soon modal */}
      <ComingSoonModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        message={`The "${selectedSection}" section is currently under development. We'll notify you once it's ready!`}
      />
    </div>
  );
}
