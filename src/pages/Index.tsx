import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ProductCard } from '@/components/ProductCard';
import { PopButton } from '@/components/PopButton';
import { Badge } from '@/components/ui/badge';
import { Zap, Truck, RefreshCw, HeartHandshake } from 'lucide-react';

const Index = () => {
  const products = [
    {
      id: '1',
      name: 'Groovy Sunset Tee',
      price: 29.99,
      originalPrice: 39.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      category: 'T-Shirts',
      isNew: true,
      isSale: true,
    },
    {
      id: '2',
      name: 'Retro Vibes Jacket',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400',
      category: 'Outerwear',
      isNew: true,
    },
    {
      id: '3',
      name: 'Pop Art Sneakers',
      price: 69.99,
      originalPrice: 89.99,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400',
      category: 'Shoes',
      isSale: true,
    },
    {
      id: '4',
      name: 'Funky Pattern Dress',
      price: 54.99,
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400',
      category: 'Dresses',
    },
    {
      id: '5',
      name: 'Neon Dreams Hoodie',
      price: 44.99,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400',
      category: 'Hoodies',
      isNew: true,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      
      {/* Categories Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern-small opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-bungee text-4xl lg:text-5xl text-pop-orange mb-4">
              SHOP BY VIBE
            </h2>
            <p className="font-fredoka text-xl text-gray-600">
              Find your perfect retro style! 🎨
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {['T-SHIRTS', 'DRESSES', 'ACCESSORIES', 'SHOES'].map((category, index) => {
              const colors = ['orange', 'pink', 'yellow', 'blue'] as const;
              return (
                <div key={category} className="text-center group cursor-pointer">
                  <div className={`comic-frame bg-pop-${colors[index]} p-8 hover:scale-105 transition-transform duration-300`}>
                    <div className="w-20 h-20 bg-white rounded-full border-4 border-black mx-auto mb-4 flex items-center justify-center">
                      <Zap className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="font-bungee text-xl text-white mb-2">{category}</h3>
                    <p className="font-fredoka text-white/80">50+ Items</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-pop-gradient relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="bg-pop-yellow text-black font-bungee text-lg border-4 border-black mb-4">
              🔥 HOT PICKS 🔥
            </Badge>
            <h2 className="font-bungee text-4xl lg:text-5xl text-white mb-4">
              TRENDING NOW
            </h2>
            <p className="font-fredoka text-xl text-white/90">
              The coolest items everyone's talking about!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <PopButton variant="yellow" className="text-xl py-8 px-12" handDrawn>
              VIEW ALL PRODUCTS 👀
            </PopButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern-small opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'FREE SHIPPING', desc: 'On orders over $50' },
              { icon: RefreshCw, title: 'EASY RETURNS', desc: '30-day return policy' },
              { icon: HeartHandshake, title: '24/7 SUPPORT', desc: 'Always here to help' },
              { icon: Zap, title: 'FAST DELIVERY', desc: '2-3 business days' },
            ].map((feature, index) => {
              const colors = ['orange', 'pink', 'yellow', 'blue'] as const;
              return (
                <div key={feature.title} className="text-center group">
                  <div className={`w-20 h-20 bg-pop-${colors[index]} rounded-full border-4 border-black mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bungee text-lg mb-2">{feature.title}</h3>
                  <p className="font-fredoka text-gray-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-pop-pink relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-bungee text-4xl lg:text-5xl text-white mb-4">
            JOIN THE CLUB!
          </h2>
          <p className="font-fredoka text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get the latest drops, exclusive deals, and retro vibes delivered straight to your inbox! 📬
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Your groovy email..."
              className="flex-1 px-6 py-4 border-4 border-black rounded-full hand-drawn font-fredoka text-lg"
            />
            <PopButton variant="yellow" className="py-4 px-8" handDrawn>
              SUBSCRIBE! ✨
            </PopButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern-small opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h3 className="font-bungee text-3xl text-pop-orange mb-4">POP SHOP</h3>
            <p className="font-fredoka text-lg mb-8">Spreading retro vibes since 2024! 🎉</p>
            
            <div className="flex justify-center gap-8 mb-8">
              <a href="#" className="font-fredoka hover:text-pop-orange transition-colors">About</a>
              <a href="#" className="font-fredoka hover:text-pop-pink transition-colors">Contact</a>
              <a href="#" className="font-fredoka hover:text-pop-yellow transition-colors">FAQ</a>
              <a href="#" className="font-fredoka hover:text-pop-blue transition-colors">Shipping</a>
            </div>
            
            <p className="font-fredoka text-sm text-gray-400">
              © 2024 Pop Shop. All rights reserved. Made with 💖 and lots of retro vibes!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;