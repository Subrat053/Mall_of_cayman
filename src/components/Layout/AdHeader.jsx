

// AdHeader.jsx
export default function AdHeader() {
    return (
        <section className="w-full bg-white border border-gray-300 text-gray-900 text-xs sm:text-sm">
            <div className="max-w-7xl mx-auto">
                {/* 2 columns on md+, stacked on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-300">
                    {/* Left: Header Banner */}
                    <div className="p-4 sm:p-6 flex items-center">
                        <p className="leading-relaxed">
                            <span className="font-semibold">Header Banner 728 x 120</span>{" "}
                            (6 Ads 10 sec each) USD 600/mth. 10% Disc 3 mths, 15% Disc for 6 mtgs
                            and 20% Disc for year.
                        </p>
                    </div>

                    {/* Right: Side Bar Header */}
                    <div className="p-4 sm:p-6 flex items-center">
                        <p className="leading-relaxed">
                            <span className="font-semibold">Side Bar Header 220 x 120</span>{" "}
                            (6 Ads 10 sec each) USD 300/mth. 10% Disc 3 mths, 15% Disc for 6 mtgs
                            and 20% Disc for year.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
