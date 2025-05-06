
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type HeroProps = {
  name: string;
  image: string;
  attribute: "strength" | "agility" | "intelligence";
};

const heroes: HeroProps[] = [
  {
    name: "Pudge",
    image: "https://images.unsplash.com/photo-1624138784004-355755e22635?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    attribute: "strength"
  },
  {
    name: "Invoker",
    image: "https://images.unsplash.com/photo-1618242344331-eec7065421c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    attribute: "intelligence"
  },
  {
    name: "Phantom Assassin",
    image: "https://images.unsplash.com/photo-1611723443066-16883f577404?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    attribute: "agility"
  },
  {
    name: "Crystal Maiden",
    image: "https://images.unsplash.com/photo-1621069427528-b83fdd10b756?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    attribute: "intelligence"
  }
];

const HeroCard = ({ hero }: { hero: HeroProps }) => {
  const attributeColors = {
    strength: "bg-red-600",
    agility: "bg-green-500",
    intelligence: "bg-blue-500"
  };

  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
      <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${attributeColors[hero.attribute]} z-20`}></div>
      <img 
        src={hero.image} 
        alt={hero.name} 
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <h3 className="text-white font-bold text-xl">{hero.name}</h3>
      </div>
    </div>
  );
};

const HeroesSection = () => {
  return (
    <section className="py-16 bg-dota-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Популярные герои</h2>
            <p className="text-gray-300 max-w-2xl">
              Изучите детальные руководства по всем героям Dota 2, от базовых навыков до продвинутых стратегий
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 text-dota-red border-dota-red hover:bg-dota-red/10">
            <Link to="/heroes">Все герои</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {heroes.map((hero) => (
            <HeroCard key={hero.name} hero={hero} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroesSection;
