import { PopButton } from './PopButton';
import { Sparkles, Zap, Star } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-pop-gradient min-h-[80vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 dots-pattern opacity-20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <Sparkles className="w-8 h-8 text-pop-yellow" />
      </div>
      <div className="absolute top-40 right-20 animate-pulse">
        <Zap className="w-12 h-12 text-pop-pink" />
      </div>
      <div className="absolute bottom-32 left-20 bounce-fun">
        <Star className="w-10 h-10 text-pop-cyan" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h2 className="font-bungee text-6xl lg:text-8xl text-white leading-none">
                RETRO
              </h2>
              <h2 className="font-bungee text-6xl lg:text-8xl text-black leading-none -mt-4">
                VIBES
              </h2>
              <div className="bg-pop-yellow hand-drawn p-4 border-4 border-black shadow-pop inline-block transform rotate-2">
                <h3 className="font-bungee text-2xl lg:text-3xl text-black">
                  ARE BACK!
                </h3>
              </div>
            </div>

            {/* Subtitle */}
            <p className="font-fredoka text-xl lg:text-2xl text-white font-medium max-w-lg">
              Discover the most groovy collection of retro fashion and accessories! 
              Channel your inner pop star! ✨
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <PopButton variant="yellow" className="text-xl py-8 px-10" handDrawn>
                SHOP NOW! 🛍️
              </PopButton>
              <PopButton variant="pink" className="text-xl py-8 px-10" handDrawn>
                NEW ARRIVALS ⭐
              </PopButton>
            </div>

            {/* Fun Stats */}
            <div className="flex gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="font-bungee text-3xl text-white">1000+</div>
                <div className="font-fredoka text-sm text-white/80">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="font-bungee text-3xl text-white">500+</div>
                <div className="font-fredoka text-sm text-white/80">Groovy Products</div>
              </div>
              <div className="text-center">
                <div className="font-bungee text-3xl text-white">24/7</div>
                <div className="font-fredoka text-sm text-white/80">Fun Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="comic-frame bg-white p-8 transform hover:rotate-2 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?w=600"
                alt="Retro Fashion Model"
                className="w-full h-96 object-cover rounded-lg"
              />
              
              {/* Speech Bubble */}
              <div className="absolute -top-4 -right-4 bg-pop-yellow border-4 border-black p-4 hand-drawn">
                <p className="font-bungee text-lg text-black">WOW!</p>
                <div className="absolute bottom-0 left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-pop-yellow transform translate-y-full"></div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-pop-pink rounded-full border-4 border-black animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-pop-cyan rounded-full border-4 border-black bounce-fun" />
          </div>
        </div>
      </div>
    </section>
  );
}