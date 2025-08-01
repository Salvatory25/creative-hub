import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, BookOpen, Users, ShoppingCart, Vote } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Tufaulu Pamoja",
      subtitle: "E-Learning Platform",
      description: "A comprehensive educational platform providing free access to notes, books, and past papers with answers for students from pre-primary to university level. Features admin content management and user-friendly interface.",
      icon: BookOpen,
      technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
      features: ["Free educational resources", "Multi-level content", "Admin dashboard", "PDF downloads"],
      status: "Live",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "University Template System",
      subtitle: "Academic Document Generator",
      description: "An innovative system helping students create professional cover pages, business plans, and proposals with ease. Includes PDF generation, attractive UI, and comprehensive feedback system.",
      icon: Users,
      technologies: ["Laravel", "Vue.js", "PDF.js", "TailwindCSS"],
      features: ["Document templates", "PDF generation", "Feedback system", "Developer profiles"],
      status: "In Development",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "FoodsDelivery System",
      subtitle: "Cultural Food Platform",
      description: "A Laravel-based food delivery platform that displays culturally relevant foods based on user's tribe, age, and region. Features personalized dashboards and user management.",
      icon: ShoppingCart,
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      features: ["Cultural food matching", "User registration", "Personalized dashboard", "Regional filtering"],
      status: "Completed",
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      title: "Voting & Library Systems",
      subtitle: "Administrative Solutions",
      description: "Secure voting system and book borrowing management system built with PHP. Features admin and user roles, authentication, and comprehensive backend security.",
      icon: Vote,
      technologies: ["PHP", "MySQL", "JavaScript", "CSS3"],
      features: ["Secure authentication", "Role-based access", "Admin dashboard", "Book management"],
      status: "Completed",
      color: "from-orange-500 to-orange-600"
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
              My Projects
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the innovative solutions I've built to solve real-world problems 
              and create meaningful impact in education and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="card-shadow hover:card-shadow-hover transition-smooth group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm font-medium text-muted-foreground">
                          {project.subtitle}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge 
                      variant={project.status === 'Live' ? 'default' : project.status === 'Completed' ? 'secondary' : 'outline'}
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="flex-1 group/btn">
                    <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    View Code
                  </Button>
                  <Button variant="gradient" size="sm" className="flex-1 group/btn">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-poppins font-bold text-foreground">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg text-muted-foreground">
              Have a project idea or want to collaborate? I'm always excited to work 
              on innovative solutions that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" className="group">
                Start a Project
                <ExternalLink className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View More Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;