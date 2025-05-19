import clsx from 'clsx';

type Variant = 'primary' | 'secondary' | 'transparent';

type ButtonProps = {
  children?: React.ReactNode;
  variant: Variant;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  className,
  type = 'button',
  variant,
  ...props
}: ButtonProps) => {
  const baseStyles = `py-1 px-2 rounded-md font-medium transition cursor-pointer ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  const variantStyles: Record<Variant, string> = {
    primary: `bg-indigo-600 hover:bg-indigo-700 hover:shadow-md focus:ring-indigo-500 text-white`,
    secondary: `text-gray-800 hover:bg-gray-100 hover:shadow-sm focus:ring-gray-400 disabled:opacity-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2`,
    transparent: `bg-transparent text-indigo-600 hover:text-indigo-700 font-semibold border-none shadow-none focus:outline-none focus:ring-0`,
  };

  return (
    <button type={type} className={clsx(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </button>
  );
};
