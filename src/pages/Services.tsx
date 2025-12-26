import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  Users,
  Heart,
  Clock,
  Shield,
  Award,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT_NUMBER } from "@/lib/constants";
import servicesBg from "@/assets/services/services-bg.jpg";
import healthcareAssistantsImg from "@/assets/services/healthcare-assistants.jpg";
import seniorHealthcareAssistantImg from "@/assets/services/senior-healthcare-assistant.jpg";
import supportWorkersImg from "@/assets/services/support-worker.jpg";
import registeredNursesImg from "@/assets/services/nurses.jpg";
import emergencyCoverImage from '@/assets/services/emergency.jpg';
import hourlyHomeCareImg from "@/assets/services/hourly-care.jpg";
import specializedCareImg from "@/assets/services/specialized.jpg";

const services = [
  {
    id: "healthcare-assistants",
    icon: Heart,
    title: "Healthcare Assistants",
    image: healthcareAssistantsImg,
    shortDesc:
      "Compassionate and trained healthcare assistants ready to provide quality care and support to patients in hospitals, care homes, and private settings.",
    fullDesc:
      "Our healthcare assistants are trained to the highest standards with Care Certificate completion and hands-on experience in patient care. They provide essential support in hospitals, care homes, and community settings with professionalism and empathy.",
    features: [
      "Care Certificate qualified",
      "Enhanced DBS checked",
      "Training in personal care and infection control",
      "Experience with elderly, dementia, and palliative care",
      "Medication administration support",
      "Manual handling certified",
    ],
    color: "from-secondary to-primary",
  },
  {
    id: "senior-healthcare-assistants",
    icon: Heart,
    title: "Senior Healthcare Assistants",
    image: seniorHealthcareAssistantImg,
    shortDesc:
      "Experienced senior healthcare assistants skilled in managing patient care and supervising junior staff.",
    fullDesc:
      "Our senior healthcare assistants bring additional leadership and clinical experience. They supervise care teams, support complex care needs, and ensure high standards of practice across shifts.",
    features: [
      "Proven supervisory experience",
      "Advanced clinical skills",
      "Safeguarding and leadership training",
      "Experience in rota management",
      "Mentoring and competency assessments",
      "Enhanced DBS clearance",
    ],
    color: "from-primary to-accent",
  },
  {
    id: "support-workers",
    icon: Users,
    title: "Support Workers",
    image: supportWorkersImg,
    shortDesc:
      "Dedicated support workers offering personalized care and assistance.",
    fullDesc:
      "Our support workers provide compassionate assistance to individuals requiring help with daily living activities. They work in residential settings, supported living environments, and provide community-based support with person-centered care approaches.",
    features: [
      "Person-centered care training",
      "Enhanced DBS clearance",
      "Mental health awareness training",
      "Learning disabilities support experience",
      "Safeguarding qualified",
      "Communication and behaviour support skills",
    ],
    color: "from-accent to-secondary",
  },
  {
    id: "registered-nurses",
    icon: Stethoscope,
    title: "Registered Nurses",
    image: registeredNursesImg,
    shortDesc:
      "Highly qualified registered nurses with extensive experience in various healthcare settings, available for short or long-term placements.",
    fullDesc:
      "Our registered nurses are fully qualified with NMC registration and bring extensive experience across acute, community, and specialised care settings. Each RN undergoes rigorous verification of qualifications, enhanced DBS checks, and continuous professional development.",
    features: [
      "NMC registered with valid PIN",
      "Minimum 2 years post-registration experience",
      "Specialised training in various medical fields",
      "Regular competency assessments",
      "Available for all shifts including nights and weekends",
      "Experience in NHS and private healthcare settings",
    ],
    color: "from-primary to-primary-light",
  },
  {
    id: "emergency-cover",
    icon: Clock,
    title: "24/7 Emergency Cover",
    image: emergencyCoverImage,
    shortDesc:
      "Round-the-clock availability for emergency staffing requirements. We respond quickly to ensure continuity of care in critical situations.",
    fullDesc:
      "Our 24/7 emergency response team ensures you never face staffing shortages. We maintain a pool of immediately available healthcare professionals ready to step in at short notice, ensuring continuity of care in critical situations.",
    features: [
      "Same-day placements available",
      "Dedicated emergency response team",
      "Pre-vetted pool of available staff",
      "24-hour operations centre",
      "Emergency contact protocols",
      "Rapid mobilisation procedures",
    ],
    color: "from-primary-dark to-accent",
  },
  {
    id: "temporary-permanent",
    icon: Shield,
    title: "Temporary & Permanent",
    image: hourlyHomeCareImg,
    shortDesc:
      "Flexible staffing solutions including temporary cover, temp-to-perm placements, and permanent recruitment to meet your specific needs.",
    fullDesc:
      "Whether you need short-term cover or permanent staff, we provide comprehensive recruitment solutions tailored to your facility's requirements. Our temp-to-perm options allow you to assess candidates before making permanent commitments.",
    features: [
      "Temporary single shifts to long-term contracts",
      "Permanent placement services",
      "Temp-to-perm trial periods",
      "Block booking discounts",
      "Flexible notice periods",
      "Guaranteed replacement if unsuitable",
    ],
    color: "from-secondary to-primary-dark",
  },
  {
    id: "specialized-care",
    icon: Award,
    title: "Specialized Care",
    image: specializedCareImg,
    shortDesc:
      "Specialist healthcare professionals for dementia care, palliative care, mental health support, and other specialised medical requirements.",
    fullDesc:
      "We provide healthcare professionals with specialised training and experience in complex care areas including dementia care, palliative care, mental health, learning disabilities, and critical care nursing.",
    features: [
      "Dementia care specialists",
      "Palliative and end-of-life care",
      "Mental health nursing",
      "Learning disabilities support",
      "Critical care and ICU experience",
      "Specialist training and certifications",
    ],
    color: "from-accent to-primary",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-32 md:pt-48 md:pb-40 lg:pt-56 lg:pb-48 bg-gradient-hero relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={servicesBg}
            alt="Healthcare services background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
          <div className="absolute inset-0 bg-primary/20" />
        </div>
        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
              <span className="text-primary text-sm font-semibold">
                Comprehensive Healthcare Staffing
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Professional healthcare staff solutions for every need. From
              registered nurses to specialized care professionals, we provide
              fully vetted, qualified staff 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.title}
                  id={service.id}
                  className="relative rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500 min-h-[600px] lg:min-h-[500px]"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* Gradient Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/70 to-foreground/80 group-hover:from-foreground/75 group-hover:via-foreground/65 group-hover:to-foreground/75 transition-all duration-500" />

                  {/* Additional overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

                  {/* Subtle pattern overlay for texture */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] opacity-30" />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col p-8 md:p-12 lg:p-16">
                    <div className="flex-1 flex flex-col justify-between">
                      {/* Top Section: Icon and Title */}
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-4 shadow-lg flex-shrink-0`}
                          >
                            <Icon className="w-full h-full text-white" />
                          </div>
                          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            {service.title}
                          </h2>
                        </div>

                        <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                          {service.fullDesc}
                        </p>
                      </div>

                      {/* Bottom Section: Features and CTA */}
                      <div className="grid lg:grid-cols-2 gap-8 items-end mt-8">
                        {/* Features List */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-xl">
                          <h3 className="text-xl font-semibold text-white mb-5 flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-accent" />
                            Key Features
                          </h3>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {service.features.map((feature) => (
                              <div
                                key={feature}
                                className="flex items-start gap-2.5 text-white/90 text-sm"
                              >
                                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-col gap-4 lg:items-end">
                          <Button
                            size="lg"
                            className="bg-white text-primary hover:bg-white/90 shadow-xl text-lg px-8 py-6 group/btn w-full lg:w-auto"
                          >
                            Request This Service
                            <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                          <p className="text-white/80 text-sm text-center lg:text-right">
                            Available 24/7 for immediate placement
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500 pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Healthcare Staff?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to discuss your staffing requirements. Our team
              is ready to help 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8"
              >
                <Link to={"/contact"}>Get in Touch</Link>
              </Button>
              <a href={`tel:${CONTACT_NUMBER}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white  hover:bg-white hover:text-primary text-lg px-8"
                >
                  Call: {CONTACT_NUMBER}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
