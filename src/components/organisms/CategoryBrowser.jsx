import { CategoryTag } from '../atoms/CategoryTag';

export const CategoryBrowser = ({ categories, selectedCategory, onCategoryChange }) => (
    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
        <h2 className="text-blue-600 font-bold text-lg md:text-xl mb-4">Browse Categories</h2>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
                <CategoryTag
                    key={category}
                    label={category}
                    isActive={selectedCategory === category}
                    onClick={() => onCategoryChange(category)}
                />
            ))}
        </div>

        {/* Interactive Map */}
        <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-lg p-6 md:p-8 text-center border-2 border-dashed border-blue-300">
            <h3 className="text-blue-600 font-bold mb-2">Interactive Market Map</h3>
            <p className="text-gray-600 mb-4">Category: <span className="font-bold">{selectedCategory}</span></p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-100 p-4 rounded font-semibold text-blue-700">Tier 1: $500</div>
                <div className="bg-red-100 p-4 rounded font-semibold text-red-700">Tier 2: $350</div>
                <div className="bg-blue-50 p-4 rounded font-semibold text-blue-600">Tier 3: $200</div>
            </div>
        </div>
    </div>
);