import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-portfolio-primary to-portfolio-secondary" />
              <span className="text-xl font-display font-bold">
                My<span className="text-portfolio-primary">Folio</span>
              </span>
            </div>
            <p className="text-foreground/70 max-w-md">
              Développeur web et mobile passionné par la création d'applications modernes, performantes et sur mesure.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/JoharyManantena" // <- Remplacer par ton vrai lien GitHub
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/80 hover:text-foreground transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/johary-andrianjafinoro-9091a3271" // <- Remplacer par ton vrai lien LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/80 hover:text-foreground transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:JoharyManantena27@gmail.com" // <- Remplacer par ton email
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/80 hover:text-foreground transition-colors"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://www.instagram.com/johary_manantena/.dev" // <- Remplacer par ton Instagram si tu veux
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/80 hover:text-foreground transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Johary Manantena . Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
