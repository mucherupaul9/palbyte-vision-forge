import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
  showCta?: boolean;
}

const Hero = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  ctaText = "Get Started", 
  ctaLink = "/contact",
  showCta = true 
}: HeroProps) => {
  return (
    <section 
      className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-6 fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          {showCta && (
            <div className="pt-4">
              <Button asChild size="lg" variant="hero" className="text-lg px-8 py-4">
                <Link to={ctaLink}>{ctaText}</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  );
};

export default Hero;