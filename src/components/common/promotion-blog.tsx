import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Image } from 'antd';
import Link from 'next/link';
import ImageLoading from './image-loading';
import TitleField from './title-field';

type Props = {
  promotionList: PropList[];
};

type PropList = {
  productId: number;
  title: string;
  promotionId: number;
  imagePath: string;
  googleImage: string;
};

const PromotionBlog = (props: Props) => {
  const { promotionList } = props;
  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <Box display={'flex'} flexDirection={'column'} gap={2}>
        <TitleField title={'โปรโมชั่น ขายดี!!!'} />
        <Grid container mx="auto" rowSpacing={2}>
          {promotionList.length > 1 &&
            promotionList.map((promo, index) => {
              return (
                <Grid key={index} item xs={12} md={4} p={1} mx="auto">
                  {/* <Link href={`/product/${promo.productId}`}> */}
                  <Box
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    position={'relative'}
                  >
                    {/* <Image
                        alt={promo.title}
                        src={promo.googleImage}
                        preview={false}
                        className="image-advertise"
                        style={{
                          borderRadius: 16,
                          width: '100%',
                          height: 'auto',
                          maxHeight: 352,
                          objectFit: 'cover',
                        }}
                      /> */}
                    <ImageLoading
                      alt={`โปรโมชั่นของ ${promo.title}`}
                      src={promo.googleImage}
                      // preview={false}
                      // className="image-advertise"
                      style={{
                        borderRadius: 16,
                        width: '100%',
                        height: '100%',
                        maxHeight: 352,
                        objectFit: 'contain',
                      }}
                    />
                  </Box>
                  {/* </Link> */}
                </Grid>
              );
            })}
          {promotionList.length < 2 &&
            promotionList.map((promo, index) => {
              return (
                <Grid key={index} item xs={12} mx="auto">
                  <Link href={`/product/${promo.productId}`}>
                    <Box
                      width="100%"
                      height="100%"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        alt={`โปรโมชั่นของ ${promo.title}`}
                        src={promo.googleImage}
                        preview={false}
                        className="image-advertise"
                        style={{
                          borderRadius: 16,
                          width: '100%',
                          height: 'auto',
                          maxHeight: 419,
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                  </Link>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </Container>
  );
};

export default PromotionBlog;
