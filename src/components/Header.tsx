import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-dota-dark text-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/dota-logo.png" alt="Dota 2 Logo" className="h-10" />
          <span className="text-2xl font-bold tracking-tight text-dota-red">Dota 2 Академия</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/heroes" className="hover:text-dota-red transition-colors">
            Герои
          </Link>
          <Link to="/mechanics" className="hover:text-dota-red transition-colors">
            Механики
          </Link>
          <Link to="/guides" className="hover:text-dota-red transition-colors">
            Гайды
          </Link>
          <Link to="/tournaments" className="hover:text-dota-red transition-colors">
            Турниры
          </Link>
        </nav>
        
        <Button className="md:hidden" variant="ghost" size="icon">
          <Icon name="Menu" className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;