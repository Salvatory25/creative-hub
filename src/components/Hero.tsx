import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/70 to-accent/60" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="animate-float absolute top-20 left-10 w-20 h-20 gradient-card rounded-full opacity-20" />
        <div className="animate-float absolute top-40 right-20 w-16 h-16 gradient-secondary rounded-lg opacity-20" style={{animationDelay: '2s'}} />
        <div className="animate-float absolute bottom-40 left-20 w-12 h-12 gradient-primary rounded-full opacity-20" style={{animationDelay: '4s'}} />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-poppins font-bold leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-white to-accent-foreground bg-clip-text text-transparent">
                Salvatory
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-poppins font-semibold text-white/90">
              Computer Science Student & Entrepreneur
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Pursuing Bachelor's in Computer Science at Arusha Technical College. 
            Co-founder of House of Solution, building innovative tech solutions 
            that make a difference.
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            {['PHP', 'JavaScript', 'Python', 'Laravel', 'Flutter', 'React'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 glass-effect rounded-full text-sm font-medium text-white border border-white/20"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Link to="/projects">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-bounce group">
                View My Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 transition-bounce">
              <Download className="mr-2 w-4 h-4" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <a
              href="#"
              className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-white hover:text-accent transition-smooth hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-white hover:text-accent transition-smooth hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:salvatory@example.com"
              className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-white hover:text-accent transition-smooth hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;