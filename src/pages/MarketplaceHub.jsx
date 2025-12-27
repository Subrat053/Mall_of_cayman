import React, { useState } from 'react';
import { useCarousel } from '../hooks/useCarousel';
// import { Navbar } from '../components/organisms/Navbar';
import { AdCarousel } from '../components/organisms/AdCarousel';
import { Timer } from '../components/atoms/Timer';
import { CategoryBrowser } from '../components/organisms/CategoryBrowser';
import { SidebarAds } from '../components/molecules/SidebarAds';
import { FeaturedSection } from '../components/organisms/FeaturedSection';
// import { Footer } from '../components/organisms/Footer';

export const MarketplaceHub = () => {
  // Sample Data
  const adVertisements = [
    { id: 1, title: 'Premium E-commerce Solutions', company: 'TechStore Inc.' },
    { id: 2, title: 'Digital Marketing Agency', company: 'BrandBoost Co.' },
    { id: 3, title: 'Cloud Hosting Services', company: 'CloudPro Solutions' },
    { id: 4, title: 'Web Design Studio', company: 'PixelWorks Design' },
    { id: 5, title: 'SEO & Analytics Tools', company: 'DataViz Tech' },
    { id: 6, title: 'Business Consulting', company: 'Elite Advisors' },
  ];

  const categories = [
    'All', 'Apparel', 'Arts & Entertainment', 'Automotive', 'Beauty & Fitness',
    'Books & Literature', 'Computers', 'Consumer Electronics', 'Health & Fitness',
    'Home & Garden', 'Legal Services', 'Pest Control', 'Toys & Hobbies', 'Waterports',
  ];

  const featuredStores = [
    { title: 'Premium Store 1', description: 'Quality Products & Services' },
    { title: 'Premium Store 2', description: 'Quality Products & Services' },
    { title: 'Premium Store 3', description: 'Quality Products & Services' },
    { title: 'Premium Store 4', description: 'Quality Products & Services' },
  ];

  const featuredProducts = [
    { title: 'Premium Product 1', description: 'Best Seller', price: '$99.99' },
    { title: 'Premium Product 2', description: 'Best Seller', price: '$99.99' },
    { title: 'Premium Product 3', description: 'Best Seller', price: '$99.99' },
    { title: 'Premium Product 4', description: 'Best Seller', price: '$99.99' },
  ];

  // State Management
  const carousel = useCarousel(adVertisements.length);
  const sidebarCarousel = useCarousel(6);
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 to-blue-900">
      {/* Navigation */}
      {/* <Navbar /> */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <AdCarousel
              ads={adVertisements}
              currentIndex={carousel.currentIndex}
              onNext={carousel.goToNext}
              onPrev={carousel.goToPrev}
              onPlayPause={carousel.toggleAutoPlay}
              isAutoPlay={carousel.isAutoPlay}
              timeLeft={carousel.timeLeft}
            />
          </div>

          <div className="lg:col-span-1">
            <div className="bg-blue-600 rounded-lg overflow-hidden shadow-xl">
              <div className="h-32 flex items-center justify-center text-center">
                <div>
                  <p className="text-white font-semibold text-sm">Side Bar Header</p>
                  <p className="text-white text-xs">220x120 | 6 Ads</p>
                  <p className="text-yellow-300 text-xs mt-2">USD 300/mth</p>
                </div>
              </div>
              <div className="bg-white p-4 border-t-4 border-red-600 text-center">
                <h4 className="text-blue-600 font-bold text-xs mb-2">FEATURED</h4>
                <Timer seconds={carousel.timeLeft} className="justify-center" />
              </div>
            </div>
          </div>
        </div>

        {/* Category & Sidebar Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <CategoryBrowser categories={categories} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          </div>
          <div className="lg:col-span-1">
            <SidebarAds topAd={sidebarCarousel.currentIndex + 1} middleAd={sidebarCarousel.currentIndex + 1} bottomAd={sidebarCarousel.currentIndex + 1} />
          </div>
        </div>

        {/* Featured Sections */}
        {/* <FeaturedSection title="Featured Stores" items={featuredStores} type="store" /> */}
        {/* <FeaturedSection title="Featured Products" items={featuredProducts} type="product" /> */}
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default MarketplaceHub;