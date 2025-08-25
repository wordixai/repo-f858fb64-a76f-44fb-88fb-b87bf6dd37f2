import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { PopButton } from './PopButton';
import { Heart, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

export function ProductCard({ 
  name, 
  price, 
  originalPrice, 
  image, 
  category, 
  isNew, 
  isSale 
}: ProductCardProps) {
  return (
    <Card className="comic-frame bg-white hover:scale-105 transition-transform duration-300 group">
      <CardContent className="p-0 relative overflow-hidden">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          {isNew && (
            <Badge className="bg-pop-yellow text-black font-bungee text-xs border-2 border-black">
              NEW!
            </Badge>
          )}
          {isSale && (
            <Badge className="bg-pop-pink text-white font-bungee text-xs border-2 border-black">
              SALE!
            </Badge>
          )}
        </div>

        {/* Heart Icon */}
        <button className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full border-2 border-black shadow-pop hover:bg-pop-yellow transition-colors">
          <Heart className="w-4 h-4" />
        </button>

        {/* Product Image */}
        <div className="relative h-64 bg-gradient-to-br from-pop-orange via-pop-pink to-pop-yellow dots-pattern">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Product Info */}
        <div className="p-6 bg-white relative">
          {/* Category */}
          <p className="text-pop-orange font-fredoka font-medium text-sm mb-2 uppercase tracking-wider">
            {category}
          </p>

          {/* Product Name */}
          <h3 className="font-bungee text-lg mb-3 leading-tight">
            {name}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bungee text-2xl text-pop-orange">
              ${price}
            </span>
            {originalPrice && (
              <span className="font-fredoka text-lg text-gray-500 line-through">
                ${originalPrice}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <PopButton 
            variant="orange" 
            className="w-full text-sm py-3"
            handDrawn
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            ADD TO CART
          </PopButton>
        </div>

        {/* Comic dots overlay */}
        <div className="absolute bottom-0 left-0 w-full h-20 dots-pattern-small opacity-30 pointer-events-none" />
      </CardContent>
    </Card>
  );
}