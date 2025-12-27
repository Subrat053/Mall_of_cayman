export const CategoryTag = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${isActive
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white border-2 border-blue-600 text-blue-600 hover:shadow-md'
            }`}
    >
        {label}
    </button>
);