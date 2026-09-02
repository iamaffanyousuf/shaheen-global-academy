import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUpRight, Link2, MessageCircle, PhoneCall, X } from "lucide-react";

const quickLinks = [
  {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeQSwPO2eLsrKp5X34Fa4JCHwiRDXOVSmq19fq4yOHN138kvg/viewform",
    label: "Admission Form",
    icon: Link2,
    external: true,
  },
  {
    href: "tel:+918050020345",
    label: "Call us",
    icon: PhoneCall,
  },
  {
    href: "https://wa.me/+918050020345?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Shaheen%20Global%20Academy.",
    label: "WhatsApp",
    icon: MessageCircle,
    external: true,
  },
  {
    href: "#enquiry",
    label: "Enquiry",
    icon: MessageCircle,
  },
];

export default function QuickLinks() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) {
      setVisible(true);
      return;
    }

    setVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: "-120px 0px 0px 0px",
      },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="
        fixed
        bottom-0.5 right-0.5
        sm:bottom-2.5 sm:right-2.5
        z-50
      "
    >
      {/* Quick Links menu */}
      <div
        className={`
          absolute
          bottom-[72px]
          right-0
          w-[230px]
          origin-bottom-right
          rounded-2xl
          border border-[#9AE600]/30
          bg-white/95
          p-2
          shadow-[0_15px_45px_rgba(0,0,0,0.18)]
          backdrop-blur-md
          transition-all
          duration-300
          z-[51]
          ${
            open
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-3 scale-95 opacity-0"
          }
        `}
      >
        <div className="flex items-center justify-between px-3 pb-2 pt-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Quick Links
          </span>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close quick links"
          >
            <X size={14} />
          </button>
        </div>

        <div className="flex flex-col gap-1">
          {quickLinks.map(({ href, label, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              onClick={() => setOpen(false)}
              className="
                group
                flex
                items-center
                justify-between
                rounded-xl
                px-3
                py-2.5
                text-sm
                text-slate-700
                transition-all
                hover:bg-[#9AE600]/10
              "
            >
              <span className="flex items-center gap-3">
                <span
                  className="
                    flex h-8 w-8
                    items-center justify-center
                    rounded-full
                    bg-[#9AE600]/15
                    text-[#6b9f00]
                    transition-colors
                    group-hover:bg-[#9AE600]/25
                  "
                >
                  <Icon size={16} />
                </span>

                <span className="font-medium">{label}</span>
              </span>

              <ArrowUpRight
                size={15}
                className="
                  text-slate-400
                  transition-all
                  duration-200
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:text-[#6b9f00]
                "
              />
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links Ring */}
      <button
        type="button"
        aria-label={open ? "Close quick links" : "Open quick links"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="
          relative
          flex
          h-[84px]
          w-[84px]
          items-center
          justify-center
          rounded-full
          border-[3px]
          border-[#9AE600]/60
          bg-transparent
          transition-all
          duration-300
          hover:border-[#9AE600]
        "
      >
        {/* subtle ring glow */}
        <span
          className={`
            pointer-events-none
            absolute
            inset-[-3px]
            rounded-full
            border
            border-[#9AE600]/20
            transition-all
            duration-500
            ${
              open
                ? "scale-110 opacity-100"
                : "scale-100 opacity-0 group-hover:opacity-100"
            }
          `}
        />

        {/* small Quick Links indicator */}
        <span
          className={`
            pointer-events-none
            absolute
            -bottom-0.5
            left-1/2
            flex
            -translate-x-1/2
            items-center
            gap-1
            rounded-full
            border
            border-[#9AE600]/40
            bg-white
            px-2
            py-0.5
            text-[8px]
            font-bold
            uppercase
            tracking-wide
            text-slate-600
            shadow-sm
            transition-all
            duration-300
            ${open ? "bg-[#9AE600] text-black" : ""}
          `}
        >
          <Link2 size={9} />
          Links
        </span>
      </button>
    </div>
  );
}
