
import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";

const Hero = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/abdul-wahab-30a825292" },
    { icon: Github, href: "https://github.com/Raja-AbdulWahab" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center bg-[#0B1221] text-white px-6 py-12 md:px-24">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image - Shows first on mobile */}
        <div className="relative order-1 md:order-2">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto rounded-full relative overflow-hidden border-4 border-[#00E5E8] shadow-[0_0_50px_#00E5E8]">
            <img
              src="./public/images/wahab.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content - Shows second on mobile */}
        <div className="space-y-6 order-2 md:order-1">
          <h2 className="text-xl mb-2">Hello, It's Me</h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Abdul Wahab
          </h1>
          <p className="text-xl">
            And I'm a <span className="text-[#00E5E8]">Full Stack Developer</span>
          </p>
          <p className="text-gray-400 max-w-lg">
            I'm a Full Stack Developer with a passion for building modern, scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). I love crafting clean code, responsive interfaces, and seamless user experiences. With strong skills in Git, Bootstrap, and REST APIs, I turn ideas into powerful digital solutions.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#00E5E8] flex items-center justify-center hover:bg-[#00E5E8] hover:text-white transition-colors duration-300"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
          
          <Button 
            className="bg-[#00E5E8] hover:bg-[#00E5E8]/90 text-white rounded-full px-8"
          >
            More About Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
