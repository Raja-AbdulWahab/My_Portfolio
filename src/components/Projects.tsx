
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Healthcare Analytics Dashboard ",
      description: "A modern, responsive, and data-driven Dashboard Interface built with Next.js, React, and Elastic UI (EUI) components. This dashboard provides a clean analytical overview for teams, agents, KPIs, and performance summaries — designed to adapt beautifully across devices.",
      image: "/My_Portfolio/images/dash.png",
      link: "https://bespoke-blini-5c4989.netlify.app/dashboard"
    },
    {
      title: "Smart Services Hub",
      description: "A full-stack MERN marketplace that streamlines service bookings. Features a multi-role architecture (Admin/Employee/Customer), secure authentication, integrated Stripe payments, and a dynamic dashboard for real-time order tracking and service management.",
      image: "/My_Portfolio/images/SMH.jpeg",
      link: "https://github.com/Raja-AbdulWahab/Smart_Services_Hub"
    },
    {
      title: "TalentSync",
      description: "A data-driven Recruiter Dashboard designed to automate the initial screening process for technical roles. The application evaluates candidate profiles against specific job requirements—such as React, TypeScript, and Responsive Design—to generate a prioritized Match Score.",
      image: "/My_Portfolio/images/recruiter1.png",
      link: "https://github.com/Raja-AbdulWahab/recruiter-ai"
    },
    {
      title: "PeerSync",
      description: "A real-time, peer-to-peer communication platform built with WebRTC and WebSockets, enabling seamless video and text exchange directly between browsers with a custom-built Node.js signaling server.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      link: "https://github.com/Raja-AbdulWahab/Video_Call_App_NextJS_WebRTC"
    },
    {
      title: "FitStats",
      description: "A streamlined React-based dashboard designed to give users a high-level overview of their physical activity. It focuses on clean data presentation, transforming raw workout metrics into actionable visual insights through interactive charts.",
      image: "/My_Portfolio/images/fitness.png",
      link: "https://github.com/Raja-AbdulWahab/Fitness_Tracker_Project"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-darkNavy py-20 px-6 md:px-24">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">
          Featured <span className="text-cyan">Projects</span>
        </h2>
        
        {/* Desktop Carousel */}
        <div className="hidden md:block">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-gradient-to-br from-[#1a1f2c] to-[#0B1221] border-none overflow-hidden group">
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover brightness-75 group-hover:brightness-100 transition-all duration-300"
                      />
                      <a
                        href={project.link}
                        className="absolute top-4 right-4 bg-cyan/20 p-2 rounded-full hover:bg-cyan/40 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5 text-cyan" />
                      </a>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300">{project.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex w-max space-x-4 p-4">
              {projects.map((project, index) => (
                <Card key={index} className="w-80 bg-gradient-to-br from-[#1a1f2c] to-[#0B1221] border-none overflow-hidden group flex-shrink-0">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover brightness-75 group-hover:brightness-100 transition-all duration-300"
                    />
                    <a
                      href={project.link}
                      className="absolute top-4 right-4 bg-cyan/20 p-2 rounded-full hover:bg-cyan/40 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5 text-cyan" />
                    </a>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="mobile-scrollbar" />
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default Projects;
