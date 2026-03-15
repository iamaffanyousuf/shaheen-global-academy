import { Quote, ArrowRight } from "lucide-react";
import { leadershipMessages } from "../data/leadershipMessages";

export function AboutLeadership() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(154,230,0,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.14),_transparent_32%)]" />

      <div className="relative container mx-auto px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#2563eb]">
            Leadership Messages
          </p>
          <h2 className="mb-4 text-gray-900">
            Guiding Shaheen Global Academy with purpose
          </h2>
          <p className="text-gray-600">
            The academy is shaped by a clear educational vision and a daily commitment to student growth. These messages reflect the values that guide our direction.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {leadershipMessages.map((message, idx) => {
            const cardStyles = [
              // Card 1 styles (modern minimal)
              "rounded-2xl bg-gradient-to-br from-gray-900 via-[#101828] to-gray-900 p-8 shadow-md border border-gray-200",
              // Card 2 styles (modern minimal)
              "rounded-2xl bg-white p-8 shadow-md border border-gray-100"
            ];
            const titleStyles = [
              "mb-4 text-2xl font-bold text-white drop-shadow-lg",
              "mb-4 text-2xl font-bold text-[#2563eb] drop-shadow"
            ];
            const contentStyles = [
              "mb-4 leading-8 text-gray-100",
              "mb-4 leading-8 text-gray-700"
            ];
            const closingStyles = [
              "mb-8 leading-8 text-green-200",
              "mb-8 leading-8 text-blue-700"
            ];
            return (
              <article
                key={message.title}
                className={cardStyles[idx % cardStyles.length]}
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className={`rounded-full px-4 py-1.5 text-sm font-semibold ${message.accent}`}>
                    {message.badge}
                  </span>
                  <Quote className="h-8 w-8 text-[#9AE600]" />
                </div>

                <h3 className={titleStyles[idx % titleStyles.length]}>{message.title}</h3>
                <p className={contentStyles[idx % contentStyles.length]}>{message.content}</p>
                <p className={closingStyles[idx % closingStyles.length]}>{message.closing}</p>

                <a
                  href={message.link}
                  target={message.link.startsWith("http") ? "_blank" : undefined}
                  rel={message.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 font-semibold text-gray-900 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {message.linkLabel}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
