import { Icon } from "@phosphor-icons/react";
import * as React from "react";

import { cn } from "../lib/tailwind-css";

type InputIconProps = {
  Icon?: Icon;
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  InputIconProps & {
    onSubmit?: VoidFunction;
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, Icon, type, onSubmit, ...props }, ref) => {
    return (
      <div className="gap-5xs relative flex w-full items-center">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-s px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-black placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
        {Icon && (
          <Icon onClick={onSubmit} className="absolute right-4 text-gray-400" />
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
