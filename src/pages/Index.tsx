
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HeroesSection from "@/components/HeroesSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* Секция про гайды */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Руководства от профессионалов</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Наши гайды созданы профессиональными игроками и аналитиками с многолетним опытом. 
                  От базовых концепций до сложных механик - мы охватываем все аспекты Dota 2.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-dota-red">✓</span> Подробные видео-уроки с комментариями
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-dota-red">✓</span> Пошаговые инструкции для новичков
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-dota-red">✓</span> Продвинутые стратегии для опытных игроков
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="text-dota-red">✓</span> Анализ реплеев профессиональных матчей
                  </li>
                </ul>
                <Button asChild className="bg-dota-red hover:bg-red-700">
                  <Link to="/guides">Все руководства</Link>
                </Button>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Руководства по Dota 2" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        <HeroesSection />
        
        {/* Секция с отзывами */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Что говорят наши ученики</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"Благодаря курсам Dota 2 Академии я поднялся с 1500 MMR до 3700 всего за 3 месяца. Отличные материалы и поддержка!"</p>
                <p className="font-semibold">- Александр, Москва</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"Наконец-то понял, как правильно фармить и делать стаки. Теперь моя роль керри намного эффективнее, и команда довольна!"</p>
                <p className="font-semibold">- Екатерина, Санкт-Петербург</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"Лучший сайт для тех, кто хочет разобраться в Dota 2. Подробные гайды, полезные советы и отличное сообщество!"</p>
                <p className="font-semibold">- Максим, Киев</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA секция */}
        <section className="bg-dota-dark text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы начать свой путь к победе?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам игроков, которые уже улучшили свои навыки с помощью наших курсов и руководств
            </p>
            <Button asChild size="lg" className="bg-dota-red hover:bg-red-700 text-lg px-8">
              <Link to="/signup">Начать бесплатно</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
