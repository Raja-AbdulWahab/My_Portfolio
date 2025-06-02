
import { Progress } from "./ui/progress";
import { Code, Database, Terminal, Globe } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", icon: <Code className="w-6 h-6 text-[#E34F26]" />, progress: 90 },
    { name: "CSS", icon: <Database className="w-6 h-6 text-[#1572B6]" />, progress: 60 },
    { name: "Javascript", icon: <Globe className="w-6 h-6 text-[#F7DF1E]" />, progress: 85 },
    { name: "React", icon: <Code className="w-6 h-6 text-[#61DAFB]" />, progress: 75 },
    { name: "Node.js", icon: <Terminal className="w-6 h-6 text-[#339933]" />, progress: 80 },
  ];

  const professionalSkills = [
    { name: "Creativity", progress: 90 },
    { name: "Communication", progress: 65 },
    { name: "Problem Solving", progress: 75 },
    { name: "Teamwork", progress: 85 },
  ];

  return (
    <section id="skills" className="min-h-screen bg-darkNavy py-20 px-6 md:px-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-12">
              Technical <span className="text-cyan">Skills</span>
            </h2>
            <div className="space-y-8">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-2 text-white">
                    {skill.icon}
                    <span className="font-medium">{skill.name}</span>
                    <span className="ml-auto">{skill.progress}%</span>
                  </div>
                  <Progress
                    value={skill.progress}
                    className="h-2 bg-darkNavy/50"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-12">
              Professional <span className="text-cyan">Skills</span>
            </h2>
            <div className="grid grid-cols-2 gap-8">
              {professionalSkills.map((skill, index) => (
                <div key={index} className="relative flex items-center justify-center">
                  <svg className="w-36 h-36 transform -rotate-90">
                    <circle
                      cx="72"
                      cy="72"
                      r="65"
                      className="fill-none stroke-darkNavy/50 stroke-[6]"
                    />
                    <circle
                      cx="72"
                      cy="72"
                      r="65"
                      className="fill-none stroke-cyan stroke-[6]"
                      strokeDasharray={`${2 * Math.PI * 65}`}
                      strokeDashoffset={`${2 * Math.PI * 65 * (1 - skill.progress / 100)}`}
                      style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center max-w-[120px] mx-auto">
                    <span className="text-xl font-bold text-cyan">{skill.progress}%</span>
                    <span className="text-white text-xs text-center leading-tight px-2">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
