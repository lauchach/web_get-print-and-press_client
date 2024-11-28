import {
  PromotionMediaPackaging,
  PromotionMediaProductStore,
  PromotionMediaVariousEvent,
} from '@/constant/message/home/message';
import { URL_PRODUCT } from '@/constant/url/url';
import { requestGet } from '@/utils/request';
import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';
const BannerSection = dynamic(() => import('./banner-section'));
const EasyPrintingSection = dynamic(() => import('./easy-printing-section'));
const HomeTitleSection = dynamic(() => import('./home-title'));
const HowToOrder = dynamic(() => import('./how-to-order'));
const OurServiceSection = dynamic(() => import('./our-service-section'));
const PromotionSection = dynamic(() => import('./promotion-section'));
const ViewCatalog = dynamic(() => import('./view-catalog'));
const InterestProduct = dynamic(() => import('@/components/common/interest-product'));
const ProductBlog = dynamic(() => import('@/components/common/product-blog'));

export default async function HomeSection() {
  let result = null;

  try {
    const response = await requestGet(URL_PRODUCT);
    result = response.result;
  } catch (error) {
    console.error('Failed to fetch product data:', error);
  }

  return (
    <Box component={'section'} bgcolor={'white.main'}>
      <BannerSection />
      <HomeTitleSection />
      <EasyPrintingSection />
      <PromotionSection />
      <InterestProduct />
      <OurServiceSection />
      {result?.productPackage && (
        <ProductBlog
          title={PromotionMediaVariousEvent.title}
          subTitle={PromotionMediaVariousEvent.subTitle}
          productList={result.productPackage}
          color="#9B5CAD"
        />
      )}

      {result?.productEvent && (
        <ProductBlog
          title={PromotionMediaProductStore.title}
          subTitle={PromotionMediaProductStore.subTitle}
          productList={result.productEvent}
          color="#E8A752"
        />
      )}
      {result?.productShop && (
        <ProductBlog
          title={PromotionMediaPackaging.title}
          subTitle={PromotionMediaPackaging.subTitle}
          productList={result.productShop}
          color="#18B118"
        />
      )}

      <InterestProduct />
      <HowToOrder
        isShowHowTo={true}
        isShowProcessBuy={true}
        showHowToTop={0}
        showHowToDown={0}
        showProcessBuyTop={100}
        showProcessBuyDown={0}
      />
      <ViewCatalog />
    </Box>
  );
}
