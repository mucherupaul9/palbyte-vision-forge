import Layout from '@/components/Layout/Layout';
import Hero from '@/components/UI/Hero';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart, Award } from 'lucide-react';
import heroAboutImage from '@/assets/hero-about.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously pushing boundaries with cutting-edge technology solutions"
    },
    {
      icon: Eye,
      title: "Integrity",
      description: "Building trust through transparency and ethical business practices"
    },
    {
      icon: Heart,
      title: "Inclusivity",
      description: "Creating opportunities for all and bridging technology gaps"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering exceptional quality in every project we undertake"
    }
  ];

  return (
    <Layout>
      <Hero
        title="About Palbyte Solutions"
        backgroundImage={heroAboutImage}
        showCta={false}
      />

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold">Company Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2023, Palbyte Solutions is dedicated to bridging technology gaps in Africa through AI and fintech innovations. 
              We are committed to empowering businesses across East Africa with cutting-edge solutions that drive growth and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-6">
                Paul Mucheru wanted to buy a KES 30,000 cabinet from a supermarket but had no cash. He was told to pay KES 10,000 upfront 
                and finish paying the full amount after 3 months to take the cabinet. He also saw relatives taking smartphones on 'lipa mdogo mdogo' 
                options with exorbitant interest rates.
              </p>
              <p className="leading-relaxed mb-6">
                Having worked in the financial sector, he envisioned connecting merchants with credible financial institutions so customers could 
                take goods on loan, enjoy them while paying back to trusted institutions. He pitched the idea to his employer, but it was not considered.
              </p>
              <p className="leading-relaxed">
                Undeterred, Mucheru teamed up with experts Alphonse Omesa, Emmanuel Ngetich, Samuel Ngila, Kevin Owino, and Boniface Cherotwo, 
                who loved the idea, owned it, and built a successful prototype in 2023 demonstrating end-to-end functionality. To raise funds and 
                connect merchants and institutions, they partnered with FasterCapital, which is ready to secure capital from its investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="card-hover">
              <CardContent className="p-8 text-center space-y-4">
                <Target className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-lg text-muted-foreground">
                  To empower African businesses with AI and fintech solutions that drive growth, efficiency, and innovation across the continent.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8 text-center space-y-4">
                <Eye className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className="text-lg text-muted-foreground">
                  To become the leading innovator in East Africa by 2030, setting the standard for AI and fintech solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4 slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="mx-auto w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="opacity-90">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;