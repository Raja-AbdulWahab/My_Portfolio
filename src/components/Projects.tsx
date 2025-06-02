
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
      title: "UI/UX Design System",
      description: "A comprehensive mobile app design system with modern UI components",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "#"
    },
    {
      title: "Website Development",
      description: "Full-stack website development with React and Node.js",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      link: "#"
    },
    {
      title: "Mobile Application",
      description: "Cross-platform mobile app with React Native",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      link: "#"
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
