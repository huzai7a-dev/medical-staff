import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileDown, Users, Heart, ClipboardCheck } from "lucide-react";
import aboutBg from "@/assets/about.jpg";

const Careers = () => {
    return (
        <div className="min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-40 pb-32 md:pt-48 md:pb-40 lg:pt-56 lg:pb-48 bg-gradient-hero relative overflow-hidden min-h-[60vh] flex items-center">
                <div className="absolute inset-0">
                    <img
                        src={aboutBg}
                        alt="Careers background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-hero opacity-80" />
                    <div className="absolute inset-0 bg-primary/20" />
                </div>
                <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Join Our Care Team
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                            Become part of a team dedicated to delivering excellence in healthcare.
                            We are always looking for compassionate professionals to join our network.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-background">
                <div className="container px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">How to Apply</h2>
                        <p className="text-lg text-muted-foreground mb-12">
                            Interested in working with Care Apex? We keep our application process simple.
                            Download our application form, fill it out, and send it back to us.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FileDown className="text-primary w-6 h-6" />
                                </div>
                                <h3 className="font-bold mb-2">1. Download</h3>
                                <p className="text-sm text-muted-foreground">Get the latest version of our application form.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Heart className="text-primary w-6 h-6" />
                                </div>
                                <h3 className="font-bold mb-2">2. Fill Out</h3>
                                <p className="text-sm text-muted-foreground">Complete the form with your professional details.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <ClipboardCheck className="text-primary w-6 h-6" />
                                </div>
                                <h3 className="font-bold mb-2">3. Submit</h3>
                                <p className="text-sm text-muted-foreground">Send it to our recruitment team via email.</p>
                            </div>
                        </div>

                        <a href="/form/apply-form.docx" download>
                            <Button size="lg" className="bg-gradient-primary text-white h-16 px-10 text-xl shadow-glow group">
                                <FileDown className="mr-3 group-hover:animate-bounce" />
                                Download Application Form
                            </Button>
                        </a>

                        <p className="mt-8 text-sm text-muted-foreground">
                            Need help? Feel free to contact our recruitment support team.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Careers;
