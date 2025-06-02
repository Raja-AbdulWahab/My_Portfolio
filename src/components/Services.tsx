import { Code, LayoutGrid, Server } from "lucide-react";
import { Button } from "./ui/button";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-cyan" />,
      title: "UI/UX Design",
      description:
        "I create clean, user-friendly interfaces with a focus on accessibility and responsive design. My goal is to ensure smooth and intuitive experiences for every user across all devices.",
    },
    {
      icon: <LayoutGrid className="w-12 h-12 text-cyan" />,
      title: "Web Design",
      description:
        "I design modern websites with optimized layouts, clear structure, and mobile-first principles. Using HTML, CSS, Tailwind or Bootstrap, I bring visual consistency to every project.",
    },
    {
      icon: <Server className="w-12 h-12 text-cyan" />,
      title: "Full Stack Development",
      description:
        "I develop scalable web apps using the MERN stack. From backend APIs to frontend UIs, I handle the full development lifecycle with clean, maintainable code.",
    },
  ];

  return (
    <section id="services" className="min-h-screen bg-darkNavy py-20 px-6 md:px-24">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-white">My</span> <span className="text-cyan">Services</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-darkNavy/50 p-8 rounded-lg border border-cyan/20 hover:border-cyan/40 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                {service.icon}
                <h3 className="text-2xl font-semibold text-white mt-6 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>
                <Button
                  variant="outline"
                  className="border-cyan text-cyan hover:bg-cyan hover:text-white transition-colors duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
