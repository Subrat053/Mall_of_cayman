import { Timer } from '../atoms/Timer';
import { Button } from '../atoms/Button';

export const AdCarousel = ({ ads, currentIndex, onNext, onPrev, onPlayPause, isAutoPlay, timeLeft }) => {
    const currentAd = ads[currentIndex];

    return (
        <div className="bg-red-600 rounded-lg overflow-hidden shadow-xl">
            {/* Ad Display */}
            <div className="bg-red-600 min-h-32 md:min-h-40 flex items-center justify-center px-4 md:px-6 py-6">
                <div className="text-center text-white">
                    <h3 className="font-bold text-lg md:text-2xl">{currentAd.title}</h3>
                    <p className="text-sm md:text-base mt-2">{currentAd.company}</p>
                </div>
            </div>

            {/* Info and Timer */}
            <div className="bg-red-700 text-white px-4 md:px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                    <p className="font-semibold text-sm md:text-base">Header Banner 728x120</p>
                    <p className="text-xs md:text-sm">6 Ads @ 10 sec each | USD 600/mth</p>
                    <p className="text-yellow-300 text-xs mt-2">10% off (3mo) | 15% off (6mo) | 20% off (1yr)</p>
                </div>
                <Timer seconds={timeLeft} />
            </div>

            {/* Controls */}
            <div className="bg-gray-100 px-4 md:px-6 py-4 flex flex-wrap gap-2 justify-center">
                <Button onClick={onPrev} variant="secondary">← Previous</Button>
                <Button onClick={onPlayPause} variant="danger">{isAutoPlay ? '⏸ Pause' : '▶ Play'}</Button>
                <Button onClick={onNext} variant="secondary">Next →</Button>
            </div>

            {/* Pagination Dots */}
            <div className="bg-gray-100 px-4 py-2 flex justify-center gap-2">
                {ads.map((_, idx) => (
                    <button
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-red-600 w-8' : 'bg-gray-400'}`}
                        aria-label={`Go to ad ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};