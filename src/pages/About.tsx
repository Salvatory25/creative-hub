import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Award, Target, Users } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Higher Diploma in Computer Science",
      description: "Completed with excellence, focusing on software development and system design"
    },
    {
      icon: Award,
      title: "Bachelor's Student",
      description: "Currently pursuing Bachelor's in Computer Science at Arusha Technical College"
    },
    {
      icon: Users,
      title: "Co-founder",
      description: "Co-founded House of Solution, developing innovative tech solutions"
    },
    {
      icon: Target,
      title: "Entrepreneur",
      description: "Building projects that solve real-world problems and help communities"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-foreground">
              About Me
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate computer science student and entrepreneur building the future 
              through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-poppins font-bold text-foreground">
                  Salvatory Filbert Machesha
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a dedicated Computer Science student at Arusha Technical College, 
                  where I'm pursuing my Bachelor's degree after completing my Higher Diploma 
                  with distinction. My journey in technology has been driven by a passion 
                  for solving real-world problems through innovative software solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As an entrepreneur and co-founder of House of Solution, I work alongside 
                  my talented partners to create technology that makes a meaningful impact. 
                  Our flagship project, Tufaulu Pamoja, provides free educational resources 
                  to students across all academic levels, democratizing access to quality education.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-poppins font-semibold text-foreground">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {['PHP', 'JavaScript', 'Python', 'C'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Frameworks</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Laravel', 'Flutter', 'React'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Button variant="gradient" size="lg" className="group">
                Download My CV
              </Button>
            </div>

            {/* Achievements Grid */}
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="card-shadow hover:card-shadow-hover transition-smooth">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                        <achievement.icon className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-poppins font-bold text-foreground">
              My Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To leverage technology as a force for positive change, creating solutions 
              that bridge educational gaps and empower communities. Through House of Solution, 
              we're committed to building platforms that democratize access to knowledge 
              and opportunities, particularly in the African context.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">1000+</div>
                <div className="text-sm text-muted-foreground">Students Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">3</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;