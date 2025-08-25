import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface PopButtonProps extends ButtonProps {
  variant?: 'orange' | 'pink' | 'yellow' | 'blue' | 'purple';
  handDrawn?: boolean;
}

const PopButton = forwardRef<HTMLButtonElement, PopButtonProps>(
  ({ className, variant = 'orange', handDrawn = false, children, ...props }, ref) => {
    const variantStyles = {
      orange: 'bg-pop-orange hover:bg-pop-orange/90 text-white',
      pink: 'bg-pop-pink hover:bg-pop-pink/90 text-white',
      yellow: 'bg-pop-yellow hover:bg-pop-yellow/90 text-black',
      blue: 'bg-pop-blue hover:bg-pop-blue/90 text-white',
      purple: 'bg-pop-purple hover:bg-pop-purple/90 text-white',
    };

    return (
      <Button
        ref={ref}
        className={cn(
          'font-bungee text-lg px-8 py-6 shadow-pop hover:shadow-pop-hover transition-all duration-200 shake-hover border-4 border-black transform hover:scale-105',
          variantStyles[variant],
          handDrawn && 'hand-drawn',
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

PopButton.displayName = 'PopButton';

export { PopButton };