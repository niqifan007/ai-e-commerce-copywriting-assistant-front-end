import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  route?: string;
}

export function FeatureCard({ icon: Icon, title, description, route }: FeatureCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleClick}>
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
}