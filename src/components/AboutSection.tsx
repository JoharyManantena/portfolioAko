import React from "react";
import { Award, Trophy , Film, Plane, Gamepad } from "lucide-react";

interface HobbyProps {
  icon: React.ReactNode;
  label: string;
}

const hobbies: HobbyProps[] = [
  {
    icon: <Trophy className="h-5 w-5" />,
    label: "Tennis",
  },
  {
    icon: <Trophy className="h-5 w-5" />,
    label: "Basket",
  },
  {
    icon: <Gamepad className="h-5 w-5" />,
    label: "Jeux vidéo",
  }
];

const Hobby: React.FC<HobbyProps> = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center gap-2 bg-primary/5 rounded-lg p-4 transition-all hover:bg-primary/10">
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">À Propos</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="Developer Portrait"
                  className="w-full h-auto aspect-square object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-portfolio-primary/10 backdrop-blur-sm rounded-lg p-4 border border-portfolio-primary/20">
                <div className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-portfolio-primary" />
                  <span className="font-medium">Étudiant 3ᵉ année</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Johary Manantena Andrianjafinoro</h3>
            <p className="text-foreground/80 mb-6">
              Étudiant en 3ᵉ année de Licence Informatique à ITUniversity, passionné par le développement web, la création d'applications et les nouvelles technologies.
            </p>
            <p className="text-foreground/80 mb-6">
              Sérieux, curieux et motivé, je développe des projets web et mobile en toute flexibilité. Je maîtrise plusieurs langages de programmation POO ce qui me permet de m'adapter rapidement à différents environnements et technologies.
            </p>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Centres d'intérêt</h4>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {hobbies.map((hobby) => (
                  <Hobby key={hobby.label} icon={hobby.icon} label={hobby.label} />
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3">Langues</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Malagasy (Natif)</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Anglais (Intermédiaire)</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Français (Professionnel)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
