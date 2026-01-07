import React from 'react';
import { cn } from '../../lib/utils';
import { Check } from 'lucide-react';

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
    <div className="relative flex items-center">
        <input
            type="checkbox"
            className={cn(
                "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground appearance-none checked:bg-primary checked:border-primary cursor-pointer",
                className
            )}
            ref={ref}
            {...props}
        />
        <Check className="h-3 w-3 text-white absolute top-0.5 left-0.5 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" />
    </div>
));
Checkbox.displayName = "Checkbox";

export { Checkbox };
