import Layout from '@/components/Layout/Layout';
import Hero from '@/components/UI/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Brain, Target, CheckCircle, Star } from 'lucide-react';
import heroTrainingImage from '@/assets/hero-training.jpg';

const Training = () => {
  const programs = [
    {
      icon: Brain,
      title: "AI Fundamentals Workshops",
      description: "Comprehensive introduction to AI technologies and their practical applications in business",
      duration: "2-3 days",
      level: "Beginner to Intermediate"
    },
    {
      icon: Target,
      title: "Business Integration Consulting",
      description: "Strategic guidance on implementing AI and technology solutions within existing business processes",
      duration: "Ongoing",
      level: "All levels"
    },
    {
      icon: Users,
      title: "Customized Training for Teams",
      description: "Tailored training programs designed specifically for your organization's needs and goals",
      duration: "Flexible",
      level: "Customized"
    }
  ];

  const benefits = [
    "Hands-on learning with real-world applications",
    "Expert trainers with East African market experience",
    "Flexible training schedules to fit your business needs",
    "Post-training support and consultation",
    "Certification upon completion",
    "Access to exclusive resources and materials"
  ];

  const whyChooseUs = [
    {
      title: "Local Expertise",
      description: "Deep understanding of East African business landscape and challenges"
    },
    {
      title: "Practical Approach",
      description: "Focus on actionable insights and real-world implementation"
    },
    {
      title: "Proven Results",
      description: "Track record of successful technology adoption across various industries"
    },
    {
      title: "Ongoing Support",
      description: "Continued guidance and support even after training completion"
    }
  ];

  return (
    <Layout>
      <Hero
        title="Expert Training and Consultancy"
        subtitle="Empower your team with cutting-edge knowledge in AI integration and business optimization"
        backgroundImage={heroTrainingImage}
        ctaText="Schedule a Session"
        ctaLink="/contact"
      />

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Training Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer training and consultancy on systems solutions, AI integration, and business optimization 
              to help companies leverage technology effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="card-hover h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <program.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{program.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Duration:</span>
                      <span className="text-muted-foreground">{program.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Level:</span>
                      <span className="text-muted-foreground">{program.level}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Training Benefits</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Training</h2>
            <p className="text-lg text-muted-foreground">
              Experienced trainers with real-world East African expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-6 space-y-4">
                  <Star className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-6 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Upgrade Your Team's Skills?
            </h2>
            <p className="text-xl opacity-90">
              Contact us to discuss customized training solutions for your organization.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link to="/contact">Schedule a Training Session</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Training;