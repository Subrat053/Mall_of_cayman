import { SidebarAd } from '../organisms/SidebarAd';

export const SidebarAds = ({ topAd, middleAd, bottomAd }) => (
  <div className="space-y-4">
    <SidebarAd title="TOP RIGHT" price="300×200 | USD 300/mth" adCount={topAd} bgColor="bg-red-600" borderColor="border-blue-600" textColor="text-white" />
    <SidebarAd title="MIDDLE RIGHT" price="300×200 | USD 250/mth" adCount={middleAd} bgColor="bg-blue-600" borderColor="border-red-600" textColor="text-white" />
    <SidebarAd title="BOTTOM RIGHT" price="300×200 | USD 200/mth" adCount={bottomAd} bgColor="bg-gradient-to-br from-blue-600 to-red-600" borderColor="border-blue-600" textColor="text-white" />
  </div>
);

