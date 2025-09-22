import Layout from '@/components/Layout/Layout';
import Hero from '@/components/UI/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Bot, BarChart3, MessageSquare, Clock, TrendingUp, Zap } from 'lucide-react';
import heroAIImage from '@/assets/hero-ai.jpg';

const AIWebsites = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "Intelligent customer service bots that handle inquiries 24/7 with natural language processing"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Comprehensive visitor tracking and behavioral analytics with actionable insights"
    },
    {
      icon: MessageSquare,
      title: "Social Integration",
      description: "Seamless connectivity with WhatsApp, Telegram, Facebook, and Twitter/X platforms"
    }
  ];

  const benefits = [
    "24/7 AI-powered customer support",
    "Data-driven insights for business decisions",
    "Easy social media connectivity and management",
    "Automated lead generation and nurturing",
    "Reduced operational costs",
    "Improved customer satisfaction"
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform Enhancement",
      description: "AI chatbot implementation increased sales by 30% and reduced customer service workload by 50%",
      impact: "+30% Sales"
    },
    {
      title: "Service Business Automation",
      description: "Automated appointment booking and customer inquiries handling improved efficiency by 40%",
      impact: "+40% Efficiency"
    },
    {
      title: "Social Media Integration",
      description: "Multi-platform social media management increased engagement by 60% across all channels",
      impact: "+60% Engagement"
    }
  ];

  return (
    <Layout>
      <Hero
        title="AI-Driven Digital Solutions"
        subtitle="Transform your online presence with intelligent websites and applications powered by artificial intelligence"
        backgroundImage={heroAIImage}
        ctaText="Get a Consultation"
        ctaLink="/contact"
      />

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We create websites and apps managed by AI, featuring chatbots for customer service, real-time visitor 
              reporting and analytics, and seamless integrations with WhatsApp, Telegram, and social platforms like Facebook, Twitter/X.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{service.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Benefits</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Zap className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Real results from our AI-powered solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{study.impact}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{study.description}</p>
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl opacity-90">
              Let our AI experts create a custom solution that drives results for your business.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link to="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AIWebsites;