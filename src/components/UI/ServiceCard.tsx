import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  linkText?: string;
}

const ServiceCard = ({ title, description, icon: Icon, link, linkText = "Learn More" }: ServiceCardProps) => {
  return (
    <Card className="card-hover h-full">
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <CardDescription className="text-base">{description}</CardDescription>
        <Button asChild variant="outline" className="w-full">
          <Link to={link}>{linkText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;