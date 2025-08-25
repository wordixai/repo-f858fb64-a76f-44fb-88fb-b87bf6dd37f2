import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { PopButton } from './PopButton';
import { Menu, Search, ShoppingCart, User, Heart } from 'lucide-react';

export function Header() {
  return (
    <header className="relative">
      {/* Top Bar */}
      <div className="bg-pop-yellow border-b-4 border-black py-2">
        <div className="container mx-auto px-4">
          <p className="text-center font-fredoka font-medium text-black">
            🎉 FREE SHIPPING on orders over $50! Use code: POPFUN 🎉
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b-6 border-black shadow-pop relative">
        <div className="absolute inset-0 dots-pattern opacity-10" />
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex items-center justify-between">
            {/* Mobile Menu */}
            <button className="lg:hidden p-2 hover:bg-pop-yellow rounded-lg border-2 border-black transition-colors">
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <div className="flex-1 lg:flex-none text-center lg:text-left">
              <h1 className="font-bungee text-4xl lg:text-5xl text-pop-orange bounce-fun">
                POP SHOP
              </h1>
              <p className="font-fredoka text-pop-pink font-medium">Retro Vibes Only!</p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="font-fredoka font-semibold text-lg hover:text-pop-orange transition-colors shake-hover">
                NEW ARRIVALS
              </a>
              <a href="#" className="font-fredoka font-semibold text-lg hover:text-pop-pink transition-colors shake-hover">
                CLOTHING
              </a>
              <a href="#" className="font-fredoka font-semibold text-lg hover:text-pop-yellow transition-colors shake-hover">
                ACCESSORIES
              </a>
              <a href="#" className="font-fredoka font-semibold text-lg hover:text-pop-blue transition-colors shake-hover">
                SALE
              </a>
            </nav>

            {/* Search & Icons */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:flex relative">
                <Input 
                  placeholder="Search for awesome stuff..."
                  className="w-64 border-4 border-black rounded-full hand-drawn pl-4 pr-12 py-3 font-fredoka"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-pop-orange text-white rounded-full border-2 border-black hover:bg-pop-pink transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>

              {/* Icons */}
              <div className="flex items-center space-x-3">
                <button className="p-3 hover:bg-pop-yellow rounded-full border-2 border-black transition-colors shake-hover relative">
                  <Heart className="w-5 h-5" />
                  <Badge className="absolute -top-2 -right-2 bg-pop-pink text-white text-xs border-2 border-black">
                    3
                  </Badge>
                </button>
                
                <button className="p-3 hover:bg-pop-pink rounded-full border-2 border-black transition-colors shake-hover">
                  <User className="w-5 h-5" />
                </button>
                
                <button className="p-3 hover:bg-pop-orange rounded-full border-2 border-black transition-colors shake-hover relative">
                  <ShoppingCart className="w-5 h-5" />
                  <Badge className="absolute -top-2 -right-2 bg-pop-orange text-white text-xs border-2 border-black">
                    2
                  </Badge>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}