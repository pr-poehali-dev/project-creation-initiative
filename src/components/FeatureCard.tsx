
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/Icon";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-dota-red/20">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-full bg-dota-red/10 flex items-center justify-center mb-4">
          <Icon name={icon} className="w-6 h-6 text-dota-red" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
