export const SidebarAd = ({ title, price, adCount, bgColor, borderColor, textColor }) => (
  <div className={`${bgColor} rounded-lg shadow-lg overflow-hidden`}>
    {/* Header */}
    <div className={`bg-white p-3 md:p-4 border-b-4 ${borderColor}`}>
      <h4 className="font-bold text-xs md:text-sm text-blue-600">{title}</h4>
      <p className="text-gray-600 text-xs">{price}</p>
    </div>

    {/* Content */}
    <div className={`${bgColor} p-4 min-h-40 flex items-center justify-center`}>
      <div className={`text-center ${textColor} font-bold`}>
        <p className="text-sm md:text-base">Featured Ad</p>
        <p className="text-xs mt-2">Ad {adCount}</p>
      </div>
    </div>
  </div>
);