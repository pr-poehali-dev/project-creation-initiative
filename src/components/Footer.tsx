import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-dota-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/dota-logo.png" alt="Dota 2 Logo" className="h-8" />
              <span className="text-xl font-bold tracking-tight text-dota-red">Dota 2 Академия</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Ваш путь к мастерству в мире Dota 2 начинается здесь.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-dota-red transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-dota-red transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-dota-red transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-dota-red transition-colors">
                <Icon name="Twitch" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Обучение</h3>
            <ul className="space-y-2">
              <li><Link to="/guides" className="text-gray-400 hover:text-dota-red transition-colors">Руководства</Link></li>
              <li><Link to="/heroes" className="text-gray-400 hover:text-dota-red transition-colors">Герои</Link></li>
              <li><Link to="/mechanics" className="text-gray-400 hover:text-dota-red transition-colors">Механики</Link></li>
              <li><Link to="/items" className="text-gray-400 hover:text-dota-red transition-colors">Предметы</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Сообщество</h3>
            <ul className="space-y-2">
              <li><Link to="/forum" className="text-gray-400 hover:text-dota-red transition-colors">Форум</Link></li>
              <li><Link to="/tournaments" className="text-gray-400 hover:text-dota-red transition-colors">Турниры</Link></li>
              <li><Link to="/coaches" className="text-gray-400 hover:text-dota-red transition-colors">Тренеры</Link></li>
              <li><Link to="/teams" className="text-gray-400 hover:text-dota-red transition-colors">Команды</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Ресурсы</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-dota-red transition-colors">О нас</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-dota-red transition-colors">Контакты</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-dota-red transition-colors">FAQ</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-dota-red transition-colors">Политика конфиденциальности</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p> {new Date().getFullYear()} Dota 2 Академия. Все права защищены.</p>
          <p className="mt-2 text-sm">Dota 2 является товарным знаком Valve Corporation. Этот сайт не связан с Valve Corporation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;