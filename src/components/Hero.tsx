
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div 
        className="relative h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')" }}
      >
        <div className="container mx-auto px-4 h-full flex items-center z-20 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-dota-red">
              Научись играть в Dota 2 как профессионал
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Пошаговые руководства, советы от профессионалов и детальный разбор героев
              помогут вам улучшить свои навыки и подняться в рейтинге.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-dota-red hover:bg-red-700">
                <Link to="/guides">Начать обучение</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-dota-red text-dota-red hover:bg-dota-red/10">
                <Link to="/heroes">Изучить героев</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
