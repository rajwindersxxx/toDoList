interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      className={` fill-white  rounded hover:fill-purple-800 transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
