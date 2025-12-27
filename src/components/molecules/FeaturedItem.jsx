export const FeaturedItem = ({ number, title, description, price, type = 'store' }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-red-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    {/* Placeholder Image */}
    <div className={`w-full ${type === 'store' ? 'h-24' : 'h-32'} bg-gradient-to-br from-blue-100 to-red-100 flex items-center justify-center`}>
      <span className="text-blue-600 font-bold text-lg">{type === 'store' ? 'Store' : 'Product'} {number}</span>
    </div>

    {/* Content */}
    <div className="p-4">
      <h3 className="text-blue-600 font-bold">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      {price && <p className="text-red-600 font-bold mt-2">{price}</p>}
    </div>
  </div>
);