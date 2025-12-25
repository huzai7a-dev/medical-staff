import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  Shield,
  Sparkles,
  Users,
  TrendingUp,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { CONTACT_NUMBER } from "@/lib/constants";
import missionBg from "@/assets/mission.jpg";
import { useEffect } from "react";

const coreValues = [
  {
    icon: Heart,
    title: "Care First",
    description:
      "Patient wellbeing is at the heart of every placement we make. We prioritize quality over quantity.",
  },
  {
    icon: Shield,
    title: "Total Trust",
    description:
      "We operate with 100% transparency. Facilities and clinicians know they can rely on our word.",
  },
  {
    icon: Sparkles,
    title: "Smart Staffing",
    description:
      "We use modern tools to make the hiring process fast, simple, and stress-free for everyone.",
  },
  {
    icon: Users,
    title: "Real Partnerships",
    description:
      "We aren't just a recruiter; we are an extension of your team, working toward your specific goals.",
  },
  {
    icon: TrendingUp,
    title: "Always Growing",
    description:
      "The healthcare world changes fast. We constantly evolve our standards to stay ahead of the curve.",
  },
  {
    icon: Target,
    title: "Right Match, First Time",
    description:
      "Our precision screening ensures clinicians fit your facility’s culture and clinical needs perfectly.",
  },
];

const MissionAndVision = () => {
  useEffect(() => {
    document.title = "Our Mission | Care Apex";
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-32 md:pt-48 md:pb-40 lg:pt-56 lg:pb-48 bg-gradient-hero relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={missionBg}
            alt="Mission and Vision background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
          <div className="absolute inset-0 bg-primary/20" />
        </div>

        <div className="container px-4 relative z-10 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
            <span className="text-primary text-sm font-semibold">
              Our Mission and Vision
            </span>
          </div>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
              Our Purpose
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
              Simplifying healthcare staffing by connecting world-class
              clinicians with the facilities that need them most.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm">The Mission</span>
              <h2 className="text-4xl font-bold mt-4 mb-6 text-slate-900">
                Quality Care, Guaranteed by Quality People.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Healthcare staffing shouldn't be a headache. Our mission is to ensure
                that no patient ever goes without care due to staffing gaps. We
                remove the barriers between elite medical talent and the hospitals
                that require their expertise.
              </p>
              <div className="space-y-4">
                {["Rigorous 10-point screening", "24/7 localized support", "Specialist-to-specialist matching"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <Card className="p-8 border-none bg-slate-50 shadow-xl">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Daily Goal</h3>
              <p className="text-slate-600">
                To provide seamless, reliable, and compassionate staffing solutions
                that allow healthcare facilities to focus entirely on what they
                do best: saving lives.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:order-2">
              <span className="text-accent font-bold tracking-widest uppercase text-sm">The Vision</span>
              <h2 className="text-4xl font-bold mt-4 mb-6 text-slate-900">
                The Future of Healthcare Support.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We are building a future where healthcare facilities are never
                understaffed and clinicians always have access to rewarding
                opportunities. We aim to be the UK’s most trusted partner in
                healthcare resilience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <span className="block text-2xl font-bold text-primary">100%</span>
                  <span className="text-sm text-slate-500 uppercase">Compliance</span>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <span className="block text-2xl font-bold text-primary">Reliable</span>
                  <span className="text-sm text-slate-500 uppercase">Placements</span>
                </div>
              </div>
            </div>
            <Card className="lg:order-1 p-8 border-none bg-white shadow-xl">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-accent w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Looking Ahead</h3>
              <p className="text-slate-600">
                We are setting new benchmarks for the industry by combining
                human empathy with data-driven recruitment, ensuring the right
                person is in the right room at the right time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-white">
        <div className="container px-4 text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What We Stand For</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">The principles that guide every handshake and every hire.</p>
        </div>
        <div className="container px-4 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {coreValues.map((value) => (
            <div key={value.title} className="p-6 text-left border-b-2 border-transparent hover:border-primary transition-all group">
              <value.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-16 bg-primary">
        <div className="container px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">Ready to work with Care Apex?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-slate-100">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-primary hover:bg-white/10">
              <a href={`tel:${CONTACT_NUMBER}`}><Phone className="w-4 h-4 mr-2" /> Call Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MissionAndVision;