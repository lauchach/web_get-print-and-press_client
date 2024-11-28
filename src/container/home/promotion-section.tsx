import PromotionBlog from '@/components/common/promotion-blog';
import { URL_PRODUCT_PROMOTION } from '@/constant/url/url';
import { requestGet } from '@/utils/request';

type Props = {};

const PromotionSection = async (props: Props) => {
  let res;
  try {
    const response = await requestGet(URL_PRODUCT_PROMOTION);

    if (!response.status) {
      return null;
    }

    res = response;
  } catch (error) {
    return null;
  }

  return <PromotionBlog promotionList={res.results} />;
};

export default PromotionSection;

export const dynamic = 'force-dynamic';
