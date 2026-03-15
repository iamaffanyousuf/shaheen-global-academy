import { GraduationCapIcon, LibraryBig, AlignHorizontalSpaceBetween, BookOpenCheck } from 'lucide-react';

export function CoursesSection() {
  const features = [
    {
      icon: BookOpenCheck,
      title: "Special Class Sessions",
      description: "Dedicated doubt-clearing, revision, and topic-based sessions to ensure no student is left behind. Personalized attention for every learner."
    },
    {
      icon: LibraryBig,
      title: "Hifzul-Quran Program",
      description: "The Hifzul Quran Plus (or Hifz Plus) is a flagship program of the Shaheen Group of Institutions designed to integrate students who have completed memorizing the Quran (Huffaz) into mainstream modern education."
    },
    {
      icon: GraduationCapIcon,
      title: "11th & 12th Integrated Program",
      description: "The Shaheen Academy 11th and 12th integrated program is a two-year residential course designed to combine standard board education with intensive competitive exam preparation."
    },
    {
      icon: AlignHorizontalSpaceBetween,
      title: "NEET Repeater Program",
      description: "A one-year intensive training program for students who have completed Class 12 and are dedicated to clearing the medical entrance exam."
    }
  ];

  return (
    <section id='courses' className="bg-gray-200 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-blue-600 mb-2 font-semibold">Courses</p>
          <h2 className="text-gray-800 mb-4">
            Offered by Shaheen Global Academy
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover a learning experience designed to help you achieve your goals. We combines cutting-edge technology with proven teaching methods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-gray-800" />
                </div>
                <h3 className="text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
