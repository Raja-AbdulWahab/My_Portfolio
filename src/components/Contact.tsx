
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/abdul-wahab-30a825292", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="py-20 px-6 md:px-24 bg-darkNavy relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Contact Information */}
        <div className="text-white space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              Contact <span className="text-cyan">Me</span>
            </h2>
            <h3 className="text-2xl font-semibold text-white/90">Let's Work Together</h3>
            <p className="text-gray-400 max-w-md">
              Have a project in mind, a collaboration idea, or just want to say hello?
              <br /><br />
              Feel free to reach out — I'm always open to new opportunities, exciting challenges, or even a quick chat about tech. Whether you're looking for a full stack developer, need help with a web app, or want to discuss UI/UX improvements, I'd love to hear from you.
              <br /><br />
              Let's build something amazing together!
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-400">
              <Mail className="w-5 h-5 text-cyan" />
              <span>rajaabdulwahab201@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Phone className="w-5 h-5 text-cyan" />
              <span>+92 317 5722247</span>
            </div>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/10 rounded-full hover:bg-cyan/20 hover:border-cyan/50 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
            />
            <Input
              type="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
            />
            <Input
              placeholder="Enter Your Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
            />
            <Textarea
              placeholder="Enter Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="min-h-[200px] bg-white/5 border-white/10 text-white placeholder:text-gray-400"
            />
            <Button
              type="submit"
              className="w-full bg-cyan hover:bg-cyan/90 text-gray-900 font-semibold"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
