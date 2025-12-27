import { useState, useEffect } from 'react';

export const useCarousel = (itemsLength, autoPlayInterval = 10000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCurrentIndex((prev) => (prev + 1) % itemsLength);
          return 10;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isAutoPlay, itemsLength]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % itemsLength);
    setTimeLeft(10);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + itemsLength) % itemsLength);
    setTimeLeft(10);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
    setTimeLeft(10);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  return {
    currentIndex,
    timeLeft,
    isAutoPlay,
    goToNext,
    goToPrev,
    goToIndex,
    toggleAutoPlay,
  };
};