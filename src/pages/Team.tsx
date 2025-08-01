import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Github, Users, Lightbulb, Code2 } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Salvatory Filbert Machesha",
      role: "Co-founder & Lead Developer",
      education: "Higher Diploma in Computer Science, Bachelor's Student at Arusha Technical College",
      description: "Passionate entrepreneur and developer with expertise in full-stack development. Leads the technical vision and product development at House of Solution.",
      skills: ["PHP", "JavaScript", "Python", "Laravel", "Flutter"],
      personality: ["Innovative", "Entrepreneurial", "Problem Solver"],
      icon: Code2,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Feisal Ahmad Dengwa",
      role: "Co-founder & Strategy Lead",
      education: "Higher Diploma holder, Bachelor's Student in Computer Science at Arusha Technical College",
      description: "Strategic thinker and entrepreneur who brings business acumen and innovative solutions to House of Solution. Focuses on market analysis and strategic partnerships.",
      skills: ["Business Strategy", "Market Analysis", "Project Management", "Web Development"],
      personality: ["Entrepreneurial", "Strategic", "Innovative"],
      icon: Users,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Ezekiel Leman",
      role: "Co-founder & Innovation Director",
      education: "Skilled technologist and innovator",
      description: "Innovative and skilled co-founder who actively contributes to all major projects. Known for strong technical capabilities and leadership skills that drive the team forward.",
      skills: ["Innovation", "Technical Leadership", "System Design", "Problem Solving"],
      personality: ["Innovative", "Technical Leader", "Collaborative"],
      icon: Lightbulb,
      color: "from-green-500 to-green-600"
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
              House of Solution
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the innovative minds behind House of Solution - a team of passionate 
              entrepreneurs and developers building the future of technology in Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-shadow hover:card-shadow-hover transition-smooth overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Profile Section */}
                  <CardHeader className="lg:col-span-1 bg-gradient-to-br from-muted/30 to-muted/10 flex flex-col items-center text-center space-y-4 p-8">
                    <div className={`w-20 h-20 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center mb-4`}>
                      <member.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-poppins font-bold text-foreground">
                        {member.name}
                      </h3>
                      <Badge variant="secondary" className="mb-2">
                        {member.role}
                      </Badge>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex space-x-3 pt-4">
                      <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  
                  {/* Content Section */}
                  <CardContent className="lg:col-span-2 p-8 space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-poppins font-semibold text-foreground">
                        About {member.name.split(' ')[0]}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h5 className="font-medium text-foreground">Education & Background</h5>
                      <p className="text-sm text-muted-foreground">
                        {member.education}
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h5 className="font-medium text-foreground">Core Skills</h5>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h5 className="font-medium text-foreground">Personality</h5>
                        <div className="flex flex-wrap gap-2">
                          {member.personality.map((trait) => (
                            <span key={trait} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                              {trait}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Vision */}
      <section className="py-16 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-poppins font-bold text-foreground">
                Our Vision & Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                House of Solution was founded with a clear mission: to leverage technology 
                as a catalyst for positive change in Africa and beyond. We believe in 
                creating solutions that bridge gaps, empower communities, and democratize 
                access to opportunities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6 card-shadow">
                <CardContent className="space-y-4 pt-6">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously push boundaries to create cutting-edge solutions 
                    that address real-world challenges.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 card-shadow">
                <CardContent className="space-y-4 pt-6">
                  <div className="w-16 h-16 gradient-secondary rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold">Community</h3>
                  <p className="text-muted-foreground">
                    Our solutions are designed to serve and empower communities, 
                    making technology accessible to everyone.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 card-shadow">
                <CardContent className="space-y-4 pt-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold">Excellence</h3>
                  <p className="text-muted-foreground">
                    We maintain the highest standards in everything we build, 
                    ensuring quality and reliability.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;