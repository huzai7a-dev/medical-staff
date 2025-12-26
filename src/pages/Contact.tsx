import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { CONTACT_NUMBER, CONTACT_EMAIL, ADDRESS } from "@/lib/constants";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { sendToWhatsApp, submitForm } from "@/lib/submitForm";
import { useSearchParams } from "react-router-dom";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    details: CONTACT_NUMBER,
    subtext: "24/7 Emergency Line",
    color: "from-primary to-primary-light",
  },
  {
    icon: Mail,
    title: "Email",
    details: CONTACT_EMAIL,
    subtext: "We respond within 2 hours",
    color: "from-secondary to-primary",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ADDRESS,
    subtext: "",
    color: "from-accent to-secondary",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: "Mon-Fri: 8:00 AM - 6:00 PM",
    subtext: "Emergency: 24/7",
    color: "from-primary-dark to-accent",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [params] = useSearchParams();
  const selectedService = params.get('service');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: selectedService || "",
    message: "",
  });

  console.log(selectedService, 'selectedService')
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.organization || !formData.service || !formData.message) {
      toast({
        title: "Error!",
        description: "Please fill out all fields.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!validateForm()) {
      setLoading(false);
      return;
    }
    try {
      await submitForm(formData);
      sendToWhatsApp(formData);
      toast({
        title: "Message Sent!",
        description:
          "Thank you for contacting us. We'll get back to you within 2 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Error!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
              <span className="text-primary text-sm font-semibold">
                Get In Touch
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Have questions about our services? Need urgent staffing? We're
              here to help 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Card
                  key={method.title}
                  className="p-8 text-center hover:shadow-smooth-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} p-4 mb-6 mx-auto`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-xl font-bold text-primary mb-1">
                    {method.details}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {method.subtext}
                  </p>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="max-w-3xl mx-auto">
            {/* Form */}
            <Card className="p-8 md:p-10 shadow-smooth-lg border-border/50">
              <h2 className="text-3xl font-bold text-foreground mb-2 text-center">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8 text-center">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={CONTACT_NUMBER}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="organization">Organization/Facility</Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Hospital/Care Home Name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Interested In</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-2 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="Registered Nurses">Registered Nurses</option>
                    <option value="Healthcare Assistants">
                      Healthcare Assistants
                    </option>
                    <option value="Senior Healthcare Assistants">Senior Healthcare Assistants
                    </option>
                    <option value="Support Workers">Support Workers</option>
                    <option value="Emergency Cover">
                      24/7 Emergency Cover
                    </option>
                    <option value="Temporary and Permanent">
                      Temporary & Permanent
                    </option>
                    <option value="Specialized Care">Specialized Care</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your staffing needs..."
                    required
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-gradient-primary text-white group"
                >
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
