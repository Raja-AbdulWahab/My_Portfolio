import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Pulling IDs from the .env file
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // These keys (from_name, etc.) MUST match your EmailJS template {{ }}
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast({
          variant: "destructive",
          title: "Message failed",
          description: "Something went wrong. Please try again later.",
        });
      })
      .finally(() => {
        setIsSending(false);
      });
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
        <div className="text-white space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              Contact <span className="text-cyan">Me</span>
            </h2>
            <h3 className="text-2xl font-semibold text-white/90">Let's Work Together</h3>
            <p className="text-gray-400 max-w-md">
              Feel free to reach out — I'm always open to new opportunities!
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
              >
                <social.icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-white/5 border-white/10 text-white"
            />
            <Input
              type="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-white/5 border-white/10 text-white"
            />
            <Input
              placeholder="Enter Your Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
              className="bg-white/5 border-white/10 text-white"
            />
            <Textarea
              placeholder="Enter Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="min-h-[200px] bg-white/5 border-white/10 text-white"
            />
            <Button
              type="submit"
              disabled={isSending}
              className="w-full bg-cyan hover:bg-cyan/90 text-gray-900 font-semibold"
            >
              {isSending ? "Sending..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;