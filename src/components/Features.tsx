
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Что вы изучите</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Наша платформа предоставляет комплексное обучение всем аспектам игры Dota 2,
            от базовых механик до продвинутых стратегий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Обзор героев"
            description="Детальный разбор всех героев, их способностей, сильных и слабых сторон, а также оптимальных предметов."
            icon="Users"
          />
          <FeatureCard
            title="Базовые механики"
            description="Изучите основы игровой механики: фарм, стаки, тайминги, вардинг и денай."
            icon="Cog"
          />
          <FeatureCard
            title="Командные стратегии"
            description="Научитесь взаимодействовать с командой, выбирать правильные драфты и выигрывать командные сражения."
            icon="Sword"
          />
          <FeatureCard
            title="Позиционирование"
            description="Освойте все пять основных ролей в игре и узнайте, как играть на каждой линии эффективно."
            icon="Map"
          />
          <FeatureCard
            title="Мета-игра"
            description="Будьте в курсе текущей меты, популярных героев и стратегий на профессиональной сцене."
            icon="TrendingUp"
          />
          <FeatureCard
            title="Психология победы"
            description="Развивайте свой менталитет, учитесь справляться с токсичностью и контролировать тильт для более стабильной игры."
            icon="Brain"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
