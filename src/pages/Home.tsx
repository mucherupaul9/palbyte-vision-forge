import Layout from '@/components/Layout/Layout';
import Hero from '@/components/UI/Hero';
import ServiceCard from '@/components/UI/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Brain, Users, CreditCard, CheckCircle, Globe, Shield } from 'lucide-react';
import heroHomeImage from '@/assets/hero-home.jpg';

const Home = () => {
  const services = [
    {
      title: "AI-Powered Websites & Apps",
      description: "AI-managed websites with chatbots, analytics, and integrations to WhatsApp, Telegram, social platforms.",
      icon: Brain,
      link: "/ai-websites"
    },
    {
      title: "Training & Consultancy",
      description: "Expert guidance on AI integration, systems solutions, and business optimization.",
      icon: Users,
      link: "/training"
    },
    {
      title: "Innovative Fintech",
      description: "Solutions like Ecommlipa for seamless BNPL in e-commerce.",
      icon: CreditCard,
      link: "/fintech"
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: "Cutting-edge AI technology",
      description: "Advanced AI solutions tailored for African businesses"
    },
    {
      icon: Globe,
      title: "Local expertise in East Africa",
      description: "Deep understanding of the East African market and business landscape"
    },
    {
      icon: Shield,
      title: "Partnership with FasterCapital",
      description: "Strategic partnership for global growth and investment opportunities"
    }
  ];

  return (
    <Layout>
      <Hero
        title="Innovative AI and Fintech Solutions for Africa's Future"
        subtitle="Palbyte Solutions: Empowering Businesses with AI-Driven Websites, Training, and Fintech Innovations like Ecommlipa"
        backgroundImage={heroHomeImage}
        ctaText="Get Started"
        ctaLink="/contact"
      />

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Palbyte Solutions is a leading Kenyan tech company specializing in three core areas:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4 slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-6 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold">
              Contact us to transform your business
            </h2>
            <p className="text-xl opacity-90">
              Ready to revolutionize your business with AI and fintech solutions? Get in touch with our experts today.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;