import { Card } from "@/components/ui/card";
import { Stethoscope, Users, Heart, Clock, Shield, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Service Background Images
import healthcareAssistantsImg from "@/assets/services/healthcare-assistant.jpg";
import seniorHealthcareAssistantImg from "@/assets/services/senior-healthcare-assistant.jpg";
import supportWorkerImg from "@/assets/services/support-worker.jpg";
import nursesImg from "@/assets/services/nurses.jpg";
import emergencyImg from "@/assets/services/emergency.jpg";
import hourlyCareImg from "@/assets/services/hourly-care.jpg";
import specializedImg from "@/assets/services/specialized.jpg";
import { Link } from "react-router-dom";

const services = [
  {
    id: "healthcare-assistants",
    title: "Healthcare Assistants",
    description:
      "Compassionate, trained assistants experienced in hospital and care-home environments, available for short and long shifts.",
    color: "from-secondary to-primary",
    image: healthcareAssistantsImg,
  },
  {
    id: "senior-healthcare-assistants",
    title: "Senior Healthcare Assistants",
    description:
      "Senior assistants with supervisory experience who support complex care needs and help maintain clinical standards.",
    color: "from-primary to-accent",
    image: seniorHealthcareAssistantImg,
  },
  {
    id: "support-workers",
    title: "Support Workers",
    description:
      "Person-centred support workers for daily-living assistance, rehabilitation support and community-based care.",
    color: "from-accent to-secondary",
    image: supportWorkerImg,
  },
  {
    id: "registered-nurses",
    title: "Registered Nurses",
    description:
      "Nurses with current professional registration and clinical experience across acute, community and long-term care settings.",
    color: "from-primary to-primary-light",
    image: nursesImg,
  },

  {
    id: "emergency-cover",
    title: "24/7 Emergency Cover",
    description:
      "Rapid-response cover for urgent staffing gaps — available around the clock to protect continuity of care.",
    color: "from-primary-dark to-accent",
    image: emergencyImg,
  },
  {
    id: "temporary-permanent",
    title: "Temporary & Permanent",
    description:
      "Flexible options including short-term cover, temp-to-perm and permanent recruitment to suit operational needs.",
    color: "from-secondary to-primary-dark",
    image: hourlyCareImg,
  },
  {
    id: "specialized-care",
    title: "Specialized Care",
    description:
      "Specialist staff for dementia, palliative and mental-health support, matched to your service and clinical governance needs.",
    color: "from-accent to-primary",
    image: specializedImg,
  },
];

export const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll("[data-card-index]");
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-subtle">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary text-sm font-semibold">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Practical, Reliable Staffing for Healthcare
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible staffing solutions — temporary cover, permanent hires and
            specialist placements delivered with transparent, professional
            service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isVisible = visibleCards.includes(index);

            return (
              <Link to={`/services#${service.id}`}>
                <Card
                  key={service.title}
                  data-card-index={index}
                  className={`relative min-h-[450px] flex flex-col justify-end p-8 overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/30 hover:-translate-y-2 group ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                    }`}
                  style={{
                    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {/* Background Image with Dark Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 transform-gpu"
                      style={{ backfaceVisibility: "hidden" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 group-hover:via-black/60 transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary-light transition-colors duration-300 drop-shadow-md">
                      {service.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300 drop-shadow-sm">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
