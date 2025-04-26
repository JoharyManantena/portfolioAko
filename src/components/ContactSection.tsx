
import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github, Instagram, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

const contactInfo: ContactInfoProps[] = [
  {
    icon: <Mail />,
    label: "Email",
    value: "contact@jeandupont.dev",
    href: "mailto:contact@jeandupont.dev"
  },
  {
    icon: <Phone />,
    label: "Téléphone",
    value: "+33 6 12 34 56 78",
    href: "tel:+33612345678"
  },
  {
    icon: <Linkedin />,
    label: "LinkedIn",
    value: "jean-dupont",
    href: "https://linkedin.com/in/jean-dupont"
  },
  {
    icon: <Github />,
    label: "GitHub",
    value: "@jdupont",
    href: "https://github.com/jdupont"
  },
  {
    icon: <Instagram />,
    label: "Instagram",
    value: "@jdupont.dev",
    href: "https://instagram.com/jdupont.dev"
  },
  {
    icon: <Globe />,
    label: "Site Web",
    value: "jeandupont.dev",
    href: "https://jeandupont.dev"
  }
];

const ContactInfoItem: React.FC<ContactInfoProps> = ({ icon, label, value, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-4 rounded-lg hover:bg-primary/5 transition-colors duration-200"
    >
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary mr-4">
        {icon}
      </div>
      <div>
        <p className="text-sm text-foreground/60">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </a>
  );
};

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai dès que possible.",
      });
      
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-card rounded-xl shadow-sm p-8 border border-border">
            <h3 className="text-2xl font-bold mb-6">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nom
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Sujet
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Sujet de votre message"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Votre message..."
                  rows={5}
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-portfolio-primary hover:bg-portfolio-secondary"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer
                  </span>
                )}
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
            <div className="bg-card rounded-xl shadow-sm p-2 border border-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {contactInfo.map((info) => (
                  <ContactInfoItem
                    key={info.label}
                    icon={info.icon}
                    label={info.label}
                    value={info.value}
                    href={info.href}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
