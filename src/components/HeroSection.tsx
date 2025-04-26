
import React, { Suspense } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroCanvas from "./three/HeroCanvas";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <Suspense fallback={<div className="h-full w-full bg-portfolio-dark/5" />}>
          <HeroCanvas />
        </Suspense>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="flex flex-col items-start justify-center max-w-3xl">
          <p className="text-portfolio-primary font-medium mb-2 animate-fade-in">
            Bonjour, je suis
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Jean Dupont
          </h1>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground/80 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Développeur <span className="gradient-text">Web & Mobile</span>
          </h2>
          
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Je crée des expériences web et mobiles attrayantes, en utilisant les technologies modernes
            pour construire des produits accessibles et performants.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button asChild className="bg-portfolio-primary hover:bg-portfolio-secondary transition-colors">
              <a href="#projects">Voir mes projets</a>
            </Button>
            
            <Button asChild variant="outline">
              <a href="#contact">Me contacter</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center animate-fade-in">
        <span className="text-sm text-foreground/50 mb-2">Défiler</span>
        <ArrowDown className="h-4 w-4 text-foreground/50 animate-float" />
      </div>
    </section>
  );
};

export default HeroSection;
