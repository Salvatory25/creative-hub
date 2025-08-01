import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "salvatory@houseofsolution.co.tz",
      description: "Send me an email anytime!"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+255 123 456 789",
      description: "Call me for quick discussions"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Arusha, Tanzania",
      description: "Available for local meetups"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      description: "I'll get back to you quickly"
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
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project idea, want to collaborate, or just want to say hello? 
              I'd love to hear from you. Let's build something amazing together!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="card-shadow hover:card-shadow-hover transition-smooth">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Project Collaboration" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project or just say hello..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button variant="gradient" size="lg" className="w-full group">
                    <Send className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-poppins font-bold text-foreground">
                  Let's Connect
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're looking for a development partner, want to discuss 
                  a project, or just want to network, I'm always open to meaningful 
                  conversations. Choose the best way to reach out!
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="card-shadow hover:card-shadow-hover transition-smooth group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-poppins font-semibold text-foreground">
                            {info.title}
                          </h3>
                          <p className="font-medium text-primary">
                            {info.details}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <Card className="card-shadow">
                <CardContent className="p-6">
                  <h3 className="font-poppins font-semibold text-foreground mb-4">
                    Follow Me Online
                  </h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Twitter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-3xl font-poppins font-bold text-foreground">
                What People Say
              </h2>
              <p className="text-lg text-muted-foreground">
                Testimonials from users who have benefited from my projects
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="card-shadow">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground italic leading-relaxed">
                    "Tufaulu Pamoja has been a game-changer for my studies. Having free 
                    access to past papers and study materials has significantly improved 
                    my academic performance. Thank you Salvatory!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-medium">AM</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Amina Mohammed</p>
                      <p className="text-sm text-muted-foreground">University Student</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-shadow">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground italic leading-relaxed">
                    "The University Template System saved me hours of work on my 
                    business plan. The templates are professional and the PDF 
                    generation feature is fantastic."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                      <span className="text-secondary font-medium">JK</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">John Kimani</p>
                      <p className="text-sm text-muted-foreground">Business Student</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;