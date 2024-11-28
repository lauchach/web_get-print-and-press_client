import { URL_BANNER } from '@/constant/url/url';
import { requestGet } from '@/utils/request';
import CarouselSection from './carousel';

type Props = {};

export interface IBannaerProps {
  id: number;
  title: string;
  keyword: string;
  isActive: boolean;
  BannerImage: {
    imagePath: string;
    googleImage: string;
  };
}

const BannerSection = async (props: Props) => {
  let results = new Array();

  try {
    const res = await requestGet(URL_BANNER);
    if (!res.status) {
      return null;
    }

    results = res.results;
  } catch (error) {
    return null;
  }

  return results?.length > 0 ? <CarouselSection imageLists={results} /> : null;
};

export default BannerSection;

export const dynamic = 'force-dynamic';
