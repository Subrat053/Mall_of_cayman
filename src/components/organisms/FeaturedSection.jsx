import { FeaturedItem } from '../molecules/FeaturedItem';

export const FeaturedSection = ({ title, items, type = 'store' }) => (
    <div className="mb-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-white font-bold text-xl md:text-2xl">{title}</h2>
            <a href="#" className="text-yellow-300 hover:text-yellow-200 text-sm md:text-base">Show all →</a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item, idx) => (
                <FeaturedItem
                    key={idx}
                    number={idx + 1}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    type={type}
                />
            ))}
        </div>
    </div>
);