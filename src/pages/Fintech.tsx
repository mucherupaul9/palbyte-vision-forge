import Layout from '@/components/Layout/Layout';
import Hero from '@/components/UI/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CreditCard, TrendingUp, Users, DollarSign, CheckCircle, Linkedin } from 'lucide-react';
import heroFintechImage from '@/assets/hero-fintech.jpg';
import paulMucheruImage from '@/assets/paul-mucheru.jpg';
import ecommlipaLogoImage from '@/assets/ecommlipa-logo.jpg';

const Fintech = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Seamless API Integration",
      description: "Easy integration reduces cart abandonment by 40% with smooth checkout experience"
    },
    {
      icon: Users,
      title: "Win-Win-Win Model",
      description: "Benefits for consumers, merchants, and banks with our B2B2C approach"
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Targeting $625M Y5 volume across East Africa with 93.33% EBITDA margins"
    },
    {
      icon: DollarSign,
      title: "Capital Efficient",
      description: "Asset-light model with no credit risk - banks handle all approvals"
    }
  ];

  const teamMembers = [
    {
      name: "Paul Mucheru",
      role: "Managing Director",
      expertise: "Fintech expert with deep financial sector experience",
      linkedin: "#",
      photo: paulMucheruImage
    },
    {
      name: "Alphonse Omesa",
      role: "Head of ICT",
      expertise: "Software engineer with extensive technical leadership",
      linkedin: "#",
      photo: null
    },
    {
      name: "Kevin Owino",
      role: "Lead Developer",
      expertise: "Full-stack expert specializing in fintech solutions",
      linkedin: "#",
      photo: null
    },
    {
      name: "Boniface Cherotwo",
      role: "Senior Developer",
      expertise: "Backend specialist with payment systems expertise",
      linkedin: "#",
      photo: null
    },
    {
      name: "Emmanuel Ngetich",
      role: "Head of Operations & Marketing",
      expertise: "Partnership driver and business development expert",
      linkedin: "#",
      photo: null
    },
    {
      name: "Samuel Ngila",
      role: "Head of Finance",
      expertise: "Financial modeling and compliance specialist",
      linkedin: "#",
      photo: null
    }
  ];

  return (
    <Layout>
      <Hero
        title="Ecommlipa: Revolutionizing BNPL in Africa"
        subtitle="Transform e-commerce with our innovative Buy Now, Pay Later API solution"
        backgroundImage={heroFintechImage}
        ctaText="Learn More"
        ctaLink="/contact"
      />

      {/* What is Ecommlipa */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8 slide-up">
            <div className="flex justify-center mb-6">
              <img 
                src={ecommlipaLogoImage} 
                alt="Ecommlipa Logo" 
                className="h-20 w-auto"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">What is Ecommlipa?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ecommlipa is our flagship fintech solution: an API-embedded Buy Now, Pay Later platform for e-commerce checkouts. 
              Our asset-light B2B2C model ensures no credit risk to us—banks handle approvals with Y1 limits of KES 1,000-100,000, 
              increasing over time. We maintain a 1.5% take rate from our 30% bank fee share.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Stands Out */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Ecommlipa Stands Out</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center">The Ecommlipa Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-6">
                The idea for Ecommlipa was born from a personal experience. Paul Mucheru wanted to buy a KES 30,000 cabinet 
                from a supermarket but had no cash. He was told to pay KES 10,000 upfront and finish paying the full amount 
                after 3 months to take the cabinet. He also witnessed relatives taking smartphones on 'lipa mdogo mdogo' 
                options with exorbitant interest rates.
              </p>
              <p className="leading-relaxed mb-6">
                With his background in the financial sector, Paul envisioned a better solution: connecting merchants with 
                credible financial institutions so customers could take goods on loan, enjoy them while paying back to 
                trusted institutions at fair rates.
              </p>
              <p className="leading-relaxed">
                When his employer didn't pursue the idea, Paul partnered with experts who shared his vision. Together, 
                they built a successful prototype in 2023, demonstrating complete end-to-end functionality and partnering 
                with FasterCapital to secure investment for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Founding Team</h2>
            <p className="text-lg text-muted-foreground">
              The visionaries behind Ecommlipa's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-hover">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 overflow-hidden">
                    {member.photo ? (
                      <img 
                        src={member.photo} 
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Users className="w-12 h-12 text-primary" />
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">{member.expertise}</p>
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold">Strategic Partnership</h2>
            <Card className="card-hover">
              <CardContent className="p-8">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">FasterCapital Partnership</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We've partnered with FasterCapital for raising capital from global investors. This strategic 
                  alliance positions us for rapid growth and expansion across East Africa while maintaining 
                  our commitment to financial inclusion and innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-6 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold">
              Join the Fintech Revolution
            </h2>
            <p className="text-xl opacity-90">
              Partner with us to bring accessible financial solutions to millions across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Link to="/contact">Partner With Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contact">Investment Opportunities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Fintech;