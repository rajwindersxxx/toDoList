interface ButtonProps {
  children: string;
  className?: string;
  onClick?: () => void;
}

export function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      className={`bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-900 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
