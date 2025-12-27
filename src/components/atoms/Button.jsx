export const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    outline: 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded font-semibold transition-all duration-300 text-sm md:text-base ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};