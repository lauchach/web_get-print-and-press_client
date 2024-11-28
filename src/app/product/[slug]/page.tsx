import { URL_PRODUCT } from '@/constant/url/url';
import HowToOrder from '@/container/home/how-to-order';
import DetailRecommend from '@/container/product-detail/detail-recommend';
import DetailSection from '@/container/product-detail/detail-section';
import { requestGetParams } from '@/utils/request';
import Box from '@mui/material/Box';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.slug;

  switch (id) {
    case '1':
      return {
        title: 'รับทำป้ายโรลอัพ (Roll Up) พิมพ์สีคมชัดคุณภาพสูง ราคาเริ่มต้น 750 บาท ',
        description:
          'ป้ายโรลอัพ (Roll Up) สีคมชัดคุณภาพสูง โครงอะลูมิเนียม แข็งแรง ติดตั้งง่าย เก็บง่าย ราคาเริ่มต้น 750 บาท ฟรีค่าจัดส่ง สอบถามรายละเอียดเพิ่มเติมได้',
      };
    case '4':
      return {
        title: 'ป้ายแสตนดี้ราคาถูกเริ่มต้น 340 บาท พร้อมขาตั้ง เวลาพิมพ์ 3 วัน',
        description:
          'รับพิมพ์ป้ายแสตนดี้เริ่นต้น 340 บาท แก้ไข ArtWork ให้ฟรีส่งฟรีพร้อมส่วนลด 5% ใช้เวลาผลิต 3 วัน',
      };
    case '9':
      return {
        title: 'ทำป้ายตั้งโต๊ะสามเหลี่ยม ขนาด A4 ราคาเริ่มต้น 40 บาท',
        description:
          'บริการรับทำป้ายตั้งโต๊ะ เต้นท์การ์ดสามเหลี่ยม ขนาด A3, A4, A5 ราคาเริ่มต้น 40 บาทจำนวน 50 ชิ้น พร้อมใช้งาน',
      };
    default:
      return {
        title: 'GET PRINT & PRESS บริการพิมพ์สื่อส่งเสริมการขายครบวงจร ทั้งออกแบบ ผลิตและจัดส่ง.',
        description:
          'โรงพิมพ์สื่อส่งเสริมการขาย บริการงานพิมพ์ที่ครบวงจรทั้งป้ายตั้งพื้น ป้ายตั้งโต๊ะ ป้าบ Roll Up ป้าย X-Stand ป้าย Backdrop',
      };
  }
}

const ProductDetailPage = async ({ params }: Props) => {
  let res;

  try {
    const response = await requestGetParams(URL_PRODUCT, params.slug);

    if (!response.status) {
      notFound();
    }

    res = response;
  } catch (error) {
    return null;
  }

  return (
    <Box bgcolor={'white.main'}>
      <DetailSection {...res.result.productDetails[0]} />
      <HowToOrder
        isShowHowTo={true}
        isShowProcessBuy={false}
        showHowToTop={0}
        showHowToDown={76}
        showProcessBuyTop={0}
        showProcessBuyDown={0}
      />
      <DetailRecommend recommendList={res.result.productRecommend} />
    </Box>
  );
};

export default ProductDetailPage;

export const dynamic = 'force-dynamic';
