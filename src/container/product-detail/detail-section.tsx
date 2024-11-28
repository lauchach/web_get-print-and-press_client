import InterestProduct from '@/components/common/interest-product';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Image } from 'antd';
import parse from 'html-react-parser';
import DetailExample from './detail-example';
import DetailProduct from './detail-product';
import DetailProductType1 from './detail-product-type-1';
import DetailPromotion from './detail-promotion';
import DetailTextProduct4 from './detail-text-product4';
import DetailTextProduct9 from './detail-text-product9';

export type ProductImage = {
  id: number;
  imagePath: string;
  googleImage: string;
};

type ProductOnBlog = {
  BlogKnowledge: {
    BlogKnowledgeCover: {
      id: number;
      imagePath: string;
      googleImage: string;
      blogId: number;
    };
  };
};

type Props = {
  id: number;
  title: string;
  subTitle: string;
  ProductAdvertImage: ProductImage;
  ProductPromotionGallery: ProductImage[];
  ProductDetailGalley: ProductImage[];
  ProductExampleGallery: ProductImage[];
  ProductOnBlog: ProductOnBlog[];
};

const DetailSection = (props: Props) => {
  const {
    id,
    title,
    subTitle,
    ProductAdvertImage,
    ProductPromotionGallery,
    ProductDetailGalley,
    ProductExampleGallery,
    ProductOnBlog,
  } = props;

  return (
    <div>
      <Image
        alt={title}
        src={ProductAdvertImage.googleImage}
        preview={false}
        width="100%"
        style={{ height: 'auto' }}
      />
      <Container maxWidth="lg">
        {subTitle.length > 0 && (
          <Box mt={{ xs: 2, sm: 4, md: 6 }}>
            {/* <TitleField title={parse(subTitle)} /> */}
            <div className="detail-subtext">{parse(subTitle)}</div>
          </Box>
        )}

        {ProductPromotionGallery.length > 0 && (
          <DetailPromotion
            promotionList={ProductPromotionGallery}
            title="โปรโมชั่น ขายดี!!!"
            alt={`โปรโมชั่น ${title}`}
            id={id}
          />
        )}

        <InterestProduct title="สามารถสอบถามรายระเอียด ราคาได้ทันทีไม่มีค่าใช้จ่าย" />
        {id == 9 && <DetailTextProduct9 />}
        {ProductDetailGalley.length > 0 && id != 1 && (
          <DetailProduct detailList={ProductDetailGalley} alt={`รายละเอียด ${title}`} id={id} />
        )}
        {ProductDetailGalley.length > 0 && id == 1 && (
          <DetailProductType1 detailList={ProductDetailGalley} alt={`รายละเอียด ${title}`} id={id} />
        )}
        {id == 4 && <DetailTextProduct4 />}
        {ProductExampleGallery.length > 0 && (
          <DetailExample
            productExample={ProductExampleGallery}
            alt={`ตัวอย่างผลงาน ${title}`}
            id={id}
          />
        )}
        {/* {ProductOnBlog.length > 0 && <ProductTips blogLists={ProductOnBlog} id={id} />} */}
        <InterestProduct title="สามารถสอบถามรายระเอียด ราคาได้ทันทีไม่มีค่าใช้จ่าย" />
      </Container>
    </div>
  );
};

export default DetailSection;
